// Qualifier pack: scoring and paper helpers. Pure functions with no question
// data, so both the exam (client) and the pages (server) can use them. The
// papers themselves come from Supabase through lib/papers.ts.

import { QUALIFIER_CUTOFF } from "./data/qualifier-meta";
import { hasResponse, isCorrect, type QualifierResponse } from "./grading";
import type { QualifierMock } from "./types";

export { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, QUALIFIER_SYLLABUS } from "./data/qualifier-meta";
export { correctAnswerLabel, hasResponse, isCorrect, responseLabel, type QualifierResponse } from "./grading";
export { paperHref } from "./pyq-urls";

/** Single-subject papers (PYQs) are scored against the per-course cutoff only. */
export const isSingleSubject = (mock: QualifierMock) => mock.sections.length === 1;

export const mockQuestions = (mock: QualifierMock) => mock.sections.flatMap((s) => s.questions);

export const mockMarks = (mock: QualifierMock) => mockQuestions(mock).reduce((n, q) => n + q.marks, 0);

/** Just what scoreMock needs, for client components that score saved attempts without receiving the question text. */
export const answerKey = (mock: QualifierMock): QualifierMock => ({
  ...mock,
  sections: mock.sections.map(({ reference: _, ...s }) => ({
    ...s,
    questions: s.questions.map(({ id, type, marks, answer, tolerance, accepts, caseSensitive }) => ({
      id, type, marks, answer, tolerance, accepts, caseSensitive, prompt: "", explanation: "",
    })),
  })),
});

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
