// One index of every previous-year paper that can be sat in the exam portal
// (qualifier PYQs and End Term papers), organised by level and course. The
// PYQ pages, programme level pages, course pages and practice pages all read
// from here, through `await getPyqIndex()`. Server-side only: the papers come
// from Supabase (lib/papers.ts). URLs are built in lib/pyq-urls.ts.

import { forSubject, getSubject, pyqs, subjectPlacement, subjects } from "./content";
import { END_TERM_SUBJECTS, formatSittingDate } from "./end-term";
import { getPapers, type Papers } from "./papers";
import { mockMarks, mockQuestions } from "./qualifier";
import { paperHref, paperSegment, pyqCourseHref, qualifierTerm, type PyqLevel } from "./pyq-urls";
import type { Pyq, QualifierMock } from "./types";

export type { PyqLevel };
export type PyqExam = "qualifier" | "end-term";

export const PYQ_LEVELS: { slug: PyqLevel; name: string; short: string; description: string }[] = [
  { slug: "foundation", name: "Foundation Level", short: "Foundation", description: "Maths, Statistics, Computational Thinking, English and Python." },
  { slug: "diploma", name: "Diploma Level", short: "Diploma", description: "Programming, databases, app development, machine learning and business data." },
  { slug: "degree", name: "BS Degree Level", short: "Degree", description: "Deep learning, NLP, software testing and professional growth." },
];

/** Newest and fullest first: End Term papers cover the whole syllabus, the qualifier weeks 1–4. */
export const PYQ_EXAMS: { slug: PyqExam; label: string; description: string }[] = [
  { slug: "end-term", label: "End Term", description: "Full-syllabus papers from each term's End Term exam." },
  { slug: "qualifier", label: "Qualifier", description: "Weeks 1–4 of the four qualifier courses." },
];

export type PaperSummary = {
  slug: string;
  /** Last URL segment, e.g. end-term-aug-2025-forenoon. */
  segment: string;
  href: string;
  exam: PyqExam;
  /** "31 Aug 2025" or "May 2024". */
  label: string;
  /** "Forenoon" / "Afternoon" for End Term sittings. */
  session?: string;
  /** IITM term the paper belongs to, e.g. "May 2025". */
  term?: string;
  /** ISO-ish date used for newest-first ordering. */
  sortKey: string;
  questions: number;
  marks: number;
  durationMin: number;
};

export type CoursePyqs = {
  slug: string;
  name: string;
  short: string;
  code?: string;
  level: PyqLevel;
  /** Heading the course is listed under on the hub, e.g. "Foundation courses". */
  group: string;
  /** False for BS in Data Science courses that aren't part of BTechi's curriculum. */
  inCurriculum: boolean;
  /** This course's PYQ page, /pyqs/<level>/<course>. */
  href: string;
  /** BTechi course page, when there is one. */
  courseHref?: string;
  papers: PaperSummary[];
};

const MONTHS: Record<string, string> = { january: "01", may: "05", september: "09" };
const SESSION_NAME = { FN: "Forenoon", AN: "Afternoon" } as const;

function summarise(p: QualifierMock, exam: PyqExam): PaperSummary {
  const base = { slug: p.slug, segment: paperSegment(p), href: paperHref(p), exam, questions: mockQuestions(p).length, marks: mockMarks(p), durationMin: p.durationMin };
  if (p.endTerm) {
    return {
      ...base,
      label: formatSittingDate(p.endTerm.date),
      session: SESSION_NAME[p.endTerm.session],
      term: p.endTerm.term,
      sortKey: `${p.endTerm.date}-${p.endTerm.session === "FN" ? 1 : 0}`,
    };
  }
  const t = qualifierTerm(p.slug);
  const label = p.title.split(" · ").at(-1) ?? p.title;
  return { ...base, label, term: label, sortKey: t ? `${t.year}-${MONTHS[t.month]}-01` : "0" };
}

const newestFirst = (a: PaperSummary, b: PaperSummary) => b.sortKey.localeCompare(a.sortKey);

const END_TERM_LEVEL: Record<(typeof END_TERM_SUBJECTS)[number]["level"], PyqLevel> = {
  foundation: "foundation",
  "diploma-programming": "diploma",
  "diploma-data-science": "diploma",
  degree: "degree",
};

const DS_GROUP: Record<(typeof END_TERM_SUBJECTS)[number]["level"], string> = {
  foundation: "BS in Data Science · Foundation courses",
  "diploma-programming": "BS in Data Science · Diploma in Programming",
  "diploma-data-science": "BS in Data Science · Diploma in Data Science",
  degree: "BS in Data Science · Degree courses",
};

