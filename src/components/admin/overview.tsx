"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, CircleAlert, GitBranch, Upload } from "lucide-react";
import { PAPER_KIND_LABEL, ROLES, ROLE_DESCRIPTION, ROLE_LABEL, STATUS_LABEL, atLeast, type PaperKind, type Status } from "@/lib/admin";
import { getLevel } from "@/lib/content";
import { supabase } from "@/lib/supabase/client";
import { formatNumber } from "@/lib/utils";
import { Badge, buttonClass } from "../ui";
import { ReviewQueue } from "./content-tables";
import { LoadError, StatusBadge, timeAgo, useCourses } from "./form";
import { AdminHeader } from "./shell";
import { useAdminQuery, useStaff } from "./staff";
import { BarList, StatCard, Table, Td } from "./widgets";

type Overview = {
  users: Record<string, number>;
  signups: { day: string; count: number }[];
  active7: number;
  active30: number;
  practiceAttempts: number;
  paperAttempts: { slug: string; title: string; attempts: number; avgPercent: number | null }[];
  paperAttemptsTotal: number;
  downloads: number;
  downloads30: number;
  topDownloads: { id: string; title: string; kind: string; downloads: number }[];
  resources: Record<string, number>;
  questions: Record<string, number>;
  openReports: number;
  papers: Record<string, number>;
};

export function useOverview() {
  const q = useAdminQuery(() => supabase.rpc("admin_overview"), []);
  return { ...q, data: q.data as Overview | undefined };
}

const sum = (o: Record<string, number> | undefined, test: (k: string) => boolean = () => true) =>
  Object.entries(o ?? {}).reduce((n, [k, v]) => n + (test(k) ? v : 0), 0);

/* ───────────── Dashboard ───────────── */

export function AdminDashboard() {
  const staff = useStaff();
  const moderator = atLeast(staff.role, "moderator");
  return (
    <>
      <AdminHeader
        title="Dashboard"
        description={moderator ? "Content health and activity across BTechi." : "Your uploads and what happened to them."}
        action={
          <div className="flex gap-2">
            {moderator && (
              <Link href="/admin/curriculum" className={buttonClass("secondary", "md")}>
                <GitBranch className="size-4" aria-hidden /> Curriculum
              </Link>
            )}
            <Link href="/admin/upload" className={buttonClass("primary", "md")}>
              <Upload className="size-4" aria-hidden /> Upload
            </Link>
          </div>
        }
      />
      {moderator ? <StaffStats /> : <ContributorStats />}
      <h2 className="mt-8 mb-3 text-lg font-bold">{moderator ? "Waiting for review" : "Your items"}</h2>
      <ReviewQueue />
      {moderator && <OpenReports />}
    </>
  );
}

function StaffStats() {
  const { data: o, error } = useOverview();
  if (error) return <LoadError error={error} />;
  const published = (kind: string) => o?.resources[`${kind}:published`] ?? 0;
  const pending = sum(o?.resources, (k) => k.endsWith(":pending")) + (o?.questions.pending ?? 0);
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Students" value={o?.users.student ?? "…"} hint={o ? `${o.active7} active in the last 7 days` : undefined} />
      <StatCard
        label="Published resources"
        value={o ? published("note") + published("video") + published("book") : "…"}
        hint={o ? `${published("note")} notes · ${published("video")} videos · ${published("book")} books · ${o.questions.published ?? 0} questions` : undefined}
      />
      <StatCard label="Waiting for review" value={o ? pending : "…"} accent={pending ? "text-amber" : undefined} hint="Uploads and questions" />
      <StatCard label="Open reports" value={o?.openReports ?? "…"} accent={o?.openReports ? "text-red" : undefined} hint={o ? `${formatNumber(o.downloads30)} downloads in 30 days` : undefined} />
    </div>
  );
}

function ContributorStats() {
  const staff = useStaff();
  const q = useAdminQuery(async () => {
    const [r, qs] = await Promise.all([
      supabase.from("resources").select("status").eq("created_by", staff.id),
      supabase.from("questions").select("status").eq("created_by", staff.id),
    ]);
    const counts: Partial<Record<Status, number>> = {};
    for (const x of [...(r.data ?? []), ...(qs.data ?? [])]) counts[x.status as Status] = (counts[x.status as Status] ?? 0) + 1;
    return { data: counts, error: r.error ?? qs.error };
  }, [staff.id]);
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {(["draft", "pending", "rejected", "published"] as Status[]).map((s) => (
        <StatCard key={s} label={STATUS_LABEL[s]} value={q.data?.[s] ?? (q.loading ? "…" : 0)} />
      ))}
    </div>
  );
}

