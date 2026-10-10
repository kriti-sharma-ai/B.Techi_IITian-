import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  Clock,
  Flag,
  LayoutGrid,
  ListChecks,
  MonitorCheck,
  Target,
  Timer,
} from "lucide-react";
import { MockAction, QualifierHistory } from "@/components/qualifier-attempts";
import { Badge, Breadcrumbs, SectionHeader } from "@/components/ui";
import { getSubject } from "@/lib/content";
import { practiceHref } from "@/lib/pyq-practice";
import { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, QUALIFIER_SYLLABUS, mockMarks, mockQuestions, pyqGroups, qualifierMocks } from "@/lib/qualifier";

export const metadata: Metadata = {
  title: "Qualifier Pack: Maths I, Stats I, CT, English I",
  description:
    "Ace the IIT Madras BS qualifier. Full-length timed mocks for Mathematics I, Statistics I, Computational Thinking and English I in a real exam-portal interface, with course-wise cutoff checks and solutions.",
  alternates: { canonical: "/qualifier" },
};

const totalQuestions = qualifierMocks.reduce((n, m) => n + mockQuestions(m).length, 0);

/** Per-course caveats shown under that course's previous-year papers. */
const PYQ_NOTES: Record<string, string> = {
  "english-1": "Listening questions are left out because the papers don't include their audio clips. Matching tables are typed out from the paper.",
  "statistics-for-data-science-1": "Figures and tables are shown as they appear in the paper. Numerical answers accept the same range as the official key.",
};

const features = [
  { icon: MonitorCheck, title: "Real exam portal", text: "Full screen, section tabs, candidate panel. The same layout you'll see at the test centre." },
  { icon: LayoutGrid, title: "Question palette", text: "Not visited, not answered, answered, marked, answered & marked. Five statuses, colour-coded like the real exam." },
  { icon: Flag, title: "Mark for review", text: "Save & Next, Mark for Review & Next, Clear Response. Answers only count once saved." },
  { icon: Timer, title: "Server-style timer", text: "Countdown that survives a refresh and auto-submits at zero." },
  { icon: Calculator, title: "On-screen calculator", text: "Basic calculator and a numeric keypad for NAT questions, like the exam portal." },
  { icon: Target, title: "Cutoff check", text: "Course-wise score against the 40% per-course and 50% average rule, plus full solutions." },
];

