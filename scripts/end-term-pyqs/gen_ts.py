"""Generate src/lib/data/end-term/*.ts from the extracted JSON.

Usage: python -I gen_ts.py <out-json-dir> <repo-root>
"""
import json, os, re, sys, glob

sys.path.insert(0, os.path.dirname(__file__))
from subjects import SUBJECTS

SITTINGS = {
    "dec-2024": {"date": "2024-12-22", "label": "22 Dec 2024", "term": "September 2024"},
    "apr-2025": {"date": "2025-04-13", "label": "13 Apr 2025", "term": "January 2025"},
    "aug-2025": {"date": "2025-08-31", "label": "31 Aug 2025", "term": "May 2025"},
}
SESSION = {"fn": ("FN", "forenoon"), "an": ("AN", "afternoon")}
DURATION_MIN = 90


def clean_num(v):
    if isinstance(v, float) and v.is_integer():
        return int(v)
    return v


def fmt(v):
    v = clean_num(v)
    return str(v)


def camel(prefix):
    parts = re.split(r"[-]", prefix)
    s = parts[0] + "".join(p.capitalize() for p in parts[1:])
    return s + "EndTermPapers"


def question(slug, q):
    out = {"id": f"{slug}-q{q['n']}", "type": q["type"], "marks": clean_num(q["marks"])}
    if q.get("passage"):
        out["passage"] = q["passage"]
    out["prompt"] = q["prompt"]
    explanation = ""
    if q["type"] in ("mcq", "multi"):
        out["options"] = q["options"]
        out["answer"] = q["answer"]
    elif q["type"] == "numerical":
        out["answer"] = clean_num(q["answer"])
        if q.get("tolerance"):
            out["tolerance"] = clean_num(q["tolerance"])
        if q.get("range"):
            lo, hi = q["range"]
            explanation = f"Official answer key accepts any value from {fmt(lo)} to {fmt(hi)}."
        if q.get("acceptValues") and len(q["acceptValues"]) > 1:
            out["accepts"] = [clean_num(v) for v in q["acceptValues"]]
            explanation = "Official answer key accepts " + " or ".join(fmt(v) for v in q["acceptValues"]) + "."
    elif q["type"] == "text":
        out["answer"] = q["answer"]
        if q.get("caseSensitive"):
            out["caseSensitive"] = True
            explanation = "Case-sensitive: the answer must match exactly."
    out["explanation"] = explanation
    return out


def to_ts(value):
    s = json.dumps(value, indent=2, ensure_ascii=False)
    # Unquote simple object keys (keys always start a line in indent=2 output).
    return re.sub(r'^(\s*)"([A-Za-z]+)": ', r"\1\2: ", s, flags=re.M)


def main(out_dir, repo):
    by_subject = {}
    for f in sorted(glob.glob(f"{out_dir}/*.json")):
        d = json.load(open(f))
        key = d["sitting"]  # e.g. dec-2024-fn
        sit, sess = key.rsplit("-", 1)
        meta = SITTINGS[sit]
        for p in d["papers"]:
            prefix, subject_slug, name, short, level = SUBJECTS[p["section"]]
            code, word = SESSION[sess]
            paper = {
                "slug": p["slug"],
                "title": f"{short} End Term · {meta['label']} ({code})",
                "description": f"End Term paper from the {meta['term']} term, {word} session on {meta['label']}, with the official answer key.",
                "difficulty": "Standard",
                "durationMin": DURATION_MIN,
                "endTerm": {"date": meta["date"], "session": code, "term": meta["term"]},
                "sections": [{
                    "subjectSlug": subject_slug,
                    "title": name,
                    "short": short,
                    "questions": [question(p["slug"], q) for q in p["questions"]],
                }],
            }
            by_subject.setdefault(p["section"], []).append(paper)

    data_dir = f"{repo}/src/lib/data/end-term"
    os.makedirs(data_dir, exist_ok=True)
    index_imports, index_spread, subject_rows = [], [], []
    for section, (prefix, subject_slug, name, short, level) in SUBJECTS.items():
        papers = by_subject.get(section)
        if not papers:
            continue
        # Newest sitting first; forenoon before afternoon on the same day.
        papers.sort(key=lambda p: (p["endTerm"]["date"], p["endTerm"]["session"] == "FN"), reverse=True)
        var = camel(prefix)
        qn = sum(len(p["sections"][0]["questions"]) for p in papers)
        header = (
            'import type { QualifierMock } from "../../types";\n\n'
            f"// {name}: IIT Madras BS End Term papers ({len(papers)} papers, {qn} questions).\n"
            "// Questions, options and answer keys are reproduced from the official question papers.\n"
            "// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as\n"
            "// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.\n"
            "// Generated from the paper PDFs; edit with care.\n\n"
        )
        with open(f"{data_dir}/{prefix}.ts", "w") as fh:
            fh.write(header + f"export const {var}: QualifierMock[] = " + to_ts(papers) + ";\n")
        index_imports.append(f'import {{ {var} }} from "./{prefix}";')
        index_spread.append(f"  ...{var},")
        subject_rows.append(f'  {{ slug: "{subject_slug}", name: "{name}", short: "{short}", level: "{level}" }},')

    index = (
        'import type { QualifierMock } from "../../types";\n'
        + "\n".join(index_imports)
        + "\n\n"
        "// IIT Madras BS End Term previous-year papers, one single-course paper per subject per sitting.\n"
        "// Server-only: import through lib/end-term.ts so the question data stays out of client bundles.\n\n"
        "export type EndTermLevel = \"foundation\" | \"diploma-programming\" | \"diploma-data-science\" | \"degree\";\n\n"
        "export type EndTermSubject = { slug: string; name: string; short: string; level: EndTermLevel };\n\n"
        "/** Courses with End Term papers, in curriculum order. */\n"
        "export const END_TERM_SUBJECTS: EndTermSubject[] = [\n"
        + "\n".join(subject_rows)
        + "\n];\n\n"
        "export const endTermPapers: QualifierMock[] = [\n"
        + "\n".join(index_spread)
        + "\n];\n"
    )
    with open(f"{data_dir}/index.ts", "w") as fh:
        fh.write(index)
    total = sum(len(v) for v in by_subject.values())
    print("subjects", len(subject_rows), "papers", total)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
