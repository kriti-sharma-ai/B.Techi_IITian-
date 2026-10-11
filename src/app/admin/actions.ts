"use server";

// Every write the admin makes. Each action takes the caller's access token,
// checks their role, validates the input and writes *as that user*, so Row
// Level Security (supabase/*.sql) still decides what is allowed. Changes that
// students can see refresh the site straight away.

import { revalidatePath, updateTag } from "next/cache";
import type { PostgrestError, SupabaseClient, User } from "@supabase/supabase-js";
import {
  COURSE_CODE,
  MAX_FILE_MB,
  NOTE_KINDS,
  VIDEO_LEVELS,
  WEEKS,
  atLeast,
  formatForName,
  httpsUrl,
  paperProblems,
  questionProblem,
  sniffFormat,
  youtubeId,
  type CourseInput,
  type PaperKind,
  type Quality,
  type QuestionInput,
  type ResourceInput,
  type Result,
  type Status,
  type WeekInput,
} from "@/lib/admin";
import { CMS_TAG } from "@/lib/cms";
import { codeSubjects, programs } from "@/lib/content";
import { invalidatePapers } from "@/lib/papers";
import type { Role } from "@/lib/store";
import { supabaseAs } from "@/lib/supabase/server";
import type { QualifierMock } from "@/lib/types";
import { slugify } from "@/lib/utils";

/* ───────────── Plumbing ───────────── */

type Ctx = { db: SupabaseClient; user: User; role: Role };

/** A failure whose message is safe to show to the user. */
class Refused extends Error {}

const ok = <T>(data: T): Result<T> => ({ ok: true, data });

async function withStaff<T>(token: string, min: Role, fn: (ctx: Ctx) => Promise<T>): Promise<Result<T>> {
  if (!token) return { ok: false, error: "Your session has expired. Log in again." };
  const db = supabaseAs(token);
  const {
    data: { user },
  } = await db.auth.getUser(token);
  if (!user) return { ok: false, error: "Your session has expired. Log in again." };
  const { data: profile } = await db.from("profiles").select("role").eq("id", user.id).single();
  const role = profile?.role as Role | undefined;
  if (!role || !atLeast(role, min)) return { ok: false, error: "You don't have permission to do that." };
  try {
    return ok(await fn({ db, user, role }));
  } catch (e) {
    if (e instanceof Refused) return { ok: false, error: e.message };
    console.error("Admin action failed:", e);
    return { ok: false, error: "Something went wrong. Try again." };
  }
}

function refuse(message: string): never {
  throw new Refused(message);
}

function friendly(error: PostgrestError, what: string) {
  if (error.code === "42501" || error.message.includes("row-level security")) return `You don't have permission to ${what}.`;
  if (error.code === "23505") return `Couldn't ${what}: something with the same name or number already exists.`;
  if (error.code === "P0001" || error.code === "P0002") return error.message;
  return `Couldn't ${what}: ${error.message}`;
}

/** The data of a query that returns rows, or a Refused error describing why it failed. */
function must<T>(res: { data: T; error: PostgrestError | null }, what: string): NonNullable<T> {
  if (res.error || res.data === null) refuse(res.error ? friendly(res.error, what) : `Couldn't ${what}.`);
  return res.data as NonNullable<T>;
}

/** Like must(), for .maybeSingle(): null when there is no such row. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- rows are untyped (no generated database types)
function maybe<T = Record<string, any>>(res: { data: unknown; error: PostgrestError | null }, what: string): T | null {
  if (res.error) refuse(friendly(res.error, what));
  return res.data as T | null;
}

/** Updates and deletes that RLS blocks change nothing rather than failing; this turns "nothing changed" into a message. */
function changed(rows: unknown[] | null, message: string) {
  if (!rows?.length) refuse(message);
}

/** Students see this change: refresh every page that reads CMS content. */
function siteChanged() {
  updateTag(CMS_TAG);
  revalidatePath("/", "layout");
}

const now = () => new Date().toISOString();
const clean = (s: string | undefined | null, max: number) => (s ?? "").trim().slice(0, max);

/* ───────────── Placement ───────────── */

