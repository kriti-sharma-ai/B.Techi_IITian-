"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { BookOpen, FileText, FileUp, Link2, LoaderCircle, PlayCircle, UploadCloud, X } from "lucide-react";
import { deleteResource, saveResource } from "@/app/admin/actions";
import {
  FILE_FORMATS,
  KIND_LABEL,
  MAX_FILE_MB,
  NOTE_KINDS,
  QUALITY_LABEL,
  RESOURCE_SELECT,
  VIDEO_LEVELS,
  atLeast,
  formatForName,
  httpsUrl,
  sniffFormat,
  youtubeId,
  type Quality,
  type ResourceInput,
  type ResourceKind,
  type ResourceRow,
} from "@/lib/admin";
import { supabase } from "@/lib/supabase/client";
import { cn, formatSize } from "@/lib/utils";
import { useToast } from "../toast";
import { Button, buttonClass } from "../ui";
import { Field, LoadError, PlacementFields, StatusBadge, inputClass, previewFile, textareaClass, useCourses, type Placement } from "./form";
import { useAction, useAdminQuery, useStaff } from "./staff";

type Form = {
  kind: ResourceKind;
  title: string;
  description: string;
  placement: Placement;
  author: string;
  tags: string;
  visibility: ResourceInput["visibility"];
  quality: Quality;
  externalUrl: string;
  noteKind: ResourceInput["note"]["kind"];
  pages: string;
  video: ResourceInput["video"];
  book: { authors: string; edition: string; publisher: string; year: string; isbn: string; recommendedFor: string; why: string; chapters: string; free: boolean };
};

const blank = (kind: ResourceKind, placement?: Placement): Form => ({
  kind,
  title: "",
  description: "",
  placement: placement ?? { subjectSlug: "", unitId: "", topicId: "" },
  author: "",
  tags: "",
  visibility: "public",
  quality: "needs_review",
  externalUrl: "",
  noteKind: "Lecture notes",
  pages: "",
  video: { url: "", duration: "", level: "Beginner", channel: "" },
  book: { authors: "", edition: "", publisher: "", year: "", isbn: "", recommendedFor: "", why: "", chapters: "", free: false },
});

const fromRow = (r: ResourceRow): Form => ({
  kind: r.kind,
  title: r.title,
  description: r.description ?? "",
  placement: { subjectSlug: r.subject?.slug ?? "", unitId: r.unit?.id ?? "", topicId: r.topic?.id ?? "" },
  author: r.author ?? "",
  tags: (r.tags ?? []).join(", "),
  visibility: r.visibility,
  quality: r.quality,
  externalUrl: r.kind === "video" ? "" : (r.external_url ?? ""),
  noteKind: (NOTE_KINDS as readonly string[]).includes(r.notes?.note_kind ?? "") ? (r.notes!.note_kind as Form["noteKind"]) : "Lecture notes",
  pages: r.notes?.pages ? String(r.notes.pages) : "",
  video: {
    url: r.videos?.youtube_id ? `https://www.youtube.com/watch?v=${r.videos.youtube_id}` : "",
    duration: r.videos?.duration ?? "",
    level: (VIDEO_LEVELS as readonly string[]).includes(r.videos?.level ?? "") ? (r.videos!.level as Form["video"]["level"]) : "Beginner",
    channel: r.videos?.channel ?? "",
  },
  book: {
    authors: (r.books?.authors ?? []).join("\n"),
    edition: r.books?.edition ?? "",
    publisher: r.books?.publisher ?? "",
    year: r.books?.year ? String(r.books.year) : "",
    isbn: r.books?.isbn ?? "",
    recommendedFor: r.books?.recommended_for ?? "",
    why: r.books?.why ?? "",
    chapters: (r.books?.chapters ?? []).join("\n"),
    free: r.books?.free ?? false,
  },
});

const lines = (s: string) => s.split("\n").map((l) => l.trim()).filter(Boolean);
const ACCEPT = FILE_FORMATS.flatMap((f) => f.ext.map((e) => `.${e}`)).join(",");
const KIND_ICON = { note: FileText, video: PlayCircle, book: BookOpen };

async function countPdfPages(file: File) {
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  const task = pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) });
  try {
    return (await task.promise).numPages;
  } finally {
    void task.destroy();
  }
}

