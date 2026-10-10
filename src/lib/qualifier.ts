// Qualifier pack: lookups and scoring. Pure functions so both the exam
// (client) and the pack page (server) can use them.

import { ctPyqPapers } from "./data/ct-pyqs";
import { englishPyqPapers } from "./data/english-pyqs";
import { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, qualifierMocks } from "./data/qualifier";
import { mathsPyqPapers } from "./data/maths-pyqs";
import { statsPyqPapers } from "./data/stats-pyqs";
import type { QualifierMock, QualifierQuestion } from "./types";

export { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, QUALIFIER_SYLLABUS, qualifierMocks } from "./data/qualifier";
export { ctPyqPapers } from "./data/ct-pyqs";
export { englishPyqPapers } from "./data/english-pyqs";
export { mathsPyqPapers } from "./data/maths-pyqs";
export { statsPyqPapers } from "./data/stats-pyqs";

/** Every paper that can be sat in the exam portal: full mocks and single-subject PYQs. */
export const allQualifierPapers = [...qualifierMocks, ...mathsPyqPapers, ...statsPyqPapers, ...ctPyqPapers, ...englishPyqPapers];

/** mcq: option index. multi: option indices. numerical: the typed value. */
export type QualifierResponse = number | number[] | string;

export const getQualifierMock = (slug: string) => allQualifierPapers.find((m) => m.slug === slug);

/** Where a paper is sat: End Term papers live under /pyqs, everything else in the qualifier pack. */
export const paperHref = (mock: Pick<QualifierMock, "slug" | "endTerm">) => (mock.endTerm ? `/pyqs/end-term/${mock.slug}` : `/qualifier/${mock.slug}`);

/** Single-subject papers (PYQs) are scored against the per-course cutoff only. */
export const isSingleSubject = (mock: QualifierMock) => mock.sections.length === 1;

/** The paper to suggest after this one: mock after mock, same-course PYQ after PYQ. */
export function nextQualifierPaper(mock: QualifierMock) {
  const group = isSingleSubject(mock)
    ? allQualifierPapers.filter((m) => isSingleSubject(m) && m.sections[0].subjectSlug === mock.sections[0].subjectSlug)
    : qualifierMocks;
  const next = group[(group.findIndex((m) => m.slug === mock.slug) + 1) % group.length];
  return next && next.slug !== mock.slug ? { slug: next.slug, title: next.title } : undefined;
}

/** Previous-year papers grouped by course, in exam order. Courses without papers are left out. */
export const pyqGroups = QUALIFIER_SUBJECTS.map((subjectSlug) => ({
  subjectSlug,
  papers: allQualifierPapers.filter((m) => isSingleSubject(m) && m.sections[0].subjectSlug === subjectSlug),
})).filter((g) => g.papers.length > 0);

export const mockQuestions = (mock: QualifierMock) => mock.sections.flatMap((s) => s.questions);

export const mockMarks = (mock: QualifierMock) => mockQuestions(mock).reduce((n, q) => n + q.marks, 0);

export const hasResponse = (r: QualifierResponse | undefined): r is QualifierResponse =>
  Array.isArray(r) ? r.length > 0 : r !== undefined && r !== "";

/** All-or-nothing, no negative marking. */
export function isCorrect(q: QualifierQuestion, r: QualifierResponse | undefined): boolean {
  if (!hasResponse(r)) return false;
  if (q.type === "mcq") return r === q.answer;
  if (q.type === "multi") {
    const want = [...(q.answer as number[])].sort().join(",");
    return Array.isArray(r) && [...r].sort().join(",") === want;
  }
  if (q.type === "text") {
    const norm = (x: string) => (q.caseSensitive ? x.trim() : x.trim().toLowerCase());
    return (q.answer as string[]).some((a) => norm(a) === norm(String(r)));
  }
  const v = Number(String(r).trim());
  const accepted = q.accepts ?? [q.answer as number];
  return String(r).trim() !== "" && Number.isFinite(v) && accepted.some((a) => Math.abs(v - a) <= (q.tolerance ?? 0) + 1e-9);
}

export function correctAnswerLabel(q: QualifierQuestion) {
  if (q.type === "text") return (q.answer as string[]).join(" or ");
  if (q.type === "numerical") return (q.accepts ?? [q.answer]).join(" or ");
  const idx = q.type === "multi" ? (q.answer as number[]) : [q.answer as number];
  return idx.map((i) => `${String.fromCharCode(65 + i)}. ${q.options![i]}`).join("; ");
}

export function responseLabel(q: QualifierQuestion, r: QualifierResponse | undefined) {
  if (!hasResponse(r)) return "Not answered";
  if (q.type === "numerical" || q.type === "text") return String(r);
  const idx = Array.isArray(r) ? [...r].sort() : [r as number];
  return idx.map((i) => `${String.fromCharCode(65 + i)}. ${q.options![i]}`).join("; ");
}

export type SectionScore = {
  subjectSlug: string;
  short: string;
  title: string;
  score: number;
  total: number;
  percent: number;
  correct: number;
  attempted: number;
  questions: number;
  passed: boolean;
};

export function scoreMock(mock: QualifierMock, responses: Record<string, QualifierResponse>) {
  const sections: SectionScore[] = mock.sections.map((s) => {
    let score = 0, total = 0, correct = 0, attempted = 0;
    for (const q of s.questions) {
      total += q.marks;
      if (hasResponse(responses[q.id])) attempted++;
      if (isCorrect(q, responses[q.id])) {
        score += q.marks;
        correct++;
      }
    }
    const percent = total ? Math.round((score / total) * 1000) / 10 : 0;
    return {
      subjectSlug: s.subjectSlug,
      short: s.short,
      title: s.title,
      score,
      total,
      percent,
      correct,
      attempted,
      questions: s.questions.length,
      passed: percent >= QUALIFIER_CUTOFF.perSubject,
    };
  });
  const average = Math.round((sections.reduce((n, s) => n + s.percent, 0) / sections.length) * 10) / 10;
  const score = sections.reduce((n, s) => n + s.score, 0);
  const total = sections.reduce((n, s) => n + s.total, 0);
  // A single-subject paper has no average rule; the per-course cutoff decides.
  const qualified = sections.every((s) => s.passed) && (sections.length === 1 || average >= QUALIFIER_CUTOFF.average);
  return { sections, average, score, total, qualified };
}

export const formatClock = (sec: number) => {
  const s = Math.max(0, Math.floor(sec));
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
};
