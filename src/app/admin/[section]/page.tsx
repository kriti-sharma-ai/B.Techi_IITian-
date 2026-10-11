import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminHeader } from "@/components/admin/shell";
import { ResourceTable, ReviewQueue } from "@/components/admin/content-tables";
import { Analytics, CoursesTable, Settings } from "@/components/admin/overview";
import { PapersSection } from "@/components/admin/papers";
import { Downloads, ReportsTable, UsersTable } from "@/components/admin/people";
import { QuestionsSection } from "@/components/admin/questions";
import { buttonClass } from "@/components/ui";

const add = (kind: string) => (
  <Link href={`/admin/upload?kind=${kind}`} className={buttonClass("primary", "md")}>
    Add new
  </Link>
);

type SectionDef = { title: string; description?: string; action?: React.ReactNode; body: React.ReactNode; ownHeader?: boolean };

// Questions and papers switch between a list and an editor, so they draw their own header.
const SECTIONS = {
  analytics: { title: "Analytics", description: "What students use most. Use it to decide what to create next.", body: <Analytics /> },
  review: { title: "Review queue", description: "Draft → Pending review → Published, or back to the author with notes.", body: <ReviewQueue /> },
  subjects: {
    title: "Courses",
    description: "Official courses come from the code; add weeks and new courses in the curriculum builder.",
    action: (
      <Link href="/admin/curriculum" className={buttonClass("primary", "md")}>
        Curriculum builder
      </Link>
    ),
    body: <CoursesTable />,
  },
  notes: { title: "Notes", action: add("note"), body: <ResourceTable kind="note" /> },
  videos: { title: "Videos", action: add("video"), body: <ResourceTable kind="video" /> },
  books: { title: "Books", action: add("book"), body: <ResourceTable kind="book" /> },
  questions: { title: "Questions", body: <QuestionsSection />, ownHeader: true },
  papers: { title: "Papers", body: <PapersSection />, ownHeader: true },
  users: { title: "Users & roles", description: "Student · Contributor · Moderator · Admin · Super admin.", body: <UsersTable /> },
  reports: { title: "Reports", description: "Issues flagged by students.", body: <ReportsTable /> },
  downloads: { title: "Downloads", description: "Downloads of published files.", body: <Downloads /> },
  settings: { title: "Settings", body: <Settings /> },
} satisfies Record<string, SectionDef>;
type Section = keyof typeof SECTIONS;

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(SECTIONS).map((section) => ({ section }));

export async function generateMetadata({ params }: PageProps<"/admin/[section]">) {
  return { title: (SECTIONS[(await params).section as Section] as SectionDef | undefined)?.title ?? "Admin" };
}

export default async function AdminSection({ params }: PageProps<"/admin/[section]">) {
  const section = (await params).section as Section;
  if (!(section in SECTIONS)) notFound();
  const s: SectionDef = SECTIONS[section];
  return (
    <>
      {!s.ownHeader && <AdminHeader title={s.title} description={s.description} action={s.action} />}
      {/* Lists and editors read ?edit= and ?new= */}
      <Suspense fallback={<div className="skeleton h-96" />}>{s.body}</Suspense>
    </>
  );
}
