"use client";

import { useEffect, useRef, useState } from "react";
import { Bookmark, Download, Flag, Share2, X } from "lucide-react";
import { actions, isBookmarked, useStore, type Bookmark as BookmarkT } from "@/lib/store";
import type { ResourceKind } from "@/lib/types";
import { useToast } from "./toast";
import { Button, buttonClass } from "./ui";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  item,
  className,
  withLabel = false,
}: {
  item: Omit<BookmarkT, "savedAt">;
  className?: string;
  withLabel?: boolean;
}) {
  const saved = useStore((s) => isBookmarked(s, item.kind, item.id));
  const toast = useToast();
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${item.title} from saved` : `Save ${item.title}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        actions.toggleBookmark(item);
        toast(saved ? "Removed from saved" : "Saved to your library");
      }}
      className={cn(
        withLabel
          ? buttonClass("secondary", "md")
          : "grid size-8 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg",
        className,
      )}
    >
      <Bookmark className={cn("size-4", saved && "fill-brand text-fg")} aria-hidden />
      {withLabel && (saved ? "Saved" : "Save")}
    </button>
  );
}

/**
 * Download goes through the browser so the file never has to be re-hosted.
 * The event is logged per user (PRD §27); with Supabase this becomes an
 * insert into `downloads` plus a signed, short-lived storage URL.
 */
export function DownloadButton({
  noteId,
  title,
  fileUrl,
  size = "sm",
  variant = "secondary",
}: {
  noteId: string;
  title: string;
  fileUrl?: string;
  size?: "sm" | "md";
  variant?: "secondary" | "primary" | "dark";
}) {
  const toast = useToast();
  if (!fileUrl)
    return (
      <Button size={size} variant="secondary" disabled title="File not uploaded yet">
        <Download className="size-4" aria-hidden /> Download
      </Button>
    );
  return (
    <a
      href={fileUrl}
      download
      onClick={() => {
        actions.recordDownload(noteId, title);
        toast("Download started");
      }}
      className={buttonClass(variant, size)}
    >
      <Download className="size-4" aria-hidden /> Download
    </a>
  );
}

export function ShareButton({ title, path }: { title: string; path: string }) {
  const toast = useToast();
  return (
    <Button
      variant="secondary"
      onClick={async () => {
        const url = window.location.origin + path;
        try {
          if (navigator.share) await navigator.share({ title, url });
          else {
            await navigator.clipboard.writeText(url);
            toast("Link copied");
          }
        } catch {
          /* user cancelled */
        }
      }}
    >
      <Share2 className="size-4" aria-hidden /> Share
    </Button>
  );
}

const REASONS = [
  "Wrong syllabus",
  "Incorrect answer",
  "Broken download",
  "Poor quality",
  "Duplicate",
  "Outdated",
  "Copyright issue",
  "Other",
];

/** "Report resource" dialog (PRD §35). */
export function ReportButton({
  kind,
  resourceId,
  title,
  compact = false,
}: {
  kind: ResourceKind;
  resourceId: string;
  title: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [reason, setReason] = useState(REASONS[0]);
  const [details, setDetails] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const d = ref.current;
    const onClose = () => setDone(false);
    d?.addEventListener("close", onClose);
    return () => d?.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg",
          !compact && "rounded-lg px-2 py-1.5 hover:bg-surface-2",
        )}
      >
        <Flag className="size-4" aria-hidden />
        {compact ? <span className="sr-only">Report</span> : "Report"}
      </button>
      <dialog
        ref={ref}
        aria-labelledby={`report-${resourceId}`}
        className="m-auto w-[min(440px,calc(100vw-2rem))] rounded-2xl border border-border bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/50"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 id={`report-${resourceId}`} className="text-lg font-semibold">
                Report resource
              </h2>
              <p className="text-sm text-muted">{title}</p>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="grid size-8 place-items-center rounded-lg hover:bg-surface-2"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
          {done ? (
            <div className="py-6 text-center">
              <p className="font-semibold">Thanks, we&apos;ve got it.</p>
              <p className="mt-1 text-sm text-muted">A moderator will review this resource.</p>
              <Button className="mt-5" variant="secondary" onClick={() => ref.current?.close()}>
                Close
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                actions.report({ kind, resourceId, title, reason, details: details.trim().slice(0, 1000) });
                setDetails("");
                setDone(true);
              }}
            >
              <fieldset>
                <legend className="mb-2 text-sm font-medium">What&apos;s wrong?</legend>
                <div className="grid grid-cols-2 gap-2">
                  {REASONS.map((r) => (
                    <label
                      key={r}
                      className={cn(
                        "cursor-pointer rounded-lg border px-3 py-2 text-sm transition-colors",
                        reason === r ? "border-fg bg-surface-2 font-medium" : "border-border hover:border-fg/30",
                      )}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={r}
                        checked={reason === r}
                        onChange={() => setReason(r)}
                        className="sr-only"
                      />
                      {r}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="mt-4 block text-sm font-medium" htmlFor={`details-${resourceId}`}>
                Details <span className="font-normal text-muted">(optional)</span>
              </label>
              <textarea
                id={`details-${resourceId}`}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                maxLength={1000}
                rows={3}
                className="mt-1.5 w-full rounded-lg border border-border bg-bg p-3 text-sm outline-none focus:border-fg/40"
                placeholder="e.g. Page 4 uses last year's syllabus"
              />
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="ghost" onClick={() => ref.current?.close()}>
                  Cancel
                </Button>
                <button type="submit" className={buttonClass("dark")}>
                  Submit report
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
