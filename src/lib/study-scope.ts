// Narrows server-rendered lists to the courses in the visitor's study profile.
// The profile reaches the server as a cookie (components/study-plan-sync.tsx);
// ?scope=all on a list shows every course again. Server-side only.

import { cookies } from "next/headers";
import { param, type Params } from "./filters";
import type { PyqLevel } from "./pyq-urls";
import { sortCourses } from "./study-courses";
import { PLAN_COOKIE, decodePlan } from "./study-plan";

export type StudyScope = {
  /** The visitor's courses; empty without a study profile. */
  courses: string[];
  level?: PyqLevel;
  /** They picked "All courses" (?scope=all). */
  showAll: boolean;
};

export async function getStudyScope(sp: Params): Promise<StudyScope> {
  const plan = decodePlan((await cookies()).get(PLAN_COOKIE)?.value);
  return { courses: plan ? sortCourses(plan.subjects) : [], level: plan?.level, showAll: param(sp, "scope") === "all" };
}

export type ScopedList<T> = {
  items: T[];
  /** How many entries are the visitor's courses, out of how many in all. */
  mine: number;
  all: number;
  /** True when `items` holds only the visitor's courses. */
  narrowed: boolean;
};

/**
 * The visitor's courses out of `list`, unless they asked for every course. A
 * list holding none of their courses is shown whole: an empty page helps no one.
 */
export function narrow<T>(scope: StudyScope, list: T[], slugsOf: (item: T) => string | string[]): ScopedList<T> {
  const mine = list.filter((x) => [slugsOf(x)].flat().some((s) => scope.courses.includes(s)));
  const narrowed = mine.length > 0 && !scope.showAll;
  return { items: narrowed ? mine : list, mine: mine.length, all: list.length, narrowed };
}

/** Hrefs for the "Your courses / All courses" switch, keeping the page's other filters. */
export function scopeLinks(path: string, sp: Params) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) if (typeof v === "string" && k !== "scope" && k !== "page") q.set(k, v);
  const mine = q.size ? `${path}?${q}` : path;
  q.set("scope", "all");
  return { mine, all: `${path}?${q}` };
}

/** `href`, still showing every course when that's what the visitor picked. */
export const keepScope = (href: string, scope: StudyScope) => (scope.showAll ? `${href}${href.includes("?") ? "&" : "?"}scope=all` : href);
