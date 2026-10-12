"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  Layers,
  Repeat,
  Sparkles,
  StickyNote,
  Timer,
  Zap,
} from "lucide-react";
import { buttonClass } from "@/components/ui";
import { cheatSheetForSubject, cheatSheetHref } from "@/lib/data/cheat-notes";
import type { CourseSheets } from "@/lib/pyq-sheets";
import type { PracticePlan } from "@/lib/pyq-practice";
import { pyqSheetsHref } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";

type StudioTab = "pdf" | "repeated" | "topics" | "drills";

export function PracticeFormatStudio({
  plan,
  courseSheets,
  initialFormat = "portal",
  initialTab,
}: {
  plan: PracticePlan;
  practiseModes?: unknown;
  testsModes?: unknown;
  courseSheets?: CourseSheets;
  initialFormat?: "portal" | "paper" | "both";
  initialTab?: string;
  builderSlot?: React.ReactNode;
}) {
  const resolveTab = (tab?: string, format?: string): StudioTab => {
    if (tab === "repeated" || tab === "repeat" || tab === "imp") return "repeated";
    if (tab === "topics" || tab === "topic") return "topics";
    if (tab === "drills" || tab === "drill" || tab === "practice") return "drills";
    if (tab === "portal" || format === "portal") return "drills";
    return "pdf";
  };

  const [activeTab, setActiveTab] = useState<StudioTab>(() => resolveTab(initialTab, initialFormat));

  useEffect(() => {
    if (initialTab) {
      setActiveTab(resolveTab(initialTab, initialFormat));
    }
  }, [initialTab, initialFormat]);

  if (!plan) return null;
  const { course, exam, papers } = plan;
  const examPapers = papers.filter((p) => p.exam === exam.slug);
  const activePapers = examPapers.length > 0 ? examPapers : papers;

  const repeatedData = courseSheets?.repeated;
  const topicSheets = courseSheets?.topics ?? [];

  return (
    <div className="space-y-6">
      {/* ──────────────── EXAM PORTAL MULTI-SUBJECT CALLOUT ──────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/80 bg-surface/60 px-4 py-3 text-xs transition-colors hover:border-fg/20">
        <div className="flex items-center gap-2.5 text-muted">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-surface-2 text-fg">
            <Layers className="size-3.5" aria-hidden />
          </span>
          <span className="leading-snug">
            Need to combine <strong className="font-semibold text-fg">1 to 4 subjects</strong> for a full timed TCS iON mock test?
          </span>
        </div>
        <Link
          href="/exam"
          className="inline-flex shrink-0 items-center gap-1 font-semibold text-fg hover:text-brand transition-colors"
        >
          Open Exam Portal <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>

      {/* ──────────────── EDITORIAL UNDERLINE TAB SWITCHER ──────────────── */}
      <div
        role="tablist"
        aria-label="Practice Categories"
        className="flex items-center gap-5 overflow-x-auto border-b border-border text-sm font-medium scrollbar-none"
      >
        <button
          type="button"
          role="tab"
          id="tab-pdf"
          aria-selected={activeTab === "pdf"}
          onClick={() => setActiveTab("pdf")}
          className={cn(
            "relative pb-2.5 shrink-0 transition-colors cursor-pointer flex items-center gap-1.5",
            activeTab === "pdf"
              ? "text-fg font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
              : "text-muted hover:text-fg"
          )}
        >
          <FileText className="size-4" aria-hidden />
          <span>Past Paper PDFs</span>
          <span className="text-xs text-muted tabular-nums">({activePapers.length})</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-repeated"
          aria-selected={activeTab === "repeated"}
          onClick={() => setActiveTab("repeated")}
          className={cn(
            "relative pb-2.5 shrink-0 transition-colors cursor-pointer flex items-center gap-1.5",
            activeTab === "repeated"
              ? "text-fg font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
              : "text-muted hover:text-fg"
          )}
        >
          <Repeat className="size-4" aria-hidden />
          <span>Most Repeated Questions</span>
          {repeatedData && (
            <span className="rounded bg-brand/20 px-1.5 py-0.2 text-[10px] font-bold text-fg">
              {repeatedData.types}
            </span>
          )}
        </button>

        <button
          type="button"
          role="tab"
          id="tab-topics"
          aria-selected={activeTab === "topics"}
          onClick={() => setActiveTab("topics")}
          className={cn(
            "relative pb-2.5 shrink-0 transition-colors cursor-pointer flex items-center gap-1.5",
            activeTab === "topics"
              ? "text-fg font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
              : "text-muted hover:text-fg"
          )}
        >
          <BookOpen className="size-4" aria-hidden />
          <span>Topic Question Sheets</span>
          <span className="text-xs text-muted tabular-nums">({topicSheets.length})</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-drills"
          aria-selected={activeTab === "drills"}
          onClick={() => setActiveTab("drills")}
          className={cn(
            "relative pb-2.5 shrink-0 transition-colors cursor-pointer flex items-center gap-1.5",
            activeTab === "drills"
              ? "text-fg font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
              : "text-muted hover:text-fg"
          )}
        >
          <Zap className="size-4" aria-hidden />
          <span>Quick Drills & Practice</span>
        </button>
      </div>

      {/* ──────────────── TAB 1: PAST PAPER PDFS ──────────────── */}
      {activeTab === "pdf" && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-muted">
            <p>Full question papers formatted for offline problem solving with answer keys.</p>
            <span className="tabular-nums font-medium">{activePapers.length} papers available</span>
          </div>

          <div className="divide-y divide-border rounded-xl border border-border bg-surface">
            {activePapers.map((p) => (
              <div
                key={p.slug}
                className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-4 hover:bg-surface-2/40 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">
                    {p.label}
                    {p.session && <span className="font-normal text-muted"> · {p.session}</span>}
                  </p>
                  <p className="mt-0.5 text-xs text-muted tabular-nums">
                    {p.questions} questions · {p.marks} marks · Official answer key included
                  </p>
                </div>

                <Link
                  href={p.sheetHref}
                  className={cn(buttonClass("secondary", "sm"), "text-xs font-semibold shrink-0")}
                >
                  Open Paper & Answers →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ──────────────── TAB 2: MOST REPEATED QUESTIONS ──────────────── */}
      {activeTab === "repeated" && (
        <div className="space-y-4 animate-fade-in">
          {repeatedData ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-brand/20 text-fg">
                        <Repeat className="size-4 text-brand-ink" aria-hidden />
                      </span>
                      <h3 className="text-base font-bold text-fg">
                        Recurring Question Types
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted leading-relaxed max-w-xl">
                      {repeatedData.types} distinct question types recurred across 2+ {course.short} terms ({repeatedData.questions} total questions).
                      Identical concepts with refreshed numerical values — master these to secure high-frequency marks.
                    </p>
                  </div>
                  <Link
                    href={repeatedData.href}
                    className={cn(buttonClass("primary", "sm"), "font-semibold shrink-0")}
                  >
                    Solve Most Repeated Sheet <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>

                {/* Top Repeated List */}
                <div className="mt-4 divide-y divide-border rounded-lg border border-border/80 bg-surface-2/30">
                  {repeatedData.top.map((item, idx) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between gap-3 p-3 transition-colors hover:bg-surface-2/70"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-5 text-xs font-semibold text-muted tabular-nums">
                          {idx + 1}
                        </span>
                        <span className="truncate text-xs font-medium text-fg">
                          {item.title}
                        </span>
                      </div>
                      <span className="shrink-0 rounded bg-brand/20 px-2 py-0.5 text-xs font-semibold text-fg tabular-nums">
                        Asked ×{item.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-8 text-center text-xs text-muted">
              Most repeated analysis is being compiled from the latest term papers for {course.short}.
              In the meantime, solve individual past papers under the Past Paper PDFs tab.
            </div>
          )}
        </div>
      )}

      {/* ──────────────── TAB 3: TOPIC QUESTION SHEETS ──────────────── */}
      {activeTab === "topics" && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-muted">
            <p>Past questions organised by syllabus module and topic.</p>
            <span className="tabular-nums font-medium">{topicSheets.length} topics</span>
          </div>

          {topicSheets.length > 0 ? (
            <div className="divide-y divide-border rounded-xl border border-border bg-surface">
              {topicSheets.map((topic) => (
                <div
                  key={topic.slug}
                  className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-4 hover:bg-surface-2/40 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg">
                      {topic.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted tabular-nums">
                      {topic.questions} questions · from {topic.papers} past papers
                    </p>
                  </div>
                  <Link
                    href={topic.href}
                    className={cn(buttonClass("secondary", "sm"), "text-xs font-semibold shrink-0")}
                  >
                    Open Topic Sheet →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-8 text-center text-xs text-muted">
              Topic-wise sheets are not available for this course yet.
            </div>
          )}
        </div>
      )}

      {/* ──────────────── TAB 4: QUICK DRILLS & PRACTICE ──────────────── */}
      {activeTab === "drills" && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid gap-3 sm:grid-cols-3">
            {/* Quick Practice Card */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-fg/30">
              <div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="font-semibold text-fg">Quick Practice</span>
                  <span className="tabular-nums">10 Qs</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Random sample of 10 questions with instant answer keys and explanations.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <Link
                  href={`/practice/session?course=${course.slug}&exam=${exam.slug}&mode=quick`}
                  className={cn(buttonClass("primary", "sm"), "w-full justify-center text-xs font-semibold")}
                >
                  Start 10-Q Practice
                </Link>
              </div>
            </div>

            {/* Adaptive Drill Card */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-fg/30">
              <div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="font-semibold text-fg">Adaptive Drill</span>
                  <span className="tabular-nums">Mastery</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Missed questions loop back into your pool until answered correctly.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <Link
                  href={`/practice/session?course=${course.slug}&exam=${exam.slug}&mode=drill`}
                  className={cn(buttonClass("secondary", "sm"), "w-full justify-center text-xs font-semibold")}
                >
                  Start Adaptive Drill
                </Link>
              </div>
            </div>

            {/* Complete Question Bank */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-fg/30">
              <div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="font-semibold text-fg">Complete Bank</span>
                  <span className="tabular-nums">{plan.questions} Qs</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Step through all past {exam.label} questions for {course.short} one by one.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <Link
                  href={`/practice/session?course=${course.slug}&exam=${exam.slug}&mode=all`}
                  className={cn(buttonClass("secondary", "sm"), "w-full justify-center text-xs font-semibold")}
                >
                  Practice All ({plan.questions})
                </Link>
              </div>
            </div>
          </div>

          {/* ──────────────── COMPANION STUDY CARDS ──────────────── */}
          <div className="grid gap-4 pt-2 md:grid-cols-2">
            {/* 1. Cheat Sheet & Formula Companion */}
            {cheatSheetForSubject(course.slug) ? (
              <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 sm:p-5 transition-colors hover:border-fg/30">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-brand/20 text-brand-ink">
                      <StickyNote className="size-4 text-fg" aria-hidden />
                    </span>
                    <h4 className="text-sm font-bold text-fg">Formulas & Cheat Notes</h4>
                  </div>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    Need formulas or theorem summaries before solving? Check the {course.short} cheat sheet covering all definitions, traps and rules.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-border/60">
                  <Link
                    href={cheatSheetHref(cheatSheetForSubject(course.slug)!)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg hover:text-brand transition-colors"
                  >
                    Open {course.short} Notes & Formulas <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 sm:p-5 transition-colors hover:border-fg/30">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-surface-2 text-fg">
                      <FileText className="size-4" aria-hidden />
                    </span>
                    <h4 className="text-sm font-bold text-fg">Offline Paper PDFs</h4>
                  </div>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    Prefer solving with pen and paper? Switch to the Past Paper PDFs tab to view and download full-length papers.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-border/60">
                  <button
                    type="button"
                    onClick={() => setActiveTab("pdf")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg hover:text-brand transition-colors cursor-pointer"
                  >
                    View {activePapers.length} Question Papers <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                </div>
              </div>
            )}

            {/* 2. Timed TCS iON Mock Exam Card */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 sm:p-5 transition-colors hover:border-fg/30">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-brand/20 text-brand-ink">
                    <Timer className="size-4 text-fg" aria-hidden />
                  </span>
                  <h4 className="text-sm font-bold text-fg">Timed TCS iON Mock Exam</h4>
                </div>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Ready for exam pressure? Sit a full-length timed mock in our portal with on-screen calculator, official countdown, and instant report.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/60">
                <Link
                  href={`/practice/session?course=${course.slug}&exam=${exam.slug}&mode=exam`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg hover:text-brand transition-colors"
                >
                  Start Timed Mock Exam <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Top Repeating Concepts Teaser */}
          {repeatedData && repeatedData.top.length > 0 && (
            <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Repeat className="size-4 text-brand" aria-hidden />
                  <h4 className="text-sm font-bold text-fg">Top Recurring Questions in {course.short}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("repeated")}
                  className="text-xs font-semibold text-muted hover:text-fg transition-colors cursor-pointer"
                >
                  See all {repeatedData.types} types →
                </button>
              </div>
              <div className="mt-3 divide-y divide-border/60">
                {repeatedData.top.slice(0, 3).map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-3 py-2.5 hover:bg-surface-2/40 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xs font-semibold text-muted tabular-nums">#{idx + 1}</span>
                      <span className="truncate text-xs font-medium text-fg">{item.title}</span>
                    </div>
                    <span className="shrink-0 rounded bg-brand/20 px-2 py-0.5 text-[11px] font-semibold text-fg">
                      Asked ×{item.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