/**
 * Create or edit a note (uploaded file or link), video (YouTube) or book
 * (legal link). Files go straight to Storage under the uploader's folder; the
 * server action then checks their real type before saving.
 */
export function ResourceForm() {
  const params = useSearchParams();
  const router = useRouter();
  const toast = useToast();
  const run = useAction();
  const staff = useStaff();
  const moderator = atLeast(staff.role, "moderator");
  const editId = params.get("edit");
  const { courses } = useCourses();

  const existing = useAdminQuery(
    () => (editId ? supabase.from("resources").select(RESOURCE_SELECT).eq("id", editId).maybeSingle() : Promise.resolve({ data: null, error: null })),
    [editId],
  );
  // Ignore a row left over from the previously edited resource while the next one loads.
  const loaded = existing.data as ResourceRow | null | undefined;
  const row = loaded && loaded.id === editId ? loaded : null;

  const [form, setForm] = useState<Form>(() => blank((["note", "video", "book"] as const).find((k) => k === params.get("kind")) ?? "note"));
  const [file, setFile] = useState<File | null>(null);
  const [removeFile, setRemoveFile] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const filledFor = useRef<string | null>(null);

  // Fill the form once per resource; later reloads (after saving) must not wipe edits.
  useEffect(() => {
    if (row && row.id === editId && filledFor.current !== row.id) {
      filledFor.current = row.id;
      setForm(fromRow(row));
    } else if (!editId && filledFor.current) {
      // "New resource" after editing one: start over, keeping the type and placement.
      filledFor.current = null;
      setForm((f) => blank(f.kind, f.placement));
    } else return;
    setFile(null);
    setRemoveFile(false);
    setErrors({});
  }, [row, editId]);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));
  const editing = !!editId;
  const canEdit = !row || moderator || (row.created_by === staff.id && ["draft", "pending", "rejected"].includes(row.status));
  const hasFile = !!file || (!!row?.file_path && !removeFile);

  const pick = async (f: File | undefined) => {
    if (!f) return;
    const format = formatForName(f.name);
    if (!format) return setErrors((e) => ({ ...e, file: "Only PDF, Word (.doc, .docx) and image (.png, .jpg, .webp) files." }));
    if (f.size > MAX_FILE_MB * 1024 * 1024) return setErrors((e) => ({ ...e, file: `File is larger than ${MAX_FILE_MB} MB.` }));
    if (sniffFormat(new Uint8Array(await f.slice(0, 16).arrayBuffer()))?.type !== format.type)
      return setErrors((e) => ({ ...e, file: `That file isn't a real ${format.label} file.` }));
    setErrors((e) => ({ ...e, file: "" }));
    setFile(f);
    setRemoveFile(false);
    setForm((m) => ({ ...m, title: m.title || f.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") }));
    if (format.type === "application/pdf")
      countPdfPages(f).then(
        (n) => setForm((m) => ({ ...m, pages: String(n) })),
        () => setErrors((e) => ({ ...e, file: "This PDF couldn't be opened. Check it isn't damaged or password-protected." })),
      );
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (form.title.trim().length < 3) err.title = "Title is required.";
    if (!form.placement.subjectSlug) err.course = "Choose a course.";
    if (form.kind === "note") {
      if (form.externalUrl.trim() && !httpsUrl(form.externalUrl)) err.url = "Use an https:// link.";
      if (!hasFile && !form.externalUrl.trim()) err.file = "Upload a file or give a link.";
    }
    if (form.kind === "video" && !youtubeId(form.video.url)) err.video = "Paste a YouTube video link.";
    if (form.kind === "book") {
      if (!lines(form.book.authors).length) err.authors = "Add at least one author.";
      if (form.externalUrl.trim() && !httpsUrl(form.externalUrl)) err.url = "Use an https:// link.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async (status: ResourceInput["status"]) => {
    if (!validate()) return;
    setBusy(status);
    let uploaded: { path: string; name: string } | null = null;
    if (file && form.kind === "note") {
      const format = formatForName(file.name)!;
      const path = `${staff.id}/${crypto.randomUUID()}.${format.ext[0]}`;
      const { error } = await supabase.storage.from("resources").upload(path, file, { contentType: format.type, upsert: false });
      if (error) {
        setBusy(null);
        setErrors((e) => ({ ...e, file: error.message.includes("Bucket not found") ? "Storage isn't set up yet: run supabase/0003_cms.sql." : `Upload failed: ${error.message}` }));
        return;
      }
      uploaded = { path, name: file.name };
    }
    const input: ResourceInput = {
      id: editId ?? undefined,
      kind: form.kind,
      title: form.title,
      description: form.description,
      ...form.placement,
      author: form.author,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      visibility: form.visibility,
      quality: moderator ? form.quality : undefined,
      file: uploaded,
      removeFile: removeFile && !uploaded,
      externalUrl: form.externalUrl,
      note: { kind: form.noteKind, pages: Number(form.pages) || 0 },
      video: form.video,
      book: { ...form.book, authors: lines(form.book.authors), chapters: lines(form.book.chapters), year: form.book.year ? Number(form.book.year) : null },
      status,
    };
    const done = await run(
      (token) => saveResource(token, input),
      status === "published" ? "Published. It's live on the site." : status === "pending" ? "Submitted for review" : "Saved as draft",
    );
    setBusy(null);
    if (!done) {
      // Don't leave an orphaned upload behind.
      if (uploaded) await supabase.storage.from("resources").remove([uploaded.path]);
      return;
    }
    setFile(null);
    setRemoveFile(false);
    // A new resource continues in its edit view, where its status and file can be checked.
    if (!editing) router.replace(`/admin/upload?edit=${done.id}`);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void submit(moderator ? "published" : "pending");
  };

  if (editId && !row) {
    if (existing.loading || (loaded && loaded.id !== editId)) return <div className="skeleton h-96" />;
    return <LoadError error={existing.error ?? "That resource doesn't exist, or you can't see it."} />;
  }

  const primaryLabel = moderator ? (row?.status === "published" ? "Save & keep published" : "Publish") : row?.status === "rejected" ? "Resubmit for review" : "Submit for review";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 xl:grid-cols-[1fr_340px]">
      <div className="space-y-5">
        {row && (
          <div className="card flex flex-wrap items-center gap-3 p-4 text-sm">
            <StatusBadge status={row.status} />
            <span className="text-muted">
              {KIND_LABEL[row.kind]} by {row.creator?.name ?? "a staff member"} · updated {new Date(row.updated_at).toLocaleString("en-IN")}
            </span>
            <Link href="/admin/upload" className="ml-auto font-medium text-blue hover:underline">
              + New resource
            </Link>
            {row.review_note && (
              <p className="w-full rounded-lg bg-red/5 px-3 py-2 text-red">
                <strong>Changes requested:</strong> {row.review_note}
              </p>
            )}
            {!canEdit && <p className="w-full text-muted">Published resources are edited by moderators. You can still view it here.</p>}
          </div>
        )}

        <fieldset disabled={!canEdit || !!busy} className="card space-y-5 p-5">
          <div>
            <p className="mb-2 text-sm font-medium">Type</p>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Resource type">
              {(["note", "video", "book"] as const).map((k) => {
                const Icon = KIND_ICON[k];
                return (
                  <label
                    key={k}
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium has-disabled:cursor-not-allowed has-disabled:opacity-60",
                      form.kind === k ? "border-fg bg-ink text-bg" : "border-border hover:border-fg/30",
                    )}
                  >
                    <input type="radio" name="kind" className="sr-only" checked={form.kind === k} disabled={editing} onChange={() => set("kind", k)} />
                    <Icon className="size-4" aria-hidden />
                    {KIND_LABEL[k]}
                  </label>
                );
              })}
            </div>
          </div>

          {form.kind === "note" && (
            <>
              <div>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDrag(true);
                  }}
                  onDragLeave={() => setDrag(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDrag(false);
                    void pick(e.dataTransfer.files[0]);
                  }}
                  className={cn(
                    "flex flex-col items-center rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors",
                    drag ? "border-fg bg-surface-2" : "border-border",
                    errors.file && "border-red",
                  )}
                >
                  {file || (row?.file_path && !removeFile) ? (
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <FileUp className="size-5 text-teal" aria-hidden />
                      <span className="text-sm font-medium">{file ? file.name : "Current file"}</span>
                      <span className="text-xs text-muted">{formatSize(Math.round((file?.size ?? row?.file_size ?? 0) / 1024))}</span>
                      {!file && row && (
                        <button type="button" onClick={() => previewFile(row.id, toast)} className="text-xs font-medium text-blue hover:underline">
                          Preview
                        </button>
                      )}
                      <Button variant="secondary" size="sm" onClick={() => fileRef.current?.click()}>
                        Replace
                      </Button>
                      <button
                        type="button"
                        onClick={() => (file ? setFile(null) : setRemoveFile(true))}
                        className="grid size-7 place-items-center rounded-md hover:bg-surface-2"
                        aria-label="Remove file"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <UploadCloud className="size-8 text-muted" aria-hidden />
                      <p className="mt-2 text-sm font-medium">Drag a file here, or</p>
                      <Button variant="secondary" size="sm" className="mt-2" onClick={() => fileRef.current?.click()}>
                        Browse files
                      </Button>
                      <p className="mt-2 text-xs text-muted">PDF, Word or image · max {MAX_FILE_MB} MB</p>
                    </>
                  )}
                  <input ref={fileRef} type="file" className="sr-only" tabIndex={-1} accept={ACCEPT} onChange={(e) => void pick(e.target.files?.[0])} />
                </div>
                {errors.file && (
                  <p role="alert" className="mt-1 text-xs text-red">
                    {errors.file}
                  </p>
                )}
              </div>
              <Field label="Or link to the notes" hint="Optional with a file" error={errors.url}>
                <span className="relative block">
                  <Link2 className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
                  <input className={inputClass + " pl-9"} type="url" inputMode="url" placeholder="https://" value={form.externalUrl} onChange={(e) => set("externalUrl", e.target.value)} aria-invalid={!!errors.url} />
                </span>
              </Field>
            </>
          )}

          {form.kind === "video" && (
            <Field label="YouTube link" error={errors.video}>
              <input
                className={inputClass}
                type="url"
                inputMode="url"
                placeholder="https://www.youtube.com/watch?v=…"
                value={form.video.url}
                onChange={(e) => set("video", { ...form.video, url: e.target.value })}
                aria-invalid={!!errors.video}
              />
            </Field>
          )}

          <Field label="Title" error={errors.title}>
            <input className={inputClass} value={form.title} maxLength={140} onChange={(e) => set("title", e.target.value)} aria-invalid={!!errors.title} />
          </Field>
          <Field label="Description">
            <textarea className={textareaClass + " h-24"} maxLength={1000} value={form.description} onChange={(e) => set("description", e.target.value)} />
          </Field>

          {form.kind === "book" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Authors" hint="One per line" error={errors.authors} className="sm:col-span-2">
                <textarea className={textareaClass} value={form.book.authors} onChange={(e) => set("book", { ...form.book, authors: e.target.value })} aria-invalid={!!errors.authors} />
              </Field>
              <Field label="Publisher">
                <input className={inputClass} value={form.book.publisher} onChange={(e) => set("book", { ...form.book, publisher: e.target.value })} />
              </Field>
              <Field label="Edition">
                <input className={inputClass} value={form.book.edition} onChange={(e) => set("book", { ...form.book, edition: e.target.value })} placeholder="3rd" />
              </Field>
              <Field label="Year">
                <input className={inputClass} type="number" min={1800} max={2100} value={form.book.year} onChange={(e) => set("book", { ...form.book, year: e.target.value })} />
              </Field>
              <Field label="ISBN">
                <input className={inputClass} value={form.book.isbn} onChange={(e) => set("book", { ...form.book, isbn: e.target.value })} />
              </Field>
              <Field label="Link" hint="Publisher page or a legal free edition" error={errors.url} className="sm:col-span-2">
                <input className={inputClass} type="url" placeholder="https://" value={form.externalUrl} onChange={(e) => set("externalUrl", e.target.value)} aria-invalid={!!errors.url} />
              </Field>
              <label className="flex items-center gap-2 text-sm sm:col-span-2">
                <input type="checkbox" checked={form.book.free} onChange={(e) => set("book", { ...form.book, free: e.target.checked })} />
                The link is a free, legal copy
              </label>
              <Field label="Recommended for" className="sm:col-span-2">
                <input className={inputClass} value={form.book.recommendedFor} onChange={(e) => set("book", { ...form.book, recommendedFor: e.target.value })} placeholder="Weeks 1–4, revision before Quiz 1" />
              </Field>
              <Field label="Why this book" className="sm:col-span-2">
                <textarea className={textareaClass} value={form.book.why} onChange={(e) => set("book", { ...form.book, why: e.target.value })} />
              </Field>
              <Field label="Chapters to read" hint="One per line" className="sm:col-span-2">
                <textarea className={textareaClass} value={form.book.chapters} onChange={(e) => set("book", { ...form.book, chapters: e.target.value })} />
              </Field>
            </div>
          )}
        </fieldset>
      </div>

      <div className="space-y-5">
        <fieldset disabled={!canEdit || !!busy} className="card space-y-3 p-5">
          <legend className="sr-only">Placement</legend>
          <h2 className="font-semibold">Placement</h2>
          <PlacementFields value={form.placement} onChange={(p) => set("placement", p)} courses={courses} />
          {errors.course && (
            <p role="alert" className="text-xs text-red">
              {errors.course}
            </p>
          )}
        </fieldset>
        <fieldset disabled={!canEdit || !!busy} className="card space-y-3 p-5">
          <legend className="sr-only">Details</legend>
          <h2 className="font-semibold">Details</h2>
          {form.kind === "note" && (
            <div className="grid grid-cols-[1fr_90px] gap-2">
              <Field label="Kind">
                <select className={inputClass} value={form.noteKind} onChange={(e) => set("noteKind", e.target.value as Form["noteKind"])}>
                  {NOTE_KINDS.map((k) => (
                    <option key={k}>{k}</option>
                  ))}
                </select>
              </Field>
              <Field label="Pages">
                <input className={inputClass} type="number" min={0} value={form.pages} onChange={(e) => set("pages", e.target.value)} />
              </Field>
            </div>
          )}
          {form.kind === "video" && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <Field label="Duration">
                  <input className={inputClass} value={form.video.duration} onChange={(e) => set("video", { ...form.video, duration: e.target.value })} placeholder="12:34" />
                </Field>
                <Field label="Level">
                  <select className={inputClass} value={form.video.level} onChange={(e) => set("video", { ...form.video, level: e.target.value as Form["video"]["level"] })}>
                    {VIDEO_LEVELS.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Channel">
                <input className={inputClass} value={form.video.channel} onChange={(e) => set("video", { ...form.video, channel: e.target.value })} placeholder="IIT Madras BS" />
              </Field>
            </>
          )}
          {form.kind !== "book" && (
            <Field label="Author">
              <input className={inputClass} value={form.author} onChange={(e) => set("author", e.target.value)} placeholder="BTechi Team" />
            </Field>
          )}
          <Field label="Tags" hint="Comma separated">
            <input className={inputClass} value={form.tags} onChange={(e) => set("tags", e.target.value)} placeholder="probability, bayes" />
          </Field>
          <Field label="Who can see it">
            <select className={inputClass} value={form.visibility} onChange={(e) => set("visibility", e.target.value as Form["visibility"])}>
              <option value="public">Everyone</option>
              <option value="registered">Listed for everyone, opens for signed-in students</option>
              <option value="private">Staff only</option>
            </select>
          </Field>
          {moderator && (
            <Field label="Quality flag">
              <select className={inputClass} value={form.quality} onChange={(e) => set("quality", e.target.value as Quality)}>
                {(Object.keys(QUALITY_LABEL) as Quality[]).map((q) => (
                  <option key={q} value={q}>
                    {QUALITY_LABEL[q]}
                  </option>
                ))}
              </select>
            </Field>
          )}
        </fieldset>
        {canEdit && (
          <div className="flex flex-col gap-2">
            <button type="submit" disabled={!!busy} className={buttonClass("primary", "lg", "w-full")}>
              {busy && busy !== "draft" ? <LoaderCircle className="size-4 animate-spin" aria-hidden /> : null}
              {primaryLabel}
            </button>
            {(!row || row.status !== "published") && (
              <Button variant="secondary" className="w-full" disabled={!!busy} onClick={() => void submit("draft")}>
                {busy === "draft" && <LoaderCircle className="size-4 animate-spin" aria-hidden />} Save draft
              </Button>
            )}
            {row && (
              <Button
                variant="ghost"
                className="w-full text-red"
                disabled={!!busy}
                onClick={async () => {
                  if (!confirm(`Delete "${row.title}"? This can't be undone.`)) return;
                  if (await run((t) => deleteResource(t, row.id), "Deleted")) router.push(`/admin/${row.kind}s`);
                }}
              >
                Delete
              </Button>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
