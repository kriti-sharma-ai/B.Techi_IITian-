// Search and answer-engine copy shared by the root metadata, the home page, its JSON-LD and /llms.txt,
// so Google, Bing and AI assistants all read the same description of BTechi.

import type { Metadata } from "next";
import { QUALIFIER_CUTOFF } from "./data/qualifier-meta";
import { REVIEW_SUMMARY } from "./data/reviews";

const rating = `${REVIEW_SUMMARY.average}/5`;
/** The IIT Madras BS programmes whose courses BTechi has papers and practice for. */
export const IITM_PROGRAMMES = ["BS in Data Science and Applications", "BS in Management and Data Science"] as const;

/** Names students actually type for the degree; used so search engines and assistants match every alias. */
export const IITM_ALIASES = ["IIT Madras BS", "IITM BS", "IIT Madras online degree", "IIT Madras BSc Data Science", "IITM BS Data Science", "IITM online BSc"];

/**
 * Queries BTechi wants to be found for. Google ignores the keywords meta tag, so this mainly feeds
 * Bing and assistants; the ranking work is done by titles, headings and page copy that use these phrases.
 */
export const SEO_KEYWORDS = [
  ...IITM_ALIASES,
  "IIT Madras BS Data Science and Applications",
  "IIT Madras BS Management and Data Science",
  "IITM BS qualifier",
  "IITM BS qualifier mock test",
  "IITM BS qualifier previous year papers",
  "IITM BS PYQ",
  "IITM BS PYQ PDF",
  "IIT Madras BS PYQ",
  "IIT Madras BS PYQ PDF",
  "IITM BS previous year question papers",
  "IITM BS quiz 1 PYQ",
  "IITM BS quiz 2 PYQ",
  "IITM BS end term PYQ",
  "IITM BS mock test",
  "IITM BS cheat sheet",
  "IITM BS notes",
  "IITM BS Maths 1",
  "IITM BS Stats 1",
  "IITM BS Computational Thinking",
  "IITM BS Python",
  "IITM BS foundation level",
  "IITM BS diploma level",
  "IIT Madras qualifier",
  "IIT Madras PYQ",
  "BTechi",
  "BTechi IITian",
  "BTechi IITM",
];

// About 160 characters, so search results show all of it.
export const SITE_DESCRIPTION =
  "Free IIT Madras BS prep: real Qualifier, Quiz and End Term papers in a timed exam portal, graded with official answer keys, for Data Science and Management students.";

/**
 * Questions students ask Google and AI assistants, answered in one or two sentences each.
 * Rendered on the home page and as FAQPage JSON-LD, so the visible text and the markup always match.
 */
export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: "What is BTechi?",
    a: "BTechi is a free study platform for the IIT Madras BS degree. You sit real previous-year papers (Qualifier, Quiz 1, Quiz 2 and End Term) in an online exam portal that works like the real one, and every answer is checked against the official answer key.",
  },
  {
    q: "Does BTechi cover the IIT Madras BS in Data Science and Applications?",
    a: "Yes. BTechi has papers and practice for both the BS in Data Science and Applications and the BS in Management and Data Science: the shared Foundation courses (Maths I, Stats I, Computational Thinking, English I), and Data Science courses such as Python, DBMS, PDSA, MAD, Machine Learning, Tools in Data Science and Deep Learning.",
  },
  {
    q: "Which IITM BS exams and levels does BTechi cover?",
    a: "Qualifier papers for the four qualifier courses, and Quiz 1, Quiz 2 and End Term papers for courses at Foundation, Diploma and Degree level. Every paper comes with the official answer key. BTechi does not cover the BS in Electronic Systems or the BS in Aeronautics and Space Technology.",
  },
  {
    q: "What is IITM BS PYQ?",
    a: "PYQ means previous year questions: the real questions from past IIT Madras BS exams (Qualifier, Quiz 1, Quiz 2 and End Term). Solving them shows you the exam pattern and the topics that come up most. BTechi has them for every level, with the official answer key.",
  },
  {
    q: "Where can I find IITM BS previous year question papers?",
    a: "On the BTechi PYQs page, sorted by level (Foundation, Diploma, Degree) and course. Each paper can be taken as a timed test in the exam portal or downloaded as a printable question sheet.",
  },
  {
    q: "Is there a free IITM BS qualifier mock test?",
    a: "Yes. The BTechi Qualifier Pack has full 4-course qualifier papers for Maths I, Stats I, Computational Thinking and English I, with a pass or not-yet verdict against the General-category cutoff. It is free and needs no sign-up.",
  },
  {
    q: "What is the IITM BS qualifier cutoff?",
    a: `For the General category you need at least ${QUALIFIER_CUTOFF.perSubject}% in every qualifier course and at least ${QUALIFIER_CUTOFF.average}% on average across the four courses. Cutoffs are lower for OBC, SC, ST and PwD candidates; the official IIT Madras BS website has the current rules.`,
  },
  {
    q: "Is BTechi rated well by students?",
    a: `Yes. Students preparing for the IIT Madras BS qualifier rate BTechi ${rating} across ${REVIEW_SUMMARY.count} reviews, mainly for the exam-like portal, the on-screen scientific calculator and the chapter-wise PYQs with official answer keys.`,
  },
  {
    q: "Is BTechi free, and is it official?",
    a: "BTechi is 100% free and you can take any mock without an account. It is an independent student initiative, not run by or affiliated with IIT Madras; official dates, fees and rules are on study.iitm.ac.in.",
  },
];

// Served by app/opengraph-image.tsx. A page that sets openGraph drops the inherited file image, so it's named here.
const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "BTechi: IIT Madras BS PYQs, qualifier mock tests and exam portal" };

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
