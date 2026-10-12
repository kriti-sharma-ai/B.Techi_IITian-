"use client";

import { useState } from "react";
import { BookOpen, FileClock } from "lucide-react";
import { cn } from "@/lib/utils";

export type PracticeSidebarTab = "browse" | "mock";

export function PracticeSidebarNav({
  activeTab,
  onTabChange,
  hasExamOption = true,
}: {
  activeTab: PracticeSidebarTab;
  onTabChange: (tab: PracticeSidebarTab) => void;
  hasExamOption?: boolean;
}) {
  return (
    <div className="flex rounded-xl border border-border bg-surface p-1 shadow-xs">
      <button
        type="button"
        onClick={() => onTabChange("browse")}
        className={cn(
          "flex flex-1 items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-semibold transition-all",
          activeTab === "browse"
            ? "bg-ink text-bg shadow-xs"
            : "text-muted hover:text-fg hover:bg-surface-2/60",
        )}
      >
        <BookOpen className="size-3.5" aria-hidden />
        <span>Practise Paper</span>
      </button>

      {hasExamOption && (
        <button
          type="button"
          onClick={() => onTabChange("mock")}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-semibold transition-all",
            activeTab === "mock"
              ? "bg-ink text-bg shadow-xs"
              : "text-muted hover:text-fg hover:bg-surface-2/60",
          )}
        >
          <FileClock className="size-3.5" aria-hidden />
          <span>Timed Exam</span>
        </button>
      )}
    </div>
  );
}
