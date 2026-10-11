// Scientific calculator logic for the exam portal, modelled on the TCS iON
// on-screen calculator used in the IITM BS and GATE exams. Pure functions: the
// component keeps a CalcState and feeds every key press through `press`.
//
// The top box shows the expression being built and the bottom box the number
// being typed (or the result). Function keys (sin, log, x², n! …) act on the
// operand that ends the expression (a number or a whole bracket) and fold it
// into one value, like a desk calculator. Binary keys (+, xʸ, mod …) follow
// normal precedence when "=" is pressed.

type BinOp = "+" | "-" | "*" | "/" | "mod" | "^" | "yroot" | "logbase";

type Tok =
  | { k: "num"; text: string } // number being typed
  | { k: "val"; label: string; v: number } // constant, memory recall or a function applied to an operand
  | { k: "op"; op: BinOp }
  | { k: "(" }
  | { k: ")" };

export type CalcState = { tokens: Tok[]; display: string; done: boolean };

export const CALC_START: CalcState = { tokens: [], display: "0", done: false };

/** 12 significant digits hides floating-point noise (0.1 + 0.2 → 0.3). */
export const formatResult = (n: number) => (Number.isFinite(n) ? String(Number(n.toPrecision(12))) : "Error");

const OP_LABEL: Record<BinOp, string> = { "+": "+", "-": "-", "*": "*", "/": "/", mod: " mod ", "^": "^", yroot: " yroot ", logbase: " log base " };

/** Key id → binary operator. */
const OPS: Record<string, BinOp> = { "+": "+", "-": "-", "*": "*", "/": "/", mod: "mod", pow: "^", yroot: "yroot", logy: "logbase" };

const label = (t: Tok) => (t.k === "num" ? t.text : t.k === "val" ? t.label : t.k === "op" ? OP_LABEL[t.op] : t.k);

/** The expression as typed; a negative operand after an operator gets brackets ("2-(-3)"). */
export const expressionText = (tokens: Tok[]) =>
  tokens
    .map((t, i) => {
      const l = label(t);
      return l.startsWith("-") && tokens[i - 1]?.k === "op" ? `(${l})` : l;
    })
    .join("");

/* ───────────── Evaluation ───────────── */

const parseNum = (text: string) => Number(text.replace(/E-?$/, ""));

const root = (x: number, y: number) => (x < 0 && Number.isInteger(y) && Math.abs(y) % 2 === 1 ? -((-x) ** (1 / y)) : x ** (1 / y));

/** Recursive descent: + −  <  × ÷ mod  <  unary −  <  ^ yroot log-base (right-associative). Unclosed brackets close at the end. */
export function evaluate(tokens: Tok[]): number {
  let i = 0;
  const opAt = (ops: BinOp[]) => {
    const t = tokens[i];
    return t?.k === "op" && ops.includes(t.op) ? t.op : null;
  };
  const sum = (): number => {
    let a = product();
    for (let op = opAt(["+", "-"]); op; op = opAt(["+", "-"])) {
      i++;
      const b = product();
      a = op === "+" ? a + b : a - b;
    }
    return a;
  };
  const product = (): number => {
    let a = signed();
    for (let op = opAt(["*", "/", "mod"]); op; op = opAt(["*", "/", "mod"])) {
      i++;
      const b = signed();
      a = op === "*" ? a * b : op === "/" ? a / b : a % b;
    }
    return a;
  };
  const signed = (): number => {
    if (opAt(["-"])) {
      i++;
      return -signed();
    }
    return power();
  };
  const power = (): number => {
    const a = primary();
    const op = opAt(["^", "yroot", "logbase"]);
    if (!op) return a;
    i++;
    const b = signed();
    return op === "^" ? a ** b : op === "yroot" ? root(a, b) : Math.log(a) / Math.log(b);
  };
  const primary = (): number => {
    const t = tokens[i++];
    if (t?.k === "num") return parseNum(t.text);
    if (t?.k === "val") return t.v;
    if (t?.k === "(") {
      const v = sum();
      if (tokens[i]?.k === ")") i++;
      return v;
    }
    throw new Error("Syntax error");
  };
  const v = sum();
  if (i < tokens.length) throw new Error("Syntax error");
  return v;
}

const valueText = (tokens: Tok[]) => {
  try {
    return formatResult(evaluate(tokens));
  } catch {
    return "Error";
  }
};

/* ───────────── Function keys ───────────── */

type Fn = { fn: (x: number, deg: boolean) => number; fmt: (x: string, atom: string) => string };

const toRad = (x: number, deg: boolean) => (deg ? (x * Math.PI) / 180 : x);
const fromRad = (x: number, deg: boolean) => (deg ? (x * 180) / Math.PI : x);
/** sin(180°) is 1.2e-16 in floating point; show it as the 0 a student expects. */
const snap = (x: number) => (Math.abs(x) < 1e-12 ? 0 : x);

const factorial = (n: number) => {
  if (!Number.isInteger(n) || n < 0 || n > 170) return NaN;
  let r = 1;
  for (let k = 2; k <= n; k++) r *= k;
  return r;
};

