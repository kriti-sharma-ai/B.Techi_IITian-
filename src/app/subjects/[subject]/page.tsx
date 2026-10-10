import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FileText,
  ListTree,
  PenLine,
  PlayCircle,
  ScrollText,
  Shuffle,
  Sparkles,
  Target,
  Timer,
} from "lucide-react";
import { BookCard, NoteCard, PyqCard } from "@/components/cards";
import { PyqAnalysis } from "@/components/pyq-analysis";
import { PaperRows } from "@/components/pyq-papers";
import { SubjectProgressPanel, VisitTracker } from "@/components/progress";
import { Quiz } from "@/components/quiz";
import { SkillCard } from "@/components/skill-card";
import { BookmarkButton } from "@/components/resource-actions";
import { Breadcrumbs, ButtonLink, buttonClass } from "@/components/ui";
import { VideoCard } from "@/components/video-card";
import {
  allTopics,
  assignments,
  booksForSubject,
  forSubject,
  getSubject,
  hasContent,
  notes,
  pyqs,
  questions,
  skillsForSubject,
  subjectPlacement,
  subjectStats,
  videos,
} from "@/lib/content";
import { parseWeekItem, resolveItem, unitForWeek, WEEKS } from "@/lib/course";
import { param } from "@/lib/filters";
import { PYQ_EXAMS, getPyqCourse, pyqPapersFor } from "@/lib/pyq-index";
import type { Subject } from "@/lib/types";
import { formatDate, SITE_URL } from "@/lib/utils";

export async function generateMetadata({ params }: PageProps<"/subjects/[subject]">): Promise<Metadata> {
  const s = getSubject((await params).subject);
  if (!s) notFound();
  const { program, level } = subjectPlacement(s);
  const code = s.code ? `${s.code} ` : "";
  return {
    title: `${code}${s.name}: Notes, PYQs & Practice (${program.university} BS ${level.short})`,
    description: `${s.name}${s.code ? ` (${s.code})` : ""}, a ${s.credits}-credit ${level.short} Level course of the ${program.university} ${program.degree}. Week-wise notes, videos, previous year questions and practice.`,
    alternates: { canonical: `/subjects/${s.slug}` },
  };
}

export default async function SubjectPage({ params, searchParams }: PageProps<"/subjects/[subject]">) {
  const subject = getSubject((await params).subject);
  if (!subject) notFound();
  const sp = await searchParams;
  const item = resolveItem(param(sp, "item"), param(sp, "tab"));
  const { program, level } = subjectPlacement(subject);
  const week = parseWeekItem(item);

  const head: Record<string, [string, string, LucideIcon]> = {
    about: ["About the Course", "Course Introduction", FileText],
    notes: ["Notes", "Supplementary Contents", FileText],
    videos: ["Videos", "Supplementary Contents", PlayCircle],
    books: ["Reference Books", "Supplementary Contents", BookOpen],
    pyqs: ["Previous Year Papers", "Supplementary Contents", ScrollText],
    practice: ["Full Course Practice", "Supplementary Contents", PenLine],
  };
  const [title, eyebrow, Icon] = week
    ? week.part === "practice"
      ? (["Practice Questions", `Week ${week.week}`, PenLine] as const)
      : (["Graded Assignment", `Week ${week.week}`, ClipboardCheck] as const)
    : head[item];

  return (
    <>
      <VisitTracker subjectSlug={subject.slug} />
      <div className="px-4 py-6 md:px-8 lg:py-8">
        <Breadcrumbs
          items={[
            { label: program.name, href: `/programs/${program.slug}` },
            { label: level.name, href: `/programs/${program.slug}/${level.slug}` },
            { label: subject.name },
          ]}
        />
        <header className="mb-6 flex items-start gap-3 border-b border-border pb-4">
          <Icon className="mt-1 size-6 shrink-0" aria-hidden />
          <div>
            <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
            <p className="text-sm font-medium text-muted">{eyebrow}</p>
          </div>
        </header>

        <div className="max-w-5xl">
          {item === "about" && <About subject={subject} />}
          {week?.part === "practice" && <WeekPractice subject={subject} week={week.week} />}
          {week?.part === "graded" && <WeekGraded subject={subject} week={week.week} />}
          {item === "notes" && <Notes subject={subject} />}
          {item === "videos" && <Videos subject={subject} />}
          {item === "books" && <Books subject={subject} />}
          {item === "pyqs" && <Pyqs subject={subject} />}
          {item === "practice" && <Practice subject={subject} />}
        </div>
      </div>
    </>
  );
}

/* ───────────── Items ───────────── */

