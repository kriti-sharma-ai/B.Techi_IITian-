"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Layers,
  Plus,
  Search,
  Shuffle,
  X,
} from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { MAX_EXAM_COURSES, examHref, type PyqExam } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";
import { buttonClass } from "./ui";

export type PortalCourse = {
  slug: string;
  name: string;
  short: string;
  code?: string;
  level: "foundation" | "diploma" | "degree";
  group: string;
  minutes: Partial<Record<PyqExam, number>>;
  paperCounts: Partial<Record<PyqExam, number>>;
  years?: string[];
  yearsPerExam?: Partial<Record<PyqExam, string[]>>;
};

const EXAMS: { exam: PyqExam; label: string; scope: string }[] = [
  { exam: "end-term", label: "End Term", scope: "Weeks 1–12" },
  { exam: "quiz-1", label: "Quiz 1", scope: "Weeks 1–4" },
  { exam: "quiz-2", label: "Quiz 2", scope: "Weeks 5–8" },
];

const LEVEL_FILTERS = [
  { id: "all", label: "All" },
  { id: "foundation", label: "Foundation" },
  { id: "diploma-programming", label: "Diploma (Prog)" },
  { id: "diploma-data-science", label: "Diploma (DS)" },
  { id: "degree", label: "Degree" },
];

