import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calculator,
  ChartColumn,
  CheckCircle2,
  Clock,
  Flag,
  Languages,
  LayoutGrid,
  ListChecks,
  MonitorCheck,
  Shuffle,
  Sigma,
  Target,
  Timer,
  TriangleAlert,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ExamPortalPreview } from "@/components/exam-portal-preview";
import { ExamTag } from "@/components/exam-tag";
import { MathBackground } from "@/components/math-background";
import { PostCard, toSummary } from "@/components/blog/post-card";
import { SearchBar } from "@/components/search-bar";
import { LevelExplorer } from "@/components/level-explorer";
import { SkillCard } from "@/components/skill-card";
import { ButtonLink, SectionHeader, buttonClass } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";
import { PROGRAM_SLUG, getProgram, skillCategories, skillCourses } from "@/lib/content";
import { cheatSheetHref, cheatSheetStats, cheatSheets } from "@/lib/data/cheat-notes";
import { getPapers } from "@/lib/papers";
import { PYQ_EXAMS, PYQ_LEVELS, getPyqIndex } from "@/lib/pyq-index";
import { DRILL_COUNT, PRACTICE_EXAMS, QUICK_COUNT } from "@/lib/pyq-practice";
import { QUALIFIER_CUTOFF } from "@/lib/qualifier";
import { loadContent } from "@/lib/cms";
import { sectionEnabled } from "@/lib/site";
import { SITE_URL } from "@/lib/utils";

// Paper counts come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

const fmt = (n: number) => n.toLocaleString("en-IN");

const SHEET_ICONS: Record<string, LucideIcon> = { "maths-1": Sigma, "stats-1": ChartColumn, ct: Workflow, "english-1": Languages };

const portalFeatures = [
  { icon: MonitorCheck, text: "The same layout as the test centre: section tabs, candidate panel, full screen" },
  { icon: LayoutGrid, text: "Colour-coded question palette with all five answer statuses" },
  { icon: Flag, text: "Save & Next, Mark for Review, Clear Response, just like the real portal" },
  { icon: Timer, text: "A countdown that survives a refresh and auto-submits at zero" },
  { icon: Calculator, text: "On-screen calculator and numeric keypad for NAT questions" },
];

const practiceModes = [
  { icon: Shuffle, title: "Quick practice", text: `${QUICK_COUNT} random questions with instant feedback` },
  { icon: Target, title: "Drill", text: `${DRILL_COUNT} questions to hammer one exam's pattern` },
  { icon: ListChecks, title: "Full test", text: "A whole paper, answers checked at the end" },
  { icon: Clock, title: "Mock exam", text: "Timed, in the exam portal, scored like the real thing" },
];

/** Decorative result card: course scores against the per-course cutoff line. */
const sampleResult = [
  { course: "Maths I", score: 72 },
  { course: "Stats I", score: 58 },
  { course: "CT", score: 81 },
  { course: "English I", score: 64 },
];

const faqs = [
  {
    q: "Are these real previous-year questions?",
    a: "Yes. Every paper comes from an actual IIT Madras BS qualifier, quiz or End Term sitting, and is marked with the official answer key.",
  },
  {
    q: "Is BTechi free?",
    a: "Yes. Mocks, PYQ practice and the cheat sheets are free. An account is free too and only saves your attempts.",
  },
  {
    q: "Do I need an account to practise?",
    a: "No. You can practise and take mocks straight away; results are saved in your browser. Sign in to keep them across devices.",
  },
  {
    q: "Is BTechi run by IIT Madras?",
    a: "No. BTechi is an independent student resource, not affiliated with or endorsed by IIT Madras. Always check rules and dates on the official portal.",
  },
];

