import type { MetadataRoute } from "next";
import { allTopics, books, notes, programs, pyqs, skillCourses, subjects } from "@/lib/content";
import { cheatSheetHref, cheatSheets } from "@/lib/data/cheat-notes";
import { skillNotes, skillNotesHref } from "@/lib/data/skill-notes";
import { blogPostHref, getAllPosts } from "@/lib/blog";
import { blogCategories, blogCategoryHref } from "@/lib/blog/categories";
import { PYQ_LEVELS, getPyqIndex, uploadedPyqHref } from "@/lib/pyq-index";
import { pyqLevelHref } from "@/lib/pyq-urls";
import { SITE_URL } from "@/lib/utils";
import { loadContent } from "@/lib/cms";

// PYQ courses come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await loadContent();
  const { pyqCourses, pyqCoursesForLevel } = await getPyqIndex();
  const url = (path: string, priority = 0.6): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path}`, priority });
  return [
    url("/", 1),
    ...["/programs", "/subjects", "/notes", "/videos", "/books", "/practice", "/pyqs", "/skills", "/qualifier", "/qualifier/notes"].map((p) => url(p, 0.8)),
    ...cheatSheets.map((s) => url(cheatSheetHref(s), 0.8)),
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
    ...skillNotes.map((n) => url(skillNotesHref(n.skill), 0.8)),
    url("/blog", 0.8),
    ...blogCategories.map((c) => url(blogCategoryHref(c.slug), 0.6)),
    ...getAllPosts().map((p) => ({ ...url(blogPostHref(p.slug), 0.8), lastModified: p.updated })),
    ...["/about", "/contribute", "/contact", "/privacy", "/terms", "/copyright", "/disclaimer"].map((p) => url(p, 0.3)),
  ];
}
