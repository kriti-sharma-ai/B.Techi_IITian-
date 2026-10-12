import type { Metadata } from "next";
import { BlogCategoryNav } from "@/components/blog/category-nav";
import { PostListItem, toSummary } from "@/components/blog/post-card";
import { EmptyState, PageHeader } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog: IITM BS Guides, Exam Strategy, Data Skills & Careers",
  description:
    "In-depth guides for IIT Madras BS learners and aspiring analysts: the qualifier, exam strategy, Python, SQL, Excel, Power BI, AI trends and data careers in India.",
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
      <PageHeader crumbs={[{ label: "Blog" }]} title="Blog" description="Guides on the IITM BS, exams and data careers.">
        <BlogCategoryNav />
      </PageHeader>

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
