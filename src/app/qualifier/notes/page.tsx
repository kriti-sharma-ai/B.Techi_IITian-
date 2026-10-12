import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartColumn, Languages, Sigma, Workflow, type LucideIcon } from "lucide-react";
import { Breadcrumbs, buttonClass } from "@/components/ui";
import { ScopeSwitch } from "@/components/study-scope";
import { getSubject } from "@/lib/content";
import { cheatSheetHref, cheatSheetStats, cheatSheets } from "@/lib/data/cheat-notes";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";

export const metadata: Metadata = {
  title: "Qualifier Cheat Notes & Formula Sheets: Maths I, Stats I, CT, English I",
  description:
    "Free IIT Madras BS qualifier cheat notes: every formula, rule and repeating PYQ pattern for Mathematics I, Statistics I, Computational Thinking and English I (weeks 1–4). Made for revising on your phone.",
  alternates: { canonical: "/qualifier/notes" },
};

const ICONS: Record<string, LucideIcon> = { "maths-1": Sigma, "stats-1": ChartColumn, ct: Workflow, "english-1": Languages };

export default async function CheatNotesPage({ searchParams }: PageProps<"/qualifier/notes">) {
  const sp = await searchParams;
  const scope = await getStudyScope(sp);
  const scoped = narrow(scope, cheatSheets, (s) => s.subjectSlug);
  const all = scoped.items.map((sheet) => ({ sheet, subject: getSubject(sheet.subjectSlug)!, stats: cheatSheetStats(sheet) }));

  return (
    <div className="container-page max-w-5xl space-y-6 py-6 sm:py-8">
      <header>
        <Breadcrumbs items={[{ label: "Qualifier Pack", href: "/qualifier" }, { label: "Cheat sheets" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Cheat sheets</h1>
        <p className="mt-1 text-sm text-muted">Formulas, rules and common traps for each qualifier subject.</p>
      </header>

      <ScopeSwitch list={scoped} links={scopeLinks("/qualifier/notes", sp)} />

      <div className="grid gap-3 sm:grid-cols-2">
        {all.map(({ sheet, subject, stats }) => {
          const Icon = ICONS[sheet.slug] ?? Sigma;
          const href = cheatSheetHref(sheet);
          return (
            <article key={sheet.slug} className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-fg/25">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-surface-2">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-fg">
                    <Link href={href} className="hover:underline">
                      {subject.name.replace(/for Data Science\s*/i, "")}
                    </Link>
                  </h2>
                  <p className="mt-0.5 text-xs text-muted tabular-nums">
                    {subject.code && <span className="font-mono">{subject.code} · </span>}
                    {stats.minutes} min read
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={href} className={buttonClass("primary", "sm", "h-8 flex-1 justify-center px-3 text-xs font-semibold")}>
                  Notes <ArrowRight className="size-3.5" aria-hidden />
                </Link>
                <Link href={cheatSheetHref(sheet, "quick")} className={buttonClass("secondary", "sm", "h-8 flex-1 justify-center px-3 text-xs font-semibold")}>
                  {sheet.quickLabel}
                </Link>
                <Link href={cheatSheetHref(sheet, "traps")} className={buttonClass("secondary", "sm", "h-8 flex-1 justify-center px-3 text-xs font-semibold")}>
                  Traps
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <p className="border-t border-border/50 pt-4 text-xs text-muted">
        BTechi is not affiliated with IIT Madras. Check cutoffs and syllabus in the official student handbook.
      </p>
    </div>
  );
}
