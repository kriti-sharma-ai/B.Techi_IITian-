"use client";

import Link from "next/link";
import { useState } from "react";
import { setReportStatus, setUserRole } from "@/app/admin/actions";
import { ROLE_LABEL, assignableRoles } from "@/lib/admin";
import type { Role } from "@/lib/store";
import { supabase } from "@/lib/supabase/client";
import { cn, formatNumber } from "@/lib/utils";
import { Badge, Button, EmptyState } from "../ui";
import { LoadError, SearchBox, inputClass, timeAgo } from "./form";
import { useOverview } from "./overview";
import { useAction, useAdminQuery, useStaff } from "./staff";
import { BarList, StatCard, Table, Td } from "./widgets";

const ROLE_TONE = { student: "neutral", contributor: "teal", moderator: "blue", admin: "purple", super_admin: "purple" } as const;
const PAGE = 50;

/* ───────────── Users ───────────── */

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: Role;
  university: string | null;
  level: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  total: number;
};

export function UsersTable() {
  const staff = useStaff();
  const run = useAction();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const q = useAdminQuery(() => supabase.rpc("admin_list_users", { q: query.trim() || null, lim: PAGE, off: page * PAGE }), [query, page]);
  const rows = (q.data ?? []) as UserRow[];
  const total = rows[0]?.total ?? 0;

  return (
    <>
      <div className="mb-4 max-w-md">
        <SearchBox
          value={query}
          onChange={(v) => {
            setQuery(v);
            setPage(0);
          }}
          placeholder="Search by name or email…"
        />
      </div>
      <LoadError error={q.error} />
      {!q.loading && !rows.length && !q.error ? (
        <EmptyState title="No users match." />
      ) : (
        <div className={cn(q.loading && "opacity-60 transition-opacity")}>
          <Table head={["Name", "Email", "Role", "Joined", "Last sign-in"]} caption="Users">
            {rows.map((u) => {
              const you = u.id === staff.id;
              const options = you ? [] : assignableRoles(staff.role, u.role);
              return (
                <tr key={u.id}>
                  <Td className="font-medium">
                    {u.name} {you && <Badge tone="brand">You</Badge>}
                    {(u.university || u.level) && <p className="text-xs font-normal text-muted">{[u.university, u.level].filter(Boolean).join(" · ")}</p>}
                  </Td>
                  <Td className="text-muted">{u.email}</Td>
                  <Td>
                    {options.length ? (
                      <select
                        className="h-8 rounded-md border border-border bg-bg px-2 text-sm"
                        value={u.role}
                        aria-label={`Role of ${u.name}`}
                        onChange={(e) => {
                          const role = e.target.value as Role;
                          if (confirm(`Make ${u.name} a ${ROLE_LABEL[role].toLowerCase()}?`)) void run((t) => setUserRole(t, u.id, role), `${u.name} is now a ${ROLE_LABEL[role].toLowerCase()}`);
                        }}
                      >
                        {options.map((r) => (
                          <option key={r} value={r}>
                            {ROLE_LABEL[r]}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <Badge tone={ROLE_TONE[u.role]}>{ROLE_LABEL[u.role]}</Badge>
                    )}
                  </Td>
                  <Td className="text-muted">{timeAgo(u.created_at)}</Td>
                  <Td className="text-muted">{u.last_sign_in_at ? timeAgo(u.last_sign_in_at) : "Never"}</Td>
                </tr>
              );
            })}
          </Table>
          {total > PAGE && (
            <div className="mt-3 flex items-center justify-end gap-2 text-sm text-muted">
              {page * PAGE + 1}–{Math.min(total, (page + 1) * PAGE)} of {formatNumber(total)}
              <Button size="sm" variant="secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>
                Previous
              </Button>
              <Button size="sm" variant="secondary" disabled={(page + 1) * PAGE >= total} onClick={() => setPage(page + 1)}>
                Next
              </Button>
            </div>
          )}
        </div>
      )}
      <p className="mt-4 text-xs text-muted">
        {staff.role === "super_admin"
          ? "You can give any role except to yourself."
          : "Admins manage students, contributors and moderators. Only a super admin can grant or remove admin rights."}
      </p>
    </>
  );
}

/* ───────────── Reports ───────────── */

type ReportRow = {
  id: string;
  kind: string;
  target_id: string;
  title: string;
  href: string | null;
  reason: string;
  details: string | null;
  status: "open" | "resolved";
  created_at: string;
  resolved_at: string | null;
  user: { name: string } | null;
};

/** Where a reported item can be looked at, when the report didn't record its page. */
function reportLink(r: ReportRow) {
  if (r.href) return r.href;
  if (r.kind === "note") return `/notes/${r.target_id}`;
  if (r.kind === "book") return `/books/${r.target_id}`;
  if (r.kind === "topic") return `/subjects/${r.target_id}`;
  return null;
}

export function ReportsTable() {
  const run = useAction();
  const [status, setStatus] = useState<"open" | "resolved" | "">("open");
  const q = useAdminQuery(() => {
    let req = supabase
      .from("reports")
      .select("id, kind, target_id, title, href, reason, details, status, created_at, resolved_at, user:profiles!reports_user_id_fkey(name)")
      .order("created_at", { ascending: false })
      .limit(200);
    if (status) req = req.eq("status", status);
    return req;
  }, [status]);
  const rows = (q.data ?? []) as unknown as ReportRow[];

  return (
    <>
      <div className="mb-4 w-48">
        <select className={inputClass} value={status} onChange={(e) => setStatus(e.target.value as typeof status)} aria-label="Status">
          <option value="open">Open</option>
          <option value="resolved">Resolved</option>
          <option value="">All</option>
        </select>
      </div>
      <LoadError error={q.error} />
      {!q.loading && !rows.length && !q.error ? (
        <EmptyState
          title={status === "open" ? "No open reports." : "No reports."}
          description="When students flag a resource (wrong syllabus, broken download…), it shows up here."
        />
      ) : (
        <div className={cn(q.loading && "opacity-60 transition-opacity")}>
          <Table head={["Resource", "Reason", "Details", "From", "Reported", ""]} caption="Student reports">
            {rows.map((r) => {
              const href = reportLink(r);
              return (
                <tr key={r.id}>
                  <Td className="max-w-xs">
                    {href ? (
                      <Link href={href} target="_blank" className="font-medium hover:underline">
                        {r.title || r.target_id}
                      </Link>
                    ) : (
                      <p className="font-medium">{r.title || r.target_id}</p>
                    )}
                    <p className="text-xs text-muted capitalize">{r.kind}</p>
                  </Td>
                  <Td>
                    <Badge tone="red">{r.reason}</Badge>
                  </Td>
                  <Td className="max-w-xs text-muted">{r.details || "—"}</Td>
                  <Td className="text-muted">{r.user?.name ?? "Guest or student"}</Td>
                  <Td className="text-xs whitespace-nowrap text-muted">{timeAgo(r.created_at)}</Td>
                  <Td className="text-right">
                    {r.status === "open" ? (
                      <Button size="sm" variant="secondary" onClick={() => void run((t) => setReportStatus(t, r.id, "resolved"), "Marked resolved")}>
                        Mark resolved
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" onClick={() => void run((t) => setReportStatus(t, r.id, "open"), "Reopened")}>
                        Reopen
                      </Button>
                    )}
                  </Td>
                </tr>
              );
            })}
          </Table>
        </div>
      )}
    </>
  );
}

/* ───────────── Downloads ───────────── */

type DownloadRow = { id: number; created_at: string; resource: { id: string; title: string; kind: string } | null; user: { name: string } | null };

export function Downloads() {
  const { data: o, error } = useOverview();
  const q = useAdminQuery(
    () =>
      supabase
        .from("downloads")
        .select("id, created_at, resource:resources(id, title, kind), user:profiles(name)")
        .order("created_at", { ascending: false })
        .limit(50),
    [],
  );
  const rows = (q.data ?? []) as unknown as DownloadRow[];
  return (
    <>
      <LoadError error={error ?? q.error} />
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <StatCard label="All-time downloads" value={o?.downloads ?? "…"} />
        <StatCard label="Last 30 days" value={o?.downloads30 ?? "…"} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <BarList
          title="Most downloaded"
          rows={(o?.topDownloads ?? []).map((d) => ({ label: d.title, value: d.downloads, href: d.kind === "note" ? `/notes/${d.id}` : undefined }))}
          empty="No downloads yet."
        />
        <section className="card p-5">
          <h2 className="mb-3 font-semibold">Latest downloads</h2>
          {rows.length ? (
            <ul className="divide-y divide-border text-sm">
              {rows.map((d) => (
                <li key={d.id} className="flex items-center gap-3 py-2">
                  <span className="truncate">{d.resource?.title ?? "Deleted resource"}</span>
                  <span className="ml-auto shrink-0 text-xs text-muted">
                    {d.user?.name ?? "Guest"} · {timeAgo(d.created_at)}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">Downloads of published files are logged here.</p>
          )}
        </section>
      </div>
    </>
  );
}
