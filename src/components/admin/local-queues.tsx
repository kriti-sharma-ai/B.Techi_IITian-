"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { Badge } from "../ui";

/** Open reports + pending uploads: the moderator's to-do list. */
export function LocalQueues() {
  const reports = useStore((s) => s.reports.filter((r) => r.status === "open"));
  const pending = useStore((s) => s.uploads.filter((u) => u.status === "pending"));
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <section className="card p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Open reports</h2>
          <Link href="/admin/reports" className="text-sm text-muted hover:text-fg">
            View all →
          </Link>
        </div>
        {reports.length ? (
          <ul className="divide-y divide-border text-sm">
            {reports.slice(0, 5).map((r) => (
              <li key={r.id} className="flex items-center gap-3 py-2.5">
                <Badge tone="red">{r.reason}</Badge>
                <span className="truncate">{r.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted">No open reports. Students can report any resource with the flag button.</p>
        )}
      </section>
      <section className="card p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Pending review</h2>
          <Link href="/admin/review" className="text-sm text-muted hover:text-fg">
            Review queue →
          </Link>
        </div>
        {pending.length ? (
          <ul className="divide-y divide-border text-sm">
            {pending.slice(0, 5).map((u) => (
              <li key={u.id} className="flex items-center gap-3 py-2.5">
                <Badge tone="amber">{u.type}</Badge>
                <span className="truncate">{u.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted">Nothing waiting. Contributor uploads land here before publishing.</p>
        )}
      </section>
    </div>
  );
}
