"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * "Chalkboard" backdrop for the landing page: sketches of the maths, stats,
 * economics and code in the program.
 *
 * variant="hero": the full board in three parallax layers.
 * variant="page": the same animated layers with far fewer items, for the sections below.
 *
 * - Scroll: layers move at different speeds; near symbols spin.
 * - Mouse: layers tilt toward the cursor and a soft glow follows it.
 * - Idle: near symbols float.
 *
 * Drawn with currentColor (fg) and --math-accent, so it follows light/dark theme.
 */

const mathFont: CSSProperties = { fontFamily: '"Cambria Math", "Times New Roman", serif', fontStyle: "italic" };
const accent = "var(--math-accent)";

/* ───────── Sketches ───────── */

const svgProps = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Bell() {
  return (
    <svg viewBox="0 0 300 190" {...svgProps}>
      <path d="M10 160 H290 M30 175 V10" />
      <path d="M30 155 C95 155 115 25 160 25 C205 25 225 155 290 155" stroke={accent} strokeWidth="2.4" />
      <path d="M120 155 V65 M200 155 V65" strokeDasharray="4 5" />
      <path d="M160 155 V25" strokeDasharray="2 4" />
      <g fill="currentColor" stroke="none" fontSize="16" style={mathFont}>
        <text x="154" y="182">μ</text>
        <text x="108" y="182">−σ</text>
        <text x="190" y="182">+σ</text>
      </g>
    </svg>
  );
}

