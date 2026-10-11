import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogCategoryIcons } from "@/components/blog/cover";
import { PostCard, toSummary } from "@/components/blog/post-card";
import { Breadcrumbs, EmptyState, buttonClass } from "@/components/ui";
import { blogCategories, blogCategoryHref, getBlogCategory } from "@/lib/blog/categories";
import { postsInCategory } from "@/lib/blog";
import { SITE_URL, cn } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => blogCategories.map((c) => ({ category: c.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const cat = getBlogCategory((await params).category);
  if (!cat) return {};
  return {
    title: `${cat.name} Articles & Guides`,
    description: `${cat.description} In-depth, regularly updated guides from BTechi.`,
    alternates: { canonical: blogCategoryHref(cat.slug) },
  };
}

export default async function BlogCategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const cat = getBlogCategory((await params).category);
  if (!cat) notFound();
  const posts = postsInCategory(cat.slug).map(toSummary);
  const Icon = blogCategoryIcons[cat.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.name}: BTechi Blog`,
    url: `${SITE_URL}${blogCategoryHref(cat.slug)}`,
    hasPart: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/blog/${p.slug}` })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="border-b border-border bg-surface">
        <div className="container-page py-8 md:py-10">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: cat.name }]} />
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-surface-2">
              <Icon className="size-5" aria-hidden />
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{cat.name}</h1>
          </div>
          <p className="mt-3 max-w-2xl text-muted">{cat.description}</p>
          <nav aria-label="Other categories" className="mt-6 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <Link
                key={c.slug}
                href={blogCategoryHref(c.slug)}
                aria-current={c.slug === cat.slug ? "page" : undefined}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  c.slug === cat.slug ? "border-fg bg-fg text-bg" : "border-border text-muted hover:border-fg/30 hover:text-fg",
                )}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="container-page py-10 md:py-12">
        {posts.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Guides for this topic are on the way."
            description="Meanwhile, browse the rest of the blog."
            action={
              <Link href="/blog" className={buttonClass("secondary", "md")}>
                All posts
              </Link>
            }
          />
        )}
      </div>
    </>
  );
}
