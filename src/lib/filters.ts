import type { Filter } from "@/components/filter-bar";
import { getSubject, programs, subjects } from "./content";

export type Params = Record<string, string | string[] | undefined>;

export const param = (p: Params, key: string) => {
  const v = p[key];
  return (Array.isArray(v) ? v[0] : v) || undefined;
};

/** Program → Semester → Subject → Unit cascade used by Notes, Videos, PYQs and Practice. */
export function academicFilters(p: Params, { units = true, semester = true } = {}): Filter[] {
  const program = param(p, "program");
  const sem = param(p, "semester");
  const subject = param(p, "subject");

  const pool = subjects.filter(
    (s) => (!program || s.programSlug === program) && (!sem || String(s.semester) === sem),
  );
  const maxSem = Math.max(...programs.filter((x) => !program || x.slug === program).map((x) => x.semesters));
  const subj = subject ? getSubject(subject) : undefined;

  const filters: Filter[] = [
    {
      name: "program",
      label: "Program",
      options: programs.map((x) => ({ value: x.slug, label: x.name })),
      resets: ["subject", "unit", "semester"],
    },
  ];
  if (semester)
    filters.push({
      name: "semester",
      label: "Semester",
      options: Array.from({ length: maxSem }, (_, i) => ({ value: String(i + 1), label: `Semester ${i + 1}` })),
      resets: ["subject", "unit"],
    });
  filters.push({
    name: "subject",
    label: "Subject",
    options: pool.map((s) => ({ value: s.slug, label: s.name })),
    resets: ["unit"],
  });
  if (units)
    filters.push({
      name: "unit",
      label: "Unit",
      options: subj ? subj.units.map((u) => ({ value: u.id, label: `Unit ${u.number}: ${u.title}` })) : [],
    });
  return filters;
}

/** True when a subject passes the program/semester/subject filters in `p`. */
export function matchesAcademic(subjectSlug: string, p: Params) {
  const s = getSubject(subjectSlug);
  if (!s) return false;
  const program = param(p, "program");
  const sem = param(p, "semester");
  const subject = param(p, "subject");
  return (
    (!program || s.programSlug === program) &&
    (!sem || String(s.semester) === sem) &&
    (!subject || s.slug === subject)
  );
}
