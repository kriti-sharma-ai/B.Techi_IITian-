import Link from "next/link";
import { ArrowRight, BookOpenCheck, Clock, FileText, ListChecks } from "lucide-react";
import { MockAction } from "@/components/qualifier-attempts";
import { Badge, buttonClass } from "@/components/ui";
import type { CoursePyqs, PaperSummary, PyqExam } from "@/lib/pyq-index";
import { cn } from "@/lib/utils";

// Same colours as ExamTag (components/exam-tag.tsx).
export const EXAM_BADGE: Record<PyqExam, { label: string; tone: "purple" | "green" | "teal" | "blue" }> = {
  "end-term": { label: "End Term", tone: "purple" },
  "quiz-2": { label: "Quiz 2", tone: "green" },
  "quiz-1": { label: "Quiz 1", tone: "teal" },
  qualifier: { label: "Qualifier", tone: "blue" },
};

/** One row per paper: date, exam, size, a link to the paper as a question sheet, and a Start / Resume / Retake button. */
export function PaperRows({ papers, className }: { papers: PaperSummary[]; className?: string }) {
  return (
    <ul className={cn("divide-y divide-border", className)}>
      {papers.map((p) => (
        <li key={p.slug} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 sm:flex-nowrap">
          {/* At least 12rem for the details, so on phones the button drops below instead of squeezing them. */}
          <div className="min-w-0 flex-1 basis-48">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold">
              <span>
                {p.label}
                {p.session && <span className="font-normal text-muted"> · {p.session}</span>}
              </span>
              <Badge tone={EXAM_BADGE[p.exam].tone}>{EXAM_BADGE[p.exam].label}</Badge>
            </p>
            <p className="mt-0.5 flex flex-wrap gap-x-3 text-xs text-muted tabular-nums">
              <span className="inline-flex items-center gap-1">
                <ListChecks className="size-3.5" aria-hidden /> {p.questions} questions
              </span>
              <span className="inline-flex items-center gap-1">
                <BookOpenCheck className="size-3.5" aria-hidden /> {p.marks} marks
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden /> {p.durationMin} min
              </span>
              {p.exam !== "qualifier" && p.term && <span>{p.term} term</span>}
            </p>
          </div>
          {/* Full row on phones so the two buttons can wrap inside a padded card. */}
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:shrink-0">
            <Link
              href={p.sheetHref}
              className={cn(buttonClass("secondary"), "max-sm:flex-1")}
              title="Open clean question paper to solve on paper with pen & notebook; includes answer key"
            >
              <FileText className="size-4" aria-hidden /> Solve on paper (PDF)
            </Link>
            <MockAction slug={p.slug} href={p.href} single />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** A course and its papers, as listed on the PYQ hub. */
export function CoursePyqCard({ course, papers = course.papers }: { course: CoursePyqs; papers?: PaperSummary[] }) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="eyebrow mb-1">
            {course.code ? <span className="font-mono">{course.code} · </span> : null}
            {course.short}
          </p>
          <h3 className="font-bold leading-snug">
            <Link href={course.href} className="hover:underline">
              {course.name}
            </Link>
          </h3>
        </div>
        <Badge className="shrink-0 whitespace-nowrap">
          {papers.length} {papers.length === 1 ? "paper" : "papers"}
        </Badge>
      </div>
      <PaperRows papers={papers} className="mt-4 border-t border-border" />
      {course.courseHref && (
        <Link href={course.courseHref} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-fg">
          Go to course <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      )}
    </article>
  );
}