/** Program, level and group rows for a placement defined in code, created when missing (moderators only, by RLS). */
async function placement(db: SupabaseClient, programSlug: string, levelSlug: string, groupSlug?: string) {
  const program = programs.find((p) => p.slug === programSlug);
  const level = program?.levels.find((l) => l.slug === levelSlug);
  if (!program || !level) refuse("Unknown level.");
  const p = must(
    await db
      .from("programs")
      .upsert(
        {
          slug: program.slug,
          name: program.name,
          degree: program.degree,
          tagline: program.tagline,
          description: program.description,
          accent: program.accent,
          total_credits: program.totalCredits,
          max_years: program.maxYears,
        },
        { onConflict: "slug" },
      )
      .select("id")
      .single(),
    "set up the program",
  );
  const l = must(
    await db
      .from("levels")
      .upsert(
        { program_id: p.id, slug: level.slug, name: level.name, position: program.levels.indexOf(level) + 1, credits: level.credits, exit_award: level.exit },
        { onConflict: "program_id,slug" },
      )
      .select("id")
      .single(),
    "set up the level",
  );
  let groupId: string | null = null;
  if (groupSlug) {
    const group = level.groups?.find((g) => g.slug === groupSlug);
    if (!group) refuse("Unknown course group.");
    groupId = must(
      await db
        .from("course_groups")
        .upsert({ level_id: l.id, slug: group.slug, name: group.name, credits: group.credits }, { onConflict: "level_id,slug" })
        .select("id")
        .single(),
      "set up the course group",
    ).id;
  }
  return { programId: p.id as string, levelId: l.id as string, groupId };
}

type SubjectRef = { id: string; status: Status; from_code: boolean };

/** The database row of a course. Courses added to the code after 0003_cms.sql ran are copied in on first use. */
async function subjectRef(db: SupabaseClient, slug: string): Promise<SubjectRef> {
  const { data } = await db.from("subjects").select("id, status, from_code").eq("slug", slug).maybeSingle();
  if (data) return data as SubjectRef;
  const code = codeSubjects.find((s) => s.slug === slug);
  if (!code) refuse("That course doesn't exist.");
  const { programId, levelId, groupId } = await placement(db, code.programSlug, code.level, code.group);
  return must(
    await db
      .from("subjects")
      .insert({
        program_id: programId,
        level_id: levelId,
        group_id: groupId,
        slug: code.slug,
        name: code.name,
        code: code.code ?? null,
        kind: code.kind,
        credits: code.credits,
        prerequisites: code.prerequisites,
        status: "published",
        from_code: true,
      })
      .select("id, status, from_code")
      .single(),
    "set up this course (ask a moderator to open it in the curriculum builder first)",
  ) as SubjectRef;
}

/** Checks that the week and topic belong to the course; returns their ids (or null). */
async function weekAndTopic(db: SupabaseClient, subjectId: string, unitId: string, topicId: string) {
  let unit: string | null = null;
  if (unitId) {
    const { data } = await db.from("units").select("id").eq("id", unitId).eq("subject_id", subjectId).maybeSingle();
    if (!data) refuse("That week isn't part of the selected course.");
    unit = data.id;
  }
  let topic: string | null = null;
  if (topicId) {
    const { data } = await db.from("topics").select("id, unit_id, unit:units!inner(subject_id)").eq("id", topicId).eq("unit.subject_id", subjectId).maybeSingle();
    if (!data || (unit && data.unit_id !== unit)) refuse("That topic isn't part of the selected week.");
    topic = data.id;
    unit ??= data.unit_id;
  }
  return { unit, topic };
}

/* ───────────── Courses ───────────── */

