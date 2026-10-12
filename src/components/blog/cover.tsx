// Generated cover art for blog posts: category motif + accent glow + the post's cover label.
// Deterministic per slug, so every post gets a distinct but on-brand image with no files to manage.

import { Bot, BriefcaseBusiness, ChartColumn, GraduationCap, NotebookPen, type LucideIcon } from "lucide-react";
import type { Accent } from "@/lib/types";
import { getBlogCategory } from "@/lib/blog/categories";
import { cn } from "@/lib/utils";

export const blogCategoryIcons: Record<string, LucideIcon> = {
  "iitm-bs": GraduationCap,
  "exam-prep": NotebookPen,
  "data-skills": ChartColumn,
  ai: Bot,
  careers: BriefcaseBusiness,
};

const accentVar: Record<Accent, string> = {
  yellow: "var(--brand)",
  blue: "var(--blue)",
  purple: "var(--purple)",
  green: "var(--green)",
  teal: "var(--teal)",
};

/** FNV-1a: a stable small hash so a slug always draws the same cover. */
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Seeded pseudo-random numbers in [0, 1). */
function rng(seed: number) {
  let x = seed || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return ((x >>> 0) % 10000) / 10000;
  };
}

/** A small app-style window: rounded panel, title bar with three dots and a title. */
function Window({ x, y, w, h, title, color }: { x: number; y: number; w: number; h: number; title: string; color: string }) {
  return (
    <g>
      <rect x={x + 10} y={y + 14} width={w} height={h} rx={26} fill="currentColor" opacity={0.08} />
      <rect x={x} y={y} width={w} height={h} rx={26} fill="var(--surface)" stroke="currentColor" strokeOpacity={0.14} strokeWidth={3} />
      <path d={`M${x} ${y + 64} h${w}`} stroke="currentColor" strokeOpacity={0.1} strokeWidth={3} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={x + 34 + i * 26} cy={y + 32} r={8} fill={i === 0 ? color : "currentColor"} opacity={i === 0 ? 1 : 0.18} />
      ))}
      <text x={x + 120} y={y + 41} fontSize={24} fontWeight={700} fill="currentColor" opacity={0.75}>
        {title}
      </text>
    </g>
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

