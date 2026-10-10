import Link from "next/link";
import { Check, FileClock, Flame, Lightbulb, ScrollText, Zap } from "lucide-react";
import { NoteCard, PyqCard } from "@/components/cards";
import { PyqAnalysis } from "@/components/pyq-analysis";
import { PaperRows } from "@/components/pyq-papers";
import { Badge, EmptyState, buttonClass } from "@/components/ui";
import { VideoCard } from "@/components/video-card";
import { PROGRAM_SLUG, forSubject, getProgram, getSubject, notes, pyqs, pyqTopicFrequency, questions, subjects, topicTitle, videos } from "@/lib/content";
import { param } from "@/lib/filters";
import { getPyqIndex } from "@/lib/pyq-index";
import { sessionHref } from "@/lib/pyq-practice";
import { pyqCourseHref } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";

const EXAMS = ["Quiz 1", "Quiz 2", "End Term"] as const;

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

/**
 * Exam prep: pick level → course → exam, then show a study plan. Not shown at the moment: the tab was
 * hidden until revision content (notes, videos, topic-tagged papers) is published, and /practice?tab=exam
 * links open Practice instead. The plan's sections are meant to come back as a "Revise" section of /practice.
 */
export function ExamPrep({ sp }: { sp: Record<string, string | string[] | undefined> }) {
  const subjectSlug = param(sp, "subject");
  const subject = subjectSlug ? getSubject(subjectSlug) : undefined;
  const program = getProgram(subject?.programSlug ?? param(sp, "program") ?? PROGRAM_SLUG)!;
  const levelSlug = subject?.level ?? param(sp, "level");
  const level = levelSlug ? program.levels.find((l) => l.slug === levelSlug) : undefined;
  const exam = param(sp, "exam");

  const q = (o: Record<string, string | undefined>) =>
    "/practice?" + new URLSearchParams({ tab: "exam", ...Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) }).toString();

  const courseOptions = level
    ? subjects.filter((s) => s.programSlug === program.slug && s.level === level.slug && s.kind === "course")
    : [];
  const ready = subject && exam;

  return (
    <div className="container-page py-8">
      <p className="mb-4 max-w-2xl text-sm text-muted">
        Pick your course and exam. We&apos;ll show what matters most, built from previous Quiz and End Term papers.
      </p>
      <div className="card p-5 md:p-6">
        <Step n={1} label="Level" done={!!level}>
          {program.levels.map((l) => (
            <Pill key={l.slug} href={q({ level: l.slug })} on={level?.slug === l.slug}>
              {l.short}
            </Pill>
          ))}
        </Step>
        <Step n={2} label="Course" done={!!subject}>
          {courseOptions.length ? (
            courseOptions.map((s) => (
              <Pill key={s.slug} href={q({ subject: s.slug })} on={subject?.slug === s.slug}>
                {s.code ? <span className="mr-1.5 font-mono text-xs opacity-70">{s.code}</span> : null}
                {s.name}
              </Pill>
            ))
          ) : (
            <span className="text-sm text-muted">Choose a level first</span>
          )}
        </Step>
        <Step n={3} label="Exam" done={!!exam}>
          {subject ? (
            EXAMS.map((e) => (
              <Pill key={e} href={q({ subject: subject.slug, exam: e })} on={exam === e}>
                {e}
              </Pill>
            ))
          ) : (
            <span className="text-sm text-muted">Choose a course first</span>
          )}
        </Step>
      </div>

      {ready && <Plan subjectSlug={subject.slug} exam={exam} />}
    </div>
  );
}

async function Plan({ subjectSlug, exam }: { subjectSlug: string; exam: string }) {
  const { pyqPapersFor } = await getPyqIndex();
  const subject = getSubject(subjectSlug)!;
  const papers = forSubject(pyqs, subjectSlug).sort((a, b) => b.year - a.year);
  const sameExam = papers.filter((p) => p.exam === exam);
  const freq = pyqTopicFrequency(subjectSlug);
  const priority = freq.slice(0, 5);
  const important = questions.filter((x) => x.subjectSlug === subjectSlug && x.source).slice(0, 6);
  const revision = forSubject(notes, subjectSlug).filter((n) => n.kind === "Revision" || n.kind === "Cheat sheet");
  const vids = forSubject(videos, subjectSlug).filter((v) => priority.some((p) => p.slug === v.topicSlug)).slice(0, 3);
  // Papers in the exam portal. The qualifier examines weeks 1–4, the same ground as Quiz 1.
  const endTerm = pyqPapersFor(subjectSlug, "end-term");
  const qualifier = pyqPapersFor(subjectSlug, "qualifier");
  const portal =
    exam === "Quiz 1"
      ? { papers: qualifier.length ? qualifier : endTerm, note: qualifier.length ? "Qualifier papers cover weeks 1–4, the same ground as Quiz 1." : "No Quiz 1 papers yet. End Term papers cover these weeks too." }
      : exam === "Quiz 2"
        ? { papers: endTerm, note: "No Quiz 2 papers yet. End Term papers cover the full syllabus, Quiz 2 weeks included." }
        : { papers: endTerm.length ? endTerm : qualifier, note: endTerm.length ? "" : "No End Term papers yet. Start with the qualifier papers for weeks 1–4." };

  // A mock from the course's real papers (the qualifier's for Quiz 1); the question bank's mock until a course has papers.
  const mockExam = exam === "Quiz 1" && qualifier.length ? "qualifier" : endTerm.length ? "end-term" : qualifier.length ? "qualifier" : undefined;
  const mockHref = mockExam
    ? sessionHref(subjectSlug, mockExam, "mock")
    : questions.some((x) => x.subjectSlug === subjectSlug)
      ? `/practice/session?subject=${subjectSlug}&mode=exam&count=12&mock=1`
      : undefined;

  if (papers.length === 0 && important.length === 0 && portal.papers.length === 0)
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
        {mockHref && (
          <Link href={mockHref} className={buttonClass("primary", "lg")}>
            <FileClock className="size-4" aria-hidden /> Take a mock test
          </Link>
        )}
      </div>

      {portal.papers.length > 0 && (
        <section>
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="flex items-center gap-2 font-bold">
                <ScrollText className="size-5 text-green" aria-hidden /> Sit a past paper
              </h3>
              {portal.note && <p className="mt-0.5 text-sm text-muted">{portal.note}</p>}
            </div>
            <Link href={pyqCourseHref(subjectSlug)} className="text-sm font-semibold hover:underline">
              All papers for this course →
            </Link>
          </div>
          <div className="card px-5 py-1">
            <PaperRows papers={portal.papers} />
          </div>
        </section>
      )}

      {priority.length > 0 && (
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
      )}

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