export default function QualifierPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-border bg-surface">
        <div className="container-page py-10 md:py-14">
          <Breadcrumbs items={[{ label: "Qualifier Pack" }]} />
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Badge tone="brand" className="mb-4">Foundation · Qualifier Pack</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Give your qualifier exam
                <br />
                <span className="relative inline-block">
                  before the real one.
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-brand/60" aria-hidden />
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Maths I, Stats I, Computational Thinking and English I in one pack. Take full-length, timed mocks in an exam portal built to feel like
                the IIT Madras qualifier, then see exactly where you stand against the cutoff.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <MockAction slug={qualifierMocks[0].slug} />
                <a href="#how-it-works" className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                  How the qualifier works <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            {/* Exam-portal preview */}
            <div aria-hidden className="hidden overflow-hidden rounded-2xl border border-border bg-bg shadow-xl lg:block">
              <div className="flex items-center gap-2 bg-ink px-4 py-2.5 text-bg">
                <span className="grid size-6 place-items-center rounded-md bg-brand text-xs font-black text-brand-ink">B</span>
                <span className="flex-1 text-xs font-bold">Qualifier Mock 1</span>
                <span className="flex items-center gap-1.5 rounded-md bg-bg/10 px-2 py-1 font-mono text-xs font-bold">
                  <Clock className="size-3" /> 01:42:17
                </span>
              </div>
              <div className="flex gap-4 border-b border-border bg-surface px-4 text-xs font-medium">
                {["Maths I", "Stats I", "CT", "English I"].map((s, i) => (
                  <span key={s} className={i === 2 ? "border-b-2 border-brand py-2" : "py-2 text-muted"}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-[1fr_130px]">
                <div className="space-y-2 p-4">
                  <p className="text-xs font-bold">Question 8</p>
                  <div className="rounded-lg bg-ink p-2.5 font-mono text-[10px] leading-relaxed text-bg">
                    while (b != 0) {"{"}
                    <br />
                    &nbsp;&nbsp;t = b; b = a mod b; a = t
                    <br />
                    {"}"}
                  </div>
                  {["6", "12", "36", "252"].map((o, i) => (
                    <div key={o} className={`rounded-lg border-2 px-2.5 py-1.5 text-[11px] ${i === 1 ? "border-fg" : "border-border"}`}>
                      {String.fromCharCode(65 + i)}. {o}
                    </div>
                  ))}
                </div>
                <div className="border-l border-border bg-surface p-3">
                  <div className="grid grid-cols-3 gap-1.5">
                    {["a", "a", "na", "am", "a", "m", "a", "c", "nv", "nv"].map((s, i) => (
                      <span
                        key={i}
                        className={`grid size-7 place-items-center text-[10px] font-bold ${
                          s === "a"
                            ? "rounded-t-lg rounded-b bg-green text-bg"
                            : s === "na"
                              ? "rounded-b-lg rounded-t bg-red text-bg"
                              : s === "m" || s === "am"
                                ? "rounded-full bg-purple text-bg"
                                : s === "c"
                                  ? "rounded bg-surface-2 ring-2 ring-fg"
                                  : "rounded border border-border bg-surface-2"
                        }`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 h-7 rounded-lg bg-ink" />
                </div>
              </div>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
            {[
              ["4", "courses in one pack"],
              [String(qualifierMocks.length), "full-length mocks"],
              [String(totalQuestions), "original questions"],
              [`${QUALIFIER_CUTOFF.perSubject}% / ${QUALIFIER_CUTOFF.average}%`, "cutoff checked per attempt"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-bold tracking-tight tabular-nums">{v}</dd>
                <p className="text-sm text-muted">{l}</p>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ───────── Courses in the pack ───────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeader eyebrow="What's inside" title="Four courses, one qualifier" description="The qualifier examines weeks 1–4 of each Foundation course." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUALIFIER_SUBJECTS.map((slug) => {
            const s = getSubject(slug)!;
            return (
              <div key={slug} className="card flex flex-col p-5">
                <p className="font-mono text-xs text-muted">{s.code}</p>
                <h3 className="mt-1 font-bold leading-snug">{s.name}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {QUALIFIER_SYLLABUS[slug].map((t, i) => (
                    <li key={t} className="flex gap-2">
                      <span className="w-12 shrink-0 text-xs font-semibold leading-5 text-muted">Week {i + 1}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3 border-t border-border pt-4 text-sm font-semibold">
                  <Link href={`/subjects/${slug}`} className="hover:underline">Course</Link>
                  <Link href={practiceHref(slug, "qualifier")} className="text-muted hover:text-fg hover:underline">Practise</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── Mocks ───────── */}
      <section className="container-page pb-14 md:pb-20">
        <SectionHeader eyebrow="Ace your qualifier exam" title="Full-length mock exams" description="All four courses in one timed sitting, just like exam day." />
        <div className="grid gap-5 lg:grid-cols-2">
          {qualifierMocks.map((m, i) => (
            <article key={m.slug} className="card flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow mb-1">Mock {i + 1}</p>
                  <h3 className="text-xl font-bold tracking-tight">{m.title}</h3>
                </div>
                <Badge tone={m.difficulty === "Standard" ? "blue" : "purple"}>{m.difficulty}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted">{m.description}</p>
              <ul className="mt-5 grid grid-cols-3 gap-3 text-sm">
                <li className="rounded-xl bg-surface-2 p-3">
                  <Clock className="mb-1 size-4 text-muted" aria-hidden />
                  <b className="tabular-nums">{m.durationMin}</b> min
                </li>
                <li className="rounded-xl bg-surface-2 p-3">
                  <ListChecks className="mb-1 size-4 text-muted" aria-hidden />
                  <b className="tabular-nums">{mockQuestions(m).length}</b> questions
                </li>
                <li className="rounded-xl bg-surface-2 p-3">
                  <BookOpenCheck className="mb-1 size-4 text-muted" aria-hidden />
                  <b className="tabular-nums">{mockMarks(m)}</b> marks
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.sections.map((s) => (
                  <span key={s.subjectSlug} className="rounded-md border border-border px-2 py-0.5 text-xs text-muted">
                    {s.short} · {s.questions.length}Q
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <MockAction slug={m.slug} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── Previous-year papers ───────── */}
      <section id="pyqs" className="container-page scroll-mt-24 pb-14 md:pb-20">
        <SectionHeader
          eyebrow="Previous-year questions"
          title="Previous-year papers, course by course"
          description="Real papers from past terms with the same questions, options and official answer key. Sit them year by year in the exam portal."
        />
        <div className="space-y-10">
          {pyqGroups.map(({ subjectSlug, papers }) => {
            const s = getSubject(subjectSlug)!;
            return (
              <div key={subjectSlug} id={`pyqs-${subjectSlug}`} className="scroll-mt-24">
                <h3 className="mb-4 flex flex-wrap items-baseline gap-x-3 text-lg font-bold tracking-tight">
                  {s.name}
                  <span className="text-sm font-normal text-muted">{papers.length} papers</span>
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {papers.map((p) => (
                    <article key={p.slug} className="card flex flex-col p-5">
                      <p className="eyebrow mb-1">{p.sections[0].short} · PYQ</p>
                      <h4 className="text-lg font-bold tracking-tight">{p.title.split(" · ").at(-1)}</h4>
                      <p className="mt-2 flex flex-1 flex-wrap content-start gap-x-3 gap-y-1 text-sm text-muted tabular-nums">
                        <span>{mockQuestions(p).length} questions</span>
                        <span>{mockMarks(p)} marks</span>
                        <span>{p.durationMin} min</span>
                      </p>
                      <div className="mt-5 border-t border-border pt-4">
                        <MockAction slug={p.slug} />
                      </div>
                    </article>
                  ))}
                </div>
                {PYQ_NOTES[subjectSlug] && <p className="mt-4 text-xs text-muted">{PYQ_NOTES[subjectSlug]}</p>}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-muted">
          Through the qualifier already?{" "}
          <Link href="/pyqs" className="inline-flex items-center gap-1 font-semibold text-fg hover:underline">
            Every PYQ, level by level, including full-syllabus End Term papers <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </p>
      </section>

      {/* ───────── Real exam experience ───────── */}
      <section className="container-page pb-14 md:pb-20">
        <SectionHeader eyebrow="Exam-day experience" title="Feels like the real qualifier" description="Practise the interface too, so nothing on exam day is new." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-brand/20">
                <f.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <QualifierHistory />

      {/* ───────── How it works ───────── */}
      <section id="how-it-works" className="container-page scroll-mt-24 pb-14 md:pb-20">
        <SectionHeader title="How the qualifier works" />
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            ["Learn weeks 1–4", "Watch the lectures for all four courses and submit the graded assignments."],
            ["Become eligible", "Meet the assignment-score requirement to get your qualifier hall ticket."],
            ["Take the qualifier", "One in-person exam covering Maths I, Stats I, CT and English I."],
            ["Clear the cutoff", `At least ${QUALIFIER_CUTOFF.perSubject}% in each course and ${QUALIFIER_CUTOFF.average}% on average (general category) to join the Foundation level.`],
          ].map(([t, d], i) => (
            <li key={t} className="card p-5">
              <span className="grid size-8 place-items-center rounded-full bg-ink text-sm font-bold text-bg">{i + 1}</span>
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 flex items-start gap-2 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          BTechi is not affiliated with IIT Madras. Mock questions are original and written in the qualifier&apos;s style; previous-year papers are
          reproduced from past question papers. Eligibility rules,
          category-wise cutoffs and exam duration can change between terms, so always confirm them in the official student handbook.
        </p>
      </section>
    </>
  );
}
