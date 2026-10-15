"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { MessageSquareText, PenLine, Star, X } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { REVIEWS } from "@/lib/data/reviews";
import { useHydrated, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { buttonClass } from "./ui";

/** A row of table `reviews` (supabase/0005_reviews.sql). */
export type Review = { id: string; user_id: string; name: string; course_tag: string | null; rating: number; content: string; created_at: string };

const MIN = 20;
const MAX = 600;

/** Native modal dialog: Escape and the close button shut it; clicking the backdrop does too. */
function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label={title}
      className="m-auto max-h-[85svh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border border-border bg-bg p-0 text-fg shadow-2xl backdrop:bg-black/50"
    >
      <div className="flex max-h-[85svh] flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 md:px-6">
          <h2 className="text-lg font-bold tracking-tight">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="grid size-8 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg">
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 md:px-6">{children}</div>
      </div>
    </dialog>
  );
}

/* ───────────── Write ───────────── */

function ReviewForm({ onDone }: { onDone: () => void }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [existing, setExisting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [courseTag, setCourseTag] = useState("");
  const [content, setContent] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Load the student's own review, if any, so they edit it instead of adding a second one.
  useEffect(() => {
    let live = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      const id = data.user?.id ?? null;
      if (!live) return;
      setUserId(id);
      if (!id) return;
      const { data: row } = await supabase.from("reviews").select("*").eq("user_id", id).maybeSingle<Review>();
      if (!live || !row) return;
      setExisting(true);
      setRating(row.rating);
      setCourseTag(row.course_tag ?? "");
      setContent(row.content);
    })();
    return () => {
      live = false;
    };
  }, []);

  const save = async (e: FormEvent) => {
    e.preventDefault();
    if (!userId) return setError("Your session has ended. Please log in again.");
    if (!rating) return setError("Pick a star rating.");
    if (content.trim().length < MIN) return setError(`Write at least ${MIN} characters.`);
    setBusy(true);
    setError("");
    const { error } = await supabase
      .from("reviews")
      .upsert({ user_id: userId, rating, course_tag: courseTag.trim() || null, content: content.trim() }, { onConflict: "user_id" });
    setBusy(false);
    if (error) return setError("Could not save your review. Please try again.");
    onDone();
  };

  const remove = async () => {
    if (!userId || !confirm("Delete your review?")) return;
    setBusy(true);
    const { error } = await supabase.from("reviews").delete().eq("user_id", userId);
    setBusy(false);
    if (error) return setError("Could not delete your review. Please try again.");
    onDone();
  };

  const shown = hover || rating;
  return (
    <form onSubmit={save} className="space-y-5">
      <div>
        <p className="text-sm font-medium">Your rating</p>
        <div className="mt-2 flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setRating(i)}
              onMouseEnter={() => setHover(i)}
              aria-label={`${i} star${i > 1 ? "s" : ""}`}
              aria-pressed={rating === i}
              className="rounded-md p-1 transition-transform hover:scale-110"
            >
              <Star className={cn("size-7", i <= shown ? "fill-brand text-brand" : "text-border")} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="text-sm font-medium">
          Course <span className="font-normal text-muted">(optional)</span>
        </span>
        <input
          value={courseTag}
          onChange={(e) => setCourseTag(e.target.value)}
          maxLength={60}
          placeholder="e.g. Maths 1 & CT"
          className="mt-2 h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm outline-none placeholder:text-muted focus:border-fg/30"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Your review</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={MAX}
          rows={5}
          placeholder="What helped you most on BTechi?"
          className="mt-2 w-full resize-y rounded-lg border border-border bg-surface px-3 py-2.5 text-sm leading-relaxed outline-none placeholder:text-muted focus:border-fg/30"
        />
        <span className="mt-1 block text-right text-xs text-muted tabular-nums">
          {content.length}/{MAX}
        </span>
      </label>

      {error && <p className="text-sm text-red">{error}</p>}

      <div className="flex items-center justify-between gap-3">
        {existing ? (
          <button type="button" onClick={remove} disabled={busy} className="text-sm text-muted hover:text-red disabled:opacity-50">
            Delete my review
          </button>
        ) : (
          <span className="text-xs text-muted">Shown with your profile name.</span>
        )}
        <button type="submit" disabled={busy} className={buttonClass("primary")}>
          {busy ? "Saving…" : existing ? "Update review" : "Post review"}
        </button>
      </div>
    </form>
  );
}

/* ───────────── Buttons ───────────── */

/** "Write a review" for signed-in students (opens the form); a login link for everyone else. */
export function WriteReviewButton({ next, className }: { next: string; className?: string }) {
  const router = useRouter();
  const hydrated = useHydrated();
  const signedIn = useStore((s) => Boolean(s.user));
  const [open, setOpen] = useState(false);

  if (!(hydrated && signedIn)) {
    return (
      <Link href={`/login?next=${encodeURIComponent(next)}`} className={className ?? buttonClass("ghost", "sm")}>
        <PenLine className="size-3.5" aria-hidden />
        Log in to write a review
      </Link>
    );
  }
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className ?? buttonClass("ghost", "sm")}>
        <PenLine className="size-3.5" aria-hidden />
        Write a review
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Write a review">
        {open && (
          <ReviewForm
            onDone={() => {
              setOpen(false);
              router.push("/reviews");
              router.refresh();
            }}
          />
        )}
      </Modal>
    </>
  );
}

/** The row under the home page reviews. */
export function ReviewActions() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("id", { count: "exact", head: true })
      .then(({ count }) => setCount(count ?? 0));
  }, []);

  const total = count === null ? null : count + REVIEWS.length;

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <Link href="/reviews" className={buttonClass("secondary", "sm")}>
        <MessageSquareText className="size-3.5" aria-hidden />
        Read all reviews{total !== null && <span className="text-muted tabular-nums">({total})</span>}
      </Link>
      <WriteReviewButton next="/#reviews" />
    </div>
  );
}

/** Floating "Write a review" in the corner; hides while the element with id `hideWhenVisible` is on screen. */
export function FloatingWriteReview({ next, hideWhenVisible }: { next: string; hideWhenVisible: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(hideWhenVisible);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, [hideWhenVisible]);

  return (
    <div
      aria-hidden={hidden}
      inert={hidden}
      className={cn(
        "fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-30 transition-all duration-300 md:right-6 md:bottom-6",
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <WriteReviewButton
        next={next}
        className={buttonClass("primary", "md", "rounded-full shadow-[0_8px_24px_-6px_rgb(0_0_0/0.35)] ring-1 ring-black/10")}
      />
    </div>
  );
}
