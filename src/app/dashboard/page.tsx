import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard";

export const metadata: Metadata = { title: "Dashboard", robots: { index: false } };

export default function DashboardPage() {
  return (
    <div className="container-page py-8 md:py-10">
      <Dashboard />
    </div>
  );
}
