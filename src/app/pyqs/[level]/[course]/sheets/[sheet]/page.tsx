import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, KeyRound, MonitorCheck } from "lucide-react";
import { PrintSheetButton } from "@/components/print-sheet-button";
import { QuestionPalette, SheetPaper } from "@/components/question-sheet";
import { Breadcrumbs, buttonClass } from "@/components/ui";
import { getQuestionSheets, type QuestionSheet } from "@/lib/pyq-sheets";
import { pyqSheetsHref } from "@/lib/pyq-urls";

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
  return pageMetadata({
    title: metaTitle(s),
    description: `${s.questions} ${s.course.name} past questions (${s.marks} marks) from ${s.papers} IIT Madras BS ${s.papers === 1 ? "paper" : "papers"}, set out to solve on paper. Official answer key at the end.`,
    path: s.href,
  });
}

export default async function SheetPage({ params }: PageProps<"/pyqs/[level]/[course]/sheets/[sheet]">) {
  const s = await load(params);
  if (!s) notFound();
  const c = s.course;
  const sheetsHref = pyqSheetsHref(c.slug);
  const allQuestions = s.groups.flatMap((g) => g.questions);
  const facts = [
    `${s.questions} questions`,
    `${s.marks} marks`,
    s.durationMin ? `${s.durationMin} min` : `${s.papers} ${s.papers === 1 ? "paper" : "papers"}`,
    ...(s.kind === "repeated" ? [`${s.groups.length} question types`] : []),
  ];

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1380px] px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-2" items={[{ label: "PYQs", href: "/pyqs" }, { label: c.short, href: sheetsHref }, { label: s.title }]} />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                {c.short} <span className="text-muted">·</span> {s.title}
              </h1>
              <p className="mt-0.5 text-xs text-muted tabular-nums">
                {c.code && <span className="font-mono">{c.code} · </span>}
                {facts.join(" · ")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 print:hidden">
              <a href="#answer-key" className={buttonClass("secondary", "sm")}>
                <KeyRound className="size-3.5" aria-hidden /> Answer key
              </a>
              <PrintSheetButton />
              {s.portalHref && (
                <Link href={s.portalHref} className={buttonClass("primary", "sm")}>
                  <MonitorCheck className="size-3.5" aria-hidden /> Take as mock
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)_260px] items-start">
          {/* Left Column: Outline / Sections */}
          <aside aria-label="On this sheet" className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
            {s.groups.length > 1 && (
              <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
                <p className="eyebrow mb-2">Sections</p>
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
                    <a
                      href="#answer-key"
                      className="flex items-center justify-between rounded-lg px-2.5 py-1.5 font-bold text-fg transition-colors hover:bg-surface-2"
                    >
                      <span>Answer Key</span>
                      <span className="text-xs text-muted">↓</span>
                    </a>
                  </li>
                </ol>
              </div>
            )}
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
          </aside>
        </div>
      </div>
    </>
  );
}