/** One detailed illustration per category (IITM has three), varied by the seed. Drawn in a 1200 × 630 box. */
function Motif({ category, seed, color, motif }: { category: string; seed: number; color: string; motif?: string }) {
  const r = rng(seed);
  switch (category) {
    case "data-skills": {
      // A mini dashboard: KPI chips, a labelled bar chart with a trend line, and a query.
      const bars = Array.from({ length: 6 }, (_, i) => 70 + i * 26 + r() * 50);
      const growth = 8 + Math.floor(r() * 20);
      return (
        <g>
          <Window x={610} y={60} w={540} h={500} title="Revenue by month" color={color} />
          <rect x={640} y={150} width={220} height={84} rx={16} fill={color} opacity={0.16} />
          <text x={660} y={186} fontSize={22} fill="currentColor" opacity={0.6}>Revenue</text>
          <text x={660} y={220} fontSize={32} fontWeight={800} fill="currentColor">₹4.8 Cr</text>
          <rect x={880} y={150} width={240} height={84} rx={16} fill="currentColor" opacity={0.06} />
          <text x={900} y={186} fontSize={22} fill="currentColor" opacity={0.6}>vs last year</text>
          <text x={900} y={220} fontSize={32} fontWeight={800} fill={color}>+{growth}%</text>
          {bars.map((h, i) => (
            <g key={i}>
              <rect x={660 + i * 76} y={450 - h} width={50} height={h} rx={8} fill={color} opacity={0.3 + i * 0.12} />
              <text x={685 + i * 76} y={482} fontSize={18} textAnchor="middle" fill="currentColor" opacity={0.5}>{MONTHS[i]}</text>
            </g>
          ))}
          <polyline points={bars.map((h, i) => `${685 + i * 76},${432 - h}`).join(" ")} fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={0.6} />
          <rect x={640} y={502} width={480} height={36} rx={10} fill="currentColor" opacity={0.07} />
          <text x={656} y={527} fontSize={19} fontFamily="ui-monospace, monospace" fill="currentColor" opacity={0.7}>SELECT month, SUM(revenue) …</text>
        </g>
      );
    }
    case "ai": {
      // An agent run: the request, tool steps with status, and a small network.
      const steps = [
        ["run_sql", "orders by city"],
        ["search", "delivery delays"],
        ["analyse", "compare segments"],
        ["write", "one-page summary"],
      ];
      const done = 2 + Math.floor(r() * 2);
      return (
        <g>
          <Window x={610} y={60} w={540} h={500} title="Agent run" color={color} />
          <rect x={700} y={146} width={420} height={60} rx={20} fill={color} opacity={0.9} />
          <text x={724} y={184} fontSize={22} fontWeight={700} fill="var(--brand-ink)">Why did repeat orders drop?</text>
          {steps.map(([tool, what], i) => (
            <g key={tool} transform={`translate(640 ${236 + i * 70})`}>
              <circle cx={22} cy={22} r={20} fill={i < done ? color : "none"} stroke="currentColor" strokeOpacity={i < done ? 0 : 0.35} strokeWidth={3} />
              {i < done && <path d="M12 23 l7 7 l13 -15" fill="none" stroke="var(--brand-ink)" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />}
              <text x={60} y={30} fontSize={22} fontFamily="ui-monospace, monospace" fontWeight={700} fill="currentColor" opacity={0.8}>{tool}</text>
              <text x={200} y={30} fontSize={21} fill="currentColor" opacity={0.55}>{what}</text>
            </g>
          ))}
          {agentDots(r, color)}
        </g>
      );
    }
    case "exam-prep": {
      // An answer sheet: numbered questions, filled bubbles and a score badge.
      const picks = Array.from({ length: 6 }, () => Math.floor(r() * 4));
      return (
        <g>
          <Window x={610} y={60} w={540} h={500} title="Mock test · Section A" color={color} />
          {picks.map((p, i) => (
            <g key={i} transform={`translate(650 ${110 + i * 62 + 40})`}>
              <text x={0} y={22} fontSize={22} fontWeight={700} fill="currentColor" opacity={0.6}>Q{i + 1}</text>
              {["A", "B", "C", "D"].map((l, j) => (
                <g key={l}>
                  <circle cx={80 + j * 58} cy={14} r={19} fill={j === p ? color : "none"} stroke="currentColor" strokeOpacity={j === p ? 0 : 0.3} strokeWidth={3} />
                  <text x={80 + j * 58} y={21} fontSize={18} fontWeight={700} textAnchor="middle" fill={j === p ? "var(--brand-ink)" : "currentColor"} opacity={j === p ? 1 : 0.45}>{l}</text>
                </g>
              ))}
            </g>
          ))}
          <circle cx={1050} cy={250} r={64} fill={color} opacity={0.18} />
          <text x={1050} y={250} fontSize={38} fontWeight={800} textAnchor="middle" fill="currentColor">{70 + Math.floor(r() * 25)}%</text>
          <text x={1050} y={282} fontSize={19} textAnchor="middle" fill="currentColor" opacity={0.55}>score</text>
        </g>
      );
    }
    case "careers": {
      // A path of skills ending in an offer.
      const stops = ["Excel", "SQL", "BI", "Python", "Offer"];
      return (
        <g>
          <Window x={610} y={60} w={540} h={500} title="Your roadmap" color={color} />
          {stops.map((label, i) => {
            const x = 680 + i * 104;
            const y = 470 - i * 70;
            const last = i === stops.length - 1;
            return (
              <g key={label}>
                <rect x={x - 34} y={y} width={68} height={500 - y} rx={10} fill={color} opacity={0.14 + i * 0.12} />
                <circle cx={x} cy={y - 26} r={last ? 30 : 20} fill={last ? color : "var(--surface)"} stroke="currentColor" strokeOpacity={last ? 0 : 0.4} strokeWidth={3} />
                <text x={x} y={y - (last ? 70 : 58)} fontSize={21} fontWeight={700} textAnchor="middle" fill="currentColor" opacity={0.8}>{label}</text>
              </g>
            );
          })}
          <path d={`M ${stops.map((_, i) => `${680 + i * 104} ${444 - i * 70}`).join(" L ")}`} fill="none" stroke="currentColor" strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" opacity={0.5} />
        </g>
      );
    }
    default: {
      // iitm-bs: one of three illustrations, set per post with `motif:` or picked by the seed.
      const variant = motif ? ({ levels: 0, calendar: 1, compare: 2 } as Record<string, number>)[motif] ?? seed % 3 : seed % 3;
      if (variant === 1) {
        // A deadline calendar with the key day circled.
        const hot = 20 + Math.floor(r() * 8);
        return (
          <g>
            <Window x={610} y={60} w={540} h={500} title="Key dates" color={color} />
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <text key={i} x={668 + i * 70} y={150} fontSize={19} fontWeight={700} textAnchor="middle" fill="currentColor" opacity={0.45}>{d}</text>
            ))}
            {Array.from({ length: 28 }, (_, i) => {
              const day = i + 1;
              const on = day === hot;
              return (
                <g key={i}>
                  <rect x={643 + (i % 7) * 70} y={168 + Math.floor(i / 7) * 82} width={52} height={60} rx={12} fill={on ? color : "currentColor"} opacity={on ? 1 : 0.06} />
                  <text x={669 + (i % 7) * 70} y={206 + Math.floor(i / 7) * 82} fontSize={21} fontWeight={on ? 800 : 500} textAnchor="middle" fill={on ? "var(--brand-ink)" : "currentColor"} opacity={on ? 1 : 0.55}>{day}</text>
                </g>
              );
            })}
          </g>
        );
      }
      if (variant === 2) {
        // Two overlapping programmes, with the shared part labelled.
        return (
          <g>
            <circle cx={790} cy={330} r={200} fill={color} opacity={0.4} />
            <circle cx={990} cy={330} r={200} fill="currentColor" opacity={0.12} />
            <text x={720} y={330} fontSize={30} fontWeight={800} textAnchor="middle" fill="currentColor">Mgmt</text>
            <text x={720} y={364} fontSize={22} textAnchor="middle" fill="currentColor" opacity={0.6}>business</text>
            <text x={1070} y={330} fontSize={30} fontWeight={800} textAnchor="middle" fill="currentColor">DS</text>
            <text x={1070} y={364} fontSize={22} textAnchor="middle" fill="currentColor" opacity={0.6}>code & ML</text>
            <rect x={830} y={300} width={120} height={56} rx={14} fill="var(--surface)" />
            <text x={890} y={336} fontSize={20} fontWeight={700} textAnchor="middle" fill="currentColor">shared</text>
          </g>
        );
      }
      // Three labelled levels: Foundation → Diploma → Degree.
      const levels: [string, string][] = [
        ["Foundation", "32 credits"],
        ["Diploma", "60 credits"],
        ["BS Degree", "50 credits"],
      ];
      return (
        <g>
          {levels.map(([name, credits], i) => {
            const width = 480 - i * 80 + r() * 20;
            const x = 1130 - width;
            const y = 430 - i * 125;
            return (
              <g key={name}>
                <rect x={x} y={y} width={width} height={100} rx={20} fill={color} opacity={0.35 + i * 0.3} />
                <text x={x + 28} y={y + 46} fontSize={30} fontWeight={800} fill={i === 2 ? "var(--brand-ink)" : "currentColor"}>{name}</text>
                <text x={x + 28} y={y + 78} fontSize={21} fill={i === 2 ? "var(--brand-ink)" : "currentColor"} opacity={0.75}>{credits}</text>
              </g>
            );
          })}
          <text x={1130} y={565} fontSize={22} fontWeight={700} textAnchor="end" fill="currentColor" opacity={0.6}>142 credits · IIT Madras BS</text>
        </g>
      );
    }
  }
}

