import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenCheck, Clock, FileText, KeyRound, Layers, ListChecks, MonitorCheck, Repeat } from "lucide-react";
import { EXAM_BADGE } from "@/components/pyq-papers";
import { PrintSheetButton } from "@/components/print-sheet-button";
import { QuestionPalette, SheetPaper } from "@/components/question-sheet";
import { Badge, Breadcrumbs, buttonClass } from "@/components/ui";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { getQuestionSheets, type QuestionSheet, type SheetKind } from "@/lib/pyq-sheets";
import { PYQ_SHEETS_HREF, pyqSheetsHref } from "@/lib/pyq-urls";

// Sheets render on first visit, then are cached like the other PYQ pages.
export const dynamicParams = true;
export const revalidate = 300;
export async function generateStaticParams() {
  return [];
}

async function load(params: Promise<{ level: string; course: string; sheet: string }>) {
  const { level, course, sheet } = await params;
  const s = (await getQuestionSheets()).getSheet(course, sheet);
  return s && s.course.level === level ? s : undefined;
}

const KIND_LABEL: Record<SheetKind, string> = { paper: "Past paper", year: "Year wise", topic: "Topic wise", repeated: "Most repeated" };

const metaTitle = (s: QuestionSheet) =>
  ({
    paper: `${s.course.short} ${s.title} Question Paper with Answer Key`,
    year: `${s.course.short} ${s.title.replace(/^All /, "")}: Every PYQ with Answers`,
    topic: `${s.course.short} PYQs on ${s.title} (Topic Wise, with Answers)`,
    repeated: `${s.course.short} Most Repeated PYQs, with Answers`,
  })[s.kind];

export async function generateMetadata({ params }: PageProps<"/pyqs/[level]/[course]/sheets/[sheet]">): Promise<Metadata> {
  const s = await load(params);
  if (!s) return {};
  return {
    title: metaTitle(s),
    description: `${s.questions} ${s.course.name} past questions (${s.marks} marks) from ${s.papers} IIT Madras BS ${s.papers === 1 ? "paper" : "papers"}, set out to solve on paper. Official answer key at the end.`,
    alternates: { canonical: s.href },
  };
}

