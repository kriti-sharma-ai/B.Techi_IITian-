"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Bookmark,
  CalendarClock,
  Download,
  FileText,
  Flame,
  History,
  ListChecks,
  LogOut,
  Settings2,
  SlidersHorizontal,
  Target,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import { actions, studyStreak, useHydrated, useStore, weeklyActivity } from "@/lib/store";
import { PROGRAM_SLUG, allTopics, getProgram, getSubject, pyqs, subjects, topicKey } from "@/lib/content";
import type { CourseExamLinks } from "@/lib/pyq-practice";
import { getStudyCourse } from "@/lib/study-courses";
import { cheatSheets, cheatSheetForSubject, cheatSheetHref, cheatSheetStats } from "@/lib/data/cheat-notes";
import { ContinueLearning, SubjectProgressBar } from "./progress";
import { openStudySetup } from "./study-setup";
import { Badge, Button, MaybeLink, ProgressBar, buttonClass } from "./ui";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client";
import { flushProgress } from "@/lib/supabase/sync";

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

const shortDate = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short" });

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

/* ───────────── Building blocks ───────────── */

function StatTile({ icon: Icon, label, value, hint, tone }: { icon: LucideIcon; label: string; value: ReactNode; hint?: string; tone: string }) {
  return (
    <div className="card flex flex-col items-start gap-3 p-4 sm:flex-row">
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-lg", tone)}>
        <Icon className="size-4.5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-2xl leading-none font-bold tracking-tight tabular-nums">{value}</p>
        <p className="mt-1.5 text-sm text-muted">{label}</p>
        {hint && <p className="mt-0.5 text-xs text-muted sm:truncate">{hint}</p>}
      </div>
    </div>
  );
}

