// Domain types. These mirror the tables in supabase/schema.sql so the
// static seed in src/lib/data can be swapped for database queries later.

export type Accent = "yellow" | "blue" | "purple" | "green" | "teal";

/** A group of courses inside a level, e.g. "Diploma in Data Analytics for Business". */
export type CourseGroup = {
  slug: string;
  name: string;
  credits: number;
  summary: string;
};

/** IITM BS programs are organised by level, not semester. */
export type Level = {
  slug: string;
  name: string;
  short: string;
  accent: Accent;
  credits: number;
  /** Cumulative credits on completing this level. */
  cumulativeCredits: number;
  courses: string;
  duration: string;
  effort: string;
  entry: string;
  exit: string;
  groups?: CourseGroup[];
};

export type Program = {
  slug: string;
  name: string;
  /** Full degree title. */
  degree: string;
  tagline: string;
  description: string;
  university: string;
  accent: Accent;
  totalCredits: number;
  maxYears: number;
  levels: Level[];
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
};

export type Unit = {
  id: string;
  number: number;
  title: string;
  topics: Topic[];
};

export type Subject = {
  slug: string;
  name: string;
  /** Official course code, e.g. BSMA1001. Electives may not have one yet. */
  code?: string;
  programSlug: string;
  level: string;
  /** Course group within the level (see Level.groups). */
  group?: string;
  kind: "course" | "project";
  credits: number;
  prerequisites: string;
  /** Optional until the course page is written. */
  description?: string;
  /** Empty until the curriculum is published. */
  units: Unit[];
};

/** Editorial quality flag shown on every resource (PRD §34). */
export type Quality = "verified" | "needs-review" | "outdated";

/** Publishing workflow state (PRD §33). */
export type ContentStatus = "draft" | "pending" | "approved" | "published" | "rejected" | "archived";

export type NoteKind = "Lecture notes" | "Cheat sheet" | "Revision" | "Lab manual";

export type Note = {
  id: string;
  title: string;
  description: string;
  subjectSlug: string;
  unitId: string;
  topicSlug?: string;
  kind: NoteKind;
  pages: number;
  sizeKB: number;
  /** Object-storage URL. Missing means the file is not uploaded yet. */
  fileUrl?: string;
  quality: Quality;
  author: string;
  downloads: number;
  updatedAt: string;
};

export type VideoLevel = "Beginner" | "Intermediate" | "Advanced";

export type Video = {
  id: string;
  title: string;
  subjectSlug: string;
  unitId: string;
  topicSlug?: string;
  /** YouTube video id. Embedded on demand, never re-hosted (PRD §15). */
  youtubeId?: string;
  duration: string;
  level: VideoLevel;
  channel: string;
  views: number;
};

export type Book = {
  slug: string;
  title: string;
  authors: string[];
  edition?: string;
  publisher: string;
  year?: number;
  isbn?: string;
  subjectSlugs: string[];
  recommendedFor: string;
  why: string;
  chapters: string[];
  /** Only legal sources — publisher pages or author-hosted free editions. */
  link?: { label: string; url: string };
  free: boolean;
};

export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuestionType =
  | "mcq"
  | "multi"
  | "truefalse"
  | "fill"
  | "numerical"
  | "short";

export type Question = {
  id: string;
  subjectSlug: string;
  unitId: string;
  topicSlug: string;
  difficulty: Difficulty;
  type: QuestionType;
  prompt: string;
  /** Optional case-study / context block shown above the prompt. */
  context?: string;
  options?: string[];
  /**
   * mcq / truefalse: index of the correct option.
   * multi: indices of all correct options.
   * numerical: the value, checked with `tolerance`.
   * fill / short: accepted answers (fill) or a model answer (short).
   */
  answer: number | number[] | string[];
  tolerance?: number;
  explanation: string;
  source?: string;
};

/** IITM BS assessments: two in-person quizzes and an end-term exam per term. */
export type ExamKind = "Quiz 1" | "Quiz 2" | "End Term";
export type Term = "January" | "May" | "September";

export type Pyq = {
  id: string;
  subjectSlug: string;
  year: number;
  term: Term;
  exam: ExamKind;
  marks: number;
  durationMin: number;
  /** Topic slugs examined in this paper — powers PYQ analysis (PRD §22). */
  topics: string[];
  questionIds: string[];
  fileUrl?: string;
};

export type Assignment = {
  id: string;
  subjectSlug: string;
  unitId: string;
  title: string;
  description: string;
  due?: string;
};

export type ResourceKind = "note" | "video" | "book" | "question" | "pyq" | "topic";
