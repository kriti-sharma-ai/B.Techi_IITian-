"use client";

import type { ReactNode } from "react";
import { Search } from "lucide-react";
import { COURSE_SELECT, STATUS_LABEL, STATUS_TONE, sortWeeks, type CourseRow, type DbWeek, type Status } from "@/lib/admin";
import { codeSubjects } from "@/lib/content";
import { signedFileUrl } from "@/lib/files";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Badge } from "../ui";
import { useAdminQuery } from "./staff";

export const inputClass =
  "h-10 w-full rounded-lg border border-border bg-bg px-3 text-sm outline-none focus:border-fg/40 disabled:opacity-60 aria-[invalid=true]:border-red";
export const textareaClass = inputClass + " h-auto min-h-20 py-2";

export function Field({ label, hint, error, className, children }: { label: string; hint?: ReactNode; error?: string; className?: string; children: ReactNode }) {
  return (
    <label className={cn("block text-sm", className)}>
      <span className="mb-1 flex items-baseline justify-between gap-2">
        <span className="font-medium">{label}</span>
        {hint && <span className="text-xs text-muted">{hint}</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1 block text-xs text-red">
          {error}
        </span>
      )}
    </label>
  );
}

export function StatusBadge({ status }: { status: Status }) {
  return <Badge tone={STATUS_TONE[status]}>{STATUS_LABEL[status]}</Badge>;
}

export function SearchBox({ value, onChange, placeholder = "Search…" }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <span className="relative block">
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder} className={inputClass + " pl-9"} />
    </span>
  );
}

export function LoadError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p role="alert" className="mb-4 rounded-xl border border-red/30 bg-red/5 px-4 py-3 text-sm text-red">
      {error.includes("does not exist") || error.includes("Could not find")
        ? "The database isn't set up for the CMS yet. Run supabase/0003_cms.sql in the Supabase SQL editor."
        : error}
    </p>
  );
}

/** Opens an uploaded file (drafts too, for staff) in a new tab. */
export async function previewFile(resourceId: string, toast: (m: string) => void) {
  const tab = window.open("", "_blank");
  try {
    const url = await signedFileUrl(`/api/files/${resourceId}`);
    if (tab) tab.location.href = url;
    else window.location.assign(url);
  } catch (e) {
    tab?.close();
    toast((e as Error).message);
  }
}

/* ───────────── Courses with their weeks ───────────── */

export type AdminCourse = {
  slug: string;
  name: string;
  code?: string;
  level: string;
  group?: string;
  status: Status;
  fromCode: boolean;
  weeks: DbWeek[];
  row?: CourseRow;
};

/** Every course (from the code and the CMS) with its weeks and topics from the database. */
export function useCourses() {
  const q = useAdminQuery(() => supabase.from("subjects").select(COURSE_SELECT).order("name"), []);
  const rows = (q.data ?? []) as unknown as CourseRow[];
  const bySlug = new Map(rows.map((r) => [r.slug, r]));
  const courses: AdminCourse[] = [
    ...codeSubjects.map((s) => {
      const r = bySlug.get(s.slug);
      return { slug: s.slug, name: s.name, code: s.code, level: s.level, group: s.group, status: "published" as Status, fromCode: true, weeks: sortWeeks(r?.units ?? []), row: r };
    }),
    ...rows
      .filter((r) => !r.from_code && !codeSubjects.some((s) => s.slug === r.slug))
      .map((r) => ({
        slug: r.slug,
        name: r.name,
        code: r.code ?? undefined,
        level: r.level?.slug ?? "",
        group: r.group?.slug,
        status: r.status,
        fromCode: false,
        weeks: sortWeeks(r.units),
        row: r,
      })),
  ];
  return { courses, loading: q.loading, error: q.error };
}

export type Placement = { subjectSlug: string; unitId: string; topicId: string };

/** Course → week → topic pickers. */
export function PlacementFields({ value, onChange, courses, requireTopic }: { value: Placement; onChange: (p: Placement) => void; courses: AdminCourse[]; requireTopic?: boolean }) {
  const course = courses.find((c) => c.slug === value.subjectSlug);
  const weeks = course?.weeks ?? [];
  const topics = (value.unitId ? weeks.filter((w) => w.id === value.unitId) : weeks).flatMap((w) => w.topics);
  return (
    <>
      <Field label="Course">
        <select className={inputClass} value={value.subjectSlug} onChange={(e) => onChange({ subjectSlug: e.target.value, unitId: "", topicId: "" })}>
          <option value="">Choose a course…</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.code ? `${c.code} · ` : ""}
              {c.name}
              {c.status !== "published" ? " (draft)" : ""}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Week" hint={course && !weeks.length ? "Add weeks in the curriculum builder" : undefined}>
        <select className={inputClass} value={value.unitId} disabled={!weeks.length} onChange={(e) => onChange({ ...value, unitId: e.target.value, topicId: "" })}>
          <option value="">Whole course</option>
          {weeks.map((w) => (
            <option key={w.id} value={w.id}>
              Week {w.number}: {w.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Topic" hint={requireTopic ? "Practice is grouped by topic" : undefined}>
        <select
          className={inputClass}
          value={value.topicId}
          disabled={!topics.length}
          onChange={(e) => {
            const unit = weeks.find((w) => w.topics.some((t) => t.id === e.target.value));
            onChange({ ...value, topicId: e.target.value, unitId: e.target.value ? (unit?.id ?? value.unitId) : value.unitId });
          }}
        >
          <option value="">{value.unitId ? "Whole week" : "No specific topic"}</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
      </Field>
    </>
  );
}

export const timeAgo = (iso: string) => {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)} d ago`;
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};
