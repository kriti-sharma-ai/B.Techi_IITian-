"use client";

import { Printer } from "lucide-react";
import { buttonClass } from "./ui";
import { printWithImages } from "@/lib/print";
import { cn } from "@/lib/utils";

export function PrintSheetButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => printWithImages()}
      className={cn(buttonClass("secondary", "sm"), className)}
      title="Print this question sheet or save as PDF (Ctrl+P / Cmd+P)"
    >
      <Printer className="size-3.5" aria-hidden />
      <span>Save PDF</span>
    </button>
  );
}
