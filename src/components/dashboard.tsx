"use client";

import Link from "next/link";
import { ArrowRight, Award, CalendarClock, Download, Flame, LogOut, Settings2, Sparkles } from "lucide-react";
import { actions, studyStreak, useHydrated, useStore, weeklyActivity } from "@/lib/store";
import { PROGRAM_SLUG, allTopics, assignments, getProgram, getSubject, pyqs, subjects, topicKey } from "@/lib/content";
import type { CourseExamLinks } from "@/lib/pyq-practice";
import { getStudyCourse } from "@/lib/study-courses";
import { ContinueLearning, SubjectProgressBar } from "./progress";
import { openStudySetup } from "./study-setup";
import { Button, ProgressBar, Stat, buttonClass } from "./ui";
import { cn, formatDate } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client";
import { flushProgress } from "@/lib/supabase/sync";

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

export function Dashboard({ exams }: { exams: CourseExamLinks[] }) {
  const hydrated = useHydrated();
  const state = useStore((s) => s);
  const { user, attempts, completed, downloads, visits, plan } = state;

  if (!hydrated)
    return (
      <div className="space-y-4">
        <div className="skeleton h-10 w-72" />
        <div className="skeleton h-28" />
        <div className="skeleton h-64" />
      </div>
    );

  const graded = attempts.filter((a) => a.correct !== null);
  const correct = graded.filter((a) => a.correct).length;
  const accuracy = graded.length ? Math.round((correct / graded.length) * 100) : 0;
  const solved = new Set(attempts.map((a) => a.questionId)).size;
  const streak = studyStreak(state);
  const week = weeklyActivity(state);
  const maxDay = Math.max(1, ...week.map((d) => d.count));

  // Courses: the student's study profile; without one, their level plus anything they've opened.
  const courseSlugs = new Set<string>(
    plan
      ? plan.subjects
      : [
          ...subjects
            .filter((s) => user && s.programSlug === user.program && s.level === user.level && s.kind === "course" && s.group !== "electives")
            .map((s) => s.slug),
          ...visits.map((v) => v.subjectSlug),
        ],
  );
  const courses = [...courseSlugs].map(getSubject).filter((s) => s !== undefined);
  const startedCourses = courses.filter((s) => allTopics(s).some(({ topic }) => completed.includes(topicKey(s.slug, topic.slug))));

  const upcoming = assignments
    .filter((a) => courseSlugs.has(a.subjectSlug) && a.due && new Date(a.due) >= new Date(new Date().toDateString()))
    .sort((a, b) => a.due!.localeCompare(b.due!))
    .slice(0, 4);

  const pyqAttempts = new Set(attempts.filter((a) => pyqs.some((p) => p.questionIds.includes(a.questionId))).map((a) => a.questionId)).size;
  const badges = [
    { t: "Foundation Starter", earned: completed.some((k) => getSubject(k.split("/")[0])?.level === "foundation"), d: "Complete a Foundation topic" },
    { t: "First 100 Questions", earned: attempts.length >= 100, d: `${Math.min(attempts.length, 100)}/100 attempts` },
    { t: "7-Day Streak", earned: streak >= 7, d: `${Math.min(streak, 7)}/7 days` },
    { t: "PYQ Master", earned: pyqAttempts >= 15, d: `${Math.min(pyqAttempts, 15)}/15 PYQ questions` },
  ];

  const program = getProgram(user?.program ?? PROGRAM_SLUG);
  const levelName = program?.levels.find((l) => l.slug === (plan?.level ?? user?.level))?.name;

  const myExams = plan ? exams.filter((e) => plan.subjects.includes(e.slug)) : [];
  const noPapers = plan ? plan.subjects.filter((s) => !exams.some((e) => e.slug === s)).map((s) => getStudyCourse(s)?.name ?? s) : [];

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {greeting()}, {user ? user.name.split(" ")[0] : "Student"} 👋
          </h1>
          <p className="mt-1 text-muted">
            {user && program ? [program.name, levelName].filter(Boolean).join(" · ") : "Your progress is saved in this browser."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {plan && (
            <Link href="/profile" className={buttonClass("ghost", "sm")}>
              <Settings2 className="size-4" aria-hidden /> Study profile
            </Link>
          )}
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                actions.signOut();
                await flushProgress();
                await supabase.auth.signOut();
              }}
            >
              <LogOut className="size-4" aria-hidden /> Sign out
            </Button>
          ) : (
            <Link href="/signup" className={buttonClass("primary")}>
              Create free account
            </Link>
          )}
        </div>
      </div>

      {!plan && (
        <section aria-labelledby="setup-h" className="card flex flex-wrap items-center gap-4 border-brand/60 bg-brand/5 p-5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-brand-ink">
            <Sparkles className="size-5" aria-hidden />
          </span>
          <div className="min-w-[14rem] flex-1">
            <h2 id="setup-h" className="font-semibold">
              Set up your study environment
            </h2>
            <p className="text-sm text-muted">
              Pick your level and this term&apos;s courses. BTechi will show just those courses, their past papers and practice.
            </p>
          </div>
          <Button onClick={openStudySetup}>
            Set up now <ArrowRight className="size-4" aria-hidden />
          </Button>
        </section>
      )}

      <section aria-labelledby="learning-h" className="card grid grid-cols-2 gap-6 p-5 md:grid-cols-5">
        <h2 id="learning-h" className="sr-only">
          Your learning
        </h2>
        <Stat label="Topics completed" value={completed.length} />
        <Stat label="Questions solved" value={solved} />
        <Stat label="Accuracy" value={`${accuracy}%`} />
        <Stat label="Courses in progress" value={startedCourses.length} />
        <div>
          <p className="flex items-center gap-1.5 text-2xl font-bold tabular-nums">
            {streak} <Flame className={cn("size-5", streak ? "text-amber" : "text-muted")} aria-hidden />
          </p>
          <p className="text-sm text-muted">Day streak</p>
        </div>
      </section>

      {plan && (
        <section aria-labelledby="exams-h">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="exams-h" className="text-lg font-bold">
              Your exams
            </h2>
            {myExams.length > 0 && (
              <Link href="/pyqs" className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                All your papers <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
          </div>
          {myExams.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {myExams.map((e) => (
                <li key={e.slug} className="card flex flex-col p-4">
                  <p className="text-xs font-semibold text-muted">
                    {e.code && <span className="font-mono">{e.code} · </span>}
                    {e.exams.join(" · ")}
                  </p>
                  <p className="mt-1 leading-snug font-semibold">{e.name}</p>
                  <p className="mt-1 text-xs text-muted tabular-nums">{plural(e.papers, "past paper")}</p>
                  <div className="mt-auto flex gap-2 pt-4">
                    <Link href={e.practiceHref} className={buttonClass("dark", "sm")}>
                      Practise
                    </Link>
                    <Link href={e.href} className={buttonClass("secondary", "sm")}>
                      Past papers
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card p-5 text-sm text-muted">
              None of your courses have past papers yet. We&apos;ll list them here as they&apos;re added.
            </div>
          )}
          {myExams.length > 0 && noPapers.length > 0 && (
            <p className="mt-3 text-xs text-muted">No past papers yet for {new Intl.ListFormat("en").format(noPapers)}.</p>
          )}
        </section>
      )}

      <section>
        <h2 className="mb-4 text-lg font-bold">Continue learning</h2>
        <ContinueLearning />
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <section>
          <h2 className="mb-4 text-lg font-bold">Your courses</h2>
          {courses.length ? (
            <ul className="card divide-y divide-border">
              {courses.map((s) => (
                <li key={s.slug}>
                  <Link href={`/subjects/${s.slug}`} className="block px-5 py-4 hover:bg-surface-2/50">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold">{s.name}</p>
                      <p className="font-mono text-xs text-muted">{s.code}</p>
                    </div>
                    <SubjectProgressBar subject={s} className="mt-2" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card p-5 text-sm text-muted">
              {plan ? "Your study profile has no BTechi course pages yet." : "Open a subject and it will show up here."}{" "}
              <Link href="/programs" className="font-semibold text-fg hover:underline">
                Explore programs →
              </Link>
            </div>
          )}
        </section>

        <section aria-labelledby="week-h">
          <h2 id="week-h" className="mb-4 text-lg font-bold">
            Weekly activity
          </h2>
          <div className="card p-5">
            <ul className="space-y-2.5">
              {week.map((d) => (
                <li key={d.date} className="grid grid-cols-[2.5rem_1fr_2rem] items-center gap-3 text-sm">
                  <span className="text-muted">{d.label}</span>
                  <ProgressBar value={(d.count / maxDay) * 100} tone="brand" label={`${d.label}: ${d.count} activities`} />
                  <span className="text-right text-xs text-muted tabular-nums">{d.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CalendarClock className="size-5" aria-hidden /> Upcoming
          </h2>
          <ul className="card divide-y divide-border text-sm">
            {upcoming.map((a) => (
              <li key={a.id} className="px-5 py-3.5">
                <Link href={`/subjects/${a.subjectSlug}?item=week-${getSubject(a.subjectSlug)?.units.find((u) => u.id === a.unitId)?.number ?? 1}-graded`} className="font-medium hover:underline">
                  {a.title}
                </Link>
                <p className="text-xs text-muted">
                  {getSubject(a.subjectSlug)?.name} · Due {formatDate(a.due!)}
                </p>
              </li>
            ))}
            {courses[0] && (
              <li className="px-5 py-3.5">
                <Link href={`/practice/session?subject=${courses[0].slug}&mode=exam&count=12&mock=1`} className="font-medium hover:underline">
                  {courses[0].name} mock test
                </Link>
                <p className="text-xs text-muted">Recommended · 24 min</p>
              </li>
            )}
            {!upcoming.length && !courses[0] && <li className="px-5 py-3.5 text-muted">Nothing scheduled.</li>}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Download className="size-5" aria-hidden /> Recent downloads
          </h2>
          <ul className="card divide-y divide-border text-sm">
            {downloads.slice(0, 5).map((d, i) => (
              <li key={d.at + i} className="flex justify-between gap-3 px-5 py-3.5">
                <span className="truncate font-medium">{d.title}</span>
                <span className="shrink-0 text-xs text-muted">
                  {new Date(d.at).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </li>
            ))}
            {!downloads.length && <li className="px-5 py-3.5 text-muted">No downloads yet.</li>}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Award className="size-5" aria-hidden /> Milestones
          </h2>
          <ul className="card divide-y divide-border text-sm">
            {badges.map((b) => (
              <li key={b.t} className="flex items-center gap-3 px-5 py-3">
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full",
                    b.earned ? "bg-brand text-brand-ink" : "bg-surface-2 text-muted",
                  )}
                >
                  <Award className="size-4" aria-hidden />
                </span>
                <span>
                  <span className={cn("block font-medium", !b.earned && "text-muted")}>{b.t}</span>
                  <span className="text-xs text-muted">{b.earned ? "Earned" : b.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
