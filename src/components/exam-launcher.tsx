"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, FileClock, Settings2 } from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { MAX_EXAM_COURSES, examHref, type PyqExam } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";
import { EXAM_TONES, type ExamTone } from "./exam-tag";
import { openStudySetup } from "./study-setup";
import { buttonClass } from "./ui";

/** A course with past papers, and how long a typical paper of each exam it has runs. */
export type ExamCourse = { slug: string; short: string; name: string; minutes: Partial<Record<PyqExam, number>> };

const EXAMS: { exam: PyqExam; label: string; tone: ExamTone }[] = [
  { exam: "qualifier", label: "Qualifier", tone: "blue" },
  { exam: "quiz-1", label: "Quiz 1", tone: "teal" },
  { exam: "quiz-2", label: "Quiz 2", tone: "green" },
  { exam: "end-term", label: "End Term", tone: "purple" },
];

const formatMinutes = (m: number) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} hr${m % 60 ? ` ${m % 60} min` : ""}`);

/**
 * "Start an exam": the student's own courses (their study profile), up to four
 * picked at a time, sat together in one timed paper with a section each.
 * `initial` is the profile as the server saw it (its cookie), used until the store loads.
 */
export function ExamLauncher({
  courses,
  initial,
  className,
}: {
  courses: ExamCourse[];
  initial: string[];
  className?: string;
}) {
  const hydrated = useHydrated();
  const planned = useStore((s) => s.plan?.subjects);
  const profile = hydrated ? (planned ?? []) : initial;
  const mine = courses.filter((c) => profile.includes(c.slug));
  const noPapers = profile.length - mine.length;

  const exams = EXAMS.filter((e) => mine.some((c) => c.minutes[e.exam]));
  const [examPick, setExam] = useState<PyqExam>();
  const exam = exams.find((e) => e.exam === examPick)?.exam ?? (exams.some((e) => e.exam === "end-term") ? "end-term" : exams[0]?.exam);
  const open = mine.filter((c) => exam && c.minutes[exam]);
  // Until the student picks, the first four of their courses that have papers for this exam.
  const [picks, setPicks] = useState<string[]>();
  const picked = (picks ?? open.slice(0, MAX_EXAM_COURSES).map((c) => c.slug)).filter((slug) => open.some((c) => c.slug === slug));
  // In profile order, whatever order they were ticked in.
  const chosen = open.filter((c) => picked.includes(c.slug));
  const minutes = exam ? chosen.reduce((n, c) => n + (c.minutes[exam] ?? 0), 0) : 0;

  const toggle = (slug: string) =>
    setPicks(picked.includes(slug) ? picked.filter((s) => s !== slug) : [...picked, slug].slice(0, MAX_EXAM_COURSES));

  return (
    <section aria-labelledby="exam-launcher-title" className={cn("p-4 md:p-5", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand text-brand-ink">
            <FileClock className="size-4" aria-hidden />
          </span>
          <div>
            <h2 id="exam-launcher-title" className="text-base font-bold leading-tight">
              Start an exam
            </h2>
            <p className="mt-0.5 text-xs text-muted">
              Combined timed paper · 1 to {MAX_EXAM_COURSES} subjects
            </p>
          </div>
        </div>
        {mine.length > 0 && (
          <button
            type="button"
            onClick={openStudySetup}
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-muted hover:text-fg"
            title="Edit study subjects"
          >
            <Settings2 className="size-3.5" aria-hidden /> Edit
          </button>
        )}
      </div>

      {!hydrated && initial.length === 0 ? (
        <div className="skeleton mt-3 h-20" />
      ) : mine.length === 0 ? (
        <div className="mt-3.5 rounded-xl border border-dashed border-border bg-surface-2/40 p-3.5 text-xs">
          <p className="text-muted leading-relaxed">
            {noPapers > 0
              ? "None of your subjects have past papers yet. Add other subjects to sit an exam."
              : "Tell us this term's subjects and we'll build exams from their past papers."}
          </p>
          <button type="button" onClick={openStudySetup} className={buttonClass("primary", "sm", "mt-2.5 w-full")}>
            <Settings2 className="size-3.5" aria-hidden /> Set up exam subjects
          </button>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <div>
            <p className="mb-1.5 text-xs font-semibold tracking-wide text-muted uppercase">Exam</p>
            <div role="radiogroup" aria-label="Exam" className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {exams.map((e) => {
                const on = e.exam === exam;
                return (
                  <button
                    key={e.exam}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setExam(e.exam)}
                    className={cn(
                      "inline-flex min-h-8 items-center justify-center gap-1.5 rounded-lg border px-2 py-1 text-xs font-medium transition-colors",
                      on ? "border-brand bg-brand/15 font-semibold text-fg" : "border-border bg-surface hover:border-fg/30 text-muted hover:text-fg",
                    )}
                  >
                    <span className={cn("size-1.5 rounded-full", EXAM_TONES[e.tone].dot)} aria-hidden />
                    {e.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs text-muted">
              <span className="font-semibold tracking-wide uppercase">Subjects</span>
              <span className="tabular-nums font-medium">{picked.length}/{MAX_EXAM_COURSES} selected</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {mine.map((c) => {
                const has = exam ? Boolean(c.minutes[exam]) : false;
                const on = picked.includes(c.slug);
                const full = !on && picked.length >= MAX_EXAM_COURSES;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    aria-pressed={on}
                    disabled={!has || full}
                    onClick={() => toggle(c.slug)}
                    title={has ? c.name : `${c.name}: no ${EXAMS.find((e) => e.exam === exam)?.label} papers yet`}
                    className={cn(
                      "flex min-h-9 items-center gap-2 rounded-lg border px-2.5 py-1.5 text-left text-xs leading-tight font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-45",
                      on ? "border-brand bg-brand/15 font-semibold text-fg" : "border-border bg-surface enabled:hover:border-fg/30 text-muted enabled:hover:text-fg",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-3.5 shrink-0 place-items-center rounded border",
                        on ? "border-brand bg-brand text-brand-ink" : "border-muted/50",
                      )}
                      aria-hidden
                    >
                      {on && <Check className="size-2.5" strokeWidth={3} />}
                    </span>
                    <span className="min-w-0 truncate">
                      {c.short}
                      {!has && <span className="block text-[10px] text-muted font-normal">No papers</span>}
                    </span>
                  </button>
                );
              })}
            </div>
            {noPapers > 0 && <p className="mt-1.5 text-[11px] text-muted">Some enrolled subjects lack past papers.</p>}
          </div>

          <div className="space-y-2 border-t border-border pt-3">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{chosen.length === 0 ? "Select at least 1 subject" : `${chosen.length} ${chosen.length === 1 ? "section" : "sections"}`}</span>
              {chosen.length > 0 && <span className="font-medium tabular-nums">{formatMinutes(minutes)}</span>}
            </div>
            {exam && chosen.length > 0 ? (
              <Link href={examHref(chosen.map((c) => c.slug), exam)} className={buttonClass("primary", "md", "w-full justify-center")}>
                Start exam
              </Link>
            ) : (
              <span aria-disabled="true" className={buttonClass("primary", "md", "w-full justify-center pointer-events-none opacity-40")}>
                Start exam
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
