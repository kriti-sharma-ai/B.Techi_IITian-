// Question sheets: real past-paper questions set out like a printed paper, to
// solve on paper and check against the answer key at the end. Every course with
// papers gets a sheet per paper, per year and per topic, and one sheet of its
// most repeated question types.
//
// Topics and repeats come from lib/data/pyq-topics, tagged once from every
// question. Questions added later (new papers in Supabase) have no tags yet: they
// still appear in paper and year sheets, but not in topic or repeat sheets.
// Server-side only, through `await getQuestionSheets()`.

import { PYQ_TOPIC_TAGS } from "./data/pyq-topics";
import { formatSittingDate } from "./end-term";
import { getPyqIndex, type CoursePyqs, type PaperSummary, type PyqExam, type PyqIndex } from "./pyq-index";
import { paperExam, pyqSheetsHref, sittingOf } from "./pyq-urls";
import type { QualifierMock, QualifierQuestion } from "./types";

export type SheetKind = "paper" | "year" | "topic" | "repeated";

/** Sheet URL segments besides a paper's own segment (end-term-aug-2025-forenoon). */
const REPEATED = "most-repeated";
const yearSlug = (year: string) => `year-${year}`;
const topicSlug = (slug: string) => `topic-${slug}`;

/** Anchor of a repeated question type on the most-repeated sheet. */
const typeAnchor = (i: number) => `type-${i + 1}`;

export type SheetQuestion = QualifierQuestion & {
  /** Number on this sheet, from 1. */
  n: number;
  /** The paper section's "Useful data", when it has some. */
  reference?: string;
  /** Sitting it was asked in, e.g. "End Term · 31 Aug 2025 (FN)". */
  source: string;
  exam: PyqExam;
  /** Set when the same question type was asked in other papers too. */
  repeat?: { count: number; href: string };
};

export type SheetGroup = {
  id: string;
  title: string;
  /** Small line above the title, e.g. "Asked 4 times". */
  eyebrow?: string;
  exam?: PyqExam;
  /** Each question shows where it was asked (groups that mix papers). */
  showSource: boolean;
  questions: SheetQuestion[];
};

export type SheetLink = { kind: SheetKind; slug: string; title: string; href: string };

export type QuestionSheet = SheetLink & {
  description: string;
  course: CoursePyqs;
  groups: SheetGroup[];
  questions: number;
  marks: number;
  /** Papers the questions come from. */
  papers: number;
  /** Paper sheets: the paper's time limit and its exam-portal page. */
  durationMin?: number;
  portalHref?: string;
  prev?: SheetLink;
  next?: SheetLink;
};

export type SheetTopic = SheetLink & { summary: string; questions: number; papers: number };
export type SheetYear = SheetLink & { year: string; questions: number; papers: PaperSummary[] };
export type SheetRepeated = SheetLink & { types: number; questions: number; top: { title: string; count: number; href: string }[] };

/** Everything a course offers as question sheets, for its sheets page. */
export type CourseSheets = {
  course: CoursePyqs;
  href: string;
  years: SheetYear[];
  topics: SheetTopic[];
  repeated?: SheetRepeated;
  /** Number of sheets: papers, years, topics and the repeated sheet. */
  count: number;
};

function sourceOf(p: QualifierMock) {
  const sitting = sittingOf(p);
  if (sitting) return `${sitting.label} · ${formatSittingDate(sitting.date)} (${sitting.session})`;
  return `Qualifier · ${p.title.split(" · ").at(-1)}`;
}

type Entry = { q: QualifierQuestion; paper: QualifierMock; /** Position in its paper. */ pos: number; reference?: string };

