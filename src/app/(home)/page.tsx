import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ExamShowcase } from "@/components/exam-showcase";
import { LandingFeatures } from "@/components/landing-features";
import { MathBackground } from "@/components/math-background";
import { ScrollPop } from "@/components/scroll-pop";
import { ReviewsSection } from "@/components/reviews-section";
import { Venn } from "@/components/venn";
import { TermChart, type TermBar } from "@/components/term-chart";
import { ButtonLink } from "@/components/ui";
import { getDemoExam } from "@/lib/demo-exam";
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
function SectionHead({ title }: { title: string }) {
  return (
    <h2 className="mb-8 border-t border-border pt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight font-extrabold tracking-tight md:mb-12">
      {title}
    </h2>
  );
}

export default async function HomePage() {
  const [{ pyqTotals, pyqCourses }, demo] = await Promise.all([getPyqIndex(), getDemoExam()]);
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
            className="group mb-[clamp(1.75rem,5svh,2.75rem)] inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/80 px-5 py-2 text-xs sm:gap-3 sm:px-6 sm:py-2.5 sm:text-sm font-medium text-fg shadow-xs backdrop-blur-sm transition-all hover:border-brand/60 hover:bg-surface hover:shadow-sm"
          >
            <span className="flex size-2 shrink-0 rounded-full bg-brand animate-pulse" />
            <span className="font-semibold text-fg">Qualifier pack</span>
            <span className="text-muted">mock + cutoff check</span>
            <ArrowRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
          </Link>

          <h1 className="text-[clamp(2.25rem,min(6vw,8svh),4rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
            IITM BS past papers.
            <br />
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.05em] bottom-[-0.14em] -z-10 h-[0.12em] -rotate-1 rounded-sm bg-brand" />
              Real exam portal.
            </span>
          </h1>
          <ul className="mt-[clamp(2rem,6svh,3rem)] inline-flex flex-col items-start gap-1.5 text-sm text-muted sm:flex-row sm:items-center sm:gap-x-7 md:text-base">
            {["Data Science & Management", "Qualifier to End Term", "Official answer keys"].map((point) => (
              <li key={point} className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="size-3.5 shrink-0 text-brand md:size-4" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          {/* Phones: two equal full-width buttons, stacked. Wider: side by side. */}
          <div className="mt-[clamp(2rem,6svh,3rem)] flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center">
            <ButtonLink href="/exam" size="lg" className="w-full sm:w-auto">
              Start a mock exam <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/practice" size="lg" variant="secondary" className="w-full sm:w-auto">
              Practise PYQs
            </ButtonLink>
          </div>
          <p className="mt-[clamp(1.5rem,4svh,2.25rem)] text-sm text-muted md:text-base">
            <span className="font-bold text-fg tabular-nums">{pyqTotals.papers.toLocaleString("en-IN")}</span> papers
            <span className="mx-2 text-muted/50">·</span>
            <span className="font-bold text-fg tabular-nums">{pyqTotals.questions.toLocaleString("en-IN")}</span> questions
          </p>
        </div>
      </section>

      {/* ───────── The exam screen: pops up on scroll, and works ───────── */}
      {demo.length > 0 && (
        <section className="px-4 pb-20 md:px-6 md:pb-28">
          <ScrollPop className="mx-auto max-w-[1200px]">
            {/* Clean card: thin border, soft shadow, nothing else. The screen scales itself to fit. */}
            <ExamShowcase
              sections={demo}
              className="shadow-[0_2px_6px_rgb(0_0_0/0.04),0_24px_60px_-24px_rgb(0_0_0/0.3)] ring-1 ring-black/10 dark:ring-white/15"
            />
          </ScrollPop>
        </section>
      )}

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
          <p className="mt-6 text-sm text-muted">Total past papers after each IITM term. Tap a bar to open that term’s papers.</p>
        </section>
      )}

      {/* ───────── Reviews ───────── */}
      <section className="container-page pb-20 md:pb-28">
        <SectionHead title="From the students." />
        <ReviewsSection />
      </section>

      {/* ───────── Courses covered: both programmes, linked to each course's PYQs ───────── */}
      <section className="container-page pb-20 md:pb-28">
        <h2 className="border-t border-border pt-5 text-xl font-extrabold tracking-tight md:text-2xl">PYQs and mock tests for every IIT Madras BS level</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          For the IIT Madras BS in Data Science and Applications and the BS in Management and Data Science: Qualifier, Quiz 1, Quiz 2 and End Term papers,
          from Foundation to Degree level.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {PYQ_LEVELS.map((level) => {
            const courses = pyqCourses.filter((c) => c.level === level.slug && c.papers.length > 0);
            if (!courses.length) return null;
            return (
              <div key={level.slug}>
                <h3 className="text-sm font-bold">
                  <Link href={pyqLevelHref(level.slug)} className="hover:underline">
                    {level.name} PYQs
                  </Link>
                </h3>
                <ul className="mt-2 space-y-1 text-sm leading-snug">
                  {courses.map((c) => (
                    <li key={c.slug}>
                      <Link href={c.href} className="text-muted hover:text-fg hover:underline">
                        {c.name}
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
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border/80 bg-surface/60">
          {HOME_FAQ.map(({ q, a }) => (
            <details key={q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <h3>{q}</h3>
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
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
