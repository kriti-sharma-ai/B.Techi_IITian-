import Link from "next/link";
import { ArrowRight, Award, PenLine, Sigma, type LucideIcon } from "lucide-react";
import { ExamPortalPreview } from "@/components/exam-portal-preview";
import { MathBackground } from "@/components/math-background";
import { ButtonLink } from "@/components/ui";
import { getPyqIndex } from "@/lib/pyq-index";

// Paper counts come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

const features: { icon: LucideIcon; title: string; text: string; href: string; cta: string }[] = [
  {
    icon: Award,
    title: "Qualifier Pack",
    text: "Real qualifier papers and full mocks, timed, in exam mode.",
    href: "/qualifier",
    cta: "Take a mock",
  },
  {
    icon: PenLine,
    title: "PYQ practice",
    text: "Any level, any course. Quiz and End Term papers with answer keys.",
    href: "/practice",
    cta: "Start practising",
  },
  {
    icon: Sigma,
    title: "Cheat sheets",
    text: "Every formula and trap for Maths I, Stats I, CT and English I.",
    href: "/qualifier/notes",
    cta: "Open cheat sheets",
  },
];

export default async function HomePage() {
  const { pyqTotals } = await getPyqIndex();

  return (
    <div className="relative isolate overflow-hidden">
      <MathBackground variant="hero" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_30%_40%,var(--bg)_35%,transparent_80%)]"
      />

      {/* ───────── Hero ───────── */}
      <section className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] animate-fade-up">
        <div>
          <h1 className="text-[2.6rem] leading-[1.05] font-extrabold tracking-tight md:text-6xl">
            Sit the real exam
            <br />
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.15em] bottom-[-0.04em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
              before exam day.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted">Real IITM BS previous-year papers, in an exam portal that works like the real one.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/qualifier" size="lg">
              <Award className="size-4" aria-hidden /> Take a mock qualifier
            </ButtonLink>
            <ButtonLink href="/practice" size="lg" variant="secondary">
              Practise PYQs <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-muted">
            {pyqTotals.papers.toLocaleString("en-IN")} papers · {pyqTotals.questions.toLocaleString("en-IN")} questions · official answer keys
          </p>
        </div>
        <ExamPortalPreview className="hidden -rotate-1 sm:block" />
      </section>

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
    </div>
  );
}
