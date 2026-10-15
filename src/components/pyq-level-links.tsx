import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Level = { slug: string; label: string; href: string };

// Level links prefetch the whole page (not just up to loading.tsx), so in production a switch skips the skeleton.
// One underline for every link here: hover shows it faint, the open level shows it in brand.
const link = "font-medium underline-offset-[6px] decoration-2 hover:underline";

/**
 * The bar under the header on /practice and /pyqs/[level], so moving between them doesn't shift:
 * "Browse papers: Foundation Diploma Degree All levels", plus anything passed as children on the right.
 * `back` puts a way back (e.g. to Practice) at the start, since the level pages have no breadcrumb on screen.
 */
export function PyqLevelBar({
  levels,
  active,
  allHref = "/pyqs",
  sticky = false,
  back,
  children,
}: {
  levels: Level[];
  active?: string;
  allHref?: string;
  sticky?: boolean;
  back?: { href: string; label: string };
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("border-b border-border", sticky && "sticky top-16 z-20 bg-bg/90 backdrop-blur")}>
      <div className="container-page flex min-h-14 flex-wrap items-center justify-between gap-x-6">
        <nav aria-label="Browse papers by level" className="flex items-center gap-x-4 overflow-x-auto py-2 text-sm whitespace-nowrap [scrollbar-width:none]">
          {back && (
            <>
              <Link href={back.href} className={cn(link, "inline-flex items-center gap-1 text-muted hover:text-fg hover:decoration-fg/25")}>
                <ArrowLeft className="size-3.5" aria-hidden /> {back.label}
              </Link>
              <span className="h-4 w-px shrink-0 bg-border" aria-hidden />
            </>
          )}
          <span className="hidden text-muted sm:inline">Browse papers:</span>
          {levels.map((l) => {
            const on = l.slug === active;
            return (
              <Link key={l.slug} href={l.href} prefetch aria-current={on ? "page" : undefined} className={cn(link, on ? "underline decoration-brand" : "hover:decoration-fg/25")}>
                {l.label}
              </Link>
            );
          })}
          <Link href={allHref} className={cn(link, "inline-flex items-center gap-1 text-muted hover:text-fg hover:decoration-fg/25")}>
            All levels <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
