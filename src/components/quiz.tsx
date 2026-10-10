"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Clock, Lightbulb, RotateCcw, Trophy, X, XCircle } from "lucide-react";
import type { Question } from "@/lib/types";
import { subjectName, topicTitle } from "@/lib/content";
import { actions } from "@/lib/store";
import { Badge, Button, ProgressBar, buttonClass } from "./ui";
import { BookmarkButton, ReportButton } from "./resource-actions";
import { cn } from "@/lib/utils";

type Response = number | number[] | string | undefined;

const typeLabel: Record<Question["type"], string> = {
  mcq: "Single choice",
  multi: "Multiple select",
  truefalse: "True / False",
  fill: "Fill in the blank",
  numerical: "Numerical",
  short: "Short answer",
};

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

/** null = not auto-gradable (short answers are self-assessed). */
export function grade(q: Question, r: Response): boolean | null {
  if (r === undefined || r === "") return false;
  switch (q.type) {
    case "mcq":
    case "truefalse":
      return r === q.answer;
    case "multi": {
      const want = [...(q.answer as number[])].sort().join(",");
      return [...(r as number[])].sort().join(",") === want;
    }
    case "numerical": {
      const v = Number(String(r).replace(",", "."));
      const target = Number((q.answer as string[])[0]);
      return Number.isFinite(v) && Math.abs(v - target) <= (q.tolerance ?? 0);
    }
    case "fill":
      return (q.answer as string[]).some((a) => norm(a) === norm(String(r)));
    case "short":
      return null;
  }
}

export function correctAnswerText(q: Question) {
  if (q.type === "mcq" || q.type === "truefalse") {
    const i = q.answer as number;
    return `${String.fromCharCode(65 + i)}. ${q.options![i]}`;
  }
  if (q.type === "multi") return (q.answer as number[]).map((i) => `${String.fromCharCode(65 + i)}. ${q.options![i]}`).join("; ");
  return (q.answer as string[])[0];
}

const hasAnswer = (r: Response) => (Array.isArray(r) ? r.length > 0 : r !== undefined && r !== "");

