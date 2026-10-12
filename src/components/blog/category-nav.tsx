import Link from "next/link";
import { blogCategories, blogCategoryHref } from "@/lib/blog/categories";
import { cn } from "@/lib/utils";

/** Category links under the blog headers; `current` is the open category, or undefined for all posts. */
export function BlogCategoryNav({ current }: { current?: string }) {
  const links = [{ href: "/blog", name: "All", on: !current }, ...blogCategories.map((c) => ({ href: blogCategoryHref(c.slug), name: c.name, on: c.slug === current }))];
  return (
    <nav aria-label="Blog categories" className="flex flex-wrap gap-2">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={l.on ? "page" : undefined}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
            l.on ? "border-fg bg-fg text-bg" : "border-border text-muted hover:border-fg/30 hover:text-fg",
          )}
        >
          {l.name}
        </Link>
      ))}
    </nav>
  );
}
