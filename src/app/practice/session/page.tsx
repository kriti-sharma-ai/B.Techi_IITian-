import type { Metadata } from "next";
import Link from "next/link";
import { PenLine } from "lucide-react";
import { Quiz } from "@/components/quiz";
import { Breadcrumbs, EmptyState, buttonClass } from "@/components/ui";
import { getPyq, getSubject, pyqTitle, questionsFor, topicTitle } from "@/lib/content";
import { param } from "@/lib/filters";
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
          ? `Unit ${unit.number}: ${unit.title}`
          : (subject?.name ?? "Mixed practice");

  // Roughly two minutes per question for timed tests.
  const durationMin = mode === "exam" ? Math.max(5, qs.length * 2) : undefined;

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: "Practice", href: "/practice" },
          ...(subject ? [{ label: subject.name, href: `/subjects/${subject.slug}?tab=practice` }] : []),
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