function Regression() {
  return (
    <svg viewBox="0 0 300 210" {...svgProps}>
      <path d="M10 180 H290 M20 190 V20" />
      <path d="M30 165 L285 40" stroke={accent} strokeWidth="2.4" />
      <g fill="currentColor" stroke="none">
        {[[45, 150], [70, 162], [92, 135], [118, 140], [140, 112], [162, 122], [188, 92], [210, 100], [236, 72], [258, 78], [278, 52]].map(
          ([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="4" />,
        )}
      </g>
      <text x="40" y="22" fontSize="18" fill="currentColor" stroke="none" style={mathFont}>
        ŷ = β₀ + β₁x
      </text>
    </svg>
  );
}

function Histogram() {
  return (
    <svg viewBox="0 0 280 160" {...svgProps}>
      <path d="M5 150 H275 M15 158 V10" />
      {[[30, 110], [64, 70], [98, 30], [132, 50], [166, 90], [200, 120], [234, 135]].map(([x, y]) => (
        <rect key={x} x={x} y={y} width="34" height={150 - y} />
      ))}
      <path d="M30 120 C80 60 100 25 120 28 S190 100 268 140" stroke={accent} strokeWidth="2" />
    </svg>
  );
}

function Tree() {
  const nodes = [[60, 12], [25, 55], [95, 55], [8, 95], [45, 95], [80, 95], [112, 95]];
  return (
    <svg viewBox="0 0 120 105" {...svgProps}>
      <path d="M60 12 L25 55 M60 12 L95 55 M25 55 L8 95 M25 55 L45 95 M95 55 L80 95 M95 55 L112 95" />
      <g fill={accent} stroke="none">
        {nodes.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />)}
      </g>
    </svg>
  );
}

function SineWave() {
  return (
    <svg viewBox="0 0 320 120" {...svgProps}>
      <path d="M5 60 H315 M20 115 V5" />
      <path d="M20 60 C45 5 70 5 95 60 S145 115 170 60 S220 5 245 60 S295 115 315 60" stroke={accent} strokeWidth="2" />
      <path d="M20 60 C45 115 70 115 95 60 S145 5 170 60 S220 115 245 60 S295 5 315 60" strokeDasharray="3 5" />
    </svg>
  );
}

function Matrix() {
  return (
    <svg viewBox="0 0 170 90" {...svgProps}>
      <path d="M14 5 h-8 v80 h8 M156 5 h8 v80 h-8" />
      <g fill="currentColor" stroke="none" fontSize="20" style={mathFont}>
        <text x="22" y="37">a₁₁  a₁₂  a₁₃</text>
        <text x="22" y="70">a₂₁  a₂₂  a₂₃</text>
      </g>
    </svg>
  );
}

function Venn() {
  return (
    <svg viewBox="0 0 220 150" {...svgProps}>
      <rect x="4" y="4" width="212" height="142" rx="6" strokeDasharray="4 5" />
      <circle cx="85" cy="75" r="48" />
      <circle cx="135" cy="75" r="48" stroke={accent} strokeWidth="2.2" />
      <g fill="currentColor" stroke="none" fontSize="20" style={mathFont}>
        <text x="55" y="80">A</text>
        <text x="152" y="80">B</text>
        <text x="96" y="82" fontSize="14">A∩B</text>
      </g>
    </svg>
  );
}

function SupplyDemand() {
  return (
    <svg viewBox="0 0 220 190" {...svgProps}>
      <path d="M20 10 V170 H210" />
      <path d="M35 30 L195 160" />
      <path d="M35 160 L195 30" stroke={accent} strokeWidth="2.2" />
      <path d="M115 95 V170 M20 95 H115" strokeDasharray="3 5" />
      <g fill="currentColor" stroke="none" fontSize="16" style={mathFont}>
        <text x="198" y="172">D</text>
        <text x="198" y="32">S</text>
        <text x="4" y="100">P*</text>
        <text x="108" y="186">Q*</text>
      </g>
    </svg>
  );
}

function UnitCircle() {
  return (
    <svg viewBox="0 0 200 200" {...svgProps}>
      <path d="M10 100 H190 M100 10 V190" />
      <circle cx="100" cy="100" r="70" />
      <path d="M100 100 L160 64" stroke={accent} strokeWidth="2.2" />
      <path d="M160 64 V100" strokeDasharray="3 4" />
      <path d="M125 100 A25 25 0 0 0 121 87" />
      <g fill="currentColor" stroke="none" fontSize="16" style={mathFont}>
        <text x="130" y="94">θ</text>
        <text x="115" y="120">cos θ</text>
        <text x="164" y="88">sin θ</text>
      </g>
    </svg>
  );
}

function Pie() {
  return (
    <svg viewBox="0 0 160 160" {...svgProps}>
      <circle cx="80" cy="80" r="64" />
      <path d="M80 80 V16 M80 80 L141 100 M80 80 L30 120" />
      <path d="M80 80 L80 16 A64 64 0 0 1 141 100 Z" fill={accent} fillOpacity="0.35" stroke={accent} />
    </svg>
  );
}

function Flow() {
  return (
    <svg viewBox="0 0 180 200" {...svgProps}>
      <rect x="50" y="6" width="80" height="30" rx="15" />
      <path d="M90 36 V56" />
      <path d="M90 56 L140 86 L90 116 L40 86 Z" stroke={accent} strokeWidth="2" />
      <path d="M90 116 V136 M140 86 H170 V180 H130" />
      <rect x="50" y="136" width="80" height="30" />
      <g fill="currentColor" stroke="none" fontSize="13" fontFamily="var(--font-mono)">
        <text x="70" y="26">start</text>
        <text x="72" y="91">x&gt;0?</text>
        <text x="64" y="156">x = x−1</text>
      </g>
    </svg>
  );
}

const sketches = [Bell, Regression, Histogram, Venn, SupplyDemand, UnitCircle, SineWave, Matrix, Flow, Pie, Tree];

/* ───────── Text ───────── */

const formulas = [
  "x̄ = (1/n) Σ xᵢ",
  "σ² = E[(X − μ)²]",
  "P(A | B) = P(B | A) P(A) / P(B)",
  "Z = (X − μ) / σ",
  "r = Cov(X, Y) / σₓσᵧ",
  "E[X] = Σ x·p(x)",
  "P(X = k) = ⁿCₖ pᵏ(1 − p)ⁿ⁻ᵏ",
  "χ² = Σ (O − E)² / E",
  "H₀ : μ₁ = μ₂",
  "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
  "x = (−b ± √(b² − 4ac)) / 2a",
  "y = mx + c",
  "d/dx sin x = cos x",
  "∫ eˣ dx = eˣ + C",
  "∫₀¹ f(x) dx",
  "lim (1 + 1/n)ⁿ = e",
  "Σᵢ₌₁ⁿ i = n(n + 1)/2",
  "det A = ad − bc",
  "A⁻¹ = adj(A) / |A|",
  "e^(iπ) + 1 = 0",
  "∇f(x, y)",
  "eˣ = Σ xⁿ / n!",
  "Assets = Liabilities + Equity",
  "GDP = C + I + G + (X − M)",
  "MR = MC",
  "Eₚ = %ΔQ / %ΔP",
  "NPV = Σ Cₜ / (1 + r)ᵗ",
  "ROI = gain / cost",
  "O(n log n)",
  "log₂ n",
];

const code = [
  "import pandas as pd",
  'df.groupby("week").mean()',
  "for i in range(n):",
  "def mean(xs): return sum(xs) / len(xs)",
  "if x % 2 == 0:",
  "sorted(data, key=len)",
  "SELECT avg(score) FROM quiz;",
  "while lo <= hi:",
];

const symbols = ["π", "Σ", "∫", "∂", "√", "∞", "λ", "Δ", "θ", "μ", "σ", "∈", "≈", "∀", "φ", "∃", "β", "Ω"];

/* ───────── Layout ───────── */

// Seeded RNG so server and client render the same layout.
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// spin: total degrees turned from the top to the bottom of the page.
type Item = { x: number; y: number; w?: number; rot: number; spin?: number; float?: { dur: number; delay: number }; node: ReactNode };

/** One item per grid cell, jittered inside the cell, so coverage is even. */
function scatter(seed: number, cols: number, rows: number, fill: number, make: (r: () => number, i: number) => Omit<Item, "x" | "y">) {
  const r = rng(seed);
  const items: Item[] = [];
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++) {
      if (r() > fill) continue;
      const x = ((col + 0.05 + r() * 0.55) / cols) * 100;
      const y = ((row + 0.05 + r() * 0.6) / rows) * 100;
      items.push({ x, y, ...make(r, items.length) });
    }
  return items;
}

