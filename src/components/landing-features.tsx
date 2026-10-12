import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Landing "how it works": the three steps a student actually takes, each shown as a slice of the
 * real screen with real Maths I data: the week-wise cheat sheet, the most repeated question types, the exam picker.
 * The slices are pictures (aria-hidden); the text link under each is the real way in.
 */

function Screen({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      tabIndex={-1}
      aria-hidden
      className="card mt-8 flex flex-col overflow-hidden text-sm transition-[border-color,box-shadow] duration-200 hover:border-fg/25 hover:shadow-[0_12px_32px_-16px_rgb(0_0_0/0.2)]"
    >
      {children}
    </Link>
  );
}

function ScreenBar({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-between gap-3 px-5 pt-4 pb-1 text-xs text-muted">{children}</div>;
}

function Step({
  n,
  last,
  title,
  text,
  links,
  children,
}: {
  n: number;
  last?: boolean;
  title: string;
  text: string;
  links: [string, string][];
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {/* Numbered marker; on desktop a line runs on to the next step. */}
      <div className="flex items-center gap-3">
        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-fg/20 bg-surface text-xs font-semibold text-fg/70 tabular-nums">{n}</span>
        {!last && <span aria-hidden className="hidden h-px flex-1 bg-border md:block" />}
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
      {children}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold">
            {label}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}

function Row({ children, className }: { children: ReactNode; className?: string }) {
  return <li className={cn("flex items-center justify-between gap-3 px-5 py-3.5", className)}>{children}</li>;
}

// Real data: Maths I cheat sheet (lib/data/cheat-notes/maths-1.ts) and its most repeated
// question types (lib/data/pyq-topics/mathematics-for-data-science-1.ts).
const WEEKS: [number, string][] = [
  [1, "Relations"],
  [2, "Straight lines"],
  [3, "Quadratic functions"],
];

const REPEATED: [string, number][] = [
  ["Reflexive or transitive?", 6],
  ["Local max and min", 6],
  ["Limits at infinity", 5],
];

const SUBJECTS: [string, boolean][] = [
  ["Mathematics I", true],
  ["Statistics I", true],
  ["Computational Thinking", false],
];

export function LandingFeatures() {
  return (
    <div className="grid gap-16 md:grid-cols-3 md:gap-10 lg:gap-14">
      <Step n={1} title="Read week-wise" text="Short notes for every week of the course." links={[["Open cheat sheets", "/qualifier/notes"]]}>
        <Screen href="/qualifier/notes">
          <ScreenBar>Mathematics I</ScreenBar>
          <ul className="divide-y divide-border/60 pb-1">
            {WEEKS.map(([week, title]) => (
              <Row key={week}>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="shrink-0 font-mono text-xs text-muted">W{week}</span>
                  <span className="truncate font-medium">{title}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-red">
                  <Flame className="size-3" />
                  Every paper
                </span>
              </Row>
            ))}
          </ul>
        </Screen>
      </Step>

      <Step n={2} title="Practise most repeated & topic-wise" text="What IITM asks again and again, sorted by topic." links={[["See most repeated", "/practice?view=repeated"]]}>
        <Screen href="/practice?view=repeated">
          <ScreenBar>Mathematics I · most repeated</ScreenBar>
          <ul className="divide-y divide-border/60 pb-1">
            {REPEATED.map(([title, count]) => (
              <Row key={title}>
                <span className="truncate font-medium">{title}</span>
                <span className="shrink-0 font-bold tabular-nums">×{count}</span>
              </Row>
            ))}
          </ul>
        </Screen>
      </Step>

      <Step n={3} last title="Sit real PYQs" text="Real past papers on an exam-day screen." links={[["Open Exam Portal", "/exam"], ["Qualifier Pack", "/qualifier"]]}>
        <Screen href="/exam">
          <ScreenBar>End Term · 3 hr</ScreenBar>
          <ul className="divide-y divide-border/60 pb-1">
            {SUBJECTS.map(([name, on]) => (
              <Row key={name}>
                <span className={cn("truncate font-medium", !on && "text-muted")}>{name}</span>
                <span
                  className={cn(
                    "grid size-4 shrink-0 place-items-center rounded",
                    on ? "bg-fg text-bg" : "border border-border",
                  )}
                >
                  {on && <Check className="size-3" strokeWidth={3} />}
                </span>
              </Row>
            ))}
          </ul>
        </Screen>
      </Step>
    </div>
  );
}
