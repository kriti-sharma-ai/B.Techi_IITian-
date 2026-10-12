"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Keyboard, Repeat } from "lucide-react";
import { EXAM_BADGE } from "./pyq-papers";
import { QuestionPassage, QuestionPrompt, RichText } from "./qualifier-text";
import { Badge } from "./ui";
import type { QuestionSheet, SheetGroup, SheetQuestion } from "@/lib/pyq-sheets";
import type { QualifierQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";

// A question sheet (lib/pyq-sheets.ts) laid out like a printed paper: a paper
// header with instructions, the questions, then the answer key, which stays
// folded until the student opens it. Server-rendered; no client code.

const TYPE: Record<QualifierQuestion["type"], { label: string; hint: string }> = {
  mcq: { label: "MCQ", hint: "Choose one option" },
  multi: { label: "MSQ", hint: "Choose all correct options" },
  numerical: { label: "NAT", hint: "Write the number" },
  text: { label: "Short answer", hint: "Write the answer" },
};

const letter = (i: number) => String.fromCharCode(65 + i);

/** Drops floating-point noise from range ends, e.g. 0.30000000000000004 → 0.3. */
const tidy = (x: number) => Number(x.toFixed(6));

/** The key's short form: option letters, the accepted value or range, or the accepted words. */
export function answerText(q: QualifierQuestion) {
  if (q.type === "mcq") return letter(q.answer as number);
  if (q.type === "multi") return [...(q.answer as number[])].sort((a, b) => a - b).map(letter).join(", ");
  if (q.type === "text") return (q.answer as string[]).join(" / ");
  const values = q.accepts ?? [q.answer as number];
  const t = q.tolerance ?? 0;
  return values.map((v) => (t > 0 ? `${tidy(v - t)} to ${tidy(v + t)}` : String(v))).join(" or ");
}

/** What each question needs shown above it: shared passages and "Useful data" only where they change. */
function layout(groups: SheetGroup[]) {
  const passageRange = new Map<number, string>();
  const showReference = new Set<number>();
  let lastReference: string | undefined;
  for (const g of groups) {
    g.questions.forEach((q, i) => {
      if (q.reference && q.reference !== lastReference) showReference.add(q.n);
      lastReference = q.reference;
      if (q.passage && g.questions[i - 1]?.passage !== q.passage) {
        let end = i;
        while (g.questions[end + 1]?.passage === q.passage) end++;
        passageRange.set(q.n, end > i ? `Q${q.n}–Q${g.questions[end].n}` : `Q${q.n}`);
      }
    });
  }
  return { passageRange, showReference };
}

export function SheetPaper({ sheet }: { sheet: QuestionSheet }) {
  const { passageRange, showReference } = layout(sheet.groups);
  const all = sheet.groups.flatMap((g) => g.questions);
  const types = new Set(all.map((q) => q.type));
  const headed = sheet.groups.length > 1 || sheet.kind === "repeated";

  return (
    <article className="card sheet-paper overflow-hidden border border-border/80 shadow-md transition-shadow" aria-label={`${sheet.course.short} ${sheet.title}`}>
      {/* Official Academic Examination Paper Header */}
      <header className="border-b-2 border-border bg-surface px-5 py-6 sm:px-10 sm:py-8">
        <div className="border-b border-border/80 pb-4 text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-muted">
            Indian Institute of Technology Madras
          </p>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-fg/80">
            BS Degree Programme · Examination & Study Paper
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs font-bold text-muted uppercase">
              {sheet.course.code && <span>{sheet.course.code} · </span>}
              {sheet.course.name}
            </p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl text-fg">
              {sheet.title}
            </h1>
          </div>
          {sheet.kind && (
            <div className="flex items-center gap-1.5">
              <span className="rounded-md border border-brand/50 bg-brand/15 px-2.5 py-1 text-xs font-bold text-fg">
                Official Paper
              </span>
            </div>
          )}
        </div>

        {/* Paper metadata: the page header shows this on screen, so only print it. */}
        <div className="mt-5 hidden print:grid grid-cols-2 gap-2 sm:grid-cols-4 rounded-xl border border-border bg-surface-2/60 p-3 text-xs">
          <div>
            <span className="block text-muted">Total Questions</span>
            <span className="text-sm font-bold text-fg tabular-nums">{sheet.questions} Questions</span>
          </div>
          <div>
            <span className="block text-muted">Maximum Marks</span>
            <span className="text-sm font-bold text-fg tabular-nums">{sheet.marks} Marks</span>
          </div>
          <div>
            <span className="block text-muted">Time Allowed</span>
            <span className="text-sm font-bold text-fg tabular-nums">
              {sheet.durationMin ? `${sheet.durationMin} Minutes` : "Untimed Practice"}
            </span>
          </div>
          <div>
            <span className="block text-muted">Official Source</span>
            <span className="text-sm font-bold text-fg tabular-nums">
              {sheet.papers} {sheet.papers === 1 ? "Official Paper" : "Papers Combined"}
            </span>
          </div>
        </div>

        {/* Paper Instructions */}
        <div className="mt-5 rounded-xl border border-border bg-surface-2/40 p-4 text-xs leading-relaxed text-muted">
          <p className="font-bold text-fg uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
            <span>Examination Instructions & Guidelines</span>
          </p>
          <ul className="grid gap-1 sm:grid-cols-2 list-disc list-inside">
            <li>Solve on notebook/paper first before checking solutions.</li>
            {types.has("mcq") && <li><strong className="text-fg">MCQ</strong>: Exactly 1 option is correct. Negative marking applies.</li>}
            {types.has("multi") && <li><strong className="text-fg">MSQ</strong>: One or more options correct. Select all to score.</li>}
            {types.has("numerical") && <li><strong className="text-fg">NAT</strong>: Numerical response. No negative marking.</li>}
            <li>Scientific calculator allowed for all calculations.</li>
            <li>Official answer key is sealed at the <a href="#answer-key" className="font-semibold text-fg underline underline-offset-2">end of this sheet</a>.</li>
          </ul>
        </div>
      </header>

      {sheet.groups.map((g) => (
        <section key={g.id} id={g.id} aria-labelledby={headed ? `${g.id}-title` : undefined} className="scroll-mt-28">
          {headed && (
            <div className="border-b border-border bg-surface-2/60 px-5 py-3 sm:px-10">
              {g.eyebrow && <p className="text-xs font-bold uppercase tracking-wider text-muted">{g.eyebrow}</p>}
              <h3 id={`${g.id}-title`} className="flex flex-wrap items-center gap-2 font-bold leading-snug text-base text-fg">
                {g.title}
                {g.exam && !g.showSource && <Badge tone={EXAM_BADGE[g.exam].tone}>{EXAM_BADGE[g.exam].label}</Badge>}
              </h3>
            </div>
          )}
          <ol className="divide-y divide-border/70">
            {g.questions.map((q) => (
              <SheetItem key={q.id} q={q} showSource={g.showSource} passageRange={passageRange.get(q.n)} showReference={showReference.has(q.n)} />
            ))}
          </ol>
        </section>
      ))}

      <AnswerKey questions={all} />
    </article>
  );
}

function SheetItem({ q, showSource, passageRange, showReference }: { q: SheetQuestion; showSource: boolean; passageRange?: string; showReference: boolean }) {
  const shortOptions = q.options?.every((o) => o.length <= 36 && !o.includes("![")) ?? false;
  return (
    <li id={`q${q.n}`} className="scroll-mt-28 px-5 py-6 sm:px-10 sm:py-8 border-b border-border/70 last:border-b-0 hover:bg-surface-2/20 transition-colors">
      {showReference && (
        <details className="mb-5 rounded-xl border border-border bg-surface-2/40 text-[15px] leading-relaxed">
          <summary className="cursor-pointer px-4 py-2.5 text-sm font-semibold text-fg">Useful Reference Data for this Paper</summary>
          <QuestionPassage text={q.reference!} className="border-t border-border px-4 py-3" />
        </details>
      )}
      {passageRange && (
        <div className="mb-5 rounded-xl border border-border bg-surface-2/60 p-4 text-[15px] leading-relaxed shadow-2xs">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">
            Read the passage below, then answer {passageRange}
          </p>
          <QuestionPassage text={q.passage!} />
        </div>
      )}

      <div>
        {/* Question Header Bar */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-fg font-mono text-xs font-bold text-bg tabular-nums shadow-xs">
              Q{q.n}
            </span>
            <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs font-bold text-fg">
              {TYPE[q.type].label}
            </span>
            <span className="text-xs font-medium text-muted">
              {q.marks} {q.marks === 1 ? "Mark" : "Marks"}
            </span>
            <span className="text-xs text-muted/60">·</span>
            <span className="text-xs text-muted">{TYPE[q.type].hint}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted">
            {showSource && <span className="font-medium text-muted">{q.source}</span>}
            {q.repeat && !showSource && (
              <Link href={q.repeat.href} className="inline-flex items-center gap-1 rounded-md border border-brand/40 bg-brand/15 px-2 py-0.5 text-xs font-bold text-fg hover:bg-brand/25">
                <Repeat className="size-3" aria-hidden /> Asked {q.repeat.count} times
              </Link>
            )}
            <a href="#answer-key" className="text-xs font-medium text-muted hover:text-fg hover:underline">
              Key ↓
            </a>
          </div>
        </div>

        {/* Question Body */}
        <div className="pt-1">
          {q.context &&
            (q.context.includes("\n") ? (
              <pre className="mb-4 overflow-x-auto rounded-xl border border-border bg-surface-2/60 p-3.5 font-mono text-[13px] leading-relaxed">{q.context}</pre>
            ) : (
              <div className="mb-4 rounded-xl border border-border bg-surface-2/50 p-3.5 text-[15px] leading-relaxed">
                <RichText text={q.context} />
              </div>
            ))}
          {q.code && <pre className="mb-4 overflow-x-auto rounded-xl border border-border bg-surface-2 p-3.5 font-mono text-[13px] leading-relaxed">{q.code}</pre>}
          
          <div className="text-[15.5px] leading-relaxed text-fg">
            <QuestionPrompt q={q} className="leading-relaxed [overflow-wrap:anywhere]" />
          </div>

          {q.options && q.options.length > 0 ? (
            <ol className={cn("mt-4 grid gap-x-6 gap-y-2.5", shortOptions && "sm:grid-cols-2")}>
              {q.options.map((o, i) => (
                <li
                  key={i}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-border/80 bg-surface px-3 py-2.5 transition-colors hover:border-fg/30 hover:bg-surface-2/40"
                >
                  <span
                    className="grid size-6 shrink-0 place-items-center rounded-full border border-border bg-surface-2 font-mono text-xs font-bold text-fg"
                    aria-label={`Option ${letter(i)}`}
                  >
                    {letter(i)}
                  </span>
                  <span className="min-w-0 flex-1 pt-0.5 text-[15px] leading-normal [overflow-wrap:anywhere]">
                    <RichText text={o} />
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div className="mt-5 flex items-end gap-3 text-sm">
              <span className="font-semibold text-fg">Your answer:</span>
              <span className="h-5 w-40 border-b border-dashed border-muted/60" aria-hidden />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

function AnswerKey({ questions }: { questions: SheetQuestion[] }) {
  // Range notes ("accepts any value from 0.5 to 0.7") only repeat what the key already shows.
  const notes = questions.filter((q) => q.explanation.trim() && !(q.tolerance && /^Official answer key accepts any value/i.test(q.explanation)));
  return (
    <section id="answer-key" aria-label="Answer key" className="scroll-mt-28 border-t-2 border-border bg-surface-2/30">
      <details className="group" open>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-5 sm:px-10 [&::-webkit-details-marker]:hidden border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-fg px-2 py-0.5 text-xs font-bold text-bg uppercase">Official Key</span>
              <h2 className="text-lg font-bold tracking-tight text-fg">Master Answer Key & Explanations</h2>
            </div>
            <p className="mt-0.5 text-xs text-muted">Official answer keys from IIT Madras BS past papers. Click any question to review.</p>
          </div>
          <span className="shrink-0 rounded-xl border border-border bg-surface px-3.5 py-1.5 text-xs font-bold text-fg shadow-2xs hover:bg-surface-2 transition-colors">
            <span className="group-open:hidden">Reveal Key</span>
            <span className="hidden group-open:inline">Collapse Key</span>
          </span>
        </summary>
        <div className="px-5 py-6 sm:px-10 sm:py-8 bg-surface">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {questions.map((q) => (
              <div key={q.id} className="flex items-center justify-between rounded-lg border border-border bg-surface-2/40 px-3 py-2 text-xs">
                <a href={`#q${q.n}`} className="font-mono font-bold text-muted hover:text-fg hover:underline">
                  Q{q.n}
                </a>
                <span className="font-bold text-fg [overflow-wrap:anywhere]">
                  <RichText text={answerText(q)} />
                </span>
              </div>
            ))}
          </div>

          {notes.length > 0 && (
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted">Detailed Answer Notes & Working</h3>
              <dl className="space-y-4 text-sm leading-relaxed">
                {notes.map((q) => (
                  <div key={q.id} className="rounded-xl border border-border bg-surface-2/30 p-4">
                    <dt className="flex items-center gap-2 font-bold text-fg mb-1.5">
                      <span className="rounded bg-fg px-1.5 py-0.5 font-mono text-xs text-bg">Q{q.n}</span>
                      <span>Answer: <RichText text={answerText(q)} /></span>
                    </dt>
                    <dd className="whitespace-pre-line text-sm text-muted">
                      <RichText text={q.explanation} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </details>
    </section>
  );
}

export function QuestionPalette({ questions }: { questions: SheetQuestion[] }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "a" || e.key === "A") {
        e.preventDefault();
        document.getElementById("answer-key")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        window.print();
      } else if (e.key === "j" || e.key === "J") {
        e.preventDefault();
        const qElements = Array.from(document.querySelectorAll<HTMLElement>("[id^='q']"));
        const currentY = window.scrollY + 140;
        const next = qElements.find((el) => el.offsetTop > currentY);
        if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (e.key === "k" || e.key === "K") {
        e.preventDefault();
        const qElements = Array.from(document.querySelectorAll<HTMLElement>("[id^='q']"));
        const currentY = window.scrollY + 60;
        const prev = [...qElements].reverse().find((el) => el.offsetTop < currentY);
        if (prev) prev.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between">
        <p className="eyebrow">Question Palette</p>
        <span className="text-xs font-semibold text-muted tabular-nums">{questions.length} Qs</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 max-h-[300px] overflow-y-auto pr-1">
        {questions.map((q) => (
          <a
            key={q.id}
            href={`#q${q.n}`}
            className="grid size-8 place-items-center rounded-lg border border-border bg-surface-2 text-xs font-bold text-fg transition-all hover:border-fg/40 hover:bg-fg hover:text-bg shadow-2xs"
            title={`Jump to Q${q.n} (${TYPE[q.type].label}, ${q.marks}m)`}
          >
            {q.n}
          </a>
        ))}
      </div>
      <div className="mt-4 border-t border-border pt-3">
        <a
          href="#answer-key"
          className="flex w-full items-center justify-center rounded-xl border border-border bg-surface-2/80 px-3 py-2 text-xs font-bold text-fg transition-colors hover:bg-fg hover:text-bg"
        >
          View Answer Key ↓
        </a>
      </div>

      {/* Keyboard Shortcuts Helper */}
      <div className="mt-3 rounded-xl border border-border/70 bg-surface-2/40 p-2.5 text-[11px] text-muted space-y-1.5">
        <div className="flex items-center gap-1.5 font-semibold text-fg">
          <Keyboard className="size-3.5 shrink-0" aria-hidden /> <span>Shortcuts</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span>Next / Prev Q</span>
          <span className="font-mono bg-surface border border-border px-1.5 py-0.5 rounded text-fg font-semibold">J / K</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span>Answer key</span>
          <span className="font-mono bg-surface border border-border px-1.5 py-0.5 rounded text-fg font-semibold">A</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span>Print / PDF</span>
          <span className="font-mono bg-surface border border-border px-1.5 py-0.5 rounded text-fg font-semibold">P</span>
        </div>
      </div>
    </div>
  );
}
