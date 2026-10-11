"use client";

// Floating scientific calculator for the exam portal, laid out like the TCS iON
// one in the IITM BS / GATE exams: a draggable window with a blue title bar,
// expression + result boxes and the same 11-column keypad. The maths lives in
// lib/calculator.ts.

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Minus, Square, X } from "lucide-react";
import { CALC_START, expressionText, press, type CalcState } from "@/lib/calculator";
import { cn } from "@/lib/utils";

type Key = { id: string; label: React.ReactNode; name?: string; tone?: "red" | "green"; wide?: boolean };

const inv = (f: string) => (
  <>
    {f}
    <sup className="text-[0.75em]">-1</sup>
  </>
);
const digit = (d: string): Key => ({ id: d, label: d });

// Rows 2–6 of the keypad, in reading order; "=" spans two rows and ← and 0 two columns.
const KEYS: Key[] = [
  { id: "sinh", label: "sinh" },
  { id: "cosh", label: "cosh" },
  { id: "tanh", label: "tanh" },
  { id: "EE", label: "Exp", name: "Exponent, times ten to the power" },
  { id: "(", label: "(" },
  { id: ")", label: ")" },
  { id: "back", label: <ArrowLeft className="size-5" strokeWidth={2.5} aria-hidden />, name: "Backspace", tone: "red", wide: true },
  { id: "C", label: "C", name: "Clear", tone: "red" },
  { id: "+/-", label: "+/-", name: "Change sign", tone: "red" },
  { id: "sqrt", label: "√", name: "Square root" },

  { id: "asinh", label: inv("sinh") },
  { id: "acosh", label: inv("cosh") },
  { id: "atanh", label: inv("tanh") },
  { id: "log2", label: <>log<sub className="text-[0.75em]">2</sub>x</>, name: "Log base 2" },
  { id: "ln", label: "ln" },
  { id: "log", label: "log" },
  digit("7"),
  digit("8"),
  digit("9"),
  { id: "/", label: "/", name: "Divide" },
  { id: "pct", label: "%", name: "Percent" },

  { id: "pi", label: "π", name: "Pi" },
  { id: "e", label: "e", name: "Euler's number" },
  { id: "fact", label: "n!", name: "Factorial" },
  { id: "logy", label: <>log<sub className="text-[0.75em]">y</sub>x</>, name: "Log base y of x" },
  { id: "exp", label: <>e<sup className="text-[0.75em]">x</sup></>, name: "e to the power x" },
  { id: "pow10", label: <>10<sup className="text-[0.75em]">x</sup></>, name: "10 to the power x" },
  digit("4"),
  digit("5"),
  digit("6"),
  { id: "*", label: "*", name: "Multiply" },
  { id: "inv", label: "1/x", name: "Reciprocal" },

  { id: "sin", label: "sin" },
  { id: "cos", label: "cos" },
  { id: "tan", label: "tan" },
  { id: "pow", label: <>x<sup className="text-[0.75em]">y</sup></>, name: "x to the power y" },
  { id: "cube", label: <>x<sup className="text-[0.75em]">3</sup></>, name: "Cube" },
  { id: "sq", label: <>x<sup className="text-[0.75em]">2</sup></>, name: "Square" },
  digit("1"),
  digit("2"),
  digit("3"),
  { id: "-", label: "-", name: "Minus" },
  { id: "=", label: "=", name: "Equals", tone: "green" },

  { id: "asin", label: inv("sin") },
  { id: "acos", label: inv("cos") },
  { id: "atan", label: inv("tan") },
  { id: "yroot", label: <><sup className="text-[0.75em]">y</sup>√x</>, name: "y-th root of x" },
  { id: "cbrt", label: <><sup className="text-[0.75em]">3</sup>√</>, name: "Cube root" },
  { id: "abs", label: "|x|", name: "Absolute value" },
  { id: "0", label: "0", wide: true },
  digit("."),
  { id: "+", label: "+", name: "Plus" },
];

const MEMORY_KEYS = [
  { id: "MC", name: "Memory clear" },
  { id: "MR", name: "Memory recall" },
  { id: "MS", name: "Memory store" },
  { id: "M+", name: "Memory add" },
  { id: "M-", name: "Memory subtract" },
];

/** Physical keyboard → key id, when focus is inside the calculator. */
const KEYBOARD: Record<string, string> = {
  Enter: "=",
  "=": "=",
  Backspace: "back",
  Escape: "C",
  Delete: "C",
  "^": "pow",
  "%": "pct",
  ...Object.fromEntries([..."0123456789.+-*/()"].map((k) => [k, k])),
};