export default async function SheetPage({ params }: PageProps<"/pyqs/[level]/[course]/sheets/[sheet]">) {
  const s = await load(params);
  if (!s) notFound();
  const c = s.course;
  const level = PYQ_LEVELS.find((l) => l.slug === c.level)!;
  const sheetsHref = pyqSheetsHref(c.slug);
  const exam = s.kind === "paper" ? s.groups[0].exam : undefined;
  const allQuestions = s.groups.flatMap((g) => g.questions);
  const facts = [
    { icon: ListChecks, value: s.questions, label: "questions" },
    { icon: BookOpenCheck, value: s.marks, label: "marks" },
    s.durationMin ? { icon: Clock, value: `${s.durationMin} min`, label: "time" } : { icon: FileText, value: s.papers, label: s.papers === 1 ? "paper" : "papers" },
    ...(s.kind === "repeated" ? [{ icon: Repeat, value: s.groups.length, label: "question types" }] : []),
  ];

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 py-7 md:py-9">
          <Breadcrumbs
            items={[
              { label: "PYQs", href: "/pyqs" },
              { label: "Question sheets", href: PYQ_SHEETS_HREF },
              { label: level.short, href: `${PYQ_SHEETS_HREF}#${level.slug}` },
              { label: c.short, href: sheetsHref },
              { label: s.title },
            ]}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brand">{KIND_LABEL[s.kind]}</Badge>
            {exam && <Badge tone={EXAM_BADGE[exam].tone}>{EXAM_BADGE[exam].label}</Badge>}
            <span className="text-xs text-muted">
              {c.code && <span className="font-mono">{c.code} · </span>}
              {c.name}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl text-fg">
            {c.short} <span className="text-muted">·</span> {s.title}
          </h1>
          <p className="mt-2 max-w-2xl text-muted text-sm sm:text-base">{s.description}</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-2 border border-border">
                  <f.icon className="size-4" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-bold tabular-nums">{f.value}</span>
                  <span className="text-xs text-muted">{f.label}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="#answer-key" className={buttonClass("secondary")}>
              <KeyRound className="size-4" aria-hidden /> Official Answer Key
            </a>
            <PrintSheetButton />
            {s.portalHref && (
              <Link href={s.portalHref} className={buttonClass("secondary")}>
                <MonitorCheck className="size-4" aria-hidden /> Sit in Exam Portal
              </Link>
            )}
            <Link href={sheetsHref} className={buttonClass("ghost")}>
              <Layers className="size-4" aria-hidden /> All {c.short} Sheets
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)_260px] items-start">
          {/* Left Column: Outline / Sections */}
          <aside aria-label="On this sheet" className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
              <p className="eyebrow mb-2">Paper Outline</p>
              {s.groups.length > 1 ? (
                <ol className="space-y-1 text-sm">
                  {s.groups.map((g) => (
                    <li key={g.id}>
                      <a href={`#${g.id}`} className="flex gap-2 rounded-lg px-2.5 py-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg">
                        <span className="min-w-0 flex-1 leading-snug">{g.title}</span>
                        <span className="shrink-0 text-xs tabular-nums text-muted font-mono font-semibold">Q{g.questions[0].n}</span>
                      </a>
                    </li>
                  ))}
                  <li className="pt-2 border-t border-border mt-1">
                    <a href="#answer-key" className="flex items-center justify-between rounded-lg px-2.5 py-1.5 font-bold text-fg transition-colors hover:bg-surface-2">
                      <span>Answer Key</span>
                      <span className="text-xs text-muted">↓</span>
                    </a>
                  </li>
                </ol>
              ) : (
                <div className="text-xs text-muted space-y-2.5">
                  <p>Official paper questions arranged in standard order.</p>
                  <a href="#answer-key" className="flex items-center gap-1.5 font-bold text-fg hover:underline">
                    Jump to Answer Key ↓
                  </a>
                </div>
              )}
            </div>
          </aside>

          {/* Center Column: The Exam Paper (Centered) */}
          <div className="w-full min-w-0 max-w-[860px] mx-auto space-y-6">
            <SheetPaper sheet={s} />

            {(s.prev || s.next) && (
              <nav aria-label="More sheets" className="grid gap-3 sm:grid-cols-2">
                {s.prev ? (
                  <Link href={s.prev.href} className="card card-hover flex items-center gap-3 p-4">
                    <ArrowLeft className="size-4 shrink-0 text-muted" aria-hidden />
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">Previous</span>
                      <span className="block font-semibold leading-snug">{s.prev.title}</span>
                    </span>
                  </Link>
                ) : (
                  <span className="hidden sm:block" />
                )}
                {s.next && (
                  <Link href={s.next.href} className="card card-hover flex items-center justify-end gap-3 p-4 text-right">
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">Next</span>
                      <span className="block font-semibold leading-snug">{s.next.title}</span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
                  </Link>
                )}
              </nav>
            )}

            <p className="text-xs text-muted text-center pt-2">
              Questions and answer keys are reproduced from the official IIT Madras BS papers.
              {s.kind === "topic" || s.kind === "repeated" ? " Topics and repeated question types are BTechi’s own grouping." : ""} BTechi is not affiliated
              with IIT Madras.
            </p>
          </div>

          {/* Right Column: Question Palette & Companion */}
          <aside className="hidden xl:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto space-y-4">
            <QuestionPalette questions={allQuestions} />
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs text-xs space-y-2.5">
              <p className="eyebrow">Study Actions</p>
              <div className="flex flex-col gap-2">
                <PrintSheetButton />
                {s.portalHref && (
                  <Link href={s.portalHref} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 font-semibold text-fg hover:bg-surface-3 transition-colors">
                    <MonitorCheck className="size-4" aria-hidden /> Sit in Exam Portal
                  </Link>
                )}
                <Link href={sheetsHref} className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2 font-medium text-muted hover:text-fg transition-colors">
                  <Layers className="size-4" aria-hidden /> All {c.short} Sheets
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
