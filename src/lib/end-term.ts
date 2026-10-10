// End Term previous-year papers: course list and formatting helpers. The
// papers themselves come from Supabase through lib/papers.ts
// (endTermPapersFor, getEndTermPaper, nextEndTermPaper).

import { END_TERM_SUBJECTS } from "./data/end-term/subjects";
import { getSubject } from "./content";

export { END_TERM_SUBJECTS };

/** Course page link, only for courses BTechi has a page for. */
export const reviseHref = (subjectSlug: string) => (getSubject(subjectSlug) ? `/subjects/${subjectSlug}` : undefined);

export const formatSittingDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
