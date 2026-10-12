"use client";

import { Printer } from "lucide-react";
import { buttonClass } from "./ui";
import { cn } from "@/lib/utils";

export function PrintSheetButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(buttonClass("secondary"), className)}
      title="Print this question sheet or save as PDF (Ctrl+P / Cmd+P)"
    >
      <Printer className="size-4" aria-hidden />
      <span>Print / Save as PDF</span>
    </button>
  );
}
