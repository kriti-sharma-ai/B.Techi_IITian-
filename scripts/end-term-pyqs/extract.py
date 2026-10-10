"""Extract IITM BS end-term question papers (combined multi-subject PDFs) into JSON.

Usage: python -I extract.py <pdf> <sitting-key> <out-json> <image-root>
  sitting-key: <mon>-<year>-<fn|an>, e.g. dec-2024-fn (add new sittings to SITTINGS in gen_ts.py).
Images go to <image-root>/<paper-slug>/..., referenced as /pyq/<paper-slug>/<file>.
Correct options are the green (#008000) ones; numerical keys are the green "Possible Answers".
Needs PyMuPDF and Pillow (pip install pymupdf pillow).

Then: python -I gen_ts.py <out-json-dir> <repo-root>   (writes src/lib/data/end-term/*.ts)
      copy <image-root>/* into public/pyq/
      python -I validate.py checks each paper's marks against the paper's declared section marks.
"""
import json, re, sys
import pymupdf

GREEN, RED = 0x008000, 0xFF0000
OPT_ID = re.compile(r"^\s*(\d{10,})\.\s*")
QNUM = re.compile(r"Question Number\s*:\s*(\d+)\s+Question Id\s*:\s*(\d+)\s+Question Type\s*:\s*(\w+)")
COMP = re.compile(r"Question Id\s*:\s*(\d+)\s+Question Type\s*:\s*COMPREHENSION")
DROP_BODY = re.compile(
    r"^(Response Type|Evaluation Required For SA|Show Word Count|Answers Type|Text Areas|Answers Case Sensitive|"
    r"Possible Answers|Question Label|Correct Marks|Wrong Marks|Max\. Selectable|Question Numbers|Allowed\s*:|"
    r"Sub Question Shuffling|Group Comprehension|Question Pattern Type|Options\s*:|Sub questions)"
)
ORDINALS = {"th", "st", "nd", "rd"}


def span_color(spans):
    c = [s["color"] for s in spans if s["text"].strip()]
    return max(set(c), key=c.count) if c else 0


def page_elements(doc, pno):
    page = doc[pno]
    els = []
    for b in page.get_text("dict", flags=pymupdf.TEXTFLAGS_DICT & ~pymupdf.TEXT_PRESERVE_IMAGES)["blocks"]:
        if b["type"] != 0:
            continue
        for l in b["lines"]:
            spans = [s for s in l["spans"]]
            if not spans:
                continue
            base = max(spans, key=lambda s: len(s["text"].strip()))
            text = ""
            for s in spans:
                t = s["text"]
                if s["size"] < base["size"] - 1 and t.strip():
                    raised = s["bbox"][3] < base["bbox"][3] - 1.5
                    lowered = s["bbox"][1] > base["bbox"][1] + 1.5
                    if raised and t.strip() not in ORDINALS:
                        t = "^" + t.strip() if len(t.strip()) == 1 else "^(" + t.strip() + ")"
                    elif lowered:
                        t = "_" + t.strip() if len(t.strip()) == 1 else "_(" + t.strip() + ")"
                text += t
            x0, y0, x1, y1 = l["bbox"]
            els.append({
                "kind": "text", "page": pno, "x0": x0, "y0": y0, "x1": x1, "y1": y1, "text": text,
                "color": span_color(spans), "bold": "Bold" in base["font"], "size": base["size"],
            })
    for info in page.get_image_info(xrefs=True):
        x0, y0, x1, y1 = info["bbox"]
        if info["width"] == 16 and info["height"] == 16 and 116 < x0 < 122:  # correct / incorrect tick icons
            continue
        if info["xref"] == 0:
            continue
        els.append({"kind": "img", "page": pno, "x0": x0, "y0": y0, "x1": x1, "y1": y1, "xref": info["xref"],
                    "w": info["width"], "h": info["height"]})
    return els


