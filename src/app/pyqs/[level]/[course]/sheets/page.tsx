import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, FileText, Layers, MonitorCheck, Repeat } from "lucide-react";
import { EXAM_BADGE } from "@/components/pyq-papers";
import { Badge, PageHeader, buttonClass } from "@/components/ui";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { getQuestionSheets, paperTitle } from "@/lib/pyq-sheets";
import { PYQ_SHEETS_HREF, pyqLevelHref } from "@/lib/pyq-urls";

export const dynamicParams = false;
// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export async function generateStaticParams() {
  return (await getQuestionSheets()).sheetCourses().map((s) => ({ level: s.course.level, course: s.course.slug }));
}

async function load(params: Promise<{ level: string; course: string }>) {
  const { level, course } = await params;
  const sheets = (await getQuestionSheets()).courseSheets(course);
  return sheets && sheets.course.level === level ? sheets : undefined;
}

export async function generateMetadata({ params }: PageProps<"/pyqs/[level]/[course]/sheets">): Promise<Metadata> {
  const s = await load(params);
  if (!s) return {};
  const c = s.course;
  return {
    title: `${c.name}${c.code ? ` (${c.code})` : ""} PYQs Topic Wise & Year Wise, with Answers`,
    description: `${c.name} previous year questions set out to solve on paper: ${c.papers.length} papers year wise${
      s.topics.length ? `, ${s.topics.length} topic-wise sets` : ""
    }${s.repeated ? ` and the ${s.repeated.types} most repeated question types` : ""}. Official answer key at the end of every sheet.`,
    alternates: { canonical: s.href },
  };
}

