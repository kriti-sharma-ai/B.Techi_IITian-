"use client";

import { Check, RotateCcw, X } from "lucide-react";
import { subjectName } from "@/lib/content";
import { actions, useStore, type Upload } from "@/lib/store";
import { Badge, Button, EmptyState } from "../ui";
import { Table, Td } from "./widgets";

const statusTone = { draft: "neutral", pending: "amber", published: "green" } as const;

/** Content approval workflow (PRD §33): Draft → Pending review → Published. */
export function ReviewQueue() {
  const uploads = useStore((s) => s.uploads);
  const role = useStore((s) => s.user?.role);
  const canApprove = role !== "contributor";
  if (!uploads.length)
    return <EmptyState title="The review queue is empty." description="Uploads from the Upload page appear here with their workflow status." />;
  const set = (u: Upload, status: Upload["status"]) => actions.setUploadStatus(u.id, status);
  return (
    <Table head={["Resource", "Type", "Subject", "Status", "Actions"]} caption="Uploads awaiting review">
      {uploads.map((u) => (
        <tr key={u.id}>
          <Td>
            <p className="font-medium">{u.title}</p>
            <p className="text-xs text-muted">{u.fileName ?? u.url}</p>
          </Td>
          <Td>{u.type}</Td>
          <Td>{subjectName(u.subjectSlug)}</Td>
          <Td>
            <Badge tone={statusTone[u.status]}>{u.status === "pending" ? "Pending review" : u.status[0].toUpperCase() + u.status.slice(1)}</Badge>
          </Td>
          <Td>
            <div className="flex gap-1">
              {u.status === "draft" && (
                <Button size="sm" variant="secondary" onClick={() => set(u, "pending")}>
                  Submit
                </Button>
              )}
              {u.status === "pending" && canApprove && (
                <>
                  <Button size="sm" variant="secondary" onClick={() => set(u, "published")} aria-label={`Approve ${u.title}`}>
                    <Check className="size-4 text-green" aria-hidden /> Approve
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => set(u, "draft")} aria-label={`Reject ${u.title}`}>
                    <X className="size-4 text-red" aria-hidden /> Reject
                  </Button>
                </>
              )}
              {u.status === "published" && (
                <Button size="sm" variant="ghost" onClick={() => set(u, "draft")}>
                  <RotateCcw className="size-4" aria-hidden /> Unpublish
                </Button>
              )}
            </div>
          </Td>
        </tr>
      ))}
    </Table>
  );
}

export function ReportsTable() {
  const reports = useStore((s) => s.reports);
  if (!reports.length)
    return <EmptyState title="No reports yet." description="When students flag a resource (wrong syllabus, broken download…), it shows up here." />;
  return (
    <Table head={["Resource", "Reason", "Details", "Reported", "Status"]} caption="Student reports">
      {reports.map((r) => (
        <tr key={r.id}>
          <Td>
            <p className="font-medium">{r.title}</p>
            <p className="text-xs text-muted capitalize">{r.kind}</p>
          </Td>
          <Td>
            <Badge tone="red">{r.reason}</Badge>
          </Td>
          <Td className="max-w-xs text-muted">{r.details || "—"}</Td>
          <Td className="text-muted">{new Date(r.at).toLocaleDateString("en-IN")}</Td>
          <Td>
            {r.status === "open" ? (
              <Button size="sm" variant="secondary" onClick={() => actions.resolveReport(r.id)}>
                Mark resolved
              </Button>
            ) : (
              <Badge tone="green">Resolved</Badge>
            )}
          </Td>
        </tr>
      ))}
    </Table>
  );
}

export function UsersTable() {
  const user = useStore((s) => s.user);
  const rows = [
    ...(user ? [{ ...user, you: true }] : []),
    { name: "Aarav Sharma", email: "aarav@students.iitmandi.ac.in", role: "student", you: false },
    { name: "Diya Patel", email: "diya@example.com", role: "contributor", you: false },
    { name: "Kabir Singh", email: "kabir@example.com", role: "moderator", you: false },
  ];
  return (
    <Table head={["Name", "Email", "Role", ""]} caption="Users">
      {rows.map((u) => (
        <tr key={u.email}>
          <Td className="font-medium">
            {u.name} {u.you && <Badge tone="brand">You</Badge>}
          </Td>
          <Td className="text-muted">{u.email}</Td>
          <Td>
            <Badge tone={u.role === "student" ? "neutral" : u.role === "contributor" ? "teal" : u.role === "moderator" ? "blue" : "purple"}>
              {u.role.replace("_", " ")}
            </Badge>
          </Td>
          <Td className="text-right text-xs text-muted">{u.you ? "" : "Sample"}</Td>
        </tr>
      ))}
    </Table>
  );
}

export function LocalDownloads() {
  const downloads = useStore((s) => s.downloads);
  if (!downloads.length) return null;
  return (
    <div className="mt-6">
      <h2 className="mb-3 font-semibold">Download log (this browser)</h2>
      <Table head={["Resource", "When"]}>
        {downloads.slice(0, 20).map((d, i) => (
          <tr key={d.at + i}>
            <Td>{d.title}</Td>
            <Td className="text-muted">{new Date(d.at).toLocaleString("en-IN")}</Td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