const TONE = {
  plain: "border-[#b3b3b3] bg-gradient-to-b from-white to-[#e2e2e2] text-[#222] hover:from-[#f3f3f3] hover:to-[#d4d4d4]",
  red: "border-[#c0392b] bg-gradient-to-b from-[#e8675d] to-[#d24339] text-white hover:brightness-95",
  green: "border-[#5aa84f] bg-gradient-to-b from-[#8bd47f] to-[#68c05b] text-white hover:brightness-95",
};

/** The raised, bevelled button look; sizing is separate because `cn` doesn't merge conflicting utilities. */
const keyClass = (tone: keyof typeof TONE = "plain") =>
  cn(
    "rounded-[3px] border font-semibold shadow-[0_1px_1px_rgb(0_0_0/0.18)] focus-visible:outline-[#4f86e6] active:translate-y-px active:shadow-none",
    TONE[tone],
  );

const KEY_SIZE = "grid h-[30px] min-w-0 place-items-center whitespace-nowrap text-[10px] leading-none tracking-tight sm:text-[12px] sm:tracking-normal";

const WIDTH = 480;
const BLUE = "#4f86e6";

type Pos = { x: number; y: number };

/** Keeps the title bar on screen so the window can always be dragged back. */
function clampPos(p: Pos, el: HTMLElement | null): Pos {
  const w = el?.offsetWidth ?? WIDTH;
  return { x: Math.max(8, Math.min(p.x, innerWidth - w - 8)), y: Math.max(8, Math.min(p.y, innerHeight - 48)) };
}

