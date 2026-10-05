import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BarChart3, ScrollText } from "lucide-react";
import { PyqCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { PyqAnalysis } from "@/components/pyq-analysis";
import { EmptyState, PageHeader, buttonClass } from "@/components/ui";
import { getSubject, pyqs } from "@/lib/content";
import { academicFilters, matchesAcademic, param } from "@/lib/filters";

export const metadata: Metadata = {
  title: "Previous Year Questions (PYQs)",
  description: "Previous year mid-sem and end-sem papers by subject and year, with most-repeated-topic analysis and practice mode.",
  alternates: { canonical: "/pyqs" },
};

export default async function PyqsPage({ searchParams }: PageProps<"/pyqs">) {
  const sp = await searchParams;
  const year = param(sp, "year");
  const exam = param(sp, "exam");
  const subject = param(sp, "subject");

  const list = pyqs
    .filter((p) => matchesAcademic(p.subjectSlug, sp) && (!year || String(p.year) === year) && (!exam || p.exam === exam))
    .sort((a, b) => b.year - a.year || a.subjectSlug.localeCompare(b.subjectSlug));
  const years = [...new Set(pyqs.map((p) => p.year))].sort((a, b) => b - a);
  const byYear = years.map((y) => ({ year: y, papers: list.filter((p) => p.year === y) })).filter((g) => g.papers.length);
  const subjectsWithPyqs = [...new Set(pyqs.map((p) => p.subjectSlug))];

  const filters = [
    ...academicFilters(sp, { units: false }),
    { name: "year", label: "Year", options: years.map((y) => ({ value: String(y), label: String(y) })) },
    { name: "exam", label: "Exam", options: ["Quiz 1", "Quiz 2", "End Term"].map((e) => ({ value: e, label: e })) },
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs" }]}
        title="Previous year questions"
        description="View the paper, download it, or practise it question by question with explanations."
      >
        <Suspense>
          <FilterBar filters={filters} />
        </Suspense>
      </PageHeader>
      <div className="container-page grid gap-10 py-8 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0">
          {byYear.length === 0 ? (
            pyqs.length === 0 ? (
              <EmptyState
                icon={<ScrollText className="size-6" />}
                title="No papers published yet."
                description="We're collecting Quiz 1, Quiz 2 and End Term papers for every course. Have one? Share it and help everyone."
                action={
                  <Link href="/contribute" className={buttonClass("secondary")}>
                    Contribute a paper →
                  </Link>
                }
              />
            ) : (
              <EmptyState icon={<ScrollText className="size-6" />} title="No papers match these filters." description="Try another year or exam." />
            )
          ) : (
            <div className="space-y-10">
              {byYear.map((g) => (
                <section key={g.year} aria-labelledby={`y-${g.year}`}>
                  <h2 id={`y-${g.year}`} className="mb-3 text-sm font-semibold text-muted">
                    {g.year}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {g.papers.map((p) => (
                      <PyqCard key={p.id} pyq={p} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>

        <aside id="analysis" className="scroll-mt-24 space-y-3">
          <h2 className="flex items-center gap-2 font-bold">
            <BarChart3 className="size-5" aria-hidden /> PYQ analysis
          </h2>
          {subject && pyqs.some((p) => p.subjectSlug === subject) ? (
            <PyqAnalysis subjectSlug={subject} />
          ) : (
            <div className="card p-5">
              <p className="text-sm text-muted">{subjectsWithPyqs.length ? "Pick a course to see which topics come up most often." : "Once papers are added, this shows the topics that repeat most across Quiz and End Term papers."}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {subjectsWithPyqs.map((s) => (
                  <li key={s}>
                    <Link
                      href={`/pyqs?subject=${s}#analysis`}
                      className="inline-block rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:border-fg/30"
                    >
                      {getSubject(s)?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