def rows_of(els):
    """Group elements into visual rows (vertical overlap), each sorted left to right."""
    els = sorted(els, key=lambda e: (e["y0"] + e["y1"]) / 2)
    rows = []
    for e in els:
        placed = False
        for r in rows[-3:]:
            ov = min(r["y1"], e["y1"]) - max(r["y0"], e["y0"])
            h = min(r["y1"] - r["y0"], e["y1"] - e["y0"])
            if h > 0 and ov / h > 0.5:
                r["els"].append(e)
                r["y0"], r["y1"] = min(r["y0"], e["y0"]), max(r["y1"], e["y1"])
                placed = True
                break
        if not placed:
            rows.append({"y0": e["y0"], "y1": e["y1"], "els": [e]})
    out = []
    for r in sorted(rows, key=lambda r: r["y0"]):
        r["els"].sort(key=lambda e: e["x0"])
        r["text"] = "".join(e["text"] for e in r["els"] if e["kind"] == "text").strip()
        r["x0"] = min(e["x0"] for e in r["els"])
        r["x1"] = max(e["x1"] for e in r["els"])
        r["imgs"] = [e for e in r["els"] if e["kind"] == "img"]
        r["page"] = r["els"][0]["page"]
        texts = [e for e in r["els"] if e["kind"] == "text" and e["text"].strip()]
        r["color"] = texts[0]["color"] if texts else 0
        r["bold"] = bool(texts) and all(e["bold"] for e in texts)
        r["title"] = any(e["kind"] == "text" and e["size"] >= 17 for e in r["els"])
        out.append(r)
    return out


def parse(pdf):
    doc = pymupdf.open(pdf)
    rows = []
    for pno in range(doc.page_count):
        rows.extend(rows_of(page_elements(doc, pno)))

    sections = []
    sec = None
    q = None        # current question
    comp = None     # current comprehension: {"rows": [...], "range": (a, b)}
    mode = None     # header | body | options | answers | comp-header | comp-body | skip
    pending_section_meta = False

    def finish_q():
        nonlocal q
        if q is not None and sec is not None:
            sec["questions"].append(q)
        q = None

    for r in rows:
        t = r["text"]
        if r["title"] and not r["imgs"]:
            finish_q()
            comp = None
            sec = {"name": t, "questions": []}
            sections.append(sec)
            mode = "skip"
            continue
        if sec is None:
            continue
        # Section / sub-section metadata column (labels at x≈21, values at x≈330).
        if not r["imgs"] and r["x0"] < 22.5:
            continue
        if not r["imgs"] and r["x0"] > 300 and mode in ("skip",):
            continue
        m = QNUM.search(t)
        if m:
            finish_q()
            num = int(m.group(1))
            in_comp = comp is not None and comp["range"][0] <= num <= comp["range"][1]
            if not in_comp:
                comp = None
            q = {"num": num, "id": m.group(2), "type": m.group(3), "marks": None, "body": [], "options": [],
                 "answers": [], "answerType": None, "response": None, "comp": comp if in_comp else None}
            mode = "header"
            continue
        if COMP.search(t):
            finish_q()
            comp = {"id": COMP.search(t).group(1), "rows": [], "range": (0, 10 ** 9)}
            mode = "comp-header"
            continue
        if mode == "comp-header":
            mm = re.search(r"Question Numbers\s*:\s*\((\d+)\s*to\s*(\d+)\)", t)
            if mm:
                comp["range"] = (int(mm.group(1)), int(mm.group(2)))
            if t.startswith("Question Label"):
                mode = "comp-body"
            continue
        if mode == "comp-body":
            if t.startswith("Sub questions"):
                mode = "skip"
                continue
            comp["rows"].append(r)
            continue
        if q is None:
            continue
        if mode == "header":
            mm = re.search(r"Correct Marks\s*:\s*([\d.]+)", t)
            if mm:
                q["marks"] = float(mm.group(1))
            if t.startswith("Question Label"):
                mode = "body"
            continue
        if mode == "body":
            if t.startswith("Options :") or t.startswith("Options:"):
                mode = "options"
                continue
            mm = re.match(r"Response Type\s*:\s*(\w+)", t)
            if mm:
                q["response"] = mm.group(1)
                mode = "sa-meta"
                continue
            q["body"].append(r)
            continue
        if mode == "sa-meta":
            mm = re.match(r"Answers Type\s*:\s*(\w+)", t)
            if mm:
                q["answerType"] = mm.group(1)
            if re.match(r"Answers Case Sensitive\s*:\s*Yes", t):
                q["caseSensitive"] = True
            if t.startswith("Possible Answers"):
                mode = "answers"
            continue
        if mode == "answers":
            if r["color"] == GREEN and t:
                q["answers"].append(t)
            continue
        if mode == "options":
            mm = OPT_ID.match(t) if r["els"][0]["kind"] == "text" else None
            if mm:
                first = r["els"][0]
                q["options"].append({"correct": first["color"] == GREEN, "rows": [r], "strip": mm.group(0)})
                continue
            if q["options"]:
                q["options"][-1]["rows"].append(r)
            continue
    finish_q()
    return doc, sections


