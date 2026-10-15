import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollText } from "lucide-react";
import { CourseList } from "@/components/pyq-papers";
import { ScopeSwitch } from "@/components/study-scope";
import { PyqLevelBar } from "@/components/pyq-level-links";
import { Breadcrumbs, EmptyState, PageHeader, buttonClass } from "@/components/ui";
import { param } from "@/lib/filters";
import { PYQ_EXAMS, PYQ_LEVELS, getPyqIndex, groupCourses, type PyqExam } from "@/lib/pyq-index";
import { isPyqLevel, pyqLevelHref } from "@/lib/pyq-urls";
import { getStudyScope, keepScope, narrow, scopeLinks } from "@/lib/study-scope";
import { cn } from "@/lib/utils";

export const dynamicParams = false;
// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;
export async function generateStaticParams() {
  const { pyqCoursesForLevel } = await getPyqIndex();
  return PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0).map((l) => ({ level: l.slug }));
}

const getLevel = (slug: string) => (isPyqLevel(slug) ? PYQ_LEVELS.find((l) => l.slug === slug) : undefined);

export async function generateMetadata({ params }: PageProps<"/pyqs/[level]">): Promise<Metadata> {
  const level = getLevel((await params).level);
  if (!level) return {};
  const { pyqCoursesForLevel } = await getPyqIndex();
  const courses = pyqCoursesForLevel(level.slug);
  return pageMetadata({
    title: `IIT Madras BS ${level.name} PYQs: Previous Year Papers`,
    description: `${level.name} previous year question papers for ${courses.length} IIT Madras BS courses (${courses
      .slice(0, 4)
      .map((c) => c.short)
      .join(", ")} and more), with the official answer key. Sit each paper in a timed exam portal.`,
    // Exam filters (?exam=) are views of this page, not separate pages.
    path: pyqLevelHref(level.slug),
  });
}

export default async function PyqLevelPage({ params, searchParams }: PageProps<"/pyqs/[level]">) {
  const level = getLevel((await params).level);
  if (!level) notFound();
  const sp = await searchParams;
  const exam = PYQ_EXAMS.find((e) => e.slug === param(sp, "exam"))?.slug;

  const [{ pyqCoursesForLevel }, scope] = await Promise.all([getPyqIndex(), getStudyScope(sp)]);
  const scoped = narrow(scope, pyqCoursesForLevel(level.slug), (c) => c.slug);
  const courses = scoped.items;
  const papersOf = (c: (typeof courses)[number], e: PyqExam | undefined = exam) => c.papers.filter((p) => !e || p.exam === e);
  const groups = groupCourses(courses.filter((c) => papersOf(c).length > 0));

  const levelTabs = PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0).map((l) => ({
    slug: l.slug,
    label: l.short,
    href: keepScope(pyqLevelHref(l.slug), scope),
  }));
  const examPills = [
    { slug: undefined, label: "All exams", href: keepScope(pyqLevelHref(level.slug), scope), count: courses.reduce((n, c) => n + papersOf(c, undefined).length, 0) },
    ...PYQ_EXAMS.map((e) => ({
      slug: e.slug,
      label: e.label,
      href: keepScope(`${pyqLevelHref(level.slug)}?exam=${e.slug}`, scope),
      count: courses.reduce((n, c) => n + papersOf(c, e.slug).length, 0),
    })),
  ].filter((e) => e.count > 0 || e.slug === exam);

  return (
    <>
      {/* Breadcrumb kept for search engines and screen readers; on screen the bar below does its job. */}
      <Breadcrumbs items={[{ label: "PYQs", href: "/pyqs" }, { label: level.name }]} className="sr-only" />
      <PageHeader title={`${level.name} papers`} description="Pick a subject. Every paper has the official answer key." />

      {/* Same bar as /practice, plus the exam filter on the right. */}
      <PyqLevelBar levels={levelTabs} active={level.slug} allHref={keepScope("/pyqs", scope)} back={{ href: "/practice", label: "Practice" }} sticky>
        <nav aria-label="Exam" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 py-2 [scrollbar-width:none]">
          {examPills.map((e) => {
            const on = e.slug === exam;
            return (
              <Link
                key={e.label}
                href={e.href}
                scroll={false}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "shrink-0 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                  on ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
                )}
              >
                {e.label} <span className={on ? "opacity-70" : "text-muted"}>{e.count}</span>
              </Link>
            );
          })}
        </nav>
      </PyqLevelBar>

      <div className="container-page space-y-10 py-10">
        <ScopeSwitch list={scoped} links={scopeLinks(pyqLevelHref(level.slug), sp)} />
        {groups.length === 0 ? (
          <EmptyState
            icon={<ScrollText className="size-6" />}
            title="No papers of this kind at this level."
            description="Not every course has papers from every exam yet. Show every exam to see all of this level's papers."
            action={
              <Link href={keepScope(pyqLevelHref(level.slug), scope)} className={buttonClass("secondary")}>
                Show all exams
              </Link>
            }
          />
        ) : (
          groups.map((g) => (
            <section key={g.name} aria-labelledby={`g-${g.name}`}>
              <div className="mb-3">
                <h2 id={`g-${g.name}`} className="text-sm font-semibold text-muted">
                  {g.name}
                </h2>
                {!g.courses[0].inCurriculum && (
                  <p className="mt-0.5 text-xs text-muted">
                    Same quizzes and End Term exams as the BS in Data Science.
                  </p>
                )}
              </div>
              <CourseList courses={g.courses} exam={exam} />
            </section>
          ))
        )}
      </div>
    </>
  );
}
