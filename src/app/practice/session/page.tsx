import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PenLine } from "lucide-react";
import { ExamTag } from "@/components/exam-tag";
import { PyqQuiz } from "@/components/pyq-quiz";
import { Quiz } from "@/components/quiz";
import { Breadcrumbs, EmptyState, buttonClass } from "@/components/ui";
import { getPyq, getSubject, pyqTitle, questionsFor, topicTitle } from "@/lib/content";
import { param } from "@/lib/filters";
import { getPyqCourse } from "@/lib/pyq-index";
import { buildPyqSet, courseExams, examFromParam, isPyqPracticeMode, practiceHref } from "@/lib/pyq-practice";
import type { Question } from "@/lib/types";

export const metadata: Metadata = {
  title: "Practice session",
  robots: { index: false },
};

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default async function SessionPage({ searchParams }: PageProps<"/practice/session">) {
  const sp = await searchParams;
  const course = param(sp, "course");
  if (course) return <PyqSession courseSlug={course} exam={param(sp, "exam")} mode={param(sp, "mode")} seed={param(sp, "seed")} />;

  const pyqId = param(sp, "pyq");
  const pyq = pyqId ? getPyq(pyqId) : undefined;
  const subjectSlug = pyq?.subjectSlug ?? param(sp, "subject");
  const subject = subjectSlug ? getSubject(subjectSlug) : undefined;
  const unitId = param(sp, "unit");
  const topic = param(sp, "topic");
  const mode = param(sp, "mode") === "exam" ? "exam" : "practice";
  const count = Number(param(sp, "count")) || undefined;
  const mock = param(sp, "mock") === "1";

  let qs: Question[] = pyq
    ? questionsFor({ ids: pyq.questionIds })
    : questionsFor({ subject: subjectSlug, unit: unitId, topic, difficulty: param(sp, "difficulty"), type: param(sp, "type") });
  if (count || mock) qs = shuffle(qs);
  if (count) qs = qs.slice(0, count);

  const unit = subject?.units.find((u) => u.id === unitId);
  const title = pyq
    ? pyqTitle(pyq)
    : mock
      ? `${subject?.name ?? "Mixed"} mock exam`
      : topic && subjectSlug
        ? topicTitle(subjectSlug, topic)
        : unit
          ? `Week ${unit.number}: ${unit.title}`
          : (subject?.name ?? "Mixed practice");

  // Roughly two minutes per question for timed tests.
  const durationMin = mode === "exam" ? Math.max(5, qs.length * 2) : undefined;

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: "Practice", href: "/practice" },
          ...(subject ? [{ label: subject.name, href: `/subjects/${subject.slug}?item=practice` }] : []),
          { label: title },
        ]}
      />
      <div className="mx-auto mb-6 max-w-3xl">
        <p className="eyebrow">{mode === "exam" ? `Test mode · ${durationMin} min` : "Practice mode · instant feedback"}</p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h1>
      </div>
      {qs.length ? (
        <Quiz key={JSON.stringify(sp)} questions={qs} mode={mode} title={subject?.name} durationMin={durationMin} />
      ) : (
        <EmptyState
          className="mx-auto max-w-3xl"
          icon={<PenLine className="size-6" />}
          title="No questions here yet."
          description="We're writing questions for this selection. Try a wider filter in the meantime."
          action={
            <Link href="/practice" className={buttonClass("secondary")}>
              Back to practice
            </Link>
          }
        />
      )}
    </div>
  );
}

/** A set of real previous-year questions for one course and exam (lib/pyq-practice.ts). */
function PyqSession({ courseSlug, exam: examParam, mode, seed: seedParam }: { courseSlug: string; exam?: string; mode?: string; seed?: string }) {
  const course = getPyqCourse(courseSlug);
  if (!course) notFound();
  const asked = examFromParam(examParam);
  const exam = asked && courseExams(course).includes(asked) ? asked : "end-term";
  // The seed makes a set reproducible. Without one, draw a fresh set; the client pins its seed in the URL.
  const parsed = Number(seedParam);
  const seed = seedParam && Number.isSafeInteger(parsed) && parsed >= 0 ? parsed : Math.floor(Math.random() * 2 ** 31);
  const set = buildPyqSet(course.slug, exam, isPyqPracticeMode(mode) ? mode : "quick", seed);
  if (!set) notFound();

  const { plan } = set;
  const backHref = practiceHref(course.slug, exam);
  const marks = Number(set.items.reduce((n, q) => n + q.marks, 0).toFixed(2));
  const facts = [
    `${set.items.length} questions`,
    `${marks} marks`,
    set.durationMin ? `${set.durationMin} min` : set.test ? "No timer" : undefined,
    set.test ? "Graded at the end" : set.drill ? "Misses come back until you get them right" : "Answer key after each question",
  ].filter(Boolean);

  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Practice", href: backHref }, { label: course.name, href: course.href }, { label: set.title }]} />
      <div className="mx-auto mb-6 max-w-3xl">
        <p className="eyebrow">
          {plan.level.short} · {course.name}
        </p>
        <h1 className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl font-extrabold tracking-tight md:text-3xl">
          {set.title} <ExamTag exam={plan.exam} />
        </h1>
        <p className="mt-1.5 text-sm text-muted">{facts.join(" · ")}</p>
        <p className="mt-1 text-sm text-muted">
          {set.blueprint
            ? `Laid out like the ${set.blueprint} paper, with questions from other ${plan.exam.source} sittings.`
            : `Real questions from ${plan.papers.length} past ${plan.exam.source} paper${plan.papers.length === 1 ? "" : "s"}, with the official answer keys.`}
          {plan.exam.source !== plan.exam.label && ` ${plan.exam.about}`}
        </p>
      </div>
      <PyqQuiz
        key={`${course.slug}-${exam}-${set.mode}-${seed}`}
        items={set.items}
        test={set.test}
        drill={set.drill}
        durationMin={set.durationMin}
        course={course.short}
        seed={seed}
        backHref={backHref}
      />
    </div>
  );
}
