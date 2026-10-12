import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { QualifierHistory } from "@/components/qualifier-attempts";
import { QualifierExamList } from "@/components/qualifier-exam-list";
import { getSubject } from "@/lib/content";
import { cheatSheetForSubject, cheatSheetHref } from "@/lib/data/cheat-notes";
import { practiceHref } from "@/lib/pyq-practice";
import { getPapers } from "@/lib/papers";
import { getStudyScope } from "@/lib/study-scope";
import { cn } from "@/lib/utils";
import {
  QUALIFIER_CUTOFF,
  QUALIFIER_SUBJECTS,
  answerKey,
  mockMarks,
  mockQuestions,
} from "@/lib/qualifier";

export const metadata: Metadata = {
  title: "Qualifier Pack · Maths I, Stats I, CT, English I",
  description:
    "Ace the IIT Madras BS qualifier exam. Official full-length 4-course timed qualifier papers and curated mocks with automated cutoff evaluation.",
  alternates: { canonical: "/qualifier" },
};

export const revalidate = 300;

export default async function QualifierPage({ searchParams }: PageProps<"/qualifier">) {
  const sp = await searchParams;
  const [papers, scope] = await Promise.all([getPapers(), getStudyScope(sp)]);
  const { qualifierMocks, allQualifierPapers } = papers;
  const enrolledSlugs = scope.courses;
  const enrolledQualifier = QUALIFIER_SUBJECTS.filter((slug) => enrolledSlugs.includes(slug));

  const sortedSubjects = [...QUALIFIER_SUBJECTS].sort((a, b) => {
    const aEnrolled = enrolledSlugs.includes(a);
    const bEnrolled = enrolledSlugs.includes(b);
    if (aEnrolled && !bEnrolled) return -1;
    if (!aEnrolled && bEnrolled) return 1;
    return 0;
  });

  const examItems = qualifierMocks.map((mock) => ({
    mock,
    answerKey: answerKey(mock),
    isPyq: mock.slug.startsWith("qualifier-"),
    totalQ: mockQuestions(mock).length,
    totalM: mockMarks(mock),
  }));

  return (
    <div className="container-page py-5 sm:py-7 max-w-6xl space-y-6">
      {/* ═══════════ BALANCED HEADER (SPACIOUS & CLEAN) ═══════════ */}
      <header className="border-b border-border pb-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">
            Qualifier Exam Pack
          </h1>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-fg shadow-2xs">
            <ShieldCheck className="size-3.5 text-fg" aria-hidden /> 4 Courses Combined · 4 Hours
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted mt-1">
          Mathematics I, Statistics I, Computational Thinking & English I
        </p>
      </header>

      {/* ═══════════ 2-COLUMN DASHBOARD (COMFORTABLE & AIRY) ═══════════ */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {/* Left Column: Full-Length Timed Papers */}
        <section aria-labelledby="exams-heading">
          <QualifierExamList items={examItems} />
        </section>

        {/* Right Column: 4 Foundation Subjects & Rules */}
        <section aria-labelledby="subjects-heading" className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h2 id="subjects-heading" className="text-sm sm:text-[15px] font-bold text-fg tracking-tight">
                Subjects & Cheat Sheets
              </h2>
              {enrolledQualifier.length > 0 && (
                <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-brand-ink shadow-2xs dark:bg-brand/20 dark:text-brand dark:border dark:border-brand/40">
                  {enrolledQualifier.length} Enrolled
                </span>
              )}
            </div>
            <Link
              href="/qualifier/notes"
              className="text-xs font-medium text-muted hover:text-fg transition-colors inline-flex items-center gap-1"
            >
              All Cheat Notes <ArrowRight className="size-3" aria-hidden />
            </Link>
          </div>

          <div className="divide-y divide-border rounded-xl border border-border bg-surface overflow-hidden shadow-2xs">
            {sortedSubjects.map((slug) => {
              const s = getSubject(slug)!;
              const sheet = cheatSheetForSubject(slug);
              const isEnrolled = enrolledSlugs.includes(slug);
              const displayName = s.name.replace(/for Data Science\s*/i, "");

              return (
                <div
                  key={slug}
                  className="flex items-center justify-between gap-3.5 px-4 py-3 sm:px-4.5 sm:py-3.5 transition-colors hover:bg-surface-2/30"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-fg truncate">
                        {displayName}
                      </h3>
                      {isEnrolled && (
                        <span className="shrink-0 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-semibold leading-none border border-amber-300/80 bg-amber-100 text-amber-950 dark:border-brand/40 dark:bg-brand/15 dark:text-brand">
                          My course
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted">
                      {s.code && <span className="font-mono font-medium">{s.code}</span>}
                      <span>·</span>
                      <span>Qualifier Foundation</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {sheet && (
                      <Link
                        href={cheatSheetHref(sheet)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-surface-2/60 px-2.5 py-1 text-xs font-medium text-fg hover:bg-surface-2 hover:border-fg/30 transition-colors"
                      >
                        <BookOpen className="size-3.5 text-muted" aria-hidden /> Cheat Sheet
                      </Link>
                    )}
                    <Link
                      href={practiceHref(slug, "qualifier")}
                      className="inline-flex items-center gap-1 rounded-md bg-fg text-bg px-3 py-1 text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      Practice <ArrowRight className="size-3" aria-hidden />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Official Pass Criteria Strip */}
          <div className="rounded-xl border border-border bg-surface-2/30 p-3.5 sm:p-4 text-xs">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="size-4.5 text-fg shrink-0 mt-0.5" aria-hidden />
              <div className="space-y-0.5 min-w-0">
                <span className="font-semibold text-fg text-xs sm:text-sm">Passing Rule</span>
                <p className="text-xs text-muted leading-relaxed mt-0.5">
                  Min <strong>{QUALIFIER_CUTOFF.perSubject}% in each subject</strong> and <strong>{QUALIFIER_CUTOFF.average}% overall aggregate</strong> across all 4 courses to qualify.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Attempt History (Only shown when user has saved attempts) */}
      <QualifierHistory answerKeys={allQualifierPapers.map(answerKey)} />

      {/* Subtle Footnote */}
      <p className="flex items-center gap-2 text-xs text-muted pt-2 border-t border-border/50">
        <CheckCircle2 className="size-3.5 text-muted shrink-0" aria-hidden />
        Official IIT Madras BS past qualifier exam papers with automated pass/fail grading.
      </p>
    </div>
  );
}
