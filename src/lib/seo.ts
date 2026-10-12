import type { Metadata } from "next";

// Served by app/opengraph-image.tsx. A page that sets openGraph drops the inherited file image, so it's named here.
const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "BTechi: IIT Madras BS notes, PYQs and practice" };

type PageSeo = {
  title: string;
  description: string;
  /** Site-relative path, used as the canonical and og:url. */
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

/**
 * Metadata for one indexable page. Next.js replaces openGraph wholesale when a page sets it
 * and inherits the root's otherwise, so every page sets its own to keep shared links accurate.
 */
export function pageMetadata({ title, description, path, type = "website", noindex }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, siteName: "BTechi", locale: "en_IN", title, description, url: path, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