type Layer = { speed: number; depth: number; className: string; tone: string; items: Item[] };

const formulaNode = (text: string, size: number) => (
  <span className="whitespace-nowrap" style={{ ...mathFont, fontSize: size }}>
    {text}
  </span>
);

const symbolNode = (c: string, size: number) => (
  <span
    className="block leading-none"
    // text-shadow is painted once; a drop-shadow filter re-renders while animating.
    style={{ ...mathFont, fontSize: size, textShadow: "0 0 14px var(--math-accent)" }}
  >
    {c}
  </span>
);

/* Hero: the full board, three layers. Percentages are of the hero. */
// speed: scroll parallax factor. depth: px of mouse tilt.
// Layers that move with the scroll extend beyond the hero so they never run out.
const heroLayers: Layer[] = [
  {
    speed: 0.45,
    depth: 8,
    className: "-top-[50%] h-[150%] max-md:hidden",
    tone: "opacity-[0.17]",
    items: scatter(7, 4, 6, 0.75, (r, i) => ({
      rot: (r() - 0.5) * 10,
      node:
        i % 4 === 3 ? (
          <span className="font-mono text-[13px] whitespace-nowrap">{code[i % code.length]}</span>
        ) : (
          formulaNode(formulas[(i * 7) % formulas.length], 15 + Math.round(r() * 5))
        ),
    })),
  },
  {
    speed: 0.2,
    depth: 18,
    className: "-top-[25%] h-[125%]",
    tone: "opacity-[0.3]",
    items: scatter(21, 4, 3, 0.8, (r, i) => {
      const Sketch = sketches[i % sketches.length];
      const isFormula = i % 3 === 2;
      return {
        rot: (r() - 0.5) * 14,
        w: isFormula ? undefined : 150 + Math.round(r() * 90),
        node: isFormula ? formulaNode(formulas[(i * 11 + 4) % formulas.length], 22 + Math.round(r() * 6)) : <Sketch />,
      };
    }),
  },
  {
    speed: -0.3,
    depth: 40,
    className: "top-0 h-[140%]",
    tone: "opacity-80 text-[var(--math-accent)]",
    items: scatter(42, 6, 3, 0.5, (r, i) => ({
      rot: (r() - 0.5) * 30,
      spin: (r() < 0.5 ? -1 : 1) * Math.round(90 + r() * 150),
      float: { dur: 5 + r() * 4, delay: -r() * 8 },
      node: symbolNode(symbols[(i * 5) % symbols.length], 34 + Math.round(r() * 30)),
    })),
  },
];

