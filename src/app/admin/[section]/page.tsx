import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminHeader } from "@/components/admin/shell";
import { BarList, StatCard, Table, Td } from "@/components/admin/widgets";
import { LocalDownloads, ReportsTable, ReviewQueue, UsersTable } from "@/components/admin/local-tables";
import { Badge, QualityBadge, buttonClass } from "@/components/ui";
import {
  allTopics,
  books,
  getLevel,
  getProgram,
  notes,
  popularNotes,
  programs,
  pyqs,
  pyqTitle,
  questions,
  subjectContext,
  subjectName,
  subjects,
  topicTitle,
  unitLabel,
  videos,
} from "@/lib/content";
import { formatDate, formatNumber } from "@/lib/utils";

const SECTIONS = {
  analytics: "Analytics",
  review: "Review queue",
  subjects: "Courses",
  notes: "Notes",
  videos: "Videos",
  books: "Books",
  questions: "Questions",
  pyqs: "PYQs",
  users: "Users & roles",
  reports: "Reports",
  downloads: "Downloads",
  settings: "Settings",
} as const;
type Section = keyof typeof SECTIONS;

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(SECTIONS).map((section) => ({ section }));

export async function generateMetadata({ params }: PageProps<"/admin/[section]">) {
  const s = (await params).section as Section;
  return { title: SECTIONS[s] ?? "Admin" };
}

const addButton = (
  <Link href="/admin/upload" className={buttonClass("primary", "md")}>
    Add new
  </Link>
);

