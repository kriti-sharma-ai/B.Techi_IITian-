import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, BadgeCheck, ChevronRight, Clock, AlertTriangle } from "lucide-react";
import { cn, SITE_URL } from "@/lib/utils";
import type { Quality } from "@/lib/types";

/* ───────────── Buttons ───────────── */

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  // Primary is the only place yellow is used as a button fill.
  primary: "bg-brand text-brand-ink hover:brightness-95 font-semibold",
  dark: "bg-ink text-bg hover:opacity-90 font-semibold",
  secondary: "bg-surface text-fg border border-border hover:border-fg/30 font-medium",
  ghost: "text-fg hover:bg-surface-2 font-medium",
};
const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm gap-1.5 rounded-lg",
  md: "h-10 px-4 text-sm gap-2 rounded-xl",
  lg: "h-12 px-6 text-[15px] gap-2 rounded-xl",
};

export const buttonClass = (variant: Variant = "primary", size: Size = "md", extra?: string) =>
  cn(
    "inline-flex items-center justify-center whitespace-nowrap transition-[filter,opacity,background-color,border-color] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    extra,
  );

export function Button({
  variant,
  size,
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: Size }) {
  return <button type="button" className={buttonClass(variant, size, className)} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}

/* ───────────── Badges ───────────── */

type Tone = "neutral" | "blue" | "green" | "purple" | "teal" | "amber" | "red" | "brand";
const tones: Record<Tone, string> = {
  neutral: "bg-surface-2 text-muted",
  blue: "bg-blue/10 text-blue",
  green: "bg-green/10 text-green",
  purple: "bg-purple/10 text-purple",
  teal: "bg-teal/10 text-teal",
  amber: "bg-amber/10 text-amber",
  red: "bg-red/10 text-red",
  brand: "bg-brand text-brand-ink",
};

export function Badge({ tone = "neutral", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium", tones[tone], className)}>
      {children}
    </span>
  );
}

export function QualityBadge({ quality }: { quality: Quality }) {
  if (quality === "verified")
    return (
      <Badge tone="green">
        <BadgeCheck className="size-3.5" aria-hidden /> Verified
      </Badge>
    );
  if (quality === "outdated")
    return (
      <Badge tone="amber">
        <AlertTriangle className="size-3.5" aria-hidden /> Outdated
      </Badge>
    );
  return (
    <Badge tone="neutral">
      <Clock className="size-3.5" aria-hidden /> Needs review
    </Badge>
  );
}

/* ───────────── Progress ───────────── */

export function ProgressBar({
  value,
  className,
  tone = "brand",
  label,
}: {
  value: number;
  className?: string;
  tone?: "brand" | "green" | "blue" | "purple";
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const fill = { brand: "bg-brand", green: "bg-green", blue: "bg-blue", purple: "bg-purple" }[tone];
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? "Progress"}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-surface-2", className)}
    >
      <div className={cn("h-full rounded-full transition-[width] duration-500 ease-out", fill)} style={{ width: `${pct}%` }} />
    </div>
  );
}

/* ───────────── Layout helpers ───────────── */

export function SectionHeader({
  title,
  description,
  href,
  linkLabel = "View all",
  eyebrow,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  eyebrow?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow mb-1.5">{eyebrow}</p>}
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">{title}</h2>
        {description && <p className="mt-1 text-sm text-muted">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-muted hover:text-fg sm:inline-flex">
          {linkLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      )}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  eyebrow,
  children,
  crumbs,
}: {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  children?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <header className="border-b border-border bg-surface">
      <div className="container-page py-8 md:py-10">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-muted">{description}</p>}
        {children && <div className="mt-5">{children}</div>}
      </div>
    </header>
  );
}

/* ───────────── Breadcrumbs (PRD §74) ───────────── */

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className = "mb-4" }: { items: Crumb[]; className?: string }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3.5 opacity-60" aria-hidden />}
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-fg">
                {c.label}
              </Link>
            ) : (
              <span aria-current={i === all.length - 1 ? "page" : undefined} className={i === all.length - 1 ? "text-fg" : ""}>
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}

/* ───────────── Empty state (PRD §75) ───────────── */

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card flex flex-col items-center px-6 py-12 text-center", className)}>
      {icon && <div className="mb-3 grid size-12 place-items-center rounded-full bg-surface-2 text-muted">{icon}</div>}
      <p className="font-semibold">{title}</p>
      {description && <p className="mt-1 max-w-sm text-sm text-muted">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

/* ───────────── Link tabs (subject sub-navigation) ───────────── */

export function LinkTabs({ tabs, active }: { tabs: { id: string; label: string; href: string; count?: number }[]; active: string }) {
  return (
    <nav aria-label="Sections" className="-mb-px flex gap-1 overflow-x-auto [scrollbar-width:none]">
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <Link
            key={t.id}
            href={t.href}
            scroll={false}
            aria-current={on ? "page" : undefined}
            className={cn(
              "relative flex shrink-0 items-center gap-1.5 px-3 py-3 text-sm font-medium transition-colors",
              on ? "text-fg" : "text-muted hover:text-fg",
            )}
          >
            {t.label}
            {!!t.count && <span className="text-xs text-muted">{t.count}</span>}
            {on && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />}
          </Link>
        );
      })}
    </nav>
  );
}

export function Stat({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div>
      <p className="text-2xl font-bold tracking-tight tabular-nums">{value}</p>
      <p className="text-sm text-muted">{label}</p>
      {hint && <p className="mt-0.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}