export default async function HomePage() {
  await loadContent();
  const [index, papers] = await Promise.all([getPyqIndex(), getPapers()]);
  const program = getProgram(PROGRAM_SLUG)!;
  const programHref = `/programs/${PROGRAM_SLUG}`;
  const programs = sectionEnabled("programs");

  const { pyqTotals } = index;
  const mocks = papers.qualifierMocks.length;
  const pastQualifiers = papers.allQualifierPapers.length - mocks;
  const examCounts = PYQ_EXAMS.map((e) => ({ ...e, ...PRACTICE_EXAMS[e.slug], count: index.allPyqPapers.filter((p) => p.exam === e.slug).length })).filter(
    (e) => e.count > 0,
  );
  const levels = PYQ_LEVELS.map((l) => {
    const courses = index.pyqCoursesForLevel(l.slug);
    return {
      ...l,
      courses: courses.length,
      papers: courses.reduce((n, c) => n + c.papers.length, 0),
      top: [...courses].sort((a, b) => b.papers.length - a.papers.length).slice(0, 4),
    };
  }).filter((l) => l.courses > 0);
  const sheets = cheatSheets.map((sheet) => ({ sheet, stats: cheatSheetStats(sheet) }));
  const posts = getAllPosts().slice(0, 3).map(toSummary);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    url: SITE_URL,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden">
        <MathBackground variant="hero" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_30%_45%,var(--bg)_35%,transparent_80%)]"
        />
        <div className="relative container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] animate-fade-up">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs font-semibold">
              <span className="size-1.5 rounded-full bg-brand" />
              {program.university} BS · Qualifier, Quiz &amp; End Term prep
            </p>
            <h1 className="text-[2.6rem] leading-[1.05] font-extrabold tracking-tight md:text-6xl">
              Sit the real exam
              <br />
              <span className="relative whitespace-nowrap">
                <span className="absolute inset-x-[-0.15em] bottom-[-0.04em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
                before exam day.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              {fmt(pyqTotals.questions)} real previous-year questions from {fmt(pyqTotals.papers)} papers, in an exam portal that works like the
              one at the test centre. Plus cheat sheets for every qualifier course.
            </p>

            {sectionEnabled("search") && <SearchBar className="mt-8 w-full max-w-xl" />}

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/qualifier" size="lg">
                <Award className="size-4" aria-hidden /> Take a mock qualifier
              </ButtonLink>
              <ButtonLink href="/practice" size="lg" variant="secondary">
                Practise PYQs <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                [fmt(pyqTotals.papers), "real papers"],
                [fmt(pyqTotals.questions), "questions"],
                [String(pyqTotals.courses), "courses, all levels"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-2xl font-bold tracking-tight tabular-nums md:text-3xl">{v}</dd>
                  <p className="text-sm text-muted">{l}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden sm:block">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/15 blur-2xl" />
            <ExamPortalPreview className="-rotate-1" />
            <div
              aria-hidden
              className="absolute -bottom-6 -left-4 flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-semibold shadow-lg"
            >
              <CheckCircle2 className="size-4 text-green" /> Official answer keys
            </div>
          </div>
        </div>
      </section>

      <div className="relative isolate">
        <MathBackground variant="page" />

        {/* ───────── Feature strip ───────── */}
        <section className="container-page pb-6">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { n: "01", href: "#qualifier", title: "Qualifier Pack", text: "Real qualifier papers and full mocks, in exam mode." },
              { n: "02", href: "#practice", title: "PYQ practice", text: "Any level, any course: quizzes and End Terms." },
              { n: "03", href: "#cheat-sheets", title: "Cheat sheets", text: "Every formula and trap for the qualifier, on one page." },
            ].map((f) => (
              <a key={f.n} href={f.href} className="card card-hover group flex items-start gap-4 p-5">
                <span className="font-mono text-sm font-bold text-muted">{f.n}</span>
                <span className="flex-1">
                  <span className="block font-semibold">{f.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{f.text}</span>
                </span>
                <ArrowRight className="mt-0.5 size-4 shrink-0 rotate-90 text-muted transition-transform group-hover:translate-y-0.5" aria-hidden />
              </a>
            ))}
          </div>
        </section>

        {/* ───────── 1. Qualifier Pack ───────── */}
        <section id="qualifier" className="container-page scroll-mt-20 py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow mb-2">01 · Qualifier Pack</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Give your qualifier before the real one.</h2>
              <p className="mt-3 text-lg text-muted">
                Maths I, Stats I, Computational Thinking and English I. Practise {pastQualifiers} real past qualifier papers or take {mocks} full-length
                timed mocks, then see exactly where you stand against the cutoff.
              </p>
              <ul className="mt-6 space-y-3">
                {portalFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-3 text-[15px]">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand/20 text-fg">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="pt-0.5">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/qualifier" size="lg">
                  Open the Qualifier Pack <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <Link href="/practice?exam=qualifier" className="text-sm font-semibold hover:underline">
                  Or practise qualifier questions
                </Link>
              </div>
            </div>

            {/* Result card */}
            <div aria-hidden className="card overflow-hidden shadow-xl shadow-black/5">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <p className="eyebrow">Qualifier Mock 1 · Result</p>
                  <p className="mt-1 flex items-center gap-2 text-2xl font-bold">
                    <span className="grid size-8 place-items-center rounded-xl bg-green/10 text-green">
                      <CheckCircle2 className="size-5" />
                    </span>
                    Qualified
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold tabular-nums">69%</p>
                  <p className="text-xs text-muted">average · cutoff {QUALIFIER_CUTOFF.average}%</p>
                </div>
              </div>
              <ul className="space-y-4 p-5">
                {sampleResult.map((r) => (
                  <li key={r.course} className="grid grid-cols-[5rem_1fr_2.5rem] items-center gap-3 text-sm">
                    <span className="font-medium">{r.course}</span>
                    <span className="relative h-3 rounded-full bg-surface-2">
                      <span className="absolute inset-y-0 left-0 rounded-full bg-brand" style={{ width: `${r.score}%` }} />
                      <span className="absolute -inset-y-1 border-l-2 border-dashed border-fg/50" style={{ left: `${QUALIFIER_CUTOFF.perSubject}%` }} />
                    </span>
                    <span className="text-right font-semibold tabular-nums">{r.score}%</span>
                  </li>
                ))}
              </ul>
              <p className="flex items-center gap-2 border-t border-border bg-surface-2/50 px-5 py-3 text-xs text-muted">
                <span className="inline-block h-3 border-l-2 border-dashed border-fg/50" /> {QUALIFIER_CUTOFF.perSubject}% per-course cutoff · full solutions
                after every attempt
              </p>
            </div>
          </div>
        </section>

        {/* ───────── 2. PYQ practice ───────── */}
        <section id="practice" className="scroll-mt-20 border-y border-border bg-surface/70 py-14 md:py-20">
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="eyebrow mb-2">02 · PYQ practice</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Every level. Every course. Real papers.</h2>
              <p className="mt-3 text-lg text-muted">
                Pick your level and course, choose the exam, and practise straight from {fmt(pyqTotals.papers)} past papers with the official answer
                keys.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {examCounts.map((e) => (
                  <span key={e.slug} className="inline-flex items-center gap-1.5">
                    <ExamTag exam={e} />
                    <span className="text-sm text-muted tabular-nums">{e.count} papers</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {levels.map((l) => (
                <Link key={l.slug} href={`/practice?level=${l.slug}`} className="card card-hover group flex flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold">{l.short}</h3>
                    <span className="text-sm text-muted tabular-nums">
                      {l.courses} courses · {l.papers} papers
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{l.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {l.top.map((c) => (
                      <li key={c.slug} className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-muted">
                        {c.short}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold">
                    Practise {l.short} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold">Four ways to practise</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {practiceModes.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3 rounded-xl border border-border bg-bg p-4">
                    <Icon className="mt-0.5 size-5 shrink-0 text-muted" aria-hidden />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/practice" size="lg">
                Start practising <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <Link href="/pyqs" className="text-sm font-semibold hover:underline">
                Browse all papers
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── 3. Cheat sheets ───────── */}
        <section id="cheat-sheets" className="container-page scroll-mt-20 py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Formula sheet preview */}
            <div aria-hidden className="card order-last overflow-hidden shadow-xl shadow-black/5 lg:order-first">
              <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
                <ChartColumn className="size-4 text-muted" />
                <span className="text-sm font-semibold">Stats I · Formula sheet</span>
                <span className="ml-auto rounded-full bg-red/10 px-2 py-0.5 text-[11px] font-semibold text-red">Asked every paper</span>
              </div>
              <dl className="divide-y divide-border">
                {[
                  ["Mean", "x̄ = Σxᵢ / n"],
                  ["Relative frequency", "f / n"],
                  ["Pie-chart angle", "(f / n) × 360°"],
                  ["Class mark", "(lower + upper) / 2"],
                  ["Mean of grouped data", "Σfᵢxᵢ / Σfᵢ"],
                ].map(([label, f]) => (
                  <div key={label} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
                    <dt className="text-muted">{label}</dt>
                    <dd className="font-serif text-base italic">{f}</dd>
                  </div>
                ))}
              </dl>
              <p className="flex gap-2 border-t border-border bg-amber/10 px-5 py-3 text-sm">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber" />
                <span>
                  <span className="font-semibold">Trap:</span> mean makes no sense for categorical data, even when the categories are coded as numbers.
                </span>
              </p>
            </div>

            <div>
              <p className="eyebrow mb-2">03 · Cheat sheets</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">The whole qualifier syllabus, on four sheets.</h2>
              <p className="mt-3 text-lg text-muted">
                Every formula and rule, the patterns that repeat paper after paper, the traps that cost marks, and worked PYQ examples. Made for
                revising on your phone.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {sheets.map(({ sheet, stats }) => {
                  const Icon = SHEET_ICONS[sheet.slug] ?? Sigma;
                  return (
                    <Link key={sheet.slug} href={cheatSheetHref(sheet)} className="card card-hover group p-4">
                      <span className="flex items-center gap-2 font-semibold">
                        <Icon className="size-4 text-muted" aria-hidden /> {sheet.short}
                      </span>
                      <span className="mt-1 block text-xs text-muted">
                        {stats.quick} {sheet.quickLabel.toLowerCase()} · {stats.traps} traps · {stats.minutes} min read
                      </span>
                    </Link>
                  );
                })}
              </div>
              <Link href="/qualifier/notes" className={buttonClass("secondary", "lg", "mt-6")}>
                See all cheat sheets <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── How it works ───────── */}
        <section className="container-page pb-14 md:pb-20">
          <SectionHeader eyebrow="How it works" title="From first attempt to exam-ready" />
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Pick your exam", text: "Qualifier, Quiz 1, Quiz 2 or End Term, for the course you're taking this term." },
              { title: "Practise or sit a full paper", text: "Quick sets with instant feedback, or a timed paper in the exam portal." },
              { title: "Fix your weak spots", text: "See your score against the cutoff, read the solutions, revise from the cheat sheet, retake." },
            ].map((s, i) => (
              <li key={s.title} className="card p-5">
                <span className="grid size-8 place-items-center rounded-full bg-brand text-sm font-bold text-brand-ink">{i + 1}</span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── Levels + courses (full site only) ───────── */}
        {programs && (
          <section id="levels" className="container-page scroll-mt-20 pb-14 md:pb-20">
            <SectionHeader
              title="Pick your level"
              description="Foundation, Diploma or Degree. Open a level to see its courses."
              href={programHref}
              linkLabel="Program details"
            />
            <LevelExplorer programSlug={PROGRAM_SLUG} />
          </section>
        )}

        {/* ───────── Skills (full site only) ───────── */}
        {sectionEnabled("skills") && (
          <section className="container-page pb-14 md:pb-20">
            <SectionHeader
              eyebrow="New · BTechi Skills"
              title="Skills beyond the syllabus"
              description="Free, hands-on courses in Python, SQL, Excel, BI and AI, mapped to your degree."
              href="/skills"
              linkLabel="Browse all skills"
            />
            <div className="-mx-1 mb-5 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none]">
              {skillCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/skills?category=${c.slug}`}
                  className="shrink-0 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-fg/30 hover:text-fg"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[...skillCourses]
                .sort((a, b) => b.learners - a.learners)
                .slice(0, 4)
                .map((c) => (
                  <SkillCard key={c.slug} course={c} />
                ))}
            </div>
          </section>
        )}

        {/* ───────── Blog ───────── */}
        {posts.length > 0 && (
          <section className="container-page pb-14 md:pb-20">
            <SectionHeader eyebrow="From the blog" title="Guides for the IITM BS" href="/blog" linkLabel="All posts" />
            <div className="grid gap-5 md:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* ───────── FAQ ───────── */}
        <section className="container-page max-w-3xl pb-14 md:pb-20">
          <SectionHeader title="Questions" />
          <div className="card divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span aria-hidden className="text-xl leading-none text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="container-page">
          {/* Chalkboard card: follows the light/dark theme via design tokens. */}
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 text-fg md:px-12 md:py-14">
            <div aria-hidden className="grid-pattern absolute inset-0 -z-10 opacity-40 dark:opacity-30" />
            <div
              aria-hidden
              className="absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--math-accent)_28%,transparent),transparent)]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 font-serif text-[var(--math-accent)] italic select-none">
              <span className="absolute top-6 right-[38%] rotate-12 text-4xl opacity-30">Σ</span>
              <span className="absolute right-8 bottom-6 -rotate-6 text-5xl opacity-25">∫</span>
              <span className="absolute bottom-8 left-[44%] text-sm text-fg/25 max-md:hidden">P(A | B) = P(B | A) P(A) / P(B)</span>
              <span className="absolute top-8 right-10 text-sm text-fg/25 max-md:hidden">x̄ = (1/n) Σ xᵢ</span>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  Keep every attempt,{" "}
                  <span className="rounded-md bg-brand px-1.5 text-brand-ink [box-decoration-break:clone] dark:bg-transparent dark:px-0 dark:text-brand">
                    for free.
                  </span>
                </h2>
                <p className="mt-3 max-w-md text-muted">Sign in to save your scores and pick up on any device.</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                  {["Scores synced across devices", "Every attempt, paper by paper", "Solutions to review anytime"].map((t) => (
                    <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2/60 px-3 py-1 text-fg/85">
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
                  href="/qualifier"
                  className="inline-flex h-12 items-center rounded-xl border border-border px-6 text-[15px] font-medium hover:bg-surface-2"
                >
                  Try a mock first
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
