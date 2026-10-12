// Questions for the interactive exam on the landing page: three real past qualifier questions per
// course, single-correct and picked to fit the demo screen. Server-side only: it reads every paper
// (lib/papers.ts) and hands the browser just these twelve.

import { getPapers } from "./papers";
import type { QualifierQuestion } from "./types";

const DEMO_IDS = [
  ["maths-1-january-2024-q14", "maths-1-september-2023-q3", "maths-1-september-2023-q4"],
  ["stats-1-january-2023-q6", "stats-1-january-2023-q13", "stats-1-may-2023-q1"],
  ["ct-september-2023-q3", "ct-may-2023-q5", "ct-may-2023-q4"],
  ["en-may-2023-q33", "en-may-2023-q28", "en-may-2023-q32"],
];

/** A demo question plus the sitting it was asked in, e.g. "Qualifier · January 2024". */
export type DemoQuestion = QualifierQuestion & { source: string };

export type DemoSection = { subjectSlug: string; title: string; short: string; questions: DemoQuestion[] };

/** The demo exam, in qualifier order. A question missing from the papers is skipped, and so is an empty section. */
export async function getDemoExam(): Promise<DemoSection[]> {
  const { allQualifierPapers } = await getPapers();
  const found = new Map(
    allQualifierPapers.flatMap((paper) =>
      paper.sections.flatMap((section) =>
        section.questions.map((q) => [q.id, { q: { ...q, source: `Qualifier · ${paper.title.split(" · ").at(-1)}` }, section }] as const),
      ),
    ),
  );
  return DEMO_IDS.map((ids) => {
    const hits = ids.flatMap((id) => found.get(id) ?? []);
    const section = hits[0]?.section;
    return { subjectSlug: section?.subjectSlug ?? "", title: section?.title ?? "", short: section?.short ?? "", questions: hits.map((h) => h.q) };
  }).filter((s) => s.questions.length > 0);
}
