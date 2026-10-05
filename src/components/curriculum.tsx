import Link from "next/link";
import { FileText, PenLine, PlayCircle, ScrollText } from "lucide-react";
import type { Subject } from "@/lib/types";
import { topicResources } from "@/lib/content";
import { TopicStatus } from "./progress";
import { cn } from "@/lib/utils";

function Chip({ on, icon: Icon, label, tone }: { on: boolean; icon: typeof FileText; label: string; tone: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1 text-xs", on ? tone : "text-muted/50 line-through decoration-1")}
      title={on ? label : `No ${label.toLowerCase()} yet`}
    >
      <Icon className="size-3.5" aria-hidden />
      {label}
    </span>
  );
}

/**
 * Curriculum view (PRD §10, §12): units → numbered topics, each showing
 * which resource types exist and the student's completion state.
 */
export function Curriculum({ subject, collapsed = false }: { subject: Subject; collapsed?: boolean }) {
  return (
    <div className="space-y-4">
      {subject.units.map((unit) => (
        <section key={unit.id} className="card overflow-hidden" aria-labelledby={unit.id}>
          <header className="flex items-baseline justify-between gap-4 border-b border-border px-5 py-4">
            <div>
              <p className="eyebrow">Unit {unit.number}</p>
              <h3 id={unit.id} className="mt-0.5 font-bold">
                {unit.title}
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-3 text-sm">
              <span className="text-muted">{unit.topics.length} topics</span>
              <Link
                href={`/practice/session?subject=${subject.slug}&unit=${unit.id}`}
                className="hidden font-medium text-purple hover:underline sm:inline"
              >
                Unit practice
              </Link>
            </div>
          </header>
          <ol>
            {unit.topics.map((topic, i) => {
              const r = topicResources(subject.slug, topic.slug);
              return (
                <li key={topic.slug} className="border-b border-border last:border-0">
                  <Link
                    href={`/subjects/${subject.slug}/${topic.slug}`}
                    className="group flex items-start gap-4 px-5 py-3.5 transition-colors hover:bg-surface-2/60"
                  >
                    <span className="w-6 pt-0.5 text-sm font-semibold text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium group-hover:underline">{topic.title}</p>
                      {!collapsed && <p className="mt-0.5 text-sm text-muted">{topic.summary}</p>}
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                        <Chip on={r.notes > 0} icon={FileText} label="Notes" tone="text-teal" />
                        <Chip on={r.videos > 0} icon={PlayCircle} label="Video" tone="text-blue" />
                        <Chip on={r.questions > 0} icon={PenLine} label="Practice" tone="text-purple" />
                        <Chip on={r.pyqs > 0} icon={ScrollText} label="PYQs" tone="text-green" />
                      </div>
                    </div>
                    <span className="hidden pt-0.5 text-xs text-muted sm:block">{topic.minutes} min</span>
                    <TopicStatus subjectSlug={subject.slug} topicSlug={topic.slug} />
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
