// Read-only query layer over the seed data. Every page goes through these
// helpers, so moving to Supabase means re-implementing this file only.

import { PROGRAM_SLUG, programs, subjects } from "./data/curriculum";
import { assignments, books, notes, pyqs, videos } from "./data/resources";
import { questions } from "./data/questions";
import type { Question, Subject, Topic, Unit } from "./types";

export { PROGRAM_SLUG, programs, subjects, notes, videos, books, pyqs, questions, assignments };

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
