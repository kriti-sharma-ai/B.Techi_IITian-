"""Check extracted quiz papers against the PDFs they came from.

Usage: python -I validate.py <out-json-dir> <pdf-dir>
Flags a paper when its marks differ from the section's declared "Section Marks", question
numbers have gaps, or a prompt or option came out empty.
"""
import glob, json, os, re, sys
import pymupdf


def declared_marks(pdf):
    txt = "\n".join(p.get_text() for p in pymupdf.open(pdf))
    # The section title can be followed by a blank line before "Section Id".
    return {m.group(1).strip(): float(m.group(2)) for m in re.finditer(r"\n([^\n]*\S[^\n]*)\n\s*Section Id :.*?Section Marks :\n([\d.]+)", txt, re.S)}


def main(out_dir, pdf_dir):
    bad = 0
    decl = {}
    for f in sorted(glob.glob(f"{out_dir}/*.json")):
        d = json.load(open(f))
        for p in d["papers"]:
            if p["source"] not in decl:
                decl[p["source"]] = declared_marks(os.path.join(pdf_dir, p["source"]))
            qs = p["questions"]
            nums = [q["srcNum"] for q in qs]
            gaps = sorted(set(range(nums[0], nums[-1] + 1)) - set(nums)) if nums else "EMPTY"
            marks = sum(q["marks"] for q in qs)
            want = decl[p["source"]].get(p["section"])
            empty = [q["n"] for q in qs if not q["prompt"].strip()]
            empty_opt = [q["n"] for q in qs if any(not o.strip() for o in q.get("options", []))]
            flag = marks != want or gaps or empty or empty_opt
            bad += bool(flag)
            print(f"{'!!' if flag else 'ok'} {p['slug']:42} q={len(qs):3} marks={marks:g}/{want} gaps={gaps} emptyPrompt={empty} emptyOpt={empty_opt}")
    print("flagged", bad)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
