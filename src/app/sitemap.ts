import type { MetadataRoute } from "next";
import { allTopics, books, notes, programs, pyqs, subjects } from "@/lib/content";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string, priority = 0.6): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path}`, priority });
  return [
    url("/", 1),
    ...["/programs", "/subjects", "/notes", "/videos", "/books", "/practice", "/pyqs", "/exam-prep"].map((p) => url(p, 0.8)),
    ...programs.flatMap((p) => [
      url(`/programs/${p.slug}`, 0.8),
      ...Array.from({ length: p.semesters }, (_, i) => url(`/programs/${p.slug}/semester-${i + 1}`, 0.7)),
    ]),
    ...subjects.flatMap((s) => [url(`/subjects/${s.slug}`, 0.9), ...allTopics(s).map(({ topic }) => url(`/subjects/${s.slug}/${topic.slug}`, 0.7))]),
    ...notes.map((n) => url(`/notes/${n.id}`, 0.7)),
    ...books.map((b) => url(`/books/${b.slug}`, 0.5)),
    ...pyqs.map((p) => url(`/pyqs/${p.id}`, 0.7)),
    ...["/about", "/contribute", "/privacy", "/terms", "/copyright"].map((p) => url(p, 0.3)),
  ];
}
