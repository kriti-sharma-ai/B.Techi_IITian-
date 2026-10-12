// Colour diagrams for the cheat notes, referenced by id from `{ kind: "diagram" }` blocks.
// Inline SVG and HTML drawn with the theme colour tokens, so they follow light, dark and print.

import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ───────────── Primitives ───────────── */

type Tone = "blue" | "green" | "purple" | "teal" | "red" | "amber";

// Literal class names so Tailwind generates them.
const TONE: Record<Tone, { soft: string; solid: string; stroke: string; text: string; chip: string; ink: string; dot: string }> = {
  blue: { soft: "fill-blue/15", solid: "fill-blue", stroke: "stroke-blue", text: "fill-blue", chip: "border-blue/35 bg-blue/10", ink: "text-blue", dot: "bg-blue" },
  green: { soft: "fill-green/15", solid: "fill-green", stroke: "stroke-green", text: "fill-green", chip: "border-green/35 bg-green/10", ink: "text-green", dot: "bg-green" },
  purple: { soft: "fill-purple/15", solid: "fill-purple", stroke: "stroke-purple", text: "fill-purple", chip: "border-purple/35 bg-purple/10", ink: "text-purple", dot: "bg-purple" },
  teal: { soft: "fill-teal/15", solid: "fill-teal", stroke: "stroke-teal", text: "fill-teal", chip: "border-teal/35 bg-teal/10", ink: "text-teal", dot: "bg-teal" },
  red: { soft: "fill-red/15", solid: "fill-red", stroke: "stroke-red", text: "fill-red", chip: "border-red/35 bg-red/10", ink: "text-red", dot: "bg-red" },
  amber: { soft: "fill-amber/15", solid: "fill-amber", stroke: "stroke-amber", text: "fill-amber", chip: "border-amber/35 bg-amber/10", ink: "text-amber", dot: "bg-amber" },
};

type Pt = [number, number];

const r1 = (v: number) => Math.round(v * 10) / 10;
const pts = (p: Pt[]) => p.map(([x, y]) => `${r1(x)},${r1(y)}`).join(" ");

/** Linear map from a data interval to an SVG interval. */
const scale = (d0: number, d1: number, s0: number, s1: number) => (v: number) => s0 + ((v - d0) / (d1 - d0)) * (s1 - s0);

/** Sampled points of y = f(x), kept to the first unbroken run inside [lo, hi]. */
function sample(f: (x: number) => number, x0: number, x1: number, X: (v: number) => number, Y: (v: number) => number, lo: number, hi: number, steps = 120) {
  const out: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    const y = f(x);
    if (y >= lo && y <= hi) out.push([X(x), Y(y)]);
    else if (out.length) break;
  }
  return out;
}

const pathOf = (p: Pt[]) => p.map(([x, y], i) => `${i ? "L" : "M"}${r1(x)},${r1(y)}`).join("");

/** Smooth curve through points (Catmull-Rom as cubic Béziers). */
function smooth(p: Pt[]) {
  let d = `M${r1(p[0][0])},${r1(p[0][1])}`;
  for (let i = 0; i < p.length - 1; i++) {
    const [a, b, c, e] = [p[i - 1] ?? p[i], p[i], p[i + 1], p[i + 2] ?? p[i + 1]];
    const c1: Pt = [b[0] + (c[0] - a[0]) / 6, b[1] + (c[1] - a[1]) / 6];
    const c2: Pt = [c[0] - (e[0] - b[0]) / 6, c[1] - (e[1] - b[1]) / 6];
    d += `C${r1(c1[0])},${r1(c1[1])} ${r1(c2[0])},${r1(c2[1])} ${r1(c[0])},${r1(c[1])}`;
  }
  return d;
}

/** Circle as a path, so two circles can be combined with a fill rule. */
const circlePath = (cx: number, cy: number, r: number) => `M${cx - r},${cy}a${r},${r} 0 1,0 ${2 * r},0a${r},${r} 0 1,0 ${-2 * r},0Z`;

/**
 * Full-width diagrams keep at least 82% of their drawn size (capped at 320px, a phone's
 * content width) so labels stay legible; narrower screens scroll the frame. `fit` diagrams
 * sit inside panels and always shrink to them.
 */
function Svg({ w, h, children, max = 1.45, fit, className }: { w: number; h: number; children: ReactNode; max?: number; fit?: boolean; className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={cn("mx-auto block h-auto w-full", className)}
      style={{ maxWidth: w * max, minWidth: fit || w < 300 ? undefined : Math.min(w * 0.82, 320) }}
      aria-hidden
    >
      {children}
    </svg>
  );
}

type TxtProps = {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  tone?: Tone;
  muted?: boolean;
  bold?: boolean;
  mono?: boolean;
  anchor?: "start" | "middle" | "end";
  /** Background-coloured ink, for text on a solid fill. */
  inverse?: boolean;
  className?: string;
};

function Txt({ x, y, children, size = 12, tone, muted, bold, mono, anchor = "middle", inverse, className }: TxtProps) {
  return (
    <text
      x={r1(x)}
      y={r1(y)}
      fontSize={size}
      textAnchor={anchor}
      fontWeight={bold ? 700 : undefined}
      className={cn(inverse ? "fill-bg" : tone ? TONE[tone].text : muted ? "fill-muted" : "fill-fg", mono && "font-mono", className)}
    >
      {children}
    </text>
  );
}

const strokeOf = (tone?: Tone, muted?: boolean) => (tone ? TONE[tone].stroke : muted ? "stroke-muted" : "stroke-fg");
const fillOf = (tone?: Tone, muted?: boolean) => (tone ? TONE[tone].solid : muted ? "fill-muted" : "fill-fg");

function headAt(to: Pt, from: Pt, size: number): Pt[] {
  const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
  return [to, [to[0] - size * Math.cos(a - 0.42), to[1] - size * Math.sin(a - 0.42)], [to[0] - size * Math.cos(a + 0.42), to[1] - size * Math.sin(a + 0.42)]];
}

/** Polyline with an arrowhead at the last point (and the first, with `both`). */
function Arrow({ p, tone, muted, dashed, width = 1.6, head = 7, both }: { p: Pt[]; tone?: Tone; muted?: boolean; dashed?: boolean; width?: number; head?: number; both?: boolean }) {
  const pull = (to: Pt, from: Pt): Pt => {
    const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
    return [to[0] - head * 0.75 * Math.cos(a), to[1] - head * 0.75 * Math.sin(a)];
  };
  const n = p.length;
  const line = [...p];
  line[n - 1] = pull(p[n - 1], p[n - 2]);
  if (both) line[0] = pull(p[0], p[1]);
  return (
    <g>
      <polyline points={pts(line)} fill="none" className={strokeOf(tone, muted)} strokeWidth={width} strokeDasharray={dashed ? "4 3" : undefined} strokeLinejoin="round" />
      <polygon points={pts(headAt(p[n - 1], p[n - 2], head))} className={fillOf(tone, muted)} />
      {both && <polygon points={pts(headAt(p[0], p[1], head))} className={fillOf(tone, muted)} />}
    </g>
  );
}

/** Quadratic curve arrow from `a` to `b`, bending towards `c`. */
function CurveArrow({ a, c, b, tone, dashed, head = 7 }: { a: Pt; c: Pt; b: Pt; tone?: Tone; dashed?: boolean; head?: number }) {
  return (
    <g>
      <path d={`M${a[0]},${a[1]}Q${c[0]},${c[1]} ${b[0]},${b[1]}`} fill="none" className={strokeOf(tone)} strokeWidth={1.6} strokeDasharray={dashed ? "4 3" : undefined} />
      <polygon points={pts(headAt(b, c, head))} className={fillOf(tone)} />
    </g>
  );
}

function Lines({ cx, cy, title, sub, size = 12, tone, mono }: { cx: number; cy: number; title?: ReactNode; sub?: ReactNode[]; size?: number; tone?: Tone; mono?: boolean }) {
  const rows: { t: ReactNode; title: boolean }[] = [...(title != null ? [{ t: title, title: true }] : []), ...(sub ?? []).map((t) => ({ t, title: false }))];
  const lh = size * 1.32;
  const y0 = cy - ((rows.length - 1) * lh) / 2 + size * 0.36;
  return rows.map((row, i) => (
    <Txt key={i} x={cx} y={y0 + i * lh} size={row.title ? size : size - 1} bold={row.title} tone={row.title ? tone : undefined} muted={!row.title} mono={mono && !row.title}>
      {row.t}
    </Txt>
  ));
}

type BoxProps = { x: number; y: number; w: number; h: number; tone?: Tone; title?: ReactNode; sub?: ReactNode[]; size?: number; rx?: number; dashed?: boolean };

function Box({ x, y, w, h, tone, title, sub, size = 12, rx = 9, dashed }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        className={tone ? cn(TONE[tone].soft, TONE[tone].stroke) : "fill-surface-2 stroke-border"}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <Lines cx={x + w / 2} cy={y + h / 2} title={title} sub={sub} size={size} tone={tone} />
    </g>
  );
}

function Diamond({ cx, cy, hw, hh, tone, title, sub, size = 11.5 }: { cx: number; cy: number; hw: number; hh: number; tone: Tone; title?: ReactNode; sub?: ReactNode[]; size?: number }) {
  return (
    <g>
      <polygon points={pts([[cx, cy - hh], [cx + hw, cy], [cx, cy + hh], [cx - hw, cy]])} className={cn(TONE[tone].soft, TONE[tone].stroke)} strokeWidth={1.5} strokeLinejoin="round" />
      <Lines cx={cx} cy={cy} title={title} sub={sub} size={size} tone={tone} />
    </g>
  );
}

function Dot({ x, y, tone, r = 4.5, hollow, muted }: { x: number; y: number; tone?: Tone; r?: number; hollow?: boolean; muted?: boolean }) {
  return (
    <circle
      cx={r1(x)}
      cy={r1(y)}
      r={r}
      className={hollow ? cn("fill-surface", strokeOf(tone, muted)) : fillOf(tone, muted)}
      strokeWidth={hollow ? 1.8 : undefined}
    />
  );
}

function Line({ a, b, tone, muted, faint, dashed, width = 1.4 }: { a: Pt; b: Pt; tone?: Tone; muted?: boolean; faint?: boolean; dashed?: boolean; width?: number }) {
  return (
    <line
      x1={r1(a[0])}
      y1={r1(a[1])}
      x2={r1(b[0])}
      y2={r1(b[1])}
      className={faint ? "stroke-border" : strokeOf(tone, muted)}
      strokeWidth={width}
      strokeDasharray={dashed ? "4 3" : undefined}
    />
  );
}

/* ───────────── Layout helpers (HTML) ───────────── */

function Panels({ cols = "grid-cols-2 sm:grid-cols-4", children }: { cols?: string; children: ReactNode }) {
  return <div className={cn("grid gap-2.5", cols)}>{children}</div>;
}

function Panel({ tone, title, note, children }: { tone: Tone; title: ReactNode; note?: ReactNode; children: ReactNode }) {
  return (
    <figure className="flex flex-col rounded-lg bg-surface-2/50 p-2 pb-2.5">
      <div className="flex flex-1 items-center">{children}</div>
      <figcaption className="mt-1.5 text-center text-[0.8em] leading-snug">
        <span className={cn("block font-semibold", TONE[tone].ink)}>{title}</span>
        {note && <span className="block text-muted">{note}</span>}
      </figcaption>
    </figure>
  );
}

function Key({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("size-2.5 shrink-0 rounded-full", TONE[tone].dot)} aria-hidden />
      {children}
    </span>
  );
}

function Legend({ children }: { children: ReactNode }) {
  return <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[0.8em] text-muted">{children}</div>;
}

