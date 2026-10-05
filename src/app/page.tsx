import Link from "next/link";
import { ArrowRight, BookOpen, FileText, PenLine, PlayCircle, ScrollText } from "lucide-react";
import { MathBackground } from "@/components/math-background";
import { SearchBar } from "@/components/search-bar";
import { LevelExplorer } from "@/components/level-explorer";
import { ButtonLink, SectionHeader } from "@/components/ui";
import { PROGRAM_SLUG, getProgram } from "@/lib/content";

const resources = [
  { icon: FileText, t: "Notes", c: "bg-teal/10 text-teal", href: "/notes" },
  { icon: PlayCircle, t: "Videos", c: "bg-blue/10 text-blue", href: "/videos" },
  { icon: PenLine, t: "Practice", c: "bg-purple/10 text-purple", href: "/practice" },
  { icon: ScrollText, t: "PYQs", c: "bg-green/10 text-green", href: "/pyqs" },
  { icon: BookOpen, t: "Books", c: "bg-amber/10 text-amber", href: "/books" },
];

export default function HomePage() {
  const program = getProgram(PROGRAM_SLUG)!;
  const programHref = `/programs/${PROGRAM_SLUG}`;

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <MathBackground variant="hero" />
        {/* Soft fade behind the headline so the sketches never compete with it. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_50%_at_50%_45%,var(--bg)_35%,transparent_80%)]"
        />
        <div className="relative container-page flex flex-col items-center py-20 text-center md:py-28 animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs font-semibold">
            <span className="size-1.5 rounded-full bg-brand" />
            {program.university} · BS in Management &amp; Data Science
          </p>
          <h1 className="max-w-3xl text-[2.6rem] leading-[1.05] font-extrabold tracking-tight md:text-6xl">
            Your IITM BS degree,
            <br />
            organised in{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.15em] bottom-[-0.04em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
              one place.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted">Notes, videos, PYQs and practice for every course, week by week.</p>

          <SearchBar className="mt-9 w-full max-w-xl" />

          <Link href="#levels" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
            Or browse courses by level <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      <div className="relative isolate">
        <MathBackground variant="page" />

        {/* ───────── Levels + courses ───────── */}
        <section id="levels" className="container-page scroll-mt-20 py-14 md:py-20">
          <SectionHeader
            title="Pick your level"
            description="Foundation, Diploma or Degree. Open a level to see its courses."
            href={programHref}
            linkLabel="Program details"
          />
          <LevelExplorer programSlug={PROGRAM_SLUG} />
        </section>

        {/* ───────── What every course gets ───────── */}
        <section className="container-page pb-14 md:pb-20">
          <SectionHeader title="Every course includes" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {resources.map((x) => (
              <Link key={x.t} href={x.href} className="card card-hover flex items-center gap-3 p-4">
                <span className={`grid size-9 place-items-center rounded-lg ${x.c}`}>
                  <x.icon className="size-5" aria-hidden />
                </span>
                <span className="font-semibold">{x.t}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="container-page">
          {/* Chalkboard card: dark in both themes so it stands out on the light page. */}
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-12 text-white md:px-12 md:py-14">
            <div aria-hidden className="grid-pattern absolute inset-0 -z-10 opacity-30" />
            <div
              aria-hidden
              className="absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(255_210_28/0.28),transparent)]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 font-serif text-brand italic select-none">
              <span className="absolute top-6 right-[38%] rotate-12 text-4xl opacity-30">Σ</span>
              <span className="absolute right-8 bottom-6 -rotate-6 text-5xl opacity-25">∫</span>
              <span className="absolute bottom-8 left-[44%] text-sm text-white/25 max-md:hidden">P(A | B) = P(B | A) P(A) / P(B)</span>
              <span className="absolute top-8 right-10 text-sm text-white/25 max-md:hidden">x̄ = (1/n) Σ xᵢ</span>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  Track your progress, <span className="text-brand">for free.</span>
                </h2>
                <p className="mt-3 max-w-md text-white/70">Save courses and pick up where you left off.</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                  {["Save courses", "Track every week", "Get notified when content goes live"].map((t) => (
                    <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/85">
                      <span className="size-1.5 rounded-full bg-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <ButtonLink href="/signup" size="lg">
                  Create free account <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <Link
                  href={programHref}
                  className="inline-flex h-12 items-center rounded-xl border border-white/20 px-6 text-[15px] font-medium hover:bg-white/10"
                >
                  Explore first
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
