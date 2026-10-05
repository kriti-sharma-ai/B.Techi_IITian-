// Course-player outline: the left-hand panel shown on every subject page.
// Every course runs for 12 weeks; each week lists its lessons followed by
// practice questions and a graded assignment, whether or not content exists yet.

import { assignments, books, forSubject, notes, pyqs, questions, videos } from "./content";
import type { Subject } from "./types";

export const WEEKS = 12;

export type OutlineKind = "page" | "lesson" | "video" | "practice" | "graded";

export type OutlineItem = {
  /** Value of `?item=` (subject page) or the topic slug (lesson page). */
  id: string;
  label: string;
  kind: OutlineKind;
  href: string;
  empty: boolean;
};

export type OutlineSection = { id: string; title: string; subtitle?: string; items: OutlineItem[] };

export const SUPPLEMENTARY = ["notes", "videos", "books", "pyqs", "practice"] as const;
export type Supplementary = (typeof SUPPLEMENTARY)[number];

export const weekItem = (n: number, part: "practice" | "graded") => `week-${n}-${part}`;

/** Parses `week-3-practice` → { week: 3, part: "practice" }. */
export function parseWeekItem(item: string) {
  const m = /^week-(\d{1,2})-(practice|graded)$/.exec(item);
  if (!m) return;
  const week = Number(m[1]);
  if (week < 1 || week > WEEKS) return;
  return { week, part: m[2] as "practice" | "graded" };
}

// Old `?tab=` links map onto outline items.
const LEGACY_TABS: Record<string, string> = { overview: "about", curriculum: "about", assignments: "about" };

export function resolveItem(item?: string, tab?: string) {
  const id = item ?? (tab ? (LEGACY_TABS[tab] ?? tab) : "about");
  if (id === "about" || (SUPPLEMENTARY as readonly string[]).includes(id) || parseWeekItem(id)) return id;
  return "about";
}

export const unitForWeek = (subject: Subject, week: number) => subject.units.find((u) => u.number === week);

export function courseOutline(subject: Subject): OutlineSection[] {
  const base = `/subjects/${subject.slug}`;
  const q = forSubject(questions, subject.slug);
  const a = forSubject(assignments, subject.slug);

  const weeks: OutlineSection[] = Array.from({ length: WEEKS }, (_, i) => {
    const n = i + 1;
    const unit = unitForWeek(subject, n);
    const lessons: OutlineItem[] = (unit?.topics ?? []).map((t) => ({
      id: t.slug,
      label: t.title,
      kind: "lesson",
      href: `${base}/${t.slug}`,
      empty: false,
    }));
    return {
      id: `week-${n}`,
      title: `Week ${n}`,
      subtitle: unit?.title,
      items: [
        ...lessons,
        {
          id: weekItem(n, "practice"),
          label: "Practice Questions",
          kind: "practice",
          href: `${base}?item=${weekItem(n, "practice")}`,
          empty: !unit || !q.some((x) => x.unitId === unit.id),
        },
        {
          id: weekItem(n, "graded"),
          label: "Graded Assignment",
          kind: "graded",
          href: `${base}?item=${weekItem(n, "graded")}`,
          empty: !unit || !a.some((x) => x.unitId === unit.id),
        },
      ],
    };
  });

  const counts: Record<Supplementary, number> = {
    notes: forSubject(notes, subject.slug).length,
    videos: forSubject(videos, subject.slug).length,
    books: books.filter((b) => b.subjectSlugs.includes(subject.slug)).length,
    pyqs: forSubject(pyqs, subject.slug).length,
    practice: q.length,
  };
  const supLabels: Record<Supplementary, [string, OutlineKind]> = {
    notes: ["Notes", "page"],
    videos: ["Videos", "video"],
    books: ["Reference Books", "page"],
    pyqs: ["Previous Year Papers", "page"],
    practice: ["Full Course Practice", "practice"],
  };

  return [
    {
      id: "intro",
      title: "Course Introduction",
      items: [{ id: "about", label: "About the Course", kind: "page", href: base, empty: false }],
    },
    ...weeks,
    {
      id: "supplementary",
      title: "Supplementary Contents",
      items: SUPPLEMENTARY.map((s) => ({
        id: s,
        label: supLabels[s][0],
        kind: supLabels[s][1],
        href: `${base}?item=${s}`,
        empty: counts[s] === 0,
      })),
    },
  ];
}
