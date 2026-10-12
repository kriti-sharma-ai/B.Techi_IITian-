// Papers grouped by IITM term (January, May, September), for the landing chart and /pyqs/term/<slug>.
//
//   /pyqs/term/may-2025      every paper sat in the May 2025 term, all levels and exams
//
// A paper's term is `term` on its summary: the term of an End Term or quiz sitting, or the
// qualifier's own month ("May 2024").

import type { CoursePyqs, PaperSummary } from "./pyq-index";

const MONTHS = ["January", "May", "September"] as const;
export type TermMonth = (typeof MONTHS)[number];

export type PyqTerm = {
  slug: string;
  name: string;
  year: number;
  month: TermMonth;
  /** Papers of this term, each with its course: in course order, newest sitting first within a course. */
  papers: (PaperSummary & { course: CoursePyqs })[];
};

export const pyqTermHref = (slug: string) => `/pyqs/term/${slug}`;

function parseTerm(term?: string) {
  const m = term?.match(/(January|May|September)\s+(\d{4})/);
  if (!m) return null;
  const month = m[1] as TermMonth;
  const year = Number(m[2]);
  return { month, year, name: `${month} ${year}`, slug: `${month.toLowerCase()}-${year}`, order: year * 10 + MONTHS.indexOf(month) };
}

/** Every term that has papers, oldest first. */
export function pyqTerms(courses: CoursePyqs[]): PyqTerm[] {
  const terms = new Map<string, PyqTerm & { order: number }>();
  const courseOrder = new Map(courses.map((c, i) => [c.slug, i]));
  for (const course of courses)
    for (const p of course.papers) {
      const t = parseTerm(p.term);
      if (!t) continue;
      const entry = terms.get(t.slug) ?? { slug: t.slug, name: t.name, year: t.year, month: t.month, order: t.order, papers: [] };
      entry.papers.push({ ...p, course });
      terms.set(t.slug, entry);
    }
  return [...terms.values()]
    .sort((a, b) => a.order - b.order)
    .map(({ order: _, ...t }) => ({
      ...t,
      papers: t.papers.sort(
        (a, b) => courseOrder.get(a.course.slug)! - courseOrder.get(b.course.slug)! || b.sortKey.localeCompare(a.sortKey),
      ),
    }));
}
