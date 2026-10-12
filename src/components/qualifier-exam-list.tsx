"use client";

import { useState } from "react";
import { Clock, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { MockAction } from "./qualifier-attempts";
import type { QualifierMock } from "@/lib/types";
import { cn } from "@/lib/utils";

export type QualifierCardItem = {
  mock: QualifierMock;
  answerKey: QualifierMock;
  isPyq: boolean;
  totalQ: number;
  totalM: number;
};

export function QualifierExamList({ items }: { items: QualifierCardItem[] }) {
  const [filter, setFilter] = useState<"all" | "pyq" | "mock">("all");

  const filtered = items.filter((item) => {
    if (filter === "pyq") return item.isPyq;
    if (filter === "mock") return !item.isPyq;
    return true;
  });

  const pyqCount = items.filter((i) => i.isPyq).length;
  const mockCount = items.filter((i) => !i.isPyq).length;

  return (
    <div className="space-y-3">
      {/* Sleek inline header with tabs */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm sm:text-[15px] font-bold text-fg tracking-tight">
          Full-Length Timed Papers
        </h2>
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-lg px-2.5 py-1 transition-colors cursor-pointer",
              filter === "all"
                ? "bg-fg text-bg font-semibold shadow-2xs"
                : "text-muted hover:text-fg hover:bg-surface-2"
            )}
          >
            All ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("pyq")}
            className={cn(
              "rounded-lg px-2.5 py-1 transition-colors cursor-pointer",
              filter === "pyq"
                ? "bg-fg text-bg font-semibold shadow-2xs"
                : "text-muted hover:text-fg hover:bg-surface-2"
            )}
          >
            Official ({pyqCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("mock")}
            className={cn(
              "rounded-lg px-2.5 py-1 transition-colors cursor-pointer",
              filter === "mock"
                ? "bg-fg text-bg font-semibold shadow-2xs"
                : "text-muted hover:text-fg hover:bg-surface-2"
            )}
          >
            Mocks ({mockCount})
          </button>
        </div>
      </div>

      {/* Unified Compact Paper Rows with breathing room */}
      <div className="divide-y divide-border rounded-xl border border-border bg-surface overflow-hidden shadow-2xs">
        {filtered.map(({ mock, answerKey, isPyq, totalQ, totalM }) => {
          const hours = Math.round(mock.durationMin / 60);
          // Strip redundant "Qualifier · " or "Qualifier " prefix since we are inside Qualifier Exam Pack
          const cleanTitle = mock.title.replace(/^Qualifier\s*·?\s*/i, "");

          return (
            <div
              key={mock.slug}
              className="flex items-center justify-between gap-3.5 px-4 py-3 sm:px-4.5 sm:py-3.5 transition-colors hover:bg-surface-2/30"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-fg truncate">
                    {cleanTitle}
                  </h3>
                  <span
                    className={cn(
                      "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold leading-none border",
                      isPyq
                        ? "bg-surface-2 text-fg border-border"
                        : "bg-surface-2/50 text-muted border-border/50"
                    )}
                  >
                    {isPyq ? "Official" : "Mock"}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 text-xs text-muted tabular-nums">
                  <span>{hours}h</span>
                  <span>·</span>
                  <span>{totalQ} Qs</span>
                  <span>·</span>
                  <span>{totalM} Marks</span>
                </div>
              </div>

              <div className="shrink-0">
                <MockAction slug={mock.slug} answerKey={answerKey} compact buttonVariant="secondary" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
