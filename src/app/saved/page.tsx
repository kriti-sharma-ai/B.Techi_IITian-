import type { Metadata } from "next";
import { SavedList } from "@/components/saved-list";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Saved resources", robots: { index: false } };

export default function SavedPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Saved" }]} title="Saved resources" description="Everything you've bookmarked, in one place." />
      <div className="container-page py-8">
        <SavedList />
      </div>
    </>
  );
}
