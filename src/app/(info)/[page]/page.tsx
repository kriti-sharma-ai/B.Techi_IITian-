import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader, ButtonLink } from "@/components/ui";

// Placeholder copy for footer pages. Replace with final text (and legal
// review for Privacy/Terms/Copyright) before launch.
const PAGES: Record<string, { title: string; description: string; body: string[]; cta?: { label: string; href: string } }> = {
  about: {
    title: "About BTechi",
    description: "A structured academic platform where students learn, practise and prepare.",
    body: [
      "BTechi started as the BTechi IITian YouTube channel: AI, automation, tech and education explained simply. This platform is the next step, starting with the IIT Madras BS in Management and Data Science.",
      "Instead of hunting through WhatsApp groups, Telegram channels and random Drive links, students get one structured place: Level → Course → Week → Topic, with notes, videos, books, practice and previous-year questions mapped to every topic.",
    ],
    cta: { label: "Explore programs", href: "/programs" },
  },
  contact: {
    title: "Contact",
    description: "Questions, feedback or partnership ideas.",
    body: [
      "We read every message. For content issues, the fastest route is the “Report” button on the resource itself; it goes straight to our moderators.",
      "For everything else, reach out through the BTechi IITian YouTube channel.",
    ],
  },
  contribute: {
    title: "Contribute",
    description: "Help build the library: notes, questions, past papers and corrections.",
    body: [
      "Have great notes, a past paper, or a question bank? Contributor accounts can upload resources and submit questions. Every contribution is reviewed by a moderator before it goes live.",
      "Missing a program, semester or subject? Request it. We prioritise what students ask for most.",
    ],
    cta: { label: "Create an account", href: "/signup" },
  },
  privacy: {
    title: "Privacy",
    description: "What we collect and why.",
    body: [
      "We collect only what's needed to run BTechi: your account details, your learning progress (topics completed, questions attempted, bookmarks) and download events so we know which resources help most.",
      "We never sell personal data. This page is a placeholder pending legal review.",
    ],
  },
  terms: {
    title: "Terms of use",
    description: "The rules for using BTechi.",
    body: ["BTechi is provided for personal educational use. Don't redistribute resources commercially. This page is a placeholder pending legal review."],
  },
  copyright: {
    title: "Copyright",
    description: "How we handle third-party content.",
    body: [
      "We embed videos rather than re-uploading them and link to publishers or author-hosted free editions of books. We do not host copyrighted books without permission.",
      "If you believe content on BTechi infringes your rights, use “Report → Copyright issue” on the resource, and we'll review it promptly.",
    ],
  },
  blog: {
    title: "Blog",
    description: "Study strategies, exam guides and platform updates.",
    body: ["We're working on our first posts. Check back soon."],
    cta: { label: "Explore subjects meanwhile", href: "/subjects" },
  },
  "study-guides": {
    title: "Study guides",
    description: "Step-by-step guides for every semester.",
    body: ["Study guides are coming soon. For now, Exam Prep builds a plan for any subject from previous-year papers."],
    cta: { label: "Open Exam Prep", href: "/exam-prep" },
  },
};

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(PAGES).map((page) => ({ page }));

export async function generateMetadata({ params }: PageProps<"/[page]">): Promise<Metadata> {
  const p = PAGES[(await params).page];
  return p ? { title: p.title, description: p.description, alternates: { canonical: `/${(await params).page}` } } : {};
}

export default async function InfoPage({ params }: PageProps<"/[page]">) {
  const p = PAGES[(await params).page];
  if (!p) notFound();
  return (
    <>
      <PageHeader crumbs={[{ label: p.title }]} title={p.title} description={p.description} />
      <div className="container-page max-w-3xl space-y-4 py-10 text-[17px] leading-relaxed">
        {p.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
        {p.cta && (
          <div className="pt-4">
            <ButtonLink href={p.cta.href}>{p.cta.label}</ButtonLink>
          </div>
        )}
      </div>
    </>
  );
}
