import { AdminHeader } from "@/components/admin/shell";
import { CurriculumBuilder } from "@/components/admin/curriculum-builder";

export const metadata = { title: "Curriculum builder" };

export default function CurriculumPage() {
  return (
    <>
      <AdminHeader title="Curriculum builder" description="Program → Level → Course → Week → Topic. New items start as drafts." />
      <CurriculumBuilder />
    </>
  );
}
