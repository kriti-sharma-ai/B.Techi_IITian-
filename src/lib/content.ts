// Read-only query layer: the seed data in ./data plus everything published in
// the CMS (/admin). Every page goes through these helpers.
//
// CMS content is loaded from Supabase by lib/cms.ts and applied here with
// applyContent(). The exports below are live bindings, so every helper and
// importer sees the applied content. On the server, `await loadContent()`
// before reading; in the browser, <ContentSnapshot> in the root layout applies
// the same content before any page renders.

import { PROGRAM_SLUG, programs, subjects as codeSubjects } from "./data/curriculum";
import * as seed from "./data/resources";
import { questions as seedQuestions } from "./data/questions";
import { skillCategories, skillCourses, skillPaths } from "./data/skills";
import type { Book, Note, Question, SkillCourse, Subject, Topic, Unit, Video } from "./types";

export { PROGRAM_SLUG, programs, codeSubjects };
export { skillCategories, skillCourses, skillPaths };
export const { pyqs, assignments } = seed;

/** Published CMS content. `questions` is left out of the browser copy (it is large); pages pass questions to client components as props. */
export type CmsContent = {
  version: string;
  courses: Subject[];
  units: (Unit & { subjectSlug: string })[];
  notes: Note[];
  videos: Video[];
  books: Book[];
  questions?: Question[];
};

export let subjects: Subject[] = codeSubjects;
export let notes: Note[] = seed.notes;
export let videos: Video[] = seed.videos;
export let books: Book[] = seed.books;
export let questions: Question[] = seedQuestions;
/** Changes whenever different CMS content is applied; lets derived caches (search) rebuild. */
export let contentVersion = "";

export function applyContent(cms: CmsContent) {
  if (cms.version === contentVersion) return;
  const weeks = new Map<string, Unit[]>();
  for (const { subjectSlug, ...unit } of cms.units) weeks.set(subjectSlug, [...(weeks.get(subjectSlug) ?? []), unit]);
  subjects = [...codeSubjects, ...cms.courses].map((s) => {
    const extra = weeks.get(s.slug);
    return extra ? { ...s, units: [...s.units, ...extra].sort((a, b) => a.number - b.number) } : s;
  });
  notes = [...seed.notes, ...cms.notes];
  videos = [...seed.videos, ...cms.videos];
  books = [...seed.books, ...cms.books];
  if (cms.questions) questions = [...seedQuestions, ...cms.questions];
  contentVersion = cms.version;
}

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
export const getSubject = (slug: string) => subjects.find((s) => s.slug === slug);
export const getNote = (id: string) => notes.find((n) => n.id === id);
export const getBook = (slug: string) => books.find((b) => b.slug === slug);
export const getPyq = (id: string) => pyqs.find((p) => p.id === id);
export const getVideo = (id: string) => videos.find((v) => v.id === id);

export const subjectsForProgram = (programSlug: string) =>
  subjects.filter((s) => s.programSlug === programSlug);

export const subjectsForLevel = (programSlug: string, level: string) =>
  subjects.filter((s) => s.programSlug === programSlug && s.level === level);

export const getLevel = (programSlug: string, level: string) =>
  getProgram(programSlug)?.levels.find((l) => l.slug === level);

/** The level + group a subject belongs to, for labels and breadcrumbs. */
export function subjectPlacement(subject: Subject) {
  const program = getProgram(subject.programSlug)!;
  const level = program.levels.find((l) => l.slug === subject.level)!;
  const group = level.groups?.find((g) => g.slug === subject.group);
  return { program, level, group };
}

/** True once a course has a published curriculum. */
export const hasContent = (subject: Subject) => subject.units.length > 0;

export function findTopic(subject: Subject, topicSlug: string): { unit: Unit; topic: Topic } | undefined {
  for (const unit of subject.units) {
    const topic = unit.topics.find((t) => t.slug === topicSlug);
    if (topic) return { unit, topic };
  }
}

export const allTopics = (subject: Subject) =>
  subject.units.flatMap((unit) => unit.topics.map((topic) => ({ unit, topic })));

export const topicKey = (subjectSlug: string, topicSlug: string) => `${subjectSlug}/${topicSlug}`;

export function topicTitle(subjectSlug: string, topicSlug: string) {
  const s = getSubject(subjectSlug);
  return (s && findTopic(s, topicSlug)?.topic.title) ?? topicSlug;
}

export const forSubject = <T extends { subjectSlug: string }>(list: T[], subjectSlug: string) =>
  list.filter((x) => x.subjectSlug === subjectSlug);

export const forTopic = <T extends { subjectSlug: string; topicSlug?: string }>(
  list: T[],
  subjectSlug: string,
  topicSlug: string,
) => list.filter((x) => x.subjectSlug === subjectSlug && x.topicSlug === topicSlug);