/* Rest of the landing page: the same three animated layers, but far fewer
   items, kept mostly to the side margins so the cards stay clean. */

/** One item per row, alternating left/right margin. */
function edges(seed: number, rows: number, make: (r: () => number, i: number) => Omit<Item, "x" | "y">) {
  const r = rng(seed);
  const items: Item[] = [];
  for (let row = 0; row < rows; row++) {
    const left = (row + seed) % 2 === 0;
    const x = left ? r() * 5 : 88 + r() * 6;
    const y = ((row + 0.15 + r() * 0.5) / rows) * 100;
    items.push({ x, y, ...make(r, row) });
  }
  return items;
}

const pageLayers: Layer[] = [
  {
    speed: 0.45,
    depth: 8,
    className: "-top-[50%] h-[150%] max-md:hidden",
    tone: "opacity-[0.13]",
    items: scatter(8, 5, 9, 0.3, (r, i) => ({
      rot: (r() - 0.5) * 10,
      node: formulaNode(formulas[(i * 13 + 5) % formulas.length], 15 + Math.round(r() * 4)),
    })),
  },
  {
    speed: 0.2,
    depth: 18,
    className: "-top-[25%] h-[125%]",
    tone: "opacity-[0.24]",
    items: edges(22, 6, (r, i) => {
      const Sketch = [Bell, Venn, SupplyDemand, UnitCircle, Regression, Pie][i % 6];
      return { rot: (r() - 0.5) * 14, w: 120 + Math.round(r() * 40), node: <Sketch /> };
    }),
  },
  {
    speed: -0.3,
    depth: 40,
    className: "top-0 h-[140%]",
    tone: "opacity-70 text-[var(--math-accent)]",
    items: edges(43, 8, (r, i) => ({
      rot: (r() - 0.5) * 30,
      spin: (r() < 0.5 ? -1 : 1) * Math.round(90 + r() * 150),
      float: { dur: 5 + r() * 4, delay: -r() * 8 },
      node: symbolNode(symbols[(i * 7 + 3) % symbols.length], 28 + Math.round(r() * 18)),
    })),
  },
];

function LayerItems({ items }: { items: Item[] }) {
  return items.map((it, j) => (
    <div key={j} className="absolute" style={{ left: `${it.x}%`, top: `${it.y}%`, width: it.w, rotate: `${it.rot}deg` }}>
      {it.float ? (
        <div className="math-float" style={{ animationDuration: `${it.float.dur}s`, animationDelay: `${it.float.delay}s` }}>
          <div className="math-spin" style={{ "--spin": `${it.spin ?? 0}deg` } as CSSProperties}>
            {it.node}
          </div>
        </div>
      ) : (
        it.node
      )}
    </div>
  ));
}

/*
 * Performance
 * - Each layer is rasterised once and only moved with transforms (GPU).
 * - Scroll parallax and symbol spin are CSS scroll-driven animations
 *   (globals.css) that run off the main thread; other browsers get a small
 *   rAF fallback for the parallax.
 * - Mouse tilt and glow write a few transforms per frame, only while easing.
 * - Everything pauses while the backdrop is off screen.
 */