function formatMinutes(min: number): string {
  if (min <= 0) return "0 min";
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

export function ExamPortalStudio({
  courses,
  initialPlanned = [],
}: {
  courses: PortalCourse[];
  initialPlanned?: string[];
}) {
  const hydrated = useHydrated();
  const plannedFromStore = useStore((s) => s.plan?.subjects);
  const userPlanned = hydrated ? (plannedFromStore ?? initialPlanned) : initialPlanned;

  const [activeExam, setActiveExam] = useState<PyqExam>("end-term");
  const [selectedYear, setSelectedYear] = useState<string>("random");
  const [levelFilter, setLevelFilter] = useState<string>(userPlanned.length > 0 ? "mine" : "all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Determine initial selected courses (up to 4) that have papers for activeExam
  const defaultPicks = useMemo(() => {
    const plannedMatching = userPlanned.filter((slug) => {
      const c = courses.find((item) => item.slug === slug);
      return c && (c.minutes[activeExam] ?? 0) > 0;
    });
    if (plannedMatching.length > 0) {
      return plannedMatching.slice(0, MAX_EXAM_COURSES);
    }
    return courses
      .filter((c) => (c.minutes[activeExam] ?? 0) > 0)
      .slice(0, 2)
      .map((c) => c.slug);
  }, [userPlanned, courses, activeExam]);

  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(defaultPicks);

  // Available courses for activeExam
  const coursesForExam = useMemo(() => {
    return courses.filter((c) => (c.minutes[activeExam] ?? 0) > 0);
  }, [courses, activeExam]);

  // Only the years this exam has papers for.
  const availableYears = useMemo(
    () => [...new Set(coursesForExam.flatMap((c) => c.yearsPerExam?.[activeExam] ?? []))].sort((a, b) => b.localeCompare(a)),
    [coursesForExam, activeExam],
  );

  // Keep selected slugs valid
  const validSelectedSlugs = useMemo(() => {
    return selectedSlugs.filter((slug) => coursesForExam.some((c) => c.slug === slug));
  }, [selectedSlugs, coursesForExam]);

  const toggleCourse = (slug: string) => {
    if (validSelectedSlugs.includes(slug)) {
      setSelectedSlugs(validSelectedSlugs.filter((s) => s !== slug));
    } else {
      if (validSelectedSlugs.length >= MAX_EXAM_COURSES) return;
      setSelectedSlugs([...validSelectedSlugs, slug]);
    }
  };

  const clearSelection = () => {
    setSelectedSlugs([]);
  };

  // Filter list by category and search
  const displayedCourses = useMemo(() => {
    return coursesForExam.filter((c) => {
      if (levelFilter === "mine" && !userPlanned.includes(c.slug)) return false;
      if (levelFilter === "foundation" && c.level !== "foundation") return false;
      if (levelFilter === "diploma-programming" && !c.group.includes("Programming")) return false;
      if (levelFilter === "diploma-data-science" && !c.group.includes("Data Science") && !c.group.includes("Diploma")) return false;
      if (levelFilter === "degree" && c.level !== "degree") return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.name.toLowerCase().includes(q);
        const matchShort = c.short.toLowerCase().includes(q);
        const matchCode = c.code?.toLowerCase().includes(q) ?? false;
        if (!matchName && !matchShort && !matchCode) return false;
      }
      return true;
    });
  }, [coursesForExam, levelFilter, searchQuery, userPlanned]);

  const selectedCoursesData = useMemo(() => {
    return validSelectedSlugs
      .map((slug) => coursesForExam.find((c) => c.slug === slug))
      .filter((c): c is PortalCourse => c !== undefined);
  }, [validSelectedSlugs, coursesForExam]);

  const totalMinutes = useMemo(() => {
    return selectedCoursesData.reduce((acc, c) => acc + (c.minutes[activeExam] ?? 60), 0);
  }, [selectedCoursesData, activeExam]);

  const isFull = validSelectedSlugs.length >= MAX_EXAM_COURSES;
  const launchHref =
    validSelectedSlugs.length > 0
      ? examHref(validSelectedSlugs, activeExam, undefined, selectedYear)
      : "#";

  return (
    <div className="space-y-5 pb-24">
      {/* ──────────────── UNIFIED COMPACT TOOLBAR (NO NESTED BOXES) ──────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3.5">
        {/* Exam Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          <span className="text-xs font-semibold text-muted mr-1.5 hidden sm:inline">Exam:</span>
          {EXAMS.map((item) => {
            const isSelected = activeExam === item.exam;
            return (
              <button
                key={item.exam}
                type="button"
                onClick={() => {
                  setActiveExam(item.exam);
                  setSelectedYear("random");
                }}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors shrink-0",
                  isSelected
                    ? "bg-fg text-bg font-semibold shadow-xs"
                    : "text-muted hover:text-fg hover:bg-surface-2/60"
                )}
              >
                {item.label}
              </button>
            );
          })}
          <Link
            href="/qualifier"
            className="inline-flex shrink-0 items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-surface-2/60 hover:text-fg"
          >
            Qualifier <ArrowRight className="size-3" aria-hidden />
          </Link>
        </div>

        {/* Paper / Year Pills */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none sm:justify-end">
          <span className="text-xs font-semibold text-muted mr-1.5 hidden sm:inline">Paper:</span>
          <button
            type="button"
            onClick={() => setSelectedYear("random")}
            className={cn(
              "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors shrink-0",
              selectedYear === "random"
                ? "bg-fg text-bg font-semibold shadow-xs"
                : "text-muted hover:text-fg hover:bg-surface-2/60"
            )}
          >
            <Shuffle className="size-3" aria-hidden />
            <span>Random</span>
          </button>

          {availableYears.map((yr) => {
            const isSelected = selectedYear === yr;
            return (
              <button
                key={yr}
                type="button"
                onClick={() => setSelectedYear(yr)}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors shrink-0 tabular-nums",
                  isSelected
                    ? "bg-fg text-bg font-semibold shadow-xs"
                    : "text-muted hover:text-fg hover:bg-surface-2/60"
                )}
              >
                {yr}
              </button>
            );
          })}
        </div>
      </div>

      {/* ──────────────── SUB-BAR: LEVEL FILTERS & SEARCH ──────────────── */}
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1 text-xs font-medium">
          {[
            ...(userPlanned.length > 0 ? [{ id: "mine", label: `My Courses (${userPlanned.length})` }] : []),
            ...LEVEL_FILTERS,
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setLevelFilter(f.id)}
              className={cn(
                "rounded-md px-2.5 py-1 transition-colors cursor-pointer",
                levelFilter === f.id
                  ? "bg-surface-2 font-semibold text-fg"
                  : "text-muted hover:text-fg hover:bg-surface-2/40"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-56">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subjects..."
            className="w-full rounded-md border border-border bg-surface py-1 pl-8 pr-2.5 text-xs text-fg placeholder:text-muted focus:border-fg focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
            >
              <X className="size-3" aria-hidden />
            </button>
          )}
        </div>
      </div>

      {/* ──────────────── SUBJECTS LIST / GRID (CLEAN & AIRY) ──────────────── */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {displayedCourses.map((c) => {
          const isSelected = validSelectedSlugs.includes(c.slug);
          const duration = c.minutes[activeExam] ?? 60;
          const paperCount = c.paperCounts[activeExam] ?? 0;
          const disabled = isFull && !isSelected;

          return (
            <button
              key={c.slug}
              type="button"
              disabled={disabled}
              onClick={() => toggleCourse(c.slug)}
              className={cn(
                "group relative flex flex-col justify-between rounded-xl border p-3 text-left transition-all",
                isSelected
                  ? "border-fg bg-surface/90 shadow-2xs ring-1 ring-fg"
                  : disabled
                  ? "border-border/40 bg-surface/20 opacity-40 cursor-not-allowed"
                  : "border-border/80 bg-surface hover:border-fg/30 hover:bg-surface-2/20"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-[11px] text-muted">
                    <span className="capitalize">{c.level}</span>
                    {c.code && <span className="font-mono">· {c.code}</span>}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-fg leading-snug">
                    {c.name}
                  </p>
                </div>

                <span
                  className={cn(
                    "grid size-4.5 shrink-0 place-items-center rounded border transition-colors",
                    isSelected
                      ? "border-fg bg-fg text-bg"
                      : "border-border bg-surface group-hover:border-fg/40"
                  )}
                >
                  {isSelected ? (
                    <Check className="size-2.5" strokeWidth={3} aria-hidden />
                  ) : (
                    <Plus className="size-2.5 text-muted" aria-hidden />
                  )}
                </span>
              </div>

              <div className="mt-2.5 flex items-center justify-between border-t border-border/40 pt-1.5 text-[11px] text-muted">
                <span className="flex items-center gap-1 tabular-nums">
                  <Clock className="size-3" aria-hidden /> {formatMinutes(duration)}
                </span>
                <span className="tabular-nums">
                  {paperCount} {paperCount === 1 ? "paper" : "papers"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {displayedCourses.length === 0 && (
        <div className="rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted">
          No subjects match your filter for this exam series.
        </div>
      )}

      {/* ──────────────── FLOATING BOTTOM LAUNCH BAR ──────────────── */}
      <aside
        aria-label="Start mock test"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur shadow-md"
      >
        <div className="container-page flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-6.5 items-center justify-center rounded-lg bg-surface-2 text-fg">
              <Layers className="size-3.5" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold text-fg">
                {validSelectedSlugs.length === 0
                  ? `Pick 1 to ${MAX_EXAM_COURSES} subjects`
                  : `${selectedCoursesData.map((c) => c.short).join(" + ")} · ${formatMinutes(totalMinutes)}`}
              </p>
              <p className="text-[11px] text-muted">
                {selectedYear === "random" ? "Random paper" : `${selectedYear} papers`} · Timer and calculator
                {validSelectedSlugs.length > 0 && (
                  <>
                    {" · "}
                    <button type="button" onClick={clearSelection} className="font-medium text-muted underline-offset-2 hover:text-fg hover:underline cursor-pointer">
                      Clear
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {validSelectedSlugs.length > 0 ? (
              <Link
                href={launchHref}
                className={cn(
                  buttonClass("primary", "sm"),
                  "w-full justify-center gap-1.5 font-semibold sm:w-auto text-xs px-4 py-2"
                )}
              >
                <span>Start exam</span>
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className={cn(
                  buttonClass("secondary", "sm"),
                  "w-full cursor-not-allowed justify-center opacity-50 sm:w-auto text-xs px-4 py-2"
                )}
              >
                Start exam
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
