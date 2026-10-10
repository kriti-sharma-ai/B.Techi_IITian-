// URLs for previous-year papers, one readable path per level, course and paper:
//
//   /pyqs                                                        all levels
//   /pyqs/foundation                                             one level
//   /pyqs/foundation/statistics-for-data-science-1               one course
//   /pyqs/foundation/statistics-for-data-science-1/end-term-aug-2025-forenoon
//   /pyqs/foundation/statistics-for-data-science-1/qualifier-may-2024
//
// Safe for client components: it only needs the small course list, never the question data.
// Redirects from earlier paper URLs live in next.config.ts.

import { END_TERM_SUBJECTS, type EndTermLevel } from "./data/end-term/subjects";
import type { QualifierMock } from "./types";

export type PyqLevel = "foundation" | "diploma" | "degree";

export const PYQ_LEVEL_SLUGS: PyqLevel[] = ["foundation", "diploma", "degree"];

export const isPyqLevel = (s: string): s is PyqLevel => (PYQ_LEVEL_SLUGS as string[]).includes(s);

const FROM_END_TERM_LEVEL: Record<EndTermLevel, PyqLevel> = {
  foundation: "foundation",
  "diploma-programming": "diploma",
  "diploma-data-science": "diploma",
  degree: "degree",
};

/** Level a course's papers are filed under. Qualifier-only courses are Foundation courses. */
export const pyqLevelOf = (subjectSlug: string): PyqLevel => {
  const s = END_TERM_SUBJECTS.find((x) => x.slug === subjectSlug);
  return s ? FROM_END_TERM_LEVEL[s.level] : "foundation";
};

export const pyqLevelHref = (level: PyqLevel) => `/pyqs/${level}`;

export const pyqCourseHref = (subjectSlug: string, level: PyqLevel = pyqLevelOf(subjectSlug)) => `/pyqs/${level}/${subjectSlug}`;

const MONTH_ABBR = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const SESSION_SLUG = { FN: "forenoon", AN: "afternoon" } as const;

/** Last URL segment of a single-course paper: end-term-aug-2025-forenoon or qualifier-may-2024. */
export function paperSegment(mock: Pick<QualifierMock, "slug" | "endTerm">) {
  if (mock.endTerm) {
    const [year, month] = mock.endTerm.date.split("-");
    return `end-term-${MONTH_ABBR[Number(month) - 1]}-${year}-${SESSION_SLUG[mock.endTerm.session]}`;
  }
  const term = qualifierTerm(mock.slug);
  return term ? `qualifier-${term.month}-${term.year}` : mock.slug;
}

const QUALIFIER_MONTHS: Record<string, "january" | "may" | "september"> = { january: "january", jan: "january", may: "may", september: "september", sep: "september" };

/** Qualifier PYQ slugs end in <month>-<year>; some data files abbreviate the month (english-1-jan-2024). */
export function qualifierTerm(slug: string) {
  const m = /-(january|jan|may|september|sep)-(\d{4})$/.exec(slug);
  return m ? { month: QUALIFIER_MONTHS[m[1]], year: m[2] } : undefined;
}

/** Where a paper is sat: single-course papers under their course, full qualifier mocks in the qualifier pack. */
export function paperHref(mock: Pick<QualifierMock, "slug" | "endTerm" | "sections">) {
  if (mock.sections.length > 1) return `/qualifier/${mock.slug}`;
  return `${pyqCourseHref(mock.sections[0].subjectSlug)}/${paperSegment(mock)}`;
}
