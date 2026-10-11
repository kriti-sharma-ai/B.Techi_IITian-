"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { LoaderCircle, Plus, Trash2 } from "lucide-react";
import { deleteQuestion, saveQuestion } from "@/app/admin/actions";
import {
  DIFFICULTIES,
  QUESTION_SELECT,
  QUESTION_TYPE_LABEL,
  STATUS_LABEL,
  atLeast,
  questionProblem,
  type Difficulty,
  type QuestionInput,
  type QuestionRow,
  type QuestionType,
  type Status,
} from "@/lib/admin";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Badge, Button, EmptyState, buttonClass } from "../ui";
import { AdminHeader } from "./shell";
import { StatusActions } from "./content-tables";
import { Field, LoadError, PlacementFields, SearchBox, StatusBadge, inputClass, textareaClass, timeAgo, useCourses, type Placement } from "./form";
import { useAction, useAdminQuery, useStaff } from "./staff";
import { Table, Td } from "./widgets";

/** /admin/questions: the bank, or the editor with ?edit=<id> / ?new=1. */
export function QuestionsSection() {
  const params = useSearchParams();
  const editId = params.get("edit");
  if (editId || params.get("new")) return <QuestionEditor key={editId ?? "new"} id={editId} />;
  return <QuestionList />;
}

function QuestionList() {
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");
  const q = useAdminQuery(() => {
    let req = supabase.from("questions").select(QUESTION_SELECT, { count: "exact" });
    if (status) req = req.eq("status", status);
    if (query.trim()) req = req.ilike("prompt", `%${query.trim().replace(/[%_]/g, "\\$&")}%`);
    return req.order("updated_at", { ascending: false }).limit(200);
  }, [status, query]);
  const rows = (q.data ?? []) as unknown as QuestionRow[];

  return (
    <>
      <AdminHeader
        title="Questions"
        description="The practice bank. Every question needs an explanation before it can go live."
        action={
          <Link href="/admin/questions?new=1" className={buttonClass("primary", "md")}>
            <Plus className="size-4" aria-hidden /> New question
          </Link>
        }
      />
      <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_220px]">
        <SearchBox value={query} onChange={setQuery} placeholder="Search questions…" />
        <select className={inputClass} value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status">
          <option value="">Any status</option>
          {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
            <option key={s} value={s}>
              {STATUS_LABEL[s]}
            </option>
          ))}
        </select>
      </div>
      <LoadError error={q.error} />
      {!q.loading && !rows.length && !q.error ? (
        <EmptyState
          title={status || query ? "No questions match." : "No questions yet."}
          description="Published questions show up in topic quizzes and the practice builder."
          action={
            <Link href="/admin/questions?new=1" className={buttonClass("primary")}>
              Write the first one
            </Link>
          }
        />
      ) : (
        <div className={cn(q.loading && "opacity-60 transition-opacity")}>
          <Table head={["Question", "Placement", "Type", "Difficulty", "Status", "Updated", ""]}>
            {rows.map((r) => (
              <tr key={r.id}>
                <Td className="max-w-md">
                  <Link href={`/admin/questions?edit=${r.id}`} className="line-clamp-2 hover:underline">
                    {r.prompt}
                  </Link>
                  {r.source && <p className="text-xs text-muted">{r.source}</p>}
                </Td>
                <Td className="text-muted">{[r.subject?.name, r.topic?.title].filter(Boolean).join(" · ")}</Td>
                <Td>{QUESTION_TYPE_LABEL[r.type] ?? r.type}</Td>
                <Td>
                  <Badge tone={r.difficulty === "Easy" ? "green" : r.difficulty === "Medium" ? "amber" : "red"}>{r.difficulty}</Badge>
                </Td>
                <Td>
                  <StatusBadge status={r.status} />
                </Td>
                <Td className="text-xs whitespace-nowrap text-muted">{timeAgo(r.updated_at)}</Td>
                <Td>
                  <StatusActions item={{ table: "questions", row: r }} />
                </Td>
              </tr>
            ))}
          </Table>
          {q.count !== undefined && q.count > rows.length && <p className="mt-3 text-sm text-muted">Showing the latest {rows.length} of {q.count}. Search to narrow down.</p>}
        </div>
      )}
    </>
  );
}

type Draft = {
  placement: Placement;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  context: string;
  options: string[];
  correct: number[];
  numeric: string;
  tolerance: string;
  accepted: string;
  explanation: string;
  source: string;
};

const blank: Draft = {
  placement: { subjectSlug: "", unitId: "", topicId: "" },
  type: "mcq",
  difficulty: "Medium",
  prompt: "",
  context: "",
  options: ["", "", "", ""],
  correct: [],
  numeric: "",
  tolerance: "",
  accepted: "",
  explanation: "",
  source: "",
};

