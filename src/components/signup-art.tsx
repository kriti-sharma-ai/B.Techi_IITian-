import type { CSSProperties } from "react";
import { Kalam } from "next/font/google";
import { cn } from "@/lib/utils";

/**
 * Sign-up poster art: a study-desk collage on brand yellow. Graph paper with a hand-drawn
 * bell curve, a Quiz 2 flash card, a grade stamp, tape and a pencil. One SVG, so it scales
 * to whatever space the full-screen layout leaves it. Animations live in globals.css.
 */

const kalam = Kalam({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });

const hand: CSSProperties = { fontFamily: "var(--font-hand), cursive" };
const serif: CSSProperties = { fontFamily: '"Cambria Math", "Times New Roman", serif', fontStyle: "italic" };
const sans: CSSProperties = { fontFamily: "var(--font-jakarta), sans-serif" };

const INK = "#0B0B0B";
const YELLOW = "#FFD21C";
const STAMP = "#D23B2E";

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

// Right tail of the curve below, sampled from its Bézier so the hatching sits exactly under it.
const TAIL = "M314 287.5 L326 309 L339.3 326.8 L354.1 339.1 L372 344 V346 H314 Z";

function Sparkle({ x, y, s }: { x: number; y: number; s: number }) {
  const k = s / 4;
  return (
    <path
      transform={`translate(${x} ${y})`}
      d={`M0 ${-s}C${k / 2} ${-k} ${k} ${-k / 2} ${s} 0C${k} ${k / 2} ${k / 2} ${k} 0 ${s}C${-k / 2} ${k} ${-k} ${k / 2} ${-s} 0C${-k} ${-k / 2} ${-k / 2} ${-k} 0 ${-s}Z`}
      fill={INK}
    />
  );
}

