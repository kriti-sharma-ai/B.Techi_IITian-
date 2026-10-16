// Shared drawing helpers, slide layouts and the PDF writer for LinkedIn carousels.
// Slides are 1080x1350 (4:5) SVGs on the same white grid paper as the LinkedIn banner.
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const W = 1080;
export const H = 1350;
const SCALE = 2; // render at 2x so text stays sharp after LinkedIn compresses it
const X = 80; // left margin
const CW = W - 2 * X; // content width
const BOTTOM = H - 140; // content must end above the page number

const FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";
export const C = { ink: "#0B0B0B", text: "#334155", muted: "#64748B", line: "#E2E8F0", soft: "#F8FAFC", yellow: "#FFD21C", green: "#16A34A", red: "#DC2626" };
export const CUTOFF = { perSubject: 40, average: 50 }; // matches QUALIFIER_CUTOFF in src/lib/data/qualifier-meta.ts

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Lucide icon paths (24x24, stroke).
const ICONS = {
  timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  calculator: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  x: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  sigma: '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>',
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  type: '<path d="M12 4v16"/><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"/><path d="M9 20h6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
};

export function icon(name, x, y, size = 40, color = C.ink, stroke = 2) {
  const s = size / 24;
  return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" color="${color}">${ICONS[name]}</g>`;
}

export function logoMark(x, y, size = 46) {
  const s = size / 32;
  return `<g transform="translate(${x}, ${y}) scale(${s})">
    <rect width="32" height="32" rx="7" fill="${C.yellow}"/>
    <path d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z" fill="${C.ink}" fill-rule="evenodd"/>
  </g>`;
}

/** Multi-line text. `lines` is an array; each line is plain text. */
export function text(lines, x, y, { size = 40, weight = 400, color = C.text, lh = 1.3, anchor = "start", ls = 0 } = {}) {
  return lines
    .map((l, i) => `<text x="${x}" y="${y + i * size * lh}" fill="${color}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" letter-spacing="${ls}" text-anchor="${anchor}">${esc(l)}</text>`)
    .join("");
}

export function pill(label, x, y, { fill = C.soft, stroke = C.line, color = C.text, size = 24, padX = 22, h = 50, weight = 600 } = {}) {
  const w = Math.round(label.length * size * 0.62 + padX * 2);
  return `<g transform="translate(${x}, ${y})">
    <rect width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
    <text x="${w / 2}" y="${h / 2 + size * 0.35}" text-anchor="middle" fill="${color}" font-family="${FONT}" font-size="${size}" font-weight="${weight}">${esc(label)}</text>
  </g>`;
}

/** Greedy word wrap by estimated glyph width (measured: Helvetica averages about 0.44em, bold about 0.48em; kept a little wider for safety). */
export function wrap(str, size, maxW, weight = 400) {
  const maxChars = Math.floor(maxW / (size * (weight >= 700 ? 0.52 : 0.47)));
  const lines = [];
  for (const para of String(str).split("\n")) {
    let line = "";
    for (const word of para.split(" ")) {
      if (line && (line + " " + word).length > maxChars) { lines.push(line); line = word; }
      else line = line ? `${line} ${word}` : word;
    }
    lines.push(line);
  }
  return lines;
}

/** Wrapped text block. Returns [svg, height]. */
function block(str, x, y, maxW, opts = {}) {
  const { size = 32, weight = 400, lh = 1.35 } = opts;
  const lines = wrap(str, size, maxW, weight);
  return [text(lines, x, y + size * 0.8, { ...opts, lh }), lines.length * size * lh];
}