/** A few faint connected dots behind the agent window, for depth. */
function agentDots(r: () => number, color: string) {
  const nodes = Array.from({ length: 7 }, () => ({ x: 520 + r() * 120, y: 80 + r() * 460 }));
  return (
    <g opacity={0.6}>
      {nodes.slice(1).map((n, i) => (
        <line key={i} x1={nodes[i].x} y1={nodes[i].y} x2={n.x} y2={n.y} stroke="currentColor" strokeWidth={2} opacity={0.2} />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 3 === 0 ? 12 : 7} fill={i % 3 === 0 ? color : "currentColor"} opacity={i % 3 === 0 ? 0.8 : 0.3} />
      ))}
    </g>
  );
}

export function BlogCover({
  slug,
  category,
  label,
  className,
  size = "md",
  image,
  motif,
  highlights = [],
}: {
  slug: string;
  /** A real cover image (front matter `image:`). When set, it replaces the generated art. */
  image?: string;
  category: string;
  label?: string;
  /** IITM cover style: "levels", "calendar" or "compare". Defaults to a pick from the slug. */
  motif?: string;
  /** Two or three short facts shown as chips under the headline (front matter `highlights:`). */
  highlights?: string[];
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const cat = getBlogCategory(category);
  const accent = cat?.accent ?? "yellow";
  const color = accentVar[accent];
  const seed = hash(slug);
  const Icon = blogCategoryIcons[category] ?? NotebookPen;
  const glowX = 55 + (seed % 30);

  if (image)
    return (
      // eslint-disable-next-line @next/next/no-img-element -- local cover files of unknown size
      <img src={image} alt="" loading="lazy" decoding="async" className={cn("aspect-[1200/630] w-full bg-surface-2 object-cover", className)} />
    );

  return (
    <div className={cn("relative isolate aspect-[1200/630] overflow-hidden bg-surface-2 text-fg", className)} aria-hidden>
      <span className="grid-pattern absolute inset-0 -z-10 opacity-50" />
      <span
        className="absolute -z-10 size-[90%] rounded-full"
        style={{
          left: `${glowX - 45}%`,
          top: "-30%",
          background: `radial-gradient(closest-side, color-mix(in srgb, ${color} 38%, transparent), transparent)`,
        }}
      />
      <svg viewBox="0 0 1200 630" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
        <Motif category={category} seed={seed} color={color} motif={motif} />
      </svg>
      <span
        className={cn(
          "absolute grid place-items-center rounded-xl border border-border bg-surface shadow-sm",
          size === "sm" ? "bottom-2.5 left-2.5 size-9" : size === "lg" ? "bottom-5 left-5 size-16 rounded-2xl" : "bottom-3.5 left-3.5 size-11",
        )}
        style={{ color: accent === "yellow" ? "var(--fg)" : color }}
      >
        <Icon className={size === "sm" ? "size-4" : size === "lg" ? "size-8" : "size-5"} />
      </span>
      {label && size !== "sm" && (
        <div className={cn("absolute max-w-[48%]", size === "lg" ? "top-6 left-6 sm:top-8 sm:left-8" : "top-4 left-4")}>
          <p
            className={cn(
              "font-extrabold leading-[1.08] tracking-tight text-balance [text-shadow:0_1px_12px_var(--surface-2)]",
              size === "lg" ? "text-2xl sm:text-4xl" : "text-lg sm:text-xl",
            )}
          >
            {label}
          </p>
          {highlights.length > 0 && (
            <ul className={cn("flex flex-wrap gap-1.5", size === "lg" ? "mt-3 sm:mt-5 sm:gap-2" : "mt-2.5 max-sm:hidden")}>
              {highlights.slice(0, size === "lg" ? 3 : 2).map((h) => (
                <li
                  key={h}
                  className={cn(
                    "rounded-full border border-border bg-surface/85 font-semibold backdrop-blur-sm",
                    size === "lg" ? "px-2.5 py-1 text-xs sm:px-3 sm:text-sm" : "px-2 py-0.5 text-[10px]",
                  )}
                >
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
