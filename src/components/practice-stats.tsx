"use client";

import { useHydrated, useStore } from "@/lib/store";
import { Stat } from "./ui";

export function PracticeStats() {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.attempts);
  if (!hydrated || attempts.length === 0) return null;
  const graded = attempts.filter((a) => a.correct !== null);
  const correct = graded.filter((a) => a.correct).length;
  const unique = new Set(attempts.map((a) => a.questionId)).size;
  return (
    <div className="card grid grid-cols-3 gap-4 p-5">
      <Stat label="Questions solved" value={unique} />
      <Stat label="Attempts" value={attempts.length} />
      <Stat label="Accuracy" value={`${graded.length ? Math.round((correct / graded.length) * 100) : 0}%`} />
    </div>
  );
}
