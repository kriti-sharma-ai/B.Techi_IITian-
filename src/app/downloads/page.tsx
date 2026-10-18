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
import { IITM_PROGRAMMES, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";

const TITLE = "IIT Madras BS Notes & PYQ PDF Download (Free, with Answers)";
const DESCRIPTION =
  "Download IIT Madras BS notes and previous year papers as PDF, free: Maths, Stats, CT, English, Python, DBMS, PDSA and more. Year wise, topic wise and most repeated, with official answer keys.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/downloads" });

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
  // A free collection of course PDFs, one entry per course (its sheets page), for search engines.
  const all = sheets.sheetCourses();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/downloads`,
        url: `${SITE_URL}/downloads`,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: IITM_PROGRAMMES.map((name) => ({ "@type": "EducationalOccupationalProgram", name: `IIT Madras ${name}` })),
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: all.length,
          itemListElement: all.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}${s.href}`,
            name: `${s.course.name}${s.course.code ? ` (${s.course.code})` : ""} PYQ PDF`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Downloads", item: `${SITE_URL}/downloads` },
        ],
      },
    ],
  };
  const total = courses.reduce((sum, c) => sum + (c.notes ? 1 : 0) + (c.repeated ? 1 : 0) + c.topics.length + c.years.length + c.papers.length, 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHeader title="IITM BS PDF downloads" description={`${n(total, "free PDF")}: notes, past papers, topic wise and most repeated questions, each with its answer key.`} />
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
