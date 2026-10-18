// The download hub (/downloads) and each course's download page (/downloads/<course>):
// every question sheet and qualifier cheat note of a course, as PDFs. Server-side only.

import type { DownloadCourse } from "@/components/download-hub";
import { cheatSheetHref, cheatSheetStats, cheatSheets } from "./data/cheat-notes";
import { PYQ_EXAMS } from "./pyq-index";
import { paperTitle, type CourseSheets } from "./pyq-sheets";

export const DOWNLOADS_HREF = "/downloads";
export const courseDownloadsHref = (courseSlug: string) => `${DOWNLOADS_HREF}/${courseSlug}`;

export const plural = (count: number, word: string) => `${count.toLocaleString("en-IN")} ${word}${count === 1 ? "" : "s"}`;

/** "Stats II" → "Stats 2": students search with numbers, course names use Roman numerals. */
export const withNumbers = (s: string) => s.replace(/\bIII\b/g, "3").replace(/\bII\b/g, "2").replace(/\bI\b/g, "1");

/** One course's PDFs, grouped the way the hub shows them. */
export function downloadCourse({ course, repeated, topics, years }: CourseSheets): DownloadCourse {
  const notes = cheatSheets.find((s) => s.subjectSlug === course.slug);
  return {
    slug: course.slug,
    name: course.name,
    short: course.short,
    code: course.code,
    level: course.level,
    notes: notes && { title: "Qualifier cheat notes", meta: `Formulas and traps · ${cheatSheetStats(notes).minutes} min read`, href: cheatSheetHref(notes) },
    repeated: repeated && { title: repeated.title, meta: `${plural(repeated.types, "type")} · ${plural(repeated.questions, "question")}`, href: repeated.href },
    topics: topics.map((t) => ({ title: t.title, meta: plural(t.questions, "question"), href: t.href })),
    years: years.map((y) => ({ title: y.title, meta: `${plural(y.papers.length, "paper")} · ${plural(y.questions, "question")}`, href: y.href })),
    papers: course.papers.map((p) => ({ title: paperTitle(p), meta: `${plural(p.questions, "question")} · ${p.marks} marks`, href: p.sheetHref })),
  };
}

export const pdfCount = (c: DownloadCourse) => (c.notes ? 1 : 0) + (c.repeated ? 1 : 0) + c.topics.length + c.years.length + c.papers.length;

/** What a course offers, in words: its papers by exam and year, topics, repeats and notes. Unique text for each page. */
export function courseSummary(s: CourseSheets, d: DownloadCourse) {
  const c = s.course;
  const exams = PYQ_EXAMS.map((e) => ({ label: e.label, n: c.papers.filter((p) => p.exam === e.slug).length })).filter((e) => e.n > 0);
  const years = s.years.map((y) => y.year).sort();
  const span = years.length > 1 ? `${years[0]} to ${years.at(-1)}` : years[0];
  const parts = [
    `${plural(c.papers.length, "previous year paper")}${span ? ` from ${span}` : ""} (${exams.map((e) => `${e.n} ${e.label}`).join(", ")})`,
    s.years.length > 1 && `${plural(s.years.length, "year-wise sheet")}`,
    s.topics.length > 0 && `${plural(s.topics.length, "topic-wise sheet")}`,
    s.repeated && `the ${s.repeated.types} most repeated question types`,
    d.notes && "qualifier cheat notes with every formula and trap",
  ].filter(Boolean) as string[];
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}` : parts[0];
  // Both names students search for: "Statistics for Data Science I (Stats 1, BSMA1002)".
  const also = [withNumbers(c.short) !== c.name && withNumbers(c.short), c.code].filter(Boolean).join(", ");
  return `Free PDF downloads for ${c.name}${also ? ` (${also})` : ""} in the IIT Madras BS degree: ${list}. Every sheet ends with the official answer key.`;
}