# ───────────── rendering to text + images ─────────────

class Images:
    def __init__(self, doc, root, slug):
        self.doc, self.root, self.slug = doc, root, slug
        self.saved = {}

    def save(self, el, name):
        key = el["xref"]
        if key in self.saved:
            return self.saved[key]
        import os
        os.makedirs(f"{self.root}/{self.slug}", exist_ok=True)
        pix = pymupdf.Pixmap(self.doc, el["xref"])
        smask = None
        try:
            smask = self.doc.xref_get_key(el["xref"], "SMask")
        except Exception:
            pass
        if smask and smask[0] == "xref":
            try:
                mask = pymupdf.Pixmap(self.doc, int(smask[1].split()[0]))
                pix = pymupdf.Pixmap(pix, mask)
            except Exception:
                pass
        if pix.colorspace is not None and pix.colorspace.n not in (1, 3):
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        from PIL import Image
        import io
        im = Image.open(io.BytesIO(pix.tobytes("png")))
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
            bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
            im = Image.alpha_composite(bg, im).convert("RGB")
        elif im.mode not in ("RGB", "L"):
            im = im.convert("RGB")
        buf = io.BytesIO()
        im.convert("RGB").save(buf, "WEBP", quality=82, method=6)
        data, ext = buf.getvalue(), "webp"
        fname = f"{name}.{ext}"
        with open(f"{self.root}/{self.slug}/{fname}", "wb") as fh:
            fh.write(data)
        w = round((el["x1"] - el["x0"]) * 4 / 3)
        h = round((el["y1"] - el["y0"]) * 4 / 3)
        ref = f"![Figure](/pyq/{self.slug}/{fname}#{w}x{h})"
        self.saved[key] = ref
        return ref


