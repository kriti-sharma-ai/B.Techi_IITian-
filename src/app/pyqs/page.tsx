import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { HomeFaq } from "@/components/home-faq";
import { PyqHistory } from "@/components/qualifier-attempts";
import { ScopeSwitch } from "@/components/study-scope";
import { PageHeader } from "@/components/ui";
import { PYQ_LEVELS, getPyqIndex, groupCourses } from "@/lib/pyq-index";
import { PYQ_SHEETS_HREF, pyqLevelHref } from "@/lib/pyq-urls";
import { getStudyCourse } from "@/lib/study-courses";
import { getStudyScope, keepScope, narrow, scopeLinks } from "@/lib/study-scope";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS PYQ: Previous Year Papers PDF with Answer Key",
  description: "Free IITM BS PYQs: Qualifier, Quiz 1, Quiz 2 and End Term papers for every Foundation, Diploma and Degree course, with the official answer key. Practise timed or save as PDF.",
  path: "/pyqs",
});

// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

// Answers to what students search next to "iit madras bs pyq". Rendered below and as FAQPage JSON-LD, so both match.
function pyqFaq(totals: { courses: number; papers: number }) {
  return [
    {
      q: "Where can I download IIT Madras BS PYQ PDFs?",
      a: "Open the question sheets for your course. Each paper is laid out like a printed paper with the official answer key at the end. Press Save PDF to keep it as a PDF or print it.",
    },
    {
      q: "Which IITM BS previous year papers are on BTechi?",
      a: `${totals.papers} papers from ${totals.courses} courses: Qualifier papers for the four qualifier courses, and Quiz 1, Quiz 2 and End Term papers at Foundation, Diploma and Degree level. OPPE programming exams are not covered yet.`,
    },
    {
      q: "Do the IITM BS PYQs come with answers?",
      a: "Yes. Every paper has the official IIT Madras answer key. In the exam portal your answers are checked against it, and you can review every question after you submit.",
    },
    {
      q: "Are the PYQs free?",
      a: "Yes. Every paper is free and you can take any paper without an account. BTechi is a student project, not affiliated with IIT Madras.",
    },
  ];
}

export default async function PyqsPage({ searchParams }: PageProps<"/pyqs">) {
  const sp = await searchParams;
  const [{ pyqCourses, pyqTotals }, scope] = await Promise.all([getPyqIndex(), getStudyScope(sp)]);
  const scoped = narrow(scope, pyqCourses, (c) => c.slug);
  // Profile courses without papers, named so the student knows they weren't missed.
  const noPapers = scoped.narrowed
    ? scope.courses.filter((slug) => !pyqCourses.some((c) => c.slug === slug)).map((slug) => getStudyCourse(slug)!.name)
    : [];
  const faq = pyqFaq(pyqTotals);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs" }]}
        eyebrow="Previous year question papers"
        title="IIT Madras BS PYQs"
        description="Real IITM BS Qualifier, Quiz 1, Quiz 2 and End Term papers with the official answer key, organised by level and course. Sit any paper in the timed exam portal, or save its question sheet as a PDF."
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
        <Link href={PYQ_SHEETS_HREF} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
          <FileText className="size-4" aria-hidden /> PYQ PDFs: question sheets with answer key <ArrowRight className="size-4" aria-hidden />
        </Link>
      </PageHeader>

      <div className="container-page space-y-14 py-10 md:py-14">
        {scoped.mine > 0 && (
          <div className="mb-8 space-y-3 md:mb-6">
            <ScopeSwitch list={scoped} links={scopeLinks("/pyqs", sp)} />
            {noPapers.length > 0 && (
              <p className="text-sm text-muted">No past papers yet for {new Intl.ListFormat("en").format(noPapers)}.</p>
            )}
          </div>
        )}
        {PYQ_LEVELS.map((level) => {
          const courses = scoped.items.filter((c) => c.level === level.slug);
          if (!courses.length) return null;
          const papers = courses.reduce((n, c) => n + c.papers.length, 0);
          return (
            <section key={level.slug} aria-labelledby={`level-${level.slug}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 id={`level-${level.slug}`} className="text-2xl font-bold tracking-tight">
                    <Link href={keepScope(pyqLevelHref(level.slug), scope)} className="hover:underline">
                      {level.name} PYQs
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {level.description} {courses.length} courses, {papers} papers.
                  </p>
                </div>
                <Link href={keepScope(pyqLevelHref(level.slug), scope)} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                  {scoped.narrowed ? "Your" : "All"} {level.short} papers <ArrowRight className="size-4" aria-hidden />
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

      <section className="container-page pb-10 md:pb-14">
        <h2 className="border-t border-border pt-5 text-xl font-bold tracking-tight md:text-2xl">IIT Madras BS PYQs: frequently asked questions</h2>
        <HomeFaq items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      </section>

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
