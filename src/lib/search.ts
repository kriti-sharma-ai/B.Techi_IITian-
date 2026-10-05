import {
  books,
  getSubject,
  notes,
  pyqs,
  pyqTitle,
  questions,
  subjectContext,
  subjectName,
  subjects,
  videos,
} from "./content";

export type SearchCategory = "subjects" | "topics" | "notes" | "videos" | "books" | "questions" | "pyqs";

export type SearchDoc = {
  id: string;
  category: SearchCategory;
  title: string;
  subtitle: string;
  href: string;
  text: string;
};

export const categoryLabels: Record<SearchCategory, string> = {
  subjects: "Courses",
  topics: "Topics",
  notes: "Notes",
  videos: "Videos",
  books: "Books",
  questions: "Questions",
  pyqs: "PYQs",
};

function buildIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const s of subjects) {
    docs.push({
      id: s.slug,
      category: "subjects",
      title: s.name,
      subtitle: subjectContext(s.slug),
      href: `/subjects/${s.slug}`,
      text: `${s.name} ${s.code ?? ""} ${s.description ?? ""} ${s.level} ${s.group?.replace(/-/g, " ") ?? ""} ${s.kind}`,
    });
    for (const u of s.units)
      for (const t of u.topics)
        docs.push({
          id: `${s.slug}/${t.slug}`,
          category: "topics",
          title: t.title,
          subtitle: `${s.name} · Week ${u.number}`,
          href: `/subjects/${s.slug}/${t.slug}`,
          text: `${t.title} ${t.summary} ${u.title} ${s.name} week ${u.number}`,
        });
  }
  for (const n of notes)
    docs.push({
      id: n.id,
      category: "notes",
      title: n.title,
      subtitle: `${subjectName(n.subjectSlug)} · ${n.kind} · ${n.pages} pages`,
      href: `/notes/${n.id}`,
      text: `${n.title} ${n.description} ${subjectName(n.subjectSlug)} notes ${n.kind}`,
    });
  for (const v of videos)
    docs.push({
      id: v.id,
      category: "videos",
      title: v.title,
      subtitle: `${subjectName(v.subjectSlug)} · ${v.duration} · ${v.level}`,
      href: `/videos?subject=${v.subjectSlug}#${v.id}`,
      text: `${v.title} ${subjectName(v.subjectSlug)} video ${v.channel}`,
    });
  for (const b of books)
    docs.push({
      id: b.slug,
      category: "books",
      title: b.title,
      subtitle: b.authors.join(", "),
      href: `/books/${b.slug}`,
      text: `${b.title} ${b.authors.join(" ")} ${b.subjectSlugs.map(subjectName).join(" ")} book`,
    });
  for (const q of questions)
    docs.push({
      id: q.id,
      category: "questions",
      title: q.prompt,
      subtitle: `${subjectName(q.subjectSlug)} · ${q.difficulty}`,
      href: `/practice/session?subject=${q.subjectSlug}&topic=${q.topicSlug}`,
      text: `${q.prompt} ${q.context ?? ""} ${subjectName(q.subjectSlug)} ${q.topicSlug.replace(/-/g, " ")} question`,
    });
  for (const p of pyqs)
    docs.push({
      id: p.id,
      category: "pyqs",
      title: pyqTitle(p),
      subtitle: `${p.marks} marks · ${getSubject(p.subjectSlug) ? subjectContext(p.subjectSlug) : ""}`,
      href: `/pyqs/${p.id}`,
      text: `${pyqTitle(p)} pyq previous year paper ${p.topics.join(" ").replace(/-/g, " ")}`,
    });
  return docs;
}

let index: SearchDoc[] | null = null;

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");

/**
 * Small ranked keyword search: every query term must appear; title hits
 * outrank body hits. Good enough for the seed set — swap for Postgres
 * full-text search (see supabase/schema.sql) when the library grows.
 */
export function search(query: string): SearchDoc[] {
  index ??= buildIndex();
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  const scored: { doc: SearchDoc; score: number }[] = [];
  for (const doc of index) {
    const title = normalize(doc.title);
    const body = normalize(doc.text);
    let score = 0;
    let ok = true;
    for (const term of terms) {
      if (title.includes(term)) score += title.startsWith(term) ? 6 : 4;
      else if (body.includes(term)) score += 1;
      else {
        ok = false;
        break;
      }
    }
    if (ok) scored.push({ doc, score: score + (doc.category === "subjects" ? 2 : 0) });
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.doc);
}
