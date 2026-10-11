"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ExternalLink, Eye, Pencil, RotateCcw, Send, Trash2, Undo2, X } from "lucide-react";
import { deleteQuestion, deleteResource, setQuestionStatus, setResourceQuality, setResourceStatus } from "@/app/admin/actions";
import {
  FILE_FORMATS,
  KIND_LABEL,
  QUALITY_LABEL,
  QUESTION_SELECT,
  QUESTION_TYPE_LABEL,
  RESOURCE_SELECT,
  STATUS_LABEL,
  atLeast,
  type Quality,
  type QuestionRow,
  type ResourceKind,
  type ResourceRow,
  type Status,
} from "@/lib/admin";
import { supabase } from "@/lib/supabase/client";
import { cn, formatNumber, formatSize } from "@/lib/utils";
import { useToast } from "../toast";
import { Badge, Button, EmptyState, buttonClass } from "../ui";
import { LoadError, SearchBox, StatusBadge, inputClass, previewFile, timeAgo, useCourses } from "./form";
import { useAction, useAdminQuery, useStaff } from "./staff";
import { Table, Td } from "./widgets";

const PAGE = 50;
const iconButton = "grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg disabled:opacity-40";

type Item = { table: "resources"; row: ResourceRow } | { table: "questions"; row: QuestionRow };

const editHref = (item: Item) =>
  item.table === "resources" ? `/admin/upload?edit=${item.row.id}` : `/admin/questions?edit=${item.row.id}`;
const itemTitle = (item: Item) => (item.table === "resources" ? item.row.title : item.row.prompt);

/** Workflow buttons for one item: what the caller may do depends on their role and the item's status. */
export function StatusActions({ item }: { item: Item }) {
  const staff = useStaff();
  const run = useAction();
  const toast = useToast();
  const moderator = atLeast(staff.role, "moderator");
  const own = item.row.created_by === staff.id;
  const status = item.row.status;
  const move = (to: Status, message: string, note?: string) =>
    run((t) => (item.table === "resources" ? setResourceStatus(t, item.row.id, to, note) : setQuestionStatus(t, item.row.id, to, note)), message);
  const requestChanges = () => {
    const note = prompt("What needs changing? The contributor will see this.");
    if (note?.trim()) void move("rejected", "Sent back with your notes", note);
  };
  const remove = () => {
    if (!confirm(`Delete "${itemTitle(item).slice(0, 80)}"? This can't be undone.`)) return;
    void run((t) => (item.table === "resources" ? deleteResource(t, item.row.id) : deleteQuestion(t, item.row.id)), "Deleted");
  };
  const canDelete = moderator || (own && status !== "published" && status !== "archived");
  const r = item.table === "resources" ? item.row : null;

  return (
    <div className="flex items-center justify-end gap-0.5">
      {moderator && (status === "pending" || status === "draft" || status === "rejected" || status === "archived") && (
        <button type="button" className={iconButton} onClick={() => void move("published", "Published. It's live on the site.")} aria-label="Publish" title="Publish">
          <Check className="size-4 text-green" aria-hidden />
        </button>
      )}
      {moderator && status === "pending" && (
        <button type="button" className={iconButton} onClick={requestChanges} aria-label="Request changes" title="Request changes">
          <X className="size-4 text-red" aria-hidden />
        </button>
      )}
      {moderator && status === "published" && (
        <button type="button" className={iconButton} onClick={() => void move("archived", "Unpublished")} aria-label="Unpublish" title="Unpublish">
          <RotateCcw className="size-4" aria-hidden />
        </button>
      )}
      {!moderator && own && (status === "draft" || status === "rejected") && (
        <button type="button" className={iconButton} onClick={() => void move("pending", "Submitted for review")} aria-label="Submit for review" title="Submit for review">
          <Send className="size-4" aria-hidden />
        </button>
      )}
      {!moderator && own && status === "pending" && (
        <button type="button" className={iconButton} onClick={() => void move("draft", "Moved back to drafts")} aria-label="Withdraw" title="Withdraw from review">
          <Undo2 className="size-4" aria-hidden />
        </button>
      )}
      {r?.file_path && (
        <button type="button" className={iconButton} onClick={() => previewFile(r.id, toast)} aria-label="Preview file" title="Preview file">
          <Eye className="size-4" aria-hidden />
        </button>
      )}
      {r && !r.file_path && r.external_url && (
        <a href={r.external_url} target="_blank" rel="noopener noreferrer" className={iconButton} aria-label="Open link" title="Open link">
          <ExternalLink className="size-4" aria-hidden />
        </a>
      )}
      <Link href={editHref(item)} className={iconButton} aria-label="Edit" title={moderator || own ? "Edit" : "View"}>
        <Pencil className="size-4" aria-hidden />
      </Link>
      {canDelete && (
        <button type="button" className={iconButton} onClick={remove} aria-label="Delete" title="Delete">
          <Trash2 className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}

function Pager({ page, total, onPage }: { page: number; total?: number; onPage: (p: number) => void }) {
  if (!total || total <= PAGE) return null;
  const last = Math.ceil(total / PAGE) - 1;
  return (
    <div className="mt-3 flex items-center justify-end gap-2 text-sm text-muted">
      {page * PAGE + 1}–{Math.min(total, (page + 1) * PAGE)} of {formatNumber(total)}
      <Button size="sm" variant="secondary" disabled={page === 0} onClick={() => onPage(page - 1)}>
        Previous
      </Button>
      <Button size="sm" variant="secondary" disabled={page >= last} onClick={() => onPage(page + 1)}>
        Next
      </Button>
    </div>
  );
}

function Filters({
  status,
  onStatus,
  course,
  onCourse,
  query,
  onQuery,
}: {
  status: string;
  onStatus: (s: string) => void;
  course: string;
  onCourse: (s: string) => void;
  query: string;
  onQuery: (s: string) => void;
}) {
  const { courses } = useCourses();
  return (
    <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_200px_240px]">
      <SearchBox value={query} onChange={onQuery} placeholder="Search titles…" />
      <select className={inputClass} value={status} onChange={(e) => onStatus(e.target.value)} aria-label="Status">
        <option value="">Any status</option>
        {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
          <option key={s} value={s}>
            {STATUS_LABEL[s]}
          </option>
        ))}
      </select>
      <select className={inputClass} value={course} onChange={(e) => onCourse(e.target.value)} aria-label="Course">
        <option value="">All courses</option>
        {courses
          .filter((c) => c.row)
          .map((c) => (
            <option key={c.slug} value={c.row!.id}>
              {c.code ? `${c.code} · ` : ""}
              {c.name}
            </option>
          ))}
      </select>
    </div>
  );
}

