"use client";

// Runs a practice set of previous-year questions (lib/pyq-practice.ts).
// Practice: the answer key after every question; in a drill, missed questions
// come back until they are answered correctly. Test: graded at the end, and
// timed when the set has a duration.

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Clock, Eye, RotateCcw, Shuffle, Trophy, X, XCircle } from "lucide-react";
import { hasResponse, isCorrect, type QualifierResponse } from "@/lib/grading";
import type { PyqItem } from "@/lib/pyq-practice";
import { actions } from "@/lib/store";
import { cn } from "@/lib/utils";
import { QuestionPassage, QuestionPrompt, RichText } from "./qualifier-text";
import { useCountdown } from "./quiz";
import { BookmarkButton, ReportButton } from "./resource-actions";
import { Badge, Button, ProgressBar, buttonClass } from "./ui";

const TYPE_LABEL: Record<PyqItem["type"], string> = {
  mcq: "Single choice",
  multi: "Multiple select",
  numerical: "Numerical answer",
  text: "Short answer",
};

const letters = (idx: number[]) =>
  [...idx]
    .sort((a, b) => a - b)
    .map((i) => String.fromCharCode(65 + i))
    .join(", ");

/** Drops floating-point noise: 0.76 - 0.03 prints as 0.73. */
const num = (n: number) => String(Number(n.toFixed(6)));

const marksLabel = (n: number) => `${num(n)} mark${n === 1 ? "" : "s"}`;

/** The official key in words. Options are named by letter; the options themselves are highlighted. */
function answerKey(q: PyqItem) {
  if (q.type === "mcq") return `Option ${letters([q.answer as number])}`;
  if (q.type === "multi") {
    const a = q.answer as number[];
    return `${a.length === 1 ? "Option" : "Options"} ${letters(a)}`;
  }
  if (q.type === "text") return (q.answer as string[]).join(" or ");
  const tol = q.tolerance ?? 0;
  const key = (q.accepts ?? [q.answer as number]).map((v) => (tol ? `any value from ${num(v - tol)} to ${num(v + tol)}` : num(v))).join(" or ");
  return key[0].toUpperCase() + key.slice(1);
}

/** Prompt text without figures, for bookmark titles. */
const plain = (s: string) =>
  s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const clock = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

type Result = { ok: boolean; response?: QualifierResponse };

type Run = { n: number; items: PyqItem[]; test: boolean; drill: boolean };

export function PyqQuiz({
  items,
  test,
  drill,
  durationMin,
  course,
  seed,
  backHref,
}: {
  items: PyqItem[];
  /** Graded at the end instead of after each question. */
  test: boolean;
  /** Missed questions come back until they are answered correctly. */
  drill: boolean;
  /** Tests only: a countdown that submits when it runs out. */
  durationMin?: number;
  /** Course short name, shown on every question. */
  course: string;
  /** The seed the set was drawn with. */
  seed: number;
  backHref: string;
}) {
  const router = useRouter();
  const [run, setRun] = useState<Run>({ n: 0, items, test, drill });

  // Pin the seed in the address bar, so a refresh or a shared link rebuilds this exact set.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("seed") === String(seed)) return;
    url.searchParams.set("seed", String(seed));
    window.history.replaceState(null, "", url);
  }, [seed]);

  const newSet = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("seed", String(Math.floor(Math.random() * 2 ** 31)));
    router.push(url.pathname + url.search);
  };

  return (
    <Session
      key={run.n}
      items={run.items}
      test={run.test}
      drill={run.drill}
      durationMin={run.test ? durationMin : undefined}
      course={course}
      backHref={backHref}
      onRetry={() => setRun((r) => ({ ...r, n: r.n + 1 }))}
      // Missed questions are retried with the answer key after each, whatever the first run was.
      onRetryMissed={(missed) => setRun((r) => ({ n: r.n + 1, items: missed, test: false, drill: r.drill }))}
      onNewSet={newSet}
    />
  );
}

