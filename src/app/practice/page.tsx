import type { Metadata } from "next";
import Link from "next/link";
import { FileClock, Layers, ListChecks, ScrollText, Shuffle, Target } from "lucide-react";
import { PracticeBuilder } from "@/components/practice-builder";
import { PracticeStats } from "@/components/practice-stats";
import { PageHeader } from "@/components/ui";
import { pyqs, pyqTitle, questions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice",
  description: "Topic, unit and full-length practice with explanations for every answer. MCQ, numerical, true/false and more.",
  alternates: { canonical: "/practice" },
};

const modes = [
  { icon: Shuffle, t: "Quick Practice", d: "10 random questions from Statistics with instant feedback.", href: "/practice/session?subject=statistics&count=10" },
  { icon: Target, t: "Topic Practice", d: "Drill one topic until it sticks.", href: "/practice/session?subject=statistics&topic=conditional-probability" },
  { icon: Layers, t: "Unit Practice", d: "Every question from one unit.", href: "/practice/session?subject=statistics&unit=stat-u2" },
  { icon: ListChecks, t: "Full Test", d: "The whole subject, graded at the end.", href: "/practice/session?subject=statistics&mode=exam" },
  { icon: ScrollText, t: "Previous Year Paper", d: "Practise a real past paper question by question.", href: "/pyqs" },
  { icon: FileClock, t: "Mock Exam", d: "Timed, mixed difficulty, exam conditions.", href: "/practice/session?subject=statistics&mode=exam&count=12&mock=1" },
];

export default function PracticePage() {
  const latestPyqs = [...pyqs].sort((a, b) => b.year - a.year).slice(0, 4);
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Practice" }]}
        title="Practice"
        description={`${questions.length} questions with step-by-step explanations. Not just “correct”: you'll see why.`}
      />
      <div className="container-page space-y-12 py-8">
        <PracticeStats />

        <section>
          <h2 className="mb-4 text-lg font-bold">Choose a mode</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modes.map((m) => (
              <Link key={m.t} href={m.href} className="card card-hover group flex gap-4 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-purple/10 text-purple">
                  <m.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">{m.t}</span>
                  <span className="mt-0.5 block text-sm text-muted">{m.d}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-1 text-lg font-bold">Build your own set</h2>
          <p className="mb-4 text-sm text-muted">Filter the question bank by subject, unit, topic, difficulty and type.</p>
          <PracticeBuilder />
        </section>

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
      </div>
    </>
  );
}
