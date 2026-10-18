import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CheckCircle2, Repeat } from "lucide-react";
import { ScopeSwitch } from "@/components/study-scope";
import { PageHeader } from "@/components/ui";
import { PYQ_LEVELS, groupCourses } from "@/lib/pyq-index";
import { getQuestionSheets } from "@/lib/pyq-sheets";
import { PYQ_SHEETS_HREF } from "@/lib/pyq-urls";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS PYQs PDF: Year Wise, Topic Wise & Most Repeated, with Answers",
  description: "Every IIT Madras BS previous year paper set out to solve on paper: level wise, course wise, year wise and topic wise, plus each course's most repeated questions. Official answer key at the end of every sheet. Free to print or save as PDF.",
  path: PYQ_SHEETS_HREF,
});

// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export default async function QuestionSheetsPage({ searchParams }: PageProps<"/pyqs/sheets">) {
  const sp = await searchParams;
  const [sheets, scope] = await Promise.all([getQuestionSheets(), getStudyScope(sp)]);
  const all = sheets.sheetCourses();
  const scoped = narrow(scope, all, (s) => s.course.slug);
  const totals = {
    sheets: all.reduce((n, s) => n + s.count, 0),
    topics: all.reduce((n, s) => n + s.topics.length, 0),
    repeated: all.reduce((n, s) => n + (s.repeated?.types ?? 0), 0),
  };

  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs", href: "/pyqs" }, { label: "Question sheets" }]}
        eyebrow="Solve on paper"
        title="Question sheets"
        description="Every past paper laid out like a printed paper. Pick your course, then a paper, a year, a topic or the most repeated questions. Solve on paper, then check the answer key at the end."
      >
        <dl className="grid grid-cols-3 gap-6 sm:max-w-xl">
          {[
            [totals.sheets.toLocaleString("en-IN"), "sheets"],
            [String(totals.topics), "topics"],
            [String(totals.repeated), "repeated types"],
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
        {scoped.mine > 0 && <ScopeSwitch list={scoped} links={scopeLinks(PYQ_SHEETS_HREF, sp)} className="mb-8 md:mb-6" />}
        {PYQ_LEVELS.map((level) => {
          const list = scoped.items.filter((s) => s.course.level === level.slug);
          if (!list.length) return null;
          const byCourse = new Map(list.map((s) => [s.course.slug, s]));
          return (
            <section key={level.slug} id={level.slug} aria-labelledby={`level-${level.slug}`} className="scroll-mt-24">
              <h2 id={`level-${level.slug}`} className="text-2xl font-bold tracking-tight">
                {level.name}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {level.description} {list.length} courses.
              </p>
              <div className="mt-5 space-y-6">
                {groupCourses(list.map((s) => s.course)).map((g) => (
                  <div key={g.name}>
                    <h3 className="mb-2.5 text-sm font-semibold text-muted">{g.name}</h3>
                    <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                      {g.courses.map((c) => {
                        const s = byCourse.get(c.slug)!;
                        return (
                          <li key={c.slug}>
                            <Link href={s.href} className="card card-hover flex h-full flex-col p-4">
                              <span className="text-xs font-semibold text-muted">
                                {c.code ? <span className="font-mono">{c.code} · </span> : null}
                                {c.short}
                              </span>
                              <span className="mt-1 font-semibold leading-snug">{c.name}</span>
                              <span className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-3 text-xs text-muted tabular-nums">
                                <span>
                                  {c.papers.length} {c.papers.length === 1 ? "paper" : "papers"}
                                </span>
                                {s.topics.length > 0 && <span>{s.topics.length} topics</span>}
                                {s.repeated && (
                                  <span className="inline-flex items-center gap-1 font-semibold text-fg">
                                    <Repeat className="size-3" aria-hidden /> {s.repeated.types} repeated
                                  </span>
                                )}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <p className="flex items-start gap-2 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>
            Questions and answer keys are reproduced from the official IIT Madras BS papers; topics and repeated question types are BTechi&rsquo;s own
            grouping. BTechi is not affiliated with IIT Madras. Every sheet and cheat note is also on{" "}
            <Link href="/downloads" className="font-medium text-fg underline-offset-2 hover:underline">
              PDF downloads
            </Link>
            . Prefer a timed test?{" "}
            <Link href="/pyqs" className="font-medium text-fg underline-offset-2 hover:underline">
              Sit any paper in the exam portal
            </Link>
            .
          </span>
        </p>
      </div>
    </>
  );
}
