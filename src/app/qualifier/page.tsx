import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { QualifierHistory } from "@/components/qualifier-attempts";
import { QualifierExamList } from "@/components/qualifier-exam-list";
import { getSubject } from "@/lib/content";
import { cheatSheetForSubject, cheatSheetHref } from "@/lib/data/cheat-notes";
import { practiceHref } from "@/lib/pyq-practice";
import { getPapers } from "@/lib/papers";
import { getStudyScope } from "@/lib/study-scope";
import { buttonClass } from "@/components/ui";
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

  const facts = [
    { label: "Duration", value: "4 hours" },
    { label: "Pass mark", value: `${QUALIFIER_CUTOFF.perSubject}% in each subject` },
    { label: "Overall", value: `${QUALIFIER_CUTOFF.average}% average` },
  ];

  return (
    <div className="container-page max-w-5xl space-y-10 py-6 sm:py-8">
      {/* ═══════════ HEADER ═══════════ */}
      <header className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Qualifier Exam Pack</h1>
          <p className="mt-1 text-sm text-muted">Maths I · Stats I · Computational Thinking · English I</p>
        </div>
        <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {facts.map((f) => (
            <div key={f.label} className="bg-surface px-4 py-3">
              <dt className="text-xs text-muted">{f.label}</dt>
              <dd className="mt-0.5 text-sm font-semibold text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ═══════════ STEP 1: SUBJECTS ═══════════ */}
      <section aria-labelledby="subjects-heading" className="space-y-4">
        <SectionTitle
          id="subjects-heading"
          step={1}
          title="Prepare each subject"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {sortedSubjects.map((slug) => {
            const s = getSubject(slug)!;
            const sheet = cheatSheetForSubject(slug);
            const isEnrolled = enrolledSlugs.includes(slug);
            const displayName = s.name.replace(/for Data Science\s*/i, "");

            return (
              <div key={slug} className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-fg/25">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-fg">{displayName}</h3>
                    {s.code && <p className="mt-0.5 font-mono text-xs text-muted">{s.code}</p>}
                  </div>
                  {isEnrolled && (
                    <span className="shrink-0 rounded-full border border-amber-300/80 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-950 dark:border-brand/40 dark:bg-brand/15 dark:text-brand">
                      My course
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {sheet && (
                    <Link href={cheatSheetHref(sheet)} className={buttonClass("secondary", "sm", "h-8 flex-1 justify-center px-3 text-xs font-semibold")}>
                      <BookOpen className="size-3.5" aria-hidden /> Cheat sheet
                    </Link>
                  )}
                  <Link href={practiceHref(slug, "qualifier")} className={buttonClass("primary", "sm", "h-8 flex-1 justify-center px-3 text-xs font-semibold")}>
                    Practice <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════ STEP 2: FULL PAPERS ═══════════ */}
      <section aria-labelledby="exams-heading" className="space-y-4">
        <SectionTitle
          id="exams-heading"
          step={2}
          title="Take a full timed paper"
        />
        <QualifierExamList items={examItems} />
      </section>
      <QualifierHistory answerKeys={allQualifierPapers.map(answerKey)} />
    </div>
  );
}

function SectionTitle({ id, step, title, action }: { id: string; step: number; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
      <div className="flex items-center gap-3">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fg text-xs font-bold text-bg">{step}</span>
        <div>
          <h2 id={id} className="text-base font-bold tracking-tight text-fg">{title}</h2>
        </div>
      </div>
      {action}
    </div>
  );
}
