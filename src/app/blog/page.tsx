import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import { blogCategoryIcons } from "@/components/blog/cover";
import { PostCard, PostRow, toSummary } from "@/components/blog/post-card";
import { Breadcrumbs, SectionHeader } from "@/components/ui";
import { blogCategories, blogCategoryHref } from "@/lib/blog/categories";
import { getAllPosts, postsInCategory } from "@/lib/blog";
import { SITE_URL, accentStyles, cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog: IITM BS Guides, Exam Strategy, Data Skills & Careers",
  description:
    "In-depth guides for IIT Madras BS learners and aspiring analysts: the qualifier, exam strategy, Python, SQL, Excel, Power BI, AI trends and data careers in India.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": `${SITE_URL}/blog/rss.xml` } },
};

export default function BlogPage() {
  const posts = getAllPosts().map((p) => ({ ...toSummary(p), featured: p.featured }));
  const lead = posts.find((p) => p.featured) ?? posts[0];
  const side = posts.filter((p) => p !== lead).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BTechi Blog",
    url: `${SITE_URL}/blog`,
    description: metadata.description,
    publisher: { "@type": "Organization", name: "BTechi", url: SITE_URL },
    blogPost: posts.slice(0, 20).map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, dateModified: p.updated })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="relative isolate overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="grid-pattern absolute inset-0 -z-10 text-fg opacity-40" />
        <div className="container-page py-8 md:py-12">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                The BTechi{" "}
                <span className="relative whitespace-nowrap">
                  <span className="absolute inset-x-[-0.1em] bottom-[-0.02em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
                  blog
                </span>
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-muted">
                Long-form guides for IIT Madras BS learners and anyone building a data career: written to be useful, checked against official
                sources, and updated when things change.
              </p>
            </div>
            <a href="/blog/rss.xml" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
              <Rss className="size-4" aria-hidden /> RSS
            </a>
          </div>
          <nav aria-label="Blog categories" className="mt-6 flex flex-wrap gap-2">
            {blogCategories.map((c) => {
              const Icon = blogCategoryIcons[c.slug];
              return (
                <Link
                  key={c.slug}
                  href={blogCategoryHref(c.slug)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-fg/30"
                >
                  <Icon className="size-4 text-muted" aria-hidden /> {c.name}
                  <span className="text-xs text-muted tabular-nums">{postsInCategory(c.slug).length}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <div className="container-page space-y-16 py-10 md:py-12">
        {lead && (
          <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <PostCard post={lead} large />
            <div className="card p-5">
              <p className="eyebrow mb-4">Latest</p>
              <div className="space-y-5">
                {side.map((p) => (
                  <PostRow key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {blogCategories.map((c) => {
          const list = posts.filter((p) => p.category === c.slug);
          if (!list.length) return null;
          const a = accentStyles[c.accent];
          return (
            <section key={c.slug} aria-labelledby={`cat-${c.slug}`}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className={cn("eyebrow mb-1.5 inline-flex items-center gap-1.5")}>
                    <span className={cn("size-2 rounded-full", a.bar)} aria-hidden /> {list.length} {list.length === 1 ? "guide" : "guides"}
                  </p>
                  <h2 id={`cat-${c.slug}`} className="text-xl font-bold tracking-tight md:text-2xl">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{c.description}</p>
                </div>
                <Link href={blogCategoryHref(c.slug)} className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-muted hover:text-fg sm:inline-flex">
                  View all <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.slice(0, 6).map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          );
        })}

        {!posts.length && <SectionHeader title="First posts are on their way." />}
      </div>
    </>
  );
}