function Session({
  items,
  test,
  drill,
  durationMin,
  course,
  backHref,
  onRetry,
  onRetryMissed,
  onNewSet,
}: {
  items: PyqItem[];
  test: boolean;
  drill: boolean;
  durationMin?: number;
  course: string;
  backHref: string;
  onRetry: () => void;
  onRetryMissed: (missed: PyqItem[]) => void;
  onNewSet: () => void;
}) {
  /** Run position → index into `items`. A drill appends each missed question to the end. */
  const [queue, setQueue] = useState(() => items.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [responses, setResponses] = useState<Record<number, QualifierResponse>>({});
  /** Practice: the result at each checked position. */
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  /** First-try result per question, which is what the score counts. */
  const [results, setResults] = useState<Record<string, Result>>({});
  const [finished, setFinished] = useState<false | "submitted" | "time">(false);
  const card = useRef<HTMLElement>(null);

  const record = (q: PyqItem, ok: boolean) =>
    actions.recordAttempt({ questionId: q.id, subjectSlug: q.subjectSlug, topicSlug: "", correct: ok });

  const finish = (how: "submitted" | "time") => {
    if (test) {
      const graded: Record<string, Result> = {};
      items.forEach((q, i) => {
        graded[q.id] = { ok: isCorrect(q, responses[i]), response: responses[i] };
        record(q, graded[q.id].ok);
      });
      setResults(graded);
    }
    setFinished(how);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const left = useCountdown(test && durationMin ? durationMin * 60 : undefined, !finished, () => finish("time"));

  const answered = queue.filter((_, i) => hasResponse(responses[i])).length;
  const dirty = test && !finished && answered > 0;
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  if (finished)
    return (
      <Results
        items={items}
        results={results}
        drill={drill}
        timedOut={finished === "time"}
        backHref={backHref}
        onRetry={onRetry}
        onRetryMissed={onRetryMissed}
        onNewSet={onNewSet}
      />
    );

  const q = items[queue[pos]];
  const response = responses[pos];
  const isChecked = !test && pos in checked;
  const last = pos === queue.length - 1;

  const go = (i: number) => {
    setPos(i);
    if ((card.current?.getBoundingClientRect().top ?? 0) < 0) card.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const check = () => {
    const ok = isCorrect(q, response);
    setChecked((c) => ({ ...c, [pos]: ok }));
    if (!(q.id in results)) setResults((r) => ({ ...r, [q.id]: { ok, response } }));
    record(q, ok);
    if (drill && !ok) setQueue((list) => [...list, queue[pos]]);
  };

  const setResponse = (r: QualifierResponse | undefined) =>
    setResponses((s) => {
      const next = { ...s };
      if (r === undefined) delete next[pos];
      else next[pos] = r;
      return next;
    });

  const title = plain(q.prompt) || `${course} question`;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center gap-4">
        <p className="text-sm font-medium whitespace-nowrap tabular-nums">
          Question {pos + 1} <span className="text-muted">of {queue.length}</span>
        </p>
        <ProgressBar
          value={(test ? answered / queue.length : (pos + (isChecked ? 1 : 0)) / queue.length) * 100}
          tone="purple"
          className="flex-1"
          label="Set progress"
        />
        {test && durationMin ? (
          <span role="timer" aria-label="Time left" className={cn("inline-flex items-center gap-1 text-sm font-semibold tabular-nums", left < 60 && "text-red")}>
            <Clock className="size-4" aria-hidden />
            {clock(left)}
          </span>
        ) : null}
      </div>

      <article ref={card} className="card scroll-mt-24 p-5 md:p-7" aria-labelledby={`q-${q.id}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge tone="purple">{course}</Badge>
          <Badge>{TYPE_LABEL[q.type]}</Badge>
          <Badge tone="amber">{marksLabel(q.marks)}</Badge>
          <Badge tone="blue">PYQ · {q.source}</Badge>
          {pos >= items.length && <Badge tone="red">Another go</Badge>}
          <div className="ml-auto flex items-center">
            <BookmarkButton
              item={{
                kind: "question",
                id: q.id,
                title: title.length > 80 ? title.slice(0, 77) + "…" : title,
                href: q.paperHref,
                subtitle: `${course} · ${q.source}`,
              }}
            />
            <ReportButton kind="question" resourceId={q.id} title={title.slice(0, 60)} compact />
          </div>
        </div>

        <QuestionContext q={q} />
        <div id={`q-${q.id}`}>
          <QuestionPrompt q={q} className="text-lg font-semibold leading-snug md:text-xl" />
        </div>

        <AnswerInput key={pos} q={q} value={response} onChange={setResponse} locked={isChecked} />

        {isChecked && (
          <div className="animate-fade-up mt-5 rounded-xl border border-border bg-surface-2/60 p-4 text-sm">
            <Verdict ok={checked[pos]} answered={hasResponse(response)} />
            <AnswerLines q={q} response={response} />
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button variant="ghost" onClick={() => go(pos - 1)} disabled={pos === 0}>
            <ArrowLeft className="size-4" aria-hidden /> Previous
          </Button>
          {test && hasResponse(response) && (
            <Button variant="ghost" onClick={() => setResponse(undefined)}>
              Clear response
            </Button>
          )}
          <div className="ml-auto flex flex-wrap justify-end gap-2">
            {!test && !isChecked && (
              <>
                {!hasResponse(response) && (
                  <Button variant="ghost" onClick={check}>
                    <Eye className="size-4" aria-hidden /> Show answer
                  </Button>
                )}
                <Button variant="dark" onClick={check} disabled={!hasResponse(response)}>
                  Submit answer
                </Button>
              </>
            )}
            {(test || isChecked) &&
              (!last ? (
                <Button variant={isChecked ? "primary" : "secondary"} onClick={() => go(pos + 1)}>
                  Next <ArrowRight className="size-4" aria-hidden />
                </Button>
              ) : (
                <Button variant="primary" onClick={() => finish("submitted")}>
                  {test ? `Submit test (${answered}/${queue.length})` : "See results"}
                </Button>
              ))}
          </div>
        </div>
      </article>

      {test && (
        <nav aria-label="Question navigator" className="mt-4 flex flex-wrap gap-1.5">
          {queue.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Question ${i + 1}${hasResponse(responses[i]) ? ", answered" : ""}`}
              aria-current={i === pos ? "step" : undefined}
              className={cn(
                "size-9 rounded-lg text-sm font-semibold tabular-nums",
                i === pos ? "bg-ink text-bg" : hasResponse(responses[i]) ? "bg-purple/15 text-purple" : "bg-surface-2 text-muted",
              )}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

/** Section data, shared passage, context and code shown above the prompt. `compact` folds the passage away (review list). */
function QuestionContext({ q, compact = false }: { q: PyqItem; compact?: boolean }) {
  const passage = q.passage && (
    <div className="max-h-[45vh] overflow-y-auto rounded-xl border border-border bg-surface-2/40 p-4 text-[15px] leading-relaxed">
      <QuestionPassage text={q.passage} />
    </div>
  );
  return (
    <>
      {q.reference && (
        <details className="mb-4 rounded-xl border border-border text-[15px] leading-relaxed">
          <summary className="cursor-pointer px-4 py-2.5 text-sm font-semibold">Useful data</summary>
          <QuestionPassage text={q.reference} className="max-h-[45vh] overflow-y-auto border-t border-border px-4 py-3" />
        </details>
      )}
      {passage &&
        (compact ? (
          <details className="mb-3">
            <summary className="cursor-pointer text-sm font-semibold text-muted hover:text-fg">Show the passage</summary>
            <div className="mt-2">{passage}</div>
          </details>
        ) : (
          <div className="mb-4">{passage}</div>
        ))}
      {q.context &&
        (q.context.includes("\n") ? (
          <pre className="mb-4 overflow-x-auto rounded-xl border border-border p-4 font-mono text-[13px] leading-relaxed">{q.context}</pre>
        ) : (
          <p className="mb-4 rounded-xl border-l-4 border-blue bg-blue/5 p-3 text-sm">{q.context}</p>
        ))}
      {q.code && <pre className="mb-4 overflow-x-auto rounded-xl bg-ink p-4 font-mono text-[13px] leading-relaxed text-bg">{q.code}</pre>}
    </>
  );
}

const NUMBER = /^-?\d*\.?\d*$/;

function AnswerInput({
  q,
  value,
  onChange,
  locked,
}: {
  q: PyqItem;
  value: QualifierResponse | undefined;
  onChange: (r: QualifierResponse | undefined) => void;
  locked: boolean;
}) {
  if (q.type === "numerical" || q.type === "text") {
    const numeric = q.type === "numerical";
    return (
      <div className="mt-5">
        <label htmlFor={`a-${q.id}`} className="text-sm font-medium">
          {numeric ? "Your answer (a number)" : `Your answer${q.caseSensitive ? " (case-sensitive)" : ""}`}
        </label>
        <input
          id={`a-${q.id}`}
          inputMode={numeric ? "decimal" : "text"}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => {
            const v = numeric ? e.target.value.trim() : e.target.value;
            if (numeric && !NUMBER.test(v)) return;
            onChange(v === "" ? undefined : v);
          }}
          disabled={locked}
          className="mt-1.5 h-12 w-full max-w-xs rounded-xl border border-border bg-bg px-4 font-mono text-[15px] tabular-nums outline-none focus:border-fg/40 disabled:opacity-70"
        />
      </div>
    );
  }

  const multi = q.type === "multi";
  const selected = Array.isArray(value) ? value : typeof value === "number" ? [value] : [];
  const correct = multi ? (q.answer as number[]) : [q.answer as number];
  return (
    <fieldset className="mt-5">
      <legend className="sr-only">{multi ? "Select all that apply" : "Select one option"}</legend>
      <div className="grid gap-2.5">
        {q.options!.map((opt, i) => {
          const on = selected.includes(i);
          const state = !locked ? (on ? "selected" : "idle") : correct.includes(i) ? "right" : on ? "wrong" : "idle";
          return (
            <label
              key={i}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3.5 text-[15px] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-purple/40",
                locked ? "cursor-default" : "cursor-pointer",
                state === "idle" && "border-border",
                state === "idle" && !locked && "hover:border-fg/30",
                state === "selected" && "border-fg bg-surface-2",
                state === "right" && "border-green bg-green/10",
                state === "wrong" && "border-red bg-red/10",
              )}
            >
              <input
                type={multi ? "checkbox" : "radio"}
                name={q.id}
                className="sr-only"
                checked={on}
                disabled={locked}
                onChange={() => {
                  if (!multi) return onChange(i);
                  const next = on ? selected.filter((x) => x !== i) : [...selected, i];
                  onChange(next.length ? next : undefined);
                }}
              />
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center text-xs font-bold",
                  multi ? "rounded-md" : "rounded-full",
                  state === "selected"
                    ? "bg-ink text-bg"
                    : state === "right"
                      ? "bg-green text-white"
                      : state === "wrong"
                        ? "bg-red text-white"
                        : "bg-surface-2 text-muted",
                )}
                aria-hidden
              >
                {state === "right" ? <Check className="size-4" /> : state === "wrong" ? <X className="size-4" /> : String.fromCharCode(65 + i)}
              </span>
              <span className="min-w-0 flex-1 self-center [overflow-wrap:anywhere]">
                <RichText text={opt} />
              </span>
            </label>
          );
        })}
      </div>
      {multi && !locked && <p className="mt-2 text-xs text-muted">Select all that apply.</p>}
    </fieldset>
  );
}

