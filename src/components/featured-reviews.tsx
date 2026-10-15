"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { ReviewEntry } from "@/lib/reviews";
import { cn } from "@/lib/utils";
import { Author } from "./review-author";

/** The big review at the top of /reviews; arrows step through every review at the same size. */
export function FeaturedReviews({ reviews }: { reviews: ReviewEntry[] }) {
  const [i, setI] = useState(0);
  const n = reviews.length;
  const r = reviews[i];
  const go = (step: number) => setI((v) => (v + step + n) % n);

  return (
    <figure className="mt-10 md:mt-12" aria-roledescription="carousel" aria-label="Featured reviews">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={cn("size-4", s <= r.rating ? "fill-brand text-brand" : "text-border")} aria-hidden />
          ))}
        </span>
        {n > 1 && (
          <div className="flex items-center gap-2">
            <span className="mr-1 text-sm text-muted tabular-nums" aria-live="polite">
              {i + 1} / {n}
            </span>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-fg/30"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid size-10 place-items-center rounded-full bg-fg text-bg transition-opacity hover:opacity-85"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        )}
      </div>
      {/* key restarts the fade on every change */}
      <div key={r.key} className="animate-fade-up">
        <blockquote className="mt-4 w-full text-[clamp(1.375rem,2.8vw,2.25rem)] leading-snug font-medium tracking-tight text-pretty">
          &ldquo;{r.content}&rdquo;
        </blockquote>
        <figcaption className="mt-5">
          <Author review={r} featured />
        </figcaption>
      </div>
    </figure>
  );
}