function buildCourse(index: PyqIndex, course: CoursePyqs) {
  const href = pyqSheetsHref(course.slug);
  const tags = PYQ_TOPIC_TAGS[course.slug];
  const papers = index.coursePapers(course.slug);
  /** Position of each paper in the course's newest-first list. */
  const rank = new Map(course.papers.map((p, i) => [p.slug, i]));

  const entries = new Map<string, Entry>();
  for (const paper of papers)
    for (const s of paper.sections)
      s.questions.forEach((q, pos) => entries.set(q.id, { q, paper, pos, ...(s.reference && { reference: s.reference }) }));

  // Repeated types, most asked first; only questions that still exist count.
  const repeats = (tags?.repeats ?? [])
    .map((r) => ({ title: r.title, ids: r.ids.filter((id) => entries.has(id)) }))
    .filter((r) => new Set(r.ids.map((id) => entries.get(id)!.paper.slug)).size >= 2)
    .map((r, i) => ({ ...r, order: i }))
    .sort((a, b) => b.ids.length - a.ids.length || a.order - b.order);
  const repeatOf = new Map<string, { count: number; href: string }>();
  repeats.forEach((r, i) => r.ids.forEach((id) => repeatOf.set(id, { count: r.ids.length, href: `${href}/${REPEATED}#${typeAnchor(i)}` })));

  const topics = (tags?.topics ?? []).map((t) => ({ ...t, ids: t.ids.filter((id) => entries.has(id)) })).filter((t) => t.ids.length > 0);

  /** Questions in paper order, papers newest first. */
  const newestFirst = (ids: string[]) =>
    ids
      .map((id) => entries.get(id)!)
      .sort((a, b) => (rank.get(a.paper.slug) ?? 0) - (rank.get(b.paper.slug) ?? 0) || a.pos - b.pos)
      .map((e) => e.q.id);

  const years = [...new Set(course.papers.map((p) => p.sortKey.slice(0, 4)))]
    .filter((y) => /^\d{4}$/.test(y))
    .map(
      (year): SheetYear => {
        const list = course.papers.filter((p) => p.sortKey.startsWith(year));
        return {
          kind: "year",
          slug: yearSlug(year),
          year,
          title: `All ${year} papers`,
          href: `${href}/${yearSlug(year)}`,
          questions: list.reduce((n, p) => n + p.questions, 0),
          papers: list,
        };
      },
    );

  const sheetTopics: SheetTopic[] = topics.map((t) => ({
    kind: "topic",
    slug: topicSlug(t.slug),
    title: t.title,
    summary: t.summary,
    href: `${href}/${topicSlug(t.slug)}`,
    questions: t.ids.length,
    papers: new Set(t.ids.map((id) => entries.get(id)!.paper.slug)).size,
  }));

  const repeated: SheetRepeated | undefined = repeats.length
    ? {
        kind: "repeated",
        slug: REPEATED,
        title: "Most repeated questions",
        href: `${href}/${REPEATED}`,
        types: repeats.length,
        questions: repeats.reduce((n, r) => n + r.ids.length, 0),
        top: repeats.slice(0, 5).map((r, i) => ({ title: r.title, count: r.ids.length, href: `${href}/${REPEATED}#${typeAnchor(i)}` })),
      }
    : undefined;

  const list: CourseSheets = {
    course,
    href,
    years,
    topics: sheetTopics,
    repeated,
    count: course.papers.length + years.length + sheetTopics.length + (repeated ? 1 : 0),
  };

  const question = (id: string, n: number): SheetQuestion => {
    const { q, paper, reference } = entries.get(id)!;
    return { ...q, n, ...(reference && { reference }), source: sourceOf(paper), exam: paperExam(paper), ...(repeatOf.has(id) && { repeat: repeatOf.get(id) }) };
  };

  /** Numbers questions across groups, in order. */
  function numbered(groups: (Omit<SheetGroup, "questions"> & { ids: string[] })[]): SheetGroup[] {
    let n = 0;
    return groups.map(({ ids, ...g }) => ({ ...g, questions: ids.map((id) => question(id, ++n)) }));
  }

  /** One group per paper, newest paper first. */
  function byPaper(ids: string[], showSource: boolean) {
    const groups: (Omit<SheetGroup, "questions"> & { ids: string[] })[] = [];
    for (const id of newestFirst(ids)) {
      const paper = entries.get(id)!.paper;
      const last = groups.at(-1);
      if (last?.id === paper.slug) last.ids.push(id);
      else groups.push({ id: paper.slug, title: sourceOf(paper), exam: paperExam(paper), showSource, ids: [id] });
    }
    return numbered(groups);
  }

  function finish(link: SheetLink, siblings: SheetLink[], rest: Pick<QuestionSheet, "description" | "groups" | "durationMin" | "portalHref">): QuestionSheet {
    const all = rest.groups.flatMap((g) => g.questions);
    const at = siblings.findIndex((s) => s.slug === link.slug);
    return {
      ...link,
      ...rest,
      course,
      questions: all.length,
      marks: all.reduce((n, q) => n + q.marks, 0),
      papers: new Set(all.map((q) => entries.get(q.id)!.paper.slug)).size,
      prev: at > 0 ? siblings[at - 1] : undefined,
      next: at >= 0 && at < siblings.length - 1 ? siblings[at + 1] : undefined,
    };
  }

  const paperLinks: SheetLink[] = course.papers.map((p) => ({ kind: "paper", slug: p.segment, title: paperTitle(p), href: p.sheetHref }));

  function getSheet(slug: string): QuestionSheet | undefined {
    const summary = course.papers.find((p) => p.segment === slug);
    if (summary) {
      const paper = papers.find((p) => p.slug === summary.slug)!;
      const ids = paper.sections.flatMap((s) => s.questions.map((q) => q.id));
      return finish(paperLinks.find((l) => l.slug === slug)!, paperLinks, {
        description: `${paper.description} Solve it on paper, then check the answer key at the end.`,
        groups: numbered([{ id: paper.slug, title: sourceOf(paper), exam: paperExam(paper), showSource: false, ids }]),
        durationMin: summary.durationMin,
        portalHref: summary.href,
      });
    }
    const year = years.find((y) => y.slug === slug);
    if (year) {
      const ids = year.papers.flatMap((p) => papers.find((x) => x.slug === p.slug)!.sections.flatMap((s) => s.questions.map((q) => q.id)));
      return finish(year, years, {
        description: `Every ${course.short} question from the ${year.papers.length} ${year.papers.length === 1 ? "paper" : "papers"} of ${year.year}, newest paper first. The answer key is at the end.`,
        groups: byPaper(ids, false),
      });
    }
    const topic = topics.find((t) => topicSlug(t.slug) === slug);
    if (topic) {
      const link = sheetTopics.find((t) => t.slug === slug)!;
      return finish(link, sheetTopics, {
        description: `${topic.summary.replace(/[^.!?]$/, "$&.")} ${topic.ids.length} past questions from ${link.papers} ${link.papers === 1 ? "paper" : "papers"}, newest first. The answer key is at the end.`,
        groups: byPaper(topic.ids, false),
      });
    }
    if (slug === REPEATED && repeated) {
      const topicOf = new Map(topics.flatMap((t) => t.ids.map((id) => [id, t.title] as const)));
      return finish(repeated, [], {
        description: `${repeated.types} question types that came back in more than one ${course.short} paper, most asked first. Each type lists every time it was asked, oldest first. The answer key is at the end.`,
        groups: numbered(
          repeats.map((r, i) => ({
            id: typeAnchor(i),
            title: r.title,
            eyebrow: [`Type ${i + 1}`, `asked ${r.ids.length} times`, topicOf.get(r.ids[0])].filter(Boolean).join(" · "),
            showSource: true,
            ids: r.ids,
          })),
        ),
      });
    }
    return undefined;
  }

  /** Every sheet of the course, for static generation and the sitemap. */
  const links: SheetLink[] = [...paperLinks, ...years, ...sheetTopics, ...(repeated ? [repeated] : [])];

  return { list, getSheet, links };
}

