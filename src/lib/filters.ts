import type { Filter } from "@/components/filter-bar";
import { getSubject, programs, subjects } from "./content";

export type Params = Record<string, string | string[] | undefined>;

export const param = (p: Params, key: string) => {
  const v = p[key];
  return (Array.isArray(v) ? v[0] : v) || undefined;
};

/** Level → Course → Unit cascade used by Notes, Videos, PYQs and Subjects. */
export function academicFilters(p: Params, { units = true, subject: withSubject = true } = {}): Filter[] {
  const program = param(p, "program");
  const level = param(p, "level");
  const subject = param(p, "subject");

  const levels = programs.filter((x) => !program || x.slug === program).flatMap((x) => x.levels);
  const uniqueLevels = [...new Map(levels.map((l) => [l.slug, l])).values()];
  const pool = subjects.filter((s) => (!program || s.programSlug === program) && (!level || s.level === level));
  const subj = subject ? getSubject(subject) : undefined;

  const filters: Filter[] = [];
  // Only one program today; the filter appears automatically when more are added.
  if (programs.length > 1)
    filters.push({
      name: "program",
      label: "Program",
      options: programs.map((x) => ({ value: x.slug, label: x.name })),
      resets: ["level", "subject", "unit"],
    });
  filters.push({
    name: "level",
    label: "Level",
    options: uniqueLevels.map((l) => ({ value: l.slug, label: l.short })),
    resets: ["subject", "unit"],
  });
  if (withSubject)
    filters.push({
      name: "subject",
      label: "Course",
      options: pool.map((s) => ({ value: s.slug, label: s.code ? `${s.code} · ${s.name}` : s.name })),
      resets: ["unit"],
    });
  if (units && subj && subj.units.length)
    filters.push({
      name: "unit",
      label: "Week",
      options: subj.units.map((u) => ({ value: u.id, label: `Week ${u.number}: ${u.title}` })),
    });
  return filters;
}

/** True when a subject passes the program/level/subject filters in `p`. */
export function matchesAcademic(subjectSlug: string, p: Params) {
  const s = getSubject(subjectSlug);
  if (!s) return false;
  const program = param(p, "program");
  const level = param(p, "level");
  const subject = param(p, "subject");
  return (!program || s.programSlug === program) && (!level || s.level === level) && (!subject || s.slug === subject);
}
