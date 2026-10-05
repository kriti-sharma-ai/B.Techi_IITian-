"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Filter = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  /** Params cleared when this one changes (e.g. program → subject, unit). */
  resets?: string[];
};

/** URL-driven filters: shareable, crawlable, and filtered on the server. */
export function FilterBar({ filters, className }: { filters: Filter[]; className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();

  const set = (f: Filter, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(f.name, value);
    else next.delete(f.name);
    f.resets?.forEach((r) => next.delete(r));
    next.delete("page");
    startTransition(() => router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false }));
  };

  const active = filters.filter((f) => params.get(f.name));

  return (
    <div className={cn("flex flex-wrap items-center gap-2 transition-opacity", pending && "opacity-60", className)}>
      <span className="mr-1 hidden items-center gap-1.5 text-sm font-medium text-muted sm:inline-flex">
        <SlidersHorizontal className="size-4" aria-hidden /> Filter
      </span>
      {filters.map((f) => {
        const value = params.get(f.name) ?? "";
        const disabled = f.options.length === 0;
        return (
          <label key={f.name} className="relative">
            <span className="sr-only">{f.label}</span>
            <select
              value={value}
              disabled={disabled}
              onChange={(e) => set(f, e.target.value)}
              className={cn(
                "h-9 appearance-none rounded-lg border bg-surface pr-8 pl-3 text-sm outline-none transition-colors focus:border-fg/40 disabled:opacity-50",
                value ? "border-fg font-medium" : "border-border text-muted",
              )}
            >
              <option value="">{f.label}: All</option>
              {f.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted" aria-hidden />
          </label>
        );
      })}
      {active.length > 0 && (
        <button
          type="button"
          onClick={() => startTransition(() => router.replace(pathname, { scroll: false }))}
          className="inline-flex h-9 items-center gap-1 rounded-lg px-2.5 text-sm font-medium text-muted hover:bg-surface-2 hover:text-fg"
        >
          <X className="size-4" aria-hidden /> Clear
        </button>
      )}
    </div>
  );
}
