import type { QualifierQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Inline figure syntax used by the PYQ data: ![alt](/pyq/<slug>/<file>#WxH). */
const FIGURE = /!\[([^\]]*)\]\(([^)#\s]+)(?:#(\d+)x(\d+))?\)/g;

/** Text with inline figures; figures render as blocks scaled down to fit. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(FIGURE)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <img
        key={m.index}
        src={m[2]}
        alt={m[1] || "Figure"}
        width={m[3] ? Number(m[3]) : undefined}
        height={m[4] ? Number(m[4]) : undefined}
        loading="lazy"
        className="my-2 block h-auto max-w-full rounded-md bg-white"
      />,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Question text with line breaks kept and the `emphasis` phrase underlined, as on the paper. */
export function QuestionPrompt({ q, className }: { q: QualifierQuestion; className?: string }) {
  const at = q.emphasis ? q.prompt.indexOf(q.emphasis) : -1;
  return (
    <p className={cn("whitespace-pre-line", className)}>
      {at < 0 ? (
        <RichText text={q.prompt} />
      ) : (
        <>
          <RichText text={q.prompt.slice(0, at)} />
          <u className="decoration-2 underline-offset-4">{q.emphasis}</u>
          <RichText text={q.prompt.slice(at + q.emphasis!.length)} />
        </>
      )}
    </p>
  );
}

/** Reading passage or dialogue shared by a block of questions. One paragraph per line. */
export function QuestionPassage({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {text.split("\n").map((p, i) => (
        <p key={i}>
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}
