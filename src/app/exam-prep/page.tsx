import type { Metadata } from "next";
import Link from "next/link";
import { Check, FileClock, Flame, Lightbulb, ScrollText, Zap } from "lucide-react";
import { NoteCard, PyqCard } from "@/components/cards";
import { PyqAnalysis } from "@/components/pyq-analysis";
import { Badge, EmptyState, PageHeader, buttonClass } from "@/components/ui";
import { VideoCard } from "@/components/video-card";
import { forSubject, getProgram, getSubject, notes, programs, pyqs, pyqTopicFrequency, questions, subjects, topicTitle, videos } from "@/lib/content";
import { param } from "@/lib/filters";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Exam prep",
  description: "High-priority topics, important questions, PYQs, quick revision notes and mock tests for your next exam.",
  alternates: { canonical: "/exam-prep" },
};

const EXAMS = ["Mid-sem", "End-sem"] as const;

function Step({ n, label, done, children }: { n: number; label: string; done: boolean; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span
        className={cn(
          "grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold",
          done ? "bg-ink text-bg" : "border-2 border-border text-muted",
        )}
      >
        {done ? <Check className="size-3.5" aria-hidden /> : n}
      </span>
      <div className="min-w-0 flex-1 pb-6">
        <p className="mb-2 text-sm font-semibold">{label}</p>
        <div className="flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
}

function Pill({ href, on, children }: { href: string; on: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={on ? "true" : undefined}
      className={cn(
        "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
        on ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
      )}
    >
      {children}
    </Link>
  );
}

export default async function ExamPrepPage({ searchParams }: PageProps<"/exam-prep">) {
  const sp = await searchParams;
  const subjectSlug = param(sp, "subject");
  const subject = subjectSlug ? getSubject(subjectSlug) : undefined;
  const programSlug = subject?.programSlug ?? param(sp, "program");
  const program = programSlug ? getProgram(programSlug) : undefined;
  const sem = subject?.semester ?? (Number(param(sp, "semester")) || undefined);
  const exam = param(sp, "exam");

  const q = (o: Record<string, string | number | undefined>) =>
    "/exam-prep?" + new URLSearchParams(Object.entries(o).filter(([, v]) => v !== undefined) as [string, string][]).toString();

  const semesters = program ? [...new Set(subjects.filter((s) => s.programSlug === program.slug).map((s) => s.semester))].sort() : [];
  const subjectOptions = program && sem ? subjects.filter((s) => s.programSlug === program.slug && s.semester === sem) : [];

  const ready = subject && exam;

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Exam prep" }]}
        title="Exam prep"
        description="Tell us your exam. We'll show you what matters most, built from previous year papers."
      />
      <div className="container-page py-8">
        <div className="card p-5 md:p-6">
          <Step n={1} label="Program" done={!!program}>
            {programs.map((p) => (
              <Pill key={p.slug} href={q({ program: p.slug })} on={program?.slug === p.slug}>
                {p.name}
              </Pill>
            ))}
          </Step>
          <Step n={2} label="Semester" done={!!sem}>
            {program ? (
              semesters.map((s) => (
                <Pill key={s} href={q({ program: program.slug, semester: s })} on={sem === s}>
                  Semester {s}
                </Pill>
              ))
            ) : (
              <span className="text-sm text-muted">Choose a program first</span>
            )}
          </Step>
          <Step n={3} label="Subject" done={!!subject}>
            {subjectOptions.length ? (
              subjectOptions.map((s) => (
                <Pill key={s.slug} href={q({ subject: s.slug })} on={subject?.slug === s.slug}>
                  {s.name}
                </Pill>
              ))
            ) : (
              <span className="text-sm text-muted">Choose a semester first</span>
            )}
          </Step>
          <Step n={4} label="Exam" done={!!exam}>
            {subject ? (
              EXAMS.map((e) => (
                <Pill key={e} href={q({ subject: subject.slug, exam: e })} on={exam === e}>
                  {e}
                </Pill>
              ))
            ) : (
              <span className="text-sm text-muted">Choose a subject first</span>
            )}
          </Step>
        </div>

        {ready && <Plan subjectSlug={subject.slug} exam={exam} />}
      </div>
    </>
  );
}