function fromRow(r: QuestionRow): Draft {
  const options = [...r.options].sort((a, b) => a.position - b.position).map((o) => o.body);
  const a = r.answer;
  return {
    placement: { subjectSlug: r.subject?.slug ?? "", unitId: r.unit?.id ?? "", topicId: r.topic?.id ?? "" },
    type: r.type,
    difficulty: r.difficulty,
    prompt: r.prompt,
    context: r.context ?? "",
    options: options.length ? options : ["", "", "", ""],
    correct: typeof a === "number" && r.type !== "numerical" ? [a] : Array.isArray(a) && typeof a[0] === "number" ? (a as number[]) : [],
    numeric: r.type === "numerical" && typeof a === "number" ? String(a) : "",
    tolerance: r.tolerance !== null ? String(r.tolerance) : "",
    accepted: Array.isArray(a) && typeof a[0] === "string" ? (a as string[]).join("\n") : "",
    explanation: r.explanation,
    source: r.source ?? "",
  };
}

function toInput(d: Draft, id: string | null, status: QuestionInput["status"]): QuestionInput {
  const options = d.type === "truefalse" ? ["True", "False"] : d.options.map((o) => o.trim());
  const answer =
    d.type === "multi"
      ? d.correct
      : d.type === "mcq" || d.type === "truefalse"
        ? (d.correct[0] ?? -1)
        : d.type === "numerical"
          ? d.numeric.trim() === ""
            ? NaN
            : Number(d.numeric)
          : d.accepted.split("\n").map((s) => s.trim()).filter(Boolean);
  return {
    id: id ?? undefined,
    ...d.placement,
    type: d.type,
    difficulty: d.difficulty,
    prompt: d.prompt,
    context: d.context,
    options: d.type === "mcq" || d.type === "multi" || d.type === "truefalse" ? options : [],
    answer,
    tolerance: d.type === "numerical" && d.tolerance.trim() ? Number(d.tolerance) : null,
    explanation: d.explanation,
    source: d.source,
    status,
  };
}

