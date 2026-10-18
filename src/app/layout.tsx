import { PrintFrame } from "@/components/print-frame";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ContentSnapshot } from "@/components/content-snapshot";
import { Providers } from "@/components/providers";
import { BottomNav, Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
import { Guide } from "@/components/guide";
import { loadContent } from "@/lib/cms";
import { CONTACT_EMAIL, FOUNDERS, GITHUB_URL, LINKEDIN_URL, SITE_URL, YOUTUBE_URL } from "@/lib/utils";
import { IITM_ALIASES, IITM_PROGRAMMES, SEO_KEYWORDS, SITE_DESCRIPTION } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const TITLE = "BTechi: IIT Madras BS PYQs, Qualifier Mock Tests & Exam Portal";

// Google Analytics 4 measurement ID (G-…). Unset locally and on previews, so only the live site is counted.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Search Console / Bing Webmaster ownership tags, set per deployment.
const verification: Metadata["verification"] = {
  google: process.env.GOOGLE_SITE_VERIFICATION,
  other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · BTechi",
  },
  description: SITE_DESCRIPTION,
  applicationName: "BTechi",
  keywords: SEO_KEYWORDS,
  category: "education",
  verification,
  openGraph: {
    type: "website",
    siteName: "BTechi",
    locale: "en_IN",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: SITE_DESCRIPTION },
  alternates: { types: { "application/rss+xml": "/blog/rss.xml" } },
};

// Who BTechi is, on every page, so search engines and AI assistants recognise the site as one entity.
const siteLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "BTechi",
      // Spellings students type for the brand, including the YouTube channel's name.
      alternateName: ["Btechi", "BTechi IITian", "B-Techi IITian", "btechi.in"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo-512.png`,
      email: CONTACT_EMAIL,
      description:
        "Free, independent study platform for the IIT Madras BS in Data Science and Applications and the IIT Madras BS in Management and Data Science: real previous-year papers in an exam-like portal graded against official answer keys, qualifier mocks, practice and cheat sheets. Not affiliated with IIT Madras.",
      // Official profiles, so search engines link the channel and the site as the same brand.
      sameAs: [YOUTUBE_URL, LINKEDIN_URL, GITHUB_URL],
      // The real people behind the brand, linked to their LinkedIn profiles.
      founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, description: f.note, sameAs: f.linkedin })),
      knowsAbout: [...IITM_ALIASES, ...IITM_PROGRAMMES.map((p) => `IIT Madras ${p}`), "IITM BS qualifier exam", "IITM BS previous year papers"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "BTechi",
      alternateName: ["Btechi", "btechi.in"],
      url: SITE_URL,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: IITM_PROGRAMMES.map((name) => ({
        "@type": "EducationalOccupationalProgram",
        name: `IIT Madras ${name}`,
        provider: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Madras", sameAs: "https://study.iitm.ac.in/" },
      })),
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Questions stay on the server; pages hand them to client components as props.
  const { questions: _, ...content } = await loadContent();
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-dvh font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd).replace(/</g, "\\u003c") }} />
        <ContentSnapshot content={content}>
          <Providers>
            <Navbar />
            <main id="main">
              <PrintFrame>{children}</PrintFrame>
            </main>
            <Footer />
            <BottomNav />
            <ScrollTop />
            <Guide />
          </Providers>
        </ContentSnapshot>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
