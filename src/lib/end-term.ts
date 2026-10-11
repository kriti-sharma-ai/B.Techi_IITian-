// End Term previous-year papers: course list and formatting helpers. The
// papers themselves come from Supabase through lib/papers.ts
// (endTermPapersFor, getEndTermPaper, nextPastPaper).

import { END_TERM_SUBJECTS } from "./data/end-term/subjects";
import { getSubject } from "./content";

export { END_TERM_SUBJECTS };

/** Headings for BS in Data Science courses, which BTechi lists for their papers only. */
export const DS_GROUP: Record<(typeof END_TERM_SUBJECTS)[number]["level"], string> = {
  foundation: "BS in Data Science · Foundation courses",
  "diploma-programming": "BS in Data Science · Diploma in Programming",
  "diploma-data-science": "BS in Data Science · Diploma in Data Science",
  degree: "BS in Data Science · Degree courses",
};

/** Course page link, only for courses BTechi has a page for. */
export const reviseHref = (subjectSlug: string) => (getSubject(subjectSlug) ? `/subjects/${subjectSlug}` : undefined);

export const formatSittingDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
