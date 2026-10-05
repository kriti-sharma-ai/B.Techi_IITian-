"use client";

import { useRef, useState, type FormEvent } from "react";
import { FileUp, Link2, UploadCloud, X } from "lucide-react";
import { subjects } from "@/lib/content";
import { actions, useStore } from "@/lib/store";
import { Button, buttonClass } from "../ui";
import { useToast } from "../toast";
import { cn, formatSize } from "@/lib/utils";

const FILE_TYPES = {
  PDF: { accept: ["application/pdf"], ext: [".pdf"] },
  DOC: {
    accept: ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    ext: [".doc", ".docx"],
  },
  Image: { accept: ["image/png", "image/jpeg", "image/webp"], ext: [".png", ".jpg", ".jpeg", ".webp"] },
} as const;
const URL_TYPES = ["Video URL", "YouTube URL", "External Link"] as const;
type Kind = keyof typeof FILE_TYPES | (typeof URL_TYPES)[number];

const MAX_MB = 25;
const YT = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}/;

const input = "h-10 w-full rounded-lg border border-border bg-bg px-3 text-sm outline-none focus:border-fg/40 aria-[invalid=true]:border-red";

/**
 * Resource upload (PRD §31). Validates type/size client-side; the server must
 * re-validate (MIME sniffing, size, virus scan) before writing to storage.
 */