/** Courses grouped under their hub headings, keeping first-seen order. */
export function groupCourses(courses: CoursePyqs[]) {
  const groups = new Map<string, CoursePyqs[]>();
  for (const c of courses) groups.set(c.group, [...(groups.get(c.group) ?? []), c]);
  return [...groups.entries()].map(([name, list]) => ({ name, courses: list }));
}

function buildIndex({ pyqGroups, endTermPapersFor }: Papers) {
  function papersFor(subjectSlug: string) {
    const qualifier = pyqGroups.find((g) => g.subjectSlug === subjectSlug)?.papers ?? [];
    return [...endTermPapersFor(subjectSlug).map((p) => summarise(p, "end-term")), ...qualifier.map((p) => summarise(p, "qualifier"))].sort(newestFirst);
  }

  /** Every course with at least one paper: curriculum courses first (in curriculum order), then BS in Data Science courses. */
  const pyqCourses: CoursePyqs[] = [
    ...subjects
      .map((s): CoursePyqs => {
        const { level, group } = subjectPlacement(s);
        const etSubject = END_TERM_SUBJECTS.find((e) => e.slug === s.slug);
        return {
          slug: s.slug,
          name: s.name,
          short: etSubject?.short ?? s.name,
          code: s.code,
          level: s.level as PyqLevel,
          group: group?.name ?? `${level.short} courses`,
          inCurriculum: true,
          href: pyqCourseHref(s.slug, s.level as PyqLevel),
          courseHref: `/subjects/${s.slug}`,
          papers: papersFor(s.slug),
        };
      })
      // Courses with only CMS-uploaded papers get a PYQ page too.
      .filter((c) => c.papers.length > 0 || forSubject(pyqs, c.slug).length > 0),
    ...END_TERM_SUBJECTS.filter((e) => !getSubject(e.slug)).map(
      (e): CoursePyqs => ({
        slug: e.slug,
        name: e.name,
        short: e.short,
        level: END_TERM_LEVEL[e.level],
        group: DS_GROUP[e.level],
        inCurriculum: false,
        href: pyqCourseHref(e.slug, END_TERM_LEVEL[e.level]),
        papers: papersFor(e.slug),
      }),
    ),
  ];

  const getPyqCourse = (slug: string) => pyqCourses.find((c) => c.slug === slug);

  const pyqCoursesForLevel = (level: PyqLevel) => pyqCourses.filter((c) => c.level === level);

  const pyqPapersFor = (slug: string, exam?: PyqExam) => (getPyqCourse(slug)?.papers ?? []).filter((p) => !exam || p.exam === exam);

  const allPyqPapers = pyqCourses.flatMap((c) => c.papers.map((p) => ({ ...p, course: c })));

  const pyqTotals = {
    courses: pyqCourses.length,
    papers: allPyqPapers.length,
    questions: allPyqPapers.reduce((n, p) => n + p.questions, 0),
  };

  /** The full paper (questions and key) behind /pyqs/<level>/<course>/<segment>. */
  function findPaper(courseSlug: string, segment: string): QualifierMock | undefined {
    const qualifier = pyqGroups.find((g) => g.subjectSlug === courseSlug)?.papers ?? [];
    return [...endTermPapersFor(courseSlug), ...qualifier].find((p) => paperSegment(p) === segment);
  }

  return { pyqCourses, getPyqCourse, pyqCoursesForLevel, pyqPapersFor, allPyqPapers, pyqTotals, findPaper };
}

export type PyqIndex = ReturnType<typeof buildIndex>;

const built = new WeakMap<Papers, PyqIndex>();

/** The PYQ index over the current papers (see lib/papers.ts), built once per load. */
export async function getPyqIndex(): Promise<PyqIndex> {
  const papers = await getPapers();
  let index = built.get(papers);
  if (!index) built.set(papers, (index = buildIndex(papers)));
  return index;
}

/* ───────────── CMS-uploaded papers (PDF + topic analysis) ───────────── */

/** Last URL segment of an uploaded paper, e.g. quiz-1-january-2024. */
export const uploadedPyqSegment = (p: Pyq) => `${p.exam.toLowerCase().replace(/ /g, "-")}-${p.term.toLowerCase()}-${p.year}`;

export const uploadedPyqHref = (p: Pyq) => `${pyqCourseHref(p.subjectSlug, (getSubject(p.subjectSlug)?.level as PyqLevel) ?? undefined)}/${uploadedPyqSegment(p)}`;

export const findUploadedPyq = (courseSlug: string, segment: string) =>
  forSubject(pyqs, courseSlug).find((p) => uploadedPyqSegment(p) === segment);
