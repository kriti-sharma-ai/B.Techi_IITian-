"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Layers } from "lucide-react";
import { openStudySetup } from "./study-setup";
import { useHydrated, useStore } from "@/lib/store";
import type { PyqExam } from "@/lib/pyq-index";
import { cn } from "@/lib/utils";

export type SidebarCourse = {
  slug: string;
  name: string;
  code?: string;
};

export type SidebarLevel = {
  levelSlug: string;
  levelName: string;
  courses: SidebarCourse[];
};

export type SidebarExam = {
  exam: PyqExam;
  label: string;
  papers: number;
};

export function PracticeUnifiedSidebar({
  currentCourse,
  currentExam,
  levels,
  exams,
}: {
  currentCourse: SidebarCourse;
  currentExam: PyqExam;
  levels: SidebarLevel[];
  exams: SidebarExam[];
  // Backwards compatibility props so no other callers break
  plan?: unknown;
  index?: unknown;
  courses?: unknown;
  initialCourses?: unknown;
  chooserContent?: unknown;
}) {
  const router = useRouter();
  const hydrated = useHydrated();
  const userPlan = useStore((s) => s.plan);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const enrolledSlugs = hydrated && userPlan ? userPlan.subjects : [];
  const enrolledCourses = levels.flatMap((l) => l.courses).filter((c) => enrolledSlugs.includes(c.slug));
  const isCurrentEnrolled = enrolledSlugs.includes(currentCourse.slug);
  const onlyMine = enrolledCourses.length > 0 && !showAllCourses;

  if (!currentCourse) return null;

  const onCourseChange = (slug: string) => {
    router.push(`/practice?course=${slug}&exam=${currentExam}`);
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-4 space-y-4">
      {/* 1. Subject Selector */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="course-select" className="text-xs font-semibold text-muted uppercase tracking-wider">
            Subject {onlyMine && <span className="text-[10px] lowercase font-medium text-amber dark:text-brand font-mono">({enrolledCourses.length})</span>}
          </label>
          <div className="flex items-center gap-1.5 text-[11px]">
            {enrolledCourses.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={() => setShowAllCourses(!showAllCourses)}
                  className="font-medium text-muted hover:text-fg cursor-pointer"
                >
                  {showAllCourses ? "Only my courses" : "All courses"}
                </button>
                <span className="text-muted/60">·</span>
              </>
            )}
            <button
              type="button"
              onClick={openStudySetup}
              className="font-semibold text-amber hover:underline dark:text-brand cursor-pointer"
            >
              {enrolledCourses.length > 0 ? "Edit" : "Set courses"}
            </button>
          </div>
        </div>
        <div className="relative">
          <select
            id="course-select"
            value={currentCourse.slug}
            onChange={(e) => onCourseChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-border bg-surface py-2 pr-8 pl-3 text-sm font-medium text-fg outline-none transition-colors hover:border-fg/30 focus:border-brand focus:ring-1 focus:ring-brand"
          >
            {onlyMine ? (
              <>
                {enrolledCourses.map((c) => (
                  <option key={`enrolled-${c.slug}`} value={c.slug}>
                    {c.name} {c.code ? `(${c.code})` : ""}
                  </option>
                ))}
                {!isCurrentEnrolled && (
                  <option value={currentCourse.slug}>
                    {currentCourse.name} {currentCourse.code ? `(${currentCourse.code})` : ""}
                  </option>
                )}
              </>
            ) : (
              levels.map((lvl) => (
                <optgroup key={lvl.levelSlug} label={lvl.levelName}>
                  {lvl.courses.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name} {c.code ? `(${c.code})` : ""}
                    </option>
                  ))}
                </optgroup>
              ))
            )}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted" aria-hidden />
        </div>
      </div>

      {/* 2. Exam Selector */}
      <div>
        <span className="mb-1.5 block text-xs font-semibold text-muted uppercase tracking-wider">
          Exam
        </span>
        <div className="space-y-1">
          {exams.map((item) => {
            const on = item.exam === currentExam;
            const hasPapers = item.papers > 0;
            return hasPapers ? (
              <Link
                key={item.exam}
                href={`/practice?course=${currentCourse.slug}&exam=${item.exam}`}
                scroll={false}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
                  on
                    ? "bg-brand/10 text-fg font-semibold"
                    : "text-muted hover:bg-surface-2/60 hover:text-fg",
                )}
              >
                <span>{item.label}</span>
                <span className="tabular-nums text-muted">{item.papers} {item.papers === 1 ? "paper" : "papers"}</span>
              </Link>
            ) : (
              <span
                key={item.exam}
                aria-disabled="true"
                className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-muted/50"
              >
                <span>{item.label}</span>
                <span className="text-[11px]">No papers</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Subtle Combined Mock link */}
      <div className="border-t border-border/80 pt-3 text-xs text-muted">
        <Link
          href={`/qualifier?subject=${currentCourse.slug}`}
          className="flex items-center gap-1.5 hover:text-fg transition-colors"
        >
          <Layers className="size-3.5" aria-hidden />
          <span>Combined 4-hour mock test</span>
        </Link>
      </div>
    </div>
  );
}
