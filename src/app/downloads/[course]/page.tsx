import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { DownloadHub, type DownloadItem } from "@/components/download-hub";
import { PageHeader } from "@/components/ui";
import { DOWNLOADS_HREF, courseDownloadsHref, courseSummary, downloadCourse, pdfCount, plural, withNumbers } from "@/lib/downloads";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { getQuestionSheets } from "@/lib/pyq-sheets";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";

export const dynamicParams = false;
// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

type Props = { params: Promise<{ course: string }> };

export async function generateStaticParams() {
  return (await getQuestionSheets()).sheetCourses().map((s) => ({ course: s.course.slug }));
}

async function load(params: Props["params"]) {
  const { course } = await params;
  const sheets = await getQuestionSheets();
  const s = sheets.courseSheets(course);
  return s && { s, d: downloadCourse(s), all: sheets.sheetCourses() };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await load(params);
  if (!data) return {};
  const { s, d } = data;
  const c = s.course;
  return pageMetadata({
    // The name students type ("Stats 1", "DBMS"); the full name is in the heading and description. Kept near 60 characters.
    title: `IIT Madras BS ${withNumbers(c.short)} PYQ ${d.notes ? "& Notes " : ""}PDF Download (Free)`,
    // Kept under about 155 characters, where Google cuts descriptions.
    description: `Free ${c.name}${c.code ? ` (${c.code})` : ""} PYQ PDF download, IIT Madras BS: ${plural(c.papers.length, "past paper")}${
      s.topics.length ? ", topic wise" : ""
    }${s.repeated ? ", most repeated" : ""}${d.notes ? ", cheat notes" : ""}, with answer keys.`,
    path: courseDownloadsHref(c.slug),
  });
}

const RESOURCE_TYPE: Record<string, string> = { notes: "Study guide", repeated: "Practice problems", topics: "Practice problems", years: "Question paper", papers: "Question paper" };

export default async function CourseDownloadsPage({ params }: Props) {
  const data = await load(params);
  if (!data) notFound();
  const { s, d, all } = data;
  const c = s.course;
  const level = PYQ_LEVELS.find((l) => l.slug === c.level)!;
  const others = all.filter((o) => o.course.level === c.level && o.course.slug !== c.slug);
  const url = `${SITE_URL}${courseDownloadsHref(c.slug)}`;
  const summary = courseSummary(s, d);

  // Every PDF of the course as a free learning resource, about the IIT Madras course itself.
  const items: [string, DownloadItem][] = [
    ...(d.notes ? [["notes", d.notes] as [string, DownloadItem]] : []),
    ...(d.repeated ? [["repeated", d.repeated] as [string, DownloadItem]] : []),
    ...d.topics.map((i) => ["topics", i] as [string, DownloadItem]),
    ...d.years.map((i) => ["years", i] as [string, DownloadItem]),
    ...d.papers.map((i) => ["papers", i] as [string, DownloadItem]),
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    url,
    name: `${c.name} PDF downloads`,
    description: summary,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    isPartOf: { "@id": `${SITE_URL}${DOWNLOADS_HREF}` },
    about: {
      "@type": "Course",
      name: c.name,
      ...(c.code ? { courseCode: c.code } : {}),
      description: `${c.name}, a ${level.name.toLowerCase()} course of the IIT Madras BS degree.`,
      provider: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Madras", sameAs: "https://study.iitm.ac.in/" },
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map(([kind, i], n) => ({
        "@type": "ListItem",
        position: n + 1,
        item: {
          "@type": "LearningResource",
          name: `${c.short} ${i.title}`,
          url: `${SITE_URL}${i.href}`,
          learningResourceType: RESOURCE_TYPE[kind],
          educationalLevel: level.name,
          isAccessibleForFree: true,
          inLanguage: "en",
        },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHeader
        crumbs={[{ label: "Downloads", href: DOWNLOADS_HREF }, { label: c.short }]}
        eyebrow={
          <span className="flex flex-wrap items-center gap-2">
            {c.code && <span className="font-mono">{c.code}</span>}
            <span>{c.group}</span>
          </span>
        }
        title={`${c.name} PDF downloads`}
        description={`${plural(pdfCount(d), "free PDF")}, each with its answer key.`}
      />
      <div className="container-page space-y-8 pt-4 pb-8">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">{summary}</p>
        <DownloadHub courses={[d]} levels={[{ slug: level.slug, name: level.name }]} single />

        {others.length > 0 && (
          <nav aria-labelledby="more-pdfs" className="max-w-4xl">
            <h2 id="more-pdfs" className="mb-3 text-sm font-semibold">
              More {level.name.toLowerCase()} PDFs
            </h2>
            <ul className="flex flex-wrap gap-1.5">
              {others.map((o) => (
                <li key={o.course.slug}>
                  <Link
                    href={courseDownloadsHref(o.course.slug)}
                    className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium transition-colors hover:border-fg/30"
                  >
                    {o.course.short} PDFs
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <p className="flex max-w-4xl items-start gap-2 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span>
            Questions and answer keys are from the official IIT Madras BS papers; topics and repeated types are BTechi&rsquo;s own grouping. BTechi is not
            affiliated with IIT Madras. Rather solve on screen?{" "}
            <Link href={c.href} className="font-medium text-fg underline-offset-2 hover:underline">
              Sit {c.short} papers in the exam portal
            </Link>{" "}
            or see{" "}
            <Link href={DOWNLOADS_HREF} className="font-medium text-fg underline-offset-2 hover:underline">
              every course&rsquo;s PDFs
            </Link>
            .
          </span>
        </p>
      </div>
    </>
  );
}
