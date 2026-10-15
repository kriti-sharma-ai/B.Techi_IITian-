import { cn } from "@/lib/utils";

/** Initials, name and course line under a review. Shared with the all-reviews list. */
export function Author({ review, featured }: { review: { name: string; courseTag?: string | null }; featured?: boolean }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold",
          featured ? "bg-brand text-brand-ink" : "bg-surface-2 text-fg",
        )}
      >
        {initials}
      </span>
      <div className="text-sm leading-tight">
        <p className="font-semibold">{review.name}</p>
        {review.courseTag && <p className="mt-0.5 text-muted">{review.courseTag}</p>}
      </div>
    </div>
  );
}