const call = (name: string) => (x: string) => `${name}(${x})`;

/** Key id → function applied to the last operand. `atom` is the operand bracketed when it needs to be. */
const FNS: Record<string, Fn> = {
  sin: { fn: (x, d) => snap(Math.sin(toRad(x, d))), fmt: call("sin") },
  cos: { fn: (x, d) => snap(Math.cos(toRad(x, d))), fmt: call("cos") },
  tan: { fn: (x, d) => snap(Math.sin(toRad(x, d))) / snap(Math.cos(toRad(x, d))), fmt: call("tan") },
  asin: { fn: (x, d) => fromRad(Math.asin(x), d), fmt: call("sin⁻¹") },
  acos: { fn: (x, d) => fromRad(Math.acos(x), d), fmt: call("cos⁻¹") },
  atan: { fn: (x, d) => fromRad(Math.atan(x), d), fmt: call("tan⁻¹") },
  sinh: { fn: Math.sinh, fmt: call("sinh") },
  cosh: { fn: Math.cosh, fmt: call("cosh") },
  tanh: { fn: Math.tanh, fmt: call("tanh") },
  asinh: { fn: Math.asinh, fmt: call("sinh⁻¹") },
  acosh: { fn: Math.acosh, fmt: call("cosh⁻¹") },
  atanh: { fn: Math.atanh, fmt: call("tanh⁻¹") },
  log2: { fn: Math.log2, fmt: call("log₂") },
  ln: { fn: Math.log, fmt: call("ln") },
  log: { fn: Math.log10, fmt: call("log") },
  exp: { fn: Math.exp, fmt: (_, a) => `e^${a}` },
  pow10: { fn: (x) => 10 ** x, fmt: (_, a) => `10^${a}` },
  sq: { fn: (x) => x * x, fmt: (_, a) => `${a}²` },
  cube: { fn: (x) => x ** 3, fmt: (_, a) => `${a}³` },
  sqrt: { fn: Math.sqrt, fmt: call("√") },
  cbrt: { fn: Math.cbrt, fmt: call("∛") },
  abs: { fn: Math.abs, fmt: call("abs") },
  inv: { fn: (x) => 1 / x, fmt: (_, a) => `1/${a}` },
  fact: { fn: factorial, fmt: (_, a) => `${a}!` },
  pct: { fn: (x) => x / 100, fmt: (_, a) => `${a}%` },
  neg: { fn: (x) => -x, fmt: (_, a) => `-${a}` },
};

/* ───────────── Key handling ───────────── */

const depth = (tokens: Tok[]) => tokens.reduce((n, t) => n + (t.k === "(" ? 1 : t.k === ")" ? -1 : 0), 0);

const isOperand = (t: Tok | undefined) => t?.k === "num" || t?.k === "val" || t?.k === ")";

/** Index where the operand that ends the expression starts: a number, a value or a whole bracket. −1 if it ends in an operator. */
function operandStart(tokens: Tok[]): number {
  const last = tokens.at(-1);
  if (last?.k === "num" || last?.k === "val") return tokens.length - 1;
  if (last?.k !== ")") return -1;
  for (let i = tokens.length - 1, open = 0; i >= 0; i--) {
    if (tokens[i].k === ")") open++;
    else if (tokens[i].k === "(" && --open === 0) return i;
  }
  return -1;
}

/** What the bottom box shows for an expression being edited: the value of its last operand. */
function operandText(tokens: Tok[]): string {
  const start = operandStart(tokens);
  if (start < 0) return "0";
  const last = tokens.at(-1)!;
  return last.k === "num" ? last.text : valueText(tokens.slice(start));
}

/** After "=" a new number starts afresh, while an operator or function carries the result on. */
const carried = (s: CalcState): Tok[] => (s.done ? [{ k: "val", label: s.display, v: Number(s.display) }] : s.tokens);

/** A number or value typed after another replaces it; after a bracket it multiplies. */
function putOperand(tokens: Tok[], tok: Tok): Tok[] {
  const last = tokens.at(-1);
  if (last?.k === "num" || last?.k === "val") return [...tokens.slice(0, -1), tok];
  if (last?.k === ")") return [...tokens, { k: "op", op: "*" }, tok];
  return [...tokens, tok];
}

function digit(s: CalcState, d: string): CalcState {
  const tokens = s.done ? [] : s.tokens;
  const last = tokens.at(-1);
  if (last?.k === "num") {
    const t = last.text;
    if (d === "." && /[.E]/.test(t)) return s;
    if (t.replace(/\D/g, "").length >= 15) return s; // beyond double precision
    const text = d === "." ? t + d : t === "0" ? d : t === "-0" ? `-${d}` : t + d;
    return { tokens: [...tokens.slice(0, -1), { k: "num", text }], display: text, done: false };
  }
  const text = d === "." ? "0." : d;
  return { tokens: putOperand(tokens, { k: "num", text }), display: text, done: false };
}