export default async function AdminSection({ params }: PageProps<"/admin/[section]">) {
  const section = (await params).section as Section;
  if (!(section in SECTIONS)) notFound();
  const title = SECTIONS[section];

  switch (section) {
    case "analytics": {
      const programDownloads = programs
        .map((p) => ({
          label: p.name,
          value: notes.filter((n) => subjects.find((s) => s.slug === n.subjectSlug)?.programSlug === p.slug).reduce((a, n) => a + n.downloads, 0),
        }))
        .sort((a, b) => b.value - a.value);
      const subjectViews = subjects
        .map((s) => ({
          label: s.name,
          value:
            notes.filter((n) => n.subjectSlug === s.slug).reduce((a, n) => a + n.downloads, 0) +
            videos.filter((v) => v.subjectSlug === s.slug).reduce((a, v) => a + v.views, 0),
          href: `/subjects/${s.slug}`,
        }))
        .filter((x) => x.value > 0)
        .sort((a, b) => b.value - a.value)
        .slice(0, 6);
      return (
        <>
          <AdminHeader title={title} description="What students use most. Use it to decide what to create next." />
          <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Note downloads" value={notes.reduce((a, n) => a + n.downloads, 0)} />
            <StatCard label="Video views" value={videos.reduce((a, v) => a + v.views, 0)} />
            <StatCard label="Questions in bank" value={questions.length} />
            <StatCard label="Topics mapped" value={subjects.reduce((a, s) => a + allTopics(s).length, 0)} />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <BarList title="Most viewed subjects" rows={subjectViews} />
            <BarList title="Most downloaded notes" rows={popularNotes(6).map((n) => ({ label: n.title, value: n.downloads, href: `/notes/${n.id}` }))} />
            <BarList
              title="Most watched videos"
              rows={[...videos].sort((a, b) => b.views - a.views).slice(0, 6).map((v) => ({ label: v.title, value: v.views }))}
            />
            <BarList title="Most popular programs" rows={programDownloads} />
          </div>
        </>
      );
    }

    case "review":
      return (
        <>
          <AdminHeader title={title} description="Contributor uploads move Draft → Pending review → Published." action={addButton} />
          <ReviewQueue />
        </>
      );

    case "reports":
      return (
        <>
          <AdminHeader title={title} description="Issues flagged by students." />
          <ReportsTable />
        </>
      );

    case "users":
      return (
        <>
          <AdminHeader title={title} description="Student · Contributor · Moderator · Admin · Super Admin." />
          <UsersTable />
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-5">
            {[
              ["Student", "View, download, practise, bookmark, track progress"],
              ["Contributor", "Upload resources, submit questions, suggest corrections"],
              ["Moderator", "Review, approve and edit content"],
              ["Admin", "Full content and user management"],
              ["Super Admin", "Full system control incl. settings and roles"],
            ].map(([r, d]) => (
              <div key={r} className="card p-4">
                <p className="font-semibold">{r}</p>
                <p className="mt-1 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </>
      );

    case "downloads":
      return (
        <>
          <AdminHeader title={title} description="Download counts per resource." />
          <Table head={["Resource", "Subject", "Downloads", "Updated"]}>
            {[...notes]
              .sort((a, b) => b.downloads - a.downloads)
              .map((n) => (
                <tr key={n.id}>
                  <Td className="font-medium">{n.title}</Td>
                  <Td className="text-muted">{subjectName(n.subjectSlug)}</Td>
                  <Td className="font-semibold tabular-nums">{formatNumber(n.downloads)}</Td>
                  <Td className="text-muted">{formatDate(n.updatedAt)}</Td>
                </tr>
              ))}
          </Table>
          <LocalDownloads />
        </>
      );

    case "subjects":
      return (
        <>
          <AdminHeader
            title={title}
            action={
              <Link href="/admin/curriculum" className={buttonClass("primary", "md")}>
                Add course
              </Link>
            }
          />
          <Table head={["Code", "Course", "Level", "Weeks", "Topics", "Credits"]}>
            {subjects.map((s) => (
              <tr key={s.slug}>
                <Td className="font-mono text-xs text-muted">{s.code ?? "—"}</Td>
                <Td>
                  <Link href={`/subjects/${s.slug}`} className="font-medium hover:underline">
                    {s.name}
                  </Link>
                </Td>
                <Td>{getLevel(s.programSlug, s.level)?.short}</Td>
                <Td className="tabular-nums">{s.units.length}</Td>
                <Td className="tabular-nums">{allTopics(s).length}</Td>
                <Td className="tabular-nums">{s.credits}</Td>
              </tr>
            ))}
          </Table>
        </>
      );

    case "notes":
      return (
        <>
          <AdminHeader title={title} action={addButton} />
          <Table head={["Title", "Subject", "Quality", "File", "Downloads"]}>
            {notes.map((n) => (
              <tr key={n.id}>
                <Td>
                  <Link href={`/notes/${n.id}`} className="font-medium hover:underline">
                    {n.title}
                  </Link>
                  <p className="text-xs text-muted">
                    {unitLabel(n.subjectSlug, n.unitId)} · {n.kind} · {n.pages} pp
                  </p>
                </Td>
                <Td className="text-muted">{subjectName(n.subjectSlug)}</Td>
                <Td>
                  <QualityBadge quality={n.quality} />
                </Td>
                <Td>{n.fileUrl ? <Badge tone="green">Uploaded</Badge> : <Badge tone="red">Missing</Badge>}</Td>
                <Td className="tabular-nums">{formatNumber(n.downloads)}</Td>
              </tr>
            ))}
          </Table>
        </>
      );

    case "videos":
      return (
        <>
          <AdminHeader title={title} action={addButton} />
          <Table head={["Title", "Subject · Topic", "Source", "Duration", "Status"]}>
            {videos.map((v) => (
              <tr key={v.id}>
                <Td className="font-medium">{v.title}</Td>
                <Td className="text-muted">
                  {subjectName(v.subjectSlug)}
                  {v.topicSlug && ` · ${topicTitle(v.subjectSlug, v.topicSlug)}`}
                </Td>
                <Td>{v.channel}</Td>
                <Td className="tabular-nums">{v.duration}</Td>
                <Td>{v.youtubeId ? <Badge tone="green">Linked</Badge> : <Badge tone="amber">Needs link</Badge>}</Td>
              </tr>
            ))}
          </Table>
        </>
      );

    case "books":
      return (
        <>
          <AdminHeader title={title} action={addButton} />
          <Table head={["Title", "Authors", "Courses", "Access"]}>
            {books.map((b) => (
              <tr key={b.slug}>
                <Td>
                  <Link href={`/books/${b.slug}`} className="font-medium hover:underline">
                    {b.title}
                  </Link>
                </Td>
                <Td className="text-muted">{b.authors.join(", ")}</Td>
                <Td className="text-muted">{b.subjectSlugs.map(subjectName).join(", ")}</Td>
                <Td>{b.free ? <Badge tone="green">Free &amp; legal</Badge> : <Badge>Paid</Badge>}</Td>
              </tr>
            ))}
          </Table>
        </>
      );

    case "questions":
      return (
        <>
          <AdminHeader title={title} description={`${questions.length} questions. Every one needs an explanation before publishing.`} action={addButton} />
          <Table head={["Question", "Subject · Topic", "Type", "Difficulty", "Source"]}>
            {questions.map((q) => (
              <tr key={q.id}>
                <Td className="max-w-md">
                  <p className="line-clamp-2">{q.prompt}</p>
                </Td>
                <Td className="text-muted">
                  {subjectName(q.subjectSlug)} · {topicTitle(q.subjectSlug, q.topicSlug)}
                </Td>
                <Td>{q.type}</Td>
                <Td>
                  <Badge tone={q.difficulty === "Easy" ? "green" : q.difficulty === "Medium" ? "amber" : "red"}>{q.difficulty}</Badge>
                </Td>
                <Td className="text-muted">{q.source ?? "—"}</Td>
              </tr>
            ))}
          </Table>
        </>
      );

    case "pyqs":
      return (
        <>
          <AdminHeader title={title} description="Tag each paper with the topics it examined to power PYQ analysis." action={addButton} />
          <Table head={["Paper", "Program", "Topics tagged", "Questions", "File"]}>
            {pyqs.map((p) => (
              <tr key={p.id}>
                <Td>
                  <Link href={`/pyqs/${p.id}`} className="font-medium hover:underline">
                    {pyqTitle(p)}
                  </Link>
                </Td>
                <Td className="text-muted">{subjectContext(p.subjectSlug)}</Td>
                <Td className="tabular-nums">{p.topics.length}</Td>
                <Td className="tabular-nums">{p.questionIds.length}</Td>
                <Td>{p.fileUrl ? <Badge tone="green">Uploaded</Badge> : <Badge tone="amber">Missing</Badge>}</Td>
              </tr>
            ))}
          </Table>
        </>
      );

    case "settings":
      return (
        <>
          <AdminHeader title={title} />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Uploads", `Max file size 25 MB · PDF, DOC/DOCX, PNG/JPG/WEBP · server-side MIME check required`],
              ["Downloads", "Signed URLs valid for 5 minutes · rate limit 30 downloads / user / hour"],
              ["Content workflow", "Contributor uploads require moderator approval before publishing"],
              ["Authentication", "Google OAuth + email/password via Supabase Auth (not yet connected)"],
            ].map(([t, d]) => (
              <div key={t} className="card p-5">
                <p className="font-semibold">{t}</p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </>
      );
  }
}
