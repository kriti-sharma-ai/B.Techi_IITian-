import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUp, FileClock, ListChecks, ListOrdered, ScrollText, Shuffle, Target } from "lucide-react";
import { ExamTag } from "@/components/exam-tag";
import { ExamPrep } from "@/components/exam-prep";
import { PracticeBuilder } from "@/components/practice-builder";
import { PracticeStats } from "@/components/practice-stats";
import { PaperRows } from "@/components/pyq-papers";
import { PageHeader } from "@/components/ui";
import { param } from "@/lib/filters";
import { pyqs, pyqTitle, questions } from "@/lib/content";
import { PYQ_LEVELS, getPyqCourse, groupCourses, pyqCourses, pyqCoursesForLevel, type CoursePyqs, type PyqExam } from "@/lib/pyq-index";
import {
  DRILL_COUNT,
  PRACTICE_EXAMS,
  QUICK_COUNT,
  courseExams,
  examFromParam,
  practiceHref,
  practicePlan,
  sessionHref,
  type PracticePlan,
  type PyqPracticeMode,
} from "@/lib/pyq-practice";
import { isPyqLevel } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practise real IITM BS previous-year questions by level, course and exam, with the official answer keys: quick sets, drills, full tests and timed mock exams, plus exam prep.",
  alternates: { canonical: "/practice" },
};

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
        description="Pick your level, course and exam, then practise real IIT Madras BS previous-year questions with the official answer keys."
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
      {tab === "exam" ? (
        <ExamPrep sp={sp} />
      ) : (
        <PracticeModes level={param(sp, "level")} course={param(sp, "course")} exam={param(sp, "exam")} />
      )}
    </>
  );
}

/** ?course= wins; ?level= opens that level's first course. End Term unless the course has the asked-for exam. */
function resolveSelection(levelParam?: string, courseParam?: string, examParam?: string) {
  const course =
    getPyqCourse(courseParam ?? "") ?? pyqCoursesForLevel(levelParam && isPyqLevel(levelParam) ? levelParam : "foundation")[0] ?? pyqCourses[0];
  const exams = courseExams(course);
  const asked = examFromParam(examParam);
  const exam: PyqExam = asked && exams.includes(asked) ? asked : exams.includes("end-term") ? "end-term" : exams[0];
  return { course, exam };
}

/** A course's exams in term order. Quiz 1 is practised with Qualifier papers (same weeks 1–4) where a course has them; Quiz 2 has no papers yet. */
const EXAM_CHOICES: { label: string; exam?: PyqExam }[] = [{ label: "Quiz 1", exam: "qualifier" }, { label: "Quiz 2" }, { label: "End Term", exam: "end-term" }];

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

