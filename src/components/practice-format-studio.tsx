"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Repeat, Zap } from "lucide-react";
import { buttonClass } from "@/components/ui";
import { cheatSheetForSubject, cheatSheetHref } from "@/lib/data/cheat-notes";
import type { CourseSheets } from "@/lib/pyq-sheets";
import { practiceHref, sessionHref, type PracticePlan } from "@/lib/pyq-practice";
import { cn } from "@/lib/utils";

type StudioTab = "practice" | "papers" | "repeated" | "topics";

/** ?view= value → tab. No value opens Practice Online; old values (pdf, drills, format=paper…) still work. */
function resolveTab(view?: string, format?: string): StudioTab {
  if (view === "papers" || view === "pdf" || view === "paper") return "papers";
  if (view === "repeated" || view === "repeat" || view === "imp") return "repeated";
  if (view === "topics" || view === "topic") return "topics";
  if (!view && format === "paper") return "papers";
  return "practice";
}

export function PracticeFormatStudio({
  plan,
  courseSheets,
  initialFormat,
  initialTab,
  header,
}: {
  plan: PracticePlan;
  courseSheets?: CourseSheets;
  initialFormat?: "portal" | "paper";
  initialTab?: string;
  /** Course title row, pinned together with the tabs. */
  header?: React.ReactNode;
}) {
  if (!plan) return null;
  const activeTab = resolveTab(initialTab, initialFormat);
  const { course, exam, papers } = plan;
  const examPapers = papers.filter((p) => p.exam === exam.slug);
  const activePapers = examPapers.length > 0 ? examPapers : papers;

  const repeatedData = courseSheets?.repeated;
  const topicSheets = courseSheets?.topics ?? [];

  // Every tab has its own link; Practice Online is the plain course link.
  const base = practiceHref(course.slug, exam.slug);
  const tabs: { id: StudioTab; label: string; icon: typeof Zap; count?: number }[] = [
    { id: "practice", label: "Practice Online", icon: Zap },
    { id: "papers", label: "Past Papers", icon: FileText, count: activePapers.length },
    { id: "repeated", label: "Most Repeated", icon: Repeat, count: repeatedData?.types },
    { id: "topics", label: "By Topic", icon: BookOpen, count: topicSheets.length || undefined },
  ];

  return (
    <div className="space-y-6">
      {/* ──────────────── COURSE TITLE + TABS (pinned while the content scrolls) ──────────────── */}
      <div className="sticky top-16 z-20 -mx-1 space-y-3 bg-bg/95 px-1 pt-3 backdrop-blur">
        {header}
        {/* ──────────────── TABS (each one is a link) ──────────────── */}
        <nav
          aria-label="Practice sections"
          className="flex items-center gap-5 overflow-x-auto border-b border-border text-sm font-medium scrollbar-none"
        >
          {tabs.map(({ id, label, icon: Icon, count }) => (
            <Link
              key={id}
              href={id === "practice" ? base : `${base}&view=${id}`}
              scroll={false}
              aria-current={activeTab === id ? "page" : undefined}
              className={cn(
                "relative pb-2.5 shrink-0 transition-colors flex items-center gap-1.5",
                activeTab === id
                  ? "text-fg font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
                  : "text-muted hover:text-fg"
              )}
            >
              <Icon className="size-4" aria-hidden />
              <span>{label}</span>
              {count !== undefined && <span className="text-xs text-muted tabular-nums">({count})</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* ──────────────── TAB 4: PRACTICE ONLINE ──────────────── */}
      {activeTab === "practice" && (
        <div className="space-y-4 animate-fade-in">
          <p className="text-xs text-muted">
            Answer questions on screen and see the correct answer right away. Pick one:
          </p>

          <div className="divide-y divide-border rounded-xl border border-border bg-surface">
            {([
              {
                mode: "quick",
                title: "Quick practice",
                detail: "10 random questions. Takes about 10 minutes.",
                cta: "Start",
              },
              {
                mode: "all",
                title: "All questions",
                detail: `Go through all ${plan.questions} past ${exam.label} questions, one by one.`,
                cta: "Start",
              },
              {
                mode: "drill",
                title: "Fix my mistakes",
                detail: "Questions you get wrong come back until you get them right.",
                cta: "Start",
              },
              {
                mode: "mock",
                title: "Timed mock exam",
                detail: "Full paper with a timer, like the real exam. Score at the end.",
                cta: "Start",
              },
            ] as const).map((item) => (
              <div
                key={item.mode}
                className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-4 hover:bg-surface-2/40 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
                </div>
                <Link
                  href={sessionHref(course.slug, exam.slug, item.mode)}
                  className={cn(
                    buttonClass(item.mode === "quick" ? "primary" : "secondary", "sm"),
                    "text-xs font-semibold shrink-0"
                  )}
                >
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>

          {cheatSheetForSubject(course.slug) && (
            <p className="text-xs text-muted">
              Need formulas first?{" "}
              <Link
                href={cheatSheetHref(cheatSheetForSubject(course.slug)!)}
                className="font-semibold text-fg hover:text-brand transition-colors"
              >
                Open {course.short} cheat sheet →
              </Link>
            </p>
          )}
        </div>
      )}

      {/* ──────────────── TAB 1: PAST PAPER PDFS ──────────────── */}
      {activeTab === "papers" && (
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
              In the meantime, solve individual past papers under the Past Papers tab.
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

    </div>
  );
}