function About({ subject }: { subject: Subject }) {
  const { program, level, group } = subjectPlacement(subject);
  const ready = hasContent(subject);
  const stats = subjectStats(subject);
  const firstTopic = allTopics(subject)[0];
  const skills = skillsForSubject(subject.slug);
  const base = `/subjects/${subject.slug}`;
  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: subject.name,
    description: subject.description ?? `${subject.name}, ${level.name} course of the ${program.university} ${program.degree}.`,
    url: `${SITE_URL}${base}`,
    provider: { "@type": "Organization", name: "BTechi", sameAs: SITE_URL },
    courseCode: subject.code,
    educationalLevel: `${program.degree}, ${level.name}`,
    numberOfCredits: subject.credits,
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: `${WEEKS} weeks` },
    offers: { "@type": "Offer", price: 0, priceCurrency: "INR", category: "Free" },
  };
  const facts = [
    ["Course ID", subject.code ?? "To be announced"],
    ["Course Credits", String(subject.credits)],
    ["Course Type", [level.short, group?.name].filter(Boolean).join(" · ")],
    ["Pre-requisites", subject.prerequisites],
    ["Duration", `${WEEKS} weeks`],
  ];
  const material = [
    { label: "Notes", n: stats.notes, item: "notes" },
    { label: "Videos", n: stats.videos, item: "videos" },
    { label: "Practice questions", n: stats.questions, item: "practice" },
    { label: "Previous year papers", n: stats.pyqs + pyqPapersFor(subject.slug).length, item: "pyqs" },
    { label: "Reference books", n: stats.books, item: "books" },
  ];

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />
      {!ready && (
        <ComingSoon
          title={`${subject.name} content is coming soon`}
          description={`We're preparing week-wise lessons, practice questions and graded assignments for all ${WEEKS} weeks. The outline on the left shows what's on the way.`}
        />
      )}

      <section>
        <h2 className="text-2xl font-bold tracking-tight">{subject.name}</h2>
        {subject.description && <p className="mt-2 max-w-2xl text-muted">{subject.description}</p>}
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-muted">
          {facts.map(([l, v]) => (
            <li key={l}>
              <span className="font-semibold">{l}:</span> {v}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {firstTopic && (
            <ButtonLink href={`${base}/${firstTopic.topic.slug}`}>
              Start learning <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          )}
          <BookmarkButton
            withLabel
            item={{ kind: "topic", id: `subject:${subject.slug}`, title: subject.name, href: base, subtitle: [subject.code, level.short].filter(Boolean).join(" · ") }}
          />
        </div>
      </section>

      {ready && (
        <section className="max-w-sm">
          <SubjectProgressPanel subject={subject} />
        </section>
      )}

      <section>
        <h3 className="text-lg font-bold">Study Material</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-muted">
          {material.map((m) => (
            <li key={m.label}>
              <Link href={`${base}?item=${m.item}`} scroll={false} className="hover:underline">
                {m.label}
              </Link>{" "}
              <span className="text-sm text-muted">{m.n ? `(${m.n})` : "· coming soon"}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-bold">Course Structure</h3>
        <p className="mt-2 max-w-2xl text-muted">
          The course runs for {WEEKS} weeks. Every week has its lessons, a set of practice questions to check your understanding, and a
          graded assignment. Assessments include Quiz 1, Quiz 2 and an End Term exam.
        </p>
      </section>

      {skills.length > 0 && (
        <section>
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">Level up with Skills</h3>
              <p className="text-sm text-muted">Free hands-on courses that reinforce {subject.name}.</p>
            </div>
            <Link href="/skills" className="hidden shrink-0 text-sm font-medium text-muted hover:text-fg sm:inline">
              All skills →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skills.slice(0, 3).map((c) => (
              <SkillCard key={c.slug} course={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function WeekPractice({ subject, week }: { subject: Subject; week: number }) {
  const unit = unitForWeek(subject, week);
  const qs = unit ? questions.filter((q) => q.subjectSlug === subject.slug && q.unitId === unit.id) : [];
  if (!qs.length)
    return (
      <ComingSoon
        title={`Week ${week} practice questions are coming soon`}
        description="Ungraded questions with instant explanations to check your understanding before the graded assignment."
      />
    );
  return (
    <div>
      {unit && <p className="mb-4 text-muted">{unit.title}</p>}
      <Quiz questions={qs} title={`Week ${week} practice`} />
    </div>
  );
}

function WeekGraded({ subject, week }: { subject: Subject; week: number }) {
  const unit = unitForWeek(subject, week);
  const list = unit ? forSubject(assignments, subject.slug).filter((a) => a.unitId === unit.id) : [];
  if (!list.length)
    return (
      <ComingSoon
        title={`Week ${week} graded assignment is coming soon`}
        description="The graded assignment for this week will be listed here with its due date once it's published."
      />
    );
  return (
    <ul className="space-y-3">
      {list.map((a) => (
        <li key={a.id} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue/10 text-blue">
            <ClipboardCheck className="size-5" aria-hidden />
          </span>
          <div className="flex-1">
            <p className="font-semibold">{a.title}</p>
            <p className="text-sm text-muted">{a.description}</p>
          </div>
          {a.due && <p className="text-sm font-medium">Due {formatDate(a.due)}</p>}
        </li>
      ))}
    </ul>
  );
}

function Notes({ subject }: { subject: Subject }) {
  const list = forSubject(notes, subject.slug);
  if (!list.length) return <ComingSoon title="Notes are coming soon" description={`Lecture notes, cheat sheets and revision sheets for ${subject.name}.`} />;
  return (
    <div className="space-y-8">
      {subject.units.map((u) => {
        const unitNotes = list.filter((n) => n.unitId === u.id);
        if (!unitNotes.length) return null;
        return (
          <section key={u.id}>
            <h2 className="mb-3 text-sm font-semibold">
              <span className="text-muted">Week {u.number} ·</span> {u.title}
            </h2>
            <div className="space-y-3">
              {unitNotes.map((n) => (
                <NoteCard key={n.id} note={n} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Videos({ subject }: { subject: Subject }) {
  const list = forSubject(videos, subject.slug);
  if (!list.length) return <ComingSoon title="Videos are coming soon" description={`Video explanations for every week of ${subject.name}.`} />;
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {list.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}

function Books({ subject }: { subject: Subject }) {
  const list = booksForSubject(subject.slug);
  if (!list.length) return <ComingSoon title="Book recommendations are coming soon" description={`Reference books and the chapters that matter for ${subject.name}.`} />;
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {list.map((b) => (
        <BookCard key={b.slug} book={b} />
      ))}
    </div>
  );
}

function Pyqs({ subject }: { subject: Subject }) {
  const list = forSubject(pyqs, subject.slug).sort((a, b) => b.year - a.year);
  const portal = PYQ_EXAMS.map((e) => ({ ...e, papers: pyqPapersFor(subject.slug, e.slug) })).filter((e) => e.papers.length > 0);
  if (!list.length && !portal.length)
    return <ComingSoon title="Previous year papers are coming soon" description="Quiz 1, Quiz 2 and End Term papers with topic-wise analysis." />;
  return (
    <div className="space-y-10">
      {portal.map((e) => (
        <section key={e.slug}>
          <h2 className="text-lg font-bold">{e.label} papers</h2>
          <p className="mt-0.5 text-sm text-muted">{e.description} Sit each one in the timed exam portal with the official answer key.</p>
          <div className="card mt-4 px-5 py-1">
            <PaperRows papers={e.papers} />
          </div>
        </section>
      ))}
      {portal.length > 0 && (
        <Link href={getPyqCourse(subject.slug)!.href} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
          All {subject.name} PYQs <ArrowRight className="size-4" aria-hidden />
        </Link>
      )}
      {list.length > 0 && (
        <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {list.map((p) => (
              <PyqCard key={p.id} pyq={p} />
            ))}
          </div>
          <PyqAnalysis subjectSlug={subject.slug} />
        </div>
      )}
    </div>
  );
}

function Practice({ subject }: { subject: Subject }) {
  const count = forSubject(questions, subject.slug).length;
  if (!count) return <ComingSoon title="Full course practice is coming soon" description="Quick practice, full timed tests and hard-question sets across all weeks." />;
  const s = subject.slug;
  const modes = [
    { icon: Shuffle, t: "Quick practice", d: "10 random questions with instant explanations.", href: `/practice/session?subject=${s}&count=10` },
    { icon: Timer, t: "Full test", d: "All questions, timed, graded at the end.", href: `/practice/session?subject=${s}&mode=exam` },
    { icon: Target, t: "Hard questions only", d: "Push yourself with the toughest set.", href: `/practice/session?subject=${s}&difficulty=Hard` },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {modes.map((m) => (
        <Link key={m.t} href={m.href} className="card card-hover p-5">
          <m.icon className="size-5 text-purple" aria-hidden />
          <p className="mt-3 font-semibold">{m.t}</p>
          <p className="mt-1 text-sm text-muted">{m.d}</p>
        </Link>
      ))}
    </div>
  );
}

/* ───────────── Coming soon banner ───────────── */

function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand/50 bg-brand/10 p-6 md:p-8">
      <ListTree className="pointer-events-none absolute -right-4 -bottom-6 size-36 text-brand/15" aria-hidden />
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-ink">
        <Sparkles className="size-3.5" aria-hidden /> Coming soon
      </span>
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-1 max-w-xl text-sm text-muted">{description}</p>
      <Link href="/contribute" className={buttonClass("secondary", "md", "relative mt-5")}>
        Request this content →
      </Link>
    </div>
  );
}
