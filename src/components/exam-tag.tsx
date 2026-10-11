import { cn } from "@/lib/utils";

export type ExamTone = "blue" | "teal" | "green" | "purple";

/**
 * Classes for each exam's colour, written out in full so Tailwind finds them:
 * blue for Qualifier, teal for Quiz 1, green for Quiz 2, purple for End Term.
 */
export const EXAM_TONES: Record<ExamTone, { tag: string; tile: string; border: string; edge: string; dot: string }> = {
  blue: { tag: "bg-blue/10 text-blue ring-blue/30", tile: "bg-blue/10 text-blue", border: "border-blue/40", edge: "border-l-blue", dot: "bg-blue" },
  teal: { tag: "bg-teal/10 text-teal ring-teal/30", tile: "bg-teal/10 text-teal", border: "border-teal/40", edge: "border-l-teal", dot: "bg-teal" },
  green: { tag: "bg-green/10 text-green ring-green/30", tile: "bg-green/10 text-green", border: "border-green/40", edge: "border-l-green", dot: "bg-green" },
  purple: { tag: "bg-purple/10 text-purple ring-purple/30", tile: "bg-purple/10 text-purple", border: "border-purple/40", edge: "border-l-purple", dot: "bg-purple" },
};

/** The exam a practice set draws on, colour-coded the same way everywhere (see EXAM_TONES). */
export function ExamTag({ exam, size = "md", className }: { exam: { label: string; tone: ExamTone }; size?: "sm" | "md"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-md font-semibold ring-1 ring-inset",
        EXAM_TONES[exam.tone].tag,
        size === "md" ? "px-2 py-0.5 text-sm" : "px-1.5 py-0.5 text-xs",
        className,
      )}
    >
      {exam.label}
    </span>
  );
}
