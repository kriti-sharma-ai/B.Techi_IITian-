// Shared by the admin UI (src/components/admin) and its server actions
// (src/app/admin/actions.ts): roles, workflow states, row shapes, limits and
// validation. Row Level Security in supabase/*.sql is the final guard; these
// checks give staff clear messages before a write is refused.

import type { Role } from "./store";
import type { QualifierMock } from "./types";

/* ───────────── Roles ───────────── */

export const ROLES: Role[] = ["student", "contributor", "moderator", "admin", "super_admin"];

export const ROLE_LABEL: Record<Role, string> = {
  student: "Student",
  contributor: "Contributor",
  moderator: "Moderator",
  admin: "Admin",
  super_admin: "Super admin",
};

export const ROLE_DESCRIPTION: Record<Role, string> = {
  student: "View, download, practise, bookmark, track progress",
  contributor: "Upload resources and questions for review",
  moderator: "Review and publish content, edit the curriculum and papers, handle reports",
  admin: "Everything moderators do, plus users, roles, analytics and downloads",
  super_admin: "Full control, including granting admin rights",
};

export const atLeast = (role: Role | undefined | null, min: Role) => !!role && ROLES.indexOf(role) >= ROLES.indexOf(min);

/** Roles `actor` may give to, or take from, someone who currently has `target`. Mirrors admin_set_role() in 0003_cms.sql. */
export function assignableRoles(actor: Role, target: Role): Role[] {
  if (!atLeast(actor, "admin")) return [];
  if (actor === "super_admin") return ROLES;
  return atLeast(target, "admin") ? [] : ROLES.filter((r) => !atLeast(r, "admin"));
}

/* ───────────── Workflow ───────────── */

export type Status = "draft" | "pending" | "published" | "rejected" | "archived";
export type Quality = "verified" | "needs_review" | "outdated";
export type ResourceKind = "note" | "video" | "book";

export const STATUS_LABEL: Record<Status, string> = {
  draft: "Draft",
  pending: "Pending review",
  published: "Published",
  rejected: "Changes requested",
  archived: "Unpublished",
};

export const STATUS_TONE = { draft: "neutral", pending: "amber", published: "green", rejected: "red", archived: "neutral" } as const;

export const QUALITY_LABEL: Record<Quality, string> = { verified: "Verified", needs_review: "Needs review", outdated: "Outdated" };

export const KIND_LABEL: Record<ResourceKind, string> = { note: "Note", video: "Video", book: "Book" };

/* ───────────── Rows (as the admin reads them) ───────────── */

export const RESOURCE_SELECT =
  "id, kind, title, description, status, quality, visibility, author, tags, file_path, file_size, file_type, external_url, download_count, review_note, created_at, updated_at, published_at, created_by, subject:subjects(slug, name), unit:units(id, number, title), topic:topics(id, slug, title), notes(note_kind, pages), videos(youtube_id, duration, level, channel), books(authors, edition, publisher, year, isbn, recommended_for, why, chapters, free), creator:profiles!resources_created_by_fkey(name)";

export type ResourceRow = {
  id: string;
  kind: ResourceKind;
  title: string;
  description: string | null;
  status: Status;
  quality: Quality;
  visibility: "public" | "registered" | "private";
  author: string | null;
  tags: string[] | null;
  file_path: string | null;
  file_size: number | null;
  file_type: string | null;
  external_url: string | null;
  download_count: number;
  review_note: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  created_by: string | null;
  subject: { slug: string; name: string } | null;
  unit: { id: string; number: number; title: string } | null;
  topic: { id: string; slug: string; title: string } | null;
  notes: { note_kind: string | null; pages: number | null } | null;
  videos: { youtube_id: string | null; duration: string | null; level: string | null; channel: string | null } | null;
  books: {
    authors: string[];
    edition: string | null;
    publisher: string | null;
    year: number | null;
    isbn: string | null;
    recommended_for: string | null;
    why: string | null;
    chapters: string[] | null;
    free: boolean;
  } | null;
  creator: { name: string } | null;
};

