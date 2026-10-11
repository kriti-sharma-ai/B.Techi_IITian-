// Every course a student can add to their study profile (lib/study-plan.ts).

import { getSubject, subjectPlacement, subjects } from "./content";
import { QUALIFIER_SUBJECTS } from "./data/qualifier-meta";
import { PAPER_SUBJECTS } from "./data/paper-subjects";
import { DS_GROUP } from "./end-term";
import { pyqLevelOf, type PyqLevel } from "./pyq-urls";

export type StudyCourse = {
  slug: string;
  name: string;
  code?: string;
  level: PyqLevel;
  /** Heading the course is listed under, e.g. "Core courses". */
  group: string;
  /** False for BS in Data Science courses, which have past papers here but no course page. */
  inCurriculum: boolean;
  /** Has Qualifier, quiz or End Term papers in the exam portal. */
  hasPapers: boolean;
};

const hasPapers = (slug: string) => PAPER_SUBJECTS.some((e) => e.slug === slug) || (QUALIFIER_SUBJECTS as readonly string[]).includes(slug);

/** BTechi's curriculum in order, then the BS in Data Science courses that have papers here, grouped as on the PYQ hub. */
export const studyCourses: StudyCourse[] = [
  ...subjects.map((s): StudyCourse => {
    const { level, group } = subjectPlacement(s);
    return {
      slug: s.slug,
      name: s.name,
      code: s.code,
      level: s.level as PyqLevel,
      group: group?.name ?? `${level.short} courses`,
      inCurriculum: true,
      hasPapers: hasPapers(s.slug),
    };
  }),
  ...PAPER_SUBJECTS.filter((e) => !getSubject(e.slug)).map(
    (e): StudyCourse => ({ slug: e.slug, name: e.name, level: pyqLevelOf(e.slug), group: DS_GROUP[e.level], inCurriculum: false, hasPapers: true }),
  ),
];

export const getStudyCourse = (slug: string) => studyCourses.find((c) => c.slug === slug);

/** Known slugs only, in catalogue order; drops courses removed since a profile was saved. */
export function sortCourses(slugs: Iterable<string>) {
  const picked = new Set(slugs);
  return studyCourses.filter((c) => picked.has(c.slug)).map((c) => c.slug);
}
