"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLink, FileText, FileWarning, Lock } from "lucide-react";
import { isCmsFile, signedFileUrl } from "@/lib/files";
import { useHydrated, useStore } from "@/lib/store";
import type { Note } from "@/lib/types";
import { PdfViewer } from "./pdf-viewer";
import { DownloadButton } from "./resource-actions";
import { EmptyState, buttonClass } from "./ui";

type Props = { note: Pick<Note, "id" | "title" | "fileUrl" | "fileType" | "externalUrl" | "signInRequired"> };

/** The reader on a note page: PDF viewer, image, or a download / link card for other formats. */
export function NoteFile({ note }: Props) {
  const hydrated = useHydrated();
  const signedIn = useStore((s) => !!s.user);
  const cms = !!note.fileUrl && isCmsFile(note.fileUrl);
  const locked = !!note.signInRequired && !signedIn;
  const [signed, setSigned] = useState<{ for: string; url: string } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!hydrated || !cms || locked || !note.fileUrl) return;
    let cancelled = false;
    signedFileUrl(note.fileUrl).then(
      (url) => !cancelled && setSigned({ for: note.fileUrl!, url }),
      (e: Error) => !cancelled && setError(e.message),
    );
    return () => {
      cancelled = true;
    };
  }, [hydrated, cms, locked, note.fileUrl]);

  if (!note.fileUrl && note.externalUrl)
    return (
      <EmptyState
        icon={<ExternalLink className="size-6" />}
        title="These notes are hosted elsewhere."
        description={new URL(note.externalUrl).hostname}
        action={
          <a href={note.externalUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
            Open notes <ExternalLink className="size-4" aria-hidden />
          </a>
        }
      />
    );

  if (!note.fileUrl)
    return (
      <EmptyState
        icon={<FileWarning className="size-6" />}
        title="This resource is temporarily unavailable."
        description="The file is being reviewed or re-uploaded. Check back soon, or request it to bump its priority."
        action={
          <Link href="/contribute" className={buttonClass("secondary")}>
            Request this resource →
          </Link>
        }
      />
    );

  if (!hydrated) return <div className="skeleton h-[70vh] rounded-2xl" />;

  if (locked)
    return (
      <EmptyState
        icon={<Lock className="size-6" />}
        title="Log in to read these notes."
        description="They're available free to every signed-in student."
        action={
          <Link href={`/login?next=/notes/${note.id}`} className={buttonClass("dark")}>
            Log in
          </Link>
        }
      />
    );

  if (error) return <EmptyState icon={<FileWarning className="size-6" />} title="Couldn't open the file." description={error} />;

  const url = cms ? (signed?.for === note.fileUrl ? signed.url : null) : note.fileUrl;
  if (!url) return <div className="skeleton h-[70vh] rounded-2xl" />;

  if (note.fileType?.startsWith("image/"))
    return (
      <div className="card overflow-hidden p-2">
        {/* eslint-disable-next-line @next/next/no-img-element -- short-lived signed URL, not optimisable */}
        <img src={url} alt={note.title} className="mx-auto max-h-[80vh] w-auto rounded-lg" />
      </div>
    );

  if (note.fileType && note.fileType !== "application/pdf")
    return (
      <EmptyState
        icon={<FileText className="size-6" />}
        title="Word document"
        description="This file can't be previewed in the browser. Download it to read."
        action={<DownloadButton noteId={note.id} title={note.title} fileUrl={note.fileUrl} size="md" variant="primary" />}
      />
    );

  return <PdfViewer url={url} title={note.title} />;
}
