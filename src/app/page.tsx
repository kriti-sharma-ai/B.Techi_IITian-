import Link from "next/link";
import { ArrowRight, Award, Layers, PenLine, Sigma, type LucideIcon } from "lucide-react";
import { ExamShowcase } from "@/components/exam-showcase";
import { MathBackground } from "@/components/math-background";
import { ScrollPop } from "@/components/scroll-pop";
import { ReviewsSection } from "@/components/reviews-section";
import { ButtonLink } from "@/components/ui";
import { getDemoExam } from "@/lib/demo-exam";
import { getPyqIndex } from "@/lib/pyq-index";

// Paper counts come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

const features: { icon: LucideIcon; title: string; text: string; href: string; cta: string }[] = [
  {
    icon: Layers,
    title: "Exam Portal",
    text: "Simulate timed 1 to 4 subject exams with official countdown and calculator.",
    href: "/exam",
    cta: "Launch mock test",
  },
  {
    icon: PenLine,
    title: "PYQ practice",
    text: "Single-subject learning with past paper PDFs, repeated questions, and drills.",
    href: "/practice",
    cta: "Start practising",
  },
  {
    icon: Award,
    title: "Qualifier Pack",
    text: "Full-length 4-course timed qualifier papers with cutoff evaluation.",
    href: "/qualifier",
    cta: "Open qualifier pack",
  },
];

export default async function HomePage() {
  const [{ pyqTotals }, demo] = await Promise.all([getPyqIndex(), getDemoExam()]);

  return (
    <>
      {/* ───────── Hero: text only ───────── */}
      {/* Pulled up under the sticky navbar, which is see-through at the top. */}
      <section className="relative isolate -mt-16 overflow-hidden pt-16">
        <MathBackground variant="hero" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,var(--bg)_40%,transparent_80%)]"
        />
        <div className="container-page flex flex-col items-center pt-20 pb-16 text-center md:pt-28 md:pb-20 animate-fade-up">
          {/* Flagship Qualifier Pack Pill Banner */}
          <Link
            href="/qualifier"
            className="group mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-fg shadow-xs backdrop-blur-sm transition-all hover:border-brand/60 hover:bg-surface hover:shadow-sm"
          >
            <span className="flex size-2 shrink-0 rounded-full bg-brand animate-pulse" />
            <span className="font-semibold text-fg">Qualifier Exam Pack</span>
            <span className="hidden sm:inline text-muted/60">·</span>
            <span className="hidden sm:inline text-muted">4-Course Mock & Cutoff Evaluator</span>
            <ArrowRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
          </Link>

          <h1 className="text-[2.6rem] leading-[1.05] font-extrabold tracking-tight md:text-7xl">
            Sit the real exam
            <br />
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.15em] bottom-[-0.04em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
              before exam day.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">Real IITM BS previous-year papers, in an exam portal that works like the real one.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/exam" size="lg">
              Start a mock exam <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/practice" size="lg" variant="secondary">
              Practise PYQs
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-muted">
            {pyqTotals.papers.toLocaleString("en-IN")} papers · {pyqTotals.questions.toLocaleString("en-IN")} questions · official answer keys
          </p>
        </div>
      </section>

      {/* ───────── The exam screen: pops up on scroll, and works ───────── */}
      {demo.length > 0 && (
        <section className="px-3 pb-16 md:px-6 md:pb-24">
          <ScrollPop className="mx-auto max-w-[1200px]">
            {/* Clean card: thin border, soft shadow, nothing else. */}
            <div className="rounded-2xl shadow-[0_2px_6px_rgb(0_0_0/0.04),0_24px_60px_-24px_rgb(0_0_0/0.3)] ring-1 ring-black/10 dark:ring-white/15">
              <ExamShowcase sections={demo} />
            </div>
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
    </>
  );
}
