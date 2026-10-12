import { cn } from "@/lib/utils";

/*
 * Three-set Venn: the three steps on the landing page, with BTechi in the shared middle.
 * Each circle is a link: hover or focus one and it tints and shows "open →" while the other two fade.
 * The middle is the true A ∩ B ∩ C region, cut out with nested clip paths, and lets hovers pass through.
 * Yellow is set inline: the light-mode `.fill-brand` override would turn it black.
 */
const R = 88;

const SETS = [
  { cx: 118, cy: 112, href: "/qualifier/notes", name: "Week-wise notes", lines: ["Week-wise", "notes"], label: { x: 78, y: 84 }, open: 120 },
  { cx: 202, cy: 112, href: "/practice?view=repeated", name: "Most repeated PYQs", lines: ["Most", "repeated", "PYQs"], label: { x: 246, y: 76 }, open: 126 },
  { cx: 160, cy: 186, href: "/exam", name: "Real exam portal", lines: ["Real exam", "portal"], label: { x: 160, y: 236 }, open: 266 },
];

export function Venn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 300"
      aria-labelledby="venn-title"
      className={cn(
        "[&:has(a:focus-visible)_a:not(:focus-visible)]:opacity-40 [&:has(a:hover)_a:not(:hover)]:opacity-40",
        className,
      )}
    >
      <title id="venn-title">Week-wise notes, most repeated PYQs and the real exam portal overlap in BTechi</title>
      <defs>
        <clipPath id="venn-a">
          <circle cx={SETS[0].cx} cy={SETS[0].cy} r={R} />
        </clipPath>
        <clipPath id="venn-b">
          <circle cx={SETS[1].cx} cy={SETS[1].cy} r={R} />
        </clipPath>
      </defs>

      {SETS.map((s) => (
        <a key={s.href} href={s.href} aria-label={s.name} className="group cursor-pointer outline-none transition-opacity duration-200">
          <circle
            cx={s.cx}
            cy={s.cy}
            r={R}
            strokeWidth={1.25}
            className="fill-fg/[0.03] stroke-fg/70 transition-[fill,stroke] duration-200 group-hover:fill-brand/20 group-hover:stroke-fg group-focus-visible:fill-brand/20 group-focus-visible:stroke-fg"
          />
          <text textAnchor="middle" className="fill-fg text-[11.5px] font-semibold">
            {s.lines.map((line, i) => (
              <tspan key={line} x={s.label.x} y={i === 0 ? s.label.y : undefined} dy={i === 0 ? undefined : 15}>
                {line}
              </tspan>
            ))}
          </text>
          <text
            x={s.label.x}
            y={s.open}
            textAnchor="middle"
            className="fill-muted text-[10px] font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            open →
          </text>
        </a>
      ))}

      <g clipPath="url(#venn-a)" className="pointer-events-none">
        <g clipPath="url(#venn-b)">
          <circle cx={SETS[2].cx} cy={SETS[2].cy} r={R} style={{ fill: "var(--brand)" }} />
        </g>
      </g>
      <text x={160} y={144} textAnchor="middle" className="pointer-events-none text-[13px] font-extrabold" style={{ fill: "#0b0b0b" }}>
        BTechi
      </text>
    </svg>
  );
}