const placement = (r: { subject: { name: string } | null; unit: { number: number } | null; topic: { title: string } | null }) =>
  [r.subject?.name, r.unit && `Week ${r.unit.number}`, r.topic?.title].filter(Boolean).join(" · ");

/** Notes, videos or books: every status, filterable, with workflow actions. */
export function ResourceTable({ kind }: { kind: ResourceKind }) {
  const staff = useStaff();
  const run = useAction();
  const moderator = atLeast(staff.role, "moderator");
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const q = useAdminQuery(() => {
    let req = supabase.from("resources").select(RESOURCE_SELECT, { count: "exact" }).eq("kind", kind);
    if (status) req = req.eq("status", status);
    if (course) req = req.eq("subject_id", course);
    if (query.trim()) req = req.ilike("title", `%${query.trim().replace(/[%_]/g, "\\$&")}%`);
    return req.order("updated_at", { ascending: false }).range(page * PAGE, page * PAGE + PAGE - 1);
  }, [kind, status, course, query, page]);
  const rows = (q.data ?? []) as unknown as ResourceRow[];
  const filter = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setPage(0);
  };

  return (
    <>
      <Filters status={status} onStatus={filter(setStatus)} course={course} onCourse={filter(setCourse)} query={query} onQuery={filter(setQuery)} />
      <LoadError error={q.error} />
      {!q.loading && rows.length === 0 && !q.error ? (
        <EmptyState
          title={status || course || query ? `No ${KIND_LABEL[kind].toLowerCase()}s match.` : `No ${KIND_LABEL[kind].toLowerCase()}s yet.`}
          description={`Add one from the upload page. Published ${KIND_LABEL[kind].toLowerCase()}s appear on the course pages straight away.`}
          action={
            <Link href={`/admin/upload?kind=${kind}`} className={buttonClass("primary")}>
              Add {KIND_LABEL[kind].toLowerCase()}
            </Link>
          }
        />
      ) : (
        <div className={cn(q.loading && "opacity-60 transition-opacity")}>
          <Table head={["Title", "Placement", "Status", "Quality", kind === "note" ? "Downloads" : kind === "video" ? "Length" : "Access", "Updated", ""]}>
            {rows.map((r) => (
              <tr key={r.id}>
                <Td className="max-w-xs">
                  <p className="font-medium">{r.title}</p>
                  <p className="text-xs text-muted">
                    {kind === "note" &&
                      [r.notes?.note_kind, r.file_path ? (FILE_FORMATS.find((f) => f.type === r.file_type)?.label ?? "File") : "Link", r.file_size ? formatSize(Math.round(r.file_size / 1024)) : null]
                        .filter(Boolean)
                        .join(" · ")}
                    {kind === "video" && r.videos?.channel}
                    {kind === "book" && r.books?.authors.join(", ")}
                    {r.creator && ` · by ${r.creator.name}`}
                  </p>
                  {r.visibility !== "public" && <Badge className="mt-1">{r.visibility === "registered" ? "Signed-in only" : "Staff only"}</Badge>}
                </Td>
                <Td className="text-muted">{placement(r)}</Td>
                <Td>
                  <StatusBadge status={r.status} />
                  {r.status === "rejected" && r.review_note && <p className="mt-1 max-w-48 text-xs text-red">{r.review_note}</p>}
                </Td>
                <Td>
                  {moderator ? (
                    <select
                      className="h-8 rounded-md border border-border bg-bg px-2 text-xs"
                      value={r.quality}
                      aria-label={`Quality of ${r.title}`}
                      onChange={(e) => void run((t) => setResourceQuality(t, r.id, e.target.value as Quality), "Quality flag updated")}
                    >
                      {(Object.keys(QUALITY_LABEL) as Quality[]).map((x) => (
                        <option key={x} value={x}>
                          {QUALITY_LABEL[x]}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="text-xs">{QUALITY_LABEL[r.quality]}</span>
                  )}
                </Td>
                <Td className="tabular-nums">
                  {kind === "note" && formatNumber(r.download_count)}
                  {kind === "video" && (r.videos?.duration || "—")}
                  {kind === "book" && (r.books?.free ? <Badge tone="green">Free &amp; legal</Badge> : r.external_url ? <Badge>Publisher</Badge> : "—")}
                </Td>
                <Td className="text-xs whitespace-nowrap text-muted">{timeAgo(r.updated_at)}</Td>
                <Td>
                  <StatusActions item={{ table: "resources", row: r }} />
                </Td>
              </tr>
            ))}
          </Table>
          <Pager page={page} total={q.count} onPage={setPage} />
        </div>
      )}
    </>
  );
}

/* ───────────── Review queue ───────────── */

const QUEUES = [
  { status: "pending", label: "Waiting for review" },
  { status: "rejected", label: "Changes requested" },
  { status: "draft", label: "Drafts" },
] as const;

/** Content approval workflow (PRD §33): Draft → Pending review → Published, or back with notes. */
export function ReviewQueue() {
  const staff = useStaff();
  const moderator = atLeast(staff.role, "moderator");
  const [tab, setTab] = useState<(typeof QUEUES)[number]["status"]>("pending");
  const q = useAdminQuery(async () => {
    // Moderators see everyone's items; contributors their own.
    let resources = supabase.from("resources").select(RESOURCE_SELECT).eq("status", tab);
    let questions = supabase.from("questions").select(QUESTION_SELECT).eq("status", tab);
    if (!moderator) {
      resources = resources.eq("created_by", staff.id);
      questions = questions.eq("created_by", staff.id);
    }
    const [r, qs] = await Promise.all([resources.order("updated_at").limit(200), questions.order("updated_at").limit(200)]);
    const items: Item[] = [
      ...((r.data ?? []) as unknown as ResourceRow[]).map((row) => ({ table: "resources" as const, row })),
      ...((qs.data ?? []) as unknown as QuestionRow[]).map((row) => ({ table: "questions" as const, row })),
    ].sort((a, b) => a.row.updated_at.localeCompare(b.row.updated_at));
    return { data: items, error: r.error ?? qs.error };
  }, [tab, moderator, staff.id]);
  const items = q.data ?? [];

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2" role="tablist">
        {QUEUES.map((x) => (
          <button
            key={x.status}
            type="button"
            role="tab"
            aria-selected={tab === x.status}
            onClick={() => setTab(x.status)}
            className={cn("rounded-lg border px-3 py-1.5 text-sm font-medium", tab === x.status ? "border-fg bg-ink text-bg" : "border-border hover:border-fg/30")}
          >
            {x.label}
          </button>
        ))}
      </div>
      <LoadError error={q.error} />
      {!q.loading && items.length === 0 && !q.error ? (
        <EmptyState
          title={tab === "pending" ? "Nothing is waiting for review." : tab === "rejected" ? "Nothing has been sent back." : "No drafts."}
          description={
            tab === "pending"
              ? moderator
                ? "Contributor uploads and questions land here before they go live."
                : "Items you submit appear here until a moderator reviews them."
              : undefined
          }
        />
      ) : (
        <div className={cn(q.loading && "opacity-60 transition-opacity")}>
          <Table head={["Item", "Type", "Placement", "By", "Updated", ""]} caption="Review queue">
            {items.map((item) => (
              <tr key={item.table + item.row.id}>
                <Td className="max-w-md">
                  <Link href={editHref(item)} className="line-clamp-2 font-medium hover:underline">
                    {itemTitle(item)}
                  </Link>
                  {item.row.review_note && <p className="mt-1 text-xs text-red">Changes requested: {item.row.review_note}</p>}
                </Td>
                <Td>{item.table === "resources" ? KIND_LABEL[item.row.kind] : `Question · ${QUESTION_TYPE_LABEL[item.row.type]}`}</Td>
                <Td className="text-muted">{placement(item.row)}</Td>
                <Td className="text-muted">{item.row.creator?.name ?? "—"}</Td>
                <Td className="text-xs whitespace-nowrap text-muted">{timeAgo(item.row.updated_at)}</Td>
                <Td>
                  <StatusActions item={item} />
                </Td>
              </tr>
            ))}
          </Table>
        </div>
      )}
    </>
  );
}
