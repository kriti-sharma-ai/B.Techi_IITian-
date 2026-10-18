import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { DownloadHub } from "@/components/download-hub";
import { PageHeader } from "@/components/ui";
import { DOWNLOADS_HREF, courseDownloadsHref, downloadCourse, pdfCount, plural } from "@/lib/downloads";
import type { Params } from "@/lib/filters";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { getQuestionSheets } from "@/lib/pyq-sheets";
import { IITM_PROGRAMMES, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";

const TITLE = "IIT Madras BS Notes & PYQ PDF Download (Free, with Answers)";
const DESCRIPTION =
  "Download IIT Madras BS notes and previous year papers as PDF, free: Maths, Stats, CT, English, Python, DBMS, PDSA and more. Year wise, topic wise and most repeated, with official answer keys.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: DOWNLOADS_HREF });

// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

/** Every PDF on BTechi in one place: each course's question sheets and qualifier cheat notes. */
export default async function DownloadsPage({ searchParams }: { searchParams: Promise<Params> }) {
  const sp = await searchParams;
  const [sheets, scope] = await Promise.all([getQuestionSheets(), getStudyScope(sp)]);
  const scoped = narrow(scope, sheets.sheetCourses(), (s) => s.course.slug);

  const courses = scoped.items.map(downloadCourse);
  // A free collection of course PDFs, one entry per course download page, for search engines.
  const all = sheets.sheetCourses();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}${DOWNLOADS_HREF}`,
        url: `${SITE_URL}${DOWNLOADS_HREF}`,
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
            url: `${SITE_URL}${courseDownloadsHref(s.course.slug)}`,
            name: `${s.course.name}${s.course.code ? ` (${s.course.code})` : ""} PDF downloads`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Downloads", item: `${SITE_URL}${DOWNLOADS_HREF}` },
        ],
      },
    ],
  };
  const total = courses.reduce((sum, c) => sum + pdfCount(c), 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHeader title="IITM BS PDF downloads" description={`${plural(total, "free PDF")}: notes, past papers, topic wise and most repeated questions, each with its answer key.`} />
      <div className="container-page space-y-8 pt-2 pb-8">
        <DownloadHub
          courses={courses}
          levels={PYQ_LEVELS.map((l) => ({ slug: l.slug, name: l.name }))}
          scope={scoped.mine ? { mine: scoped.mine, all: scoped.all, narrowed: scoped.narrowed, links: scopeLinks(DOWNLOADS_HREF, sp) } : undefined}
        />
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