export const QUESTION_SELECT =
  "id, type, difficulty, prompt, context, answer, tolerance, explanation, source, status, review_note, created_at, updated_at, created_by, subject:subjects(slug, name), unit:units(id, number, title), topic:topics(id, slug, title), options:question_options(position, body), creator:profiles!questions_created_by_fkey(name)";

export type QuestionRow = {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  context: string | null;
  answer: number | number[] | string[];
  tolerance: number | null;
  explanation: string;
  source: string | null;
  status: Status;
  review_note: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  subject: { slug: string; name: string } | null;
  unit: { id: string; number: number; title: string } | null;
  topic: { id: string; slug: string; title: string } | null;
  options: { position: number; body: string }[];
  creator: { name: string } | null;
};

/** A course row with its weeks, for the curriculum builder and placement pickers. */
export const COURSE_SELECT =
  "id, slug, name, code, kind, credits, prerequisites, description, status, from_code, level:levels(slug), group:course_groups(slug), units(id, number, title, topics(id, slug, title, summary, minutes, position))";

export type DbTopic = { id: string; slug: string; title: string; summary: string | null; minutes: number | null; position: number };
export type DbWeek = { id: string; number: number; title: string; topics: DbTopic[] };
export type CourseRow = {
  id: string;
  slug: string;
  name: string;
  code: string | null;
  kind: "course" | "project";
  credits: number;
  prerequisites: string | null;
  description: string | null;
  status: Status;
  from_code: boolean;
  level: { slug: string } | null;
  group: { slug: string } | null;
  units: DbWeek[];
};

export const sortWeeks = (weeks: DbWeek[]) =>
  [...weeks].sort((a, b) => a.number - b.number).map((w) => ({ ...w, topics: [...w.topics].sort((a, b) => a.position - b.position) }));

/* ───────────── Inputs ───────────── */

export type Result<T = null> = { ok: true; data: T } | { ok: false; error: string };

export const COURSE_CODE = /^[A-Z]{2,6}\d{3,5}$/;
export const WEEKS = 12;

export type CourseInput = {
  name: string;
  code: string;
  level: string;
  group: string;
  kind: "course" | "project";
  credits: number;
  prerequisites: string;
  description: string;
};

export type TopicInput = { id?: string; title: string; summary: string; minutes: number };
export type WeekInput = { id?: string; subjectSlug: string; number: number; title: string; topics: TopicInput[] };

export const NOTE_KINDS = ["Lecture notes", "Cheat sheet", "Formula sheet", "Revision", "Lab manual"] as const;
export const VIDEO_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export type ResourceInput = {
  id?: string;
  kind: ResourceKind;
  title: string;
  description: string;
  subjectSlug: string;
  unitId: string;
  topicId: string;
  author: string;
  tags: string[];
  visibility: "public" | "registered" | "private";
  quality?: Quality;
  /** A file already uploaded to the `resources` bucket, or null to keep the current one. */
  file: { path: string; name: string } | null;
  /** Drop the current file (notes that become links). */
  removeFile?: boolean;
  externalUrl: string;
  note: { kind: (typeof NOTE_KINDS)[number]; pages: number };
  video: { url: string; duration: string; level: (typeof VIDEO_LEVELS)[number]; channel: string };
  book: {
    authors: string[];
    edition: string;
    publisher: string;
    year: number | null;
    isbn: string;
    recommendedFor: string;
    why: string;
    chapters: string[];
    free: boolean;
  };
  status: "draft" | "pending" | "published";
};

export type QuestionType = "mcq" | "multi" | "truefalse" | "fill" | "numerical" | "short";
export type Difficulty = "Easy" | "Medium" | "Hard";
export const QUESTION_TYPE_LABEL: Record<QuestionType, string> = {
  mcq: "Single choice",
  multi: "Multiple select",
  truefalse: "True / False",
  fill: "Fill in the blank",
  numerical: "Numerical",
  short: "Short answer",
};
export const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];

