"use client";

import { useState } from "react";
import { Clock, Play } from "lucide-react";
import type { Video } from "@/lib/types";
import { subjectName, topicTitle } from "@/lib/content";
import { actions, useStore } from "@/lib/store";
import { Badge } from "./ui";
import { BookmarkButton } from "./resource-actions";
import { cn, formatNumber } from "@/lib/utils";

const levelTone = { Beginner: "green", Intermediate: "blue", Advanced: "purple" } as const;

/**
 * Lightweight embed: renders a static thumbnail and only loads the YouTube
 * iframe (~1 MB of JS) after the student presses play.
 */
export function VideoCard({ video, compact = false }: { video: Video; compact?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const watched = useStore((s) => s.watched.includes(video.id));
  const available = Boolean(video.youtubeId);

  return (
    <article id={video.id} className="card flex scroll-mt-24 flex-col overflow-hidden">
      <div className="relative aspect-video bg-[#0b0b0b] text-white">
        {playing && video.youtubeId ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            disabled={!available}
            onClick={() => {
              setPlaying(true);
              actions.markWatched(video.id);
            }}
            className="group absolute inset-0 flex flex-col justify-between p-4 text-left disabled:cursor-not-allowed"
            aria-label={available ? `Play ${video.title}` : `${video.title}: video coming soon`}
          >
            <span className="grid-pattern absolute inset-0 text-white opacity-60" aria-hidden />
            <span className="relative flex items-center gap-2 text-xs font-semibold text-white/70">
              <span className="size-1.5 rounded-full bg-brand" /> {video.channel}
            </span>
            <span className="relative line-clamp-2 max-w-[85%] text-lg font-bold leading-tight">{video.title}</span>
            <span
              className={cn(
                "absolute right-4 bottom-4 grid size-11 place-items-center rounded-full transition-transform",
                available ? "bg-brand text-brand-ink group-hover:scale-105" : "bg-white/10 text-white/60",
              )}
            >
              <Play className="size-5 translate-x-px fill-current" aria-hidden />
            </span>
            {!available && (
              <span className="absolute right-4 top-4 rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium">Coming soon</span>
            )}
          </button>
        )}
      </div>
      <div className={cn("flex flex-1 flex-col p-4", compact && "p-3")}>
        <div className="flex items-start gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold leading-snug">{video.title}</h3>
            <p className="mt-0.5 text-sm text-muted">
              {subjectName(video.subjectSlug)}
              {video.topicSlug && <> · {topicTitle(video.subjectSlug, video.topicSlug)}</>}
            </p>
          </div>
          <BookmarkButton
            item={{
              kind: "video",
              id: video.id,
              title: video.title,
              href: `/videos?subject=${video.subjectSlug}#${video.id}`,
              subtitle: subjectName(video.subjectSlug),
            }}
            className="-mr-1 shrink-0"
          />
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden /> {video.duration}
          </span>
          <Badge tone={levelTone[video.level]}>{video.level}</Badge>
          {watched && <Badge tone="green">Watched</Badge>}
          <span className="ml-auto">{formatNumber(video.views)} views</span>
        </div>
      </div>
    </article>
  );
}
