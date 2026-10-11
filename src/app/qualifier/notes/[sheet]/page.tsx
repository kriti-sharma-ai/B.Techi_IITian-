import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, ListChecks, MonitorCheck, Repeat, ScrollText, Sigma, Target } from "lucide-react";
import { CheatReader, PrintButton, ReaderToc, ReaderToolbar, type TocItem } from "@/components/cheat-reader";
import { CheatSectionCard, Rich, sectionViews } from "@/components/cheat-sheet";
import { BookmarkButton, ShareButton } from "@/components/resource-actions";
import { Badge, Breadcrumbs } from "@/components/ui";
import { getSubject } from "@/lib/content";
import { cheatSheetHref, cheatSheetStats, cheatSheets, getCheatSheet, sheetKind } from "@/lib/data/cheat-notes";
import { practiceHref } from "@/lib/pyq-practice";
import { pyqCourseHref } from "@/lib/pyq-urls";
import type { CheatSheet } from "@/lib/types";

export const dynamicParams = false;
export const generateStaticParams = () => cheatSheets.map((s) => ({ sheet: s.slug }));

export async function generateMetadata({ params }: PageProps<"/qualifier/notes/[sheet]">): Promise<Metadata> {
  const sheet = getCheatSheet((await params).sheet);
  if (!sheet) return {};
  const subject = getSubject(sheet.subjectSlug)!;
  return {
    title: `${sheet.short} Cheat Notes & ${sheetKind(sheet).replace(/^./, (c) => c.toUpperCase())} for the Qualifier`,
    description: `${sheet.description} Free revision notes for ${subject.name} (${subject.code}), IIT Madras BS qualifier, weeks 1–4.`,
    alternates: { canonical: cheatSheetHref(sheet) },
  };
}

export default async function CheatSheetPage({ params }: PageProps<"/qualifier/notes/[sheet]">) {
  const sheet = getCheatSheet((await params).sheet);
  if (!sheet) notFound();
  const subject = getSubject(sheet.subjectSlug)!;
  const stats = cheatSheetStats(sheet);
  const href = cheatSheetHref(sheet);
  const toc: TocItem[] = [
    ...sheet.sections.map((s) => ({ id: s.id, title: s.title, week: s.week, hits: s.hits, views: sectionViews(s) })),
    { id: "last-minute", title: "Last-minute checklist" },
  ];
  const facts = [
    { icon: ListChecks, value: stats.sections, label: "topics" },
    { icon: Sigma, value: stats.quick, label: `${sheetKind(sheet).replace(" ", "-")} lines` },
    { icon: Repeat, value: stats.examples, label: "worked examples" },
    { icon: Clock, value: stats.minutes, label: "min read" },
  ];

  return (
    <CheatReader sheet={sheet.slug}>
      <div className="border-b border-border bg-surface">
        <div className="container-page py-7 md:py-10">
          <Breadcrumbs
            items={[
              { label: "Qualifier Pack", href: "/qualifier" },
              { label: "Cheat notes", href: "/qualifier/notes" },
              { label: sheet.short },
            ]}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brand">Qualifier · Weeks 1–4</Badge>
            <span className="font-mono text-xs text-muted">{subject.code}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {sheet.short} cheat notes <span className="text-muted">& {sheetKind(sheet)}</span>
          </h1>
          <p className="mt-2 max-w-2xl text-muted">{sheet.description}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-2">
                  <f.icon className="size-4" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-bold tabular-nums">{f.value}</span>
                  <span className="text-xs text-muted">{f.label}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2 print:hidden">
            <BookmarkButton
              withLabel
              item={{ kind: "note", id: `cheat-${sheet.slug}`, title: `${sheet.short} cheat notes`, href, subtitle: "Qualifier cheat notes" }}
            />
            <ShareButton title={`${sheet.short} cheat notes`} path={href} />
            <PrintButton />
          </div>
        </div>
      </div>

      <ReaderToolbar quickLabel={sheet.quickLabel} items={toc} />

      <div className="container-page grid gap-8 py-5 md:py-8 lg:grid-cols-[250px_minmax(0,1fr)] print:block">
        <ReaderToc items={toc} />
        <div id="cheat-content" className="cheat-content mx-auto w-full min-w-0 max-w-3xl space-y-4 sm:space-y-5 lg:mx-0">
          {sheet.sections.map((s) => (
            <CheatSectionCard key={s.id} section={s} />
          ))}
          <LastMinute sheet={sheet} />
          <TestYourself subjectSlug={subject.slug} />
          <SheetNav sheet={sheet} />
          <p className="text-[0.8em] text-muted">
            Formulas and conventions follow the IIT Madras BS course material for weeks 1–4. &ldquo;Every paper&rdquo; and &ldquo;Most papers&rdquo;
            count how often a topic appears in the qualifier papers on BTechi (January 2023 to May 2024). BTechi is not affiliated with IIT Madras.
          </p>
        </div>
      </div>
    </CheatReader>
  );
}

