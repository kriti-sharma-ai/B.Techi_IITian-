import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PyqHistory } from "@/components/qualifier-attempts";
import { PageHeader } from "@/components/ui";
import { PYQ_LEVELS, groupCourses, pyqCoursesForLevel, pyqTotals } from "@/lib/pyq-index";
import { pyqLevelHref } from "@/lib/pyq-urls";

export const metadata: Metadata = {
  title: "IIT Madras BS PYQs: Previous Year Papers for Every Course",
  description:
    "Previous year question papers for every IIT Madras BS course, Foundation to Degree: Qualifier and End Term papers with the official answer key. Sit each paper in a timed exam portal.",
  alternates: { canonical: "/pyqs" },
};

export default function PyqsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs" }]}
        eyebrow="Previous-year questions"
        title="Previous year papers"
        description="Real IIT Madras BS papers with the official answer key, organised by level and course. Pick a course, sit any paper in the timed exam portal, then review every answer."
      >
        <dl className="grid grid-cols-3 gap-6 sm:max-w-xl">
          {[
            [String(pyqTotals.courses), "courses"],
            [String(pyqTotals.papers), "papers"],
            [pyqTotals.questions.toLocaleString("en-IN"), "questions"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="sr-only">{l}</dt>
              <dd className="text-2xl font-bold tracking-tight tabular-nums">{v}</dd>
              <p className="text-sm text-muted">{l}</p>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="container-page space-y-14 py-10 md:py-14">
        {PYQ_LEVELS.map((level) => {
          const courses = pyqCoursesForLevel(level.slug);
          if (!courses.length) return null;
          const papers = courses.reduce((n, c) => n + c.papers.length, 0);
          return (
            <section key={level.slug} aria-labelledby={`level-${level.slug}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 id={`level-${level.slug}`} className="text-2xl font-bold tracking-tight">
                    <Link href={pyqLevelHref(level.slug)} className="hover:underline">
                      {level.name} PYQs
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {level.description} {courses.length} courses, {papers} papers.
                  </p>
                </div>
                <Link href={pyqLevelHref(level.slug)} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                  All {level.short} papers <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
              <div className="space-y-6">
                {groupCourses(courses).map((g) => (
                  <div key={g.name}>
                    <h3 className="mb-2.5 text-sm font-semibold text-muted">{g.name}</h3>
                    <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                      {g.courses.map((c) => (
                        <li key={c.slug}>
                          <Link href={c.href} className="card card-hover flex h-full flex-col p-4">
                            <span className="text-xs font-semibold text-muted">
                              {c.code ? <span className="font-mono">{c.code} · </span> : null}
                              {c.short}
                            </span>
                            <span className="mt-1 font-semibold leading-snug">{c.name}</span>
                            <span className="mt-auto pt-3 text-xs text-muted tabular-nums">
                              {c.papers.length} {c.papers.length === 1 ? "paper" : "papers"}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <PyqHistory />

      <section className="container-page pb-14 md:pb-20">
        <p className="flex items-start gap-2 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>
            BTechi is not affiliated with IIT Madras. Papers are reproduced from past question papers with their official answer keys. Want full-length
            qualifier mocks? See the{" "}
            <Link href="/qualifier" className="font-medium text-fg underline-offset-2 hover:underline">
              Qualifier Pack
            </Link>
            .
          </span>
        </p>
      </section>
    </>
  );
}
