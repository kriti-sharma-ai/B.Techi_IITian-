import Link from "next/link";
import { Clock } from "lucide-react";
import { getBlogCategory } from "@/lib/blog/categories";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { BlogCover } from "./cover";

/** The fields a card needs, so pages can pass trimmed post objects to it. */
export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  category: string;
  cover: string;
  image?: string;
  motif?: string;
  highlights?: string[];
  updated: string;
  minutes: number;
};

export const toSummary = ({ slug, title, description, category, cover, image, motif, highlights, updated, minutes }: PostSummary): PostSummary => ({
  slug,
  title,
  description,
  category,
  cover,
  image,
  motif,
  highlights,
  updated,
  minutes,
});

export function PostCard({ post, large = false, className }: { post: PostSummary; large?: boolean; className?: string }) {
  const cat = getBlogCategory(post.category);
  return (
    <article className={cn("card card-hover group relative flex flex-col overflow-hidden", className)}>
      <BlogCover slug={post.slug} category={post.category} label={post.cover} image={post.image} motif={post.motif} highlights={post.highlights} size={large ? "lg" : "md"} />
      <div className={cn("flex flex-1 flex-col", large ? "p-5 sm:p-7" : "p-4 sm:p-5")}>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">{cat?.name}</p>
        <h3 className={cn("font-bold leading-snug tracking-tight text-balance", large ? "text-xl sm:text-2xl" : "text-[1.05rem]")}>
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className={cn("mt-2 text-sm text-muted", large ? "line-clamp-3 sm:text-base" : "line-clamp-2")}>{post.description}</p>
        <p className="mt-auto flex items-center gap-3 pt-4 text-xs text-muted">
          <span>Updated {formatDate(post.updated)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden /> {post.minutes} min read
          </span>
        </p>
      </div>
    </article>
  );
}

/** Compact row for sidebars and "read next" lists. */
export function PostRow({ post }: { post: PostSummary }) {
  return (
    <article className="group relative flex items-center gap-3">
      <BlogCover slug={post.slug} category={post.category} image={post.image} motif={post.motif} size="sm" className="w-28 shrink-0 rounded-xl sm:w-32" />
      <div className="min-w-0">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug group-hover:underline">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs text-muted">{post.minutes} min read</p>
      </div>
    </article>
  );
}
