import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function paginate<T>(items: T[], page: number, size: number) {
  const pages = Math.max(1, Math.ceil(items.length / size));
  const current = Math.min(Math.max(1, page), pages);
  return { items: items.slice((current - 1) * size, current * size), page: current, pages };
}

/** Server-rendered pagination that preserves the active filters. */
export function Pagination({
  page,
  pages,
  basePath,
  params,
}: {
  page: number;
  pages: number;
  basePath: string;
  params: Record<string, string | string[] | undefined>;
}) {
  if (pages <= 1) return null;
  const href = (n: number) => {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) if (typeof v === "string" && k !== "page") q.set(k, v);
    if (n > 1) q.set("page", String(n));
    const s = q.toString();
    return s ? `${basePath}?${s}` : basePath;
  };
  const cls = "grid size-9 place-items-center rounded-lg text-sm font-medium tabular-nums";
  return (
    <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-1">
      {page > 1 ? (
        <Link href={href(page - 1)} className={cn(cls, "hover:bg-surface-2")} aria-label="Previous page">
          <ChevronLeft className="size-4" />
        </Link>
      ) : (
        <span className={cn(cls, "opacity-40")} aria-hidden>
          <ChevronLeft className="size-4" />
        </span>
      )}
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <Link
          key={n}
          href={href(n)}
          aria-current={n === page ? "page" : undefined}
          className={cn(cls, n === page ? "bg-ink text-bg" : "hover:bg-surface-2")}
        >
          {n}
        </Link>
      ))}
      {page < pages ? (
        <Link href={href(page + 1)} className={cn(cls, "hover:bg-surface-2")} aria-label="Next page">
          <ChevronRight className="size-4" />
        </Link>
      ) : (
        <span className={cn(cls, "opacity-40")} aria-hidden>
          <ChevronRight className="size-4" />
        </span>
      )}
    </nav>
  );
}