export function ScientificCalculator({ onClose }: { onClose: () => void }) {
  const [state, setState] = useState<CalcState>(CALC_START);
  const [deg, setDeg] = useState(true);
  const [memory, setMemory] = useState(0);
  const [minimised, setMinimised] = useState(false);
  const [help, setHelp] = useState(false);
  // Opens beside the question palette on desktop, centred under the header elsewhere.
  const [pos, setPos] = useState<Pos>(() => {
    const w = Math.min(WIDTH, innerWidth - 16);
    return { x: innerWidth >= 1024 ? innerWidth - 320 - w - 16 : (innerWidth - w) / 2, y: 112 };
  });
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);

  useEffect(() => {
    box.current?.focus();
    const onResize = () => setPos((p) => clampPos(p, box.current));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const key = (id: string) => {
    if (id === "MC") return setMemory(0);
    if (id === "MS" || id === "M+" || id === "M-") {
      const v = Number(state.display);
      if (Number.isFinite(v)) setMemory((m) => (id === "MS" ? v : id === "M+" ? m + v : m - v));
      return;
    }
    setState((s) => press(s, id, deg, memory));
  };

  return (
    <div
      ref={box}
      role="dialog"
      aria-label="Scientific calculator"
      tabIndex={-1}
      onKeyDown={(e) => {
        const id = KEYBOARD[e.key];
        if (!id || e.metaKey || e.ctrlKey || e.altKey || minimised || help) return;
        e.preventDefault();
        key(id);
      }}
      style={{ left: pos.x, top: pos.y }}
      className="fixed z-30 w-[min(480px,calc(100vw-16px))] select-none overflow-hidden rounded-[4px] border border-[#a9a9a9] bg-[#dedede] text-[#222] shadow-[0_10px_40px_rgb(0_0_0/0.3)] outline-none"
    >
      <div
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("button")) return;
          drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => drag.current && setPos(clampPos({ x: e.clientX - drag.current.dx, y: e.clientY - drag.current.dy }, box.current))}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
        style={{ background: BLUE }}
        className="flex h-10 cursor-move touch-none items-center gap-1 pl-3 pr-1.5 text-white"
      >
        <p className="flex-1 truncate text-[15px] font-semibold">Scientific Calculator</p>
        <button
          type="button"
          onClick={() => {
            setHelp((h) => !h);
            setMinimised(false);
          }}
          aria-pressed={help}
          className={cn("mr-2 h-7 rounded-[3px] px-3.5 text-[13px] font-semibold hover:bg-[#8cbaf8]", help ? "bg-[#8cbaf8]" : "bg-[#74a8f4]")}
        >
          Help
        </button>
        <button
          type="button"
          onClick={() => setMinimised((m) => !m)}
          aria-label={minimised ? "Restore calculator" : "Minimise calculator"}
          className="grid size-8 place-items-center rounded-[3px] hover:bg-white/15"
        >
          {minimised ? <Square className="size-4" strokeWidth={2.5} aria-hidden /> : <Minus className="size-5" strokeWidth={3} aria-hidden />}
        </button>
        <button type="button" onClick={onClose} aria-label="Close calculator" className="grid size-8 place-items-center rounded-[3px] hover:bg-white/15">
          <X className="size-5" strokeWidth={3} aria-hidden />
        </button>
      </div>

      {!minimised && (
        <div className="p-2 sm:p-3">
          {/* Expression; overflow is clipped on the left so the end of a long expression stays visible. */}
          <div className="flex h-9 items-center justify-end overflow-hidden rounded-[3px] border border-[#b5b5b5] bg-white px-2.5 text-[15px] shadow-[inset_0_1px_2px_rgb(0_0_0/0.12)]">
            <span className="whitespace-nowrap">{expressionText(state.tokens)}</span>
          </div>
          <div className="mt-2 flex h-10 items-center gap-2 rounded-[3px] border border-[#b5b5b5] bg-white px-2.5 shadow-[inset_0_1px_2px_rgb(0_0_0/0.12)]">
            <span className="w-3 text-[11px] font-bold text-[#888]" title={memory !== 0 ? `Memory: ${memory}` : undefined}>
              {memory !== 0 && "M"}
            </span>
            <output aria-live="polite" className="min-w-0 flex-1 truncate text-right text-[22px] font-medium tabular-nums">
              {state.display}
            </output>
          </div>

          {help ? (
            <div className="mt-2.5 h-[218px] overflow-y-auto rounded-[3px] border border-[#b5b5b5] bg-white p-3 text-[13px] leading-relaxed select-text">
              <ul className="list-disc space-y-1.5 pl-4">
                <li>Type a number, then press a function key (sin, log, x², n!, …) to apply it to that number, or to the bracket you just closed.</li>
                <li>
                  x<sup>y</sup>, <sup>y</sup>√x, log<sub>y</sub>x and mod go between two numbers: 2 x<sup>y</sup> 10 = 1024, 27 <sup>y</sup>√x 3 = 3,
                  8 log<sub>y</sub>x 2 = 3, 10 mod 3 = 1.
                </li>
                <li>Deg / Rad sets the angle unit for sin, cos, tan and their inverses.</li>
                <li>Exp enters powers of ten: 2.5 Exp 3 = 2500. +/- after Exp makes the power negative.</li>
                <li>MS stores the number on display, M+ and M- add it to or subtract it from memory, MR recalls it and MC clears it.</li>
                <li>Keyboard: digits, + - * / ^ ( ) %, Enter for =, Backspace, and Esc to clear.</li>
              </ul>
              <button type="button" onClick={() => setHelp(false)} className={cn(keyClass(), "mt-3 h-8 px-4 text-[13px]")}>
                Back to calculator
              </button>
            </div>
          ) : (
            <div className="mt-2.5 grid grid-cols-11 gap-x-1 gap-y-[7px] sm:gap-x-1.5">
              <button type="button" onClick={() => key("mod")} aria-label="Modulo" className={cn(keyClass(), KEY_SIZE)}>
                mod
              </button>
              <div role="radiogroup" aria-label="Angle unit" className="col-span-4 flex items-center gap-2 pl-1 text-[10px] font-medium sm:gap-3 sm:text-xs">
                {(["Deg", "Rad"] as const).map((u) => (
                  <label key={u} className="flex cursor-pointer items-center gap-1">
                    <input type="radio" name="calc-angle" checked={deg === (u === "Deg")} onChange={() => setDeg(u === "Deg")} className="size-3.5 accent-[#4f86e6]" />
                    {u}
                  </label>
                ))}
              </div>
              {MEMORY_KEYS.map((m, i) => (
                <button key={m.id} type="button" onClick={() => key(m.id)} aria-label={m.name} className={cn(keyClass(), KEY_SIZE, i === 0 && "col-start-7")}>
                  {m.id}
                </button>
              ))}
              {KEYS.map((k) => (
                <button
                  key={k.id}
                  type="button"
                  onClick={() => key(k.id)}
                  aria-label={k.name}
                  className={cn(keyClass(k.tone), k.id === "=" ? "row-span-2 grid place-items-center text-2xl" : KEY_SIZE, k.wide && "col-span-2")}
                >
                  <span>{k.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
