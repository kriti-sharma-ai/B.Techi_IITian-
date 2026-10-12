"use client";

import { useState } from "react";
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

type Filter = "all" | "pyq" | "mock";

/** The full papers, with an Official / Mocks filter in the section title. */
export function QualifierExamList({ items, title }: { items: QualifierCardItem[]; title: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = items.filter((i) => filter === "all" || (filter === "pyq") === i.isPyq);
  const options: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "All", count: items.length },
    { value: "pyq", label: "Official", count: items.filter((i) => i.isPyq).length },
    { value: "mock", label: "Mocks", count: items.filter((i) => !i.isPyq).length },
  ];

  const tabs = (
    <div className="flex items-center gap-1 text-xs font-medium">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setFilter(o.value)}
          aria-pressed={filter === o.value}
          className={cn(
            "inline-flex h-7 cursor-pointer items-center rounded-lg px-2.5 transition-colors",
            filter === o.value ? "bg-fg font-semibold text-bg" : "text-muted hover:bg-surface-2 hover:text-fg",
          )}
        >
          {o.label} <span className="ml-1 tabular-nums opacity-70">{o.count}</span>
        </button>
      ))}
    </div>
  );

  return (
    <section aria-labelledby="exams-heading" className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <h2 id="exams-heading" className="text-base font-bold tracking-tight text-fg">
          {title}
        </h2>
        {tabs}
      </div>
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {filtered.map(({ mock, answerKey, isPyq, totalQ, totalM }) => (
          <div key={mock.slug} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {/* Every paper here is a qualifier, so the prefix is noise. */}
                <h3 className="truncate font-semibold text-fg">{mock.title.replace(/^Qualifier\s*·?\s*/i, "")}</h3>
                {!isPyq && <span className="shrink-0 text-xs text-muted">Mock</span>}
              </div>
              <p className="mt-1 text-xs text-muted tabular-nums">
                {Math.round(mock.durationMin / 60)}h · {totalQ} Qs · {totalM} marks
              </p>
            </div>
            <MockAction slug={mock.slug} answerKey={answerKey} compact buttonVariant="secondary" />
          </div>
        ))}
      </div>
    </section>
  );
}
