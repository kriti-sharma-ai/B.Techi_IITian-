import { AdminHeader } from "@/components/admin/shell";
import { UploadForm } from "@/components/admin/upload-form";

export const metadata = { title: "Upload resource" };

export default function UploadPage() {
  return (
    <>
      <AdminHeader
        title="Upload resource"
        description="PDFs, documents, images, YouTube videos or external links, mapped to a subject, unit and topic."
      />
      <UploadForm />
    </>
  );
}
