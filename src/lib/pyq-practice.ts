// Practice sets built from real previous-year questions: the End Term or
// qualifier papers of one course, with the official answer keys. Past papers
// carry no topic or week tags, so a set is drawn from one course and one exam.
// Server-side only: it reads every paper, and the session page sends the client
// just the questions it picked.

import { endTermPapersFor, formatSittingDate } from "./end-term";
import { PYQ_EXAMS, PYQ_LEVELS, getPyqCourse, type CoursePyqs, type PyqExam } from "./pyq-index";
import { pyqGroups } from "./qualifier";
import { paperHref } from "./pyq-urls";
import type { QualifierMock, QualifierQuestion } from "./types";

/** A past question plus what the practice view shows around it. */
export type PyqItem = QualifierQuestion & {
  subjectSlug: string;
  /** The section's "Useful data", when the paper has it. */
  reference?: string;
  /** Sitting it was asked in, e.g. "End Term · 31 Aug 2025 FN" or "Qualifier · May 2024". */
  source: string;
  /** The full paper in the exam portal. */
  paperHref: string;
};

export const PYQ_PRACTICE_MODES = ["quick", "drill", "all", "full", "mock"] as const;
export type PyqPracticeMode = (typeof PYQ_PRACTICE_MODES)[number];

export const isPyqPracticeMode = (s: string | undefined): s is PyqPracticeMode =>
  (PYQ_PRACTICE_MODES as readonly string[]).includes(s ?? "");

const MODE_TITLE: Record<PyqPracticeMode, string> = {
  quick: "Quick practice",
  drill: "Drill",
  all: "Every question",
  full: "Full test",
  mock: "Mock exam",
};

export const QUICK_COUNT = 10;
export const DRILL_COUNT = 15;

/** Questions that share a passage, in paper order. They are always drawn together; a lone question is a block of one. */
type Block = PyqItem[];

type Paper = { mock: QualifierMock; exam: PyqExam; blocks: Block[] };

function blocksOf(p: QualifierMock): Block[] {
  const source = p.endTerm
    ? `End Term · ${formatSittingDate(p.endTerm.date)} ${p.endTerm.session}`
    : `Qualifier · ${p.title.split(" · ").at(-1)}`;
  const href = paperHref(p);
  const blocks: Block[] = [];
  for (const s of p.sections)
    for (const q of s.questions) {
      const item: PyqItem = { ...q, subjectSlug: s.subjectSlug, ...(s.reference && { reference: s.reference }), source, paperHref: href };
      const last = blocks.at(-1);
      if (q.passage && last?.[0].passage === q.passage) last.push(item);
      else blocks.push([item]);
    }
  return blocks;
}

const papersCache = new Map<string, Paper[]>();

function papersOf(courseSlug: string): Paper[] {
  let papers = papersCache.get(courseSlug);
  if (!papers) {
    const qualifier = pyqGroups.find((g) => g.subjectSlug === courseSlug)?.papers ?? [];
    papers = [
      ...endTermPapersFor(courseSlug).map((mock) => ({ mock, exam: "end-term" as const, blocks: blocksOf(mock) })),
      ...qualifier.map((mock) => ({ mock, exam: "qualifier" as const, blocks: blocksOf(mock) })),
    ];
    papersCache.set(courseSlug, papers);
  }
  return papers;
}

