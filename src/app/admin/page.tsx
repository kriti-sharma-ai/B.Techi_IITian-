import Link from "next/link";
import { GitBranch, Inbox, Upload } from "lucide-react";
import { AdminHeader } from "@/components/admin/shell";
import { BarList, StatCard } from "@/components/admin/widgets";
import { LocalQueues } from "@/components/admin/local-queues";
import { buttonClass } from "@/components/ui";
import { allTopics, books, notes, popularNotes, pyqs, questions, subjectName, subjects, videos } from "@/lib/content";

export const metadata = { title: "Dashboard" };

export default function AdminDashboard() {
  const resources = notes.length + videos.length + books.length + pyqs.length + questions.length;
  const downloads = notes.reduce((n, x) => n + x.downloads, 0);
  const topics = subjects.reduce((n, s) => n + allTopics(s).length, 0);
  const pct = (n: number) => (notes.length ? (n / notes.length) * 100 : 0);
  const quality = {
    verified: notes.filter((n) => n.quality === "verified").length,
    review: notes.filter((n) => n.quality === "needs-review").length,
    outdated: notes.filter((n) => n.quality === "outdated").length,
  };
  const missingFiles = notes.filter((n) => !n.fileUrl);

  return (
    <>
      <AdminHeader
        title="Dashboard"
        description="Content health and activity across BTechi."
        action={
          <div className="flex gap-2">
            <Link href="/admin/curriculum" className={buttonClass("secondary", "md")}>
              <GitBranch className="size-4" aria-hidden /> Curriculum
            </Link>
            <Link href="/admin/upload" className={buttonClass("primary", "md")}>
              <Upload className="size-4" aria-hidden /> Upload
            </Link>
          </div>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Resources" value={resources} hint={`${notes.length} notes · ${videos.length} videos · ${questions.length} questions`} />
        <StatCard label="Downloads" value={downloads} hint="All-time, across all notes" />
        <StatCard label="Courses" value={subjects.length} hint={`${subjects.filter((s) => s.units.length).length} with published content`} />
        <StatCard label="PYQ papers" value={pyqs.length} hint={`${new Set(pyqs.map((p) => p.subjectSlug)).size} subjects covered`} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <BarList
          title="Most downloaded resources"
          rows={popularNotes(5).map((n) => ({ label: `${n.title} · ${subjectName(n.subjectSlug)}`, value: n.downloads, href: `/notes/${n.id}` }))}
        />
        <section className="card p-5">
          <h2 className="mb-4 font-semibold">Content quality</h2>
          <div className="flex h-3 overflow-hidden rounded-full">
            <span className="bg-green" style={{ width: `${pct(quality.verified)}%` }} />
            <span className="bg-muted/40" style={{ width: `${pct(quality.review)}%` }} />
            <span className="bg-amber" style={{ width: `${pct(quality.outdated)}%` }} />
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="flex items-center gap-1.5 text-muted">
                <span className="size-2 rounded-full bg-green" /> Verified
              </dt>
              <dd className="text-xl font-bold tabular-nums">{quality.verified}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-muted">
                <span className="size-2 rounded-full bg-muted/40" /> Needs review
              </dt>
              <dd className="text-xl font-bold tabular-nums">{quality.review}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-muted">
                <span className="size-2 rounded-full bg-amber" /> Outdated
              </dt>
              <dd className="text-xl font-bold tabular-nums">{quality.outdated}</dd>
            </div>
          </dl>
          {missingFiles.length > 0 && (
            <div className="mt-5 border-t border-border pt-4">
              <p className="flex items-center gap-2 text-sm font-medium">
                <Inbox className="size-4" aria-hidden /> {missingFiles.length} notes are missing their file
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {missingFiles.slice(0, 4).map((n) => (
                  <li key={n.id}>
                    <Link href={`/notes/${n.id}`} className="hover:text-fg hover:underline">
                      {n.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>

      <LocalQueues />
    </>
  );
}
