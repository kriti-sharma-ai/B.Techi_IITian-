import Link from "next/link";
import { Code, Play, Star } from "lucide-react";
import type { Accent, SkillCourse } from "@/lib/types";
import { getSkillCategory, skillStats } from "@/lib/content";
import { accentStyles, cn, formatNumber } from "@/lib/utils";
import { BookmarkButton } from "./resource-actions";
import { skillIcons } from "./skill-icons";

export { skillIcons };

/** Accent glow behind each thumbnail; spelled out so Tailwind can see the classes. */
const glow: Record<Accent, string> = {
  yellow: "bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--brand)_45%,transparent),transparent)]",
  blue: "bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--blue)_35%,transparent),transparent)]",
  purple: "bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--purple)_35%,transparent),transparent)]",
  green: "bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--green)_35%,transparent),transparent)]",
  teal: "bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--teal)_35%,transparent),transparent)]",
};

const badgeStyles: Record<NonNullable<SkillCourse["badge"]>, { label: string; className: string }> = {
  bestseller: { label: "Bestseller", className: "bg-brand text-brand-ink" },
  popular: { label: "Popular", className: "bg-purple/15 text-purple" },
  new: { label: "New", className: "bg-green/15 text-green" },
};

export function SkillBadge({ badge, className }: { badge: SkillCourse["badge"]; className?: string }) {
  if (!badge) return null;
  const b = badgeStyles[badge];
  return <span className={cn("inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-bold", b.className, className)}>{b.label}</span>;
}

export const formatHours = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h}h${m ? ` ${m}m` : ""}` : `${m}m`;
};

/* ───────────── Rating ───────────── */

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("relative inline-flex", className)} aria-hidden>
      <span className="flex text-border">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-3.5 fill-current" />
        ))}
      </span>
      <span className="absolute inset-0 flex overflow-hidden text-amber" style={{ width: `${(rating / 5) * 100}%` }}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-3.5 shrink-0 fill-current" />
        ))}
      </span>
    </span>
  );
}

export function Rating({ course, className }: { course: SkillCourse; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm", className)}>
      <span className="font-bold text-amber">{course.rating.toFixed(1)}</span>
      <Stars rating={course.rating} />
      <span className="text-xs text-muted">({formatNumber(course.ratings)})</span>
      <span className="sr-only">Rated {course.rating} out of 5</span>
    </span>
  );
}

/* ───────────── Thumbnail ───────────── */

export function SkillThumb({ course, className, large = false }: { course: SkillCourse; className?: string; large?: boolean }) {
  const Icon = skillIcons[course.icon] ?? Code;
  const a = accentStyles[course.accent];
  return (
    <div className={cn("relative isolate aspect-video overflow-hidden bg-surface-2", className)}>
      <span className="grid-pattern absolute inset-0 -z-10 text-fg opacity-50" aria-hidden />
      <span className={cn("absolute -top-1/3 -right-1/4 -z-10 size-[110%] rounded-full", glow[course.accent])} aria-hidden />
      <span
        className={cn(
          "absolute top-3 left-3 max-w-[80%] truncate rounded-md border border-border bg-surface/80 px-2 py-1 font-mono text-fg/80 backdrop-blur-sm",
          large ? "text-xs" : "text-[10px]",
        )}
        aria-hidden
      >
        {course.snippet}
      </span>
      <span
        className={cn(
          "absolute bottom-3 left-3 grid place-items-center rounded-xl border border-border bg-surface shadow-sm",
          large ? "size-16" : "size-11",
          a.text,
        )}
        aria-hidden
      >
        <Icon className={large ? "size-8" : "size-5"} />
      </span>
    </div>
  );
}

/* ───────────── Card ───────────── */

/** Catalogue card: the whole card is a link, with the save button layered above it. */
export function SkillCard({ course, priority = false }: { course: SkillCourse; priority?: boolean }) {
  const s = skillStats(course);
  const category = getSkillCategory(course.category);
  return (
    <article className="card card-hover group relative flex flex-col overflow-hidden">
      <div className="relative">
        <SkillThumb course={course} />
        {/* Preview affordance on hover */}
        <span className="absolute inset-0 grid place-items-center bg-fg/0 opacity-0 transition-all duration-200 group-hover:bg-fg/5 group-hover:opacity-100" aria-hidden>
          <span className="grid size-11 place-items-center rounded-full bg-brand text-brand-ink shadow-lg transition-transform duration-200 group-hover:scale-105">
            <Play className="size-5 translate-x-px fill-current" />
          </span>
        </span>
        <div className="absolute top-2.5 right-2.5 z-10">
          <BookmarkButton
            item={{ kind: "skill", id: course.slug, title: course.title, href: `/skills/${course.slug}`, subtitle: category?.name }}
            className="bg-surface/90 backdrop-blur-sm"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-[11px] font-semibold tracking-wide text-muted uppercase">{category?.name}</p>
        <h3 className="line-clamp-2 leading-snug font-bold tracking-tight">
          <Link href={`/skills/${course.slug}`} prefetch={priority || undefined} className="after:absolute after:inset-0 focus-visible:outline-none">
            {course.title}
          </Link>
        </h3>
        <p className="mt-1 truncate text-xs text-muted">{course.instructor.name}</p>
        <Rating course={course} className="mt-1.5" />
        <p className="mt-1 text-xs text-muted">
          {formatHours(s.minutes)} · {s.lectures} lectures · {course.level}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-3">
          <span className="text-base font-extrabold">Free</span>
          <SkillBadge badge={course.badge} />
          <span className="ml-auto text-xs text-muted">{formatNumber(course.learners)} learners</span>
        </div>
      </div>
    </article>
  );
}
