import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { DemoExam } from "@/components/exam-showcase";
import { LandingFeatures } from "@/components/landing-features";
import { MathBackground } from "@/components/math-background";
import { ScrollPop } from "@/components/scroll-pop";
import { ReviewsSection } from "@/components/reviews-section";
import { ReviewActions } from "@/components/review-actions";
import { Venn } from "@/components/venn";
import { TermChart, type TermBar } from "@/components/term-chart";
import { HomeFaq } from "@/components/home-faq";
import { HeroAsk } from "@/components/hero-ask";
import { ButtonLink } from "@/components/ui";
import { PYQ_LEVELS, getPyqIndex } from "@/lib/pyq-index";
import { pyqTermHref, pyqTerms } from "@/lib/pyq-terms";
import { pyqLevelHref } from "@/lib/pyq-urls";
import { HOME_FAQ, SITE_DESCRIPTION, pageMetadata } from "@/lib/seo";

// Paper counts come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

// Matches the root layout's default title; Organization and WebSite JSON-LD come from the layout.
const TITLE = "BTechi: IIT Madras BS PYQs, Qualifier Mock Tests & Exam Portal";
export const metadata: Metadata = {
  ...pageMetadata({ title: TITLE, description: SITE_DESCRIPTION, path: "/" }),
  title: { absolute: TITLE },
};

// Same questions and answers as the FAQ rendered below, for Google and AI answer engines.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

// Hairline header shared by the sections below the exam screen.
function SectionHead({ title, children, action }: { title?: string; children?: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-t border-border pt-5 md:mb-12 md:flex-row md:items-end md:justify-between">
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight font-extrabold tracking-tight">{children ?? title}</h2>
      {action}
    </div>
  );
}

