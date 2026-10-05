import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { ProgramCard } from "@/components/cards";
import { ButtonLink, EmptyState, PageHeader } from "@/components/ui";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description: "Browse IIT Mandi, B.A., Management and Data Science programs semester by semester.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Programs" }]}
        title="Explore programs"
        description="Choose your program to see every semester, subject and topic, with resources mapped to each."
      />
      <div className="container-page py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
        <EmptyState
          className="mt-10"
          icon={<GraduationCap className="size-6" />}
          title="Don't see your program?"
          description="We're adding universities and degrees every semester. Tell us what you study and we'll prioritise it."
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
