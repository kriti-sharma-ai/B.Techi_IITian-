// Qualifier pack: lookups and scoring. Pure functions so both the exam
// (client) and the pack page (server) can use them.

import { QUALIFIER_CUTOFF, qualifierMocks } from "./data/qualifier";
import type { QualifierMock, QualifierQuestion } from "./types";

export { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, QUALIFIER_SYLLABUS, qualifierMocks } from "./data/qualifier";

/** mcq: option index. multi: option indices. numerical: the typed value. */
export type QualifierResponse = number | number[] | string;

export const getQualifierMock = (slug: string) => qualifierMocks.find((m) => m.slug === slug);

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
  const v = Number(String(r).trim());
  return String(r).trim() !== "" && Number.isFinite(v) && Math.abs(v - (q.answer as number)) <= (q.tolerance ?? 0) + 1e-9;
}

export function correctAnswerLabel(q: QualifierQuestion) {
  if (q.type === "numerical") return String(q.answer);
  const idx = q.type === "multi" ? (q.answer as number[]) : [q.answer as number];
  return idx.map((i) => `${String.fromCharCode(65 + i)}. ${q.options![i]}`).join("; ");
}

export function responseLabel(q: QualifierQuestion, r: QualifierResponse | undefined) {
  if (!hasResponse(r)) return "Not answered";
  if (q.type === "numerical") return String(r);
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
  const qualified = sections.every((s) => s.passed) && average >= QUALIFIER_CUTOFF.average;
  return { sections, average, score, total, qualified };
}

export const formatClock = (sec: number) => {
  const s = Math.max(0, Math.floor(sec));
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
};