export function MathBackground({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const layers = variant === "hero" ? heroLayers : pageLayers;
  const hero = variant === "hero";
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Scroll-driven keyframes need the scroll range in px, and the glow needs the backdrop's page offset.
    let top = 0;
    const measure = () => {
      root.style.setProperty("--max-scroll", `${Math.max(0, document.documentElement.scrollHeight - window.innerHeight)}px`);
      top = root.getBoundingClientRect().top + window.scrollY;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    // Pause floats and pointer work while off screen.
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      root.classList.toggle("math-paused", !visible);
    });
    io.observe(root);

    // Fallback parallax for browsers without scroll-driven animations.
    let scrollFrame = 0;
    const onScroll = () => {
      if (scrollFrame || !visible) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const y = window.scrollY;
        scrollRefs.current.forEach((el, i) => {
          if (el) el.style.transform = `translate3d(0, ${y * layers[i].speed}px, 0)`;
        });
      });
    };
    const cssScroll = CSS.supports("animation-timeline: scroll()");
    if (!cssScroll) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Mouse tilt + glow (desktop only), eased toward the cursor.
    const target = { x: 0, y: 0, cx: 0, cy: 0 };
    const eased = { ...target };
    let clientY = 0;
    let tiltFrame = 0;
    const tick = () => {
      tiltFrame = 0;
      for (const k of ["x", "y", "cx", "cy"] as const) eased[k] += (target[k] - eased[k]) * 0.12;
      tiltRefs.current.forEach((el, i) => {
        const d = layers[i].depth;
        if (el) el.style.transform = `translate3d(${(-eased.x * d).toFixed(1)}px, ${(-eased.y * d).toFixed(1)}px, 0)`;
      });
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${eased.cx.toFixed(0)}px, ${eased.cy.toFixed(0)}px, 0)`;
      const moving =
        Math.abs(target.x - eased.x) + Math.abs(target.y - eased.y) > 0.002 ||
        Math.abs(target.cx - eased.cx) + Math.abs(target.cy - eased.cy) > 0.5;
      if (moving) tiltFrame = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!tiltFrame && visible) tiltFrame = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
      target.cx = e.clientX;
      clientY = e.clientY;
      target.cy = clientY + window.scrollY - top;
      if (glowRef.current) glowRef.current.style.opacity = "1";
      kick();
    };
    // Keep the glow under the cursor while scrolling without moving the mouse.
    const onScrollGlow = () => {
      target.cy = clientY + window.scrollY - top;
      kick();
    };
    const onLeave = () => {
      target.x = target.y = 0;
      if (glowRef.current) glowRef.current.style.opacity = "0";
      kick();
    };
    const pointer = window.matchMedia("(pointer: fine)").matches;
    if (pointer) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("scroll", onScrollGlow, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollGlow);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(tiltFrame);
    };
  }, [layers]);

  return (
    <div ref={rootRef} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-fg select-none">
      {/* Grid fades out toward the bottom of the hero. */}
      {hero && <div className="grid-pattern absolute inset-0 opacity-40 [mask-image:linear-gradient(black_60%,transparent)]" />}
      {/* Accent glow that follows the cursor, moved by transform so it never repaints. */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 -mt-[300px] -ml-[300px] size-[600px] opacity-0 transition-opacity duration-500 will-change-transform bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--math-accent)_16%,transparent),transparent)]"
      />

      {layers.map((layer, i) => (
        <div
          key={i}
          ref={(el) => {
            scrollRefs.current[i] = el;
          }}
          className={`math-layer absolute inset-x-0 ${layer.className}`}
          style={{ "--speed": layer.speed } as CSSProperties}
        >
          <div
            ref={(el) => {
              tiltRefs.current[i] = el;
            }}
            className={`absolute inset-0 will-change-transform max-md:opacity-70 ${layer.tone}`}
          >
            <LayerItems items={layer.items} />
          </div>
        </div>
      ))}
    </div>
  );
}
