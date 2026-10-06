"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();
  const dark = hydrated && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative grid size-9 place-items-center overflow-hidden rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          "absolute size-[18px] transition-all duration-400",
          dark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0",
        )}
      />
      <Moon
        className={cn(
          "absolute size-[18px] transition-all duration-400",
          dark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100",
        )}
      />
    </button>
  );
}
