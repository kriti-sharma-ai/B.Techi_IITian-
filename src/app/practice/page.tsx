import type { Metadata } from "next";
import Link from "next/link";
import { FileClock, Layers, ListChecks, ScrollText, Shuffle, Sparkles, Target } from "lucide-react";
import { ExamPrep } from "@/components/exam-prep";
import { PracticeBuilder } from "@/components/practice-builder";
import { PracticeStats } from "@/components/practice-stats";
import { PageHeader, buttonClass } from "@/components/ui";
import { param } from "@/lib/filters";
import { PROGRAM_SLUG, pyqs, pyqTitle, questions } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practice questions with explanations, plus exam prep: high-priority topics, important questions, PYQs and mock tests for IITM BS courses.",
  alternates: { canonical: "/practice" },
};

const modes = [
  { icon: Shuffle, t: "Quick Practice", d: "10 random questions with instant feedback.", q: "count=10" },
  { icon: Target, t: "Topic Practice", d: "Drill one topic until it sticks.", q: "" },
  { icon: Layers, t: "Week Practice", d: "Every question from one week of a course.", q: "" },
  { icon: ListChecks, t: "Full Test", d: "The whole course, graded at the end.", q: "mode=exam" },
  { icon: ScrollText, t: "Previous Year Paper", d: "Practise a Quiz 1, Quiz 2 or End Term paper.", q: "" },
  { icon: FileClock, t: "Mock Exam", d: "Timed, mixed difficulty, exam conditions.", q: "mode=exam&count=12&mock=1" },
];

const tabs = [
  { key: "practice", label: "Practice", href: "/practice" },
  { key: "exam", label: "Exam prep", href: "/practice?tab=exam" },
] as const;

export default async function PracticePage({ searchParams }: PageProps<"/practice">) {
  const sp = await searchParams;
  const tab = param(sp, "tab") === "exam" ? "exam" : "practice";

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Practice" }]}
        title="Practice"
        description="Questions for every IITM BS course, each with a step-by-step explanation, and a focused plan for your next exam."
      >
        <nav aria-label="Practice sections" className="inline-flex rounded-xl border border-border bg-surface-2 p-1">
          {tabs.map((t) => (
            <Link
              key={t.key}
              href={t.href}
              scroll={false}
              aria-current={tab === t.key ? "page" : undefined}
              className={cn(
                "rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors",
                tab === t.key ? "bg-surface text-fg shadow-sm" : "text-muted hover:text-fg",
              )}
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </PageHeader>
      {tab === "exam" ? <ExamPrep sp={sp} /> : <PracticeModes />}
    </>
  );
}

function PracticeModes() {
  const live = questions.length > 0;
  const firstSubject = questions[0]?.subjectSlug;
  const latestPyqs = [...pyqs].sort((a, b) => b.year - a.year).slice(0, 4);

  return (
    <div className="container-page space-y-12 py-8">
      <PracticeStats />

      {!live && (
        <div className="card flex flex-col gap-4 p-6 md:flex-row md:items-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-ink">
            <Sparkles className="size-3.5" aria-hidden /> Coming soon
          </span>
          <p className="flex-1 text-sm text-muted">
            We&apos;re writing the question bank, starting with the Foundation Level courses. These practice modes go live as
            each course is published.
          </p>
          <Link href={`/programs/${PROGRAM_SLUG}/foundation`} className={buttonClass("secondary", "md")}>
            Foundation courses
          </Link>
        </div>
      )}

      <section>
        <h2 className="mb-4 text-lg font-bold">Practice modes</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((m) => {
            const body = (
              <>
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-purple/10 text-purple">
                  <m.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">{m.t}</span>
                  <span className="mt-0.5 block text-sm text-muted">{m.d}</span>
                </span>
              </>
            );
            const href =
              m.t === "Previous Year Paper" ? "/pyqs" : `/practice/session?subject=${firstSubject}${m.q ? `&${m.q}` : ""}`;
            return live ? (
              <Link key={m.t} href={href} className="card card-hover flex gap-4 p-5">
                {body}
              </Link>
            ) : (
              <div key={m.t} className={cn("card flex gap-4 p-5 opacity-75")} aria-disabled>
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {live && (
        <section>
          <h2 className="mb-1 text-lg font-bold">Build your own set</h2>
          <p className="mb-4 text-sm text-muted">Filter the question bank by course, week, topic, difficulty and type.</p>
          <PracticeBuilder />
        </section>
      )}

      {latestPyqs.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-bold">Practise a past paper</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {latestPyqs.map((p) => (
              <Link key={p.id} href={`/practice/session?pyq=${p.id}`} className="card card-hover p-4">
                <span className="text-2xl font-extrabold tabular-nums">{p.year}</span>
                <span className="mt-1 block text-sm font-medium">{pyqTitle(p)}</span>
                <span className="text-xs text-muted">{p.questionIds.length} questions</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
