"""Extract IITM BS quiz papers (combined multi-subject PDFs) into JSON.

Usage: python -I extract.py <sitting-key> <out-json> <image-root> <pdf>...
  sitting-key: quiz-<n>-<mon>-<year>-<fn|an>, e.g. quiz-1-oct-2025-an (add new sittings to SITTINGS in gen_ts.py).
  pdf: every combined paper of the sitting. The same course appears in many of them
       (Foundation, Diploma, Degree and Improvement papers); it is taken from the first
       PDF listed that has it, so list the Foundation, Diploma and Degree papers first.
Parsing and images work as in ../end-term-pyqs/extract.py (needs PyMuPDF and Pillow).

Then: python -I gen_ts.py <out-json-dir> <repo-root>   (writes src/lib/data/quiz/*.ts)
      copy <image-root>/* into public/pyq/
      python -I validate.py <out-json-dir> checks each paper's marks against its declared section marks.
"""
import importlib.util, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from subjects import PEN_AND_PAPER, SECTIONS  # noqa: E402

# The End Term extractor, loaded by path: both script folders have an extract.py and a subjects.py.
_spec = importlib.util.spec_from_file_location("end_term_extract", os.path.join(HERE, "..", "end-term-pyqs", "extract.py"))
_end_term = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_end_term)
build = _end_term.build


def main(sitting, out, image_root, pdfs):
    taken = {}  # course prefix -> PDF it was extracted from
    unknown = set()
    papers, skipped = [], []

    for pdf in pdfs:
        name = os.path.basename(pdf)

        def slug_of(section, _sitting):
            prefix = SECTIONS.get(section)
            if prefix is None:
                if section not in PEN_AND_PAPER and section != "Group I":
                    unknown.add(section)
                return None
            if prefix in taken:
                return None
            taken[prefix] = name
            return f"{prefix}-{sitting}"

        got, report = build(pdf, sitting, image_root, slug_of)
        for p in got:
            p["source"] = name
        papers.extend(got)
        skipped.extend(s for s in report["skipped"] if s[0] != "section")

    with open(out, "w") as fh:
        json.dump({"sitting": sitting, "papers": papers, "report": {"skipped": skipped}}, fh, indent=1, ensure_ascii=False)
    print(sitting, len(papers), "papers", sum(len(p["questions"]) for p in papers), "questions", "skipped:", len(skipped))
    for s in skipped:
        print("  skip", s)
    if unknown:
        print("  sections not in subjects.py:", sorted(unknown))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4:])
