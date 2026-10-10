import type { MetadataRoute } from "next";
import { allTopics, books, notes, programs, pyqs, skillCourses, subjects } from "@/lib/content";
import { PYQ_LEVELS, getPyqIndex, uploadedPyqHref } from "@/lib/pyq-index";
import { pyqLevelHref } from "@/lib/pyq-urls";
import { SITE_URL } from "@/lib/utils";

// PYQ courses come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { pyqCourses, pyqCoursesForLevel } = await getPyqIndex();
  const url = (path: string, priority = 0.6): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path}`, priority });
  return [
    url("/", 1),
    ...["/programs", "/subjects", "/notes", "/videos", "/books", "/practice", "/pyqs", "/skills", "/qualifier"].map((p) => url(p, 0.8)),
    ...programs.flatMap((p) => [
      url(`/programs/${p.slug}`, 0.8),
      ...p.levels.map((l) => url(`/programs/${p.slug}/${l.slug}`, 0.8)),
    ]),
    ...subjects.flatMap((s) => [url(`/subjects/${s.slug}`, 0.9), ...allTopics(s).map(({ topic }) => url(`/subjects/${s.slug}/${topic.slug}`, 0.7))]),
    ...notes.map((n) => url(`/notes/${n.id}`, 0.7)),
    ...books.map((b) => url(`/books/${b.slug}`, 0.5)),
    // Paper pages run the exam portal in the browser and are noindex; the level and course pages are the landing pages.
    ...PYQ_LEVELS.filter((l) => pyqCoursesForLevel(l.slug).length > 0).map((l) => url(pyqLevelHref(l.slug), 0.8)),
    ...pyqCourses.map((c) => url(c.href, 0.8)),
    ...pyqs.map((p) => url(uploadedPyqHref(p), 0.7)),
    ...skillCourses.map((c) => url(`/skills/${c.slug}`, 0.8)),
    ...["/about", "/contribute", "/privacy", "/terms", "/copyright"].map((p) => url(p, 0.3)),
  ];
}
