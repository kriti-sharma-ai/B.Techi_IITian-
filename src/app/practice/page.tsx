import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, ArrowUp, FileClock, ListChecks, ListOrdered, Shuffle, Target, type LucideIcon } from "lucide-react";
import { ExamTag } from "@/components/exam-tag";
import { PracticeBuilder } from "@/components/practice-builder";
import { PracticeStats } from "@/components/practice-stats";
import { PaperRows } from "@/components/pyq-papers";
import { Breadcrumbs } from "@/components/ui";
import { param } from "@/lib/filters";
import { getSubject, pyqs, pyqTitle, questions } from "@/lib/content";
import { PYQ_LEVELS, getPyqIndex, groupCourses, type CoursePyqs, type PyqExam, type PyqIndex } from "@/lib/pyq-index";
import {
  DRILL_COUNT,
  PRACTICE_EXAMS,
  QUICK_COUNT,
  courseExams,
  examFromParam,
  practiceHref,
  getPyqPractice,
  sessionHref,
  type PracticePlan,
  type PyqPractice,
  type PyqPracticeMode,
} from "@/lib/pyq-practice";
import { isPyqLevel } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practise real IITM BS previous-year questions by level, course and exam, with the official answer keys: quick sets, drills, full tests and timed mock exams.",
  alternates: { canonical: "/practice" },
};

export default async function PracticePage({ searchParams }: PageProps<"/practice">) {
  const sp = await searchParams;
  const [index, practice] = await Promise.all([getPyqIndex(), getPyqPractice()]);

  // The Exam prep tab is hidden until its revision content (notes, videos, topic data) is published.
  // Its old links (?tab=exam&subject=…&exam=Quiz 1) open the same course and exam here.
  if (param(sp, "tab") === "exam") {
    const subject = param(sp, "subject") ?? param(sp, "course");
    const level = param(sp, "level") ?? (subject ? getSubject(subject)?.level : undefined);
    if (!subject && !level) redirect("/practice");
    const { course, exam } = resolveSelection(index, level, subject, param(sp, "exam"));
    redirect(subject ? practiceHref(course.slug, exam) : `/practice?level=${course.level}`);
  }

  return (
    <>
      {/* A compact header: the chooser below already explains the page, so it skips PageHeader's description block. */}
      <header className="border-b border-border bg-surface">
        <div className="container-page py-4">
          <Breadcrumbs items={[{ label: "Practice" }]} className="mb-1.5" />
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Practice</h1>
        </div>
      </header>
      <PracticeModes index={index} practice={practice} level={param(sp, "level")} course={param(sp, "course")} exam={param(sp, "exam")} />
    </>
  );
}

