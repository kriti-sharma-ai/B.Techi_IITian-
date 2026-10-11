import type { Metadata } from "next";
import { StudyProfileEditor } from "@/components/study-profile";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Study profile", robots: { index: false } };

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Study profile" }]}
        title="Your study profile"
        description="Pick your level and the courses you're taking this term. Course lists, past papers and practice then show just those courses, with a switch to see every course."
      />
      <div className="container-page py-8 md:py-10">
        <div className="max-w-3xl">
          <StudyProfileEditor />
        </div>
      </div>
    </>
  );
}