function OpenReports() {
  const q = useAdminQuery(() => supabase.from("reports").select("id, title, reason, kind, created_at").eq("status", "open").order("created_at", { ascending: false }).limit(5), []);
  const rows = (q.data ?? []) as { id: string; title: string; reason: string; kind: string; created_at: string }[];
  return (
    <section className="card mt-6 p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold">Open reports</h2>
        <Link href="/admin/reports" className="text-sm text-muted hover:text-fg">
          View all →
        </Link>
      </div>
      {rows.length ? (
        <ul className="divide-y divide-border text-sm">
          {rows.map((r) => (
            <li key={r.id} className="flex items-center gap-3 py-2.5">
              <Badge tone="red">{r.reason}</Badge>
              <span className="truncate">{r.title || r.kind}</span>
              <span className="ml-auto shrink-0 text-xs text-muted">{timeAgo(r.created_at)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">No open reports. Students can report any resource with the flag button.</p>
      )}
    </section>
  );
}

/* ───────────── Analytics ───────────── */

export function Analytics() {
  const { data: o, error } = useOverview();
  if (error) return <LoadError error={error} />;
  if (!o) return <div className="skeleton h-96" />;
  const signups30 = o.signups.reduce((n, d) => n + d.count, 0);
  const staffCount = sum(o.users, (k) => k !== "student");
  return (
    <>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Accounts" value={sum(o.users)} hint={`${formatNumber(signups30)} new in 30 days · ${staffCount} staff`} />
        <StatCard label="Active students" value={o.active7} hint={`7 days · ${formatNumber(o.active30)} in 30 days`} />
        <StatCard label="Papers attempted" value={o.paperAttemptsTotal} hint={`${formatNumber(o.practiceAttempts)} practice answers saved`} />
        <StatCard label="Downloads" value={o.downloads} hint={`${formatNumber(o.downloads30)} in the last 30 days`} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <BarList
          title="Most attempted papers"
          rows={o.paperAttempts.map((p) => ({ label: `${p.title}${p.avgPercent !== null ? ` · avg ${p.avgPercent}%` : ""}`, value: p.attempts }))}
          empty="No signed-in student has submitted a paper yet."
        />
        <BarList
          title="Most downloaded resources"
          rows={o.topDownloads.map((d) => ({ label: d.title, value: d.downloads, href: d.kind === "note" ? `/notes/${d.id}` : undefined }))}
          empty="No downloads yet."
        />
        <BarList title="Accounts by role" rows={ROLES.map((r) => ({ label: ROLE_LABEL[r], value: o.users[r] ?? 0 })).filter((r) => r.value > 0)} />
        <BarList
          title="Papers in the exam portal"
          rows={(Object.keys(PAPER_KIND_LABEL) as PaperKind[]).map((k) => ({ label: PAPER_KIND_LABEL[k], value: o.papers[k] ?? 0 })).filter((r) => r.value > 0)}
        />
      </div>
      <p className="mt-4 text-xs text-muted">Activity counts cover signed-in students; guests&apos; progress stays in their browser.</p>
    </>
  );
}

/* ───────────── Courses ───────────── */

export function CoursesTable() {
  const { courses, error } = useCourses();
  const counts = useAdminQuery(() => supabase.from("resources").select("subject_id, status"), []);
  const perCourse = new Map<string, number>();
  for (const r of (counts.data ?? []) as { subject_id: string; status: string }[])
    if (r.status === "published") perCourse.set(r.subject_id, (perCourse.get(r.subject_id) ?? 0) + 1);
  return (
    <>
      <LoadError error={error} />
      <Table head={["Code", "Course", "Level", "Weeks", "Topics", "Resources", "Status"]}>
        {courses.map((c) => (
          <tr key={c.slug}>
            <Td className="font-mono text-xs text-muted">{c.code ?? "—"}</Td>
            <Td>
              {c.status === "published" ? (
                <Link href={`/subjects/${c.slug}`} className="font-medium hover:underline">
                  {c.name}
                </Link>
              ) : (
                <span className="font-medium">{c.name}</span>
              )}
              {!c.fromCode && <p className="text-xs text-muted">Created in the CMS</p>}
            </Td>
            <Td>{getLevel("iitm-bs", c.level)?.short ?? c.level}</Td>
            <Td className="tabular-nums">{c.weeks.length}</Td>
            <Td className="tabular-nums">{c.weeks.reduce((n, w) => n + w.topics.length, 0)}</Td>
            <Td className="tabular-nums">{c.row ? (perCourse.get(c.row.id) ?? 0) : 0}</Td>
            <Td>{c.fromCode ? <Badge tone="green">Official</Badge> : <StatusBadge status={c.status} />}</Td>
          </tr>
        ))}
      </Table>
    </>
  );
}

/* ───────────── Settings ───────────── */

type Check = { label: string; ok: boolean | null; detail: string };

/** Checks the database and storage are set up, and explains how access works. */
export function Settings() {
  const staff = useStaff();
  const [checks, setChecks] = useState<Check[]>([
    { label: "CMS database (0003_cms.sql)", ok: null, detail: "Checking…" },
    { label: "Published content for the site", ok: null, detail: "Checking…" },
    { label: "File storage bucket", ok: null, detail: "Checking…" },
  ]);
  useEffect(() => {
    void (async () => {
      const [overview, content, storage] = await Promise.all([
        supabase.rpc("admin_overview"),
        supabase.rpc("published_content", undefined, { get: true }),
        supabase.storage.from("resources").list(staff.id, { limit: 1 }),
      ]);
      const missing = "Run supabase/0003_cms.sql in the Supabase SQL editor.";
      setChecks([
        { label: "CMS database (0003_cms.sql)", ok: !overview.error, detail: overview.error ? `${overview.error.message}. ${missing}` : "Tables, policies and admin functions are in place." },
        {
          label: "Published content for the site",
          ok: !content.error,
          detail: content.error
            ? content.error.message
            : (() => {
                const c = content.data as { units: unknown[]; resources: unknown[]; questions: unknown[] };
                return `${c.units.length} weeks, ${c.resources.length} resources and ${c.questions.length} questions are live.`;
              })(),
        },
        {
          label: "File storage bucket",
          ok: !storage.error,
          detail: storage.error ? `${storage.error.message}. ${missing}` : "Private bucket “resources”: files are served through 1-hour signed links (5 minutes for downloads).",
        },
      ]);
    })();
  }, [staff.id]);

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <h2 className="mb-3 font-semibold">System status</h2>
        <ul className="space-y-3 text-sm">
          {checks.map((c) => (
            <li key={c.label} className="flex gap-3">
              {c.ok === null ? (
                <span className="mt-0.5 size-4 shrink-0 animate-pulse rounded-full bg-surface-2" />
              ) : c.ok ? (
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" aria-label="OK" />
              ) : (
                <CircleAlert className="mt-0.5 size-4 shrink-0 text-red" aria-label="Problem" />
              )}
              <span>
                <span className="font-medium">{c.label}</span>
                <span className="block text-muted">{c.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Uploads", "PDF, Word (.doc, .docx) and images (PNG, JPEG, WebP), up to 25 MB. The type is checked from the file's contents on the server, not its name."],
          ["Publishing", "Contributors' uploads and questions wait in the review queue until a moderator publishes them. Published changes show on the site immediately."],
          ["Access control", "Every read and write runs as the signed-in user and is checked by Supabase Row Level Security. Roles live in profiles.role and can't be self-assigned."],
          ["Authentication", "Email/password and Google sign-in through Supabase Auth. Change providers and email templates in the Supabase dashboard."],
        ].map(([t, d]) => (
          <div key={t} className="card p-5">
            <p className="font-semibold">{t}</p>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </div>
      <section>
        <h2 className="mb-3 font-semibold">Roles</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-5">
          {ROLES.map((r) => (
            <div key={r} className="card p-4">
              <p className="font-semibold">{ROLE_LABEL[r]}</p>
              <p className="mt-1 text-muted">{ROLE_DESCRIPTION[r]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