def render_rows(rows, images, name, strip_first=None):
    """Rows -> text with inline figures. Wrapped lines are joined with a space."""
    parts = []
    k = 0
    prev_right = None
    for i, r in enumerate(rows):
        for e in r["els"]:
            if e["kind"] == "img":
                k += 1
                parts.append(("img", images.save(e, f"{name}-{k}")))
                prev_right = None
            else:
                txt = e["text"]
                if i == 0 and strip_first and txt.lstrip().startswith(strip_first.strip()):
                    txt = txt.lstrip()[len(strip_first.strip()):]
                if not txt.strip():
                    continue
                parts.append(("text", txt, e["x0"], e["x1"], i))
    # Assemble.
    out = ""
    last = None
    for p in parts:
        if p[0] == "img":
            out = out.rstrip() + "\n\n" + p[1] + "\n\n"
            last = None
            continue
        _, txt, x0, x1, row = p
        if last is None:
            out += txt.strip() if out.endswith("\n") or not out else " " + txt.strip()
        elif last[2] == row:
            out += txt if (txt.startswith(" ") or out.endswith(" ")) else " " + txt
        else:
            wrapped = last[1] > 500
            out = out.rstrip() + (" " if wrapped else "\n") + txt.strip()
        last = (txt, x1, row)
    out = re.sub(r"[ \t]+\n", "\n", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    out = re.sub(r"[  ]{2,}", " ", out)
    return out.strip()


SUBJECT_CONFIRM = re.compile(r"THIS IS QUESTION PAPER FOR THE SUBJECT", re.I)


def num(s):
    try:
        v = float(s.replace(",", ""))
        return int(v) if v == int(v) and "." not in s else v
    except ValueError:
        return None


def build(pdf, sitting, image_root, slug_of):
    doc, sections = parse(pdf)
    papers = []
    report = {"skipped": []}
    for sec in sections:
        slug = slug_of(sec["name"], sitting)
        if slug is None:
            report["skipped"].append(("section", sec["name"]))
            continue
        images = Images(doc, image_root, slug)
        qs = []
        comp_cache = {}
        n = 0
        for q in sec["questions"]:
            body_text_raw = " ".join(r["text"] for r in q["body"])
            if SUBJECT_CONFIRM.search(body_text_raw) or (q["marks"] == 0):
                continue
            n += 1
            item = {"n": n, "srcNum": q["num"], "marks": q["marks"]}
            item["prompt"] = render_rows(q["body"], images, f"q{n}")
            if q["comp"] is not None:
                cid = q["comp"]["id"]
                if cid not in comp_cache:
                    comp_cache[cid] = render_rows(q["comp"]["rows"], images, f"q{n}-passage")
                item["passage"] = comp_cache[cid]
            if q["type"] in ("MCQ", "MSQ"):
                opts = []
                for i, o in enumerate(q["options"]):
                    opts.append(render_rows(o["rows"], images, f"q{n}-opt{i + 1}", strip_first=o["strip"]))
                correct = [i for i, o in enumerate(q["options"]) if o["correct"]]
                item["options"] = opts
                item["correct"] = correct
                if not opts or not correct:
                    report["skipped"].append((slug, q["num"], "no options/answer"))
                    n -= 1
                    continue
                if q["type"] == "MSQ":
                    item["type"] = "multi"
                    item["answer"] = correct
                elif len(correct) == 1:
                    item["type"] = "mcq"
                    item["answer"] = correct[0]
                else:
                    # Several keys on a single-choice question: any of them is accepted.
                    item["type"] = "mcq"
                    item["answer"] = correct[0]
                    item["accept"] = correct
            elif q["type"] == "SA":
                if q["response"] != "Numeric":
                    if not q["answers"]:
                        report["skipped"].append((slug, q["num"], "alphanumeric without key"))
                        n -= 1
                        continue
                    item["type"] = "text"
                    item["answer"] = [a.strip() for a in q["answers"]]
                    if q.get("caseSensitive"):
                        item["caseSensitive"] = True
                    qs.append(item)
                    continue
                item["type"] = "numerical"
                a = q["answers"]
                at = q["answerType"]
                if at == "Range" and a:
                    mm = re.match(r"\s*(-?[\d.]+)\s*to\s*(-?[\d.]+)", a[0])
                    if not mm:
                        report["skipped"].append((slug, q["num"], f"bad range {a}"))
                        n -= 1
                        continue
                    lo, hi = float(mm.group(1)), float(mm.group(2))
                    item["answer"] = round((lo + hi) / 2, 6)
                    item["tolerance"] = round((hi - lo) / 2, 6)
                    item["range"] = [lo, hi]
                elif at == "Equal" and a:
                    v = num(a[0].strip())
                    if v is None:
                        report["skipped"].append((slug, q["num"], f"bad equal {a}"))
                        n -= 1
                        continue
                    item["answer"] = v
                elif at == "Set" and a:
                    vals = [num(x) for x in re.split(r"[,\s]+", " ".join(a)) if x]
                    vals = [v for v in vals if v is not None]
                    if not vals:
                        report["skipped"].append((slug, q["num"], f"bad set {a}"))
                        n -= 1
                        continue
                    item["answer"] = vals[0]
                    item["acceptValues"] = vals
                else:
                    report["skipped"].append((slug, q["num"], f"no answer {at} {a}"))
                    n -= 1
                    continue
            else:
                report["skipped"].append((slug, q["num"], f"type {q['type']}"))
                n -= 1
                continue
            qs.append(item)
        papers.append({"section": sec["name"], "slug": slug, "questions": qs})
    return papers, report


if __name__ == "__main__":
    pdf, sitting, out, image_root = sys.argv[1:5]
    sys.path.insert(0, __import__("os").path.dirname(__file__))
    from subjects import slug_for
    papers, report = build(pdf, sitting, image_root, slug_for)
    with open(out, "w") as fh:
        json.dump({"sitting": sitting, "papers": papers, "report": report}, fh, indent=1, ensure_ascii=False)
    print(sitting, len(papers), "papers", sum(len(p["questions"]) for p in papers), "questions", "skipped:", len(report["skipped"]))
    for s in report["skipped"]:
        print("  skip", s)
