import json,re,pymupdf,os,sys,glob
SRC={"dec-2024-fn":"IIT M FOUNDATION DIPLOMA FN EXAM QDF1 22 Dec 2024.pdf","dec-2024-an":"IIT M FOUNDATION DIPLOMA AN EXAM QDF3 22 Dec 2024.pdf","apr-2025-fn":"IIT M FOUNDATION FN EXAM QDF2 13 Apr 2025.pdf","apr-2025-an":"IIT M FOUNDATION AN EXAM QDF3 13 Apr 2025.pdf","aug-2025-fn":"IIT M FOUNDATION FN EXAM QDF1 31 Aug 2025.pdf","aug-2025-an":"IIT M FOUNDATION AN EXAM QDF3 31 Aug 2025.pdf"}
bad=0
for k,f in SRC.items():
    d=json.load(open(f"out/{k}.json"))
    doc=pymupdf.open(os.path.expanduser("~/Downloads/foundation-PYQ/"+f))
    txt="\n".join(p.get_text() for p in doc)
    decl={m.group(1).strip():float(m.group(2)) for m in re.finditer(r"\n([^\n]+)\nSection Id :.*?Section Marks :\n([\d.]+)", txt, re.S)}
    for p in d["papers"]:
        qs=p["questions"]; nums=[q["srcNum"] for q in qs]
        gaps=sorted(set(range(nums[0],nums[-1]+1))-set(nums)) if nums else "EMPTY"
        m=sum(q["marks"] for q in qs)
        empty=[q["n"] for q in qs if not q["prompt"].strip()]
        emptyopt=[q["n"] for q in qs if any(not o.strip() for o in q.get("options",[]))]
        flag = (m!=decl.get(p["section"])) or gaps or empty or emptyopt
        if flag: bad+=1
        print(f"{'!!' if flag else 'ok'} {k} {p['section']:22} q={len(qs):3} marks={m:g}/{decl.get(p['section'])} gaps={gaps} emptyPrompt={empty} emptyOpt={emptyopt}")
print("flagged",bad)