export function SignupArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 520" fill="none" aria-hidden className={cn(kalam.variable, "select-none", className)}>
      <defs>
        {/* Shadows take on the yellow surface, so they're warm brown rather than grey. */}
        <filter id="su-lift" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.4" floodColor="#4A3800" floodOpacity="0.25" />
          <feDropShadow dx="0" dy="18" stdDeviation="15" floodColor="#4A3800" floodOpacity="0.3" />
        </filter>
        <filter id="su-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="2.6" />
        </filter>
        {/* Worn rubber-stamp ink: speckled gaps plus a slight wobble. */}
        <filter id="su-stamp" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="9" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.5" result="mask" />
          <feComposite in="SourceGraphic" in2="mask" operator="in" result="inked" />
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="2" result="warp" />
          <feDisplacementMap in="inked" in2="warp" scale="2" />
        </filter>
        <pattern id="su-grid" x="96" y="56" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M15 0H0V15" stroke="#C6D8EA" strokeWidth="0.8" />
        </pattern>
        <pattern id="su-grid-major" x="96" y="56" width="75" height="75" patternUnits="userSpaceOnUse">
          <path d="M75 0H0V75" stroke="#A9C3DD" strokeWidth="1" />
        </pattern>
        <clipPath id="su-tail">
          <path d={TAIL} />
        </clipPath>
      </defs>

      {/* Doodles on the desk */}
      <g filter="url(#su-rough)">
        <Sparkle x={50} y={122} s={13} />
        <Sparkle x={70} y={150} s={6} />
        <Sparkle x={606} y={236} s={9} />
      </g>

      {/* ───── Graph paper ───── */}
      <g transform="rotate(-5 246 246)">
        <g className="art-piece">
          <rect x="96" y="56" width="300" height="380" rx="3" fill="#FFFDF7" filter="url(#su-lift)" />
          <rect x="96" y="56" width="300" height="380" rx="3" fill="url(#su-grid)" />
          <rect x="96" y="56" width="300" height="380" rx="3" fill="url(#su-grid-major)" />

          <text x="124" y="113" fontSize="22" fill={INK} style={hand}>
            Stats I · week 7
          </text>
          <path d="M124 122C170 118 228 120 270 116" stroke={INK} strokeWidth="1.6" strokeLinecap="round" filter="url(#su-rough)" />

          {/* Hand-drawn normal curve with the right tail hatched */}
          <g stroke={INK} strokeLinecap="round" strokeLinejoin="round" filter="url(#su-rough)">
            <path d="M114 346H380" strokeWidth="1.8" />
            <path d="M246 192V346" strokeWidth="1.2" strokeDasharray="3 5" />
            <path d="M206 341V351M286 341V351M326 341V351" strokeWidth="1.6" />
            <g clipPath="url(#su-tail)" strokeWidth="1.3">
              {Array.from({ length: 22 }, (_, i) => (
                <path key={i} d={`M${250 + i * 6} 352l70-70`} />
              ))}
            </g>
            <path
              className="art-draw"
              pathLength={1}
              d="M120 344C180 342 200 186 246 186S312 342 372 344"
              strokeWidth="2.6"
            />
          </g>
          <text x="246" y="371" textAnchor="middle" fontSize="18" fill={INK} style={serif}>
            μ
          </text>
          <text x="326" y="370" textAnchor="middle" fontSize="14" fill={INK} fillOpacity="0.7" style={serif}>
            2σ
          </text>

          <text x="304" y="196" fontSize="17" fill={INK} style={hand}>
            you, after
          </text>
          <text x="320" y="216" fontSize="17" fill={INK} style={hand}>
            PYQs
          </text>
          <path
            d="M350 226C366 252 363 290 347 323M337 314l10 10 5-13"
            stroke={INK}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#su-rough)"
          />

          {/* Highlighter swipe: uneven ends, multiplied into the paper */}
          <path d="M117 393 271 387l3 25-155 4Z" fill={YELLOW} fillOpacity="0.9" filter="url(#su-rough)" style={{ mixBlendMode: "multiply" }} />
          <text x="128" y="407" fontSize="20" fill={INK} style={serif}>
            z = (x − μ) / σ
          </text>
        </g>

        {/* Grade stamp, inked onto the paper */}
        <g transform="rotate(-14 338 118)" style={{ mixBlendMode: "multiply" }}>
          <g className="art-stamp" style={delay(1.5)}>
            <g filter="url(#su-stamp)" fill={STAMP} stroke={STAMP}>
              <circle cx="338" cy="118" r="30" strokeWidth="3.2" fill="none" />
              <circle cx="338" cy="118" r="24.5" strokeWidth="1.2" fill="none" />
              <text x="338" y="128" textAnchor="middle" fontSize="29" fontWeight="800" stroke="none" style={sans}>
                S
              </text>
              <text x="338" y="139" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="1.6" stroke="none" style={sans}>
                GRADE
              </text>
            </g>
          </g>
        </g>

        {/* Tape over the top-left corner */}
        <g transform="translate(100 64) rotate(-38)">
          <g className="art-piece" style={delay(0.35)}>
            <path
              d="M-54-14H54l-4 4.7 4 4.7-4 4.6 4 4.7-4 4.6 4 4.7H-54l4-4.7-4-4.6 4-4.7-4-4.6 4-4.7Z"
              fill="#FFFFFF"
              fillOpacity="0.62"
            />
          </g>
        </g>
      </g>

      {/* ───── Pencil ───── */}
      <g transform="translate(46 494) rotate(-12)">
        <g className="art-piece" style={delay(0.28)}>
          <g filter="url(#su-lift)">
            <rect x="0" y="-7.5" width="20" height="15" rx="3.5" fill="#F09AA4" />
            <rect x="18" y="-7.5" width="20" height="15" fill="#C3C9D0" />
            <rect x="38" y="-7.5" width="176" height="15" fill="#141414" />
            <path d="M214-7.5 242-2.2V2.2L214 7.5Z" fill="#E7C59A" />
            <path d="M242-2.2 253 0 242 2.2Z" fill="#2A2A2A" />
          </g>
          <path d="M22-7.5V7.5M26.5-7.5V7.5M31-7.5V7.5M35.5-7.5V7.5" stroke="#9AA1A9" strokeWidth="0.9" />
          <rect x="38" y="-7.5" width="176" height="4" fill="#2A2A2A" />
          <path d="M214-7.5Q219.5-5 214-2.5 219.5 0 214 2.5 219.5 5 214 7.5Z" fill="#141414" />
          <text x="58" y="3.4" fontSize="7" fontWeight="700" letterSpacing="1.8" fill={YELLOW} style={sans}>
            BTECHI · HB
          </text>
        </g>
      </g>

      {/* ───── Flash card ───── */}
      <g transform="translate(500 392) rotate(7)">
        <g className="art-piece" style={delay(0.16)}>
          <rect x="-116" y="-75" width="232" height="150" rx="12" fill="#0E0E0E" filter="url(#su-lift)" />
          <text x="-96" y="-42" fontSize="10.5" fontWeight="700" letterSpacing="1.6" fill={YELLOW} style={sans}>
            QUIZ 2 · MATHS I
          </text>
          <text x="-96" y="-10" fontSize="25" fontWeight="800" letterSpacing="-0.5" fill="#FFFFFF" style={sans}>
            Week 7 of 12
          </text>
          {Array.from({ length: 12 }, (_, i) =>
            i === 7 ? (
              <rect key={i} x={-95.25 + i * 16} y="10.75" width="9.5" height="9.5" rx="2.5" stroke={YELLOW} strokeWidth="1.5" />
            ) : (
              <rect key={i} x={-96 + i * 16} y="10" width="11" height="11" rx="3" fill={i < 7 ? YELLOW : "#2B2B2B"} />
            ),
          )}
          <text x="-96" y="52" fontSize="11" fill="#9A9A9A" style={sans}>
            5 weeks to the end term
          </text>

          {/* Paper clip over the top edge */}
          <g transform="translate(64 -98)" strokeLinecap="round" fill="none">
            <path d="M7 20V52A5 5 0 0 0 17 52V9A8 8 0 0 0 1 9V46" stroke="#868D96" strokeWidth="2.8" />
            <path d="M7 20V52A5 5 0 0 0 17 52V9A8 8 0 0 0 1 9V46" stroke="#E4E8EC" strokeWidth="0.9" transform="translate(-0.5 -0.6)" />
          </g>
        </g>
      </g>
    </svg>
  );
}