/** "End Term · 31 Aug 2025 (Forenoon)" or "Qualifier · May 2024". */
export function paperTitle(p: PaperSummary) {
  const exam = { "end-term": "End Term", "quiz-1": "Quiz 1", "quiz-2": "Quiz 2", qualifier: "Qualifier" }[p.exam];
  return `${exam} · ${p.label}${p.session ? ` (${p.session})` : ""}`;
}

function build(index: PyqIndex) {
  const courses = new Map<string, ReturnType<typeof buildCourse>>();
  const forCourse = (slug: string) => {
    const course = index.getPyqCourse(slug);
    if (!course || course.papers.length === 0) return undefined;
    let built = courses.get(slug);
    if (!built) courses.set(slug, (built = buildCourse(index, course)));
    return built;
  };

  /** Sheets of one course, or undefined when it has no papers to sit. */
  const courseSheets = (slug: string) => forCourse(slug)?.list;

  const getSheet = (courseSlug: string, sheet: string) => forCourse(courseSlug)?.getSheet(sheet);

  /** Courses with sheets, in hub order. */
  const sheetCourses = () => index.pyqCourses.map((c) => courseSheets(c.slug)).filter((c): c is CourseSheets => Boolean(c));

  const sheetLinks = (courseSlug: string) => forCourse(courseSlug)?.links ?? [];

  return { courseSheets, getSheet, sheetCourses, sheetLinks };
}

export type QuestionSheets = ReturnType<typeof build>;

const built = new WeakMap<PyqIndex, QuestionSheets>();

/** Question sheets over the current papers (see lib/papers.ts), built once per load. */
export async function getQuestionSheets(): Promise<QuestionSheets> {
  const index = await getPyqIndex();
  let sheets = built.get(index);
  if (!sheets) built.set(index, (sheets = build(index)));
  return sheets;
}
