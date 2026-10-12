import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, ChevronDown, Layers, PenLine, Star, type LucideIcon } from "lucide-react";
import { ExamShowcase } from "@/components/exam-showcase";
import { MathBackground } from "@/components/math-background";
import { ScrollPop } from "@/components/scroll-pop";
import { ReviewsSection } from "@/components/reviews-section";
import { ButtonLink } from "@/components/ui";
import { REVIEW_SUMMARY } from "@/lib/data/reviews";
import { getDemoExam } from "@/lib/demo-exam";
import { PYQ_LEVELS, getPyqIndex } from "@/lib/pyq-index";
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

const features: { icon: LucideIcon; title: string; text: string; href: string; cta: string }[] = [
  {
    icon: Layers,
    title: "Exam Portal",
    text: "Sit timed End Term and Quiz papers, 1 to 4 subjects at once, with a calculator.",
    href: "/exam",
    cta: "Open Exam Portal",
  },
  {
    icon: PenLine,
    title: "Practice",
    text: "One subject at a time: answer past questions and see the answer right away.",
    href: "/practice",
    cta: "Start practising",
  },
  {
    icon: Award,
    title: "Qualifier Pack",
    text: "Cheat sheets and full 4-hour qualifier papers with the cutoff check.",
    href: "/qualifier",
    cta: "Open qualifier pack",
  },
];

export default async function HomePage() {
  const [{ pyqCourses, pyqTotals }, demo] = await Promise.all([getPyqIndex(), getDemoExam()]);

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
        <div className="container-page flex w-full flex-col items-center py-[clamp(2.5rem,8svh,6rem)] text-center animate-fade-up">
          {/* Flagship Qualifier Pack Pill Banner */}
          <Link
            href="/qualifier"
            className="group mb-[clamp(1rem,3svh,1.5rem)] inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-fg shadow-xs backdrop-blur-sm transition-all hover:border-brand/60 hover:bg-surface hover:shadow-sm"
          >
            <span className="flex size-2 shrink-0 rounded-full bg-brand animate-pulse" />
            <span className="font-semibold text-fg">Qualifier Exam Pack</span>
            <span className="hidden sm:inline text-muted/60">·</span>
            <span className="hidden sm:inline text-muted">4-Course Mock & Cutoff Evaluator</span>
            <ArrowRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
          </Link>

          <h1 className="text-[clamp(2.4rem,min(6.5vw,9svh),4.5rem)] leading-[1.05] font-extrabold tracking-tight">
            Sit the real exam
            <br />
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.15em] bottom-[-0.04em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
              before exam day.
            </span>
          </h1>
          <p className="mt-[clamp(1rem,3svh,1.5rem)] max-w-2xl text-balance text-[clamp(1rem,min(1.6vw,2.4svh),1.25rem)] text-muted">
            Real IIT Madras BS previous-year papers for Data Science and Applications and Management and Data Science, in an exam portal that works like the real one.
          </p>
          <div className="mt-[clamp(1.25rem,4svh,2rem)] flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/exam" size="lg">
              Start a mock exam <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/practice" size="lg" variant="secondary">
              Practise PYQs
            </ButtonLink>
          </div>
          <p className="mt-[clamp(1rem,3svh,1.5rem)] flex flex-wrap items-center justify-center gap-x-1.5 text-sm text-muted">
            <span className="inline-flex items-center gap-1 font-semibold text-fg">
              <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
              Rated {REVIEW_SUMMARY.average.toFixed(1)}/5 by students
            </span>
            <span aria-hidden>·</span>
            {pyqTotals.papers.toLocaleString("en-IN")} papers · {pyqTotals.questions.toLocaleString("en-IN")} questions · official answer keys
          </p>
        </div>
      </section>

      {/* ───────── The exam screen: pops up on scroll, and works ───────── */}
      {demo.length > 0 && (
        <section className="px-4 pb-16 md:px-6 md:pb-24">
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
      <section className="container-page pb-16 md:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text, href, cta }) => (
            <Link key={href} href={href} className="card card-hover group flex flex-col p-6">
              <span className="grid size-10 place-items-center rounded-xl bg-brand text-brand-ink">
                <Icon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-1 flex-1 text-muted">{text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                {cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── Trust & Metrics Proof Bar ───────── */}
      <section className="container-page pb-12 sm:pb-16">
        <div className="rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-2 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg tabular-nums">{pyqTotals.papers}+</p>
              <p className="mt-1 text-xs sm:text-sm text-muted font-medium">IITM Past Papers</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg tabular-nums">{pyqTotals.questions.toLocaleString("en-IN")}+</p>
              <p className="mt-1 text-xs sm:text-sm text-muted font-medium">Verified Questions</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg tabular-nums">100% Free</p>
              <p className="mt-1 text-xs sm:text-sm text-muted font-medium">Open Student Initiative</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg tabular-nums">TCS iON</p>
              <p className="mt-1 text-xs sm:text-sm text-muted font-medium">Accurate Mock Simulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Rolling Unstructured Reviews ───────── */}
      <ReviewsSection />

      {/* ───────── Courses covered: both programmes, linked to each course's PYQs ───────── */}
      <section className="container-page border-t border-border/50 py-16 md:py-24">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">PYQs and mock tests for every IIT Madras BS level</h2>
        <p className="mt-2 max-w-3xl text-muted">
          For the IIT Madras BS in Data Science and Applications and the BS in Management and Data Science: Qualifier, Quiz 1, Quiz 2 and End Term papers,
          from Foundation to Degree level.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {PYQ_LEVELS.map((level) => {
            const courses = pyqCourses.filter((c) => c.level === level.slug && c.papers.length > 0);
            if (!courses.length) return null;
            return (
              <div key={level.slug}>
                <h3 className="font-bold">
                  <Link href={pyqLevelHref(level.slug)} className="hover:underline">
                    {level.name} PYQs
                  </Link>
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {courses.map((c) => (
                    <li key={c.slug}>
                      <Link href={c.href} className="text-muted hover:text-fg hover:underline">
                        {c.name} previous year papers
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
      <section className="container-page pb-16 md:pb-24">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">IIT Madras BS prep: frequently asked questions</h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border/80 bg-surface/60">
          {HOME_FAQ.map(({ q, a }) => (
            <details key={q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <h3>{q}</h3>
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-2 text-muted">{a}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      </section>
    </>
  );
}
