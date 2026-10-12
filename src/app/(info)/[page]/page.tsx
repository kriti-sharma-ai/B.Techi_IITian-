import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHeader, ButtonLink } from "@/components/ui";
import { hrefEnabled } from "@/lib/site";
import { PAGES } from "./content";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(PAGES).map((page) => ({ page }));

export async function generateMetadata({ params }: PageProps<"/[page]">): Promise<Metadata> {
  const { page } = await params;
  const p = PAGES[page];
  return p ? pageMetadata({ title: p.title, description: p.description, path: `/${page}` }) : {};
}

export default async function InfoPage({ params }: PageProps<"/[page]">) {
  const p = PAGES[(await params).page];
  if (!p) notFound();
  return (
    <>
      <PageHeader crumbs={[{ label: p.title }]} title={p.title} description={p.description}>
        {p.updated && <p className="text-sm text-muted">Last updated: {p.updated}</p>}
      </PageHeader>
      <div className="container-page max-w-3xl py-10">
        <div className="blog-prose [&_a]:underline [&_a]:underline-offset-2 [&_h2]:scroll-mt-24">{p.body}</div>
        {p.cta && hrefEnabled(p.cta.href) && (
          <div className="pt-8">
            <ButtonLink href={p.cta.href}>{p.cta.label}</ButtonLink>
          </div>
        )}
      </div>
    </>
  );
}
