import type { SkillCourse, SkillLecture, SkillNotes } from "../../types";
import { blockText } from "../cheat-notes";
import { analystInterviewNotes } from "./analyst-interview-prep";
import { dataStorytellingNotes } from "./data-storytelling";
import { excelNotes } from "./excel-for-business";
import { financialAnalysisNotes } from "./financial-analysis-valuation";
import { genaiNotes } from "./genai-for-business";
import { mlNotes } from "./machine-learning-foundations";
import { powerBiNotes } from "./power-bi-dashboards";
import { pythonNotes } from "./python-for-data-analysis";
import { sqlNotes } from "./sql-for-analysts";
import { statisticsNotes } from "./statistics-for-data-science";

/** Text lessons for the Skills courses. Courses without an entry show no notes link. */
export const skillNotes: SkillNotes[] = [
  pythonNotes,
  sqlNotes,
  excelNotes,
  powerBiNotes,
  statisticsNotes,
  mlNotes,
  genaiNotes,
  dataStorytellingNotes,
  financialAnalysisNotes,
  analystInterviewNotes,
];

export const getSkillNotes = (skill: string) => skillNotes.find((n) => n.skill === skill);

/** Anchor for a lecture's lesson: "Lists, tuples and dictionaries" → "lists-tuples-and-dictionaries". */
export const skillLessonId = (lecture: string) =>
  lecture
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const skillNotesHref = (skill: string, lecture?: string) => `/skills/${skill}/notes${lecture ? `#${skillLessonId(lecture)}` : ""}`;

export type SkillModule = {
  number: number;
  title: string;
  lessons: { id: string; lecture: SkillLecture; blocks: SkillNotes["lessons"][number]["blocks"] }[];
};

/**
 * The course curriculum with each lecture's text lesson attached. Throws at build time when the
 * notes name a lecture the curriculum doesn't have, so a renamed lecture can't silently drop a lesson.
 */
export function skillModules(course: SkillCourse, notes: SkillNotes): SkillModule[] {
  const lectures = new Set(course.sections.flatMap((s) => s.lectures.map((l) => l.title)));
  const missing = notes.lessons.filter((l) => !lectures.has(l.lecture)).map((l) => l.lecture);
  if (missing.length) throw new Error(`Skill notes for "${course.slug}" name lectures the course doesn't have: ${missing.join(", ")}`);

  const byLecture = new Map(notes.lessons.map((l) => [l.lecture, l.blocks]));
  return course.sections.map((section, i) => ({
    number: i + 1,
    title: section.title,
    lessons: section.lectures.map((lecture) => ({ id: skillLessonId(lecture.title), lecture, blocks: byLecture.get(lecture.title) ?? [] })),
  }));
}

export function skillNotesStats(notes: SkillNotes) {
  const blocks = notes.lessons.flatMap((l) => l.blocks);
  const words = [...blocks.flatMap(blockText), ...notes.recap].join(" ").split(/\s+/).filter(Boolean).length;
  return {
    lessons: notes.lessons.length,
    words,
    minutes: Math.max(5, Math.round(words / 200)),
    examples: blocks.filter((b) => b.kind === "example").length,
    code: blocks.filter((b) => b.kind === "code").length,
  };
}