export default async function HomePage() {
  const { pyqTotals, pyqCourses } = await getPyqIndex();
  // Archive size at the end of each IITM term, oldest first; each bar opens that term's papers.
  let runningTotal = 0;
  const terms: TermBar[] = pyqTerms(pyqCourses).map((t) => ({
    year: t.year,
    month: t.month,
    papers: (runningTotal += t.papers.length),
    href: pyqTermHref(t.slug),
  }));

  return (
    <>
      {/* ───────── Hero: text only ───────── */}
      {/* Pulled up under the sticky navbar, which is see-through at the top. */}
      <section className="relative isolate -mt-16 flex min-h-[min(100svh,56rem)] items-center overflow-hidden pt-16">
        <MathBackground variant="hero" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,var(--bg)_40%,transparent_80%)]"
        />
        <div className="container-page flex w-full flex-col items-center py-[clamp(3.5rem,12svh,8rem)] text-center animate-fade-up">
          {/* Flagship Qualifier Pack Pill Banner */}
          <Link
            href="/qualifier"
            className="group mb-[clamp(1.25rem,4svh,2rem)] inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/80 px-5 py-2 text-xs sm:gap-3 sm:px-6 sm:py-2.5 sm:text-sm font-medium text-fg shadow-xs backdrop-blur-sm transition-all hover:border-brand/60 hover:bg-surface hover:shadow-sm"
          >
            <span className="font-semibold text-fg">Qualifier pack</span>
            <span className="text-muted">mock + cutoff check</span>
            <ArrowRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
          </Link>

          <h1 className="text-[clamp(2rem,min(5vw,7svh),3.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
            IITM BS past papers.
            <br />
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.05em] bottom-[-0.14em] -z-10 h-[0.12em] -rotate-1 rounded-sm bg-brand" />
              Real exam portal.
            </span>
          </h1>
          <p className="mt-[clamp(0.875rem,2.5svh,1.25rem)] max-w-2xl text-base text-muted">
            Free for IIT Madras BS students, from the Qualifier to the End Term.
          </p>
          {/* Ask in plain words: opens BTechi AI with the page on the right. */}
          <div className="mt-[clamp(1.5rem,4.5svh,2.25rem)] flex w-full justify-center">
            <HeroAsk />
          </div>
          <p className="mt-[clamp(1.25rem,3.5svh,1.75rem)] text-sm text-muted">
            <span className="font-bold text-fg tabular-nums">{pyqTotals.papers.toLocaleString("en-IN")}</span> papers
            <span className="mx-2 text-muted/50">·</span>
            <span className="font-bold text-fg tabular-nums">{pyqTotals.questions.toLocaleString("en-IN")}</span> questions
          </p>
        </div>
      </section>

      {/* ───────── The exam screen: pops up on scroll, and works ───────── */}
      {/* Questions load in the browser (DemoExam), so search engines describe BTechi, not a sample question. */}
      <section data-nosnippet className="px-4 pb-20 md:px-6 md:pb-28">
        <ScrollPop className="mx-auto max-w-[1200px]">
          {/* Clean card: thin border, soft shadow, nothing else. The screen scales itself to fit. */}
          <DemoExam className="shadow-[0_2px_6px_rgb(0_0_0/0.04),0_24px_60px_-24px_rgb(0_0_0/0.3)] ring-1 ring-black/10 dark:ring-white/15" />
        </ScrollPop>
      </section>

      {/* ───────── Features ───────── */}
      <section className="container-page pb-20 md:pb-28">
        <SectionHead title="Study what IITM actually asks." />
        <LandingFeatures />
      </section>

      {/* ───────── Archive growth ───────── */}
      {terms.length > 1 && (
        <section className="container-page pb-20 md:pb-28">
          <SectionHead title="Growing every term." />
          <TermChart bars={terms} />
          <p className="mt-6 text-sm text-muted">Total past papers after each IITM term</p>
        </section>
      )}

      {/* ───────── Reviews ───────── */}
      <section id="reviews" className="container-page scroll-mt-20 pb-20 md:pb-28">
        <SectionHead title="From the students." action={<ReviewActions />} />
        <ReviewsSection />
      </section>

      {/* ───────── Courses covered: both programmes, linked to each course's PYQs ───────── */}
      <section className="container-page pb-16 md:pb-24">
        <div className="border-t border-border pt-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h2 className="text-base font-bold tracking-tight md:text-lg">
                <Link href="/pyqs" className="hover:underline">
                  IIT Madras BS PYQs and mock tests for every level
                </Link>
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Qualifier, Quiz 1, Quiz 2 and End Term papers across Data Science and Management & Data Science, Foundation to Degree.
              </p>
            </div>
            {/* Quick aggregate summary stat ribbon */}
            <div className="flex shrink-0 items-center gap-2.5 text-[11px] text-muted md:text-xs">
              <span><strong className="font-semibold text-fg tabular-nums">{pyqCourses.length}</strong> courses</span>
              <span className="text-border">·</span>
              <span><strong className="font-semibold text-fg tabular-nums">{pyqTotals.papers}</strong> papers</span>
              <span className="text-border">·</span>
              <span><strong className="font-semibold text-fg tabular-nums">{pyqTotals.questions.toLocaleString("en-IN")}</strong> questions</span>
            </div>
          </div>
        </div>

        {/* Minimalist Archive Distribution Bar */}
        <div className="mt-3.5 flex flex-col gap-1.5">
          <div className="flex h-1 w-full overflow-hidden rounded-full bg-border/40">
            {PYQ_LEVELS.map((level, i) => {
              const count = pyqCourses.filter((c) => c.level === level.slug && c.papers.length > 0).reduce((s, c) => s + c.papers.length, 0);
              const pct = (count / pyqTotals.papers) * 100;
              const bg = i === 0 ? "bg-brand" : i === 1 ? "bg-fg/60 dark:bg-white/60" : "bg-fg/30 dark:bg-white/30";
              return (
                <div
                  key={level.slug}
                  className={`h-full ${bg} transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${level.name}: ${count} papers (${pct.toFixed(0)}%)`}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-muted">
            {PYQ_LEVELS.map((level, i) => {
              const count = pyqCourses.filter((c) => c.level === level.slug && c.papers.length > 0).reduce((s, c) => s + c.papers.length, 0);
              const dot = i === 0 ? "bg-brand" : i === 1 ? "bg-fg/60 dark:bg-white/60" : "bg-fg/30 dark:bg-white/30";
              return (
                <div key={level.slug} className="flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full ${dot}`} />
                  <span className="font-medium text-fg/75">{level.short}</span>
                  <span className="tabular-nums text-muted/70">({count} papers)</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-6">
          {PYQ_LEVELS.map((level) => {
            const courses = pyqCourses.filter((c) => c.level === level.slug && c.papers.length > 0);
            if (!courses.length) return null;
            const totalPapers = courses.reduce((sum, c) => sum + c.papers.length, 0);
            const totalQuestions = courses.reduce((sum, c) => sum + c.papers.reduce((p, q) => p + q.questions, 0), 0);
            const maxPapers = Math.max(...courses.map((c) => c.papers.length));

            return (
              <div key={level.slug} className="flex flex-col">
                <div className="border-b border-border/80 pb-1.5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-fg">
                      <Link href={pyqLevelHref(level.slug)} className="hover:text-brand hover:underline">
                        {level.name}
                      </Link>
                    </h3>
                    <span className="font-mono text-[11px] font-semibold text-fg tabular-nums">
                      {totalPapers} <span className="font-normal text-muted">papers</span>
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between text-[10px] text-muted">
                    <span>{courses.length} courses</span>
                    <span className="tabular-nums">{totalQuestions.toLocaleString("en-IN")} questions</span>
                  </div>
                </div>
                <ul className="group/list mt-2 space-y-0.5">
                  {courses.map((c) => (
                    <li key={c.slug} className="relative">
                      <Link
                        href={c.href}
                        className="group/item -mx-2 flex items-center justify-between rounded-lg px-2 py-0.5 text-xs text-muted transition-all duration-200 ease-out group-hover/list:opacity-60 hover:!opacity-100 hover:z-30 hover:scale-[1.06] hover:bg-surface hover:px-3 hover:py-2 hover:text-sm hover:font-semibold hover:text-fg hover:shadow-lg hover:ring-1 hover:ring-brand/40"
                      >
                        <span className="truncate transition-colors group-hover/item:text-fg">{c.name}</span>
                        <div className="ml-2 flex shrink-0 items-center gap-2">
                          <div className="hidden h-1 w-6 overflow-hidden rounded-full bg-border/40 sm:block transition-all group-hover/item:w-9 group-hover/item:h-1.5">
                            <div
                              className="h-full rounded-full bg-muted/40 transition-colors group-hover/item:bg-brand"
                              style={{ width: `${Math.max(15, Math.round((c.papers.length / maxPapers) * 100))}%` }}
                            />
                          </div>
                          <span className="font-mono text-[10.5px] text-muted/50 tabular-nums transition-all group-hover/item:text-xs group-hover/item:font-bold group-hover/item:text-brand">
                            {c.papers.length}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── FAQ: answers for search and AI assistants, mirrored in FAQPage JSON-LD ───────── */}
      <section className="container-page pb-20 md:pb-28">
        <h2 className="border-t border-border pt-5 text-xl font-extrabold tracking-tight md:text-2xl">IIT Madras BS prep: frequently asked questions</h2>
        <HomeFaq items={HOME_FAQ} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      </section>
      {/* ───────── Closing CTA ───────── */}
      <section className="container-page pb-20 md:pb-28">
        <div className="grid items-center gap-8 border-t border-border pt-10 md:pt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
          {/* Fills its column, capped by width and by screen height so it fits short laptop screens too. */}
          <Venn className="mx-auto h-auto w-[min(100%,22rem)] sm:w-[min(100%,26rem,50svh)] lg:w-[min(100%,30rem,60svh)]" />
          <div className="text-center lg:text-left">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-extrabold tracking-tight">
              All three.
              <br />
              One place.
            </h2>
            <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <ButtonLink href="/exam" size="lg" className="w-full sm:w-auto">
                Start a mock exam <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/practice" size="lg" variant="secondary" className="w-full sm:w-auto">
                Practise PYQs
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