export const booksForSubject = (subjectSlug: string) =>
  books.filter((b) => b.subjectSlugs.includes(subjectSlug));

export const pyqsForTopic = (subjectSlug: string, topicSlug: string) =>
  pyqs.filter((p) => p.subjectSlug === subjectSlug && p.topics.includes(topicSlug));

export function subjectStats(subject: Subject) {
  return {
    units: subject.units.length,
    topics: allTopics(subject).length,
    notes: forSubject(notes, subject.slug).length,
    videos: forSubject(videos, subject.slug).length,
    questions: forSubject(questions, subject.slug).length,
    pyqs: forSubject(pyqs, subject.slug).length,
    books: booksForSubject(subject.slug).length,
  };
}

/** What resources exist for a topic — drives the ✓ Notes ▶ Video ... chips. */
export function topicResources(subjectSlug: string, topicSlug: string) {
  return {
    notes: forTopic(notes, subjectSlug, topicSlug).length,
    videos: forTopic(videos, subjectSlug, topicSlug).length,
    questions: forTopic(questions, subjectSlug, topicSlug).length,
    pyqs: pyqsForTopic(subjectSlug, topicSlug).length,
  };
}

/**
 * PYQ analysis (PRD §22): for each topic, the share of a subject's past
 * papers that examined it. Sorted most-repeated first.
 */
export function pyqTopicFrequency(subjectSlug: string) {
  const papers = forSubject(pyqs, subjectSlug);
  if (papers.length === 0) return [];
  const counts = new Map<string, number>();
  for (const p of papers) for (const t of p.topics) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()]
    .map(([slug, count]) => ({
      slug,
      title: topicTitle(subjectSlug, slug),
      count,
      percent: Math.round((count / papers.length) * 100),
    }))
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));
}

export function questionsFor(filter: {
  subject?: string;
  unit?: string;
  topic?: string;
  difficulty?: string;
  type?: string;
  ids?: string[];
}): Question[] {
  return questions.filter(
    (q) =>
      (!filter.ids || filter.ids.includes(q.id)) &&
      (!filter.subject || q.subjectSlug === filter.subject) &&
      (!filter.unit || q.unitId === filter.unit) &&
      (!filter.topic || q.topicSlug === filter.topic) &&
      (!filter.difficulty || q.difficulty === filter.difficulty) &&
      (!filter.type || q.type === filter.type),
  );
}

export const subjectName = (slug: string) => getSubject(slug)?.name ?? slug;

export function subjectContext(slug: string) {
  const s = getSubject(slug);
  if (!s) return "";
  const { level } = subjectPlacement(s);
  return [s.code, level.short].filter(Boolean).join(" · ");
}

export const unitLabel = (subjectSlug: string, unitId: string) => {
  const u = getSubject(subjectSlug)?.units.find((x) => x.id === unitId);
  return u ? `Week ${u.number}` : "";
};

export const pyqTitle = (p: { subjectSlug: string; year: number; term: string; exam: string }) =>
  `${subjectName(p.subjectSlug)} ${p.exam} (${p.term} ${p.year})`;

/** Most popular notes by downloads, for the homepage and admin analytics. */
export const popularNotes = (n = 4) => [...notes].sort((a, b) => b.downloads - a.downloads).slice(0, n);

/* ───────────── Skills ───────────── */

export const getSkill = (slug: string) => skillCourses.find((c) => c.slug === slug);
export const getSkillCategory = (slug: string) => skillCategories.find((c) => c.slug === slug);

export function skillStats(course: SkillCourse) {
  const lectures = course.sections.flatMap((s) => s.lectures);
  const minutes = lectures.reduce((n, l) => n + l.minutes, 0);
  return {
    sections: course.sections.length,
    lectures: lectures.length,
    minutes,
    hours: Math.round((minutes / 60) * 10) / 10,
    projects: lectures.filter((l) => l.kind === "project").length,
    quizzes: lectures.filter((l) => l.kind === "quiz").length,
    previews: lectures.filter((l) => l.preview).length,
  };
}

export const skillsInCategory = (category: string) => skillCourses.filter((c) => c.category === category);

export const relatedSkills = (course: SkillCourse, n = 4) =>
  skillCourses
    .filter((c) => c.slug !== course.slug)
    .sort((a, b) => Number(b.category === course.category) - Number(a.category === course.category) || b.learners - a.learners)
    .slice(0, n);

/** Skill courses that support a degree course. */
export const skillsForSubject = (subjectSlug: string) => skillCourses.filter((c) => c.relatedSubjects.includes(subjectSlug));