export type QuestionInput = {
  id?: string;
  subjectSlug: string;
  unitId: string;
  topicId: string;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  context: string;
  options: string[];
  answer: number | number[] | string[];
  tolerance: number | null;
  explanation: string;
  source: string;
  status: "draft" | "pending" | "published";
};

/** What is wrong with a question, or null. Used by the editor and again by the server action. */
export function questionProblem(q: QuestionInput): string | null {
  if (q.prompt.trim().length < 5) return "Write the question.";
  if (!q.explanation.trim()) return "Every question needs an explanation (the \"Why?\" students see).";
  const choice = q.type === "mcq" || q.type === "multi" || q.type === "truefalse";
  if (choice) {
    if (q.options.length < 2 || q.options.some((o) => !o.trim())) return "Give at least two options, none empty.";
    const valid = (i: unknown) => Number.isInteger(i) && (i as number) >= 0 && (i as number) < q.options.length;
    if (q.type === "multi") {
      if (!Array.isArray(q.answer) || q.answer.length === 0 || !q.answer.every(valid)) return "Tick every correct option.";
    } else if (!valid(q.answer)) return "Pick the correct option.";
  }
  if (q.type === "numerical" && (typeof q.answer !== "number" || !Number.isFinite(q.answer))) return "Enter the numerical answer.";
  if ((q.type === "fill" || q.type === "short") && (!Array.isArray(q.answer) || !q.answer.some((a) => typeof a === "string" && a.trim())))
    return q.type === "fill" ? "Add at least one accepted answer." : "Add a model answer.";
  return null;
}

/* ───────────── Files ───────────── */

export const MAX_FILE_MB = 25;

/** Formats a note may be uploaded in, with the bytes every such file starts with. */
export const FILE_FORMATS = [
  { type: "application/pdf", ext: ["pdf"], label: "PDF", magic: [[0x25, 0x50, 0x44, 0x46, 0x2d]] },
  { type: "application/msword", ext: ["doc"], label: "Word", magic: [[0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]] },
  {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ext: ["docx"],
    label: "Word",
    magic: [[0x50, 0x4b, 0x03, 0x04]],
  },
  { type: "image/png", ext: ["png"], label: "PNG", magic: [[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]] },
  { type: "image/jpeg", ext: ["jpg", "jpeg"], label: "JPEG", magic: [[0xff, 0xd8, 0xff]] },
  // RIFF....WEBP: bytes 8-11 are checked separately.
  { type: "image/webp", ext: ["webp"], label: "WebP", magic: [[0x52, 0x49, 0x46, 0x46]] },
] as const;

export const formatForName = (name: string) => {
  const ext = name.toLowerCase().split(".").pop() ?? "";
  return FILE_FORMATS.find((f) => (f.ext as readonly string[]).includes(ext));
};

/** The format whose signature these first bytes match, if any. */
export function sniffFormat(bytes: Uint8Array) {
  return FILE_FORMATS.find(
    (f) =>
      f.magic.some((m) => m.every((b, i) => bytes[i] === b)) &&
      (f.type !== "image/webp" || String.fromCharCode(...bytes.slice(8, 12)) === "WEBP"),
  );
}

/** YouTube video id from a watch, short, embed or youtu.be link (or a bare id). */
export function youtubeId(input: string): string | null {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    const host = u.hostname.replace(/^www\.|^m\./, "");
    if (host === "youtu.be") return /^[\w-]{11}$/.test(u.pathname.slice(1)) ? u.pathname.slice(1) : null;
    if (host !== "youtube.com" && host !== "youtube-nocookie.com") return null;
    const v = u.searchParams.get("v") ?? u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{11})/)?.[1];
    return v && /^[\w-]{11}$/.test(v) ? v : null;
  } catch {
    return null;
  }
}

