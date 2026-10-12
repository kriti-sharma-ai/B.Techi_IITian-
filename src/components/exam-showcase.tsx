"use client";

// The landing page's exam screen: a small working copy of the exam room in qualifier-exam.tsx, run on
// twelve real past qualifier questions (lib/demo-exam.ts). Same rules as the real portal: an answer
// counts only once saved with "Save & Next" or "Mark for Review & Next". Nothing is stored; Submit
// shows the score. Keep the look (header, tabs, chips, action bar) in step with qualifier-exam.tsx.

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, CheckCircle2, Clock, Info, LayoutGrid, Maximize, MousePointerClick, RotateCcw, Trophy, User, X } from "lucide-react";
import type { DemoSection } from "@/lib/demo-exam";
import { isCorrect } from "@/lib/grading";
import { cn } from "@/lib/utils";
import { QuestionPassage, QuestionPrompt, RichText } from "./qualifier-text";
import { buttonClass } from "./ui";

type Status = "nv" | "na" | "a" | "m" | "am";

const STATUS: Record<Status, { label: string; chip: string }> = {
  nv: { label: "Not Visited", chip: "border border-border bg-surface-2 text-fg rounded-md" },
  na: { label: "Not Answered", chip: "bg-red text-bg rounded-b-xl rounded-t-md" },
  a: { label: "Answered", chip: "bg-green text-bg rounded-t-xl rounded-b-md" },
  m: { label: "Marked for Review", chip: "bg-purple text-bg rounded-full" },
  am: { label: "Answered & Marked for Review (will be evaluated)", chip: "bg-purple text-bg rounded-full" },
};

/** Fifteen minutes for the twelve questions. */
const DURATION = 15 * 60;

type Live = { current: number; status: Record<string, Status>; saved: Record<string, number> };

/** HH:MM:SS, as formatClock in lib/qualifier (not imported, to keep the curriculum data out of this bundle). */
const clock = (sec: number) => {
  const s = Math.max(0, sec);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
};

function Chip({ status, children, className }: { status: Status; children?: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative grid size-9 shrink-0 place-items-center text-sm font-semibold tabular-nums", STATUS[status].chip, className)}>
      {children}
      {status === "am" && (
        <span className="absolute -right-0.5 -bottom-0.5 grid size-3.5 place-items-center rounded-full bg-green text-bg ring-2 ring-surface">
          <Check className="size-2.5" strokeWidth={4} aria-hidden />
        </span>
      )}
    </span>
  );
}

