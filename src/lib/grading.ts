// Grading for PYQ-format questions. Kept apart from lib/qualifier.ts so client
// components can grade answers without bundling the paper data.

import type { QualifierQuestion } from "./types";

/** mcq: option index. multi: option indices. numerical: the typed value. */
export type QualifierResponse = number | number[] | string;

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