function LastMinute({ sheet }: { sheet: CheatSheet }) {
  return (
    <section id="last-minute" aria-labelledby="last-minute-title" className="card scroll-mt-36 overflow-hidden">
      <header className="border-b border-border bg-brand/15 px-4 py-4 sm:px-6">
        <p className="text-[0.75em] font-bold uppercase tracking-wider">Exam morning</p>
        <h2 id="last-minute-title" className="text-[1.25em] font-bold tracking-tight">
          Last-minute checklist
        </h2>
        <p className="mt-0.5 text-[0.88em] text-muted">The {sheet.lastMinute.length} things to read on the way to the exam centre.</p>
      </header>
      <ol className="divide-y divide-border">
        {sheet.lastMinute.map((item, i) => (
          <li key={i} className="flex gap-3.5 px-4 py-3 sm:px-6">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-[0.8em] font-bold text-bg tabular-nums">{i + 1}</span>
            <span className="min-w-0 pt-0.5 leading-relaxed">
              <Rich text={item} />
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TestYourself({ subjectSlug }: { subjectSlug: string }) {
  const links = [
    { href: pyqCourseHref(subjectSlug), icon: ScrollText, title: "Previous-year papers", text: "The real papers, official keys" },
    { href: practiceHref(subjectSlug, "qualifier"), icon: Target, title: "Practice", text: "Drill PYQs by topic" },
    { href: "/qualifier", icon: MonitorCheck, title: "Full mock", text: "All four courses, timed" },
  ];
  return (
    <div className="card p-4 sm:p-6 print:hidden">
      <p className="eyebrow">Now test yourself</p>
      <h2 className="mt-1 text-[1.15em] font-bold tracking-tight">Turn these notes into marks</h2>
      <p className="mt-1 text-[0.9em] text-muted">Sit a real paper in the exam portal, then come back to the Traps view for whatever you got wrong.</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {links.map((l) => (
          <Link key={l.title} href={l.href} className="card-hover flex items-center gap-3 rounded-xl border border-border p-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand/20">
              <l.icon className="size-4" aria-hidden />
            </span>
            <span className="min-w-0 text-sm leading-tight">
              <span className="block font-semibold">{l.title}</span>
              <span className="text-xs text-muted">{l.text}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SheetNav({ sheet }: { sheet: CheatSheet }) {
  const i = cheatSheets.indexOf(sheet);
  const prev = cheatSheets[i - 1];
  const next = cheatSheets[i + 1];
  return (
    <nav aria-label="Other cheat notes" className="grid grid-cols-2 gap-2 print:hidden">
      {prev ? (
        <Link href={cheatSheetHref(prev)} className="card card-hover flex items-center gap-2 p-4 text-sm">
          <ArrowLeft className="size-4 shrink-0 text-muted" aria-hidden />
          <span className="min-w-0">
            <span className="block text-xs text-muted">Previous</span>
            <span className="font-semibold">{prev.short}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={cheatSheetHref(next)} className="card card-hover flex items-center justify-end gap-2 p-4 text-right text-sm">
          <span className="min-w-0">
            <span className="block text-xs text-muted">Next</span>
            <span className="font-semibold">{next.short}</span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
        </Link>
      ) : (
        <Link href="/qualifier/notes" className="card card-hover flex items-center justify-end gap-2 p-4 text-right text-sm">
          <span className="min-w-0">
            <span className="block text-xs text-muted">Back to</span>
            <span className="font-semibold">All cheat notes</span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
        </Link>
      )}
    </nav>
  );
}
