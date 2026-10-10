import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, CheckCircle2, Clock, ListChecks } from "lucide-react";
import { EndTermHistory, MockAction } from "@/components/qualifier-attempts";
import { Badge, PageHeader } from "@/components/ui";
import { END_TERM_SUBJECTS, endTermGroups, endTermPapers, endTermQuestionCount, endTermSittings, formatSittingDate } from "@/lib/end-term";
import { mockMarks, mockQuestions, paperHref } from "@/lib/qualifier";

export const metadata: Metadata = {
  title: "End Term PYQs: every IITM BS course",
  description:
    "Previous-year End Term papers for every IIT Madras BS course, Foundation to Degree, with the official answer key. Sit each paper in a timed exam portal and review your answers.",
  alternates: { canonical: "/pyqs/end-term" },
};

const SESSION_NAME = { FN: "Forenoon", AN: "Afternoon" } as const;

export default function EndTermPyqsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs", href: "/pyqs" }, { label: "End Term" }]}
        eyebrow="Previous-year questions · End Term"
        title="End Term papers, every course"
        description="Real IIT Madras BS End Term papers with the same questions, options and official answer key. Sit them one course at a time in the exam portal, then review every answer."
      >
        <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
          {[
            [String(END_TERM_SUBJECTS.length), "courses"],
            [String(endTermPapers.length), "papers"],
            [endTermQuestionCount.toLocaleString("en-IN"), "questions with answer key"],
            [String(endTermSittings.length), "exam sittings"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="sr-only">{l}</dt>
              <dd className="text-2xl font-bold tracking-tight tabular-nums">{v}</dd>
              <p className="text-sm text-muted">{l}</p>
            </div>
          ))}
        </dl>
      </PageHeader>

      <nav aria-label="Jump to level" className="sticky top-16 z-20 border-b border-border bg-bg/90 backdrop-blur">
        <div className="container-page">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 py-3 [scrollbar-width:none]">
            {endTermGroups.map((g) => (
              <a key={g.slug} href={`#${g.slug}`} className="shrink-0 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium hover:border-fg/30">
                {g.name} <span className="text-muted">{g.subjects.length}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container-page space-y-14 py-10 md:py-14">
        {endTermGroups.map((g) => (
          <section key={g.slug} id={g.slug} aria-labelledby={`${g.slug}-title`} className="scroll-mt-32">
            <div className="mb-5">
              <h2 id={`${g.slug}-title`} className="text-2xl font-bold tracking-tight">
                {g.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{g.description}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {g.subjects.map((s) => (
                <article key={s.slug} id={`end-term-${s.slug}`} className="card scroll-mt-32 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="eyebrow mb-1">{s.short}</p>
                      <h3 className="font-bold leading-snug">{s.name}</h3>
                    </div>
                    <Badge>{s.papers.length} papers</Badge>
                  </div>
                  <ul className="mt-4 divide-y divide-border border-t border-border">
                    {s.papers.map((p) => (
                      <li key={p.slug} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 sm:flex-nowrap">
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold">
                            {formatSittingDate(p.endTerm!.date)} <span className="font-normal text-muted">· {SESSION_NAME[p.endTerm!.session]}</span>
                          </p>
                          <p className="mt-0.5 flex flex-wrap gap-x-3 text-xs text-muted tabular-nums">
                            <span className="inline-flex items-center gap-1">
                              <ListChecks className="size-3.5" aria-hidden /> {mockQuestions(p).length} questions
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <BookOpenCheck className="size-3.5" aria-hidden /> {mockMarks(p)} marks
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="size-3.5" aria-hidden /> {p.durationMin} min
                            </span>
                            <span>{p.endTerm!.term} term</span>
                          </p>
                        </div>
                        <div className="shrink-0">
                          <MockAction slug={p.slug} href={paperHref(p)} single />
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <EndTermHistory />

      <section className="container-page pb-14 md:pb-20">
        <p className="flex items-start gap-2 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>
            BTechi is not affiliated with IIT Madras. Papers are reproduced from past End Term question papers with their official answer keys; figures,
            code and formulas that the papers typeset as images are shown as images. Numerical answers accept the same range as the official key. Subjective
            essay questions with no answer key are left out. Each paper is timed at {endTermPapers[0]?.durationMin} minutes, the shortest official session.
            Looking for the qualifier? See the <Link href="/qualifier" className="font-medium text-fg underline-offset-2 hover:underline">Qualifier Pack</Link>.
          </span>
        </p>
      </section>
    </>
  );
}
