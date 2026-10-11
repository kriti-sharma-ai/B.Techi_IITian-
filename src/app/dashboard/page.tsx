import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard";
import { getCourseExamLinks } from "@/lib/pyq-practice";

export const metadata: Metadata = { title: "Dashboard", robots: { index: false } };

// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export default async function DashboardPage() {
  // Without the papers the dashboard still works; it just has no exams to list.
  const exams = await getCourseExamLinks().catch((e: unknown) => {
    console.error("Loading papers for the dashboard failed:", e);
    return [];
  });
  return (
    <div className="container-page py-8 md:py-10">
      <Dashboard exams={exams} />
    </div>
  );
}