function Plan({ subjectSlug, exam }: { subjectSlug: string; exam: string }) {
  const subject = getSubject(subjectSlug)!;
  const papers = forSubject(pyqs, subjectSlug).sort((a, b) => b.year - a.year);
  const sameExam = papers.filter((p) => p.exam === exam);
  const freq = pyqTopicFrequency(subjectSlug);
  const priority = freq.slice(0, 5);
  const important = questions.filter((x) => x.subjectSlug === subjectSlug && x.source).slice(0, 6);
  const revision = forSubject(notes, subjectSlug).filter((n) => n.kind === "Revision" || n.kind === "Cheat sheet");
  const vids = forSubject(videos, subjectSlug).filter((v) => priority.some((p) => p.slug === v.topicSlug)).slice(0, 3);

  if (papers.length === 0 && important.length === 0)
    return (
      <EmptyState
        className="mt-8"
        icon={<ScrollText className="size-6" />}
        title={`We're working on ${subject.name} exam prep.`}
        description="We need past papers to find the high-priority topics. Have one? Share it and help everyone."
        action={
          <Link href="/contribute" className={buttonClass("secondary")}>
            Contribute a paper →
          </Link>
        }
      />
    );

  return (
    <div className="animate-fade-up mt-10 space-y-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Your plan</p>
          <h2 className="text-2xl font-extrabold tracking-tight">
            {subject.name} · {exam}
          </h2>
        </div>
        <Link href={`/practice/session?subject=${subjectSlug}&mode=exam&count=12&mock=1`} className={buttonClass("primary", "lg")}>
          <FileClock className="size-4" aria-hidden /> Take a mock test
        </Link>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="mb-3 flex items-center gap-2 font-bold">
            <Flame className="size-5 text-red" aria-hidden /> High-priority topics
          </h3>
          <ol className="space-y-2">
            {priority.map((t, i) => (
              <li key={t.slug}>
                <Link href={`/subjects/${subjectSlug}/${t.slug}`} className="card card-hover flex items-center gap-3 p-3.5">
                  <span className="w-5 text-sm font-bold text-muted tabular-nums">{i + 1}</span>
                  <span className="flex-1 font-medium">{t.title}</span>
                  <Badge tone={t.percent >= 60 ? "red" : "amber"}>In {t.percent}% of papers</Badge>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <PyqAnalysis subjectSlug={subjectSlug} />
      </section>

      {important.length > 0 && (
        <section>
          <h3 className="mb-3 flex items-center gap-2 font-bold">
            <Lightbulb className="size-5 text-amber" aria-hidden /> Important questions
          </h3>
          <ul className="grid gap-3 md:grid-cols-2">
            {important.map((x) => (
              <li key={x.id} className="card p-4">
                <p className="font-medium">{x.prompt}</p>
                <p className="mt-2 text-xs text-muted">
                  {topicTitle(x.subjectSlug, x.topicSlug)} · Asked in {x.source}
                </p>
              </li>
            ))}
          </ul>
          <Link href={`/practice/session?subject=${subjectSlug}`} className={buttonClass("dark", "md", "mt-4")}>
            Practise all with explanations
          </Link>
        </section>
      )}

      {(sameExam.length > 0 || papers.length > 0) && (
        <section>
          <h3 className="mb-3 flex items-center gap-2 font-bold">
            <ScrollText className="size-5 text-green" aria-hidden /> Previous year papers
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(sameExam.length ? sameExam : papers).map((p) => (
              <PyqCard key={p.id} pyq={p} />
            ))}
          </div>
        </section>
      )}

      {revision.length > 0 && (
        <section>
          <h3 className="mb-3 flex items-center gap-2 font-bold">
            <Zap className="size-5 text-teal" aria-hidden /> Quick revision notes
          </h3>
          <div className="space-y-3">
            {revision.map((n) => (
              <NoteCard key={n.id} note={n} />
            ))}
          </div>
        </section>
      )}

      {vids.length > 0 && (
        <section>
          <h3 className="mb-3 font-bold">Recommended videos</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {vids.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
