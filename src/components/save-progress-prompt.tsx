"use client";

import Link from "next/link";
import { CloudUpload } from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { buttonClass } from "./ui";

/**
 * Shown to guests after a test. Signing up is optional: progress made as a
 * guest is merged into the new account (lib/supabase/sync.ts).
 */
export function SaveProgressPrompt({ className }: { className?: string }) {
  const hydrated = useHydrated();
  const user = useStore((s) => s.user);
  if (!hydrated || user) return null;

  return (
    <div className={cn("card flex flex-wrap items-center gap-4 p-5", className)}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-brand-ink">
        <CloudUpload className="size-5" aria-hidden />
      </span>
      <div className="min-w-0 flex-1 text-left">
        <p className="font-semibold">Keep this report?</p>
        <p className="text-sm text-muted">
          It&apos;s saved in this browser only. Create a free account to keep your reports and progress on every device.
        </p>
      </div>
      <div className="flex gap-2">
        <Link href="/login" className={buttonClass("ghost", "sm")}>
          Log in
        </Link>
        <Link href="/signup" className={buttonClass("primary", "sm")}>
          Sign up free
        </Link>
      </div>
    </div>
  );
}