/** ?course= wins; ?level= opens that level's first course. End Term unless the course has the asked-for exam. */
function resolveSelection({ getPyqCourse, pyqCoursesForLevel, pyqCourses }: PyqIndex, levelParam?: string, courseParam?: string, examParam?: string) {
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

const toneTile = (plan: PracticePlan) => (plan.exam.tone === "blue" ? "bg-blue/10 text-blue" : "bg-purple/10 text-purple");

type Mode = { mode: PyqPracticeMode; icon: LucideIcon; title: string; description: string; meta: string };

/**
 * The chooser on the left (pinned on desktop); on the right, everything for the
 * chosen course and exam: what it covers, ways to practise, tests, and the real papers.
 */
function PracticeModes({ index, practice, ...props }: { index: PyqIndex; practice: PyqPractice; level?: string; course?: string; exam?: string }) {
  const live = questions.length > 0;
  const { course, exam } = resolveSelection(index, props.level, props.course, props.exam);
  const plan = practice.practicePlan(course.slug, exam)!;
  const latestPyqs = [...pyqs].sort((a, b) => b.year - a.year).slice(0, 4);
  const { source } = plan.exam;

  const practise: Mode[] = [
    {
      mode: "quick",
      icon: Shuffle,
      title: "Quick Practice",
      description: `Random questions from past ${source} papers.`,
      meta: plural(Math.min(QUICK_COUNT, plan.questions), "question"),
    },
    {
      mode: "drill",
      icon: Target,
      title: "Drill Practice",
      description: "Miss a question and it comes back until you get it right.",
      meta: plural(Math.min(DRILL_COUNT, plan.questions), "question"),
    },
    {
      mode: "all",
      icon: ListOrdered,
      title: "Every Question",
      description: `All past ${source} questions of ${course.short}, one at a time.`,
      meta: plural(plan.questions, "question"),
    },
  ];
  const tests: Mode[] = [
    {
      mode: "full",
      icon: ListChecks,
      title: "Full Test",
      description: "A full-length paper drawn from every past sitting. No timer.",
      meta: plural(plan.paperLength, "question"),
    },
    {
      mode: "mock",
      icon: FileClock,
      title: "Mock Exam",
      description: `Timed, and laid out like a real ${source} paper.`,
      meta: `${plan.durationMin} min`,
    },
  ];

  return (
    <div className="container-page pt-6 pb-8">
      <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start xl:grid-cols-[20rem_minmax(0,1fr)]">
        {/* Scrolls on its own if it outgrows a short screen, so the whole chooser stays reachable while pinned. */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:-m-1 lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto lg:p-1">
          <Chooser plan={plan} index={index} />
          <PracticeStats />
        </aside>

        <div className="min-w-0 space-y-10">
          <SelectionBar plan={plan} />
          <CourseHeader plan={plan} />
          <ModeList id="practise" title="Practise" description="The official answer key after every question." modes={practise} plan={plan} />
          <ModeList id="test" title="Test yourself" description={`Graded at the end, like the real ${plan.exam.label}.`} modes={tests} plan={plan} />

          <section id="papers" className="scroll-mt-24" aria-labelledby="papers-title">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
              <div>
                <h2 id="papers-title" className="flex flex-wrap items-center gap-2 text-lg font-bold">
                  Real papers <ExamTag exam={plan.exam} size="sm" />
                </h2>
                <p className="text-sm text-muted">Sit a past {source} paper in the timed exam portal.</p>
              </div>
              <Link href={course.href} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                All {course.short} papers <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="card px-5 py-1">
              <PaperRows papers={plan.papers} />
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
              <div className="grid gap-3 sm:grid-cols-2">
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
      </div>
    </div>
  );
}

/** Level and course buttons, laid out in an even grid; long course names wrap inside their button. */
const pill = (on: boolean) =>
  cn(
    "flex min-h-9 items-center justify-center rounded-lg border px-2 py-1.5 text-center text-sm leading-tight font-medium transition-colors",
    on ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
  );

const pillGrid = "grid grid-cols-3 gap-1.5 sm:grid-cols-4 lg:grid-cols-3";

function Field({ n, label, children }: { n: number; label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase">
        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-brand-ink" aria-hidden>
          {n}
        </span>
        {label}
      </p>
      {children}
    </div>
  );
}

/** Level → course → exam. Every option is a link, so the choice lives in the URL. */
function Chooser({ plan, index: { pyqCoursesForLevel } }: { plan: PracticePlan; index: PyqIndex }) {
  const { course, exam } = plan;
  const levels = PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0);
  // Switching course keeps the exam when the new course has papers for it.
  const courseHref = (c: CoursePyqs) => practiceHref(c.slug, courseExams(c).includes(exam.slug) ? exam.slug : undefined);

  return (
    <section id="choose" aria-labelledby="choose-title" className="card scroll-mt-24 p-4 md:p-5">
      <h2 id="choose-title" className="font-bold">
        What do you want to practise?
      </h2>
      <div className="mt-4 space-y-5">
        <Field n={1} label="Level">
          <nav aria-label="Level" className="grid grid-cols-3 gap-1.5 sm:max-w-sm lg:max-w-none">
            {levels.map((l) => (
              <Link
                key={l.slug}
                href={`/practice?level=${l.slug}`}
                scroll={false}
                title={l.name}
                aria-current={l.slug === course.level ? "true" : undefined}
                className={pill(l.slug === course.level)}
              >
                {l.short}
              </Link>
            ))}
          </nav>
        </Field>

        <Field n={2} label="Course">
          <nav aria-label="Course" className="space-y-3">
            {groupCourses(pyqCoursesForLevel(course.level)).map((g) => (
              <div key={g.name}>
                <p className="mb-1.5 text-xs text-muted">{g.name}</p>
                <div className={pillGrid}>
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
        </Field>

        <Field n={3} label="Exam">
          <nav aria-label="Exam" className="grid gap-1.5">
            {EXAM_CHOICES.map((choice) => {
              const papers = choice.exam ? course.papers.filter((p) => p.exam === choice.exam).length : 0;
              const info = choice.exam && papers ? PRACTICE_EXAMS[choice.exam] : undefined;
              const on = choice.exam === exam.slug;
              const body = (
                <>
                  <span
                    className={cn("size-2 shrink-0 rounded-full", info ? (info.tone === "blue" ? "bg-blue" : "bg-purple") : "border border-muted")}
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{info?.label ?? choice.label}</span>
                    <span className={cn("block text-xs", on ? "text-bg/70" : "text-muted")}>{info ? info.scope : "No papers yet"}</span>
                  </span>
                  {info && <span className={cn("shrink-0 text-xs tabular-nums", on ? "text-bg/70" : "text-muted")}>{plural(papers, "paper")}</span>}
                </>
              );
              return info ? (
                <Link
                  key={choice.label}
                  href={practiceHref(course.slug, choice.exam)}
                  scroll={false}
                  aria-current={on ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors",
                    on ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
                  )}
                >
                  {body}
                </Link>
              ) : (
                <span
                  key={choice.label}
                  aria-disabled="true"
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-dashed border-border px-3 py-2 text-muted"
                >
                  {body}
                </span>
              );
            })}
          </nav>
        </Field>
      </div>
    </section>
  );
}

/** Phones only: the chooser is above the content there, so this keeps the choice in view while scrolling. */
function SelectionBar({ plan }: { plan: PracticePlan }) {
  const { course, exam } = plan;
  return (
    <div
      className={cn(
        "sticky top-16 z-20 rounded-xl border bg-bg/90 px-4 py-2.5 shadow-sm backdrop-blur lg:hidden",
        exam.tone === "blue" ? "border-blue/40" : "border-purple/40",
      )}
    >
      <p className="flex items-center gap-2.5 text-sm">
        <span className="hidden shrink-0 text-muted sm:inline">You&apos;re practising</span>
        <ExamTag exam={exam} />
        <span className="min-w-0 truncate font-semibold">{course.name}</span>
        <a href="#choose" className="ml-auto inline-flex shrink-0 items-center gap-1 font-semibold text-muted hover:text-fg">
          <ArrowUp className="size-3.5" aria-hidden /> Change
        </a>
      </p>
    </div>
  );
}

/** "22 Dec 2024" or "December 2024" → "Dec 2024". */
const monthYear = (label: string) => {
  const m = /(\w{3})\w* (\d{4})$/.exec(label);
  return m ? `${m[1]} ${m[2]}` : label;
};

/** What the modes below draw on: the course, the exam and its past papers. */
function CourseHeader({ plan }: { plan: PracticePlan }) {
  const { course, exam, level, papers } = plan;
  const [oldest, newest] = [monthYear(papers.at(-1)!.label), monthYear(papers[0].label)];
  const range = oldest === newest ? newest : `${oldest} – ${newest}`;
  return (
    <header className={cn("card border-l-4 p-5 md:p-6", exam.tone === "blue" ? "border-l-blue" : "border-l-purple")}>
      <p className="eyebrow">
        {level.name}
        {course.code && <span className="font-mono"> · {course.code}</span>}
      </p>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight">{course.name}</h2>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm">
        <ExamTag exam={exam} />
        <span className="text-muted">{exam.scope}</span>
      </div>
      <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-4">
        {[
          [String(plan.questions), "questions"],
          [String(papers.length), papers.length === 1 ? `${exam.source} paper` : `${exam.source} papers`],
          [range, "sittings"],
        ].map(([value, label]) => (
          <div key={label} className="flex flex-col-reverse">
            <dt className="text-xs text-muted">{label}</dt>
            <dd className="text-xl font-bold whitespace-nowrap tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      {/* Say why Qualifier papers are Quiz 1 practice. */}
      {exam.source !== exam.label && <p className="mt-4 text-sm text-muted">{exam.about}</p>}
    </header>
  );
}

function ModeList({ id, title, description, modes, plan }: { id: string; title: string; description: string; modes: Mode[]; plan: PracticePlan }) {
  return (
    <section aria-labelledby={`${id}-title`}>
      <div className="mb-3">
        <h2 id={`${id}-title`} className="flex flex-wrap items-center gap-2 text-lg font-bold">
          {title} <ExamTag exam={plan.exam} size="sm" />
        </h2>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <ul className="card divide-y divide-border overflow-hidden">
        {modes.map((m) => (
          <li key={m.mode}>
            <Link
              href={sessionHref(plan.course.slug, plan.exam.slug, m.mode)}
              className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-surface-2/60 md:px-5"
            >
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", toneTile(plan))}>
                <m.icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{m.title}</span>
                <span className="block text-sm text-muted">{m.description}</span>
                <span className="mt-0.5 block text-xs text-muted tabular-nums sm:hidden">{m.meta}</span>
              </span>
              <span className="hidden shrink-0 text-sm text-muted tabular-nums sm:block">{m.meta}</span>
              <ArrowRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