export default async function CourseSheetsPage({ params }: PageProps<"/pyqs/[level]/[course]/sheets">) {
  const s = await load(params);
  if (!s) notFound();
  const c = s.course;
  const level = PYQ_LEVELS.find((l) => l.slug === c.level)!;
  const questions = c.papers.reduce((n, p) => n + p.questions, 0);
  const jump = [
    s.repeated && { href: "#most-repeated", label: "Most repeated", icon: Repeat },
    s.topics.length > 0 && { href: "#by-topic", label: "By topic", icon: Layers },
    { href: "#by-year", label: "By year", icon: CalendarDays },
  ].filter((x) => !!x);

  return (
    <>
      <PageHeader
        crumbs={[
          { label: "PYQs", href: "/pyqs" },
          { label: "Question sheets", href: PYQ_SHEETS_HREF },
          { label: level.name, href: `${PYQ_SHEETS_HREF}#${level.slug}` },
          { label: c.short },
        ]}
        eyebrow={
          <span className="flex flex-wrap items-center gap-2">
            {c.code && <span className="font-mono">{c.code}</span>}
            <span>{c.group}</span>
          </span>
        }
        title={`${c.name} question sheets`}
        description={`Every ${c.short} past paper laid out to solve on paper, year by year and topic by topic, plus the questions that come back most. The official answer key is at the end of each sheet.`}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <dl className="flex gap-8">
            {[
              [String(s.count), "sheets"],
              [questions.toLocaleString("en-IN"), "questions"],
              ...(s.repeated ? [[String(s.repeated.types), "repeated types"]] : []),
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-bold tracking-tight tabular-nums">{v}</dd>
                <p className="text-sm text-muted">{l}</p>
              </div>
            ))}
          </dl>
          <nav aria-label="Sheet types" className="flex flex-wrap gap-2">
            {jump.map((j) => (
              <a key={j.href} href={j.href} className={buttonClass("secondary")}>
                <j.icon className="size-4" aria-hidden /> {j.label}
              </a>
            ))}
            <Link href={c.href} className={buttonClass("ghost")}>
              <MonitorCheck className="size-4" aria-hidden /> Sit papers online
            </Link>
          </nav>
        </div>
      </PageHeader>

      <div className="container-page space-y-14 py-10 md:py-14">
        {s.repeated && (
          <section id="most-repeated" aria-labelledby="most-repeated-title" className="scroll-mt-24">
            <div className="card overflow-hidden border-brand/60">
              <div className="flex flex-wrap items-start justify-between gap-4 bg-brand/15 px-5 py-5 sm:px-6">
                <div>
                  <p className="eyebrow mb-1 flex items-center gap-1.5">
                    <Repeat className="size-3.5" aria-hidden /> Start here
                  </p>
                  <h2 id="most-repeated-title" className="text-xl font-bold tracking-tight md:text-2xl">
                    Most repeated questions
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-muted">
                    {s.repeated.types} question types came back in more than one {c.short} paper ({s.repeated.questions} questions). Same steps, new
                    numbers: solve these and you have covered what the paper setters like to ask.
                  </p>
                </div>
                <Link href={s.repeated.href} className={buttonClass("primary")}>
                  Open the sheet <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
              <ol className="divide-y divide-border">
                {s.repeated.top.map((t, i) => (
                  <li key={t.href}>
                    <Link href={t.href} className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-surface-2 sm:px-6">
                      <span className="w-5 shrink-0 text-sm font-semibold text-muted tabular-nums">{i + 1}</span>
                      <span className="min-w-0 flex-1 font-medium leading-snug">{t.title}</span>
                      <Badge tone="brand" className="shrink-0 tabular-nums">
                        ×{t.count}
                      </Badge>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {s.topics.length > 0 && (
          <section id="by-topic" aria-labelledby="by-topic-title" className="scroll-mt-24">
            <h2 id="by-topic-title" className="text-xl font-bold tracking-tight md:text-2xl">
              Topic wise
            </h2>
            <p className="mt-1 text-sm text-muted">
              {s.topics.length} topics in syllabus order. Each sheet has every past question on that topic, newest paper first.
            </p>
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {s.topics.map((t, i) => (
                <li key={t.slug}>
                  <Link href={t.href} className="card card-hover flex h-full gap-4 p-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-surface-2 text-sm font-bold tabular-nums">{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold leading-snug">{t.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{t.summary}</span>
                      <span className="mt-2.5 flex items-center gap-3 text-xs text-muted tabular-nums">
                        <span className="font-semibold text-fg">{t.questions} questions</span>
                        <span>
                          in {t.papers} of {c.papers.length} papers
                        </span>
                        <span className="h-1.5 min-w-10 flex-1 overflow-hidden rounded-full bg-surface-2" aria-hidden>
                          <span className="block h-full rounded-full bg-ink/70" style={{ width: `${Math.round((t.papers / c.papers.length) * 100)}%` }} />
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section id="by-year" aria-labelledby="by-year-title" className="scroll-mt-24">
          <h2 id="by-year-title" className="text-xl font-bold tracking-tight md:text-2xl">
            Year wise
          </h2>
          <p className="mt-1 text-sm text-muted">Each paper as it was set, or every paper of a year in one sheet.</p>
          <div className="mt-5 space-y-6">
            {s.years.map((y) => (
              <div key={y.slug} className="card overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-2/60 px-5 py-3">
                  <h3 className="text-lg font-bold tabular-nums">{y.year}</h3>
                  <Link href={y.href} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                    All {y.papers.length} {y.papers.length === 1 ? "paper" : "papers"} in one sheet · {y.questions} questions <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
                <ul className="divide-y divide-border">
                  {y.papers.map((p) => (
                    <li key={p.slug} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3">
                      <Link href={p.sheetHref} className="group flex min-w-0 flex-1 basis-56 items-center gap-3">
                        <FileText className="size-4 shrink-0 text-muted" aria-hidden />
                        <span className="min-w-0">
                          <span className="font-semibold group-hover:underline">{paperTitle(p)}</span>
                          <span className="block text-xs text-muted tabular-nums">
                            {p.questions} questions · {p.marks} marks · {p.durationMin} min
                          </span>
                        </span>
                      </Link>
                      <Badge tone={EXAM_BADGE[p.exam].tone}>{EXAM_BADGE[p.exam].label}</Badge>
                      <Link href={p.href} className="text-sm font-medium text-muted hover:text-fg">
                        Sit online
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <p className="text-xs text-muted">
          Questions and answer keys are reproduced from the official IIT Madras BS papers. Topics and repeated question types are BTechi&rsquo;s own grouping.
          BTechi is not affiliated with IIT Madras.{" "}
          <Link href={pyqLevelHref(c.level)} className="font-medium text-fg underline-offset-2 hover:underline">
            Every {level.name} paper
          </Link>
          .
        </p>
      </div>
    </>
  );
}
