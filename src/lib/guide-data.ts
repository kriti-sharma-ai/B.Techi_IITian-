// The site map the guide answers from (lib/guide.ts), built on the server from the
// paper index, cheat notes and blog. Small on purpose: no paper data reaches the browser.
// Server-side only.

import { getAllPosts, blogPostHref } from "@/lib/blog";
import { cheatSheetHref, cheatSheets } from "@/lib/data/cheat-notes";
import { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, QUALIFIER_SYLLABUS } from "@/lib/data/qualifier-meta";
import type { GuideCourse, GuideData } from "@/lib/guide";
import { getPyqIndex } from "@/lib/pyq-index";
import { practiceHref } from "@/lib/pyq-practice";
import { pyqSheetsHref } from "@/lib/pyq-urls";
import { optionalSections, sectionEnabled } from "@/lib/site";

/** Builds the small site map the guide bubble answers from, so no paper data reaches the browser. */
export async function getGuideData(): Promise<GuideData> {
  const { pyqCourses } = await getPyqIndex();
  const courses: GuideCourse[] = pyqCourses.map((c) => {
    const exams: GuideCourse["exams"] = {};
    const latest: GuideCourse["latest"] = {};
    // Papers come newest first within the index; keep the first of each exam.
    for (const p of [...c.papers].sort((a, b) => b.sortKey.localeCompare(a.sortKey))) {
      exams[p.exam] = (exams[p.exam] ?? 0) + 1;
      latest[p.exam] ??= { label: `${p.label}${p.session ? ` ${p.session}` : ""}`, href: p.href };
    }
    const sheet = cheatSheets.find((s) => s.subjectSlug === c.slug);
    return {
      slug: c.slug,
      name: c.name,
      short: c.short,
      level: c.level,
      href: c.href,
      sheetsHref: pyqSheetsHref(c.slug),
      practiceHref: practiceHref(c.slug),
      exams,
      latest,
      notesHref: sheet ? cheatSheetHref(sheet) : undefined,
    };
  });

  const posts = getAllPosts().map((p) => ({ title: p.title, href: blogPostHref(p.slug), keyword: p.keyword, tags: p.tags }));

  return {
    courses: courses.filter((c) => Object.keys(c.exams).length > 0),
    posts,
    qualifier: {
      cutoff: QUALIFIER_CUTOFF,
      syllabus: QUALIFIER_SUBJECTS.map((slug) => ({
        course: courses.find((c) => c.slug === slug)?.short ?? slug,
        topics: QUALIFIER_SYLLABUS[slug],
      })),
    },
    sections: optionalSections.filter(sectionEnabled),
    ai: Boolean(process.env.OPENROUTER_API_KEY),
  };
}
