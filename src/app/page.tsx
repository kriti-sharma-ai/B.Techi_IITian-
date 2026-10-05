import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, Layers, PenLine, Smartphone, Target, Users, BookOpenCheck } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { SearchBar } from "@/components/search-bar";
import { NoteCard, ProgramCard, PyqCard, QuestionPreviewCard, SubjectCard } from "@/components/cards";
import { VideoCard } from "@/components/video-card";
import { ContinueLearning } from "@/components/progress";
import { ButtonLink, SectionHeader } from "@/components/ui";
import { getSubject, popularNotes, programs, pyqs, pyqTopicFrequency, questions, subjects, videos } from "@/lib/content";

const tryQueries = ["Data Science", "Marketing Management", "Statistics Unit 3", "Python Notes"];

export default function HomePage() {
  const popularSubjects = ["statistics", "python-for-data-science", "marketing-management", "linear-algebra"]
    .map((s) => subjects.find((x) => x.slug === s)!)
    .filter(Boolean);
  const featuredQuestions = ["s-q4", "s-q1", "m-q1"].map((id) => questions.find((q) => q.id === id)!);
  const featuredVideos = videos.filter((v) => v.youtubeId).concat(videos.filter((v) => !v.youtubeId)).slice(0, 3);
  const recentPyqs = [...pyqs].sort((a, b) => b.year - a.year).slice(0, 3);
  const analysis = pyqTopicFrequency("statistics").slice(0, 4);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold">
              <span className="size-1.5 rounded-full bg-brand" /> By BTechi IITian
            </p>
            <h1 className="text-[2.5rem] leading-[1.08] font-extrabold tracking-tight md:text-5xl">
              Your entire degree,
              <br />
              <span className="underline decoration-brand decoration-[0.14em] underline-offset-[0.14em] [text-decoration-skip-ink:none]">organised</span>{" "}
              in one place.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Notes, curriculum, videos, books, previous-year questions and practice, structured by program, semester,
              subject and topic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/programs" size="lg">
                Explore Programs <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/notes" variant="secondary" size="lg">
                Browse Notes
              </ButtonLink>
            </div>

            <SearchBar className="mt-10 max-w-xl" />
            <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted">
              Try:
              {tryQueries.map((q) => (
                <Link
                  key={q}
                  href={`/search?q=${encodeURIComponent(q)}`}
                  className="rounded-md bg-surface-2 px-2 py-0.5 font-medium text-fg/80 hover:text-fg"
                >
                  {q}
                </Link>
              ))}
            </p>
          </div>
          <div className="hidden md:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ───────── Programs ───────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeader eyebrow="Step 1" title="Explore your program" description="Pick your degree. Everything else follows from there." href="/programs" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      {/* ───────── Continue learning ───────── */}
      <section className="container-page pb-14 md:pb-20">
        <SectionHeader title="Continue learning" href="/dashboard" linkLabel="Dashboard" />
        <ContinueLearning />
      </section>

      {/* ───────── Popular subjects ───────── */}
      <section className="border-y border-border bg-surface py-14 md:py-20">
        <div className="container-page">
          <SectionHeader title="Popular subjects" description="Full curriculum with notes, videos and questions for every topic." href="/subjects" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularSubjects.map((s) => (
              <SubjectCard key={s.slug} subject={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Notes + Practice ───────── */}
      <section className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <SectionHeader title="Popular notes" description="Preview first, download only if you need it." href="/notes" />
          <div className="space-y-3">
            {popularNotes(4).map((n) => (
              <NoteCard key={n.id} note={n} showSubject />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Practice questions" description="Every answer comes with a “Why?”." href="/practice" />
          <div className="grid gap-3">
            {featuredQuestions.map((q) => (
              <QuestionPreviewCard key={q.id} question={q} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Videos ───────── */}
      <section className="border-y border-border bg-surface py-14 md:py-20">
        <div className="container-page">
          <SectionHeader title="Video learning" description="Short, topic-mapped videos from the BTechi IITian channel and trusted educators." href="/videos" />
          <div className="grid gap-4 md:grid-cols-3">
            {featuredVideos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PYQs ───────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeader title="Previous year papers" description="View, download, or practise them question by question." href="/pyqs" />
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1.1fr]">
          {recentPyqs.map((p) => (
            <PyqCard key={p.id} pyq={p} />
          ))}
          <Link href="/pyqs?subject=statistics#analysis" className="card card-hover flex flex-col p-5">
            <p className="eyebrow">PYQ analysis · {getSubject("statistics")?.name}</p>
            <p className="mt-1 font-semibold">Most repeated topics</p>
            <ul className="mt-4 space-y-3">
              {analysis.map((a) => (
                <li key={a.slug}>
                  <div className="flex justify-between text-sm">
                    <span>{a.title}</span>
                    <span className="font-semibold tabular-nums">{a.percent}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-surface-2">
                    <div className="h-full rounded-full bg-ink" style={{ width: `${a.percent}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Link>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="border-y border-border bg-surface py-14 md:py-20">
        <div className="container-page">
          <SectionHeader title="How BTechi works" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Compass, t: "Choose", d: "Program → semester → subject. Three clicks to your syllabus.", c: "text-fg bg-brand/25" },
              { icon: Layers, t: "Learn", d: "Each topic pairs notes, a video and the right book chapter.", c: "text-teal bg-teal/10" },
              { icon: PenLine, t: "Practice", d: "Topic-wise questions with explanations, not just answers.", c: "text-purple bg-purple/10" },
              { icon: Target, t: "Prepare", d: "PYQs, repeated-topic analysis and timed mock tests.", c: "text-blue bg-blue/10" },
            ].map((s, i) => (
              <li key={s.t} className="relative rounded-2xl border border-border p-5">
                <span className="absolute top-5 right-5 text-sm font-semibold text-muted tabular-nums">0{i + 1}</span>
                <span className={`grid size-10 place-items-center rounded-xl ${s.c}`}>
                  <s.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Why BTechi ───────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeader title="Why BTechi" description="Not a file dump. A structured academic platform." />
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Layers, t: "Organised", d: "Curriculum first: every resource is mapped to a unit and topic." },
            { icon: BadgeCheck, t: "Verified", d: "Resources are reviewed and flagged when they go out of date." },
            { icon: Smartphone, t: "Accessible", d: "Fast on mobile data, works in dark mode, keyboard friendly." },
            { icon: Users, t: "Student-focused", d: "Built by IITians who needed this during their own exams." },
          ].map((x) => (
            <div key={x.t} className="flex gap-3">
              <x.icon className="mt-0.5 size-5 shrink-0" aria-hidden />
              <div>
                <h3 className="font-semibold">{x.t}</h3>
                <p className="mt-1 text-sm text-muted">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b0b0b] px-6 py-12 text-white md:px-12 md:py-16">
          <div className="grid-pattern absolute inset-0 text-white opacity-40" aria-hidden />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <BookOpenCheck className="mb-4 size-8 text-brand" aria-hidden />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Start learning today.</h2>
              <p className="mt-2 max-w-md text-white/70">Free to use. Track your progress, save resources and practise with explanations.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/signup" size="lg">
                Create free account
              </ButtonLink>
              <Link
                href="/programs"
                className="inline-flex h-12 items-center rounded-xl border border-white/20 px-6 text-[15px] font-medium hover:bg-white/10"
              >
                Explore first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