export function httpsUrl(input: string) {
  try {
    const u = new URL(input.trim());
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

/* ───────────── Papers ───────────── */

export type PaperKind = "mock" | "qualifier_pyq" | "quiz" | "end_term";
export const PAPER_KIND_LABEL: Record<PaperKind, string> = { mock: "Qualifier mock", qualifier_pyq: "Qualifier PYQ", quiz: "Quiz PYQ", end_term: "End Term PYQ" };

export type PaperRow = { slug: string; kind: PaperKind; subject_slug: string | null; title: string; position: number; updated_at: string };

/** Everything wrong with a paper's JSON (shape of QualifierMock in lib/types.ts); empty when it can be saved. */
export function paperProblems(data: unknown): string[] {
  const out: string[] = [];
  const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
  const str = (v: unknown) => typeof v === "string" && v.trim().length > 0;
  if (!isObj(data)) return ["The paper must be a JSON object."];
  const p = data as Partial<QualifierMock> & Record<string, unknown>;
  if (!str(p.slug) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug as string)) out.push("`slug` must be lowercase words joined by hyphens.");
  if (!str(p.title)) out.push("`title` is required.");
  if (typeof p.description !== "string") out.push("`description` must be a string.");
  if (p.difficulty !== "Standard" && p.difficulty !== "Challenging") out.push('`difficulty` must be "Standard" or "Challenging".');
  if (typeof p.durationMin !== "number" || p.durationMin <= 0) out.push("`durationMin` must be a positive number.");
  if (!Array.isArray(p.sections) || p.sections.length === 0) return [...out, "`sections` must be a non-empty array."];
  const ids = new Set<string>();
  p.sections.forEach((s, si) => {
    const at = `sections[${si}]`;
    if (!isObj(s)) return out.push(`${at} must be an object.`);
    if (!str(s.subjectSlug)) out.push(`${at}.subjectSlug is required.`);
    if (!str(s.title) || !str(s.short)) out.push(`${at} needs a title and a short name.`);
    if (!Array.isArray(s.questions) || s.questions.length === 0) return out.push(`${at}.questions must be a non-empty array.`);
    s.questions.forEach((q, qi) => {
      const qa = `${at}.questions[${qi}]`;
      if (!isObj(q)) return out.push(`${qa} must be an object.`);
      if (!str(q.id)) out.push(`${qa}.id is required.`);
      else if (ids.has(q.id as string)) out.push(`${qa}.id "${q.id}" is used twice.`);
      else ids.add(q.id as string);
      if (!str(q.prompt)) out.push(`${qa}.prompt is required.`);
      if (typeof q.marks !== "number" || q.marks < 0) out.push(`${qa}.marks must be a number.`);
      if (typeof q.explanation !== "string") out.push(`${qa}.explanation must be a string.`);
      const opts = Array.isArray(q.options) ? q.options.length : 0;
      const idx = (v: unknown) => Number.isInteger(v) && (v as number) >= 0 && (v as number) < opts;
      if (q.type === "mcq") {
        if (!idx(q.answer)) out.push(`${qa}: answer must be the index of one of its options.`);
      } else if (q.type === "multi") {
        if (!Array.isArray(q.answer) || q.answer.length === 0 || !q.answer.every(idx)) out.push(`${qa}: answer must list option indexes.`);
      } else if (q.type === "numerical") {
        if (typeof q.answer !== "number") out.push(`${qa}: answer must be a number.`);
      } else if (q.type === "text") {
        if (!Array.isArray(q.answer) || !q.answer.every((a) => typeof a === "string")) out.push(`${qa}: answer must be a list of accepted strings.`);
      } else out.push(`${qa}.type must be mcq, multi, numerical or text.`);
    });
  });
  // Postgres rejects NUL in jsonb (see scripts/seed-papers.mts).
  if (JSON.stringify(data).includes("\\u0000")) out.push("The paper contains NUL characters (\\u0000).");
  return out.slice(0, 20);
}
