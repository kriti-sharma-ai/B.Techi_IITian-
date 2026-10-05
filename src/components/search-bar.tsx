"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchBar({
  defaultValue = "",
  size = "lg",
  autoFocus = false,
  className,
  onSearch,
}: {
  defaultValue?: string;
  size?: "md" | "lg";
  autoFocus?: boolean;
  className?: string;
  onSearch?: (q: string) => void;
}) {
  const router = useRouter();
  const [q, setQ] = useState(defaultValue);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (onSearch) onSearch(v);
    else router.push(v ? `/search?q=${encodeURIComponent(v)}` : "/search");
  };
  return (
    <form role="search" onSubmit={submit} className={cn("relative", className)}>
      <Search
        className={cn("pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted", size === "lg" ? "left-5 size-5" : "left-4 size-4")}
        aria-hidden
      />
      <input
        type="search"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onSearch?.(e.target.value);
        }}
        autoFocus={autoFocus}
        placeholder="Search subjects, notes, books, videos or questions…"
        aria-label="Search subjects, notes, books, videos or questions"
        className={cn(
          "w-full rounded-2xl border border-border bg-surface pr-28 text-fg shadow-[0_1px_2px_rgb(0_0_0/0.04)] outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-fg/40 focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--brand)_35%,transparent)]",
          size === "lg" ? "h-14 pl-13 text-base" : "h-11 pl-11 text-sm",
        )}
      />
      <button
        type="submit"
        className={cn(
          "absolute top-1/2 right-2 -translate-y-1/2 rounded-xl bg-ink font-semibold text-bg hover:opacity-90",
          size === "lg" ? "h-10 px-5 text-sm" : "h-8 px-3.5 text-xs",
        )}
      >
        Search
      </button>
    </form>
  );
}
