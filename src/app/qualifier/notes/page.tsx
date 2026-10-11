import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartColumn, Flame, Languages, Sigma, Sunrise, Workflow, type LucideIcon } from "lucide-react";
import { Badge, Breadcrumbs, SectionHeader, buttonClass } from "@/components/ui";
import { getSubject } from "@/lib/content";
import { cheatSheetHref, cheatSheetStats, cheatSheets, sheetKind } from "@/lib/data/cheat-notes";
import { QUALIFIER_CUTOFF } from "@/lib/data/qualifier-meta";

export const metadata: Metadata = {
  title: "Qualifier Cheat Notes & Formula Sheets: Maths I, Stats I, CT, English I",
  description:
    "Free IIT Madras BS qualifier cheat notes: every formula, rule and repeating PYQ pattern for Mathematics I, Statistics I, Computational Thinking and English I (weeks 1–4). Made for revising on your phone.",
  alternates: { canonical: "/qualifier/notes" },
};

const ICONS: Record<string, LucideIcon> = { "maths-1": Sigma, "stats-1": ChartColumn, ct: Workflow, "english-1": Languages };

/** The final week, day by day. A day links to its cheat sheet (`sheet`) or to `href`. */
const PLAN: { day: string; sheet?: string; href?: string; title: string; text: string }[] = [
  { day: "Day 1", sheet: "maths-1", title: "Maths I · weeks 1–2", text: "Sets, Venn counting, relations, functions, lines. Then one Maths PYQ paper." },
  { day: "Day 2", sheet: "maths-1", title: "Maths I · weeks 3–4", text: "Quadratics and polynomial graphs. Redo every question you got wrong yesterday." },
  { day: "Day 3", sheet: "stats-1", title: "Stats I · weeks 1–2", text: "Data types, scales, categorical charts. Then one Stats PYQ paper." },
  { day: "Day 4", sheet: "stats-1", title: "Stats I · weeks 3–4", text: "Mean through correlation. Work percentile and wrong-value problems by hand." },
  { day: "Day 5", sheet: "ct", title: "Computational Thinking", text: "Every pattern. Dry-run each code block on three cards, then one CT paper." },
  { day: "Day 6", sheet: "english-1", title: "English I", text: "Sounds, grammar, idioms, collocations. Then one English paper." },
  { day: "Day 7", href: "/qualifier", title: "Full mock", text: "One timed full mock in the exam portal, then the Traps view of all four sheets." },
  { day: "Exam day", title: "Checklists only", text: "Read the four last-minute checklists. No new topics." },
];