export async function saveCourse(token: string, input: CourseInput, slug?: string) {
  return withStaff(token, "moderator", async ({ db }) => {
    const name = clean(input.name, 100);
    const code = clean(input.code, 12).toUpperCase();
    if (name.length < 3) refuse("Course name must be at least 3 characters.");
    if (code && !COURSE_CODE.test(code)) refuse("Course code should look like BSMS1201.");
    const program = programs[0];
    const level = program.levels.find((l) => l.slug === input.level);
    if (!level) refuse("Pick a level.");
    if (level.groups?.length && !level.groups.some((g) => g.slug === input.group)) refuse("Pick a group for this level.");
    if (code && codeSubjects.some((s) => s.code === code && s.slug !== slug)) refuse(`${code} is already used by another course.`);
    const credits = Math.round(Number(input.credits));
    if (!Number.isFinite(credits) || credits < 0 || credits > 24) refuse("Credits must be between 0 and 24.");

    const { programId, levelId, groupId } = await placement(db, program.slug, level.slug, level.groups?.length ? input.group : undefined);
    const row = {
      name,
      code: code || null,
      kind: input.kind === "project" ? "project" : "course",
      credits,
      prerequisites: clean(input.prerequisites, 200) || "None",
      description: clean(input.description, 1000) || null,
      program_id: programId,
      level_id: levelId,
      group_id: groupId,
    };

    if (slug) {
      const existing = maybe(await db.from("subjects").select("id, status, from_code").eq("slug", slug).maybeSingle(), "load the course");
      if (!existing) refuse("That course no longer exists.");
      if (existing.from_code) refuse("Courses defined in the code can't be edited here.");
      changed(must(await db.from("subjects").update(row).eq("id", existing.id).select("id"), "save the course"), "Couldn't save the course.");
      if (existing.status === "published") siteChanged();
      return { slug };
    }

    const newSlug = slugify(name);
    if (!newSlug) refuse("Course name needs some letters or numbers.");
    if (codeSubjects.some((s) => s.slug === newSlug)) refuse("A course with this name already exists.");
    must(await db.from("subjects").insert({ ...row, slug: newSlug, status: "draft", from_code: false }).select("id").single(), "create the course");
    return { slug: newSlug };
  });
}

export async function setCourseStatus(token: string, slug: string, status: "draft" | "published") {
  return withStaff(token, "moderator", async ({ db }) => {
    const rows = must(await db.from("subjects").update({ status }).eq("slug", slug).eq("from_code", false).select("id"), "change the course");
    changed(rows, "Only courses created in the CMS can be published or hidden.");
    siteChanged();
    return null;
  });
}

export async function deleteCourse(token: string, slug: string) {
  return withStaff(token, "moderator", async ({ db }) => {
    const course = maybe(await db.from("subjects").select("id, status, from_code").eq("slug", slug).maybeSingle(), "load the course");
    if (!course) refuse("That course no longer exists.");
    if (course.from_code) refuse("Courses defined in the code can't be deleted.");
    const files = must(await db.from("resources").select("file_path").eq("subject_id", course.id).not("file_path", "is", null), "load the course's files");
    // Weeks, topics, resources and questions go with it (on delete cascade).
    changed(must(await db.from("subjects").delete().eq("id", course.id).select("id"), "delete the course"), "Couldn't delete the course.");
    if (files.length) await db.storage.from("resources").remove(files.map((f) => f.file_path as string));
    if (course.status === "published") siteChanged();
    return null;
  });
}

/* ───────────── Weeks & topics ───────────── */

