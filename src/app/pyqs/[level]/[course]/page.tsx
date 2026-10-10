import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BarChart3, BookOpen, Target } from "lucide-react";
import { PyqCard } from "@/components/cards";
import { PyqAnalysis } from "@/components/pyq-analysis";
import { PaperRows } from "@/components/pyq-papers";
import { Badge, PageHeader, buttonClass } from "@/components/ui";
import { forSubject, pyqs } from "@/lib/content";
import { PYQ_EXAMS, PYQ_LEVELS, getPyqCourse, pyqCourses, pyqCoursesForLevel } from "@/lib/pyq-index";
import { practiceHref } from "@/lib/pyq-practice";
import { pyqLevelHref } from "@/lib/pyq-urls";

export const dynamicParams = false;
export const generateStaticParams = () => pyqCourses.map((c) => ({ level: c.level, course: c.slug }));

async function load(params: Promise<{ level: string; course: string }>) {
  const { level, course } = await params;
  const c = getPyqCourse(course);
  return c && c.level === level ? c : undefined;
}

export async function generateMetadata({ params }: PageProps<"/pyqs/[level]/[course]">): Promise<Metadata> {
  const c = await load(params);
  if (!c) return {};
  const exams = PYQ_EXAMS.filter((e) => c.papers.some((p) => p.exam === e.slug)).map((e) => e.label);
  return {
    title: `${c.name}${c.code ? ` (${c.code})` : ""} PYQs: ${exams.join(" & ")} Papers`,
    description: `${c.papers.length} ${c.name} previous year question papers from the IIT Madras BS (${exams.join(" and ")}), with the official answer key. Sit each one in a timed exam portal and review every answer.`,
    alternates: { canonical: c.href },
  };
}

export default async function PyqCoursePage({ params }: PageProps<"/pyqs/[level]/[course]">) {
  const c = await load(params);
  if (!c) notFound();
  const level = PYQ_LEVELS.find((l) => l.slug === c.level)!;
  const sections = PYQ_EXAMS.map((e) => ({ ...e, papers: c.papers.filter((p) => p.exam === e.slug) })).filter((e) => e.papers.length > 0);
  const uploaded = forSubject(pyqs, c.slug).sort((a, b) => b.year - a.year);
  const questions = c.papers.reduce((n, p) => n + p.questions, 0);
  const related = pyqCoursesForLevel(c.level).filter((x) => x.slug !== c.slug && x.group === c.group);

  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs", href: "/pyqs" }, { label: level.name, href: pyqLevelHref(c.level) }, { label: c.name }]}
        eyebrow={
          <span className="flex flex-wrap items-center gap-2">
            {c.code && <span className="font-mono">{c.code}</span>}
            <span>{c.group}</span>
          </span>
        }
        title={`${c.name} previous year papers`}
        description={`Real IIT Madras BS ${c.short} papers with the official answer key. Sit any paper in the timed exam portal, then review every answer.`}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <dl className="flex gap-8">
            {[
              [String(c.papers.length + uploaded.length), "papers"],
              [questions.toLocaleString("en-IN"), "questions"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-bold tracking-tight tabular-nums">{v}</dd>
                <p className="text-sm text-muted">{l}</p>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-2">
            <Link href={practiceHref(c.slug)} className={buttonClass("secondary")}>
              <Target className="size-4" aria-hidden /> Practise questions
            </Link>
            {c.courseHref && (
              <Link href={c.courseHref} className={buttonClass("ghost")}>
                <BookOpen className="size-4" aria-hidden /> Course page
              </Link>
            )}
          </div>
        </div>
      </PageHeader>

      <div className="container-page space-y-10 py-10">
        {!c.inCurriculum && (
          <p className="max-w-3xl text-sm text-muted">
            <Badge className="mr-2">BS in Data Science</Badge>
            This course belongs to the IIT Madras BS in Data Science, which sits the same End Term exam as the BS in Management and Data Science.
          </p>
        )}

        {sections.map((e) => (
          <section key={e.slug} aria-labelledby={`exam-${e.slug}`}>
            <h2 id={`exam-${e.slug}`} className="text-lg font-bold">
              {c.short} {e.label} papers
            </h2>
            <p className="mt-0.5 text-sm text-muted">{e.description}</p>
            <div className="card mt-4 px-5 py-1">
              <PaperRows papers={e.papers} />
            </div>
          </section>
        ))}

        {uploaded.length > 0 && (
          <section className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="min-w-0">
              <h2 className="mb-4 text-lg font-bold">Uploaded question papers</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {uploaded.map((p) => (
                  <PyqCard key={p.id} pyq={p} />
                ))}
              </div>
            </div>
            <aside className="space-y-3">
              <h2 className="flex items-center gap-2 font-bold">
                <BarChart3 className="size-5" aria-hidden /> Most-asked topics
              </h2>
              <PyqAnalysis subjectSlug={c.slug} />
            </aside>
          </section>
        )}

        {related.length > 0 && (
          <section aria-labelledby="related">
            <h2 id="related" className="mb-3 text-lg font-bold">
              More {c.group.replace(/^BS in Data Science · /, "").toLowerCase()} PYQs
            </h2>
            <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={r.href} className="card card-hover flex items-center justify-between gap-3 p-4">
                    <span className="font-semibold leading-snug">{r.name}</span>
                    <span className="shrink-0 text-xs text-muted tabular-nums">{r.papers.length}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={pyqLevelHref(c.level)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline">
              Every {level.name} paper <ArrowRight className="size-4" aria-hidden />
            </Link>
          </section>
        )}
      </div>
    </>
  );
}
