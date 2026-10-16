import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BlogCategoryNav } from "@/components/blog/category-nav";
import { PostListItem, toSummary } from "@/components/blog/post-card";
import { EmptyState, PageHeader } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "IIT Madras BS Blog: Qualifier, PYQ PDFs, Exam Tips & Careers",
    description: "Guides for IIT Madras BS students: the qualifier, PYQ PDFs and important questions, exam strategy, Python, SQL, Power BI, and data careers in India.",
    path: "/blog",
  }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": `${SITE_URL}/blog/rss.xml` } },
};

export default function BlogPage() {
  const posts = getAllPosts().map(toSummary);

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
      <PageHeader crumbs={[{ label: "Blog" }]} title="IIT Madras BS blog" description="Guides on the IITM BS qualifier, PYQs, exams and data careers." />
      <BlogCategoryNav />

      <div className="container-page py-8">
        {posts.length ? (
          <div className="max-w-3xl divide-y divide-border">
            {posts.map((p) => (
              <PostListItem key={p.slug} post={p} />
            ))}
          </div>
        ) : (
          <EmptyState title="First posts are on their way." />
        )}
      </div>
    </>
  );
}