export default function CheatNotesPage() {
  const all = cheatSheets.map((sheet) => ({ sheet, subject: getSubject(sheet.subjectSlug)!, stats: cheatSheetStats(sheet) }));
  const totals = all.reduce(
    (t, { stats }) => ({ quick: t.quick + stats.quick, examples: t.examples + stats.examples, traps: t.traps + stats.traps }),
    { quick: 0, examples: 0, traps: 0 },
  );

  return (
    <>
      <header className="relative isolate border-b border-border bg-surface">
        <div className="container-page py-8 md:py-12">
          <Breadcrumbs items={[{ label: "Qualifier Pack", href: "/qualifier" }, { label: "Cheat notes" }]} />
          <Badge tone="brand" className="mb-4">
            Foundation · Qualifier Pack
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Qualifier cheat notes
            <br />
            <span className="relative inline-block">
              & formula sheets.
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-brand/60" aria-hidden />
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            What weeks 1–4 of Maths I, Stats I, CT and English I actually test, on four sheets: every formula, the patterns that repeat paper after paper,
            the traps that cost marks, and worked PYQ examples. Made to read on your phone.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
            {[
              ["4", "courses"],
              [String(totals.quick), "formula & rule-sheet lines"],
              [String(totals.examples), "worked examples"],
              [String(totals.traps), "traps & shortcuts"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="text-2xl font-bold tracking-tight tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="container-page py-12 md:py-16">
        <SectionHeader
          eyebrow="Pick a course"
          title="Four sheets, one qualifier"
          description="Every sheet has three views: the full notes, a formulas-only sheet, and traps & shortcuts."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {all.map(({ sheet, subject, stats }) => {
            const Icon = ICONS[sheet.slug] ?? Sigma;
            const href = cheatSheetHref(sheet);
            return (
              <article key={sheet.slug} className="card flex flex-col p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/20">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-muted">{subject.code}</p>
                    <h2 className="text-lg font-bold leading-snug tracking-tight text-balance sm:text-xl">
                      <Link href={href} className="hover:underline">
                        {subject.name}
                      </Link>
                    </h2>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted">{sheet.description}</p>
                <ul className="mt-4 grid grid-cols-4 gap-2 text-center">
                  {[
                    [stats.sections, "topics"],
                    [stats.quick, "sheet lines"],
                    [stats.examples, "examples"],
                    [stats.minutes, "min read"],
                  ].map(([value, label]) => (
                    <li key={label} className="rounded-xl bg-surface-2 px-1 py-2.5">
                      <span className="block font-bold tabular-nums">{value}</span>
                      <span className="block truncate text-[11px] text-muted">{label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex-1">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-muted">
                    <Flame className="size-3.5 text-red" aria-hidden /> In every paper
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stats.hot.map((s) => (
                      <Link
                        key={s.id}
                        href={`${href}#${s.id}`}
                        className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium transition-colors hover:border-fg/30"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  <Link href={href} className={buttonClass("primary", "md", "flex-1 sm:flex-none")}>
                    Read notes <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  <Link href={cheatSheetHref(sheet, "quick")} className={buttonClass("secondary", "md", "flex-1 sm:flex-none")}>
                    {sheet.quickLabel} only
                  </Link>
                  <Link href={cheatSheetHref(sheet, "traps")} className={buttonClass("ghost", "md", "max-sm:hidden")}>
                    Traps
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="formula-sheets" className="container-page scroll-mt-24 pb-12 md:pb-16">
        <SectionHeader
          eyebrow="Just the essentials"
          title="Formula & rule sheets"
          description="Each sheet's condensed view: formulas, tables and code patterns only. Print it or save it as a PDF from the reader."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {all.map(({ sheet, stats }) => {
            const Icon = ICONS[sheet.slug] ?? Sigma;
            return (
              <Link key={sheet.slug} href={cheatSheetHref(sheet, "quick")} className="card card-hover flex items-center gap-3 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block font-semibold">
                    {sheet.short} {sheetKind(sheet)}
                  </span>
                  <span className="text-xs text-muted">
                    {stats.quick} lines
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-12 md:pb-16">
        <SectionHeader eyebrow="Revision plan" title="The last 7 days before the qualifier" />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLAN.map((p) => {
            const sheet = cheatSheets.find((s) => s.slug === p.sheet);
            const href = sheet ? cheatSheetHref(sheet) : p.href;
            const body = (
              <>
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                  {p.day === "Exam day" && <Sunrise className="size-3.5" aria-hidden />}
                  {p.day}
                </span>
                <span className="mt-1.5 block font-bold">{p.title}</span>
                <span className="mt-1 block text-sm text-muted">{p.text}</span>
              </>
            );
            return (
              <li key={p.day}>
                {href ? (
                  <Link href={href} className="card card-hover block h-full p-4">
                    {body}
                  </Link>
                ) : (
                  <div className="card h-full p-4">{body}</div>
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-6 rounded-2xl bg-brand/15 p-5 ring-1 ring-brand/50 sm:p-6">
          <p className="font-bold">The rule that decides your result</p>
          <p className="mt-1 text-sm">
            You need at least <b>{QUALIFIER_CUTOFF.perSubject}% in every course</b> and <b>{QUALIFIER_CUTOFF.average}% on average</b> (general
            category). One weak course can sink a strong average, so lock in your weakest course first.
          </p>
        </div>
        <p className="mt-5 text-xs text-muted">
          Topic frequency comes from the qualifier papers on BTechi (January 2023 to May 2024). BTechi is not affiliated with IIT Madras; cutoffs and
          syllabus can change between terms, so confirm them in the official student handbook.
        </p>
      </section>
    </>
  );
}
