import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PenLine, Timer } from "lucide-react";
import { PdfViewer } from "@/components/pdf-viewer";
import { QualifierExam } from "@/components/qualifier-exam";
import { QualifierResult } from "@/components/qualifier-result";
import { BookmarkButton, DownloadButton, ReportButton } from "@/components/resource-actions";
import { Badge, Breadcrumbs, buttonClass } from "@/components/ui";
import { forSubject, getLevel, getSubject, pyqTitle, pyqs, questionsFor, topicTitle } from "@/lib/content";
import { reviseHref } from "@/lib/end-term";
import { param } from "@/lib/filters";
import { getPapers } from "@/lib/papers";
import { PYQ_LEVELS, findUploadedPyq, getPyqIndex, uploadedPyqHref, uploadedPyqSegment, type CoursePyqs } from "@/lib/pyq-index";
import { pyqLevelHref } from "@/lib/pyq-urls";
import type { Pyq } from "@/lib/types";

// Papers added in Supabase after a build render on first visit.
export const dynamicParams = true;

export async function generateStaticParams() {
  const { pyqCourses } = await getPyqIndex();
  return pyqCourses.flatMap((c) => [
    ...c.papers.map((p) => ({ level: c.level, course: c.slug, paper: p.segment })),
    ...forSubject(pyqs, c.slug).map((p) => ({ level: c.level, course: c.slug, paper: uploadedPyqSegment(p) })),
  ]);
}

async function load(params: Promise<{ level: string; course: string; paper: string }>) {
  const { level, course, paper } = await params;
  const { getPyqCourse, findPaper } = await getPyqIndex();
  const c = getPyqCourse(course);
  if (!c || c.level !== level) return undefined;
  const portal = findPaper(course, paper);
  if (portal) return { course: c, portal };
  const uploaded = findUploadedPyq(course, paper);
  return uploaded ? { course: c, uploaded } : undefined;
}

export async function generateMetadata({ params }: PageProps<"/pyqs/[level]/[course]/[paper]">): Promise<Metadata> {
  const r = await load(params);
  if (!r) return {};
  if (r.portal) {
    const p = r.course.papers.find((x) => x.slug === r.portal.slug)!;
    const exam = p.exam === "end-term" ? "End Term" : "Qualifier";
    return {
      title: `${r.course.name} ${exam} Paper, ${p.label}${p.session ? ` ${p.session}` : ""}`,
      description: `${r.portal.description} ${p.questions} questions, ${p.marks} marks; sit it in a timed exam portal.`,
      alternates: { canonical: p.href },
      // The exam portal renders in the browser, so the course page is the page to index.
      robots: { index: false, follow: true },
    };
  }
  const title = pyqTitle(r.uploaded!);
  return {
    title: `${title} Question Paper`,
    description: `${title} previous year paper (${r.uploaded!.marks} marks). View, download, or practise with explanations.`,
    alternates: { canonical: uploadedPyqHref(r.uploaded!) },
  };
}

export default async function PyqPaperPage({ params, searchParams }: PageProps<"/pyqs/[level]/[course]/[paper]">) {
  const r = await load(params);
  if (!r) notFound();
  if (r.portal) {
    const attempt = param(await searchParams, "attempt");
    const paper = r.portal;
    const { nextEndTermPaper, nextQualifierPaper } = await getPapers();
    return attempt ? (
      <QualifierResult
        mock={paper}
        attemptId={attempt}
        next={paper.endTerm ? nextEndTermPaper(paper) : nextQualifierPaper(paper)}
        revise={reviseHref(paper.sections[0].subjectSlug)}
      />
    ) : (
      <QualifierExam mock={paper} />
    );
  }
  return <UploadedPaper pyq={r.uploaded!} course={r.course} />;
}

/** A paper uploaded through the CMS: the PDF, the topics it examined and its questions in the bank. */
function UploadedPaper({ pyq, course }: { pyq: Pyq; course: CoursePyqs }) {
  const subject = getSubject(pyq.subjectSlug)!;
  const level = PYQ_LEVELS.find((l) => l.slug === course.level)!;
  const qs = questionsFor({ ids: pyq.questionIds });
  const title = pyqTitle(pyq);
  const href = uploadedPyqHref(pyq);

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: "PYQs", href: "/pyqs" },
          { label: level.name, href: pyqLevelHref(course.level) },
          { label: subject.name, href: course.href },
          { label: `${pyq.exam} ${pyq.term} ${pyq.year}` },
        ]}
      />
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex gap-2">
            <Badge tone={pyq.exam === "End Term" ? "purple" : "blue"}>{pyq.exam}</Badge>
            <Badge>{[subject.code, getLevel(subject.programSlug, subject.level)?.short].filter(Boolean).join(" · ")}</Badge>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
          <p className="mt-1 text-muted">
            {pyq.marks} marks · {pyq.durationMin / 60} hours · {qs.length} questions available for practice
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href={`/practice/session?pyq=${pyq.id}`} className={buttonClass("primary", "md")}>
            <PenLine className="size-4" aria-hidden /> Practice this paper
          </Link>
          <Link href={`/practice/session?pyq=${pyq.id}&mode=exam`} className={buttonClass("secondary", "md")}>
            <Timer className="size-4" aria-hidden /> Timed mock
          </Link>
          <DownloadButton noteId={pyq.id} title={title} fileUrl={pyq.fileUrl} size="md" />
          <BookmarkButton withLabel item={{ kind: "pyq", id: pyq.id, title, href, subtitle: `${pyq.marks} marks` }} />
          <ReportButton kind="pyq" resourceId={pyq.id} title={title} />
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-sm font-semibold">Topics examined</h2>
        <ul className="flex flex-wrap gap-2">
          {pyq.topics.map((t) => (
            <li key={t}>
              <Link
                href={`/subjects/${subject.slug}/${t}`}
                className="inline-block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium hover:border-fg/30"
              >
                {topicTitle(subject.slug, t)}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {pyq.fileUrl && (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold">Original paper</h2>
          <PdfViewer url={pyq.fileUrl} title={title} />
        </section>
      )}

      {qs.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 text-lg font-bold">Questions from this paper</h2>
          <ol className="space-y-3">
            {qs.map((q, i) => (
              <li key={q.id} className="card p-5">
                <p className="font-medium">
                  <span className="mr-2 text-muted tabular-nums">Q{i + 1}.</span>
                  {q.prompt}
                </p>
                <p className="mt-2 text-xs text-muted">
                  {topicTitle(q.subjectSlug, q.topicSlug)} · {q.difficulty}
                </p>
              </li>
            ))}
          </ol>
          <Link href={`/practice/session?pyq=${pyq.id}`} className={buttonClass("dark", "lg", "mt-6")}>
            Practise with explanations →
          </Link>
        </section>
      )}
    </div>
  );
}
