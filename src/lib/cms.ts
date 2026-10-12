// Published CMS content (courses, weeks, topics, notes, videos, books and
// practice questions written in /admin), read from Supabase through the
// published_content() function in supabase/0003_cms.sql and applied to
// lib/content.ts. Server-side only; the browser receives the same content
// through <ContentSnapshot> in the root layout.

import { cache } from "react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./supabase/env";
import { applyContent, codeSubjects, programs, type CmsContent } from "./content";
import type { Book, Difficulty, Note, NoteKind, Question, QuestionType, Subject, Unit, Video, VideoLevel } from "./types";
import { slugify } from "./utils";

/** Cache tag on the published content. Admin server actions expire it after every change. */
export const CMS_TAG = "cms";

const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: { fetch: (input, init) => fetch(input, { ...init, next: { revalidate: 300, tags: [CMS_TAG] } }) },
});

type Raw = {
  courses: {
    slug: string;
    name: string;
    code: string | null;
    program: string;
    level: string;
    group: string | null;
    kind: "course" | "project";
    credits: number;
    prerequisites: string;
    description: string | null;
  }[];
  units: { id: string; subject: string; number: number; title: string; topics: { slug: string; title: string; summary: string; minutes: number }[] }[];
  resources: {
    id: string;
    kind: "note" | "video" | "book";
    title: string;
    description: string;
    subject: string;
    unit: string | null;
    topic: string | null;
    author: string | null;
    tags: string[] | null;
    visibility: "public" | "registered";
    quality: "verified" | "needs_review" | "outdated";
    hasFile: boolean;
    fileSize: number | null;
    fileType: string | null;
    url: string | null;
    downloads: number;
    updatedAt: string;
    note: { note_kind: string | null; pages: number | null } | null;
    video: { youtube_id: string | null; duration: string | null; level: string | null; channel: string | null } | null;
    book: {
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
  }[];
  questions: {
    id: string;
    subject: string;
    unit: string | null;
    topic: string | null;
    type: string;
    difficulty: Difficulty;
    prompt: string;
    context: string | null;
    answer: Question["answer"];
    tolerance: number | null;
    explanation: string;
    source: string | null;
    options: string[];
  }[];
};

const NOTE_KINDS: NoteKind[] = ["Lecture notes", "Cheat sheet", "Formula sheet", "Revision", "Lab manual"];
const VIDEO_LEVELS: VideoLevel[] = ["Beginner", "Intermediate", "Advanced"];
const QUESTION_TYPES: QuestionType[] = ["mcq", "multi", "truefalse", "fill", "numerical", "short"];

/** Book URLs: readable, and stable unless the title changes. */
export const bookSlug = (title: string, id: string) => `${slugify(title).slice(0, 60)}-${id.slice(0, 6)}`;

const day = (iso: string) => iso.slice(0, 10);

function toContent(raw: Raw, version: string): CmsContent {
  const courses: Subject[] = raw.courses
    // A course whose level is not in the code's program would break placement lookups.
    .filter((c) => programs.find((p) => p.slug === c.program)?.levels.some((l) => l.slug === c.level))
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      code: c.code ?? undefined,
      programSlug: c.program,
      level: c.level,
      group: c.group ?? undefined,
      kind: c.kind,
      credits: c.credits,
      prerequisites: c.prerequisites,
      description: c.description ?? undefined,
      units: [],
    }));
  const known = new Set([...codeSubjects, ...courses].map((s) => s.slug));
  const units: CmsContent["units"] = raw.units
    .filter((u) => known.has(u.subject))
    .map((u) => ({ id: u.id, subjectSlug: u.subject, number: u.number, title: u.title, topics: u.topics } satisfies Unit & { subjectSlug: string }));

  const resources = raw.resources.filter((r) => known.has(r.subject));
  const notes: Note[] = resources
    .filter((r) => r.kind === "note")
    .map((r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      subjectSlug: r.subject,
      unitId: r.unit ?? "",
      topicSlug: r.topic ?? undefined,
      kind: NOTE_KINDS.find((k) => k === r.note?.note_kind) ?? "Lecture notes",
      pages: r.note?.pages ?? 0,
      sizeKB: Math.round((r.fileSize ?? 0) / 1024),
      fileUrl: r.hasFile ? `/api/files/${r.id}` : undefined,
      fileType: r.fileType ?? undefined,
      externalUrl: r.url ?? undefined,
      signInRequired: r.visibility === "registered",
      quality: r.quality === "needs_review" ? "needs-review" : r.quality,
      author: r.author || "BTechi Team",
      downloads: r.downloads,
      updatedAt: day(r.updatedAt),
    }));
  const videos: Video[] = resources
    .filter((r) => r.kind === "video" && r.video?.youtube_id)
    .map((r) => ({
      id: r.id,
      title: r.title,
      subjectSlug: r.subject,
      unitId: r.unit ?? "",
      topicSlug: r.topic ?? undefined,
      youtubeId: r.video!.youtube_id!,
      duration: r.video!.duration ?? "",
      level: VIDEO_LEVELS.find((l) => l === r.video!.level) ?? "Beginner",
      channel: r.video!.channel ?? "",
      views: 0,
    }));
  const books: Book[] = resources
    .filter((r) => r.kind === "book" && r.book)
    .map((r) => {
      const b = r.book!;
      return {
        slug: bookSlug(r.title, r.id),
        title: r.title,
        authors: b.authors,
        edition: b.edition ?? undefined,
        publisher: b.publisher ?? "",
        year: b.year ?? undefined,
        isbn: b.isbn ?? undefined,
        subjectSlugs: [r.subject],
        recommendedFor: b.recommended_for ?? "",
        why: b.why ?? r.description,
        chapters: b.chapters ?? [],
        link: r.url ? { label: b.free ? "Read free online" : "Publisher page", url: r.url } : undefined,
        free: b.free,
      };
    });
  const questions: Question[] = raw.questions
    .filter((q) => known.has(q.subject) && (QUESTION_TYPES as string[]).includes(q.type))
    .map((q) => ({
      id: q.id,
      subjectSlug: q.subject,
      unitId: q.unit ?? "",
      topicSlug: q.topic ?? "",
      difficulty: q.difficulty,
      type: q.type as QuestionType,
      prompt: q.prompt,
      context: q.context ?? undefined,
      options: q.options.length ? q.options : undefined,
      answer: q.answer,
      tolerance: q.tolerance ?? undefined,
      explanation: q.explanation,
      source: q.source ?? undefined,
    }));
  return { version, courses, units, notes, videos, books, questions };
}

// FNV-1a: a short fingerprint of the content, so unchanged content is not re-applied.
function fingerprint(text: string) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36) + text.length.toString(36);
}

const EMPTY: CmsContent = { version: "", courses: [], units: [], notes: [], videos: [], books: [], questions: [] };
let last = EMPTY;
let warned = false;

async function fetchContent(): Promise<CmsContent> {
  const { data, error } = await db.rpc("published_content", undefined, { get: true });
  if (error || !data) {
    // Keep serving the last good content (or the seed) rather than failing the page.
    if (!warned) console.error(`Loading CMS content failed (has supabase/0003_cms.sql been run?): ${error?.message ?? "no data"}`);
    warned = true;
    return last;
  }
  warned = false;
  return toContent(data as Raw, fingerprint(JSON.stringify(data)));
}

/**
 * Loads the published CMS content and applies it to lib/content.ts. Call it
 * before reading content on the server. Returns the content for the browser.
 */
export const loadContent = cache(async () => {
  last = await fetchContent();
  applyContent(last);
  return last;
});
