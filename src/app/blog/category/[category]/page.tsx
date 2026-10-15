import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCategoryNav } from "@/components/blog/category-nav";
import { PostListItem, toSummary } from "@/components/blog/post-card";
import { EmptyState, PageHeader, buttonClass } from "@/components/ui";
import { blogCategories, blogCategoryHref, getBlogCategory } from "@/lib/blog/categories";
import { postsInCategory } from "@/lib/blog";
import { SITE_URL } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => blogCategories.map((c) => ({ category: c.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const cat = getBlogCategory((await params).category);
  if (!cat) return {};
  return pageMetadata({
    title: `${cat.name} Articles & Guides`,
    description: `${cat.description} In-depth, regularly updated guides from BTechi.`,
    path: blogCategoryHref(cat.slug),
  });
}

export default async function BlogCategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const cat = getBlogCategory((await params).category);
  if (!cat) notFound();
  const posts = postsInCategory(cat.slug).map(toSummary);

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
      <PageHeader crumbs={[{ label: "Blog", href: "/blog" }, { label: cat.name }]} title={cat.name} description={cat.description} />
      <BlogCategoryNav current={cat.slug} />
      <div className="container-page py-8">
        {posts.length ? (
          <div className="max-w-3xl divide-y divide-border">
            {posts.map((p) => (
              <PostListItem key={p.slug} post={p} />
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