function QuestionEditor({ id }: { id: string | null }) {
  const router = useRouter();
  const run = useAction();
  const staff = useStaff();
  const moderator = atLeast(staff.role, "moderator");
  const { courses } = useCourses();
  const existing = useAdminQuery(
    () => (id ? supabase.from("questions").select(QUESTION_SELECT).eq("id", id).maybeSingle() : Promise.resolve({ data: null, error: null })),
    [id],
  );
  const row = existing.data as QuestionRow | undefined;
  const [d, setD] = useState<Draft>(blank);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const filled = useRef(false);

  useEffect(() => {
    if (row && !filled.current) {
      filled.current = true;
      setD(fromRow(row));
    }
  }, [row]);

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setD((x) => ({ ...x, [k]: v }));
  const choice = d.type === "mcq" || d.type === "multi" || d.type === "truefalse";
  const canEdit = !row || moderator || (row.created_by === staff.id && ["draft", "pending", "rejected"].includes(row.status));

  const submit = async (status: QuestionInput["status"]) => {
    if (!d.placement.subjectSlug) return setError("Choose a course.");
    const input = toInput(d, id, status);
    const problem = questionProblem(input);
    if (problem) return setError(problem);
    setError("");
    setBusy(status);
    const done = await run((t) => saveQuestion(t, input), status === "published" ? "Published" : status === "pending" ? "Submitted for review" : "Saved as draft");
    setBusy(null);
    if (done && !id) router.replace(`/admin/questions?edit=${done.id}`);
  };

  if (id && existing.loading && !row) return <div className="skeleton h-96" />;
  if (id && !existing.loading && !row) return <LoadError error={existing.error ?? "That question doesn't exist, or you can't see it."} />;

  const toggleCorrect = (i: number) =>
    set("correct", d.type === "multi" ? (d.correct.includes(i) ? d.correct.filter((x) => x !== i) : [...d.correct, i]) : [i]);

  return (
    <>
      <AdminHeader
        title={id ? "Edit question" : "New question"}
        description="Students see the explanation after answering, so make it teach."
        action={
          <Link href="/admin/questions" className={buttonClass("secondary", "md")}>
            All questions
          </Link>
        }
      />
      <form
        noValidate
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          void submit(moderator ? "published" : "pending");
        }}
        className="grid gap-6 xl:grid-cols-[1fr_340px]"
      >
        <fieldset disabled={!canEdit || !!busy} className="card space-y-4 p-5">
          {row && (
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <StatusBadge status={row.status} />
              <span className="text-muted">by {row.creator?.name ?? "a staff member"}</span>
              {row.review_note && <p className="w-full rounded-lg bg-red/5 px-3 py-2 text-red">Changes requested: {row.review_note}</p>}
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Type">
              <select
                className={inputClass}
                value={d.type}
                onChange={(e) => setD((x) => ({ ...x, type: e.target.value as QuestionType, correct: [] }))}
              >
                {(Object.keys(QUESTION_TYPE_LABEL) as QuestionType[]).map((t) => (
                  <option key={t} value={t}>
                    {QUESTION_TYPE_LABEL[t]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Difficulty">
              <select className={inputClass} value={d.difficulty} onChange={(e) => set("difficulty", e.target.value as Difficulty)}>
                {DIFFICULTIES.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Context" hint="Optional: case study, data or passage shown above the question">
            <textarea className={textareaClass} value={d.context} onChange={(e) => set("context", e.target.value)} />
          </Field>
          <Field label="Question">
            <textarea className={textareaClass + " min-h-24"} value={d.prompt} onChange={(e) => set("prompt", e.target.value)} />
          </Field>

          {choice && (
            <fieldset>
              <legend className="mb-2 text-sm font-medium">{d.type === "multi" ? "Options: tick every correct one" : "Options: pick the correct one"}</legend>
              <ul className="space-y-2">
                {(d.type === "truefalse" ? ["True", "False"] : d.options).map((o, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <input
                      type={d.type === "multi" ? "checkbox" : "radio"}
                      name="correct"
                      checked={d.correct.includes(i)}
                      onChange={() => toggleCorrect(i)}
                      aria-label={`Option ${i + 1} is correct`}
                    />
                    {d.type === "truefalse" ? (
                      <span className="text-sm">{o}</span>
                    ) : (
                      <>
                        <input
                          className={inputClass}
                          value={o}
                          placeholder={`Option ${i + 1}`}
                          onChange={(e) => set("options", d.options.map((x, j) => (j === i ? e.target.value : x)))}
                        />
                        <button
                          type="button"
                          disabled={d.options.length <= 2}
                          onClick={() =>
                            setD((x) => ({
                              ...x,
                              options: x.options.filter((_, j) => j !== i),
                              correct: x.correct.filter((c) => c !== i).map((c) => (c > i ? c - 1 : c)),
                            }))
                          }
                          className="grid size-9 shrink-0 place-items-center rounded-lg text-muted hover:text-red disabled:opacity-30"
                          aria-label={`Remove option ${i + 1}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {d.type !== "truefalse" && d.options.length < 8 && (
                <Button size="sm" variant="ghost" className="mt-2" onClick={() => set("options", [...d.options, ""])}>
                  <Plus className="size-4" aria-hidden /> Add option
                </Button>
              )}
            </fieldset>
          )}
          {d.type === "numerical" && (
            <div className="grid grid-cols-2 gap-3">
              <Field label="Answer">
                <input className={inputClass} type="number" step="any" value={d.numeric} onChange={(e) => set("numeric", e.target.value)} />
              </Field>
              <Field label="Tolerance" hint="± accepted">
                <input className={inputClass} type="number" step="any" min={0} value={d.tolerance} onChange={(e) => set("tolerance", e.target.value)} placeholder="0" />
              </Field>
            </div>
          )}
          {d.type === "fill" && (
            <Field label="Accepted answers" hint="One per line">
              <textarea className={textareaClass} value={d.accepted} onChange={(e) => set("accepted", e.target.value)} />
            </Field>
          )}
          {d.type === "short" && (
            <Field label="Model answer">
              <textarea className={textareaClass} value={d.accepted} onChange={(e) => set("accepted", e.target.value)} />
            </Field>
          )}
          <Field label="Explanation" hint="Required">
            <textarea className={textareaClass + " min-h-24"} value={d.explanation} onChange={(e) => set("explanation", e.target.value)} />
          </Field>
        </fieldset>

        <div className="space-y-5">
          <fieldset disabled={!canEdit || !!busy} className="card space-y-3 p-5">
            <h2 className="font-semibold">Placement</h2>
            <PlacementFields value={d.placement} onChange={(p) => set("placement", p)} courses={courses} requireTopic />
            <Field label="Source" hint="Optional">
              <input className={inputClass} value={d.source} onChange={(e) => set("source", e.target.value)} placeholder="Quiz 1, January 2025" />
            </Field>
          </fieldset>
          {error && (
            <p role="alert" className="rounded-xl border border-red/30 bg-red/5 px-3.5 py-2.5 text-sm text-red">
              {error}
            </p>
          )}
          {canEdit && (
            <div className="flex flex-col gap-2">
              <button type="submit" disabled={!!busy} className={buttonClass("primary", "lg", "w-full")}>
                {busy && busy !== "draft" && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
                {moderator ? (row?.status === "published" ? "Save & keep published" : "Publish") : "Submit for review"}
              </button>
              {row?.status !== "published" && (
                <Button variant="secondary" className="w-full" disabled={!!busy} onClick={() => void submit("draft")}>
                  Save draft
                </Button>
              )}
              {row && (
                <Button
                  variant="ghost"
                  className="w-full text-red"
                  disabled={!!busy}
                  onClick={async () => {
                    if (!confirm("Delete this question? This can't be undone.")) return;
                    if (await run((t) => deleteQuestion(t, row.id), "Deleted")) router.push("/admin/questions");
                  }}
                >
                  Delete
                </Button>
              )}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
