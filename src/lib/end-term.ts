// End Term previous-year papers: lookups for the /pyqs/end-term pages.
// Server-side only. The question data is large, so client components get
// one paper as a prop instead of importing this module.

import { END_TERM_SUBJECTS, endTermPapers, type EndTermLevel } from "./data/end-term";
import { getSubject } from "./content";
import type { QualifierMock } from "./types";

export { END_TERM_SUBJECTS, endTermPapers };

export const END_TERM_LEVELS: { slug: EndTermLevel; name: string; description: string }[] = [
  { slug: "foundation", name: "Foundation", description: "Semester I and II courses." },
  { slug: "diploma-programming", name: "Diploma in Programming", description: "Databases, algorithms, app development and systems." },
  { slug: "diploma-data-science", name: "Diploma in Data Science", description: "Machine learning, business data and data tools." },
  { slug: "degree", name: "BS Degree", description: "Degree-level core and electives." },
];

export const getEndTermPaper = (slug: string) => endTermPapers.find((p) => p.slug === slug);

export const endTermPapersFor = (subjectSlug: string) => endTermPapers.filter((p) => p.sections[0].subjectSlug === subjectSlug);

/** Subjects with their papers, grouped by level, in curriculum order. */
export const endTermGroups = END_TERM_LEVELS.map((level) => ({
  ...level,
  subjects: END_TERM_SUBJECTS.filter((s) => s.level === level.slug).map((s) => ({ ...s, papers: endTermPapersFor(s.slug) })),
})).filter((g) => g.subjects.length > 0);

/** Distinct exam sittings (date + session), newest first. */
export const endTermSittings = [...new Map(endTermPapers.map((p) => [`${p.endTerm!.date}-${p.endTerm!.session}`, p.endTerm!])).values()].sort(
  (a, b) => b.date.localeCompare(a.date) || a.session.localeCompare(b.session),
);

export const endTermQuestionCount = endTermPapers.reduce((n, p) => n + p.sections[0].questions.length, 0);

/** The next paper of the same course, for the "take another paper" button on the result page. */
export function nextEndTermPaper(mock: QualifierMock) {
  const same = endTermPapersFor(mock.sections[0].subjectSlug);
  const next = same[(same.findIndex((p) => p.slug === mock.slug) + 1) % same.length];
  return next && next.slug !== mock.slug ? { slug: next.slug, title: next.title, endTerm: next.endTerm } : undefined;
}

/** Course page link, only for courses BTechi has a page for. */
export const reviseHref = (subjectSlug: string) => (getSubject(subjectSlug) ? `/subjects/${subjectSlug}` : undefined);

export const formatSittingDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