export function ExamShowcase({ sections }: { sections: DemoSection[] }) {
  const flat = useMemo(() => sections.flatMap((s, si) => s.questions.map((q, qi) => ({ q, si, qi }))), [sections]);
  const fresh = (): Live => ({ current: 0, status: { [flat[0].q.id]: "na" }, saved: {} });
  const [live, setLive] = useState<Live>(fresh);
  const [draft, setDraft] = useState<number | undefined>();
  const [left, setLeft] = useState(DURATION);
  const [submitted, setSubmitted] = useState(false);
  const [palette, setPalette] = useState(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);
  const over = submitted || left <= 0;

  useEffect(() => {
    if (over) return;
    const timer = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [over]);

  const { q, si, qi } = flat[live.current];
  const section = sections[si];
  const statusOf = (id: string): Status => live.status[id] ?? "nv";
  const sectionStart = (i: number) => flat.findIndex((f) => f.si === i);
  const counts = (i: number) => {
    const c: Record<Status, number> = { nv: 0, na: 0, a: 0, m: 0, am: 0 };
    for (const x of sections[i].questions) c[statusOf(x.id)]++;
    return c;
  };

  const go = (index: number, base: Live = live) => {
    const id = flat[index].q.id;
    const was = base.status[id];
    setLive({ ...base, current: index, status: { ...base.status, [id]: was && was !== "nv" ? was : "na" } });
    setDraft(base.saved[id]);
    setPalette(false);
  };

  const save = (mark: boolean) => {
    const answered = draft !== undefined;
    const saved = { ...live.saved };
    if (answered) saved[q.id] = draft;
    else delete saved[q.id];
    const status: Status = mark ? (answered ? "am" : "m") : answered ? "a" : "na";
    const nextIdx = (live.current + 1) % flat.length;
    go(nextIdx, { ...live, saved, status: { ...live.status, [q.id]: status } });
    if (answered) {
      setSaveToast(`Q${qi + 1} answer saved! Moved to Q${nextIdx + 1}`);
      setTimeout(() => setSaveToast(null), 2500);
    }
  };

  const clear = () => {
    const saved = { ...live.saved };
    delete saved[q.id];
    setDraft(undefined);
    setLive({ ...live, saved, status: { ...live.status, [q.id]: "na" } });
  };

  const restart = () => {
    setLive(fresh());
    setDraft(undefined);
    setLeft(DURATION);
    setSubmitted(false);
  };

  return (
    <div
      role="region"
      aria-label="Try the exam portal with real past qualifier questions"
      className="light relative flex h-[620px] flex-col overflow-hidden rounded-2xl bg-bg text-fg sm:h-[680px] lg:h-[740px]"
    >
      {/* Portal header */}
      <div className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-surface px-3 md:px-5">
        <span className="grid size-8 place-items-center rounded-lg bg-brand text-sm font-black text-brand-ink">B</span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-bold">Qualifier demo</p>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-fg">
              <MousePointerClick className="size-2.5 text-brand" /> Interactive Sandbox
            </span>
          </div>
          <p className="truncate text-[11px] opacity-70">BTechi Exam Portal · click an option below to test</p>
        </div>
        {/* Calculator, instructions and full screen work in the full mock; here they are only shown. */}
        <span aria-hidden className="hidden h-9 items-center gap-1.5 px-2.5 text-sm font-medium text-muted sm:inline-flex">
          <Calculator className="size-4" /> Calculator
        </span>
        <span aria-hidden className="hidden h-9 items-center gap-1.5 px-2.5 text-sm font-medium text-muted md:inline-flex">
          <Info className="size-4" /> Instructions
        </span>
        <span aria-hidden className="hidden size-9 place-items-center text-muted lg:grid">
          <Maximize className="size-4" />
        </span>
        <div
          role="timer"
          aria-label="Time left"
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm font-bold tabular-nums",
            !over && left <= 60 ? "animate-pulse bg-red text-bg" : "bg-surface-2",
          )}
        >
          <Clock className="size-4" aria-hidden />
          <span className="hidden font-sans text-[11px] font-medium opacity-80 sm:inline">Time Left</span>
          {clock(left)}
        </div>
      </div>

      {/* Section tabs */}
      <nav aria-label="Sections" className="flex shrink-0 items-center gap-1 overflow-x-auto border-b border-border bg-surface px-2 [scrollbar-width:none] md:px-4">
        {sections.map((s, i) => {
          const c = counts(i);
          const on = !over && i === si;
          return (
            <button
              key={s.subjectSlug}
              type="button"
              disabled={over}
              onClick={() => go(sectionStart(i))}
              aria-current={on ? "true" : undefined}
              className={cn("relative flex shrink-0 items-center gap-2 px-3 py-3 text-sm font-medium", on ? "text-fg" : "text-muted hover:text-fg")}
            >
              {s.short}
              <span className={cn("rounded-md px-1.5 py-0.5 text-[11px] tabular-nums", on ? "bg-ink text-bg" : "bg-surface-2")}>
                {c.a + c.am}/{s.questions.length}
              </span>
              {on && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />}
            </button>
          );
        })}
      </nav>

      {over ? (
        <Result sections={sections} saved={live.saved} timeUp={!submitted} onRestart={restart} />
      ) : (
        <div className="flex min-h-0 flex-1">
          {/* Question pane */}
          <section aria-label={`Question ${qi + 1}`} className="flex min-w-0 flex-1 flex-col">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 md:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <h3 className="text-base font-bold">Question {qi + 1}</h3>
                <span className="hidden truncate text-xs text-muted sm:inline">Multiple Choice (single correct)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-md bg-green/10 px-1.5 py-0.5 font-semibold text-green">+{q.marks}</span>
                <span className="rounded-md bg-surface-2 px-1.5 py-0.5 font-semibold text-muted">−0</span>
                <button
                  type="button"
                  onClick={() => setPalette(true)}
                  className="ml-1 inline-flex h-8 items-center gap-1.5 rounded-lg border border-border px-2.5 font-medium lg:hidden"
                >
                  <LayoutGrid className="size-3.5" aria-hidden /> Palette
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 md:px-6">
              {saveToast && (
                <div className="mb-4 flex items-center justify-between gap-2 rounded-xl border border-green/30 bg-green/10 px-4 py-2.5 text-xs font-semibold text-green animate-fade-in shadow-xs">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-green" />
                    <span>{saveToast}</span>
                  </span>
                  <span className="text-[11px] opacity-75">Palette updated</span>
                </div>
              )}
              <div key={q.id} className="animate-fade-up mx-auto max-w-3xl">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <p className="inline-flex rounded-md bg-brand/25 px-2 py-0.5 text-xs font-semibold">Real PYQ · {q.source}</p>
                  <span className="text-[11px] text-muted font-medium">Click an option to test interaction</span>
                </div>
                {q.passage && (
                  <div className="mb-4 rounded-xl border border-border bg-surface p-4 text-[15px] leading-relaxed">
                    <QuestionPassage text={q.passage} />
                  </div>
                )}
                {q.context &&
                  (q.context.includes("\n") ? (
                    <pre className="mb-4 overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-[13px] leading-relaxed">{q.context}</pre>
                  ) : (
                    <div className="mb-4 rounded-xl border border-border bg-surface p-4 text-[15px] leading-relaxed">{q.context}</div>
                  ))}
                {q.code && (
                  <pre className="mb-4 overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 font-mono text-[13px] leading-relaxed">{q.code}</pre>
                )}
                <QuestionPrompt q={q} className="text-[15px] leading-relaxed font-medium md:text-base" />
                <fieldset className="mt-6">
                  <legend className="sr-only">Select one option</legend>
                  <div className="grid gap-2.5">
                    {q.options!.map((opt, i) => {
                      const on = draft === i;
                      return (
                        <label
                          key={i}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-xl border-2 bg-surface p-3.5 transition-all active:scale-[0.995]",
                            on ? "border-fg shadow-xs ring-1 ring-fg/20" : "border-border hover:border-fg/30 hover:bg-surface-2/40",
                          )}
                        >
                          <input
                            type="radio"
                            name={`demo-${q.id}`}
                            checked={on}
                            onChange={() => setDraft(i)}
                            className="mt-0.5 size-4 shrink-0 accent-[var(--fg)]"
                          />
                          <span className={cn("w-5 shrink-0 font-semibold", on ? "text-fg" : "text-muted")}>{String.fromCharCode(65 + i)}.</span>
                          <span className="min-w-0 flex-1 text-[15px] [overflow-wrap:anywhere]">
                            <RichText text={opt} />
                          </span>
                          {on && <Check className="size-4 shrink-0 text-fg mt-0.5" strokeWidth={3} aria-hidden />}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                {draft !== undefined && draft !== live.saved[q.id] && (
                  <p className="mt-4 text-xs text-muted">Not saved yet. Click Save &amp; Next to record this answer.</p>
                )}
              </div>
            </div>

            {/* Action bar */}
            <div className="flex shrink-0 items-center gap-2 border-t border-border bg-surface px-3 py-3 md:px-6">
              <button
                type="button"
                onClick={() => save(true)}
                className="h-10 rounded-xl border border-purple/40 bg-purple/10 px-3 text-sm font-semibold text-purple hover:bg-purple/15"
              >
                <span className="sm:hidden">Mark &amp; Next</span>
                <span className="hidden sm:inline">Mark for Review &amp; Next</span>
              </button>
              <button type="button" onClick={clear} className="h-10 rounded-xl border border-border px-3 text-sm font-medium hover:border-fg/30">
                <span className="sm:hidden">Clear</span>
                <span className="hidden sm:inline">Clear Response</span>
              </button>
              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  disabled={live.current === 0}
                  onClick={() => go(live.current - 1)}
                  className="hidden h-10 rounded-xl border border-border px-3 text-sm font-medium hover:border-fg/30 disabled:opacity-40 sm:block"
                >
                  Previous
                </button>
                <button type="button" onClick={() => save(false)} className="h-10 rounded-xl bg-green px-4 text-sm font-semibold text-bg hover:brightness-110">
                  Save &amp; Next
                </button>
              </div>
            </div>
          </section>

          {/* Palette: a side panel on desktop, a drawer inside the screen on smaller screens */}
          {palette && <button type="button" aria-label="Close palette" onClick={() => setPalette(false)} className="absolute inset-0 z-10 bg-ink/30 lg:hidden" />}
          <aside
            aria-label="Question palette"
            className={cn(
              "w-72 shrink-0 flex-col border-l border-border bg-surface lg:w-80",
              palette ? "absolute inset-y-0 right-0 z-20 flex shadow-2xl" : "hidden lg:flex",
            )}
          >
            <div className="flex items-center gap-3 border-b border-border p-4">
              <span className="grid size-11 place-items-center rounded-full bg-surface-2 text-muted">
                <User className="size-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">You</p>
                <p className="text-xs text-muted">Candidate</p>
              </div>
              {palette && (
                <button type="button" onClick={() => setPalette(false)} aria-label="Close palette" className="rounded-lg p-1.5 hover:bg-surface-2">
                  <X className="size-5" />
                </button>
              )}
            </div>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 border-b border-border p-4 text-xs">
              {(Object.keys(STATUS) as Status[]).map((s) => (
                <li key={s} className={cn("flex items-center gap-2", s === "am" && "col-span-2")}>
                  <Chip status={s} className="size-7 text-xs">
                    {counts(si)[s]}
                  </Chip>
                  <span className="text-muted">{STATUS[s].label}</span>
                </li>
              ))}
            </ul>
            <div className="min-h-0 flex-1 overflow-y-auto p-4">
              <p className="mb-3 rounded-lg bg-surface-2 px-3 py-2 text-sm font-semibold">{section.title}</p>
              <p className="mb-3 text-xs text-muted">Choose a question</p>
              <div className="grid grid-cols-[repeat(5,2.25rem)] justify-between gap-y-3">
                {section.questions.map((x, i) => {
                  const index = sectionStart(si) + i;
                  const status = statusOf(x.id);
                  return (
                    <button
                      key={x.id}
                      type="button"
                      onClick={() => go(index)}
                      aria-label={`Question ${i + 1}, ${STATUS[status].label}`}
                      aria-current={index === live.current ? "true" : undefined}
                    >
                      <Chip status={status} className={cn(index === live.current && "ring-2 ring-fg ring-offset-2 ring-offset-surface")}>
                        {i + 1}
                      </Chip>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-border p-4">
              <button type="button" onClick={() => setSubmitted(true)} className="h-11 w-full rounded-xl bg-ink text-sm font-semibold text-bg hover:opacity-90">
                Submit exam
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

/** Score after Submit (or when time runs out), course by course. */
function Result({ sections, saved, timeUp, onRestart }: { sections: DemoSection[]; saved: Record<string, number>; timeUp: boolean; onRestart: () => void }) {
  const rows = sections.map((s) => {
    const right = s.questions.filter((x) => saved[x.id] !== undefined && isCorrect(x, saved[x.id]));
    return { short: s.short, right: right.length, total: s.questions.length, marks: right.reduce((n, x) => n + x.marks, 0) };
  });
  const all = sections.flatMap((s) => s.questions);
  const marks = rows.reduce((n, r) => n + r.marks, 0);
  const correct = rows.reduce((n, r) => n + r.right, 0);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="animate-fade-up mx-auto flex max-w-lg flex-col items-center px-5 py-10 text-center md:py-14">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand text-brand-ink">
          <Trophy className="size-7" aria-hidden />
        </span>
        <p className="eyebrow mt-5">{timeUp ? "Time's up" : "Demo submitted"}</p>
        <p className="mt-1 text-3xl font-extrabold tracking-tight tabular-nums">
          {marks} / {all.reduce((n, x) => n + x.marks, 0)} marks
        </p>
        <p className="mt-1 text-muted">
          {correct} of {all.length} correct, on real past qualifier questions.
        </p>
        <ul className="mt-6 w-full space-y-3 text-left text-sm">
          {rows.map((r) => (
            <li key={r.short} className="grid grid-cols-[5rem_1fr_2.5rem] items-center gap-3">
              <span className="font-medium">{r.short}</span>
              <span className="h-2.5 rounded-full bg-surface-2">
                <span className="block h-full rounded-full bg-brand" style={{ width: `${(r.right / r.total) * 100}%` }} />
              </span>
              <span className="text-right font-semibold tabular-nums">
                {r.right}/{r.total}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/exam" className={buttonClass("primary", "lg")}>
            Take a full mock <ArrowRight className="size-4" aria-hidden />
          </Link>
          <button type="button" onClick={onRestart} className={buttonClass("secondary", "lg")}>
            <RotateCcw className="size-4" aria-hidden /> Try again
          </button>
        </div>
      </div>
    </div>
  );
}