function value(s: CalcState, label: string, v: number): CalcState {
  return { tokens: putOperand(s.done ? [] : s.tokens, { k: "val", label, v }), display: formatResult(v), done: false };
}

function operator(s: CalcState, op: BinOp): CalcState {
  if (s.done && s.display === "Error") return s;
  const tokens = carried(s);
  const last = tokens.at(-1);
  if (!last) return { ...s, tokens: [{ k: "num", text: s.display }, { k: "op", op }] };
  if (last.k === "op") {
    // A minus straight after "(" is a sign, not something to swap for another operator.
    if (tokens.at(-2)?.k === "(") return s;
    return { ...s, tokens: [...tokens.slice(0, -1), { k: "op", op }], done: false };
  }
  if (last.k === "(") return op === "-" ? { ...s, tokens: [...tokens, { k: "op", op }] } : s;
  return { ...s, tokens: [...tokens, { k: "op", op }], done: false };
}

function applyFn(s: CalcState, f: Fn, deg: boolean): CalcState {
  if (s.done && s.display === "Error") return s;
  let tokens = carried(s);
  let start = operandStart(tokens);
  if (start < 0) {
    // Nothing typed since the last operator: act on the number on display, as a desk calculator does.
    tokens = [...tokens, { k: "val", label: s.display, v: Number(s.display) }];
    start = tokens.length - 1;
  }
  const span = tokens.slice(start);
  const bracket = span.length > 1;
  const inner = bracket ? expressionText(span.slice(1, -1)) : label(span[0]);
  const atom = bracket || inner.startsWith("-") ? `(${inner})` : inner;
  let x: number;
  try {
    x = evaluate(span);
  } catch {
    x = NaN;
  }
  const v = f.fn(x, deg);
  return { tokens: [...tokens.slice(0, start), { k: "val", label: f.fmt(inner, atom), v }], display: formatResult(v), done: false };
}

function negate(s: CalcState, deg: boolean): CalcState {
  const last = s.done ? undefined : s.tokens.at(-1);
  if (last?.k !== "num") return applyFn(s, FNS.neg, deg);
  // While typing, flip the sign of the number, or of its exponent after Exp.
  const t = last.text;
  const text = t.includes("E") ? t.replace(/E(-?)/, (_, minus: string) => (minus ? "E" : "E-")) : t.startsWith("-") ? t.slice(1) : `-${t}`;
  return { tokens: [...s.tokens.slice(0, -1), { k: "num", text }], display: text, done: false };
}

function exponent(s: CalcState): CalcState {
  const last = s.done ? undefined : s.tokens.at(-1);
  if (last?.k !== "num" || last.text.includes("E")) return s;
  const text = `${last.text}E`;
  return { tokens: [...s.tokens.slice(0, -1), { k: "num", text }], display: text, done: false };
}

function open(s: CalcState): CalcState {
  const tokens = s.done ? [] : s.tokens;
  const glue: Tok[] = isOperand(tokens.at(-1)) ? [{ k: "op", op: "*" }] : [];
  return { tokens: [...tokens, ...glue, { k: "(" }], display: s.done ? "0" : s.display, done: false };
}

function close(s: CalcState): CalcState {
  if (s.done || depth(s.tokens) <= 0 || !isOperand(s.tokens.at(-1))) return s;
  const tokens: Tok[] = [...s.tokens, { k: ")" }];
  return { tokens, display: operandText(tokens), done: false };
}

function equals(s: CalcState): CalcState {
  if (s.done) return s;
  const tokens = [...s.tokens];
  while (tokens.length && !isOperand(tokens.at(-1))) tokens.pop();
  if (!tokens.length) return s;
  for (let n = depth(tokens); n > 0; n--) tokens.push({ k: ")" });
  return { tokens, display: valueText(tokens), done: true };
}

function backspace(s: CalcState): CalcState {
  if (s.done || !s.tokens.length) return s;
  const tokens = s.tokens.slice(0, -1);
  const last = s.tokens.at(-1)!;
  if (last.k === "num") {
    const text = last.text.slice(0, -1);
    if (text && text !== "-") return { tokens: [...tokens, { k: "num", text }], display: text, done: false };
  }
  return { tokens, display: operandText(tokens), done: false };
}

/** Applies one key (by id) to the calculator. Memory store keys are handled by the caller; MR reads `memory`. */
export function press(s: CalcState, id: string, deg: boolean, memory: number): CalcState {
  if (/^[0-9.]$/.test(id)) return digit(s, id);
  if (id in OPS) return operator(s, OPS[id]);
  if (id in FNS) return applyFn(s, FNS[id], deg);
  switch (id) {
    case "C":
      return CALC_START;
    case "back":
      return backspace(s);
    case "=":
      return equals(s);
    case "(":
      return open(s);
    case ")":
      return close(s);
    case "EE":
      return exponent(s);
    case "+/-":
      return negate(s, deg);
    case "pi":
      return value(s, "π", Math.PI);
    case "e":
      return value(s, "e", Math.E);
    case "MR":
      return value(s, formatResult(memory), memory);
    default:
      return s;
  }
}