function PracticeModes(props: { level?: string; course?: string; exam?: string }) {
  const live = questions.length > 0;
  const { course, exam } = resolveSelection(props.level, props.course, props.exam);
  const plan = practicePlan(course.slug, exam)!;
  const latestPyqs = [...pyqs].sort((a, b) => b.year - a.year).slice(0, 4);

  return (
    <div className="container-page space-y-12 py-8">
      <PracticeStats />

      {/* The bar stays pinned while any of this is on screen, so every mode and paper below reads as this course and exam. */}
      <div>
        <Chooser plan={plan} />
        <SelectionBar plan={plan} />
        <p className="mt-2 px-1 text-sm text-muted">{planSummary(plan)}</p>

        <div className="mt-10 space-y-12">
          <ModeGroup
            title="Practise"
            description="The official answer key after every question."
            modes={[
              {
                icon: Shuffle,
                t: "Quick Practice",
                d: `${Math.min(QUICK_COUNT, plan.questions)} random questions from past ${plan.exam.source} papers.`,
                mode: "quick",
              },
              {
                icon: Target,
                t: "Drill Practice",
                d: `${Math.min(DRILL_COUNT, plan.questions)} ${plan.exam.label} questions. Miss one and it comes back until you get it right.`,
                mode: "drill",
              },
              {
                icon: ListOrdered,
                t: "Every Question",
                d: `All ${plan.questions} questions from past ${plan.course.short} ${plan.exam.source} papers, one at a time.`,
                mode: "all",
              },
            ]}
            plan={plan}
          />

          <ModeGroup
            title="Test yourself"
            description={`Graded at the end, like the real ${plan.exam.label}.`}
            modes={[
              {
                icon: ListChecks,
                t: "Full Test",
                d: `A ${plan.paperLength}-question paper drawn from every past ${plan.exam.source} sitting. No timer.`,
                mode: "full",
              },
              {
                icon: FileClock,
                t: "Mock Exam",
                d: `${plan.durationMin} minutes on the clock, laid out like a real ${plan.exam.source} paper.`,
                mode: "mock",
              },
              {
                icon: ScrollText,
                t: "Previous Year Paper",
                d: `Sit one of the ${plural(plan.papers.length, `real ${plan.exam.source} paper`)} below in the timed exam portal.`,
                href: "#papers",
              },
            ]}
            plan={plan}
          />

          <section id="papers" className="scroll-mt-24" aria-labelledby="papers-title">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 id="papers-title" className="flex flex-wrap items-center gap-2 text-lg font-bold">
                  Real papers <ExamTag exam={plan.exam} />
                </h2>
                <p className="text-sm text-muted">
                  {plural(plan.papers.length, `past ${plan.course.short} ${plan.exam.source} paper`)}, each with the official answer key.
                </p>
              </div>
              <Link href={plan.course.href} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                All {plan.course.short} papers <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="card px-5 py-1">
              <PaperRows papers={plan.papers} />
            </div>
          </section>
        </div>
      </div>

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

const pill = (on: boolean) =>
  cn(
    "shrink-0 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
    on ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
  );

function Step({ n, label, children }: { n: number; label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2.5 p-4 sm:grid-cols-[7rem_1fr] sm:gap-4 md:px-5">
      <p className="flex items-center gap-2 text-sm font-semibold sm:h-9">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-brand-ink" aria-hidden>
          {n}
        </span>
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

/** Level → course → exam, then a plain statement of what the modes below will draw from. */
function Chooser({ plan }: { plan: PracticePlan }) {
  const { course, exam } = plan;
  const levels = PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0);
  // Switching course keeps the exam when the new course has papers for it.
  const courseHref = (c: CoursePyqs) => practiceHref(c.slug, courseExams(c).includes(exam.slug) ? exam.slug : undefined);

  return (
    <section id="choose" aria-labelledby="choose-title" className="card scroll-mt-24 overflow-hidden">
      <h2 id="choose-title" className="sr-only">
        Choose what to practise
      </h2>
      <div className="divide-y divide-border">
        <Step n={1} label="Level">
          <nav aria-label="Level" className="flex flex-wrap gap-1.5">
            {levels.map((l) => (
              <Link key={l.slug} href={`/practice?level=${l.slug}`} scroll={false} aria-current={l.slug === course.level ? "true" : undefined} className={pill(l.slug === course.level)}>
                {l.name}
              </Link>
            ))}
          </nav>
        </Step>

        <Step n={2} label="Course">
          <nav aria-label="Course" className="space-y-3">
            {groupCourses(pyqCoursesForLevel(course.level)).map((g) => (
              <div key={g.name}>
                <p className="mb-1.5 text-xs font-medium text-muted">{g.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.courses.map((c) => (
                    <Link
                      key={c.slug}
                      href={courseHref(c)}
                      scroll={false}
                      title={c.name}
                      aria-current={c.slug === course.slug ? "true" : undefined}
                      className={pill(c.slug === course.slug)}
                    >
                      {c.short}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </Step>

        <Step n={3} label="Exam">
          <nav aria-label="Exam" className="flex flex-wrap gap-2">
            {EXAM_CHOICES.map((choice) => {
              const papers = choice.exam ? course.papers.filter((p) => p.exam === choice.exam).length : 0;
              const on = choice.exam === exam.slug;
              const info = choice.exam && papers ? PRACTICE_EXAMS[choice.exam] : undefined;
              const body = (
                <>
                  <span className="flex items-center gap-1.5 text-sm font-semibold">
                    {info && <span className={cn("size-2 rounded-full", info.tone === "blue" ? "bg-blue" : "bg-purple")} aria-hidden />}
                    {info?.label ?? choice.label}
                  </span>
                  <span className={cn("block text-xs", on ? "text-bg/70" : "text-muted")}>
                    {info ? `${info.scope} · ${plural(papers, "paper")}` : "No papers yet"}
                  </span>
                </>
              );
              return info ? (
                <Link
                  key={choice.label}
                  href={practiceHref(course.slug, choice.exam)}
                  scroll={false}
                  aria-current={on ? "true" : undefined}
                  className={cn(
                    "rounded-xl border px-3.5 py-2 transition-colors",
                    on ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
                  )}
                >
                  {body}
                </Link>
              ) : (
                <span key={choice.label} aria-disabled="true" className="cursor-not-allowed rounded-xl border border-dashed border-border px-3.5 py-2 text-muted">
                  {body}
                </span>
              );
            })}
          </nav>
        </Step>
      </div>
    </section>
  );
}

/** What's selected, pinned under the navbar while scrolling through the modes and papers. */
function SelectionBar({ plan }: { plan: PracticePlan }) {
  const { course, exam, level } = plan;
  return (
    <div
      className={cn(
        "sticky top-16 z-20 mt-4 rounded-xl border bg-bg/90 px-4 py-2.5 shadow-sm backdrop-blur",
        exam.tone === "blue" ? "border-blue/40" : "border-purple/40",
      )}
    >
      <p className="flex items-center gap-2.5 text-sm">
        <span className="hidden shrink-0 text-muted sm:inline">You&apos;re practising</span>
        <ExamTag exam={exam} />
        <span className="min-w-0 truncate font-semibold">
          <span className="sm:hidden">{course.short}</span>
          <span className="hidden sm:inline">{course.name}</span>
          <span className="hidden font-normal text-muted sm:inline"> · {level.short}</span>
        </span>
        <a href="#choose" className="ml-auto inline-flex shrink-0 items-center gap-1 font-semibold text-muted hover:text-fg">
          <ArrowUp className="size-3.5" aria-hidden /> Change
        </a>
      </p>
    </div>
  );
}

function planSummary({ questions, papers, exam }: PracticePlan) {
  const range = papers.length > 1 ? `${papers.at(-1)!.label} to ${papers[0].label}` : papers[0].label;
  const summary = `${questions} real questions from ${plural(papers.length, `${exam.source} paper`)} (${range}), with the official answer keys.`;
  // Say why Qualifier papers are Quiz 1 practice.
  return exam.source === exam.label ? summary : `${summary} ${exam.about}`;
}

type Mode = { icon: typeof Shuffle; t: string; d: string } & ({ mode: PyqPracticeMode } | { href: string });

function ModeGroup({ title, description, modes, plan }: { title: string; description: string; modes: Mode[]; plan: PracticePlan }) {
  return (
    <section>
      <h2 className="flex flex-wrap items-center gap-2 text-lg font-bold">
        {title} <ExamTag exam={plan.exam} />
      </h2>
      <p className="mb-4 text-sm text-muted">{description}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {modes.map((m) => (
          <Link
            key={m.t}
            href={"href" in m ? m.href : sessionHref(plan.course.slug, plan.exam.slug, m.mode)}
            className="card card-hover flex gap-4 p-5"
          >
            <span
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-xl",
                plan.exam.tone === "blue" ? "bg-blue/10 text-blue" : "bg-purple/10 text-purple",
              )}
            >
              <m.icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-semibold">{m.t}</span>
              <span className="mt-0.5 block text-sm text-muted">{m.d}</span>
              <span className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs text-muted">
                <ExamTag exam={plan.exam} size="sm" /> {plan.course.short}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
