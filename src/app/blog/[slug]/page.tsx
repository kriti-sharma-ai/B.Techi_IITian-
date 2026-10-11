import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, ListTree } from "lucide-react";
import { BlogCover } from "@/components/blog/cover";
import { Markdown } from "@/components/blog/markdown";
import { BlogToc, ReadingProgress } from "@/components/blog/toc";
import { PostCard, toSummary } from "@/components/blog/post-card";
import { BookmarkButton, ShareButton } from "@/components/resource-actions";
import { Badge, Breadcrumbs, buttonClass } from "@/components/ui";
import { blogPostHref, getAllPosts, getPost, relatedPosts } from "@/lib/blog";
import { blogCategoryHref, getBlogCategory } from "@/lib/blog/categories";
import { SITE_URL, formatDate } from "@/lib/utils";
import { hrefEnabled } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: [post.keyword, ...post.tags].filter(Boolean),
    authors: [{ name: post.author }],
    alternates: { canonical: blogPostHref(post.slug) },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: blogPostHref(post.slug),
      publishedTime: post.date,
      modifiedTime: post.updated,
      section: getBlogCategory(post.category)?.name,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

/** Where each category's readers should go next on BTechi. */
const NEXT_STEP: Record<string, { title: string; text: string; href: string; cta: string }> = {
  "iitm-bs": {
    title: "Preparing for the qualifier?",
    text: "Cheat notes for Maths I, Stats I, CT and English I, real previous-year papers with official keys, and timed mock exams.",
    href: "/qualifier",
    cta: "Open the Qualifier Pack",
  },
  "exam-prep": {
    title: "Practise with real papers",
    text: "Previous-year quiz and end-term papers for IITM BS courses, in an exam-style portal with answer keys.",
    href: "/pyqs",
    cta: "Browse PYQs",
  },
  "data-skills": {
    title: "Learn it properly, free",
    text: "Text courses in Python, SQL, Excel, Power BI and statistics, with worked examples and projects.",
    href: "/skills",
    cta: "Explore Skills",
  },
  ai: {
    title: "Use AI well at work",
    text: "A free, practical course on prompting, structured outputs, AI-assisted analysis and responsible use.",
    href: "/skills/genai-for-business/notes",
    cta: "Read the GenAI notes",
  },
  careers: {
    title: "Get interview-ready",
    text: "Resume teardown, portfolio projects, SQL and case-round patterns, and a full mock-interview plan.",
    href: "/skills/analyst-interview-prep/notes",
    cta: "Start interview prep",
  },
};

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const cat = getBlogCategory(post.category)!;
  const href = blogPostHref(post.slug);
  const related = relatedPosts(post).map(toSummary);
  // Skip the next step when it points into a section this deployment has switched off.
  const next = [NEXT_STEP[post.category]].find((n) => n && hrefEnabled(n.href));
  const h2s = post.toc.filter((t) => t.level === 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${href}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.updated,
    wordCount: post.words,
    timeRequired: `PT${post.minutes}M`,
    articleSection: cat.name,
    keywords: [post.keyword, ...post.tags].filter(Boolean).join(", "),
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${href}` },
    author: { "@type": "Organization", name: post.author, url: `${SITE_URL}/about` },
    publisher: { "@type": "Organization", name: "BTechi", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <header className="border-b border-border bg-surface">
        <div className="container-page py-7 md:py-10">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: cat.name, href: blogCategoryHref(cat.slug) }, { label: post.title }]} />
          <div className="mx-auto max-w-3xl lg:mx-0">
            <Link href={blogCategoryHref(cat.slug)}>
              <Badge tone="brand">{cat.name}</Badge>
            </Link>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-[2.6rem]">{post.title}</h1>
            <p className="mt-3 text-lg text-muted">{post.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-full bg-brand text-xs font-extrabold text-brand-ink">B</span>
                <span className="font-semibold text-fg">{post.author}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden />
                {post.updated !== post.date ? (
                  <>
                    Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </>
                ) : (
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                )}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden /> {post.minutes} min read
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 print:hidden">
              <BookmarkButton withLabel item={{ kind: "note", id: `blog-${post.slug}`, title: post.title, href, subtitle: "Blog" }} />
              <ShareButton title={post.title} path={href} />
            </div>
          </div>
        </div>
      </header>

      <div className="container-page grid gap-10 py-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="mx-auto w-full min-w-0 max-w-3xl lg:mx-0">
          <BlogCover slug={post.slug} category={post.category} label={post.cover} image={post.image} motif={post.motif} highlights={post.highlights} size="lg" className="mb-8 rounded-2xl border border-border" />

          {h2s.length > 2 && (
            <details className="card mb-8 p-4 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold [&::-webkit-details-marker]:hidden">
                <ListTree className="size-4" aria-hidden /> On this page
                <span className="ml-auto text-xs font-normal text-muted">{h2s.length} sections</span>
              </summary>
              <div className="mt-3">
                <BlogToc items={post.toc} />
              </div>
            </details>
          )}

          <ReadingProgress target="article-body" />
          <div id="article-body">
            <Markdown blocks={post.blocks} />
          </div>

          {post.tags.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((t) => (
                <li key={t} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                  {t}
                </li>
              ))}
            </ul>
          )}

          {next && (
            <aside className="mt-10 rounded-2xl bg-brand/15 p-5 ring-1 ring-brand/50 sm:p-6">
              <p className="text-lg font-bold">{next.title}</p>
              <p className="mt-1 text-sm">{next.text}</p>
              <Link href={next.href} className={buttonClass("dark", "md", "mt-4")}>
                {next.cta} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </aside>
          )}

          <section aria-label="About the author" className="mt-8 flex gap-4 rounded-2xl border border-border p-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-amber-500 text-lg font-extrabold text-brand-ink">B</span>
            <div className="text-sm">
              <p className="font-bold">{post.author}</p>
              <p className="mt-1 text-muted">
                BTechi is built by IIT Madras BS learners and alumni. We check facts against official sources (the IITM BS website, student
                handbook and published documentation) and update posts when things change. BTechi is not affiliated with IIT Madras.
              </p>
            </div>
          </section>
        </div>

        <aside className="hidden lg:block print:hidden">
          <div className="sticky top-24 space-y-6">
            {post.toc.length > 0 && (
              <nav aria-label="On this page" data-toc-scroll className="max-h-[calc(100dvh-8rem)] overflow-y-auto pr-1 [scrollbar-width:thin]">
                <p className="eyebrow mb-3">On this page</p>
                <BlogToc items={post.toc} />
              </nav>
            )}
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface/50">
          <div className="container-page py-12">
            <h2 className="mb-5 text-xl font-bold tracking-tight md:text-2xl">Keep reading</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
