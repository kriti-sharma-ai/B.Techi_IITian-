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

export type NoteKind = "Lecture notes" | "Cheat sheet" | "Formula sheet" | "Revision" | "Lab manual";

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

export type ResourceKind = "note" | "video" | "book" | "question" | "pyq" | "topic" | "skill";

/* ───────────── Skills (career courses outside the degree syllabus) ───────────── */

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";

export type SkillCategory = {
  slug: string;
  name: string;
  description: string;
  accent: Accent;
};

export type SkillLecture = {
  title: string;
  minutes: number;
  kind: "video" | "reading" | "quiz" | "project";
  /** Free preview before enrolling. */
  preview?: boolean;
};

export type SkillSection = { title: string; lectures: SkillLecture[] };

export type SkillCourse = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  level: SkillLevel;
  accent: Accent;
  /** Key into the icon map in components/skill-card.tsx. */
  icon: string;
  /** Short code or formula drawn on the thumbnail. */
  snippet: string;
  instructor: { name: string; title: string };
  rating: number;
  ratings: number;
  learners: number;
  updated: string;
  language: string;
  badge?: "bestseller" | "new" | "popular";
  outcomes: string[];
  requirements: string[];
  description: string[];
  sections: SkillSection[];
  /** Degree courses this skill supports (Subject slugs). */
  relatedSubjects: string[];
  certificate: boolean;
};

export type SkillPath = {
  slug: string;
  title: string;
  description: string;
  accent: Accent;
  courses: string[];
};

/* ───────────── Qualifier pack (Math 1 · Stats 1 · CT · English 1) ───────────── */

/** IITM qualifier formats: single choice, multiple select, numerical answer. */
export type QualifierQuestionType = "mcq" | "multi" | "numerical";

export type QualifierQuestion = {
  id: string;
  type: QualifierQuestionType;
  prompt: string;
  /** Passage or data table shown above the prompt. */
  context?: string;
  /** Pseudocode, rendered monospaced. */
  code?: string;
  options?: string[];
  /** mcq: option index. multi: option indices. numerical: the value (checked with `tolerance`). */
  answer: number | number[];
  tolerance?: number;
  marks: number;
  explanation: string;
};

export type QualifierSection = {
  /** Subject slug of the Foundation course this section examines. */
  subjectSlug: string;
  title: string;
  short: string;
  questions: QualifierQuestion[];
};

export type QualifierMock = {
  slug: string;
  title: string;
  description: string;
  difficulty: "Standard" | "Challenging";
  durationMin: number;
  sections: QualifierSection[];
};