function SectionHead({ id, title, sub, action }: { id: string; title: string; sub?: string; action?: ReactNode }) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 id={id} className="text-lg font-bold">
          {title}
        </h2>
        {sub && <p className="text-xs text-muted">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

function SideCard({ id, icon: Icon, title, action, children }: { id: string; icon: LucideIcon; title: string; action?: ReactNode; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="card overflow-hidden">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <h2 id={id} className="flex items-center gap-2 text-sm font-semibold">
          <Icon className="size-4 text-muted" aria-hidden /> {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

const textLink = "inline-flex items-center gap-1 text-xs font-semibold hover:underline";

/** Last 7 days as small columns. Each column shows its count on hover and to screen readers. */
function WeekChart({ week }: { week: { label: string; date: string; count: number }[] }) {
  const max = Math.max(1, ...week.map((d) => d.count));
  const total = week.reduce((n, d) => n + d.count, 0);
  const today = new Date().toDateString();
  return (
    <div className="px-4 py-4">
      <p className="text-2xl leading-none font-bold tabular-nums">{total}</p>
      <p className="mt-1 text-xs text-muted">activities in the last 7 days</p>
      <ul className="mt-4 grid h-28 grid-cols-7 items-end gap-2" aria-label="Activity per day">
        {week.map((d) => (
          <li key={d.date} className="group relative flex h-full flex-col items-center justify-end gap-1.5" title={`${d.label}: ${d.count} ${d.count === 1 ? "activity" : "activities"}`}>
            <span className="pointer-events-none absolute -top-1 rounded bg-fg px-1.5 py-0.5 text-[10px] font-semibold text-bg opacity-0 transition-opacity group-hover:opacity-100 tabular-nums">
              {d.count}
            </span>
            <span
              className={cn("w-full max-w-6 rounded-t-[4px]", d.count ? "bg-brand" : "bg-surface-2")}
              style={{ height: d.count ? `${Math.max(8, (d.count / max) * 100)}%` : "4px" }}
            />
            <span className={cn("text-[10px]", d.date === today ? "font-bold text-fg" : "text-muted")}>{d.label.slice(0, 2)}</span>
            <span className="sr-only">{d.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────── Dashboard ───────────── */

export function Dashboard({ exams }: { exams: CourseExamLinks[] }) {
  const hydrated = useHydrated();
  const state = useStore((s) => s);
  const { user, attempts, completed, downloads, visits, plan, bookmarks, qualifierAttempts } = state;

  if (!hydrated)
    return (
      <div className="space-y-6">
        <div className="skeleton h-14 w-80" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-24" />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="skeleton h-80" />
          <div className="skeleton h-80" />
        </div>
      </div>
    );

  const graded = attempts.filter((a) => a.correct !== null);
  const correct = graded.filter((a) => a.correct).length;
  const accuracy = graded.length ? Math.round((correct / graded.length) * 100) : 0;
  const solved = new Set(attempts.map((a) => a.questionId)).size;
  const streak = studyStreak(state);
  const week = weeklyActivity(state);

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

  // Focus areas: courses with enough graded answers, weakest first.
  const byCourse = new Map<string, { right: number; total: number }>();
  for (const a of graded) {
    const c = byCourse.get(a.subjectSlug) ?? { right: 0, total: 0 };
    c.total++;
    if (a.correct) c.right++;
    byCourse.set(a.subjectSlug, c);
  }
  const focus = [...byCourse]
    .filter(([, c]) => c.total >= 3)
    .map(([slug, c]) => ({ slug, name: getSubject(slug)?.name ?? getStudyCourse(slug)?.name ?? slug, pct: Math.round((c.right / c.total) * 100), total: c.total }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 4);

  // Next steps, all from the student's own data: weak courses first, then term exams they haven't tried.
  const myExamsAll = plan ? exams.filter((e) => plan.subjects.includes(e.slug)) : [];
  const nextSteps = [
    ...focus
      .filter((f) => f.pct < 70)
      .map((f) => ({
        key: `weak-${f.slug}`,
        title: `Practise ${f.name}`,
        why: `Your accuracy is ${f.pct}%`,
        href: exams.find((e) => e.slug === f.slug)?.practiceHref ?? `/subjects/${f.slug}`,
      })),
    ...myExamsAll
      .filter((e) => !qualifierAttempts.some((a) => a.href === e.href || a.href?.startsWith(`${e.href}/`)))
      .map((e) => ({ key: `exam-${e.slug}`, title: `Try a ${e.name} past paper`, why: "Not attempted yet", href: e.href })),
  ].slice(0, 3);

  const recentExams = [...qualifierAttempts].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 4);

  const pyqAttempts = new Set(attempts.filter((a) => pyqs.some((p) => p.questionIds.includes(a.questionId))).map((a) => a.questionId)).size;
  const badges = [
    { t: "Foundation Starter", earned: completed.some((k) => getSubject(k.split("/")[0])?.level === "foundation"), d: "Complete a Foundation topic", pct: 0 },
    { t: "First 100 Questions", earned: attempts.length >= 100, d: `${Math.min(attempts.length, 100)}/100 attempts`, pct: Math.min(attempts.length, 100) },
    { t: "7-Day Streak", earned: streak >= 7, d: `${Math.min(streak, 7)}/7 days`, pct: (Math.min(streak, 7) / 7) * 100 },
    { t: "PYQ Master", earned: pyqAttempts >= 15, d: `${Math.min(pyqAttempts, 15)}/15 PYQ questions`, pct: (Math.min(pyqAttempts, 15) / 15) * 100 },
  ];
  const earnedCount = badges.filter((b) => b.earned).length;

  const program = getProgram(user?.program ?? PROGRAM_SLUG);
  const levelName = program?.levels.find((l) => l.slug === (plan?.level ?? user?.level))?.name;

  const myExams = myExamsAll;
  const noPapers = plan ? plan.subjects.filter((s) => !exams.some((e) => e.slug === s)).map((s) => getStudyCourse(s)?.name ?? s) : [];

  // With a study profile, only that profile's cheat sheets.
  const displayCheatSheets = plan ? cheatSheets.filter((s) => courseSlugs.has(s.subjectSlug)) : cheatSheets;

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand text-lg font-bold text-brand-ink" aria-hidden>
            {user ? initials(user.name) || "S" : "S"}
          </span>
          <div className="min-w-0">
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {greeting()}, {user ? user.name.split(" ")[0] : "Student"}
            </h1>
            <p className="mt-0.5 truncate text-sm text-muted">
              {user && program ? [program.name, levelName].filter(Boolean).join(" · ") : "Your progress is saved in this browser."}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {plan && (
            <Button variant="secondary" size="sm" onClick={openStudySetup}>
              <Settings2 className="size-4" aria-hidden /> Edit courses
            </Button>
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
            <Link href="/signup" className={buttonClass("primary", "sm")}>
              Create free account
            </Link>
          )}
        </div>
      </header>

      {!plan && (
        <section aria-labelledby="setup-h" className="card flex flex-wrap items-center gap-4 border-brand/60 bg-brand/5 p-5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-brand-ink">
            <SlidersHorizontal className="size-5" aria-hidden />
          </span>
          <div className="min-w-[14rem] flex-1">
            <h2 id="setup-h" className="font-semibold">
              Set up your study profile
            </h2>
            <p className="text-sm text-muted">Pick your level and this term&apos;s courses. BTechi will then show just those courses, their past papers and practice.</p>
          </div>
          <Button onClick={openStudySetup}>
            Set up now <ArrowRight className="size-4" aria-hidden />
          </Button>
        </section>
      )}

      {/* Stats */}
      <section aria-label="Your learning" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile icon={BookOpenCheck} tone="bg-blue/10 text-blue" label="Topics completed" value={completed.length} hint={plural(startedCourses.length, "course") + " in progress"} />
        <StatTile icon={FileText} tone="bg-purple/10 text-purple" label="Questions solved" value={solved} hint={`${plural(qualifierAttempts.length, "exam")} taken`} />
        <StatTile
          icon={Target}
          tone="bg-green/10 text-green"
          label="Accuracy"
          value={graded.length ? `${accuracy}%` : "–"}
          hint={graded.length ? `${correct} of ${graded.length} correct` : "Answer a question to start"}
        />
        <StatTile icon={Flame} tone={streak ? "bg-amber/10 text-amber" : "bg-surface-2 text-muted"} label="Day streak" value={streak} hint={streak ? "Study today to keep it" : "Study today to start one"} />
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {/* Main column */}
        <div className="min-w-0 space-y-10">
          <section aria-labelledby="continue-h">
            <SectionHead id="continue-h" title="Continue learning" />
            <ContinueLearning />
          </section>

          {plan && (
            <section aria-labelledby="exams-h">
              <SectionHead
                id="exams-h"
                title="This term's exams"
                sub="Practice and past papers for your courses"
                action={
                  myExams.length > 0 && (
                    <Link href="/pyqs" className={textLink}>
                      All papers <ArrowRight className="size-3" aria-hidden />
                    </Link>
                  )
                }
              />
              {myExams.length > 0 ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {myExams.map((e) => {
                    const sheet = cheatSheetForSubject(e.slug);
                    return (
                      <li key={e.slug} className="card flex flex-col p-4">
                        <div className="flex items-center justify-between gap-2">
                          {e.code && <span className="font-mono text-xs text-muted">{e.code}</span>}
                          <span className="text-xs text-muted tabular-nums">{plural(e.papers, "paper")}</span>
                        </div>
                        <p className="mt-1 leading-snug font-semibold">{e.name}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {e.exams.map((x) => (
                            <Badge key={x}>{x}</Badge>
                          ))}
                        </div>
                        <div className="mt-auto flex flex-wrap gap-2 pt-4">
                          <Link href={e.practiceHref} className={buttonClass("dark", "sm")}>
                            Practise
                          </Link>
                          <Link href={e.href} className={buttonClass("secondary", "sm")}>
                            Past papers
                          </Link>
                          {sheet && (
                            <Link href={cheatSheetHref(sheet)} className={buttonClass("ghost", "sm")}>
                              Cheat sheet
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="card p-5 text-sm text-muted">None of your courses have past papers yet. We&apos;ll list them here as they&apos;re added.</div>
              )}
              {myExams.length > 0 && noPapers.length > 0 && (
                <p className="mt-3 text-xs text-muted">No past papers yet for {new Intl.ListFormat("en").format(noPapers)}.</p>
              )}
            </section>
          )}

          <section aria-labelledby="courses-h">
            <SectionHead
              id="courses-h"
              title="Your courses"
              sub={courses.length ? `${startedCourses.length} of ${courses.length} started` : undefined}
              action={
                plan && (
                  <button type="button" onClick={openStudySetup} className={textLink}>
                    <Settings2 className="size-3" aria-hidden /> Change
                  </button>
                )
              }
            />
            {courses.length ? (
              <ul className="card divide-y divide-border">
                {courses.map((s) => (
                  <li key={s.slug}>
                    <MaybeLink href={`/subjects/${s.slug}`} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2/50">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <p className="truncate font-semibold">{s.name}</p>
                          <span className="shrink-0 font-mono text-xs text-muted">{s.code}</span>
                        </div>
                        <SubjectProgressBar subject={s} className="mt-2" />
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </MaybeLink>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="card p-5 text-sm text-muted">
                {plan ? "Your study profile has no BTechi course pages yet." : "Open a subject and it will show up here."}{" "}
                <MaybeLink href="/programs" className="font-semibold text-fg hover:underline">
                  Explore programs
                </MaybeLink>
              </div>
            )}
          </section>

          {displayCheatSheets.length > 0 && (
            <section aria-labelledby="cheats-h">
              <SectionHead
                id="cheats-h"
                title={plan ? "Your cheat sheets" : "Cheat sheets"}
                sub="Formulas, patterns and exam traps on one page"
                action={
                  <Link href="/qualifier/notes" className={textLink}>
                    All notes <ArrowRight className="size-3" aria-hidden />
                  </Link>
                }
              />
              <ul className="grid gap-3 sm:grid-cols-2">
                {displayCheatSheets.map((sheet) => {
                  const stats = cheatSheetStats(sheet);
                  const subject = getSubject(sheet.subjectSlug);
                  return (
                    <li key={sheet.slug} className="card flex flex-col p-4">
                      <div className="flex items-center justify-between gap-2 text-xs text-muted">
                        <span className="font-mono">{subject?.code ?? sheet.slug.toUpperCase()}</span>
                        <span>{stats.minutes} min read</span>
                      </div>
                      <p className="mt-1 leading-snug font-semibold">{subject?.name ?? sheet.short}</p>
                      <p className="mt-1 text-xs text-muted tabular-nums">
                        {stats.quick} formulas · {stats.traps} traps
                      </p>
                      <div className="mt-auto flex gap-2 pt-4">
                        <Link href={cheatSheetHref(sheet)} className={buttonClass("dark", "sm")}>
                          Full notes
                        </Link>
                        <Link href={cheatSheetHref(sheet, "quick")} className={buttonClass("secondary", "sm")}>
                          Formulas
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>

        {/* Side column */}
        <aside className="space-y-4">
          <SideCard id="week-h" icon={CalendarClock} title="This week">
            <WeekChart week={week} />
          </SideCard>

          <SideCard id="focus-h" icon={TrendingDown} title="Focus areas">
            {focus.length ? (
              <ul className="space-y-3 px-4 py-4">
                {focus.map((f) => (
                  <li key={f.slug}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                      <span className="truncate font-medium">{f.name}</span>
                      <span className="shrink-0 text-xs font-semibold tabular-nums">{f.pct}%</span>
                    </div>
                    <ProgressBar value={f.pct} tone={f.pct >= 70 ? "green" : "brand"} label={`${f.name} accuracy`} />
                    <p className="mt-1 text-[11px] text-muted">{plural(f.total, "answer")}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-4 text-sm text-muted">Answer a few questions in a course to see where you need more practice.</p>
            )}
          </SideCard>

          <SideCard id="attempts-h" icon={History} title="Recent exams">
            {recentExams.length ? (
              <ul className="divide-y divide-border text-sm">
                {recentExams.map((a) => (
                  <li key={a.id}>
                    <Link
                      href={a.href ? `${a.href}?attempt=${a.id}` : `/qualifier/${a.mockSlug}?attempt=${a.id}`}
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface-2/50"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{a.title ?? a.mockSlug}</span>
                        <span className="text-xs text-muted">{shortDate(a.at)}</span>
                      </span>
                      {a.percent !== undefined && <Badge tone={a.percent >= 40 ? "green" : "amber"}>{a.percent}%</Badge>}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-4 text-sm text-muted">
                No exams yet.{" "}
                <MaybeLink href="/pyqs" className="font-semibold text-fg hover:underline">
                  Try a past paper
                </MaybeLink>
              </p>
            )}
          </SideCard>

          <SideCard id="next-h" icon={ListChecks} title="Next steps">
            {nextSteps.length ? (
              <ul className="divide-y divide-border text-sm">
                {nextSteps.map((n) => (
                  <li key={n.key}>
                    <MaybeLink href={n.href} className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface-2/50">
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium">{n.title}</span>
                        <span className="text-xs text-muted">{n.why}</span>
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </MaybeLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-4 text-sm text-muted">
                {graded.length || qualifierAttempts.length ? "You're on track. Keep practising to stay sharp." : "Answer some questions or take a past paper, and we'll suggest what to do next."}
              </p>
            )}
          </SideCard>

          <SideCard id="badges-h" icon={Award} title="Milestones" action={<span className="text-xs text-muted tabular-nums">{earnedCount}/{badges.length}</span>}>
            <ul className="divide-y divide-border text-sm">
              {badges.map((b) => (
                <li key={b.t} className="flex items-center gap-3 px-4 py-3">
                  <span className={cn("grid size-8 shrink-0 place-items-center rounded-full", b.earned ? "bg-brand text-brand-ink" : "bg-surface-2 text-muted")}>
                    <Award className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={cn("block font-medium", !b.earned && "text-muted")}>{b.t}</span>
                    <span className="text-xs text-muted">{b.earned ? "Earned" : b.d}</span>
                    {!b.earned && b.pct > 0 && <ProgressBar value={b.pct} className="mt-1.5 h-1" label={`${b.t} progress`} />}
                  </span>
                </li>
              ))}
            </ul>
          </SideCard>

          <SideCard
            id="saved-h"
            icon={Bookmark}
            title="Saved"
            action={
              bookmarks.length > 0 && (
                <Link href="/saved" className={textLink}>
                  All {bookmarks.length} <ArrowRight className="size-3" aria-hidden />
                </Link>
              )
            }
          >
            <ul className="divide-y divide-border text-sm">
              {bookmarks.slice(0, 3).map((b) => (
                <li key={b.kind + b.id}>
                  <MaybeLink href={b.href} className="block truncate px-4 py-3 font-medium transition-colors hover:bg-surface-2/50">
                    {b.title}
                  </MaybeLink>
                </li>
              ))}
              {!bookmarks.length && <li className="px-4 py-3 text-muted">Bookmark notes or papers to find them here.</li>}
            </ul>
          </SideCard>

          <SideCard id="downloads-h" icon={Download} title="Recent downloads">
            <ul className="divide-y divide-border text-sm">
              {downloads.slice(0, 4).map((d, i) => (
                <li key={d.at + i} className="flex justify-between gap-3 px-4 py-3">
                  <span className="truncate font-medium">{d.title}</span>
                  <span className="shrink-0 text-xs text-muted">{shortDate(d.at)}</span>
                </li>
              ))}
              {!downloads.length && <li className="px-4 py-3 text-muted">No downloads yet.</li>}
            </ul>
          </SideCard>
        </aside>
      </div>
    </div>
  );
}
