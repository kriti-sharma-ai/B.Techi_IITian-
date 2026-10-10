"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, MinusCircle, RotateCcw, Trophy, XCircle } from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { QUALIFIER_CUTOFF, correctAnswerLabel, formatClock, hasResponse, isCorrect, isSingleSubject, paperHref, responseLabel, scoreMock } from "@/lib/qualifier";
import { pyqCourseHref } from "@/lib/pyq-urls";
import type { QualifierMock, QualifierQuestion } from "@/lib/types";
import { Badge, Breadcrumbs, EmptyState, buttonClass } from "./ui";
import { cn } from "@/lib/utils";
import { QuestionPassage, QuestionPrompt, RichText } from "./qualifier-text";

const TYPE_SHORT: Record<QualifierQuestion["type"], string> = { mcq: "MCQ", multi: "MSQ", numerical: "NAT", text: "SA" };

type NextPaper = { title: string; href: string };

/** `next` is the paper to suggest afterwards and `revise` an End Term paper's course page; both are worked out on the server. */
export function QualifierResult({ mock, attemptId, next, revise }: { mock: QualifierMock; attemptId: string; next?: NextPaper; revise?: string }) {
  const hydrated = useHydrated();
  const attempt = useStore((s) => s.qualifierAttempts.find((a) => a.id === attemptId && a.mockSlug === mock.slug));
  const [tab, setTab] = useState(0);
  // Single-course papers are PYQs, filed under their course; full mocks belong to the qualifier pack.
  const home = isSingleSubject(mock)
    ? { label: `${mock.sections[0].short} PYQs`, href: pyqCourseHref(mock.sections[0].subjectSlug) }
    : { label: "Qualifier Pack", href: "/qualifier" };

  if (!hydrated) return <div className="container-page py-10"><div className="skeleton h-96" /></div>;
  if (!attempt)
    return (
      <div className="container-page py-10">
        <EmptyState
          title="We couldn't find this attempt."
          description="Results are saved in this browser. They may have been cleared, or this attempt was taken on another device."
          action={<Link href={home.href} className={buttonClass("secondary")}>Back to {home.label}</Link>}
        />
      </div>
    );

  const result = scoreMock(mock, attempt.responses);
  const weakest = [...result.sections].sort((a, b) => a.percent - b.percent)[0];
  // End Term papers cover courses without a BTechi course page, so the server says whether one exists.
  const reviseLink = mock.endTerm ? revise : `/subjects/${weakest.subjectSlug}`;
  const single = isSingleSubject(mock);
  const section = mock.sections[tab];

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="container-page py-8 md:py-10">
          <Breadcrumbs items={[home, { label: `${mock.title} result` }]} />
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">{mock.title} · Result</p>
              <div className="flex items-center gap-3">
                <span className={cn("grid size-12 place-items-center rounded-2xl", result.qualified ? "bg-green/10 text-green" : "bg-amber/10 text-amber")}>
                  {result.qualified ? <Trophy className="size-6" aria-hidden /> : <AlertTriangle className="size-6" aria-hidden />}
                </span>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {single ? (result.qualified ? "Cleared" : "Below cutoff") : result.qualified ? "Qualified" : "Not qualified yet"}
                </h1>
              </div>
              <p className="mt-2 max-w-xl text-muted">
                {single
                  ? result.qualified
                    ? mock.endTerm
                      ? `You scored ${result.average}%, above ${QUALIFIER_CUTOFF.perSubject}%. Try another sitting's paper next.`
                      : `You scored ${result.average}%, clearing the ${QUALIFIER_CUTOFF.perSubject}% course cutoff. Try another year's paper next.`
                    : mock.endTerm
                      ? `You scored ${result.average}%, below ${QUALIFIER_CUTOFF.perSubject}%. Review the answers below, then retake.`
                      : `You scored ${result.average}%. The course cutoff is ${QUALIFIER_CUTOFF.perSubject}%. Review the answers below, then retake.`
                  : result.qualified
                  ? "You cleared the cutoff in every course and on average. Keep this up on exam day."
                  : `Weakest: ${weakest.title} at ${weakest.percent}%. Fix that first, then retake.`}
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-6 text-right">
              <div>
                <dt className="text-xs text-muted">{single ? "Percent" : "Average"}</dt>
                <dd className="text-2xl font-bold tabular-nums">{result.average}%</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Score</dt>
                <dd className="text-2xl font-bold tabular-nums">
                  {result.score}<span className="text-base text-muted">/{result.total}</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Time</dt>
                <dd className="font-mono text-2xl font-bold tabular-nums">{formatClock(attempt.timeTakenSec).slice(0, 5)}</dd>
              </div>
            </dl>
          </div>
          {(attempt.autoSubmitted || attempt.tabSwitches > 0) && (
            <div className="mt-5 flex flex-wrap gap-2">
              {attempt.autoSubmitted && <Badge tone="amber"><Clock className="size-3.5" aria-hidden /> Auto-submitted when time ran out</Badge>}
              {attempt.tabSwitches > 0 && <Badge tone="red"><AlertTriangle className="size-3.5" aria-hidden /> Left the exam window {attempt.tabSwitches}×</Badge>}
            </div>
          )}
        </div>
      </header>

      <div className="container-page space-y-10 py-8">
        {/* Section scorecards */}
        <section>
          {!single && <h2 className="mb-4 text-xl font-bold tracking-tight">Course-wise score</h2>}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {result.sections.map((s) => (
              <div key={s.subjectSlug} className="card p-5">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold">{s.short}</p>
                  <Badge tone={s.passed ? "green" : "red"}>{s.passed ? "Cleared" : "Below 40%"}</Badge>
                </div>
                <p className="mt-3 text-3xl font-bold tabular-nums">{s.percent}%</p>
                <p className="text-sm text-muted tabular-nums">
                  {s.score}/{s.total} marks · {s.correct}/{s.questions} correct
                </p>
                <div className="relative mt-4 h-2 rounded-full bg-surface-2">
                  <div className={cn("h-full rounded-full", s.passed ? "bg-green" : "bg-red")} style={{ width: `${s.percent}%` }} />
                  <span className="absolute -top-1 h-4 w-0.5 bg-fg" style={{ left: `${QUALIFIER_CUTOFF.perSubject}%` }} title="40% cutoff" />
                </div>
                <p className="mt-1.5 text-[11px] text-muted">Line marks the {QUALIFIER_CUTOFF.perSubject}% cutoff</p>
              </div>
            ))}
          </div>

          <ul className="card mt-4 divide-y divide-border">
            {[
              { ok: result.sections.every((s) => s.passed), label: `At least ${QUALIFIER_CUTOFF.perSubject}% in every course` },
              { ok: result.average >= QUALIFIER_CUTOFF.average, label: `At least ${QUALIFIER_CUTOFF.average}% average across the four (you: ${result.average}%)` },
            ].slice(0, single ? 1 : 2).map((r) => (
              <li key={r.label} className="flex items-center gap-3 px-5 py-3.5 text-sm">
                {r.ok ? <CheckCircle2 className="size-5 shrink-0 text-green" aria-hidden /> : <XCircle className="size-5 shrink-0 text-red" aria-hidden />}
                <span className="font-medium">{r.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={paperHref(mock)} className={buttonClass("primary")}>
              <RotateCcw className="size-4" aria-hidden /> Retake {mock.title}
            </Link>
            {next && (
              <Link href={next.href} className={buttonClass("secondary")}>
                Take {next.title} <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
            {!result.qualified && reviseLink ? (
              <Link href={reviseLink} className={buttonClass("ghost")}>
                Revise {weakest.short}
              </Link>
            ) : null}
          </div>
        </section>

        {/* Solutions */}
        <section>
          <h2 className="mb-4 text-xl font-bold tracking-tight">Solutions</h2>
          <div className="-mx-1 mb-5 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none]">
            {mock.sections.map((s, i) => (
              <button
                key={s.subjectSlug}
                type="button"
                onClick={() => setTab(i)}
                aria-pressed={tab === i}
                className={cn(
                  "shrink-0 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                  tab === i ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
                )}
              >
                {s.short} <span className="opacity-70">{result.sections[i].correct}/{s.questions.length}</span>
              </button>
            ))}
          </div>
          {section.reference && (
            <details className="card mb-4 text-sm">
              <summary className="cursor-pointer px-5 py-3 font-semibold">Useful data</summary>
              <QuestionPassage text={section.reference} className="border-t border-border px-5 py-4 leading-relaxed" />
            </details>
          )}
          <ol className="space-y-4">
            {section.questions.map((q, i) => {
              const r = attempt.responses[q.id];
              const answered = hasResponse(r);
              const ok = isCorrect(q, r);
              return (
                <li key={q.id} className="card p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold">Q{i + 1}</span>
                    {ok ? (
                      <Badge tone="green"><CheckCircle2 className="size-3.5" aria-hidden /> +{q.marks}</Badge>
                    ) : answered ? (
                      <Badge tone="red"><XCircle className="size-3.5" aria-hidden /> Incorrect</Badge>
                    ) : (
                      <Badge><MinusCircle className="size-3.5" aria-hidden /> Not answered</Badge>
                    )}
                    <span className="text-xs text-muted">{TYPE_SHORT[q.type]} · {q.marks} marks</span>
                  </div>
                  {q.context && q.context.includes("\n") && (
                    <pre className="mb-3 overflow-x-auto rounded-lg border border-border bg-surface-2 p-3 font-mono text-xs leading-relaxed">{q.context}</pre>
                  )}
                  {q.code && <pre className="mb-3 overflow-x-auto rounded-lg bg-ink p-3 font-mono text-xs leading-relaxed text-bg">{q.code}</pre>}
                  {q.passage && (
                    <details className="mb-3 rounded-lg border border-border bg-surface-2 text-sm">
                      <summary className="cursor-pointer px-3 py-2 font-medium text-muted">Show passage</summary>
                      <QuestionPassage text={q.passage} className="border-t border-border px-3 py-3 leading-relaxed" />
                    </details>
                  )}
                  <QuestionPrompt q={q} className="font-medium leading-relaxed" />
                  <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                    <div className={cn("rounded-lg p-3", ok ? "bg-green/10" : answered ? "bg-red/10" : "bg-surface-2")}>
                      <dt className="text-xs text-muted">Your answer</dt>
                      <dd className="mt-0.5 font-medium">
                        <RichText text={responseLabel(q, r)} />
                      </dd>
                    </div>
                    <div className="rounded-lg bg-green/10 p-3">
                      <dt className="text-xs text-muted">Correct answer</dt>
                      <dd className="mt-0.5 font-medium">
                        <RichText text={correctAnswerLabel(q)} />
                      </dd>
                    </div>
                  </dl>
                  {q.explanation && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      <span className="font-semibold text-fg">Explanation: </span>
                      {q.explanation}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </>
  );
}
