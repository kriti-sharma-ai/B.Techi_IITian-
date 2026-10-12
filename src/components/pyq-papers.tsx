import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { buttonClass } from "@/components/ui";
import { MockAction } from "@/components/qualifier-attempts";
import { PYQ_EXAMS, type CoursePyqs, type PaperSummary, type PyqExam } from "@/lib/pyq-index";
import { cn } from "@/lib/utils";

// Same colours as ExamTag (components/exam-tag.tsx).
export const EXAM_BADGE: Record<PyqExam, { label: string; tone: "purple" | "green" | "teal" | "blue" }> = {
  "end-term": { label: "End Term", tone: "purple" },
  "quiz-2": { label: "Quiz 2", tone: "green" },
  "quiz-1": { label: "Quiz 1", tone: "teal" },
  qualifier: { label: "Qualifier", tone: "blue" },
};

/**
 * One row per paper. The row opens Study (the paper as a question sheet with the official answers);
 * the button on the right starts the timed exam (or Resume / Retake, with the best score).
 * With `course` on each paper (the term page) the row is titled by course instead of by date.
 */
export function PaperRows({ papers, className }: { papers: (PaperSummary & { course?: CoursePyqs })[]; className?: string }) {
  return (
    <ul className={cn("divide-y divide-border", className)}>
      {papers.map((p) => {
        const when = `${p.label}${p.session ? ` · ${p.session}` : ""}`;
        return (
          <li key={p.slug} className="flex items-center gap-4 py-3.5">
            <Link href={p.sheetHref} title="Study: questions with the official answers" className="group flex min-w-0 flex-1 items-center gap-4">
              {p.course && <span className="hidden w-20 shrink-0 font-mono text-xs text-muted sm:block">{p.course.code}</span>}
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold group-hover:underline">{p.course ? p.course.name : when}</span>
                <span className="mt-0.5 block truncate text-xs text-muted tabular-nums">
                  {EXAM_BADGE[p.exam].label} · {p.course ? when : `${p.durationMin} min`} · {p.questions} Qs
                </span>
              </span>
            </Link>
            <div className="flex shrink-0 items-center gap-1">
              <Link href={p.sheetHref} className={buttonClass("ghost", "sm", "h-8 px-3 text-xs font-semibold max-sm:hidden")}>
                <BookOpen className="size-3.5" aria-hidden /> Study
              </Link>
              <MockAction slug={p.slug} href={p.href} single compact buttonVariant="secondary" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Level page list: one quiet row per course (code, name, which exams, paper count).
 * The papers themselves live on the course page, so the level page stays scannable.
 */
export function CourseList({ courses, exam }: { courses: CoursePyqs[]; exam?: PyqExam }) {
  return (
    <ul className="card divide-y divide-border overflow-hidden">
      {courses.map((c) => {
        const papers = c.papers.filter((p) => !exam || p.exam === exam);
        const exams = PYQ_EXAMS.filter((e) => papers.some((p) => p.exam === e.slug));
        return (
          <li key={c.slug}>
            <Link
              href={exam ? `${c.href}#exam-${exam}` : c.href}
              className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2/60"
            >
              <span className="hidden w-20 shrink-0 font-mono text-xs text-muted sm:block">{c.code}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold">{c.name}</span>
                <span className="mt-0.5 block truncate text-xs text-muted">{exams.map((e) => e.label).join(" · ")}</span>
              </span>
              <span className="shrink-0 text-sm text-muted tabular-nums">
                {papers.length} {papers.length === 1 ? "paper" : "papers"}
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