function Verdict({ ok, answered }: { ok: boolean; answered: boolean }) {
  return (
    <p className={cn("mb-2 flex items-center gap-2 text-base font-semibold", ok ? "text-green" : answered ? "text-red" : "text-muted")}>
      {ok ? (
        <CheckCircle2 className="size-5" aria-hidden />
      ) : answered ? (
        <XCircle className="size-5" aria-hidden />
      ) : (
        <Eye className="size-5" aria-hidden />
      )}
      {ok ? "Correct" : answered ? "Not quite" : "Answer shown"}
    </p>
  );
}

function AnswerLines({ q, response }: { q: PyqItem; response: QualifierResponse | undefined }) {
  const typed = q.type === "numerical" || q.type === "text";
  return (
    <div className="space-y-1">
      {typed && (
        <p>
          <span className="font-semibold">Your answer: </span>
          {hasResponse(response) ? String(response) : "Not answered"}
        </p>
      )}
      <p>
        <span className="font-semibold">Answer key: </span>
        {answerKey(q)}
      </p>
      {/* Notes on numerical questions only restate the accepted range, which the key above already shows. */}
      {q.type !== "numerical" && q.explanation && <p className="text-fg/85">{q.explanation}</p>}
      <p className="pt-1 text-xs text-muted">
        Asked in the{" "}
        <Link href={q.paperHref} className="font-medium text-fg underline-offset-2 hover:underline">
          {q.source}
        </Link>{" "}
        paper.
      </p>
    </div>
  );
}