function Steps({ steps }: { steps: { tone: Tone; title: ReactNode; note?: ReactNode }[] }) {
  return (
    <ol className="mx-auto max-w-lg">
      {steps.map((s, i) => (
        <li key={i}>
          {i > 0 && <ArrowDown className="mx-auto my-1 size-4 text-muted" aria-hidden />}
          <div className={cn("flex items-start gap-3 rounded-xl border px-3.5 py-2.5", TONE[s.tone].chip)}>
            <span className={cn("mt-px grid size-6 shrink-0 place-items-center rounded-full text-[0.78em] font-bold text-bg", TONE[s.tone].dot)}>{i + 1}</span>
            <div className="min-w-0 text-[0.92em] leading-snug">
              <p className="font-semibold">{s.title}</p>
              {s.note && <p className="mt-0.5 text-muted">{s.note}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Chip({ tone, children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-lg border px-2 py-1 leading-tight", tone ? TONE[tone].chip : "border-border bg-surface-2", className)}>{children}</span>
  );
}

/* ───────────── Maths I ───────────── */

function NumberSystems() {
  return (
    <Svg w={440} h={224}>
      <rect x={6} y={6} width={428} height={212} rx={14} className="fill-purple/10 stroke-purple" strokeWidth={1.5} />
      <Txt x={20} y={27} anchor="start" tone="purple" bold>
        ℝ Real numbers
      </Txt>
      <rect x={18} y={38} width={300} height={170} rx={12} className="fill-blue/10 stroke-blue" strokeWidth={1.5} />
      <Txt x={30} y={58} anchor="start" tone="blue" bold>
        ℚ Rational
      </Txt>
      <rect x={30} y={70} width={196} height={128} rx={10} className="fill-teal/10 stroke-teal" strokeWidth={1.5} />
      <Txt x={42} y={90} anchor="start" tone="teal" bold>
        ℤ Integers
      </Txt>
      <rect x={42} y={102} width={112} height={84} rx={8} className="fill-green/15 stroke-green" strokeWidth={1.5} />
      <Txt x={54} y={122} anchor="start" tone="green" bold>
        ℕ Natural
      </Txt>
      <Txt x={98} y={148}>0, 1, 2, 3, …</Txt>
      <Txt x={98} y={170} size={10} muted>
        IITM: 0 ∈ ℕ
      </Txt>
      <Txt x={190} y={140}>−1</Txt>
      <Txt x={190} y={164}>−25</Txt>
      <Txt x={272} y={110}>½</Txt>
      <Txt x={272} y={140}>−0.75</Txt>
      <Txt x={272} y={170}>22/7</Txt>
      <rect x={328} y={38} width={94} height={170} rx={12} className="fill-amber/10 stroke-amber" strokeWidth={1.5} strokeDasharray="5 4" />
      <Txt x={375} y={58} tone="amber" bold>
        Irrational
      </Txt>
      <Txt x={375} y={100} size={14}>
        √2
      </Txt>
      <Txt x={375} y={130} size={14}>
        π
      </Txt>
      <Txt x={375} y={160} size={14}>
        e
      </Txt>
    </Svg>
  );
}

function VennThree() {
  const circles: { x: number; y: number; tone: Tone }[] = [
    { x: 165, y: 118, tone: "blue" },
    { x: 255, y: 118, tone: "red" },
    { x: 210, y: 196, tone: "amber" },
  ];
  const regions: [number, number, string, Tone | undefined][] = [
    [210, 146, "5", undefined],
    [210, 92, "15", "purple"],
    [168, 178, "10", "purple"],
    [252, 178, "5", "purple"],
    [122, 108, "20", "blue"],
    [298, 108, "15", "red"],
    [210, 240, "10", "amber"],
  ];
  return (
    <>
      <Svg w={420} h={310}>
        <rect x={6} y={6} width={408} height={298} rx={12} className="fill-none stroke-border" strokeWidth={1.5} />
        {circles.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={78} className={cn(TONE[c.tone].soft, TONE[c.tone].stroke)} strokeWidth={2} />
        ))}
        <Txt x={112} y={32} tone="blue" bold>
          Milk 50
        </Txt>
        <Txt x={308} y={32} tone="red" bold>
          Bread 40
        </Txt>
        <Txt x={210} y={292} tone="amber" bold>
          Fruits 30
        </Txt>
        {regions.map(([x, y, v, tone], i) => (
          <Txt key={i} x={x} y={y + 5} size={i === 0 ? 17 : 15} bold tone={tone}>
            {v}
          </Txt>
        ))}
        <circle cx={210} cy={146} r={15} className="fill-none stroke-fg" strokeWidth={1.5} />
        <Txt x={20} y={294} anchor="start" muted size={11}>
          U = 100
        </Txt>
        <Txt x={400} y={294} anchor="end" bold size={12}>
          None: 20
        </Txt>
      </Svg>
      <Legend>
        <span>Fill order:</span>
        <span className="font-semibold text-fg">① centre 5</span>
        <span className="font-semibold text-purple">② exactly two</span>
        <span className="font-semibold text-blue">③ only one</span>
        <span className="font-semibold text-fg">④ none = 100 − 80</span>
      </Legend>
    </>
  );
}

const REL_NODES: Record<number, Pt> = { 1: [35, 100], 2: [80, 42], 3: [125, 100] };

/** Arrow between two relation nodes, stopping at their rims. */
function relEdge(a: number, b: number, offset = 0): Pt[] {
  const [p, q] = [REL_NODES[a], REL_NODES[b]];
  const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
  const [ux, uy] = [(q[0] - p[0]) / d, (q[1] - p[1]) / d];
  const [nx, ny] = [-uy * offset, ux * offset];
  return [
    [p[0] + ux * 16 + nx, p[1] + uy * 16 + ny],
    [q[0] - ux * 16 + nx, q[1] - uy * 16 + ny],
  ];
}

function RelGraph({ tone, edges, loops, strong }: { tone: Tone; edges: [number, number, boolean?][]; loops?: boolean; strong?: [number, number] }) {
  return (
    <Svg w={160} h={140} max={1.2}>
      {loops &&
        [1, 2, 3].map((n) => {
          const [x, y] = REL_NODES[n];
          const s = n === 2 ? -1 : 1; // the top node loops upwards, the bottom ones downwards
          const c2: Pt = [x + 26, y + s * 38];
          return (
            <g key={n}>
              <path d={`M${x - 8},${y + s * 11}C${x - 26},${y + s * 38} ${c2[0]},${c2[1]} ${x + 8},${y + s * 11}`} fill="none" className={TONE[tone].stroke} strokeWidth={1.6} />
              <polygon points={pts(headAt([x + 8, y + s * 11], c2, 6))} className={TONE[tone].solid} />
            </g>
          );
        })}
      {edges.map(([a, b, two], i) => (
        <Arrow key={i} p={relEdge(a, b)} tone={tone} both={two} head={6.5} />
      ))}
      {strong && <Arrow p={relEdge(strong[0], strong[1])} tone={tone} width={3} head={8} />}
      {[1, 2, 3].map((n) => (
        <g key={n}>
          <circle cx={REL_NODES[n][0]} cy={REL_NODES[n][1]} r={13} className={cn("fill-surface", TONE[tone].stroke)} strokeWidth={2} />
          <Txt x={REL_NODES[n][0]} y={REL_NODES[n][1] + 4.5} size={13} bold>
            {n}
          </Txt>
        </g>
      ))}
    </Svg>
  );
}

function RelationProps() {
  return (
    <Panels>
      <Panel tone="green" title="Reflexive" note="every a → a">
        <RelGraph tone="green" loops edges={[[1, 3]]} />
      </Panel>
      <Panel tone="blue" title="Symmetric" note="a → b ⇒ b → a">
        <RelGraph tone="blue" edges={[[1, 2, true], [2, 3, true]]} />
      </Panel>
      <Panel tone="purple" title="Antisymmetric" note="never both ways (a ≠ b)">
        <RelGraph tone="purple" edges={[[1, 2], [3, 2], [1, 3]]} />
      </Panel>
      <Panel tone="amber" title="Transitive" note="1 → 2 → 3 ⇒ 1 → 3">
        <RelGraph tone="amber" edges={[[1, 2], [2, 3]]} strong={[1, 3]} />
      </Panel>
    </Panels>
  );
}

function Mapping({ tone, b, map, lonelyA, lonelyB }: { tone: Tone; b: number[]; map: [number, number][]; lonelyA?: number; lonelyB?: number }) {
  const a = [40, 70, 100];
  return (
    <Svg w={160} h={144} max={1.2}>
      <ellipse cx={40} cy={70} rx={24} ry={54} className="fill-surface stroke-border" strokeWidth={1.5} />
      <ellipse cx={120} cy={70} rx={24} ry={54} className="fill-surface stroke-border" strokeWidth={1.5} />
      <Txt x={40} y={139} muted size={11} bold>
        A
      </Txt>
      <Txt x={120} y={139} muted size={11} bold>
        B
      </Txt>
      {map.map(([i, j], k) => (
        <Arrow key={k} p={[[46, a[i]], [113, b[j]]]} tone={tone} head={6} />
      ))}
      {a.map((y, i) => (
        <Dot key={i} x={40} y={y} tone={i === lonelyA ? "red" : undefined} hollow={i === lonelyA} />
      ))}
      {b.map((y, j) => (
        <Dot key={j} x={120} y={y} tone={j === lonelyB ? "red" : undefined} hollow={j === lonelyB} />
      ))}
    </Svg>
  );
}

function FunctionTypes() {
  return (
    <Panels>
      <Panel tone="blue" title="One-one, not onto" note="one B element is never hit">
        <Mapping tone="blue" b={[28, 56, 84, 112]} map={[[0, 0], [1, 1], [2, 2]]} lonelyB={3} />
      </Panel>
      <Panel tone="amber" title="Onto, not one-one" note="two inputs share an image">
        <Mapping tone="amber" b={[50, 90]} map={[[0, 0], [1, 0], [2, 1]]} />
      </Panel>
      <Panel tone="green" title="Bijective" note="pairs up exactly: f⁻¹ exists">
        <Mapping tone="green" b={[40, 70, 100]} map={[[0, 0], [1, 1], [2, 2]]} />
      </Panel>
      <Panel tone="red" title="Not a function" note="two images, or none">
        <Mapping tone="red" b={[40, 70, 100]} map={[[0, 0], [0, 1], [1, 2]]} lonelyA={2} />
      </Panel>
    </Panels>
  );
}

function Quadrants() {
  const O: Pt = [190, 150];
  const u = 30;
  const at = (x: number, y: number): Pt => [O[0] + x * u, O[1] - y * u];
  const P = at(3, 1);
  const refl: { p: Pt; tone: Tone; label: string; how: string; side: "start" | "end" }[] = [
    { p: at(3, -1), tone: "red", label: "(3, −1)", how: "in x-axis", side: "start" },
    { p: at(-3, 1), tone: "blue", label: "(−3, 1)", how: "in y-axis", side: "end" },
    { p: at(-3, -1), tone: "purple", label: "(−3, −1)", how: "in origin", side: "end" },
    { p: at(1, 3), tone: "teal", label: "(1, 3)", how: "in y = x", side: "start" },
  ];
  return (
    <Svg w={380} h={300}>
      <rect x={190} y={12} width={166} height={138} className="fill-green/10" />
      <rect x={24} y={12} width={166} height={138} className="fill-blue/10" />
      <rect x={24} y={150} width={166} height={138} className="fill-amber/10" />
      <rect x={190} y={150} width={166} height={138} className="fill-purple/10" />
      <Txt x={350} y={30} anchor="end" tone="green" bold>
        I (+, +)
      </Txt>
      <Txt x={30} y={30} anchor="start" tone="blue" bold>
        II (−, +)
      </Txt>
      <Txt x={30} y={280} anchor="start" tone="amber" bold>
        III (−, −)
      </Txt>
      <Txt x={350} y={280} anchor="end" tone="purple" bold>
        IV (+, −)
      </Txt>
      <Line a={[24, 150]} b={[356, 150]} muted />
      <Line a={[190, 12]} b={[190, 288]} muted />
      <Txt x={364} y={154} muted anchor="start" size={11}>
        x
      </Txt>
      <Txt x={196} y={22} muted anchor="start" size={11}>
        y
      </Txt>
      <Line a={at(-3.6, -3.6)} b={at(3.6, 3.6)} tone="teal" dashed />
      <Txt x={76} y={250} tone="teal" anchor="end" size={11}>
        y = x
      </Txt>
      {refl.map((r) => (
        <Line key={r.label} a={P} b={r.p} tone={r.tone} dashed width={1.2} />
      ))}
      <Dot x={P[0]} y={P[1]} r={5} />
      <Txt x={P[0] + 9} y={P[1] - 5} anchor="start" bold>
        P (3, 1)
      </Txt>
      {refl.map((r) => {
        const dx = r.side === "start" ? 9 : -9;
        return (
          <g key={r.label}>
            <Dot x={r.p[0]} y={r.p[1]} tone={r.tone} r={5} />
            <Txt x={r.p[0] + dx} y={r.p[1] - 3} anchor={r.side} tone={r.tone} bold>
              {r.label}
            </Txt>
            <Txt x={r.p[0] + dx} y={r.p[1] + 11} anchor={r.side} tone={r.tone} size={10}>
              {r.how}
            </Txt>
          </g>
        );
      })}
    </Svg>
  );
}

function MiniAxes({ w = 150, h = 130 }: { w?: number; h?: number }) {
  return (
    <>
      <Line a={[8, h / 2]} b={[w - 8, h / 2]} faint />
      <Line a={[w / 2, 6]} b={[w / 2, h - 6]} faint />
    </>
  );
}

function Slopes() {
  return (
    <Panels>
      <Panel
        tone="green"
        title="Sign of the slope"
        note={
          <>
            <span className="whitespace-nowrap text-green">m &gt; 0</span> · <span className="whitespace-nowrap text-red">m &lt; 0</span> ·{" "}
            <span className="whitespace-nowrap text-blue">m = 0</span> · <span className="text-purple">undefined</span>
          </>
        }
      >
        <Svg w={150} h={130} max={1.2}>
          <MiniAxes />
          <Line a={[25, 110]} b={[125, 20]} tone="green" width={2.2} />
          <Line a={[25, 20]} b={[125, 110]} tone="red" width={2.2} />
          <Line a={[14, 65]} b={[136, 65]} tone="blue" width={2.2} />
          <Line a={[75, 8]} b={[75, 122]} tone="purple" width={2.2} />
        </Svg>
      </Panel>
      <Panel tone="blue" title="Parallel" note="m₁ = m₂">
        <Svg w={150} h={130} max={1.2}>
          <MiniAxes />
          <Line a={[15, 78]} b={[135, 6]} tone="blue" width={2.2} />
          <Line a={[15, 124]} b={[135, 52]} tone="blue" width={2.2} />
        </Svg>
      </Panel>
      <Panel tone="amber" title="Perpendicular" note="m₁ · m₂ = −1">
        <Svg w={150} h={130} max={1.2}>
          <MiniAxes />
          <Line a={[25, 115]} b={[125, 15]} tone="green" width={2.2} />
          <Line a={[25, 15]} b={[125, 115]} tone="amber" width={2.2} />
          <polyline points={pts([[82, 58], [89, 65], [82, 72]])} fill="none" className="stroke-fg" strokeWidth={1.4} />
        </Svg>
      </Panel>
      <Panel tone="red" title="Point to line" note="d = |ax₁ + by₁ + c| ÷ √(a² + b²)">
        <Svg w={150} h={130} max={1.2}>
          <Line a={[10, 110]} b={[140, 40]} tone="blue" width={2.2} />
          <Line a={[60, 30]} b={[82.1, 71.2]} tone="red" dashed width={1.8} />
          <polyline points={pts([[75.1, 74.9], [71.4, 68], [78.4, 64.3]])} fill="none" className="stroke-fg" strokeWidth={1.2} />
          <Dot x={60} y={30} tone="red" />
          <Txt x={52} y={27} anchor="end" size={11} bold>
            P
          </Txt>
          <Txt x={84} y={48} tone="red" size={13} bold>
            d
          </Txt>
        </Svg>
      </Panel>
    </Panels>
  );
}

function Residuals() {
  const data: Pt[] = [
    [1, 1.6],
    [2, 3.4],
    [3, 3.0],
    [4, 5.2],
    [5, 4.4],
    [6, 6.4],
  ];
  const n = data.length;
  const mx = data.reduce((s, [x]) => s + x, 0) / n;
  const my = data.reduce((s, [, y]) => s + y, 0) / n;
  const m = data.reduce((s, [x, y]) => s + (x - mx) * (y - my), 0) / data.reduce((s, [x]) => s + (x - mx) ** 2, 0);
  const c = my - m * mx;
  const X = scale(0, 6.6, 40, 352);
  const Y = scale(0, 7, 214, 18);
  const fit = (x: number) => m * x + c;
  return (
    <>
      <Svg w={370} h={234}>
        <Line a={[40, 214]} b={[356, 214]} muted />
        <Line a={[40, 214]} b={[40, 14]} muted />
        <Txt x={360} y={218} anchor="start" muted size={11}>
          x
        </Txt>
        <Txt x={40} y={10} muted size={11}>
          y
        </Txt>
        <Line a={[X(0.3), Y(fit(0.3))]} b={[X(6.5), Y(fit(6.5))]} tone="green" width={2.4} />
        <Txt x={X(6.5)} y={Y(fit(6.5)) - 10} anchor="end" tone="green" bold size={11}>
          ŷ = mx + c
        </Txt>
        {data.map(([x, y]) => (
          <Line key={x} a={[X(x), Y(y)]} b={[X(x), Y(fit(x))]} tone="red" width={2} />
        ))}
        {data.map(([x]) => (
          <Dot key={x} x={X(x)} y={Y(fit(x))} tone="green" r={3} hollow />
        ))}
        {data.map(([x, y]) => (
          <Dot key={x} x={X(x)} y={Y(y)} tone="blue" r={5} />
        ))}
        <Txt x={X(4) - 9} y={(Y(5.2) + Y(fit(4))) / 2 + 4} anchor="end" tone="red" size={11} bold>
          e = y − ŷ
        </Txt>
        <polygon points={pts([[X(mx), Y(my) - 7], [X(mx) + 7, Y(my)], [X(mx), Y(my) + 7], [X(mx) - 7, Y(my)]])} className="fill-amber stroke-surface" strokeWidth={1.5} />
        <Txt x={X(mx) + 8} y={Y(my) + 20} anchor="start" tone="amber" bold size={11}>
          (x̄, ȳ)
        </Txt>
      </Svg>
      <Legend>
        <Key tone="blue">actual y</Key>
        <Key tone="green">predicted ŷ on the line</Key>
        <Key tone="red">error e (squared and summed = SSE)</Key>
        <Key tone="amber">the line passes through (x̄, ȳ)</Key>
      </Legend>
    </>
  );
}

function ParabolaPanel({ up }: { up: boolean }) {
  const X = scale(-1.5, 5.5, 12, 188);
  const Y = scale(-3, 5, 158, 12);
  const f = up ? (x: number) => 0.6 * (x - 2) ** 2 - 1.5 : (x: number) => -0.6 * (x - 2) ** 2 + 3.5;
  const roots = up ? [2 - Math.sqrt(2.5), 2 + Math.sqrt(2.5)] : [2 - Math.sqrt(35 / 6), 2 + Math.sqrt(35 / 6)];
  const k = f(2);
  const tone: Tone = up ? "blue" : "amber";
  return (
    <Svg w={200} h={170} max={1.3}>
      <Line a={[8, Y(0)]} b={[192, Y(0)]} faint />
      <Line a={[X(0), 8]} b={[X(0), 164]} faint />
      <Line a={[X(2), 10]} b={[X(2), 162]} tone="purple" dashed width={1.2} />
      <Txt x={X(2) + 5} y={up ? 22 : 160} anchor="start" tone="purple" size={10}>
        x = −b/2a
      </Txt>
      <path d={pathOf(sample(f, -1.5, 5.5, X, Y, -3, 5))} fill="none" className={TONE[tone].stroke} strokeWidth={2.4} />
      {roots.map((r) => (
        <Dot key={r} x={X(r)} y={Y(0)} tone="green" r={4} />
      ))}
      <Dot x={X(0)} y={Y(f(0))} tone="teal" r={4} />
      <Txt x={X(0) - 6} y={Y(f(0)) + (up ? -4 : 12)} anchor="end" tone="teal" size={10} bold>
        c
      </Txt>
      <Dot x={X(2)} y={Y(k)} tone="red" r={5} />
      <Txt x={X(2)} y={Y(k) + (up ? 18 : -10)} tone="red" size={10.5} bold>
        {up ? "min (h, k)" : "max (h, k)"}
      </Txt>
    </Svg>
  );
}

function Parabolas() {
  return (
    <>
      <Panels cols="grid-cols-2">
        <Panel tone="blue" title="a > 0: opens up" note="range [k, ∞)">
          <ParabolaPanel up />
        </Panel>
        <Panel tone="amber" title="a < 0: opens down" note="range (−∞, k]">
          <ParabolaPanel up={false} />
        </Panel>
      </Panels>
      <Legend>
        <Key tone="red">vertex (h, k), h = −b/2a, k = −D/4a</Key>
        <Key tone="purple">axis of symmetry</Key>
        <Key tone="green">roots (x-intercepts)</Key>
        <Key tone="teal">y-intercept c</Key>
      </Legend>
    </>
  );
}

function DiscPanel({ f, roots, tone }: { f: (x: number) => number; roots: number[]; tone: Tone }) {
  const X = scale(-3, 3, 8, 142);
  const Y = scale(-2, 4.2, 104, 8);
  return (
    <Svg w={150} h={112} max={1.2}>
      <Line a={[6, Y(0)]} b={[144, Y(0)]} muted width={1.6} />
      <path d={pathOf(sample(f, -3, 3, X, Y, -2, 4.2))} fill="none" className={TONE[tone].stroke} strokeWidth={2.4} />
      {roots.map((r) => (
        <Dot key={r} x={X(r)} y={Y(0)} tone={tone} r={4.5} />
      ))}
    </Svg>
  );
}

function Discriminant() {
  return (
    <Panels cols="grid-cols-3">
      <Panel tone="green" title="D > 0" note="two real roots: crosses twice">
        <DiscPanel f={(x) => x * x - 1.2} roots={[-Math.sqrt(1.2), Math.sqrt(1.2)]} tone="green" />
      </Panel>
      <Panel tone="amber" title="D = 0" note="equal roots: touches once">
        <DiscPanel f={(x) => 0.8 * x * x} roots={[0]} tone="amber" />
      </Panel>
      <Panel tone="red" title="D < 0" note="no real roots: never meets">
        <DiscPanel f={(x) => 0.6 * x * x + 0.8} roots={[]} tone="red" />
      </Panel>
    </Panels>
  );
}

function FactorFlow() {
  return (
    <Svg w={462} h={176}>
      <Box x={6} y={64} w={108} h={48} tone="blue" title="p(x) ÷ (x − a)" />
      <Arrow p={[[114, 88], [136, 88]]} muted />
      <Box x={136} y={64} w={100} h={48} tone="purple" title="Work out" sub={["p(a)"]} />
      <Arrow p={[[236, 88], [250, 88]]} muted />
      <Diamond cx={296} cy={88} hw={46} hh={34} tone="amber" title="p(a) = 0 ?" />
      <Arrow p={[[296, 54], [296, 32], [354, 32]]} tone="green" />
      <Txt x={322} y={26} tone="green" size={11} bold>
        yes
      </Txt>
      <Arrow p={[[296, 122], [296, 144], [354, 144]]} tone="teal" />
      <Txt x={322} y={138} tone="teal" size={11} bold>
        no
      </Txt>
      <Box x={354} y={8} w={102} h={48} tone="green" title="(x − a) is" sub={["a factor"]} />
      <Box x={354} y={120} w={102} h={48} tone="teal" title="Remainder" sub={["= p(a)"]} />
    </Svg>
  );
}

function EndPanel({ f, tone }: { f: (x: number) => number; tone: Tone }) {
  const X = scale(-3, 3, 10, 130);
  const Y = scale(-3.6, 3.6, 104, 6);
  const p = sample(f, -3, 3, X, Y, -3.6, 3.6, 160);
  return (
    <Svg w={140} h={110} max={1.2}>
      <Line a={[6, Y(0)]} b={[134, Y(0)]} faint />
      <Line a={[70, 4]} b={[70, 106]} faint />
      <path d={pathOf(p)} fill="none" className={TONE[tone].stroke} strokeWidth={2.4} />
      <polygon points={pts(headAt(p[0], p[3], 9))} className={TONE[tone].solid} />
      <polygon points={pts(headAt(p[p.length - 1], p[p.length - 4], 9))} className={TONE[tone].solid} />
    </Svg>
  );
}

function EndBehaviour() {
  return (
    <Panels>
      <Panel tone="green" title="Even, aₙ > 0" note="↑ … ↑ both ends up">
        <EndPanel tone="green" f={(x) => 0.15 * x ** 4 - x * x} />
      </Panel>
      <Panel tone="red" title="Even, aₙ < 0" note="↓ … ↓ both ends down">
        <EndPanel tone="red" f={(x) => -0.15 * x ** 4 + x * x} />
      </Panel>
      <Panel tone="blue" title="Odd, aₙ > 0" note="↓ … ↑ down-left, up-right">
        <EndPanel tone="blue" f={(x) => 0.25 * x ** 3 - x} />
      </Panel>
      <Panel tone="amber" title="Odd, aₙ < 0" note="↑ … ↓ up-left, down-right">
        <EndPanel tone="amber" f={(x) => -0.25 * x ** 3 + x} />
      </Panel>
    </Panels>
  );
}

function PolyExample() {
  const X = scale(-2.6, 2.2, 30, 345);
  const Y = scale(-8, 7, 180, 15);
  const p = (x: number) => (x + 2) * (x - 1) ** 2;
  const y0 = Y(0);
  return (
    <>
      <Svg w={360} h={226}>
        <Line a={[22, y0]} b={[352, y0]} muted />
        <Line a={[X(0), 10]} b={[X(0), 184]} muted />
        <Txt x={X(0) + 5} y={16} anchor="start" muted size={11}>
          y
        </Txt>
        <path d={pathOf(sample(p, -2.6, 2.2, X, Y, -8, 7, 200))} fill="none" className="stroke-blue" strokeWidth={2.6} />
        <Dot x={X(-2)} y={y0} tone="red" r={5.5} />
        <Txt x={X(-2) + 8} y={y0 + 18} anchor="start" tone="red" bold size={11}>
          crosses at −2
        </Txt>
        <Dot x={X(1)} y={y0} tone="purple" r={5.5} />
        <Txt x={X(1)} y={y0 + 20} tone="purple" bold size={11}>
          bounces at 1
        </Txt>
        <Dot x={X(0)} y={Y(2)} tone="amber" r={4.5} />
        <Txt x={X(0) + 8} y={Y(2) - 6} anchor="start" tone="amber" bold size={11}>
          p(0) = 2
        </Txt>
        <rect x={30} y={196} width={X(-2) - 30} height={22} className="fill-red/20" />
        <rect x={X(-2)} y={196} width={X(1) - X(-2)} height={22} className="fill-green/20" />
        <rect x={X(1)} y={196} width={345 - X(1)} height={22} className="fill-green/20" />
        <Line a={[X(-2), 192]} b={[X(-2), 222]} tone="red" />
        <Line a={[X(1), 192]} b={[X(1), 222]} tone="purple" />
        <Txt x={(30 + X(-2)) / 2} y={212} tone="red" bold size={13}>
          −
        </Txt>
        <Txt x={(X(-2) + X(1)) / 2} y={212} tone="green" bold size={13}>
          +
        </Txt>
        <Txt x={(X(1) + 345) / 2} y={212} tone="green" bold size={13}>
          +
        </Txt>
      </Svg>
      <Legend>
        <span>p(x) = (x + 2)(x − 1)²</span>
        <span>Bottom strip: sign of p(x). It flips only at the odd-power root.</span>
      </Legend>
    </>
  );
}

/* ───────────── Statistics I ───────────── */

function PopulationSample() {
  return (
    <Svg w={420} h={212}>
      <circle cx={120} cy={108} r={94} className="fill-blue/10 stroke-blue" strokeWidth={2} />
      <Txt x={120} y={44} tone="blue" bold size={13}>
        Population
      </Txt>
      <Txt x={120} y={62} muted size={11}>
        parameters μ, σ
      </Txt>
      <Txt x={84} y={110} muted size={10.5}>
        everyone you
      </Txt>
      <Txt x={84} y={124} muted size={10.5}>
        want to study
      </Txt>
      <circle cx={152} cy={146} r={36} className="fill-green/20 stroke-green" strokeWidth={2} />
      <Txt x={152} y={144} tone="green" bold>
        Sample
      </Txt>
      <Txt x={152} y={159} muted size={10}>
        who you ask
      </Txt>
      <Arrow p={[[188, 146], [276, 146]]} tone="green" />
      <Txt x={232} y={138} muted size={10.5}>
        compute
      </Txt>
      <Box x={276} y={120} w={132} h={52} tone="green" title="Statistic" sub={["x̄, s"]} />
      <CurveArrow a={[342, 118]} c={[330, 26]} b={[200, 46]} tone="purple" />
      <Txt x={322} y={50} tone="purple" bold size={11.5}>
        inference
      </Txt>
    </Svg>
  );
}

function CrossTime() {
  const bars = [60, 82, 45, 70, 90, 55];
  const series = [40, 48, 45, 55, 62, 58, 70, 76, 74, 85];
  const Xs = scale(0, series.length - 1, 22, 182);
  const Ys = scale(0, 100, 108, 12);
  return (
    <Panels cols="grid-cols-2">
      <Panel tone="teal" title="Cross-sectional" note="many units, one point in time">
        <Svg w={200} h={128} max={1.3}>
          <Line a={[14, 108]} b={[188, 108]} muted />
          {bars.map((v, i) => (
            <g key={i}>
              <rect x={22 + i * 28} y={Ys(v)} width={20} height={108 - Ys(v)} rx={3} className="fill-teal/70" />
              <Txt x={32 + i * 28} y={122} muted size={10}>
                {"ABCDEF"[i]}
              </Txt>
            </g>
          ))}
          <Txt x={100} y={12} tone="teal" bold size={10.5}>
            all in 2024
          </Txt>
        </Svg>
      </Panel>
      <Panel tone="amber" title="Time series" note="one unit, tracked over time">
        <Svg w={200} h={128} max={1.3}>
          <Line a={[14, 108]} b={[188, 108]} muted />
          <polyline points={pts(series.map((v, i) => [Xs(i), Ys(v)]))} fill="none" className="stroke-amber" strokeWidth={2.2} strokeLinejoin="round" />
          {series.map((v, i) => (
            <Dot key={i} x={Xs(i)} y={Ys(v)} tone="amber" r={3.2} />
          ))}
          <Txt x={22} y={122} muted size={10}>
            2015
          </Txt>
          <Txt x={182} y={122} muted size={10}>
            2024
          </Txt>
        </Svg>
      </Panel>
    </Panels>
  );
}

function ScalesTree() {
  return (
    <Svg w={460} h={262}>
      <Box x={8} y={12} w={208} h={44} title="Just a label or name?" />
      <Box x={8} y={86} w={208} h={44} title="Order, but gaps unequal?" />
      <Box x={8} y={160} w={208} h={44} title="Does 0 mean 'none of it'?" />
      <Box x={284} y={12} w={170} h={44} tone="blue" title="Nominal" sub={["city · PIN code · gender"]} size={11.5} />
      <Box x={284} y={86} w={170} h={44} tone="green" title="Ordinal" sub={["ranks · S/M/L · ratings"]} size={11.5} />
      <Box x={284} y={160} w={170} h={44} tone="purple" title="Ratio" sub={["height · income · votes"]} size={11.5} />
      <Box x={284} y={212} w={170} h={44} tone="amber" title="Interval" sub={["°C · calendar year"]} size={11.5} />
      {[34, 108, 182].map((y) => (
        <g key={y}>
          <Arrow p={[[216, y], [284, y]]} muted />
          <Txt x={250} y={y - 6} muted size={10.5}>
            yes
          </Txt>
        </g>
      ))}
      <Arrow p={[[112, 56], [112, 86]]} muted />
      <Arrow p={[[112, 130], [112, 160]]} muted />
      <Arrow p={[[112, 204], [112, 234], [284, 234]]} muted />
      {[74, 148, 222].map((y) => (
        <Txt key={y} x={120} y={y} anchor="start" muted size={10.5}>
          no
        </Txt>
      ))}
    </Svg>
  );
}

const FRUITS: { name: string; n: number; tone: Tone }[] = [
  { name: "Apple", n: 150, tone: "green" },
  { name: "Banana", n: 125, tone: "amber" },
  { name: "Mango", n: 100, tone: "red" },
  { name: "Orange", n: 75, tone: "teal" },
  { name: "Grapes", n: 50, tone: "purple" },
];

function PiePareto() {
  const total = FRUITS.reduce((s, f) => s + f.n, 0);
  let start = -Math.PI / 2;
  const slices = FRUITS.map((f) => {
    const sweep = (f.n / total) * 2 * Math.PI;
    const s = { ...f, a0: start, a1: start + sweep, deg: Math.round((f.n / total) * 360) };
    start += sweep;
    return s;
  });
  const cx = 100;
  const cy = 84;
  const r = 68;
  const Yb = scale(0, 150, 140, 20);
  const Yc = scale(0, 100, 140, 20);
  let cum = 0;
  const cumPts: Pt[] = FRUITS.map((f, i) => {
    cum += f.n;
    return [35 + i * 34, Yc((cum / total) * 100)];
  });
  return (
    <>
      <Panels cols="grid-cols-2">
        <Panel tone="red" title="Pie: angle = f/n × 360°" note="Mango 72° of 500 → 100 fruits">
          <Svg w={200} h={168} max={1.3}>
            {slices.map((s) => {
              const out = s.name === "Mango" ? 7 : 0;
              const mid = (s.a0 + s.a1) / 2;
              const [ox, oy] = [Math.cos(mid) * out, Math.sin(mid) * out];
              const p0: Pt = [cx + ox + r * Math.cos(s.a0), cy + oy + r * Math.sin(s.a0)];
              const p1: Pt = [cx + ox + r * Math.cos(s.a1), cy + oy + r * Math.sin(s.a1)];
              return (
                <g key={s.name}>
                  <path
                    d={`M${r1(cx + ox)},${r1(cy + oy)}L${r1(p0[0])},${r1(p0[1])}A${r},${r} 0 0,1 ${r1(p1[0])},${r1(p1[1])}Z`}
                    className={cn(TONE[s.tone].solid, "stroke-surface")}
                    fillOpacity={s.name === "Mango" ? 0.85 : 0.5}
                    strokeWidth={2}
                  />
                  <Txt x={cx + ox + r * 0.66 * Math.cos(mid)} y={cy + oy + r * 0.66 * Math.sin(mid) + 4} size={11} bold>
                    {s.deg}°
                  </Txt>
                </g>
              );
            })}
          </Svg>
        </Panel>
        <Panel tone="purple" title="Pareto: bars high → low" note="plus the cumulative % line">
          <Svg w={200} h={168} max={1.3}>
            <Line a={[16, 140]} b={[192, 140]} muted />
            {FRUITS.map((f, i) => (
              <g key={f.name}>
                <rect x={22 + i * 34} y={Yb(f.n)} width={26} height={140 - Yb(f.n)} rx={3} className={TONE[f.tone].solid} fillOpacity={0.6} />
                <Txt x={35 + i * 34} y={154} muted size={10}>
                  {f.name[0]}
                </Txt>
              </g>
            ))}
            <polyline points={pts(cumPts)} fill="none" className="stroke-fg" strokeWidth={1.8} />
            {cumPts.map(([x, y], i) => (
              <Dot key={i} x={x} y={y} r={3.2} />
            ))}
            <Txt x={190} y={16} anchor="end" size={10} bold>
              100%
            </Txt>
          </Svg>
        </Panel>
      </Panels>
      <Legend>
        {FRUITS.map((f) => (
          <Key key={f.name} tone={f.tone}>
            {f.name} {f.n}
          </Key>
        ))}
      </Legend>
    </>
  );
}

function SkewPanel({ kind }: { kind: "left" | "sym" | "right" }) {
  const X = scale(0, 8, 8, 152);
  const Y = scale(0, 0.36, 92, 8);
  const gamma = (x: number) => (x <= 0 ? 0 : (x * x * Math.exp(-x)) / 2);
  const f = kind === "right" ? gamma : kind === "left" ? (x: number) => gamma(8 - x) : (x: number) => Math.exp(-((x - 4) ** 2) / (2 * 1.44)) / (1.2 * Math.sqrt(2 * Math.PI));
  const [mean, median] = kind === "right" ? [3, 2.674] : kind === "left" ? [5, 5.326] : [4, 4];
  const curve = sample(f, 0, 8, X, Y, -1, 1, 100);
  const area = `${pathOf(curve)}L${X(8)},${Y(0)}L${X(0)},${Y(0)}Z`;
  return (
    <Svg w={160} h={110} max={1.2}>
      <path d={area} className="fill-teal/15" />
      <path d={pathOf(curve)} fill="none" className="stroke-teal" strokeWidth={2} />
      <Line a={[6, 92]} b={[154, 92]} muted />
      <Line a={[X(mean), 92]} b={[X(mean), Y(f(mean))]} tone="blue" width={2} />
      {kind !== "sym" && <Line a={[X(median), 92]} b={[X(median), Y(f(median))]} tone="purple" width={2} dashed />}
      {kind === "sym" ? (
        <Txt x={X(4)} y={106} size={10} bold>
          <tspan className="fill-blue">mean</tspan> = <tspan className="fill-purple">median</tspan>
        </Txt>
      ) : (
        <>
          <Txt x={X(mean) + (kind === "right" ? 3 : -3)} y={106} anchor={kind === "right" ? "start" : "end"} tone="blue" size={10} bold>
            mean
          </Txt>
          <Txt x={X(median) + (kind === "right" ? -3 : 3)} y={106} anchor={kind === "right" ? "end" : "start"} tone="purple" size={10} bold>
            median
          </Txt>
        </>
      )}
    </Svg>
  );
}

function SkewShapes() {
  return (
    <Panels cols="grid-cols-1 sm:grid-cols-3">
      <Panel tone="amber" title="Left-skewed" note="tail to the left: mean < median">
        <SkewPanel kind="left" />
      </Panel>
      <Panel tone="green" title="Symmetric" note="mean ≈ median">
        <SkewPanel kind="sym" />
      </Panel>
      <Panel tone="red" title="Right-skewed" note="tail to the right: mean > median">
        <SkewPanel kind="right" />
      </Panel>
    </Panels>
  );
}

/** Upward triangle marking a value on a dot plot. */
function Marker({ x, y, tone }: { x: number; y: number; tone: Tone }) {
  return <polygon points={pts([[x, y], [x + 6, y + 9], [x - 6, y + 9]])} className={TONE[tone].solid} />;
}

function MeanOutlier() {
  const X = scale(0, 28, 30, 370);
  return (
    <Svg w={390} h={152}>
      <Txt x={30} y={18} anchor="start" muted size={11}>
        2, 3, 4, 5, 6
      </Txt>
      <Line a={[X(0), 40]} b={[X(28), 40]} faint />
      {[2, 3, 4, 5, 6].map((v) => (
        <Dot key={v} x={X(v)} y={36} tone="teal" />
      ))}
      <Marker x={X(4)} y={44} tone="blue" />
      <Txt x={X(4) + 10} y={60} anchor="start" size={11} bold>
        <tspan className="fill-blue">mean</tspan> = <tspan className="fill-green">median</tspan> = 4
      </Txt>
      <Txt x={30} y={92} anchor="start" muted size={11}>
        2, 3, 4, 5, 26 (one outlier)
      </Txt>
      <Line a={[X(0), 114]} b={[X(28), 114]} faint />
      {[2, 3, 4, 5].map((v) => (
        <Dot key={v} x={X(v)} y={110} tone="teal" />
      ))}
      <Dot x={X(26)} y={110} tone="red" r={5.5} />
      <Txt x={X(26)} y={98} tone="red" bold size={11}>
        26
      </Txt>
      <Marker x={X(4)} y={118} tone="green" />
      <Marker x={X(8)} y={118} tone="blue" />
      <Arrow p={[[X(4.7), 123], [X(7.3), 123]]} tone="blue" head={5} />
      <Txt x={X(4)} y={142} tone="green" bold size={11}>
        median 4
      </Txt>
      <Txt x={X(8) + 4} y={142} tone="blue" bold size={11} anchor="start">
        mean 8: pulled by 26
      </Txt>
    </Svg>
  );
}

function Bell({ mu, sd, tone, dashed }: { mu: number; sd: number; tone?: Tone; dashed?: boolean }) {
  const X = scale(-3, 13, 6, 154);
  const Y = scale(0, 0.36, 86, 8);
  const f = (x: number) => Math.exp(-((x - mu) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));
  const p = sample(f, -3, 13, X, Y, -1, 1, 120);
  return dashed ? (
    <path d={pathOf(p)} fill="none" className="stroke-muted" strokeWidth={1.3} strokeDasharray="4 3" />
  ) : (
    <>
      <path d={`${pathOf(p)}L${X(13)},${Y(0)}L${X(-3)},${Y(0)}Z`} className={tone ? TONE[tone].soft : undefined} />
      <path d={pathOf(p)} fill="none" className={strokeOf(tone)} strokeWidth={2.2} />
    </>
  );
}

function ShiftStretch() {
  const X = scale(-3, 13, 6, 154);
  return (
    <Panels cols="grid-cols-1 sm:grid-cols-3">
      <Panel tone="blue" title="Original x" note="mean x̄, SD s">
        <Svg w={160} h={96} max={1.2}>
          <Line a={[6, 86]} b={[154, 86]} muted />
          <Bell mu={2} sd={1.2} tone="blue" />
        </Svg>
      </Panel>
      <Panel tone="green" title="x + b" note="centre moves by b, spread unchanged">
        <Svg w={160} h={96} max={1.2}>
          <Line a={[6, 86]} b={[154, 86]} muted />
          <Bell mu={2} sd={1.2} dashed />
          <Bell mu={6} sd={1.2} tone="green" />
          <Arrow p={[[X(2.6), 14], [X(5.4), 14]]} tone="green" head={6} />
        </Svg>
      </Panel>
      <Panel tone="purple" title="a × x" note="centre × a, SD × |a|, variance × a²">
        <Svg w={160} h={96} max={1.2}>
          <Line a={[6, 86]} b={[154, 86]} muted />
          <Bell mu={2} sd={1.2} dashed />
          <Bell mu={4} sd={2.4} tone="purple" />
          <Arrow p={[[X(2.2), 56], [X(-0.6), 56]]} tone="purple" head={6} />
          <Arrow p={[[X(5.8), 56], [X(8.6), 56]]} tone="purple" head={6} />
        </Svg>
      </Panel>
    </Panels>
  );
}

function BoxPlot() {
  const data = [3, 7, 8, 10, 12, 13, 15, 16, 18, 21, 38];
  const X = (v: number) => 30 + v * 9;
  return (
    <>
      <Svg w={420} h={154}>
        {data.map((v) => (
          <Dot key={v} x={X(v)} y={18} tone={v === 38 ? "red" : "teal"} r={3.8} />
        ))}
        <Txt x={X(8)} y={50} tone="blue" bold size={11}>
          Q₁ 8
        </Txt>
        <Txt x={X(13)} y={50} bold size={11}>
          median 13
        </Txt>
        <Txt x={X(18) + 6} y={50} tone="blue" bold size={11}>
          Q₃ 18
        </Txt>
        <Line a={[X(3), 78]} b={[X(8), 78]} muted width={1.6} />
        <Line a={[X(18), 78]} b={[X(21), 78]} muted width={1.6} />
        <Line a={[X(3), 68]} b={[X(3), 88]} muted width={1.6} />
        <Line a={[X(21), 68]} b={[X(21), 88]} muted width={1.6} />
        <rect x={X(8)} y={60} width={X(18) - X(8)} height={36} rx={3} className="fill-blue/20 stroke-blue" strokeWidth={1.8} />
        <Line a={[X(13), 60]} b={[X(13), 96]} width={2.6} />
        <Line a={[X(33), 40]} b={[X(33), 104]} tone="red" dashed />
        <Txt x={X(33)} y={34} tone="red" size={10.5} bold>
          fence 33
        </Txt>
        <Dot x={X(38)} y={78} tone="red" r={5} />
        <Txt x={X(3)} y={114} muted size={10.5}>
          3
        </Txt>
        <Txt x={X(13)} y={114} tone="blue" size={10.5} bold>
          IQR = 18 − 8 = 10
        </Txt>
        <Txt x={X(21)} y={114} muted size={10.5}>
          21
        </Txt>
        <Txt x={X(38)} y={100} tone="red" size={10.5} bold>
          outlier
        </Txt>
        <Line a={[X(0), 128]} b={[X(40), 128]} muted />
        {[0, 10, 20, 30, 40].map((t) => (
          <g key={t}>
            <Line a={[X(t), 125]} b={[X(t), 131]} muted />
            <Txt x={X(t)} y={146} muted size={10}>
              {t}
            </Txt>
          </g>
        ))}
      </Svg>
      <Legend>
        <span>Data: {data.join(", ")} (n = 11)</span>
        <span>Fence = Q₃ + 1.5 × IQR = 18 + 15</span>
      </Legend>
    </>
  );
}

function Contingency() {
  const cols = [20, 110, 200, 290];
  const rows = [10, 44, 78, 112];
  const W = 90;
  const H = 34;
  const cells: [string, string, string, string][] = [
    ["", "Own", "Don't", "Total"],
    ["Male", "100", "20", "120"],
    ["Female", "50", "30", "80"],
    ["Total", "150", "50", "200"],
  ];
  const found = new Set(["1-1", "1-2", "2-1", "3-2"]);
  const fill = (r: number, c: number) =>
    r === 0 || c === 0 ? "fill-none" : r === 3 && c === 3 ? "fill-amber/20" : c === 3 ? "fill-purple/15" : r === 3 ? "fill-teal/15" : "fill-blue/10";
  const Xb = scale(0, 100, 110, 380);
  return (
    <>
      <Svg w={400} h={226}>
        {cells.map((row, r) =>
          row.map((v, c) => (
            <g key={`${r}-${c}`}>
              <rect x={cols[c]} y={rows[r]} width={W} height={H} className={cn(fill(r, c), r && c ? "stroke-border" : "stroke-none")} />
              <Txt
                x={cols[c] + W / 2}
                y={rows[r] + H / 2 + 4.5}
                size={r === 0 || c === 0 ? 11.5 : 13}
                bold={r === 0 || c === 0 || found.has(`${r}-${c}`)}
                muted={r === 0 || c === 0}
                tone={found.has(`${r}-${c}`) ? "green" : undefined}
              >
                {v}
              </Txt>
            </g>
          )),
        )}
        {[
          { label: "Male", share: 100 / 120, y: 166 },
          { label: "Female", share: 50 / 80, y: 198 },
        ].map(({ label, share, y }) => (
          <g key={label}>
            <Txt x={100} y={y + 13} anchor="end" muted size={11}>
              {label}
            </Txt>
            <rect x={110} y={y} width={270} height={18} rx={4} className="fill-surface-2 stroke-border" />
            <rect x={110} y={y} width={Xb(share * 100) - 110} height={18} rx={4} className="fill-blue/40" />
            <Txt x={116} y={y + 13} anchor="start" size={10.5} bold>
              {Math.round(share * 100)}% own
            </Txt>
          </g>
        ))}
      </Svg>
      <Legend>
        <Key tone="green">worked out from the totals</Key>
        <Key tone="purple">row totals</Key>
        <Key tone="teal">column totals</Key>
        <span>Row % differ (83% vs 63%) ⇒ association</span>
      </Legend>
    </>
  );
}

function CovQuadrants() {
  const data: Pt[] = [
    [1, 2],
    [1.8, 1.2],
    [2.5, 3.4],
    [3.2, 2.6],
    [3.8, 4.6],
    [4.5, 3.8],
    [5.2, 5.9],
    [5.8, 4.9],
    [6.4, 6.8],
    [7.1, 6.1],
    [7.8, 7.9],
    [8.5, 7.2],
    [9.2, 8.8],
    [3, 6],
    [7, 3.6],
  ];
  const mx = data.reduce((s, [x]) => s + x, 0) / data.length;
  const my = data.reduce((s, [, y]) => s + y, 0) / data.length;
  const X = scale(0, 10, 30, 340);
  const Y = scale(0, 10, 232, 12);
  const [px, py] = [X(mx), Y(my)];
  return (
    <Svg w={360} h={250}>
      <rect x={px} y={12} width={340 - px} height={py - 12} className="fill-green/12" />
      <rect x={30} y={py} width={px - 30} height={232 - py} className="fill-green/12" />
      <rect x={30} y={12} width={px - 30} height={py - 12} className="fill-red/10" />
      <rect x={px} y={py} width={340 - px} height={232 - py} className="fill-red/10" />
      <Line a={[px, 12]} b={[px, 232]} tone="amber" dashed width={1.6} />
      <Line a={[30, py]} b={[340, py]} tone="amber" dashed width={1.6} />
      <Txt x={px + 4} y={244} anchor="start" tone="amber" bold size={11}>
        x̄
      </Txt>
      <Txt x={344} y={py + 4} anchor="start" tone="amber" bold size={11}>
        ȳ
      </Txt>
      <Txt x={334} y={28} anchor="end" tone="green" bold size={11}>
        (+)(+) adds +
      </Txt>
      <Txt x={36} y={224} anchor="start" tone="green" bold size={11}>
        (−)(−) adds +
      </Txt>
      <Txt x={36} y={28} anchor="start" tone="red" bold size={11}>
        (−)(+) adds −
      </Txt>
      <Txt x={334} y={224} anchor="end" tone="red" bold size={11}>
        (+)(−) adds −
      </Txt>
      {data.map(([x, y], i) => (
        <Dot key={i} x={X(x)} y={Y(y)} tone={(x - mx) * (y - my) >= 0 ? "green" : "red"} r={4.5} />
      ))}
      <Line a={[30, 232]} b={[340, 232]} muted />
      <Line a={[30, 12]} b={[30, 232]} muted />
    </Svg>
  );
}

const NOISE = [0.3, -0.8, 0.5, 0.1, -0.4, 0.9, -0.2, -0.7, 0.6, -0.1, 0.8, -0.5, 0.2, -0.9, 0.4, -0.3];

function corr(xs: number[], ys: number[]) {
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
    syy += (ys[i] - my) ** 2;
  }
  return sxy / Math.sqrt(sxx * syy);
}

function Scatter({ ys, tone }: { ys: number[]; tone: Tone }) {
  const n = ys.length;
  const lo = Math.min(...ys);
  const hi = Math.max(...ys);
  const X = scale(0, n - 1, 14, 106);
  const Y = scale(lo, hi, 88, 12);
  return (
    <Svg w={120} h={100} max={1.2}>
      <rect x={4} y={4} width={112} height={92} rx={6} className="fill-surface stroke-border" />
      {ys.map((y, i) => (
        <Dot key={i} x={X(i)} y={Y(y)} tone={tone} r={3.4} />
      ))}
    </Svg>
  );
}

function Correlation() {
  const n = NOISE.length;
  const xs = NOISE.map((_, i) => i / (n - 1));
  const mean = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
  const sd = (a: number[]) => Math.sqrt(mean(a.map((v) => (v - mean(a)) ** 2)));
  const zx = xs.map((x) => (x - mean(xs)) / sd(xs));
  const ze = NOISE.map((e) => (e - mean(NOISE)) / sd(NOISE));
  const mix = (rho: number) => zx.map((z, i) => rho * z + Math.sqrt(1 - rho * rho) * ze[i]);
  const sets: { ys: number[]; tone: Tone; title: string }[] = [
    { ys: zx.map((z) => -z), tone: "red", title: "Perfect negative" },
    { ys: mix(-0.7), tone: "amber", title: "Strong negative" },
    { ys: ze, tone: "purple", title: "No linear link" },
    { ys: mix(0.7), tone: "teal", title: "Strong positive" },
    { ys: zx, tone: "green", title: "Perfect positive" },
    { ys: xs.map((x) => (x - 0.5) ** 2), tone: "blue", title: "U-shape" },
  ];
  return (
    <Panels cols="grid-cols-2 sm:grid-cols-3">
      {sets.map((s) => {
        const r = corr(xs, s.ys);
        const shown = Math.abs(r) < 0.005 ? "0.00" : r.toFixed(2).replace("-", "−");
        return (
          <Panel key={s.title} tone={s.tone} title={s.title} note={`r = ${shown}${s.tone === "blue" ? ", yet clearly related" : ""}`}>
            <Scatter ys={s.ys} tone={s.tone} />
          </Panel>
        );
      })}
    </Panels>
  );
}

function PointBiserial() {
  const X = (v: number) => 40 + v * 32;
  return (
    <Svg w={380} h={146}>
      <Line a={[X(3.5), 24]} b={[X(7), 24]} tone="purple" width={2} />
      <Line a={[X(3.5), 20]} b={[X(3.5), 30]} tone="purple" width={2} />
      <Line a={[X(7), 20]} b={[X(7), 30]} tone="purple" width={2} />
      <Txt x={(X(3.5) + X(7)) / 2} y={16} tone="purple" bold size={11.5}>
        Ȳ₁ − Ȳ₀ = 3.5
      </Txt>
      <Line a={[X(3.5), 32]} b={[X(3.5), 112]} tone="amber" dashed />
      <Line a={[X(7), 32]} b={[X(7), 112]} tone="green" dashed />
      <Txt x={8} y={62} anchor="start" muted size={10.5}>
        failed (0)
      </Txt>
      {[3, 4].map((v) => (
        <Dot key={v} x={X(v)} y={58} tone="amber" r={6} />
      ))}
      <Txt x={8} y={100} anchor="start" muted size={10.5}>
        passed (1)
      </Txt>
      {[6, 7, 8].map((v) => (
        <Dot key={v} x={X(v)} y={96} tone="green" r={6} />
      ))}
      <Txt x={X(3.5) - 6} y={84} anchor="end" tone="amber" bold size={11}>
        Ȳ₀ = 3.5
      </Txt>
      <Txt x={X(7) + 6} y={72} anchor="start" tone="green" bold size={11}>
        Ȳ₁ = 7
      </Txt>
      <Line a={[X(0), 118]} b={[X(10), 118]} muted />
      {[0, 2, 4, 6, 8, 10].map((t) => (
        <g key={t}>
          <Line a={[X(t), 115]} b={[X(t), 121]} muted />
          <Txt x={X(t)} y={135} muted size={10}>
            {t}
          </Txt>
        </g>
      ))}
      <Txt x={X(10) + 4} y={122} anchor="start" muted size={10}>
        h
      </Txt>
    </Svg>
  );
}

/* ───────────── Computational Thinking ───────────── */

function ScoresCard() {
  const rows: [string, string, Tone][] = [
    ["Name", "Asha", "teal"],
    ["Gender", "F", "teal"],
    ["Date of birth", "12 Mar", "teal"],
    ["Town/City", "Chennai", "teal"],
    ["Mathematics", "82", "purple"],
    ["Physics", "74", "purple"],
    ["Chemistry", "90", "purple"],
    ["Total", "246", "amber"],
  ];
  return (
    <Svg w={340} h={232}>
      <rect x={20} y={8} width={300} height={216} rx={12} className="fill-surface stroke-border" strokeWidth={1.5} />
      <path d="M20,40V20a12,12 0 0 1 12,-12H308a12,12 0 0 1 12,12V40Z" className="fill-blue/20" />
      <Txt x={36} y={29} anchor="start" tone="blue" bold>
        Scores: one card = one student
      </Txt>
      {rows.map(([k, v, tone], i) => {
        const y = 62 + i * 22;
        return (
          <g key={k}>
            <rect x={30} y={y - 12} width={4} height={16} rx={2} className={TONE[tone].solid} />
            <Txt x={42} y={y} anchor="start" muted size={11.5}>
              {k}
            </Txt>
            <Txt x={170} y={y} anchor="start" bold size={12} tone={tone === "amber" ? "amber" : undefined}>
              {v}
            </Txt>
          </g>
        );
      })}
      <Txt x={204} y={62 + 7 * 22} anchor="start" muted size={10.5}>
        = 82 + 74 + 90
      </Txt>
    </Svg>
  );
}

function IteratorFlow() {
  const cx = 150;
  return (
    <>
      <Svg w={340} h={576} max={1.1}>
        <rect x={cx - 55} y={6} width={110} height={32} rx={16} className="fill-green/15 stroke-green" strokeWidth={1.5} />
        <Txt x={cx} y={26} tone="green" bold>
          Start
        </Txt>
        <Arrow p={[[cx, 38], [cx, 55]]} muted />
        <Box x={cx - 85} y={55} w={170} h={34} tone="blue" title="count = 0, sum = 0" size={11.5} rx={4} />
        <Arrow p={[[cx, 89], [cx, 106]]} muted />
        <Diamond cx={cx} cy={136} hw={85} hh={30} tone="amber" title="Table 1 has" sub={["more rows?"]} size={11} />
        <Arrow p={[[cx, 166], [cx, 183]]} muted />
        <Txt x={cx + 6} y={178} anchor="start" muted size={10.5}>
          yes
        </Txt>
        <Box x={cx - 85} y={183} w={170} h={34} tone="blue" title="Read the first row X" size={11.5} rx={4} />
        <Arrow p={[[cx, 217], [cx, 234]]} muted />
        <Diamond cx={cx} cy={264} hw={85} hh={30} tone="amber" title='X.Gender == "F" ?' size={11} />
        <Arrow p={[[cx, 294], [cx, 308]]} muted />
        <Txt x={cx + 6} y={305} anchor="start" muted size={10.5}>
          yes
        </Txt>
        <Box x={cx - 85} y={308} w={170} h={44} tone="blue" title="count = count + 1" sub={["sum = sum + X.Maths"]} size={11.5} rx={4} />
        <Arrow p={[[cx, 352], [cx, 371]]} muted />
        <Box x={cx - 85} y={371} w={170} h={34} tone="blue" title="Move X to Table 2" size={11.5} rx={4} />
        <Arrow p={[[cx - 85, 388], [22, 388], [22, 136], [cx - 85, 136]]} tone="blue" />
        <text x={14} y={262} transform="rotate(-90 14 262)" textAnchor="middle" fontSize={10} fontWeight={700} className="fill-blue">
          next card
        </text>
        <Arrow p={[[cx + 85, 264], [282, 264], [282, 388], [cx + 85, 388]]} muted />
        <Txt x={cx + 92} y={258} anchor="start" muted size={10.5}>
          no
        </Txt>
        <Arrow p={[[cx + 85, 136], [320, 136], [320, 448], [cx + 85, 448]]} muted />
        <Txt x={cx + 92} y={130} anchor="start" muted size={10.5}>
          no
        </Txt>
        <Box x={cx - 85} y={431} w={170} h={34} tone="blue" title="avg = sum / count" size={11.5} rx={4} />
        <Arrow p={[[cx, 465], [cx, 483]]} muted />
        <polygon points={pts([[cx - 70, 483], [cx + 85, 483], [cx + 70, 517], [cx - 85, 517]])} className="fill-purple/15 stroke-purple" strokeWidth={1.5} />
        <Txt x={cx} y={504} tone="purple" bold size={11.5}>
          Output avg
        </Txt>
        <Arrow p={[[cx, 517], [cx, 536]]} muted />
        <rect x={cx - 55} y={536} width={110} height={32} rx={16} className="fill-green/15 stroke-green" strokeWidth={1.5} />
        <Txt x={cx} y={556} tone="green" bold>
          End
        </Txt>
      </Svg>
      <Legend>
        <Key tone="green">oval: start / end</Key>
        <Key tone="blue">rectangle: process</Key>
        <Key tone="amber">diamond: decision</Key>
        <Key tone="purple">parallelogram: input / output</Key>
      </Legend>
    </>
  );
}

function SetLogic({ mode, tone }: { mode: "and" | "or" | "xor"; tone: Tone }) {
  const [a, b, r] = [62, 98, 40];
  const both = `${circlePath(a, 66, r)}${circlePath(b, 66, r)}`;
  return (
    <Svg w={160} h={124} max={1.2}>
      <defs>
        <clipPath id="cheat-and-clip">
          <circle cx={a} cy={66} r={r} />
        </clipPath>
      </defs>
      {mode === "and" ? (
        <circle cx={b} cy={66} r={r} clipPath="url(#cheat-and-clip)" className={TONE[tone].solid} fillOpacity={0.45} />
      ) : (
        <path d={both} fillRule={mode === "xor" ? "evenodd" : "nonzero"} className={TONE[tone].solid} fillOpacity={0.45} />
      )}
      <circle cx={a} cy={66} r={r} className="fill-none stroke-fg" strokeWidth={1.4} />
      <circle cx={b} cy={66} r={r} className="fill-none stroke-fg" strokeWidth={1.4} />
      <Txt x={44} y={18} muted size={10} bold>
        Female 14
      </Txt>
      <Txt x={118} y={18} muted size={10} bold>
        Chennai 12
      </Txt>
      <Txt x={42} y={71} bold size={13}>
        9
      </Txt>
      <Txt x={80} y={71} bold size={13}>
        5
      </Txt>
      <Txt x={118} y={71} bold size={13}>
        7
      </Txt>
    </Svg>
  );
}

function AndOr() {
  return (
    <Panels cols="grid-cols-1 sm:grid-cols-3">
      <Panel tone="green" title="A and B" note="both: 5">
        <SetLogic mode="and" tone="green" />
      </Panel>
      <Panel tone="blue" title="A or B" note="at least one: 14 + 12 − 5 = 21">
        <SetLogic mode="or" tone="blue" />
      </Panel>
      <Panel tone="amber" title="Exactly one" note="(A and not B) or (B and not A): 16">
        <SetLogic mode="xor" tone="amber" />
      </Panel>
    </Panels>
  );
}

function MaxTrace() {
  const marks = [62, 85, 70, 85, 54];
  const Y = (v: number) => 170 - v * 1.3;
  const x = (i: number) => 40 + i * 70;
  let best = 0;
  const steps: Pt[] = [];
  marks.forEach((m, i) => {
    best = Math.max(best, m);
    steps.push([x(i) - 12, Y(best)], [x(i) + 52, Y(best)]);
  });
  const tone = (i: number): Tone => (i === 1 ? "green" : i === 3 ? "purple" : "blue");
  return (
    <>
      <Svg w={400} h={196}>
        <Line a={[24, 170]} b={[384, 170]} muted />
        {marks.map((m, i) => (
          <g key={i}>
            <rect x={x(i)} y={Y(m)} width={40} height={170 - Y(m)} rx={4} className={cn(TONE[tone(i)].soft, TONE[tone(i)].stroke)} strokeWidth={1.5} />
            <Txt x={x(i) + 20} y={Y(m) - 8} bold size={12}>
              {m}
            </Txt>
            <Txt x={x(i) + 20} y={186} muted size={10.5}>
              card {i + 1}
            </Txt>
          </g>
        ))}
        <polyline points={pts(steps)} fill="none" className="stroke-amber" strokeWidth={2} strokeDasharray="5 3" />
        <Txt x={x(1) + 20} y={22} tone="green" bold size={11}>
          {"X.M > max"}
        </Txt>
        <Txt x={x(1) + 20} y={35} tone="green" size={10}>
          keeps this one
        </Txt>
        <Txt x={x(3) + 20} y={22} tone="purple" bold size={11}>
          {"X.M >= max"}
        </Txt>
        <Txt x={x(3) + 20} y={35} tone="purple" size={10}>
          keeps this one
        </Txt>
      </Svg>
      <Legend>
        <Key tone="amber">max so far (starts at 0)</Key>
        <span>Ties: strict &gt; keeps the first card, ≥ keeps the last.</span>
      </Legend>
    </>
  );
}

function ProcedureCall() {
  return (
    <Svg w={420} h={166}>
      <Box x={6} y={48} w={128} h={74} tone="blue" title="v = isVowel('e')" sub={["then v = True"]} size={11.5} />
      <Arrow p={[[134, 70], [176, 70]]} tone="blue" />
      <Txt x={155} y={62} tone="blue" bold size={11}>
        {"'e'"}
      </Txt>
      <Arrow p={[[176, 104], [134, 104]]} tone="green" />
      <Txt x={155} y={120} tone="green" bold size={11}>
        True
      </Txt>
      <rect x={176} y={8} width={238} height={152} rx={10} className="fill-purple/10 stroke-purple" strokeWidth={1.5} />
      <Txt x={190} y={32} anchor="start" tone="purple" bold size={12} mono>
        Procedure isVowel(c)
      </Txt>
      <Txt x={190} y={56} anchor="start" muted size={11} mono>
        {"c = 'e'   (argument in)"}
      </Txt>
      <Txt x={190} y={80} anchor="start" size={11} mono>
        {"if(c is a, e, i, o or u){"}
      </Txt>
      <Txt x={206} y={104} anchor="start" tone="green" bold size={11} mono>
        return(True)
      </Txt>
      <Txt x={318} y={104} anchor="start" tone="green" size={10}>
        ← exits here
      </Txt>
      <Txt x={190} y={128} anchor="start" muted size={11} mono className="opacity-50">
        {"}  return(False)"}
      </Txt>
      <Txt x={318} y={128} anchor="start" muted size={10}>
        never runs
      </Txt>
      <Txt x={190} y={150} anchor="start" muted size={11} mono>
        End isVowel
      </Txt>
    </Svg>
  );
}

function SlabBill() {
  const X = (u: number) => 20 + u * 1.52;
  const slabs: { from: number; to: number; rate: number; tone: Tone; name: string }[] = [
    { from: 0, to: 100, rate: 5, tone: "green", name: "first 100" },
    { from: 100, to: 200, rate: 7, tone: "amber", name: "next 100" },
    { from: 200, to: 250, rate: 10, tone: "red", name: "the rest" },
  ];
  return (
    <Svg w={420} h={160}>
      {slabs.map((s) => {
        const mid = (X(s.from) + X(s.to)) / 2;
        const units = s.to - s.from;
        return (
          <g key={s.rate}>
            <Txt x={mid} y={34} muted size={11}>
              {s.name}
            </Txt>
            <rect x={X(s.from)} y={42} width={X(s.to) - X(s.from)} height={40} className={cn(TONE[s.tone].soft, TONE[s.tone].stroke)} strokeWidth={1.5} />
            <Txt x={mid} y={67} bold size={12}>
              ₹{s.rate} / unit
            </Txt>
            <Txt x={mid} y={124} tone={s.tone} bold size={11}>
              {units} × {s.rate} = {units * s.rate}
            </Txt>
          </g>
        );
      })}
      {[0, 100, 200, 250].map((u) => (
        <Txt key={u} x={X(u)} y={100} muted size={10.5}>
          {u}
        </Txt>
      ))}
      <Txt x={210} y={152} bold size={12.5}>
        Bill for 250 units = 500 + 700 + 500 = ₹1700
      </Txt>
    </Svg>
  );
}

function TwoPasses() {
  return (
    <Steps
      steps={[
        { tone: "blue", title: "Pass 1: add up every Total and count the rows", note: "Every card moves from Table 1 to Table 2." },
        { tone: "amber", title: "avg = sum / n", note: "Only known once pass 1 has finished." },
        { tone: "purple", title: "Move all rows from Table 2 back to Table 1", note: "Skip this and pass 2 runs zero times." },
        { tone: "green", title: "Pass 2: count the rows with X.Total > avg" },
      ]}
    />
  );
}

function PairsGrid() {
  const L = "ABCDEF";
  const s = 34;
  const x0 = 62;
  const y0 = 42;
  return (
    <>
      <Svg w={300} h={292}>
        <Txt x={x0 + 3 * s} y={14} muted size={10.5}>
          Y (inner loop) →
        </Txt>
        <Txt x={14} y={y0 + 3 * s} muted size={10.5} anchor="middle">
          X ↓
        </Txt>
        {[...L].map((c, i) => (
          <g key={c}>
            <Txt x={x0 + i * s + s / 2} y={y0 - 8} bold size={11.5}>
              {c}
            </Txt>
            <Txt x={x0 - 10} y={y0 + i * s + s / 2 + 4} bold size={11.5} anchor="end">
              {c}
            </Txt>
          </g>
        ))}
        {[...L].map((_, i) =>
          [...L].map((__, j) => (
            <g key={`${i}${j}`}>
              <rect
                x={x0 + j * s}
                y={y0 + i * s}
                width={s}
                height={s}
                className={cn("stroke-surface", j > i ? "fill-green/40" : j === i ? "fill-surface-2" : "fill-amber/15")}
                strokeWidth={2}
              />
              {j === i && <Line a={[x0 + j * s + 8, y0 + i * s + 8]} b={[x0 + j * s + s - 8, y0 + i * s + s - 8]} muted width={1.2} />}
            </g>
          )),
        )}
        <Txt x={x0 + 3 * s} y={y0 + 6 * s + 26} bold size={12.5}>
          6 × 5 ÷ 2 = 15 pairs
        </Txt>
      </Svg>
      <Legend>
        <Key tone="green">compared once</Key>
        <Key tone="amber">same pair again (double counting)</Key>
        <span>Diagonal: X never meets itself</span>
      </Legend>
    </>
  );
}

function Binning() {
  const bins: { y: number; tone: Tone }[] = [
    { y: 12, tone: "blue" },
    { y: 74, tone: "purple" },
    { y: 136, tone: "amber" },
  ];
  return (
    <Svg w={440} h={200}>
      <Box x={6} y={72} w={94} h={56} tone="teal" title="30 cards" sub={["1 pass to sort"]} size={12} />
      {bins.map((b, i) => (
        <g key={i}>
          <Arrow p={[[100, 100], [158, b.y + 26]]} muted />
          <Box x={158} y={b.y} w={134} h={52} tone={b.tone} title={`Bin ${i + 1}: 10 cards`} sub={["10 × 9 ÷ 2 = 45"]} size={11.5} />
          <Arrow p={[[292, b.y + 26], [334, 100]]} muted />
        </g>
      ))}
      <Box x={334} y={60} w={100} h={80} tone="green" title="135" sub={["comparisons", "(not 435)"]} size={13} />
    </Svg>
  );
}

function TraceMap() {
  const rows: { start: string; update: string; is: string; tone: Tone }[] = [
    { start: "A = 0", update: "A = A + 1", is: "count", tone: "blue" },
    { start: "A = 0", update: "A = A + X.field", is: "sum", tone: "green" },
    { start: "A = 0", update: "if X.f > A: A = X.f", is: "max", tone: "amber" },
    { start: "A = 100", update: "if X.f < A: A = X.f", is: "min", tone: "purple" },
    { start: "A = False", update: "A = True", is: "flag: 'at least one'", tone: "teal" },
  ];
  const grid = "sm:grid sm:grid-cols-[minmax(0,7rem)_auto_minmax(0,1fr)_auto_minmax(0,9rem)] sm:items-center sm:gap-2";
  return (
    <div className="space-y-2">
      <div className={cn("hidden px-1 text-[0.75em] font-bold uppercase tracking-wide text-muted", grid)}>
        <span>Starts at</span>
        <span />
        <span>Update inside the loop</span>
        <span />
        <span>Meaning</span>
      </div>
      {rows.map((r) => (
        <div key={r.is} className={cn("rounded-xl border p-2.5 text-[0.88em] sm:rounded-none sm:border-0 sm:p-0", TONE[r.tone].chip, "sm:bg-transparent", grid)}>
          <p className={cn("mb-1.5 font-semibold sm:hidden", TONE[r.tone].ink)}>{r.is}</p>
          <div className="flex flex-wrap items-center gap-1.5 sm:contents">
            <Chip className="font-mono">{r.start}</Chip>
            <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
            <Chip className="font-mono">{r.update}</Chip>
          </div>
          <ArrowRight className="hidden size-4 shrink-0 text-muted sm:block" aria-hidden />
          <span className="hidden sm:block">
            <Chip tone={r.tone} className={cn("font-semibold", TONE[r.tone].ink)}>
              {r.is}
            </Chip>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ───────────── English I ───────────── */

const TRAPEZOID: Pt[] = [
  [60, 28],
  [344, 28],
  [344, 222],
  [134, 222],
];

const VOWELS: Record<string, { p: Pt; word: string; long?: boolean }> = {
  ii: { p: [80, 45], word: "seat", long: true },
  i: { p: [115, 72], word: "sit" },
  e: { p: [118, 122], word: "bed" },
  a: { p: [152, 190], word: "cat" },
  ə: { p: [192, 116], word: "about" },
  əə: { p: [232, 146], word: "bird", long: true },
  ʌ: { p: [258, 184], word: "cup" },
  aa: { p: [290, 190], word: "car", long: true },
  o: { p: [328, 162], word: "hot" },
  oo: { p: [318, 118], word: "law", long: true },
  u: { p: [282, 74], word: "put" },
  uu: { p: [322, 45], word: "food", long: true },
};

function VowelChart() {
  return (
    <>
      <Svg w={380} h={250}>
        <polygon points={pts(TRAPEZOID)} className="fill-surface-2/60 stroke-border" strokeWidth={1.5} />
        <Txt x={64} y={18} anchor="start" muted size={10.5}>
          front of mouth
        </Txt>
        <Txt x={344} y={18} anchor="end" muted size={10.5}>
          back
        </Txt>
        <Txt x={54} y={34} anchor="end" muted size={10.5}>
          high
        </Txt>
        <Txt x={128} y={226} anchor="end" muted size={10.5}>
          low
        </Txt>
        {Object.entries(VOWELS).map(([sym, v]) => {
          const tone: Tone = v.long ? "purple" : "blue";
          return (
            <g key={sym}>
              <circle cx={v.p[0]} cy={v.p[1]} r={13} className={cn(TONE[tone].soft, TONE[tone].stroke)} strokeWidth={1.6} />
              <Txt x={v.p[0]} y={v.p[1] + 4.5} tone={tone} bold size={sym.length > 1 ? 11.5 : 13.5}>
                {sym}
              </Txt>
              <Txt x={v.p[0]} y={v.p[1] + 24} muted size={10}>
                {v.word}
              </Txt>
            </g>
          );
        })}
      </Svg>
      <Legend>
        <Key tone="blue">short vowel</Key>
        <Key tone="purple">long vowel (letter doubled)</Key>
        <span>Position = where the tongue sits</span>
      </Legend>
    </>
  );
}

/** Diphthong start and end points: the vowel chart's layout, spread out so short glides stay visible. */
const GLIDE_AT: Record<string, Pt> = { i: [100, 52], e: [112, 140], a: [160, 204], ə: [204, 122], u: [292, 56], oo: [318, 146] };

function GlidePanel({ tone, glides }: { tone: Tone; glides: [string, string, string, 1 | -1][] }) {
  const used = new Set(glides.flatMap(([, a, b]) => [a, b]));
  return (
    <Svg w={320} h={212} max={1.1} fit>
      <g transform="translate(-40 -18)">
        <polygon points={pts(TRAPEZOID)} className="fill-surface stroke-border" strokeWidth={2} />
        {glides.map(([name, from, to, side]) => {
          const [a, b] = [GLIDE_AT[from], GLIDE_AT[to]];
          const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
          const [ux, uy] = [(b[0] - a[0]) / d, (b[1] - a[1]) / d];
          const start: Pt = [a[0] + ux * 28, a[1] + uy * 28];
          const end: Pt = [b[0] - ux * 28, b[1] - uy * 28];
          const mid: Pt = [(start[0] + end[0]) / 2 - uy * 26 * side, (start[1] + end[1]) / 2 + ux * 26 * side];
          return (
            <g key={name}>
              <Arrow p={[start, end]} tone={tone} width={4} head={15} />
              <Txt x={mid[0]} y={mid[1] + 9} tone={tone} bold size={28}>
                {name}
              </Txt>
            </g>
          );
        })}
        {[...used].map((sym) => {
          const [x, y] = GLIDE_AT[sym];
          return (
            <g key={sym}>
              <circle cx={x} cy={y} r={24} className="fill-surface stroke-muted" strokeWidth={2} />
              <Txt x={x} y={y + 9} size={25} bold>
                {sym}
              </Txt>
            </g>
          );
        })}
      </g>
    </Svg>
  );
}

function DiphthongGlides() {
  return (
    <Panels cols="grid-cols-1 sm:grid-cols-3">
      <Panel tone="blue" title="Glide up to i" note="day · my · boy">
        <GlidePanel
          tone="blue"
          glides={[
            ["ei", "e", "i", -1],
            ["ai", "a", "i", 1],
            ["oi", "oo", "i", -1],
          ]}
        />
      </Panel>
      <Panel tone="green" title="Glide to u" note="go · now">
        <GlidePanel
          tone="green"
          glides={[
            ["ou", "ə", "u", -1],
            ["au", "a", "u", 1],
          ]}
        />
      </Panel>
      <Panel tone="purple" title="Glide to the centre, ə" note="near · hair · tour">
        <GlidePanel
          tone="purple"
          glides={[
            ["iə", "i", "ə", -1],
            ["eə", "e", "ə", 1],
            ["uə", "u", "ə", 1],
          ]}
        />
      </Panel>
    </Panels>
  );
}

function PlacesOfArticulation() {
  const places: { x: number; y: number; name: string; sounds: string; tone: Tone }[] = [
    { x: 36, y: 130, name: "Bilabial", sounds: "p b m w", tone: "red" },
    { x: 88, y: 112, name: "Labiodental", sounds: "f v", tone: "amber" },
    { x: 138, y: 98, name: "Dental", sounds: "θ ð", tone: "green" },
    { x: 184, y: 84, name: "Alveolar", sounds: "t d n s z l r", tone: "teal" },
    { x: 230, y: 72, name: "Post-alveolar", sounds: "ʃ ʒ tʃ dʒ", tone: "blue" },
    { x: 280, y: 64, name: "Palatal", sounds: "j", tone: "amber" },
    { x: 338, y: 70, name: "Velar", sounds: "k g ŋ", tone: "purple" },
    { x: 410, y: 150, name: "Glottal", sounds: "h", tone: "red" },
  ];
  return (
    <>
      <Svg w={460} h={214}>
        <Txt x={20} y={14} anchor="start" muted size={10.5}>
          ← front: lips
        </Txt>
        <Txt x={444} y={14} anchor="end" muted size={10.5}>
          back: throat →
        </Txt>
        <path d={smooth(places.map((p) => [p.x, p.y]))} fill="none" className="stroke-muted" strokeWidth={3} strokeLinecap="round" opacity={0.5} />
        {places.map((p, i) => {
          const row = i % 2 === 0 ? 178 : 200;
          return (
            <g key={p.name}>
              <Line a={[p.x, p.y + 7]} b={[p.x, row - 14]} tone={p.tone} dashed width={1.2} />
              <circle cx={p.x} cy={p.y} r={6.5} className={cn(TONE[p.tone].solid, "stroke-surface")} strokeWidth={2} />
              <Txt x={p.x} y={p.y - (i % 2 === 0 ? 14 : 42)} tone={p.tone} bold size={10.5}>
                {p.name}
              </Txt>
              <Txt x={p.x} y={row} bold size={13}>
                {p.sounds}
              </Txt>
            </g>
          );
        })}
      </Svg>
      <Legend>
        <span>
          PYQ: near, dear, tear start at the <span className="font-semibold text-teal">alveolar</span> ridge; gear starts at the{" "}
          <span className="font-semibold text-purple">velar</span> (back), so it is the odd one out.
        </span>
      </Legend>
    </>
  );
}

function LinkingGlides() {
  const rows: { a: string; b: string; glide: string; after: string; tone: Tone }[] = [
    { a: "go", b: "out", glide: "w", after: "after rounded lips: u, uu, ou, au", tone: "green" },
    { a: "she", b: "offered", glide: "y", after: "after spread lips: i, ii, ei, ai, oi", tone: "blue" },
  ];
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.glide}>
          <div className="flex flex-wrap items-center gap-2">
            <Chip>
              {r.a} ‿ {r.b}
            </Chip>
            <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
            <Chip tone={r.tone}>
              {r.a}
              <span className={cn("mx-0.5 rounded px-1 font-bold text-bg", TONE[r.tone].dot)}>{r.glide}</span>
              {r.b}
            </Chip>
          </div>
          <p className="mt-1 text-[0.85em] text-muted">
            <span className={cn("font-semibold", TONE[r.tone].ink)}>/{r.glide}/ glide</span> {r.after}
          </p>
        </div>
      ))}
    </div>
  );
}

function NounMap() {
  const types: { name: string; eg: string; tone: Tone }[] = [
    { name: "Proper", eg: "Chennai, Raghav", tone: "blue" },
    { name: "Common", eg: "student, book", tone: "teal" },
    { name: "Collective", eg: "team, parliament", tone: "green" },
    { name: "Abstract", eg: "success, youth", tone: "amber" },
    { name: "Material", eg: "gold, wood", tone: "red" },
    { name: "Compound", eg: "swimming pool", tone: "purple" },
    { name: "Uncountable", eg: "advice, luggage", tone: "blue" },
  ];
  const [cx, cy] = [210, 130];
  return (
    <Svg w={420} h={262}>
      {types.map((t, k) => {
        const a = -Math.PI / 2 + (k * 2 * Math.PI) / types.length;
        const [x, y] = [cx + 150 * Math.cos(a), cy + 98 * Math.sin(a)];
        return (
          <g key={t.name}>
            <Line a={[cx, cy]} b={[x, y]} tone={t.tone} width={1.5} />
            <rect x={x - 56} y={y - 19} width={112} height={38} rx={19} className={cn("fill-surface", TONE[t.tone].stroke)} strokeWidth={1.8} />
            <rect x={x - 56} y={y - 19} width={112} height={38} rx={19} className={TONE[t.tone].soft} />
            <Txt x={x} y={y - 2} tone={t.tone} bold size={11.5}>
              {t.name}
            </Txt>
            <Txt x={x} y={y + 12} muted size={9.5}>
              {t.eg}
            </Txt>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={32} className="fill-fg" />
      <Txt x={cx} y={cy + 5} bold size={13.5} inverse>
        Nouns
      </Txt>
    </Svg>
  );
}

function TenseTimeline() {
  const now = 300;
  return (
    <Svg w={460} h={198}>
      <Arrow p={[[20, 110], [446, 110]]} muted width={2} head={8} />
      <Txt x={20} y={128} anchor="start" muted size={10.5}>
        past
      </Txt>
      <Txt x={444} y={128} anchor="end" muted size={10.5}>
        future
      </Txt>
      <Line a={[now, 94]} b={[now, 124]} tone="red" width={2.5} />
      <Txt x={now} y={140} tone="red" bold size={11.5}>
        now
      </Txt>
      <Line a={[110, 80]} b={[110, 104]} tone="blue" dashed />
      <Dot x={110} y={110} tone="blue" r={6} />
      <Txt x={110} y={42} tone="blue" bold size={11.5}>
        Past simple
      </Txt>
      <Txt x={110} y={58} muted size={10.5}>
        yesterday · ago
      </Txt>
      <Txt x={110} y={72} muted size={10.5}>
        last year · in 2010
      </Txt>
      <Dot x={182} y={92} tone="purple" r={4} />
      <Arrow p={[[182, 92], [now - 4, 92]]} tone="purple" width={2.5} />
      <Txt x={240} y={66} tone="purple" bold size={11.5}>
        Present perfect
      </Txt>
      <Txt x={240} y={81} muted size={10.5}>
        since · for · already · yet
      </Txt>
      <Arrow p={[[now + 4, 92], [398, 92]]} tone="amber" width={2.5} dashed />
      <Dot x={400} y={110} tone="amber" r={6} />
      <Txt x={398} y={42} tone="amber" bold size={11.5}>
        Future perfect
      </Txt>
      <Txt x={398} y={58} muted size={10.5}>
        by next June
      </Txt>
      <Txt x={now} y={158} tone="green" size={10.5} bold>
        Present continuous: now, at the moment
      </Txt>
      {[200, 240, 280, 320, 360, 400, 440].map((x) => (
        <Dot key={x} x={x} y={182} tone="teal" r={3.2} />
      ))}
      <Txt x={188} y={178} anchor="end" tone="teal" bold size={10.5}>
        Present simple (habit)
      </Txt>
      <Txt x={188} y={192} anchor="end" muted size={10}>
        every day · usually
      </Txt>
    </Svg>
  );
}

/** Example phrase with the modifier in colour. */
function Example({ y, eg, tone, boldFirst }: { y: number; eg: [string, string]; tone: Tone; boldFirst: boolean }) {
  const hot = cn(TONE[tone].text, "font-bold");
  return (
    <Txt x={306} y={y} anchor="start" size={12}>
      <tspan className={boldFirst ? hot : undefined}>{eg[0]}</tspan>
      <tspan className={boldFirst ? undefined : hot}>{eg[1]}</tspan>
    </Txt>
  );
}

function Modifies() {
  const targets: { y: number; word: string; eg: [string, string] }[] = [
    { y: 90, word: "verb", eg: ["walk ", "carefully"] },
    { y: 136, word: "adjective", eg: ["very", " happy"] },
    { y: 182, word: "adverb", eg: ["quite", " clearly"] },
  ];
  return (
    <Svg w={440} h={226}>
      <Box x={8} y={28} w={118} h={36} tone="blue" title="Adjective" />
      <Arrow p={[[126, 46], [196, 46]]} tone="blue" />
      <Box x={196} y={28} w={100} h={36} title="noun" size={11.5} />
      <Example y={50} eg={["ripe", " tomatoes"]} tone="blue" boldFirst />
      <Box x={8} y={136} w={118} h={36} tone="green" title="Adverb" />
      {targets.map((t) => (
        <g key={t.word}>
          <Arrow p={[[126, 154], [196, t.y + 18]]} tone="green" />
          <Box x={196} y={t.y} w={100} h={36} title={t.word} size={11.5} />
          <Example y={t.y + 22} eg={t.eg} tone="green" boldFirst={t.word !== "verb"} />
        </g>
      ))}
    </Svg>
  );
}

function ArticlePicker() {
  return (
    <Svg w={460} h={262}>
      <Box x={6} y={8} w={210} h={52} title="Specific, unique, a superlative," sub={["or a river / mountain range?"]} size={11} />
      <Arrow p={[[216, 34], [262, 34]]} muted />
      <Txt x={239} y={28} muted size={10.5}>
        yes
      </Txt>
      <Box x={262} y={8} w={192} h={52} tone="purple" title="the" sub={["the Sun · the best · the Ganga"]} size={12} />
      <Arrow p={[[111, 60], [111, 96]]} muted />
      <Txt x={118} y={82} anchor="start" muted size={10.5}>
        no
      </Txt>
      <Box x={6} y={96} w={210} h={48} title="Any one of many?" sub={["(singular, countable)"]} size={11} />
      <Arrow p={[[216, 120], [262, 120]]} muted />
      <Txt x={239} y={114} muted size={10.5}>
        yes
      </Txt>
      <Box x={262} y={96} w={192} h={48} title="Starts with a vowel sound?" size={11} />
      <Arrow p={[[111, 144], [111, 190]]} muted />
      <Txt x={118} y={170} anchor="start" muted size={10.5}>
        no
      </Txt>
      <Box x={6} y={190} w={210} h={58} tone="amber" title="No article" sub={["India · English · cricket", "breakfast · Mount Everest"]} size={11.5} />
      <Arrow p={[[310, 144], [310, 190]]} tone="green" />
      <Txt x={304} y={170} anchor="end" tone="green" size={10.5}>
        yes
      </Txt>
      <Arrow p={[[406, 144], [406, 190]]} tone="blue" />
      <Txt x={412} y={170} anchor="start" tone="blue" size={10.5}>
        no
      </Txt>
      <Box x={262} y={190} w={92} h={58} tone="green" title="an" sub={["an hour", "an MBA"]} size={12} />
      <Box x={362} y={190} w={92} h={58} tone="blue" title="a" sub={["a university", "a laptop"]} size={12} />
    </Svg>
  );
}

function AtOnIn() {
  const [cx, top, apex, hw0] = [180, 10, 200, 170];
  const hw = (y: number) => (hw0 * (apex - y)) / (apex - top);
  const band = (y0: number, y1: number): Pt[] => [
    [cx - hw(y0), y0],
    [cx + hw(y0), y0],
    [cx + hw(y1), y1],
    [cx - hw(y1), y1],
  ];
  return (
    <Svg w={400} h={208}>
      <polygon points={pts(band(10, 75))} className="fill-blue/20 stroke-blue" strokeWidth={1.5} strokeLinejoin="round" />
      <polygon points={pts(band(75, 140))} className="fill-green/20 stroke-green" strokeWidth={1.5} strokeLinejoin="round" />
      <polygon points={pts([...band(140, 200).slice(0, 3)])} className="fill-amber/25 stroke-amber" strokeWidth={1.5} strokeLinejoin="round" />
      <Txt x={cx} y={38} tone="blue" bold size={19}>
        IN
      </Txt>
      <Txt x={cx} y={60} size={11}>
        May · 2024 · the morning · the fridge
      </Txt>
      <Txt x={cx} y={104} tone="green" bold size={18}>
        ON
      </Txt>
      <Txt x={cx} y={124} size={10.5}>
        Monday · 5 May · the table
      </Txt>
      <Txt x={cx} y={168} tone="amber" bold size={15}>
        AT
      </Txt>
      <Line a={[cx + 26, 164]} b={[cx + 44, 164]} tone="amber" />
      <Txt x={cx + 50} y={168} anchor="start" size={11}>
        5 pm · night · the station
      </Txt>
      <Txt x={cx + hw(40) + 6} y={44} anchor="start" muted size={10}>
        long spans
      </Txt>
      <Txt x={cx + hw(108) + 6} y={112} anchor="start" muted size={10}>
        days, surfaces
      </Txt>
      <Txt x={cx + 50} y={184} anchor="start" muted size={10}>
        one exact point
      </Txt>
    </Svg>
  );
}

function SeparableTest() {
  const rows: { verb: string; particle: string; ok: boolean }[] = [
    { verb: "sum", particle: "up", ok: true },
    { verb: "take", particle: "after", ok: false },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r) => {
        const tone: Tone = r.ok ? "green" : "red";
        return (
          <div key={r.verb} className="flex flex-wrap items-center gap-2">
            <Chip>{r.verb}</Chip>
            <Chip tone={tone} className={cn("font-bold", TONE[tone].ink, !r.ok && "line-through")}>
              it
            </Chip>
            <Chip>{r.particle}</Chip>
            <span className={cn("inline-flex items-center gap-1 text-[0.88em] font-semibold", TONE[tone].ink)}>
              {r.ok ? <Check className="size-4" aria-hidden /> : <X className="size-4" aria-hidden />}
              {r.ok ? "separable: 'it' fits in the middle" : "inseparable: 'take after it'"}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────── Registry ───────────── */

const DIAGRAMS: Record<string, () => ReactNode> = {
  // Maths I
  "number-systems": NumberSystems,
  "venn-three": VennThree,
  "relation-properties": RelationProps,
  "function-types": FunctionTypes,
  quadrants: Quadrants,
  slopes: Slopes,
  residuals: Residuals,
  parabolas: Parabolas,
  discriminant: Discriminant,
  "factor-theorem": FactorFlow,
  "end-behaviour": EndBehaviour,
  "polynomial-example": PolyExample,
  // Statistics I
  "population-sample": PopulationSample,
  "cross-vs-time": CrossTime,
  "scales-tree": ScalesTree,
  "pie-pareto": PiePareto,
  "skew-shapes": SkewShapes,
  "mean-outlier": MeanOutlier,
  "shift-stretch": ShiftStretch,
  "box-plot": BoxPlot,
  contingency: Contingency,
  "covariance-quadrants": CovQuadrants,
  "correlation-panels": Correlation,
  "point-biserial": PointBiserial,
  // Computational Thinking
  "scores-card": ScoresCard,
  "iterator-flowchart": IteratorFlow,
  "and-or": AndOr,
  "max-trace": MaxTrace,
  "procedure-call": ProcedureCall,
  "slab-bill": SlabBill,
  "two-passes": TwoPasses,
  "pairs-grid": PairsGrid,
  binning: Binning,
  "trace-map": TraceMap,
  // English I
  "vowel-chart": VowelChart,
  "diphthong-glides": DiphthongGlides,
  "places-of-articulation": PlacesOfArticulation,
  "linking-glides": LinkingGlides,
  "noun-map": NounMap,
  "tense-timeline": TenseTimeline,
  modifies: Modifies,
  "article-picker": ArticlePicker,
  "at-on-in": AtOnIn,
  "separable-test": SeparableTest,
};

export function CheatDiagram({ id, label }: { id: string; label: string }) {
  const Diagram = DIAGRAMS[id];
  if (!Diagram) throw new Error(`Unknown cheat-notes diagram "${id}"`);
  return (
    <div role="group" aria-label={label}>
      <Diagram />
    </div>
  );
}
