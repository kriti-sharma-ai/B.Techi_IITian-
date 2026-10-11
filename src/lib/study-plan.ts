// A student's study profile: their level and the courses they're taking. It
// lives in the store (lib/store.ts), synced to their account with the rest of
// their progress, and is mirrored into a cookie by components/study-plan-sync.tsx
// so server-rendered lists can show just those courses (lib/study-scope.ts).

import { isPyqLevel, type PyqLevel } from "./pyq-urls";

export type StudyPlan = {
  level: PyqLevel;
  /** Course slugs (see lib/study-courses.ts), in curriculum order. */
  subjects: string[];
  updatedAt: string;
};

export const PLAN_COOKIE = "btechi-plan";

// "foundation:mathematics-for-data-science-1.english-1". Slugs never contain ":" or ".", and neither needs escaping in a cookie.
export const encodePlan = (p: Pick<StudyPlan, "level" | "subjects">) => `${p.level}:${p.subjects.join(".")}`;

export function decodePlan(value: string | undefined): Pick<StudyPlan, "level" | "subjects"> | null {
  const m = value ? /^([a-z]+):([a-z0-9.-]*)$/.exec(value) : null;
  if (!m || !isPyqLevel(m[1])) return null;
  return { level: m[1], subjects: m[2].split(".").filter(Boolean) };
}
