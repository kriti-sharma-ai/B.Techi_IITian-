import Link from "next/link";
import { blogCategories, blogCategoryHref } from "@/lib/blog/categories";
import { cn } from "@/lib/utils";

/** Category links in a bar that sticks under the navbar; `current` is the open category, or undefined for all posts. */
export function BlogCategoryNav({ current }: { current?: string }) {
  const links = [
    { href: "/blog", name: "All", on: !current },
    ...blogCategories.map((c) => ({
      href: blogCategoryHref(c.slug),
      name: c.name,
      on: c.slug === current,
    })),
  ];
  return (
    <div className="sticky top-16 z-20 border-b border-border bg-bg/90 backdrop-blur">
      <nav
        aria-label="Blog categories"
        className="container-page flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none]"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={l.on ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              l.on
                ? "border-fg bg-fg text-bg"
                : "border-border text-muted hover:border-fg/30 hover:text-fg",
            )}
          >
            {l.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