function QuestionBody({
  q,
  response,
  onChange,
  locked,
}: {
  q: Question;
  response: Response;
  onChange: (r: Response) => void;
  locked: boolean;
}) {
  if (q.type === "mcq" || q.type === "truefalse" || q.type === "multi") {
    const multi = q.type === "multi";
    const selected = multi ? ((response as number[]) ?? []) : [response as number];
    const correct = multi ? (q.answer as number[]) : [q.answer as number];
    return (
      <fieldset className="mt-5">
        <legend className="sr-only">Options</legend>
        <div className={cn("grid gap-2.5", q.type === "truefalse" && "sm:grid-cols-2")}>
          {q.options!.map((opt, i) => {
            const isSel = selected.includes(i);
            const isRight = correct.includes(i);
            const state = !locked ? (isSel ? "selected" : "idle") : isRight ? "right" : isSel ? "wrong" : "idle";
            return (
              <label
                key={i}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-[15px] transition-colors",
                  state === "idle" && "border-border hover:border-fg/30",
                  state === "selected" && "border-fg bg-surface-2",
                  state === "right" && "border-green bg-green/10",
                  state === "wrong" && "border-red bg-red/10",
                  locked && "cursor-default",
                )}
              >
                <input
                  type={multi ? "checkbox" : "radio"}
                  name={q.id}
                  className="sr-only"
                  checked={isSel}
                  disabled={locked}
                  onChange={() => {
                    if (!multi) return onChange(i);
                    const cur = (response as number[]) ?? [];
                    onChange(cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]);
                  }}
                />
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center text-xs font-bold",
                    multi ? "rounded-md" : "rounded-full",
                    state === "selected" ? "bg-ink text-bg" : state === "right" ? "bg-green text-white" : state === "wrong" ? "bg-red text-white" : "bg-surface-2 text-muted",
                  )}
                  aria-hidden
                >
                  {state === "right" ? <Check className="size-4" /> : state === "wrong" ? <X className="size-4" /> : String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
              </label>
            );
          })}
        </div>
        {multi && !locked && <p className="mt-2 text-xs text-muted">Select all that apply.</p>}
      </fieldset>
    );
  }

  if (q.type === "short")
    return (
      <div className="mt-5">
        <label htmlFor={`a-${q.id}`} className="text-sm font-medium">
          Your answer
        </label>
        <textarea
          id={`a-${q.id}`}
          rows={5}
          value={(response as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={locked}
          className="mt-1.5 w-full rounded-xl border border-border bg-bg p-3 text-[15px] outline-none focus:border-fg/40 disabled:opacity-70"
          placeholder="Write your answer, then compare it with the model answer."
        />
      </div>
    );

  return (
    <div className="mt-5">
      <label htmlFor={`a-${q.id}`} className="text-sm font-medium">
        {q.type === "numerical" ? "Your answer (number)" : "Your answer"}
      </label>
      <input
        id={`a-${q.id}`}
        inputMode={q.type === "numerical" ? "decimal" : "text"}
        autoComplete="off"
        value={(response as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        disabled={locked}
        className="mt-1.5 h-12 w-full max-w-xs rounded-xl border border-border bg-bg px-4 text-[15px] tabular-nums outline-none focus:border-fg/40 disabled:opacity-70"
      />
    </div>
  );
}

function Explanation({ q, result }: { q: Question; result: boolean | null }) {
  return (
    <div className="animate-fade-up mt-5 rounded-xl border border-border bg-surface-2/60 p-4">
      {result !== null && (
        <p className={cn("mb-2 flex items-center gap-2 font-semibold", result ? "text-green" : "text-red")}>
          {result ? <CheckCircle2 className="size-5" aria-hidden /> : <XCircle className="size-5" aria-hidden />}
          {result ? "Correct" : "Not quite"}
        </p>
      )}
      <p className="text-sm">
        <span className="font-semibold">{q.type === "short" ? "Model answer: " : "Correct answer: "}</span>
        {correctAnswerText(q)}
      </p>
      <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold">
        <Lightbulb className="size-4 text-amber" aria-hidden /> Why?
      </p>
      <p className="mt-1 text-sm leading-relaxed text-fg/85">{q.explanation}</p>
    </div>
  );
}

export function useCountdown(seconds: number | undefined, running: boolean, onEnd: () => void) {
  const [left, setLeft] = useState(seconds ?? 0);
  // Keep the latest callback so time-up submits current answers, not the first render's.
  const end = useRef(onEnd);
  useEffect(() => {
    end.current = onEnd;
  });
  useEffect(() => {
    if (!seconds || !running) return;
    const id = setInterval(() => {
      setLeft((l) => {
        if (l > 1) return l - 1;
        clearInterval(id);
        setTimeout(() => end.current(), 0);
        return 0;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [seconds, running]);
  return left;
}

export function Quiz({
  questions,
  mode = "practice",
  title,
  durationMin,
}: {
  questions: Question[];
  /** practice: instant feedback per question. exam: graded at the end, optionally timed. */
  mode?: "practice" | "exam";
  title?: string;
  durationMin?: number;
}) {
  const [index, setIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, Response>>({});
  const [checked, setChecked] = useState<Record<string, boolean | null>>({});
  const [selfGrade, setSelfGrade] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [run, setRun] = useState(0);

  const finish = () => {
    const results: Record<string, boolean | null> = { ...checked };
    for (const q of questions) {
      if (!(q.id in results)) {
        results[q.id] = grade(q, responses[q.id]);
        actions.recordAttempt({ questionId: q.id, subjectSlug: q.subjectSlug, topicSlug: q.topicSlug, correct: results[q.id] });
      }
    }
    setChecked(results);
    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const left = useCountdown(mode === "exam" && durationMin ? durationMin * 60 : undefined, !finished, finish);

  const q = questions[index];
  const answered = questions.filter((x) => hasAnswer(responses[x.id])).length;

  if (questions.length === 0) return null;

  if (finished)
    return (
      <Results
        key={run}
        questions={questions}
        checked={checked}
        selfGrade={selfGrade}
        onSelfGrade={(id, v) => setSelfGrade((s) => ({ ...s, [id]: v }))}
        onRetry={() => {
          setResponses({});
          setChecked({});
          setSelfGrade({});
          setIndex(0);
          setFinished(false);
          setRun((r) => r + 1);
        }}
      />
    );

  const isChecked = mode === "practice" && q.id in checked;

  const check = () => {
    const result = grade(q, responses[q.id]);
    setChecked((c) => ({ ...c, [q.id]: result }));
    actions.recordAttempt({ questionId: q.id, subjectSlug: q.subjectSlug, topicSlug: q.topicSlug, correct: result });
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center gap-4">
        <p className="text-sm font-medium tabular-nums">
          Question {index + 1} <span className="text-muted">of {questions.length}</span>
        </p>
        <ProgressBar value={((index + (isChecked ? 1 : 0)) / questions.length) * 100} tone="purple" className="flex-1" label="Quiz progress" />
        {mode === "exam" && durationMin ? (
          <span className={cn("inline-flex items-center gap-1 text-sm font-semibold tabular-nums", left < 60 && "text-red")}>
            <Clock className="size-4" aria-hidden />
            {Math.floor(left / 60)}:{String(left % 60).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <article className="card p-5 md:p-7" aria-labelledby={`q-${q.id}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {title && <Badge tone="purple">{title}</Badge>}
          <Badge>{typeLabel[q.type]}</Badge>
          <Badge tone={q.difficulty === "Easy" ? "green" : q.difficulty === "Medium" ? "amber" : "red"}>{q.difficulty}</Badge>
          {q.source && <Badge tone="blue">PYQ · {q.source}</Badge>}
          <div className="ml-auto flex items-center">
            <BookmarkButton
              item={{
                kind: "question",
                id: q.id,
                title: q.prompt.length > 80 ? q.prompt.slice(0, 77) + "…" : q.prompt,
                href: `/practice/session?subject=${q.subjectSlug}&topic=${q.topicSlug}`,
                subtitle: subjectName(q.subjectSlug),
              }}
            />
            <ReportButton kind="question" resourceId={q.id} title={q.prompt.slice(0, 60)} compact />
          </div>
        </div>
        {q.context && <p className="mb-3 rounded-xl border-l-4 border-blue bg-blue/5 p-3 text-sm">{q.context}</p>}
        <h2 id={`q-${q.id}`} className="text-lg font-semibold leading-snug md:text-xl">
          {q.prompt}
        </h2>
        <p className="mt-1 text-xs text-muted">
          {subjectName(q.subjectSlug)} · {topicTitle(q.subjectSlug, q.topicSlug)}
        </p>

        <QuestionBody
          q={q}
          response={responses[q.id]}
          onChange={(r) => setResponses((s) => ({ ...s, [q.id]: r }))}
          locked={isChecked}
        />

        {isChecked && <Explanation q={q} result={checked[q.id]} />}

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button variant="ghost" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
            <ArrowLeft className="size-4" aria-hidden /> Previous
          </Button>
          <div className="ml-auto flex gap-2">
            {mode === "practice" && !isChecked && (
              <Button variant="dark" onClick={check} disabled={!hasAnswer(responses[q.id])}>
                {q.type === "short" ? "Show model answer" : "Submit answer"}
              </Button>
            )}
            {(mode === "exam" || isChecked) &&
              (index < questions.length - 1 ? (
                <Button variant={isChecked ? "primary" : "secondary"} onClick={() => setIndex((i) => i + 1)}>
                  Next <ArrowRight className="size-4" aria-hidden />
                </Button>
              ) : (
                <Button variant="primary" onClick={finish}>
                  {mode === "exam" ? `Submit test (${answered}/${questions.length})` : "See results"}
                </Button>
              ))}
          </div>
        </div>
      </article>

      {mode === "exam" && (
        <nav aria-label="Question navigator" className="mt-4 flex flex-wrap gap-1.5">
          {questions.map((x, i) => (
            <button
              key={x.id}
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}${hasAnswer(responses[x.id]) ? ", answered" : ""}`}
              aria-current={i === index ? "step" : undefined}
              className={cn(
                "size-9 rounded-lg text-sm font-semibold tabular-nums",
                i === index ? "bg-ink text-bg" : hasAnswer(responses[x.id]) ? "bg-purple/15 text-purple" : "bg-surface-2 text-muted",
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

function Results({
  questions,
  checked,
  selfGrade,
  onSelfGrade,
  onRetry,
}: {
  questions: Question[];
  checked: Record<string, boolean | null>;
  selfGrade: Record<string, boolean>;
  onSelfGrade: (id: string, v: boolean) => void;
  onRetry: () => void;
}) {
  const result = (q: Question) => checked[q.id] ?? selfGrade[q.id] ?? null;
  const graded = questions.filter((q) => result(q) !== null);
  const correct = graded.filter((q) => result(q)).length;
  const accuracy = graded.length ? Math.round((correct / graded.length) * 100) : 0;

  const weak = useMemo(() => {
    const byTopic = new Map<string, { subject: string; topic: string; right: number; total: number }>();
    for (const q of questions) {
      const r = checked[q.id] ?? selfGrade[q.id];
      if (r === null || r === undefined) continue;
      const k = `${q.subjectSlug}/${q.topicSlug}`;
      const e = byTopic.get(k) ?? { subject: q.subjectSlug, topic: q.topicSlug, right: 0, total: 0 };
      e.total++;
      if (r) e.right++;
      byTopic.set(k, e);
    }
    return [...byTopic.values()].filter((e) => e.right / e.total < 0.6);
  }, [questions, checked, selfGrade]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="card p-6 text-center md:p-8">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand text-brand-ink">
          <Trophy className="size-7" aria-hidden />
        </span>
        <p className="mt-4 text-4xl font-extrabold tabular-nums">{accuracy}%</p>
        <p className="text-muted">
          {correct} of {graded.length} correct
          {graded.length < questions.length && ` · ${questions.length - graded.length} to self-assess`}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button variant="dark" onClick={onRetry}>
            <RotateCcw className="size-4" aria-hidden /> Try again
          </Button>
          <Link href="/practice" className={buttonClass("secondary")}>
            More practice
          </Link>
        </div>
      </div>

      {weak.length > 0 && (
        <section className="card mt-4 p-5">
          <h2 className="font-semibold">Revise these topics</h2>
          <p className="text-sm text-muted">You scored under 60% here. Notes, videos and more questions are one click away.</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {weak.map((w) => (
              <li key={w.subject + w.topic}>
                <Link
                  href={`/subjects/${w.subject}/${w.topic}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:border-fg/30"
                >
                  {topicTitle(w.subject, w.topic)}
                  <span className="text-xs text-red tabular-nums">
                    {w.right}/{w.total}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <h2 className="mt-8 mb-3 font-semibold">Review answers</h2>
      <ol className="space-y-3">
        {questions.map((q, i) => {
          const r = result(q);
          return (
            <li key={q.id} className="card p-5">
              <div className="flex items-start gap-3">
                {r === true ? (
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green" aria-label="Correct" />
                ) : r === false ? (
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red" aria-label="Incorrect" />
                ) : (
                  <span className="mt-0.5 size-5 shrink-0 rounded-full border-2 border-dashed border-border" aria-label="Not graded" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-medium">
                    {i + 1}. {q.prompt}
                  </p>
                  <Explanation q={q} result={null} />
                  {q.type === "short" && (
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="text-muted">Did your answer cover this?</span>
                      <Button size="sm" variant={selfGrade[q.id] === true ? "dark" : "secondary"} onClick={() => onSelfGrade(q.id, true)}>
                        Yes
                      </Button>
                      <Button size="sm" variant={selfGrade[q.id] === false ? "dark" : "secondary"} onClick={() => onSelfGrade(q.id, false)}>
                        Not yet
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
