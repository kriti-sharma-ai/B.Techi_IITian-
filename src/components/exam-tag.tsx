import { cn } from "@/lib/utils";

export type ExamTone = "blue" | "purple";

const TONES: Record<ExamTone, string> = {
  blue: "bg-blue/10 text-blue ring-blue/30",
  purple: "bg-purple/10 text-purple ring-purple/30",
};

/** The exam a practice set draws on, colour-coded the same way everywhere: blue for Qualifier / Quiz 1, purple for End Term. */
export function ExamTag({ exam, size = "md", className }: { exam: { label: string; tone: ExamTone }; size?: "sm" | "md"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-md font-semibold ring-1 ring-inset",
        TONES[exam.tone],
        size === "md" ? "px-2 py-0.5 text-sm" : "px-1.5 py-0.5 text-xs",
        className,
      )}
    >
      {exam.label}
    </span>
  );
}
