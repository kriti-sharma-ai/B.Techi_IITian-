import { Suspense } from "react";
import { AdminHeader } from "@/components/admin/shell";
import { ResourceForm } from "@/components/admin/resource-form";

export const metadata = { title: "Upload resource" };

export default function UploadPage() {
  return (
    <>
      <AdminHeader
        title="Upload resource"
        description="Notes (PDF, Word, image or link), YouTube videos and books, placed in a course, week and topic."
      />
      <Suspense fallback={<div className="skeleton h-96" />}>
        <ResourceForm />
      </Suspense>
    </>
  );
}
