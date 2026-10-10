import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollText } from "lucide-react";
import { CoursePyqCard } from "@/components/pyq-papers";
import { EmptyState, LinkTabs, PageHeader, buttonClass } from "@/components/ui";
import { param } from "@/lib/filters";
import { PYQ_EXAMS, PYQ_LEVELS, groupCourses, pyqCoursesForLevel, type PyqExam } from "@/lib/pyq-index";
import { isPyqLevel, pyqLevelHref } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0).map((l) => ({ level: l.slug }));

const getLevel = (slug: string) => (isPyqLevel(slug) ? PYQ_LEVELS.find((l) => l.slug === slug) : undefined);

export async function generateMetadata({ params }: PageProps<"/pyqs/[level]">): Promise<Metadata> {
  const level = getLevel((await params).level);
  if (!level) return {};
  const courses = pyqCoursesForLevel(level.slug);
  return {
    title: `IIT Madras BS ${level.name} PYQs: Previous Year Papers`,
    description: `${level.name} previous year question papers for ${courses.length} IIT Madras BS courses (${courses
      .slice(0, 4)
      .map((c) => c.short)
      .join(", ")} and more), with the official answer key. Sit each paper in a timed exam portal.`,
    // Exam filters (?exam=) are views of this page, not separate pages.
    alternates: { canonical: pyqLevelHref(level.slug) },
  };
}

export default async function PyqLevelPage({ params, searchParams }: PageProps<"/pyqs/[level]">) {
  const level = getLevel((await params).level);
  if (!level) notFound();
  const examParam = param(await searchParams, "exam");
  const exam = PYQ_EXAMS.find((e) => e.slug === examParam)?.slug;

  const courses = pyqCoursesForLevel(level.slug);
  const papersOf = (c: (typeof courses)[number], e: PyqExam | undefined = exam) => c.papers.filter((p) => !e || p.exam === e);
  const groups = groupCourses(courses.filter((c) => papersOf(c).length > 0));

  const levelTabs = PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0).map((l) => ({
    id: l.slug,
    label: l.short,
    href: pyqLevelHref(l.slug),
    count: pyqCoursesForLevel(l.slug).reduce((n, c) => n + c.papers.length, 0),
  }));
  const examPills = [
    { slug: undefined, label: "All exams", href: pyqLevelHref(level.slug), count: courses.reduce((n, c) => n + papersOf(c, undefined).length, 0) },
    ...PYQ_EXAMS.map((e) => ({
      slug: e.slug,
      label: e.label,
      href: `${pyqLevelHref(level.slug)}?exam=${e.slug}`,
      count: courses.reduce((n, c) => n + papersOf(c, e.slug).length, 0),
    })),
  ].filter((e) => e.count > 0 || e.slug === exam);

  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs", href: "/pyqs" }, { label: level.name }]}
        eyebrow="Previous-year questions"
        title={`${level.name} papers`}
        description={`${level.description} Every paper has the official answer key and runs in the timed exam portal.`}
      />

      <div className="sticky top-16 z-20 border-b border-border bg-bg/90 backdrop-blur">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6">
          <LinkTabs tabs={levelTabs} active={level.slug} />
          <nav aria-label="Exam" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 py-2.5 [scrollbar-width:none]">
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
        </div>
      </div>

      <div className="container-page space-y-12 py-10">
        {groups.length === 0 ? (
          <EmptyState
            icon={<ScrollText className="size-6" />}
            title="No papers of this kind at this level."
            description="Qualifier papers are for the four qualifier courses only. Show every exam to see this level's End Term papers."
            action={
              <Link href={pyqLevelHref(level.slug)} className={buttonClass("secondary")}>
                Show all exams
              </Link>
            }
          />
        ) : (
          groups.map((g) => (
            <section key={g.name} aria-labelledby={`g-${g.name}`}>
              <div className="mb-4">
                <h2 id={`g-${g.name}`} className="text-lg font-bold">
                  {g.name}
                </h2>
                {!g.courses[0].inCurriculum && (
                  <p className="mt-0.5 text-sm text-muted">
                    Courses of the IIT Madras BS in Data Science, which sits the same End Term exam. Listed here so every paper is in one place.
                  </p>
                )}
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {g.courses.map((c) => (
                  <CoursePyqCard key={c.slug} course={c} papers={papersOf(c)} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
}