export async function saveWeek(token: string, input: WeekInput) {
  return withStaff(token, "moderator", async ({ db }) => {
    const number = Math.round(Number(input.number));
    if (!(number >= 1 && number <= WEEKS)) refuse(`Week must be between 1 and ${WEEKS}.`);
    const title = clean(input.title, 120);
    if (title.length < 2) refuse("Give the week a title.");
    const topics = input.topics
      .map((t) => ({ ...t, title: clean(t.title, 120), summary: clean(t.summary, 500), minutes: Math.round(Number(t.minutes)) || 30 }))
      .filter((t) => t.title);
    if (!topics.length) refuse("Add at least one topic.");
    if (topics.some((t) => t.minutes < 1 || t.minutes > 600)) refuse("Topic length must be between 1 and 600 minutes.");

    const subject = await subjectRef(db, input.subjectSlug);
    let unitId = input.id;
    if (unitId) {
      const rows = must(await db.from("units").update({ number, title }).eq("id", unitId).eq("subject_id", subject.id).select("id"), `save week ${number}`);
      changed(rows, "That week no longer exists.");
    } else {
      unitId = must(await db.from("units").insert({ subject_id: subject.id, number, title }).select("id").single(), `add week ${number}`).id as string;
    }

    // Topic slugs are part of the URL, so they stay fixed once created and are unique within the course.
    const all = must(
      await db.from("topics").select("id, slug, unit_id, unit:units!inner(subject_id)").eq("unit.subject_id", subject.id),
      "load the course's topics",
    ) as { id: string; slug: string; unit_id: string }[];
    const current = all.filter((t) => t.unit_id === unitId);
    const keep = new Set(topics.map((t) => t.id).filter(Boolean));
    if (topics.some((t) => t.id && !current.some((c) => c.id === t.id))) refuse("A topic in this week was changed elsewhere. Reload and try again.");
    const removed = current.filter((c) => !keep.has(c.id)).map((c) => c.id);
    if (removed.length) must(await db.from("topics").delete().in("id", removed), "remove topics");

    const taken = new Set(all.filter((t) => !removed.includes(t.id)).map((t) => t.slug));
    for (const [i, t] of topics.entries()) {
      const fields = { title: t.title, summary: t.summary || null, minutes: t.minutes, position: i + 1 };
      if (t.id) {
        must(await db.from("topics").update(fields).eq("id", t.id), `save "${t.title}"`);
        continue;
      }
      const base = slugify(t.title).slice(0, 60) || "topic";
      let slug = base;
      for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`;
      taken.add(slug);
      must(await db.from("topics").insert({ ...fields, unit_id: unitId, slug }), `add "${t.title}"`);
    }
    if (subject.status === "published") siteChanged();
    return { id: unitId };
  });
}

export async function deleteWeek(token: string, unitId: string) {
  return withStaff(token, "moderator", async ({ db }) => {
    const unit = maybe(await db.from("units").select("id, subject:subjects(status)").eq("id", unitId).maybeSingle(), "load the week");
    if (!unit) refuse("That week no longer exists.");
    changed(must(await db.from("units").delete().eq("id", unitId).select("id"), "delete the week"), "Couldn't delete the week.");
    if ((unit.subject as unknown as { status: Status } | null)?.status === "published") siteChanged();
    return null;
  });
}

/* ───────────── Resources ───────────── */

/** Checks an upload really is the file type its name says (by its first bytes) and within the size limit. */
async function verifyUpload(db: SupabaseClient, user: User, path: string) {
  if (!path.startsWith(`${user.id}/`) || path.includes("..")) refuse("That upload doesn't belong to you.");
  const expected = formatForName(path);
  if (!expected) refuse("Only PDF, Word and image files can be uploaded.");
  const { data: signed, error } = await db.storage.from("resources").createSignedUrl(path, 60);
  if (error || !signed) refuse("The uploaded file wasn't found. Upload it again.");
  const res = await fetch(signed.signedUrl, { headers: { Range: "bytes=0-15" }, cache: "no-store" });
  if (!res.ok) refuse("Couldn't read the uploaded file. Upload it again.");
  const bytes = new Uint8Array(await res.arrayBuffer()).slice(0, 16);
  const size = Number(res.headers.get("content-range")?.split("/")[1] ?? res.headers.get("content-length") ?? 0);
  const actual = sniffFormat(bytes);
  const problem =
    actual?.type !== expected.type
      ? `That file isn't a real ${expected.label} file.`
      : size > MAX_FILE_MB * 1024 * 1024
        ? `Files must be ${MAX_FILE_MB} MB or smaller.`
        : null;
  if (problem) {
    await db.storage.from("resources").remove([path]);
    refuse(problem);
  }
  return { type: expected.type, size };
}

const DETAIL_TABLE = { note: "notes", video: "videos", book: "books" } as const;

export async function saveResource(token: string, input: ResourceInput) {
  return withStaff(token, "contributor", async ({ db, user, role }) => {
    const moderator = atLeast(role, "moderator");
    if (input.status === "published" && !moderator) refuse("Only moderators can publish. Submit it for review instead.");
    const title = clean(input.title, 140);
    if (title.length < 3) refuse("Title is required.");
    if (!["note", "video", "book"].includes(input.kind)) refuse("Unknown resource type.");
    if (!["public", "registered", "private"].includes(input.visibility)) refuse("Pick who can see it.");

    const existing = input.id
      ? (maybe(await db.from("resources").select("id, kind, status, file_path").eq("id", input.id).maybeSingle(), "load the resource") as {
          id: string;
          kind: string;
          status: Status;
          file_path: string | null;
        } | null)
      : null;
    if (input.id && !existing) refuse("That resource no longer exists.");
    if (existing && existing.kind !== input.kind) refuse("A resource's type can't change. Create a new one instead.");

    const subject = await subjectRef(db, input.subjectSlug);
    const { unit, topic } = await weekAndTopic(db, subject.id, input.unitId, input.topicId);

    let file: { path: string | null; size: number | null; type: string | null } | undefined;
    let externalUrl: string | null = null;
    let detail: Record<string, unknown>;
    if (input.kind === "note") {
      if (input.file) file = { path: input.file.path, ...(await verifyUpload(db, user, input.file.path)) };
      else if (input.removeFile) file = { path: null, size: null, type: null };
      externalUrl = input.externalUrl.trim() ? httpsUrl(input.externalUrl) : null;
      if (input.externalUrl.trim() && !externalUrl) refuse("Use an https:// link.");
      const hasFile = file ? !!file.path : !!existing?.file_path;
      if (!hasFile && !externalUrl) refuse("Upload a file or give a link to the notes.");
      if (!NOTE_KINDS.includes(input.note.kind)) refuse("Pick what kind of notes these are.");
      detail = { note_kind: input.note.kind, pages: Math.max(0, Math.min(5000, Math.round(input.note.pages) || 0)) };
    } else if (input.kind === "video") {
      const id = youtubeId(input.video.url);
      if (!id) refuse("That doesn't look like a YouTube video link.");
      if (!VIDEO_LEVELS.includes(input.video.level)) refuse("Pick a level.");
      detail = { youtube_id: id, duration: clean(input.video.duration, 20) || null, level: input.video.level, channel: clean(input.video.channel, 100) || null };
      externalUrl = `https://www.youtube.com/watch?v=${id}`;
    } else {
      const b = input.book;
      const authors = b.authors.map((a) => clean(a, 100)).filter(Boolean).slice(0, 10);
      if (!authors.length) refuse("Add at least one author.");
      externalUrl = input.externalUrl.trim() ? httpsUrl(input.externalUrl) : null;
      if (input.externalUrl.trim() && !externalUrl) refuse("Use an https:// link (publisher page or a legal free edition).");
      if (b.year !== null && !(b.year >= 1800 && b.year <= 2100)) refuse("Enter a valid year.");
      detail = {
        authors,
        edition: clean(b.edition, 60) || null,
        publisher: clean(b.publisher, 120) || null,
        year: b.year,
        isbn: clean(b.isbn, 20) || null,
        recommended_for: clean(b.recommendedFor, 200) || null,
        why: clean(b.why, 1000) || null,
        chapters: b.chapters.map((c) => clean(c, 160)).filter(Boolean).slice(0, 60),
        free: !!b.free,
      };
    }

    const publishing = input.status === "published" && existing?.status !== "published";
    const row = {
      kind: input.kind,
      title,
      description: clean(input.description, 1000) || null,
      subject_id: subject.id,
      unit_id: unit,
      topic_id: topic,
      author: clean(input.author, 100) || null,
      tags: input.tags.map((t) => clean(t, 30).toLowerCase()).filter(Boolean).slice(0, 12),
      visibility: input.visibility,
      status: input.status,
      external_url: externalUrl,
      updated_at: now(),
      ...(file && { file_path: file.path, file_size: file.size, file_type: file.type }),
      ...(moderator && input.quality && { quality: input.quality satisfies Quality }),
      ...(publishing && { published_at: now(), reviewed_by: user.id, review_note: null }),
      ...(input.status === "pending" && { review_note: null }),
    };

    let id: string;
    if (existing) {
      const rows = must(await db.from("resources").update(row).eq("id", existing.id).select("id"), "save the resource");
      changed(rows, "You can't edit this resource any more. Published resources are edited by moderators.");
      id = existing.id;
    } else {
      id = must(await db.from("resources").insert({ ...row, created_by: user.id }).select("id").single(), "save the resource").id as string;
    }

    const { error } = await db.from(DETAIL_TABLE[input.kind]).upsert({ resource_id: id, ...detail }, { onConflict: "resource_id" });
    if (error) {
      if (!existing) await db.from("resources").delete().eq("id", id);
      refuse(friendly(error, "save the resource details"));
    }
    // The old file is replaced (or dropped) only once the new one is saved.
    if (file && existing?.file_path && existing.file_path !== file.path) await db.storage.from("resources").remove([existing.file_path]);
    if (input.status === "published" || existing?.status === "published") siteChanged();
    return { id, status: input.status as Status };
  });
}

/** Contributors submit or withdraw their own drafts; moderators publish, request changes or unpublish. */
const CONTRIBUTOR_MOVES: Partial<Record<Status, Status[]>> = { draft: ["pending"], pending: ["draft"], rejected: ["pending", "draft"] };

async function moveStatus(
  { db, user, role }: Ctx,
  table: "resources" | "questions",
  id: string,
  status: Status,
  note: string | undefined,
) {
  const current = maybe(await db.from(table).select("status").eq("id", id).maybeSingle(), "load it");
  if (!current) refuse("It no longer exists.");
  const from = current.status as Status;
  const moderator = atLeast(role, "moderator");
  if (!moderator && !CONTRIBUTOR_MOVES[from]?.includes(status)) refuse("Only moderators can do that.");
  if (status === "rejected" && !clean(note, 1000)) refuse("Say what needs changing, so the contributor can fix it.");
  const patch = {
    status,
    updated_at: now(),
    review_note: status === "rejected" ? clean(note, 1000) : status === "published" ? null : undefined,
    ...(table === "resources" && status === "published" && from !== "published" && { published_at: now(), reviewed_by: user.id }),
  };
  changed(must(await db.from(table).update(patch).eq("id", id).select("id"), "change the status"), "You can't change this one.");
  return from === "published" || status === "published";
}

export async function setResourceStatus(token: string, id: string, status: Status, note?: string) {
  return withStaff(token, "contributor", async (ctx) => {
    if (await moveStatus(ctx, "resources", id, status, note)) siteChanged();
    return null;
  });
}

export async function setResourceQuality(token: string, id: string, quality: Quality) {
  return withStaff(token, "moderator", async ({ db }) => {
    if (!["verified", "needs_review", "outdated"].includes(quality)) refuse("Unknown quality flag.");
    const rows = must(await db.from("resources").update({ quality, updated_at: now() }).eq("id", id).select("status"), "change the quality flag");
    changed(rows, "That resource no longer exists.");
    if (rows[0].status === "published") siteChanged();
    return null;
  });
}

export async function deleteResource(token: string, id: string) {
  return withStaff(token, "contributor", async ({ db }) => {
    const rows = must(await db.from("resources").delete().eq("id", id).select("status, file_path"), "delete the resource");
    changed(rows, "You can only delete your own unpublished uploads.");
    if (rows[0].file_path) await db.storage.from("resources").remove([rows[0].file_path]);
    if (rows[0].status === "published") siteChanged();
    return null;
  });
}

/* ───────────── Questions ───────────── */

export async function saveQuestion(token: string, input: QuestionInput) {
  return withStaff(token, "contributor", async ({ db, user, role }) => {
    if (input.status === "published" && !atLeast(role, "moderator")) refuse("Only moderators can publish. Submit it for review instead.");
    const choice = input.type === "mcq" || input.type === "multi" || input.type === "truefalse";
    const options = input.type === "truefalse" ? ["True", "False"] : choice ? input.options.map((o) => clean(o, 500)) : [];
    const answer =
      input.type === "fill" || input.type === "short"
        ? (input.answer as string[]).map((a) => clean(a, 500)).filter(Boolean)
        : input.type === "multi"
          ? [...new Set(input.answer as number[])].sort((a, b) => a - b)
          : input.answer;
    const q = { ...input, options, answer };
    const problem = questionProblem(q);
    if (problem) refuse(problem);
    if (options.length > 8) refuse("Use at most 8 options.");

    const existing = input.id ? maybe(await db.from("questions").select("id, status").eq("id", input.id).maybeSingle(), "load the question") : null;
    if (input.id && !existing) refuse("That question no longer exists.");
    const subject = await subjectRef(db, input.subjectSlug);
    const { unit, topic } = await weekAndTopic(db, subject.id, input.unitId, input.topicId);

    const row = {
      subject_id: subject.id,
      unit_id: unit,
      topic_id: topic,
      type: input.type,
      difficulty: input.difficulty,
      prompt: clean(input.prompt, 4000),
      context: clean(input.context, 4000) || null,
      answer,
      tolerance: input.type === "numerical" && input.tolerance !== null ? Math.abs(Number(input.tolerance)) || 0 : null,
      explanation: clean(input.explanation, 4000),
      source: clean(input.source, 200) || null,
      status: input.status,
      updated_at: now(),
      ...((input.status === "pending" || input.status === "published") && { review_note: null }),
    };
    let id: string;
    if (existing) {
      changed(
        must(await db.from("questions").update(row).eq("id", existing.id).select("id"), "save the question"),
        "You can't edit this question any more. Published questions are edited by moderators.",
      );
      id = existing.id;
      must(await db.from("question_options").delete().eq("question_id", id), "update the options");
    } else {
      id = must(await db.from("questions").insert({ ...row, created_by: user.id }).select("id").single(), "save the question").id as string;
    }
    if (options.length) {
      const { error } = await db.from("question_options").insert(options.map((body, position) => ({ question_id: id, position, body })));
      if (error) {
        if (!existing) await db.from("questions").delete().eq("id", id);
        refuse(friendly(error, "save the options"));
      }
    }
    if (input.status === "published" || existing?.status === "published") siteChanged();
    return { id };
  });
}

export async function setQuestionStatus(token: string, id: string, status: Status, note?: string) {
  return withStaff(token, "contributor", async (ctx) => {
    if (await moveStatus(ctx, "questions", id, status, note)) siteChanged();
    return null;
  });
}

export async function deleteQuestion(token: string, id: string) {
  return withStaff(token, "contributor", async ({ db }) => {
    const rows = must(await db.from("questions").delete().eq("id", id).select("status"), "delete the question");
    changed(rows, "You can only delete your own unpublished questions.");
    if (rows[0].status === "published") siteChanged();
    return null;
  });
}

/* ───────────── Reports ───────────── */

export async function setReportStatus(token: string, id: string, status: "open" | "resolved") {
  return withStaff(token, "moderator", async ({ db, user }) => {
    const patch = status === "resolved" ? { status, resolved_by: user.id, resolved_at: now() } : { status, resolved_by: null, resolved_at: null };
    changed(must(await db.from("reports").update(patch).eq("id", id).select("id"), "update the report"), "That report no longer exists.");
    return null;
  });
}

/* ───────────── Users ───────────── */

export async function setUserRole(token: string, userId: string, role: Role) {
  // admin_set_role() enforces who may grant what; its messages are shown as they are.
  return withStaff(token, "admin", async ({ db }) => {
    const { error } = await db.rpc("admin_set_role", { target: userId, new_role: role });
    if (error) refuse(error.code === "42501" || error.code === "P0002" ? error.message : friendly(error, "change the role"));
    return null;
  });
}

/* ───────────── Papers ───────────── */

function papersChanged() {
  invalidatePapers();
  revalidatePath("/", "layout");
}

const PAPER_KINDS: PaperKind[] = ["mock", "qualifier_pyq", "quiz", "end_term"];

export async function savePaper(token: string, input: { slug?: string; kind: PaperKind; position: number; json: string }) {
  return withStaff(token, "moderator", async ({ db }) => {
    if (!PAPER_KINDS.includes(input.kind)) refuse("Pick what kind of paper this is.");
    let data: QualifierMock;
    try {
      data = JSON.parse(input.json);
    } catch (e) {
      refuse(`The JSON doesn't parse: ${(e as Error).message}`);
    }
    const problems = paperProblems(data);
    if (problems.length) refuse(problems.join(" "));
    if (input.slug && data.slug !== input.slug) refuse(`The slug can't change (it is part of the paper's URL). Keep "${input.slug}", or add a new paper.`);
    const single = data.sections.length === 1;
    if (input.kind !== "mock" && !single) refuse("Previous-year papers have exactly one section (one course).");
    if ((input.kind === "end_term") !== !!data.endTerm)
      refuse(input.kind === "end_term" ? "End Term papers need an `endTerm` object: { date, session, term }." : "Only End Term papers have `endTerm`.");
    if ((input.kind === "quiz") !== !!data.quiz)
      refuse(input.kind === "quiz" ? "Quiz papers need a `quiz` object: { number, date, session, term }." : "Only Quiz papers have `quiz`.");
    const position = Math.round(Number(input.position));
    if (!Number.isFinite(position) || position < 0) refuse("Position must be 0 or more.");

    const row = { kind: input.kind, subject_slug: single ? data.sections[0].subjectSlug : null, title: data.title, position, data, updated_at: now() };
    if (input.slug) changed(must(await db.from("papers").update(row).eq("slug", input.slug).select("slug"), "save the paper"), "That paper no longer exists.");
    else must(await db.from("papers").insert({ ...row, slug: data.slug }).select("slug").single(), "add the paper");
    papersChanged();
    return { slug: data.slug };
  });
}

export async function deletePaper(token: string, slug: string) {
  return withStaff(token, "moderator", async ({ db }) => {
    changed(must(await db.from("papers").delete().eq("slug", slug).select("slug"), "delete the paper"), "That paper no longer exists.");
    papersChanged();
    return null;
  });
}
