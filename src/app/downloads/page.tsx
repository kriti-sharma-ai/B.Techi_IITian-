import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { DownloadHub, type DownloadCourse } from "@/components/download-hub";
import { ScopeSwitch } from "@/components/study-scope";
import { PageHeader } from "@/components/ui";
import { cheatSheetHref, cheatSheetStats, cheatSheets } from "@/lib/data/cheat-notes";
import type { Params } from "@/lib/filters";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { getQuestionSheets, paperTitle } from "@/lib/pyq-sheets";
import { pageMetadata } from "@/lib/seo";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS PYQ PDF Download: Papers, Topic Wise, Most Repeated & Cheat Notes",
  description:
    "Download any IIT Madras BS previous year paper as a PDF, with the official answer key: paper wise, year wise, topic wise and most repeated, plus qualifier cheat notes. Free, organised by course.",
  path: "/downloads",
});

// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

const n = (count: number, word: string) => `${count.toLocaleString("en-IN")} ${word}${count === 1 ? "" : "s"}`;

/** Every PDF on BTechi in one place: each course's question sheets and qualifier cheat notes. */
export default async function DownloadsPage({ searchParams }: { searchParams: Promise<Params> }) {
  const sp = await searchParams;
  const [sheets, scope] = await Promise.all([getQuestionSheets(), getStudyScope(sp)]);
  const scoped = narrow(scope, sheets.sheetCourses(), (s) => s.course.slug);

  const courses: DownloadCourse[] = scoped.items.map(({ course, repeated, topics, years }) => {
    const notes = cheatSheets.find((s) => s.subjectSlug === course.slug);
    return {
      slug: course.slug,
      name: course.name,
      short: course.short,
      code: course.code,
      level: course.level,
      notes: notes && { title: "Qualifier cheat notes", meta: `Formulas and traps · ${cheatSheetStats(notes).minutes} min read`, href: cheatSheetHref(notes) },
      repeated: repeated && { title: repeated.title, meta: `${n(repeated.types, "type")} · ${n(repeated.questions, "question")}`, href: repeated.href },
      topics: topics.map((t) => ({ title: t.title, meta: n(t.questions, "question"), href: t.href })),
      years: years.map((y) => ({ title: y.title, meta: `${n(y.papers.length, "paper")} · ${n(y.questions, "question")}`, href: y.href })),
      papers: course.papers.map((p) => ({ title: paperTitle(p), meta: `${n(p.questions, "question")} · ${p.marks} marks`, href: p.sheetHref })),
    };
  });
  const total = courses.reduce((sum, c) => sum + (c.notes ? 1 : 0) + (c.repeated ? 1 : 0) + c.topics.length + c.years.length + c.papers.length, 0);

  return (
    <>
      <PageHeader title="Downloads" description={`${n(total, "PDF")}, every one with its answer key.`} />
      <div className="container-page space-y-8 py-8">
        <ScopeSwitch list={scoped} links={scopeLinks("/downloads", sp)} />
        <DownloadHub courses={courses} levels={PYQ_LEVELS.map((l) => ({ slug: l.slug, name: l.name }))} />
        <p className="flex items-start gap-2 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>
            Questions and answer keys are from the official IIT Madras BS papers; topics and repeated types are BTechi&rsquo;s own grouping. BTechi is not
            affiliated with IIT Madras. Prefer a timed test?{" "}
            <Link href="/pyqs" className="font-medium text-fg underline-offset-2 hover:underline">
              Sit any paper in the exam portal
            </Link>
            .
          </span>
        </p>
      </div>
    </>
  );
}
