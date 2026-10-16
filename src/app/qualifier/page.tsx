import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { QualifierHistory } from "@/components/qualifier-attempts";
import { PageFaq } from "@/components/page-faq";
import { QualifierExamList } from "@/components/qualifier-exam-list";
import { getSubject } from "@/lib/content";
import { cheatSheetForSubject, cheatSheetHref } from "@/lib/data/cheat-notes";
import { practiceHref } from "@/lib/pyq-practice";
import { getPapers } from "@/lib/papers";
import { getStudyScope } from "@/lib/study-scope";
import { PageHeader, buttonClass } from "@/components/ui";
import {
  QUALIFIER_CUTOFF,
  QUALIFIER_SUBJECTS,
  answerKey,
  mockMarks,
  mockQuestions,
} from "@/lib/qualifier";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS Qualifier Mock Test & PYQs: Maths, Stats, CT, English",
  description:
    "Free IIT Madras BS qualifier mock tests: real previous-year qualifier papers for Maths 1, Stats 1, Computational Thinking and English 1, timed like the real exam, with a cutoff check.",
  path: "/qualifier",
});

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


  return (
    <>
      <PageHeader
        crumbs={[{ label: "Qualifier Pack" }]}
        title="IIT Madras BS qualifier mock test"
        description={`Real qualifier PYQs for Maths 1, Stats 1, CT and English 1 · 4-hour exam · ${QUALIFIER_CUTOFF.perSubject}% in each subject · ${QUALIFIER_CUTOFF.average}% overall`}
      />
      <div className="container-page space-y-12 py-8">
        {/* Side by side on desktop so the whole pack fits in one screen. */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
          <section aria-labelledby="subjects-heading" className="space-y-5">
            <SectionTitle id="subjects-heading" title="Subjects" />
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
              {sortedSubjects.map((slug) => {
                const s = getSubject(slug)!;
                const sheet = cheatSheetForSubject(slug);
                return (
                  <li key={slug} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-fg">{s.name.replace(/for Data Science\s*/i, "")}</h3>
                      <p className="mt-1 text-xs text-muted">
                        {s.code && <span className="font-mono">{s.code}</span>}
                        {enrolledSlugs.includes(slug) && <span>{s.code && " · "}Your course</span>}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      {sheet && (
                        <Link
                          href={cheatSheetHref(sheet)}
                          aria-label={`Cheat sheet for ${s.name}`}
                          className={buttonClass("secondary", "sm", "h-8 px-3 text-xs font-semibold")}
                        >
                          <BookOpen className="size-3.5" aria-hidden /> <span className="hidden sm:inline">Cheat sheet</span>
                        </Link>
                      )}
                      <Link href={practiceHref(slug, "qualifier")} className={buttonClass("primary", "sm", "h-8 px-3 text-xs font-semibold")}>
                        Practice <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <QualifierExamList items={examItems} title="Full papers" />
        </div>
        <QualifierHistory answerKeys={allQualifierPapers.map(answerKey)} />
      </div>
      <PageFaq title="IIT Madras BS qualifier: frequently asked questions" items={QUALIFIER_FAQ} />
    </>
  );
}

const QUALIFIER_FAQ = [
  {
    q: "Is there a free IIT Madras BS qualifier mock test?",
    a: "Yes. The Qualifier Pack has full qualifier papers for Maths 1, Stats 1, Computational Thinking and English 1, including real previous-year papers. It is free and needs no account.",
  },
  {
    q: "What is the IIT Madras BS qualifier cutoff?",
    a: `For the General category you need at least ${QUALIFIER_CUTOFF.perSubject}% in every qualifier course and at least ${QUALIFIER_CUTOFF.average}% on average across the four courses. Cutoffs are lower for OBC, SC, ST and PwD candidates; check the official IIT Madras BS website for the current rules.`,
  },
  {
    q: "How long is the IITM BS qualifier exam?",
    a: "4 hours, with all four courses in one sitting. The official past papers here are timed the same way, and at the end you see if your score would clear the cutoff.",
  },
  {
    q: "Where can I get IITM BS qualifier PYQs?",
    a: "On this page. Press Practice next to a subject to practise its qualifier PYQs one by one, or start a full paper to sit all four subjects as a timed mock test.",
  },
];

function SectionTitle({ id, title }: { id: string; title: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
      <h2 id={id} className="text-base font-bold tracking-tight text-fg">
        {title}
      </h2>
    </div>
  );
}
