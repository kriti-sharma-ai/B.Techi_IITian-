"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  q: string;
  a: string;
};

export function HomeFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-6 divide-y divide-border rounded-2xl border border-border/80 bg-surface/60 overflow-hidden shadow-xs">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className={cn(
              "faq-rubber-item group transition-colors duration-300",
              isOpen ? "bg-surface/95 dark:bg-surface-2/90" : "hover:bg-surface/40 dark:hover:bg-surface-2/30"
            )}
          >
            <button
              type="button"
              id={`faq-question-${index}`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => toggle(index)}
              className="faq-rubber-trigger flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold outline-hidden focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <h3 className="text-[15px] sm:text-base font-semibold text-fg tracking-tight leading-snug">
                {item.q}
              </h3>
              <div
                className={cn(
                  "faq-rubber-chevron flex size-7 shrink-0 items-center justify-center rounded-full transition-all",
                  isOpen
                    ? "rotate-180 bg-brand text-brand-ink scale-105 shadow-xs"
                    : "rotate-0 bg-surface-2 text-muted group-hover:text-fg"
                )}
                aria-hidden
              >
                <ChevronDown className="size-4 shrink-0 stroke-[2.5]" />
              </div>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={cn(
                "faq-rubber-collapse",
                isOpen ? "faq-rubber-open" : "faq-rubber-closed"
              )}
            >
              <div className="faq-rubber-content">
                <div
                  className={cn(
                    "faq-rubber-inner px-5 pb-5 pt-1",
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1.5 pointer-events-none"
                  )}
                >
                  <p className="text-[15px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