function Results({
  items,
  results,
  drill,
  timedOut,
  backHref,
  onRetry,
  onRetryMissed,
  onNewSet,
}: {
  items: PyqItem[];
  results: Record<string, Result>;
  drill: boolean;
  timedOut: boolean;
  backHref: string;
  onRetry: () => void;
  onRetryMissed: (missed: PyqItem[]) => void;
  onNewSet: () => void;
}) {
  const missed = items.filter((q) => !results[q.id]?.ok);
  const correct = items.length - missed.length;
  const score = items.reduce((n, q) => n + (results[q.id]?.ok ? q.marks : 0), 0);
  const total = items.reduce((n, q) => n + q.marks, 0);
  const accuracy = items.length ? Math.round((correct / items.length) * 100) : 0;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="card p-6 text-center md:p-8">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-brand-ink">
          <Trophy className="size-7" aria-hidden />
        </span>
        {timedOut && <p className="mt-4 text-sm font-semibold text-red">Time&apos;s up. Unanswered questions count as wrong.</p>}
        <p className="mt-4 text-4xl font-extrabold tabular-nums">
          {num(score)}
          <span className="text-2xl text-muted"> / {num(total)} marks</span>
        </p>
        <p className="text-muted tabular-nums">
          {correct} of {items.length} correct{drill ? " on the first try" : ""} · {accuracy}%
        </p>
        {drill && missed.length > 0 && <p className="mt-1 text-sm text-muted">Every miss came back until you got it right.</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {missed.length > 0 && (
            <Button variant="dark" onClick={() => onRetryMissed(missed)}>
              <RotateCcw className="size-4" aria-hidden /> Retry the {missed.length} missed
            </Button>
          )}
          <Button variant={missed.length ? "secondary" : "dark"} onClick={onRetry}>
            <RotateCcw className="size-4" aria-hidden /> Try this set again
          </Button>
          <Button variant="secondary" onClick={onNewSet}>
            <Shuffle className="size-4" aria-hidden /> New set
          </Button>
          <Link href={backHref} className={buttonClass("ghost")}>
            More practice
          </Link>
        </div>
      </div>

      <h2 className="mt-8 mb-3 font-semibold">Review answers</h2>
      <ol className="space-y-3">
        {items.map((q, i) => {
          const r = results[q.id];
          return (
            <li key={q.id} className="card p-5">
              <div className="flex items-start gap-3">
                {r?.ok ? (
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green" aria-label="Correct" />
                ) : (
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red" aria-label="Incorrect" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-xs text-muted">
                    <span className="font-semibold text-fg">Question {i + 1}</span> · {TYPE_LABEL[q.type]} · {marksLabel(q.marks)}
                  </p>
                  <QuestionContext q={q} compact />
                  <QuestionPrompt q={q} className="font-medium leading-relaxed" />
                  {(q.type === "mcq" || q.type === "multi") && <AnswerInput q={q} value={r?.response} onChange={() => {}} locked />}
                  <div className="mt-4 text-sm">
                    <AnswerLines q={q} response={r?.response} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
