import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { ProgramCard } from "@/components/cards";
import { ButtonLink, EmptyState, PageHeader } from "@/components/ui";
import { programs } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS Programs: Foundation, Diploma & Degree Levels",
  description: "The IIT Madras BS in Management and Data Science, level by level: every Foundation, Diploma and Degree course with course codes, credits, notes and PYQs.",
  path: "/programs",
});

export default function ProgramsPage() {
  // BTechi currently covers one program; send students straight to it.
  if (programs.length === 1) redirect(`/programs/${programs[0].slug}`);

  return (
    <>
      <PageHeader crumbs={[{ label: "Programs" }]} title="Explore programs" description="Choose your program to see every level and course." />
      <div className="container-page py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
        <EmptyState
          className="mt-10"
          icon={<GraduationCap className="size-6" />}
          title="Don't see your program?"
          description="Tell us what you study and we'll prioritise it."
          action={
            <ButtonLink href="/contribute" variant="secondary">
              Request a program →
            </ButtonLink>
          }
        />
      </div>
    </>
  );
}