export function UploadForm() {
  const toast = useToast();
  const role = useStore((s) => s.user?.role);
  const canPublish = role === "admin" || role === "super_admin" || role === "moderator";
  const fileRef = useRef<HTMLInputElement>(null);

  const [kind, setKind] = useState<Kind>("PDF");
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState({
    title: "",
    description: "",
    subjectSlug: subjects[0].slug,
    unitId: "",
    topicSlug: "",
    resourceType: "Lecture notes",
    author: "",
    tags: "",
    visibility: "public",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [drag, setDrag] = useState(false);

  const subj = subjects.find((s) => s.slug === meta.subjectSlug);
  const topics = (subj?.units ?? []).filter((u) => !meta.unitId || u.id === meta.unitId).flatMap((u) => u.topics);
  const isFile = kind in FILE_TYPES;

  const pick = (f: File | undefined) => {
    if (!f || !isFile) return;
    const spec = FILE_TYPES[kind as keyof typeof FILE_TYPES];
    const okType = (spec.accept as readonly string[]).includes(f.type) || spec.ext.some((x) => f.name.toLowerCase().endsWith(x));
    if (!okType) return setErrors((e) => ({ ...e, file: `Only ${spec.ext.join(", ")} files are allowed for ${kind}.` }));
    if (f.size > MAX_MB * 1024 * 1024) return setErrors((e) => ({ ...e, file: `File is larger than ${MAX_MB} MB.` }));
    setErrors((e) => ({ ...e, file: "" }));
    setFile(f);
    if (!meta.title) setMeta((m) => ({ ...m, title: f.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") }));
  };

  const submit = (status: "draft" | "pending" | "published") => (e?: FormEvent) => {
    e?.preventDefault();
    const err: Record<string, string> = {};
    if (meta.title.trim().length < 3) err.title = "Title is required.";
    if (isFile && !file) err.file = "Choose a file to upload.";
    if (!isFile) {
      try {
        const u = new URL(url);
        if (u.protocol !== "https:") err.url = "Use an https:// link.";
        else if (kind === "YouTube URL" && !YT.test(url)) err.url = "That doesn't look like a YouTube video link.";
      } catch {
        err.url = "Enter a valid URL.";
      }
    }
    setErrors(err);
    if (Object.values(err).some(Boolean)) return;
    actions.addUpload({
      title: meta.title.trim().slice(0, 140),
      type: kind,
      subjectSlug: meta.subjectSlug,
      unitId: meta.unitId || undefined,
      topicSlug: meta.topicSlug || undefined,
      url: isFile ? undefined : url,
      fileName: file?.name,
      sizeKB: file ? Math.round(file.size / 1024) : undefined,
      status,
    });
    toast(status === "published" ? "Published" : status === "pending" ? "Submitted for review" : "Saved as draft");
    setFile(null);
    setUrl("");
    setMeta((m) => ({ ...m, title: "", description: "", tags: "" }));
  };

  return (
    <form onSubmit={submit(canPublish ? "published" : "pending")} noValidate className="grid gap-6 xl:grid-cols-[1fr_340px]">
      <div className="card space-y-5 p-5">
        <fieldset>
          <legend className="mb-2 text-sm font-medium">Resource format</legend>
          <div className="flex flex-wrap gap-2">
            {([...Object.keys(FILE_TYPES), ...URL_TYPES] as Kind[]).map((k) => (
              <label
                key={k}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium",
                  kind === k ? "border-fg bg-ink text-bg" : "border-border hover:border-fg/30",
                )}
              >
                <input
                  type="radio"
                  name="kind"
                  className="sr-only"
                  checked={kind === k}
                  onChange={() => {
                    setKind(k);
                    setFile(null);
                    setErrors({});
                  }}
                />
                {k in FILE_TYPES ? <FileUp className="size-4" aria-hidden /> : <Link2 className="size-4" aria-hidden />}
                {k}
              </label>
            ))}
          </div>
        </fieldset>

        {isFile ? (
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
                pick(e.dataTransfer.files[0]);
              }}
              className={cn(
                "flex flex-col items-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
                drag ? "border-fg bg-surface-2" : "border-border",
                errors.file && "border-red",
              )}
            >
              {file ? (
                <div className="flex items-center gap-3">
                  <FileUp className="size-5 text-teal" aria-hidden />
                  <span className="text-sm font-medium">{file.name}</span>
                  <span className="text-xs text-muted">{formatSize(Math.round(file.size / 1024))}</span>
                  <button type="button" onClick={() => setFile(null)} className="grid size-7 place-items-center rounded-md hover:bg-surface-2" aria-label="Remove file">
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
                  <p className="mt-2 text-xs text-muted">
                    {FILE_TYPES[kind as keyof typeof FILE_TYPES].ext.join(", ")} · max {MAX_MB} MB
                  </p>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                className="sr-only"
                tabIndex={-1}
                accept={FILE_TYPES[kind as keyof typeof FILE_TYPES].ext.join(",")}
                onChange={(e) => pick(e.target.files?.[0])}
              />
            </div>
            {errors.file && (
              <p role="alert" className="mt-1 text-xs text-red">
                {errors.file}
              </p>
            )}
          </div>
        ) : (
          <label className="block text-sm">
            <span className="mb-1 block font-medium">{kind}</span>
            <input
              className={input}
              type="url"
              inputMode="url"
              placeholder={kind === "YouTube URL" ? "https://www.youtube.com/watch?v=…" : "https://"}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-invalid={!!errors.url}
            />
            {errors.url && (
              <span role="alert" className="mt-1 block text-xs text-red">
                {errors.url}
              </span>
            )}
          </label>
        )}

        <label className="block text-sm">
          <span className="mb-1 block font-medium">Title</span>
          <input className={input} value={meta.title} maxLength={140} onChange={(e) => setMeta({ ...meta, title: e.target.value })} aria-invalid={!!errors.title} />
          {errors.title && (
            <span role="alert" className="mt-1 block text-xs text-red">
              {errors.title}
            </span>
          )}
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Description</span>
          <textarea className={input + " h-24 py-2"} maxLength={1000} value={meta.description} onChange={(e) => setMeta({ ...meta, description: e.target.value })} />
        </label>
      </div>

      <div className="space-y-5">
        <div className="card space-y-3 p-5">
          <h2 className="font-semibold">Placement</h2>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Course</span>
            <select className={input} value={meta.subjectSlug} onChange={(e) => setMeta({ ...meta, subjectSlug: e.target.value, unitId: "", topicSlug: "" })}>
              {subjects.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.code ? `${s.code} · ` : ""}{s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Week</span>
            <select className={input} value={meta.unitId} onChange={(e) => setMeta({ ...meta, unitId: e.target.value, topicSlug: "" })}>
              <option value="">Whole course</option>
              {subj?.units.map((u) => (
                <option key={u.id} value={u.id}>
                  Week {u.number}: {u.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Topic</span>
            <select className={input} value={meta.topicSlug} onChange={(e) => setMeta({ ...meta, topicSlug: e.target.value })}>
              <option value="">Whole week</option>
              {topics.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="card space-y-3 p-5">
          <h2 className="font-semibold">Details</h2>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Resource type</span>
            <select className={input} value={meta.resourceType} onChange={(e) => setMeta({ ...meta, resourceType: e.target.value })}>
              {["Lecture notes", "Cheat sheet", "Revision", "Lab manual", "PYQ paper", "Video", "Book link", "Assignment"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Author</span>
            <input className={input} value={meta.author} onChange={(e) => setMeta({ ...meta, author: e.target.value })} placeholder="BTechi Team" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Tags</span>
            <input className={input} value={meta.tags} onChange={(e) => setMeta({ ...meta, tags: e.target.value })} placeholder="probability, bayes, unit 2" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Visibility</span>
            <select className={input} value={meta.visibility} onChange={(e) => setMeta({ ...meta, visibility: e.target.value })}>
              <option value="public">Public</option>
              <option value="registered">Signed-in students only</option>
              <option value="private">Private (staff)</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <button type="submit" className={buttonClass("primary", "lg", "w-full")}>
            {canPublish ? "Publish" : "Submit for review"}
          </button>
          <Button variant="secondary" className="w-full" onClick={() => submit("draft")()}>
            Save draft
          </Button>
        </div>
      </div>
    </form>
  );
}