/** Shared frame: grid paper, brand at top, page number and swipe hint at bottom. */
export function frame(n, total, body, { last = false } = {}) {
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="${C.line}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#FFFFFF"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  ${logoMark(80, 72, 52)}
  ${text(["BTechi"], 148, 110, { size: 34, weight: 800, color: C.ink, ls: -0.8 })}
  ${text(["IIT Madras BS"], W - 80, 108, { size: 24, weight: 500, color: C.muted, anchor: "end" })}
  ${body}
  ${text([`${n} / ${total}`], 80, H - 72, { size: 24, weight: 600, color: C.muted })}
  ${last ? text(["btechi.in"], W - 80, H - 72, { size: 24, weight: 700, color: C.ink, anchor: "end" })
         : `${text(["Swipe"], W - 128, H - 72, { size: 24, weight: 600, color: C.ink, anchor: "end" })}${icon("arrow", W - 116, H - 95, 30)}`}
</svg>`;
}

// ---------- Slide layouts ----------
// Each layout takes a spec and returns [body, endY]. endY is checked against BOTTOM.

/** Kicker + headline at the top of a content slide. */
function heading({ kicker, title, sub }, y = 230) {
  let svg = "";
  if (kicker) { svg += text([kicker.toUpperCase()], X, y + 26, { size: 26, weight: 700, color: C.muted, ls: 1.5 }); y += 50; }
  if (title) {
    const [t, h] = block(title, X, y, CW, { size: 60, weight: 800, color: C.ink, lh: 1.12, ls: -1.8 });
    svg += t; y += h + 16;
  }
  if (sub) { const [t, h] = block(sub, X, y, CW, { size: 32, color: C.text, lh: 1.4 }); svg += t; y += h; }
  return [svg, y + 40];
}

const layouts = {
  cover({ kicker, title, sub }) {
    let y = 300, svg = "";
    if (kicker) { svg += pill(kicker.toUpperCase(), X, y, { size: 22, weight: 700 }); y += 110; }
    const [t, h] = block(title, X, y, CW, { size: 80, weight: 800, color: C.ink, lh: 1.12, ls: -2.4 });
    svg += t; y += h + 40;
    svg += `<rect x="${X}" y="${y}" width="160" height="12" rx="6" fill="${C.yellow}"/>`; y += 60;
    if (sub) { const [s, sh] = block(sub, X, y, CW, { size: 36, weight: 500, color: C.text, lh: 1.4 }); svg += s; y += sh; }
    return [svg, y];
  },

  /** Cards with an icon or number badge, a title and a description. */
  list(spec) {
    let [svg, y] = heading(spec);
    const tx = X + 132, tw = CW - 132 - 32;
    spec.items.forEach((it, i) => {
      const tl = wrap(it.title, 36, tw, 700), dl = it.desc ? wrap(it.desc, 30, tw) : [];
      const h = Math.max(128, 32 + tl.length * 44 + dl.length * 40 + 26);
      svg += `<rect x="${X}" y="${y}" width="${CW}" height="${h}" rx="20" fill="#FFFFFF" stroke="${C.line}" stroke-width="2"/>
        <rect x="${X + 28}" y="${y + 28}" width="72" height="72" rx="16" fill="${C.yellow}"/>`;
      svg += it.icon ? icon(it.icon, X + 44, y + 44, 40)
        : text([it.num ?? String(i + 1)], X + 64, y + 76, { size: 32, weight: 800, color: C.ink, anchor: "middle" });
      svg += text(tl, tx, y + 62, { size: 36, weight: 700, color: C.ink, lh: 1.22 });
      if (dl.length) svg += text(dl, tx, y + 62 + tl.length * 44 + 4, { size: 30, color: C.muted, lh: 1.33 });
      y += h + 18;
    });
    return [svg, y];
  },

  /** Plain bullets. tone: "x" (mistakes), "check" (do this), "alert" (traps) or "dot". */
  bullets(spec) {
    let [svg, y] = heading(spec);
    const tone = spec.tone ?? "dot";
    const color = { x: C.red, check: C.green, alert: "#D97706", dot: C.ink }[tone];
    spec.items.forEach((item) => {
      const [t, h] = block(item, X + 72, y, CW - 72, { size: 36, color: C.ink, lh: 1.36 });
      svg += tone === "dot" ? `<rect x="${X + 6}" y="${y + 14}" width="18" height="18" rx="4" fill="${C.yellow}"/>` : icon(tone, X, y + 3, 44, color);
      svg += t; y += h + 40;
    });
    return [svg, y];
  },

  /** Label + formula rows, like a cheat sheet. */
  formulas(spec) {
    let [svg, y] = heading(spec);
    svg += `<rect x="${X}" y="${y}" width="${CW}" height="__H__" rx="22" fill="#FFFFFF" stroke="${C.line}" stroke-width="2"/>`;
    const top = y; y += 30;
    spec.rows.forEach(([label, f], i) => {
      if (i) { svg += `<line x1="${X + 32}" y1="${y - 16}" x2="${X + CW - 32}" y2="${y - 16}" stroke="${C.line}" stroke-width="2"/>`; }
      svg += text([label], X + 36, y + 22, { size: 26, weight: 700, color: C.muted });
      const [t, h] = block(f, X + 36, y + 38, CW - 72, { size: 40, weight: 600, color: C.ink, lh: 1.28 });
      svg += t; y += 38 + h + 34;
    });
    svg = svg.replace("__H__", String(y - top));
    if (spec.note) { const [t, h] = block(spec.note, X, y + 26, CW, { size: 26, color: C.muted }); svg += t; y += h + 26; }
    return [svg, y];
  },

  /** A question with optional options. The answer goes on a later slide. */
  question(spec) {
    let [svg, y] = heading({ kicker: spec.kicker, title: spec.title ?? "Your turn" });
    const [q, qh] = block(spec.q, X + 36, y + 34, CW - 72, { size: 34, weight: 500, color: C.ink, lh: 1.4 });
    svg += `<rect x="${X}" y="${y}" width="${CW}" height="${qh + 68}" rx="22" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>${q}`;
    y += qh + 68 + 30;
    (spec.options ?? []).forEach((o, i) => {
      svg += `<rect x="${X}" y="${y}" width="${CW}" height="76" rx="14" fill="${C.soft}" stroke="${C.line}" stroke-width="2"/>
        <rect x="${X + 18}" y="${y + 16}" width="44" height="44" rx="10" fill="#FFFFFF" stroke="${C.ink}" stroke-width="2"/>
        ${text([String.fromCharCode(65 + i)], X + 40, y + 48, { size: 24, weight: 800, color: C.ink, anchor: "middle" })}
        ${text([o], X + 86, y + 49, { size: 30, weight: 500, color: C.ink })}`;
      y += 92;
    });
    y += 20;
    if (spec.hint) { const [t, h] = block(`Hint: ${spec.hint}`, X, y, CW, { size: 28, color: C.muted }); svg += t; y += h + 24; }
    svg += `${text([spec.footer ?? "Comment your answer, then swipe."], X, y + 34, { size: 30, weight: 700, color: C.ink })}`;
    return [svg, y + 50];
  },

  /** The answer in a yellow box, then the steps, then an optional trap. */
  answer(spec) {
    let [svg, y] = heading({ kicker: spec.kicker ?? "Answer", title: spec.title });
    const [a, ah] = block(spec.answer, X + 36, y + 30, CW - 72, { size: 46, weight: 800, color: C.ink, lh: 1.2, ls: -1 });
    svg += `<rect x="${X}" y="${y}" width="${CW}" height="${ah + 60}" rx="22" fill="${C.yellow}"/>${a}`;
    y += ah + 60 + 44;
    (spec.steps ?? []).forEach((s, i) => {
      svg += `<circle cx="${X + 22}" cy="${y + 20}" r="22" fill="${C.ink}"/>${text([String(i + 1)], X + 22, y + 29, { size: 24, weight: 800, color: "#FFFFFF", anchor: "middle" })}`;
      const [t, h] = block(s, X + 70, y - 2, CW - 70, { size: 31, color: C.ink, lh: 1.36 });
      svg += t; y += Math.max(h, 44) + 26;
    });
    if (spec.trap) {
      y += 10;
      const [t, h] = block(spec.trap, X + 96, y + 30, CW - 128, { size: 28, color: C.text, lh: 1.36 });
      svg += `<rect x="${X}" y="${y}" width="${CW}" height="${h + 60}" rx="20" fill="#FEF2F2" stroke="#FECACA" stroke-width="2"/>${icon("alert", X + 30, y + 28, 40, C.red)}${t}`;
      y += h + 60;
    }
    return [svg, y];
  },

  /** Qualifier result: bars per subject, then a pass/fail verdict computed from CUTOFF. */
  scorecard(spec) {
    let [svg, y] = heading(spec);
    const scores = spec.scores;
    scores.forEach(([name, pct]) => {
      const low = pct < CUTOFF.perSubject;
      svg += `${text([name], X, y + 30, { size: 30, weight: 600, color: C.ink })}
        ${text([`${pct}%`], W - X, y + 30, { size: 30, weight: 700, color: low ? C.red : C.ink, anchor: "end" })}
        <rect x="${X}" y="${y + 48}" width="${CW}" height="14" rx="7" fill="${C.line}"/>
        <rect x="${X}" y="${y + 48}" width="${(CW * pct) / 100}" height="14" rx="7" fill="${low ? C.red : C.ink}"/>`;
      y += 92;
    });
    const avg = scores.reduce((s, [, p]) => s + p, 0) / scores.length;
    const allOk = scores.every(([, p]) => p >= CUTOFF.perSubject), pass = allOk && avg >= CUTOFF.average;
    const why = !allOk ? `Average ${+avg.toFixed(2)}%, but one subject is below ${CUTOFF.perSubject}%`
      : !pass ? `Every subject is above ${CUTOFF.perSubject}%, but the average is only ${+avg.toFixed(2)}%`
      : `Every subject is above ${CUTOFF.perSubject}% and the average is ${+avg.toFixed(2)}%`;
    y += 20;
    const [t, h] = block(why, X + 124, y + 82, CW - 156, { size: 28, color: C.text, lh: 1.36 });
    svg += `<rect x="${X}" y="${y}" width="${CW}" height="${h + 120}" rx="20" fill="${pass ? "#F0FDF4" : "#FEF2F2"}" stroke="${pass ? "#BBF7D0" : "#FECACA"}" stroke-width="2"/>
      ${icon(pass ? "check" : "x", X + 32, y + 36, 64, pass ? C.green : C.red)}
      ${text([pass ? "Pass" : "Fail"], X + 124, y + 66, { size: 40, weight: 800, color: pass ? C.green : C.red })}${t}`;
    y += h + 120;
    if (spec.note) { const [n, nh] = block(spec.note, X, y + 30, CW, { size: 24, color: C.muted }); svg += n; y += nh + 30; }
    return [svg, y];
  },

  /** 2x2 big numbers. The last tile is yellow. */
  stats(spec) {
    let [svg, y] = heading(spec);
    const tw = (CW - 20) / 2, th = 270;
    spec.stats.forEach(([v, l], i) => {
      const x = X + (i % 2) * (tw + 20), ty = y + Math.floor(i / 2) * (th + 20), hi = i === spec.stats.length - 1;
      svg += `<rect x="${x}" y="${ty}" width="${tw}" height="${th}" rx="24" fill="${hi ? C.yellow : "#FFFFFF"}" stroke="${hi ? C.yellow : C.line}" stroke-width="2"/>
        ${text([v], x + 36, ty + 130, { size: v.length > 6 ? 72 : 96, weight: 800, color: C.ink, ls: -3 })}`;
      const [t] = block(l, x + 36, ty + 160, tw - 72, { size: 28, weight: 600, color: hi ? C.ink : C.muted, lh: 1.3 });
      svg += t;
    });
    y += Math.ceil(spec.stats.length / 2) * (th + 20);
    if (spec.note) { const [n, nh] = block(spec.note, X, y + 16, CW, { size: 26, color: C.muted }); svg += n; y += nh + 16; }
    return [svg, y];
  },

  /** One big idea. */
  statement({ kicker, text: body, sub }) {
    let y = 360, svg = "";
    if (kicker) { svg += text([kicker.toUpperCase()], X, y, { size: 26, weight: 700, color: C.muted, ls: 1.5 }); y += 50; }
    const [t, h] = block(body, X, y, CW, { size: 64, weight: 800, color: C.ink, lh: 1.15, ls: -1.8 });
    svg += t; y += h + 40;
    svg += `<rect x="${X}" y="${y}" width="160" height="12" rx="6" fill="${C.yellow}"/>`; y += 60;
    if (sub) { const [s, sh] = block(sub, X, y, CW, { size: 34, color: C.text, lh: 1.4 }); svg += s; y += sh; }
    return [svg, y];
  },

  /** Closing slide with the link. */
  cta({ title = "Practise real Qualifier PYQs free.", sub = "Timed mocks on the real exam screen, graded with the official answer keys.", url = "btechi.in", ask = "Save this post for revision. Share it with a friend writing the Qualifier." } = {}) {
    let y = 260, svg = logoMark(X, y, 110);
    y += 170;
    const [t, h] = block(title, X, y, CW, { size: 66, weight: 800, color: C.ink, lh: 1.12, ls: -2 });
    svg += t; y += h + 20;
    const [s, sh] = block(sub, X, y, CW, { size: 34, color: C.text, lh: 1.4 });
    svg += s; y += sh + 50;
    svg += `<rect x="${X}" y="${y}" width="${CW}" height="120" rx="24" fill="${C.yellow}"/>
      ${text([url], X + 50, y + 78, { size: 50, weight: 800, color: C.ink, ls: -1 })}${icon("arrow", W - X - 100, y + 32, 56)}`;
    y += 180;
    const [a, ah] = block(ask, X, y, CW, { size: 30, weight: 600, color: C.ink, lh: 1.4 });
    svg += a; y += ah + 40;
    svg += text(["Not affiliated with IIT Madras."], X, y, { size: 22, color: C.muted });
    return [svg, y];
  },
};

/** Layouts whose content is centred vertically between the header and the footer. */
const CENTRED = new Set(["list", "bullets", "formulas", "question", "answer", "scorecard", "stats"]);

/** Turns a post's slide specs into SVG strings. Warns if any slide runs past the footer. */
export function buildSlides(post) {
  const total = post.slides.length;
  return post.slides.map((spec, i) => {
    const [body, endY] = layouts[spec.type](spec);
    if (endY > BOTTOM) console.warn(`  ! ${post.slug} slide ${i + 1} (${spec.type}) runs to y=${Math.round(endY)}, limit ${BOTTOM}`);
    const shift = CENTRED.has(spec.type) ? Math.max(0, (BOTTOM - endY) / 2) : 0;
    return frame(i + 1, total, shift ? `<g transform="translate(0, ${shift})">${body}</g>` : body, { last: i === total - 1 });
  });
}

// ---------- Minimal PDF writer (one full-page JPEG per page) ----------

function buildPdf(jpegs, pageW, pageH, pxW, pxH) {
  const parts = [];
  const offsets = [];
  let len = 0;
  const push = (b) => { const buf = Buffer.isBuffer(b) ? b : Buffer.from(b, "binary"); parts.push(buf); len += buf.length; };
  const obj = (id, body) => { offsets[id] = len; push(`${id} 0 obj\n`); body(); push("\nendobj\n"); };

  push("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");
  const n = jpegs.length;
  const pageId = (i) => 3 + i * 3;
  obj(1, () => push("<< /Type /Catalog /Pages 2 0 R >>"));
  obj(2, () => push(`<< /Type /Pages /Count ${n} /Kids [${jpegs.map((_, i) => `${pageId(i)} 0 R`).join(" ")}] >>`));
  jpegs.forEach((jpg, i) => {
    const p = pageId(i), content = p + 1, img = p + 2;
    const stream = `q ${pageW} 0 0 ${pageH} 0 0 cm /Im0 Do Q`;
    obj(p, () => push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Resources << /XObject << /Im0 ${img} 0 R >> >> /Contents ${content} 0 R >>`));
    obj(content, () => push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`));
    obj(img, () => {
      push(`<< /Type /XObject /Subtype /Image /Width ${pxW} /Height ${pxH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`);
      push(jpg);
      push("\nendstream");
    });
  });
  const total = 3 + n * 3;
  const xref = len;
  push(`xref\n0 ${total}\n0000000000 65535 f \n`);
  for (let id = 1; id < total; id++) push(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`);
  push(`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return Buffer.concat(parts);
}

/**
 * Writes <dir>/carousel.pdf and <dir>/caption.txt.
 * With `previewDir`, also writes one contact-sheet PNG of all slides there (for checking, not for posting).
 */
export async function writePost(dir, svgs, caption, previewDir) {
  fs.mkdirSync(dir, { recursive: true });
  const jpegs = [];
  for (const svg of svgs) {
    jpegs.push(await sharp(Buffer.from(svg), { density: 72 * SCALE }).flatten({ background: "#FFFFFF" }).jpeg({ quality: 92 }).toBuffer());
  }
  fs.writeFileSync(path.join(dir, "carousel.pdf"), buildPdf(jpegs, W, H, W * SCALE, H * SCALE));
  if (caption) fs.writeFileSync(path.join(dir, "caption.txt"), caption.trim() + "\n");

  if (previewDir) {
    const tw = 540, th = 675, cols = 4, rows = Math.ceil(svgs.length / cols);
    const tiles = await Promise.all(svgs.map((svg) => sharp(Buffer.from(svg)).resize(tw, th).png().toBuffer()));
    fs.mkdirSync(previewDir, { recursive: true });
    await sharp({ create: { width: cols * tw + (cols - 1) * 12, height: rows * th + (rows - 1) * 12, channels: 3, background: "#94A3B8" } })
      .composite(tiles.map((input, i) => ({ input, left: (i % cols) * (tw + 12), top: Math.floor(i / cols) * (th + 12) })))
      .png()
      .toFile(path.join(previewDir, `${path.basename(dir)}.png`));
  }
}