/** Seeded PRNG (mulberry32), so a set's URL always rebuilds the same questions. */
function random(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(list: T[], rand: () => number) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Takes blocks round-robin across papers, so a set spans every sitting, and trims the last block to fit `n`. */
function draw(papers: Paper[], n: number, rand: () => number): PyqItem[] {
  const queues = shuffle(
    papers.map((p) => shuffle(p.blocks, rand)),
    rand,
  );
  const out: PyqItem[] = [];
  while (out.length < n && queues.some((q) => q.length > 0))
    for (const q of queues) {
      const block = q.shift();
      if (block) out.push(...block.slice(0, n - out.length));
      if (out.length >= n) break;
    }
  return out;
}

const marksOf = (b: Block) => b.reduce((n, q) => n + q.marks, 0);
const shapeOf = (b: Block) => b.map((q) => `${q.type}:${q.marks}`).join("|");
const sameKind = (a: Block, b: Block) => a.length === b.length && Boolean(a[0].passage) === Boolean(b[0].passage);

/**
 * A mock follows one real paper slot by slot, filling each slot with a question
 * of the same format and marks from another sitting, so it keeps the paper's
 * mix of easy and hard questions.
 */
function mockExam(papers: Paper[], rand: () => number) {
  const blueprint = papers[Math.floor(rand() * papers.length)];
  const pool = shuffle(
    papers.filter((p) => p !== blueprint).flatMap((p) => p.blocks),
    rand,
  );
  const used = new Set<Block>();
  const matches: ((b: Block, slot: Block) => boolean)[] = [
    (b, slot) => shapeOf(b) === shapeOf(slot),
    (b, slot) => sameKind(b, slot) && marksOf(b) === marksOf(slot),
    sameKind,
  ];
  const items = blueprint.blocks.flatMap((slot) => {
    for (const match of matches) {
      const b = pool.find((x) => !used.has(x) && match(x, slot));
      if (b) {
        used.add(b);
        return b;
      }
    }
    // Courses with a single paper keep the original question.
    return slot;
  });
  return { items, blueprint: blueprint.mock };
}

const median = (values: number[]) => {
  const s = [...values].sort((a, b) => a - b);
  return s.length ? s[Math.floor((s.length - 1) / 2)] : 0;
};

/**
 * How each exam's papers are offered for practice. The Qualifier covers weeks
 * 1–4, the same syllabus as Quiz 1, so its papers are offered as "Qualifier / Quiz 1".
 * `param` is the exam's value in practice URLs; `source` names the papers.
 */
export const PRACTICE_EXAMS: Record<PyqExam, { param: string; label: string; scope: string; source: string; about: string; tone: "blue" | "purple" }> = {
  qualifier: {
    param: "quiz-1",
    label: "Qualifier / Quiz 1",
    scope: "Weeks 1–4",
    source: "Qualifier",
    about: "The Qualifier covers weeks 1–4, the same syllabus as Quiz 1.",
    tone: "blue",
  },
  "end-term": {
    param: "end-term",
    label: "End Term",
    scope: "Full syllabus",
    source: "End Term",
    about: "Full-syllabus papers from each term's End Term exam.",
    tone: "purple",
  },
};

/** Reads ?exam=, which also accepts the internal exam names. */
export const examFromParam = (s: string | undefined) =>
  (Object.keys(PRACTICE_EXAMS) as PyqExam[]).find((e) => e === s || PRACTICE_EXAMS[e].param === s);

/** The practice page opened on a course and exam. End Term is the default exam, so it stays out of the URL. */
export const practiceHref = (courseSlug: string, exam: PyqExam = "end-term") =>
  `/practice?course=${courseSlug}${exam === "end-term" ? "" : `&exam=${PRACTICE_EXAMS[exam].param}`}`;

export const sessionHref = (courseSlug: string, exam: PyqExam, mode: PyqPracticeMode) =>
  `/practice/session?course=${courseSlug}&exam=${PRACTICE_EXAMS[exam].param}&mode=${mode}`;

/** Exams a course has papers for. */
export const courseExams = (course: CoursePyqs) => PYQ_EXAMS.map((e) => e.slug).filter((e) => course.papers.some((p) => p.exam === e));

/** What the practice page shows for a course and exam: pool size, its real papers and the shape of a typical one. */
export function practicePlan(courseSlug: string, exam: PyqExam) {
  const course = getPyqCourse(courseSlug);
  const papers = papersOf(courseSlug).filter((p) => p.exam === exam);
  if (!course || papers.length === 0) return undefined;
  return {
    course,
    level: PYQ_LEVELS.find((l) => l.slug === course.level)!,
    exam: { slug: exam, ...PRACTICE_EXAMS[exam] },
    questions: papers.reduce((n, p) => n + p.blocks.flat().length, 0),
    /** The real papers, newest first. */
    papers: course.papers.filter((p) => p.exam === exam),
    paperLength: median(papers.map((p) => p.mock.sections.flatMap((s) => s.questions).length)),
    durationMin: median(papers.map((p) => p.mock.durationMin)),
  };
}

export type PracticePlan = NonNullable<ReturnType<typeof practicePlan>>;

export type PyqSet = {
  plan: PracticePlan;
  mode: PyqPracticeMode;
  title: string;
  items: PyqItem[];
  /** Graded at the end instead of after each question. */
  test: boolean;
  /** Missed questions come back until they are answered correctly. */
  drill: boolean;
  durationMin?: number;
  /** Mock exams: the sitting whose layout the mock follows. */
  blueprint?: string;
};

export function buildPyqSet(courseSlug: string, exam: PyqExam, mode: PyqPracticeMode, seed: number): PyqSet | undefined {
  const plan = practicePlan(courseSlug, exam);
  if (!plan) return undefined;
  const papers = papersOf(courseSlug).filter((p) => p.exam === exam);
  const rand = random(seed);
  const base = { plan, mode, title: MODE_TITLE[mode], test: false, drill: false };
  switch (mode) {
    case "quick":
      return { ...base, items: draw(papers, QUICK_COUNT, rand) };
    case "drill":
      return { ...base, drill: true, items: draw(papers, DRILL_COUNT, rand) };
    case "all":
      return { ...base, items: draw(papers, plan.questions, rand) };
    case "full":
      return { ...base, test: true, items: draw(papers, plan.paperLength, rand) };
    case "mock": {
      const { items, blueprint } = mockExam(papers, rand);
      return { ...base, test: true, items, durationMin: blueprint.durationMin, blueprint: blueprint.title };
    }
  }
}
