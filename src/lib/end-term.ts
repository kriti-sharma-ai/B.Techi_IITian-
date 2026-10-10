// End Term previous-year papers: lookups for the PYQ index (lib/pyq-index.ts)
// and the paper pages under /pyqs/<level>/<course>/<paper>.
// Server-side only. The question data is large, so client components get
// one paper as a prop instead of importing this module.

import { END_TERM_SUBJECTS, endTermPapers } from "./data/end-term";
import { getSubject } from "./content";
import { paperHref } from "./pyq-urls";
import type { QualifierMock } from "./types";

export { END_TERM_SUBJECTS, endTermPapers };

export const getEndTermPaper = (slug: string) => endTermPapers.find((p) => p.slug === slug);

export const endTermPapersFor = (subjectSlug: string) => endTermPapers.filter((p) => p.sections[0].subjectSlug === subjectSlug);

/** The next paper of the same course, for the "take another paper" button on the result page. */
export function nextEndTermPaper(mock: QualifierMock) {
  const same = endTermPapersFor(mock.sections[0].subjectSlug);
  const next = same[(same.findIndex((p) => p.slug === mock.slug) + 1) % same.length];
  return next && next.slug !== mock.slug ? { title: next.title, href: paperHref(next) } : undefined;
}

/** Course page link, only for courses BTechi has a page for. */
export const reviseHref = (subjectSlug: string) => (getSubject(subjectSlug) ? `/subjects/${subjectSlug}` : undefined);

export const formatSittingDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
