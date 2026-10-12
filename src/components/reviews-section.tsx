"use client";

import { useState, useMemo } from "react";
import { Star, BadgeCheck, Dices, LayoutGrid, Repeat } from "lucide-react";
import { REVIEWS, REVIEW_SUMMARY, type ReviewItem } from "@/lib/data/reviews";

export function ReviewsSection() {
  const [viewMode, setViewMode] = useState<"grid" | "rolling">("grid");
  const [rollSeed, setRollSeed] = useState<number>(0);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Deterministically shuffle reviews and subtle tilts when user rolls layout
  const randomizedReviews = useMemo(() => {
    const shuffled = [...REVIEWS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const pseudoRand = Math.sin(rollSeed * 7919 + i * 43) * 10000;
      const j = Math.floor((pseudoRand - Math.floor(pseudoRand)) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const subtleTilts = [
      "-rotate-[0.6deg]",
      "rotate-[0.5deg]",
      "-rotate-[0.4deg]",
      "rotate-[0.6deg]",
      "-rotate-[0.3deg]",
    ];
    const marqueeWidths = [
      "w-[340px] md:w-[380px]",
      "w-[350px] md:w-[390px]",
      "w-[340px] md:w-[380px]",
    ];

    return shuffled.map((item, index) => ({
      ...item,
      tilt: subtleTilts[(index + rollSeed) % subtleTilts.length],
      width: marqueeWidths[(index + rollSeed) % marqueeWidths.length],
    }));
  }, [rollSeed]);

  // For the rolling marquee view: duplicate seamless sets
  const marqueeSet = useMemo(() => {
    return [...randomizedReviews, ...randomizedReviews, ...randomizedReviews];
  }, [randomizedReviews]);

  const handleRollClick = () => {
    setIsRolling(true);
    setRollSeed((prev) => prev + 1);
    setTimeout(() => setIsRolling(false), 450);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-t border-border/50">
      <div className="container-page">
        {/* Header: Clean, balanced, minimal yet expressive */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-border/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-muted tracking-wide uppercase">
              <span>Student Reviews</span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-fg">
                <span className="flex items-center text-amber-400">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                </span>
                <span className="font-bold">{REVIEW_SUMMARY.average.toFixed(1)} / 5</span>
                <span className="text-muted font-normal lowercase">({REVIEW_SUMMARY.count} verified reviews)</span>
              </span>
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
              Prepared here. Cleared there.
            </h2>
            <p className="mt-1 text-sm text-muted">
              What students preparing for the IIT Madras BS Qualifier are saying.
            </p>
          </div>

          {/* Minimal Controls: View Mode & Roll Button */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-lg border border-border/70 bg-surface p-1 text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-surface-2 text-fg font-semibold shadow-2xs"
                    : "text-muted hover:text-fg"
                }`}
              >
                <LayoutGrid className="size-3" />
                <span>Cards ({REVIEW_SUMMARY.count})</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("rolling")}
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors cursor-pointer ${
                  viewMode === "rolling"
                    ? "bg-surface-2 text-fg font-semibold shadow-2xs"
                    : "text-muted hover:text-fg"
                }`}
              >
                <Repeat className="size-3" />
                <span>Rolling</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleRollClick}
              disabled={isRolling}
              title="Shuffle review layout and angles"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface px-3 py-1.5 text-xs font-medium text-muted hover:text-fg hover:border-fg/30 transition-all cursor-pointer disabled:opacity-50"
            >
              <Dices
                className={`size-3.5 transition-transform duration-500 ${
                  isRolling ? "rotate-180 text-brand-ink dark:text-brand" : ""
                }`}
                aria-hidden
              />
              <span>{isRolling ? "Rolling..." : "Roll layout"}</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Clean 3-Card Grid */}
        {viewMode === "grid" && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
            {randomizedReviews.map((rev) => (
              <MinimalReviewCard key={`grid-${rev.id}`} review={rev} layout="grid" />
            ))}
          </div>
        )}
      </div>

      {/* View Mode 2: Rolling Marquee Track */}
      {viewMode === "rolling" && (
        <div
          className="mt-8 overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, transparent 100%)",
          }}
        >
          <div className="flex overflow-hidden py-2">
            <div
              className="flex shrink-0 items-center gap-5"
              style={{
                animation: "marquee-left 36s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {marqueeSet.map((rev, i) => (
                <MinimalReviewCard
                  key={`marquee-${rev.id}-${i}`}
                  review={rev}
                  layout="rolling"
                />
              ))}
            </div>
            <div
              className="flex shrink-0 items-center gap-5"
              aria-hidden="true"
              style={{
                animation: "marquee-left 36s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {marqueeSet.map((rev, i) => (
                <MinimalReviewCard
                  key={`marquee-dup-${rev.id}-${i}`}
                  review={rev}
                  layout="rolling"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function MinimalReviewCard({
  review,
  layout = "grid",
}: {
  review: ReviewItem;
  layout?: "grid" | "rolling";
}) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const containerClasses =
    layout === "grid"
      ? `group relative rounded-2xl border border-border/80 bg-surface p-6 transition-all duration-300 hover:border-fg/30 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${review.tilt || ""}`
      : `group shrink-0 ${review.width || "w-[360px]"} ${review.tilt || ""} rounded-2xl border border-border/80 bg-surface p-5 transition-all duration-200 hover:border-fg/30 hover:shadow-md flex flex-col justify-between`;

  return (
    <div className={containerClasses}>
      <div>
        {/* Header: Author + Verified + Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`grid size-9 place-items-center rounded-xl text-xs font-bold border select-none ${review.avatarBg} ${review.avatarColor}`}
            >
              {initials}
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold tracking-tight text-fg">
                  {review.name}
                </span>
                <BadgeCheck className="size-4 text-blue-500 fill-blue-500/15 shrink-0" />
              </div>
              <p className="text-[11px] text-muted truncate max-w-[190px]">{review.role}</p>
            </div>
          </div>

          {/* Star Rating: 5 gold stars */}
          <div className="flex text-amber-400 shrink-0 gap-0.5 pt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`size-3.5 ${
                  i < review.rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-transparent text-border dark:text-muted/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Body content */}
        <p className="mt-4 text-[13.5px] leading-relaxed text-fg/90 font-normal">
          &ldquo;{review.content}&rdquo;
        </p>
      </div>

      {/* Clean footer line */}
      <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-xs text-muted">
        <span className="inline-flex items-center rounded-md bg-surface-2 px-2.5 py-0.5 font-medium text-fg/80 text-[11px]">
          {review.metric || review.courseTag}
        </span>
        <span className="text-[11px] font-medium text-muted/80">{review.date}</span>
      </div>
    </div>
  );
}
