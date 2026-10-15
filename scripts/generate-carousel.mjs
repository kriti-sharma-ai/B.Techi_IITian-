// LinkedIn carousel (first post): 8 slides at 1080x1350 (4:5).
// Writes to marketing/linkedin/post-01-carousel/: carousel.pdf (upload with "Add a document")
// and images/01.png ... 08.png (upload with "Add media", in order).
// Run: node scripts/generate-carousel.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

const OUT_DIR = path.resolve("marketing/linkedin/post-01-carousel");
const W = 1080;
const H = 1350;
const SCALE = 2; // render at 2x so text stays sharp after LinkedIn compresses it

const FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const C = { ink: "#0B0B0B", text: "#334155", muted: "#64748B", line: "#E2E8F0", soft: "#F8FAFC", yellow: "#FFD21C", green: "#16A34A" };
const TOTAL = 8;

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
};

function icon(name, x, y, size = 40, color = C.ink, stroke = 2) {
  const s = size / 24;
  return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" color="${color}">${ICONS[name]}</g>`;
}

function logoMark(x, y, size = 46) {
  const s = size / 32;
  return `<g transform="translate(${x}, ${y}) scale(${s})">
    <rect width="32" height="32" rx="7" fill="${C.yellow}"/>
    <path d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z" fill="${C.ink}" fill-rule="evenodd"/>
  </g>`;
}

/** Multi-line text. `lines` is an array; each line is plain text. */
function text(lines, x, y, { size = 40, weight = 400, color = C.text, lh = 1.3, anchor = "start", ls = 0 } = {}) {
  return lines
    .map((l, i) => `<text x="${x}" y="${y + i * size * lh}" fill="${color}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" letter-spacing="${ls}" text-anchor="${anchor}">${esc(l)}</text>`)
    .join("");
}

function pill(label, x, y, { fill = C.soft, stroke = C.line, color = C.text, size = 24, padX = 22, h = 50, weight = 600 } = {}) {
  const w = Math.round(label.length * size * 0.56 + padX * 2);
  return `<g transform="translate(${x}, ${y})">
    <rect width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
    <text x="${w / 2}" y="${h / 2 + size * 0.35}" text-anchor="middle" fill="${color}" font-family="${FONT}" font-size="${size}" font-weight="${weight}">${esc(label)}</text>
  </g>`;
}

/** Shared frame: grid paper, brand at top, page number and swipe hint at bottom. */
function frame(n, body, { last = false } = {}) {
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
  ${text([`${n} / ${TOTAL}`], 80, H - 72, { size: 24, weight: 600, color: C.muted })}
  ${last ? text(["btechi.in"], W - 80, H - 72, { size: 24, weight: 700, color: C.ink, anchor: "end" })
         : `${text(["Swipe"], W - 128, H - 72, { size: 24, weight: 600, color: C.ink, anchor: "end" })}${icon("arrow", W - 116, H - 95, 30)}`}
</svg>`;
}

// ---------- Slides ----------

const slides = [];

// 1. Hook
slides.push(frame(1, `
  ${pill("FOR IITM BS STUDENTS", 80, 300, { size: 22, weight: 700, color: C.text })}
  ${text(["Sit the real", "IIT Madras BS exam", "before exam day."], 80, 480, { size: 84, weight: 800, color: C.ink, lh: 1.12, ls: -2.5 })}
  <rect x="80" y="760" width="160" height="12" rx="6" fill="${C.yellow}"/>
  ${text(["Real past papers. The real exam screen.", "Graded with the official answer keys.", "Free."], 80, 860, { size: 38, weight: 500, color: C.text, lh: 1.4 })}
`));

// 2. Problem
const problems = [
  ["Most of us practise PYQs from a PDF.", "No timer. No palette. No calculator."],
  ["On exam day, the screen is new.", "You lose time just finding your way."],
  ["You find your weak topics too late.", "After the result, not before."],
];
slides.push(frame(2, `
  ${text(["The problem"], 80, 290, { size: 30, weight: 700, color: C.muted, ls: 1 })}
  ${text(["Practice does not", "feel like the exam."], 80, 390, { size: 72, weight: 800, color: C.ink, lh: 1.12, ls: -2 })}
  ${problems.map(([a, b], i) => {
    const y = 600 + i * 190;
    return `${icon("x", 80, y - 4, 48, "#DC2626")}
      ${text([a], 156, y + 30, { size: 36, weight: 700, color: C.ink })}
      ${text([b], 156, y + 82, { size: 32, weight: 400, color: C.muted })}`;
  }).join("")}
`));

// 3. Solution: mock of the exam screen
function examMock(x, y) {
  const w = 920, h = 620;
  const opts = ["A. 2", "B. 4", "C. 6", "D. 8"];
  const states = ["a", "a", "r", "n", "a", "v", "v", "a", "n", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v"];
  const stateFill = { a: C.green, n: "#DC2626", r: "#7C3AED", v: "#E2E8F0" };
  return `<g transform="translate(${x}, ${y})">
    <rect width="${w}" height="${h}" rx="22" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <path d="M0 22a22 22 0 0 1 22-22h${w - 44}a22 22 0 0 1 22 22v50H0z" fill="${C.ink}"/>
    ${text(["Qualifier · Mathematics I"], 30, 46, { size: 24, weight: 600, color: "#FFFFFF" })}
    <rect x="${w - 210}" y="16" width="180" height="40" rx="8" fill="${C.yellow}"/>
    ${icon("timer", w - 198, 22, 28)}
    ${text(["01:42:18"], w - 158, 46, { size: 24, weight: 800, color: C.ink })}
    ${text(["Question 7"], 30, 130, { size: 26, weight: 700, color: C.ink })}
    ${text(["If f(x) = x² − 4x + 4,", "what is the value of f(4)?"], 30, 180, { size: 26, color: C.text, lh: 1.4 })}
    ${opts.map((o, i) => `<rect x="30" y="${260 + i * 72}" width="520" height="56" rx="10" fill="${i === 1 ? "#FEF9C3" : C.soft}" stroke="${i === 1 ? C.yellow : C.line}" stroke-width="2"/>
      <circle cx="62" cy="${288 + i * 72}" r="10" fill="${i === 1 ? C.ink : "none"}" stroke="${C.ink}" stroke-width="2"/>
      ${text([o], 88, 297 + i * 72, { size: 24, weight: 500, color: C.ink })}`).join("")}
    <line x1="590" y1="96" x2="590" y2="${h - 24}" stroke="${C.line}" stroke-width="2"/>
    ${text(["Palette"], 616, 130, { size: 22, weight: 700, color: C.muted })}
    ${states.map((s, i) => {
      const cx = 616 + (i % 5) * 56, cy = 156 + Math.floor(i / 5) * 56;
      return `<rect x="${cx}" y="${cy}" width="44" height="44" rx="8" fill="${stateFill[s]}"/>
        ${text([String(i + 1)], cx + 22, cy + 30, { size: 18, weight: 700, color: s === "v" ? C.muted : "#FFFFFF", anchor: "middle" })}`;
    }).join("")}
    <rect x="616" y="400" width="268" height="186" rx="12" fill="${C.soft}" stroke="${C.line}" stroke-width="2"/>
    ${icon("calculator", 632, 414, 30, C.text)}
    ${text(["Calculator"], 672, 438, { size: 20, weight: 600, color: C.text })}
    ${Array.from({ length: 8 }, (_, i) => `<rect x="${636 + (i % 4) * 62}" y="${464 + Math.floor(i / 4) * 56}" width="50" height="44" rx="6" fill="#FFFFFF" stroke="${C.line}" stroke-width="1.5"/>`).join("")}
  </g>`;
}
slides.push(frame(3, `
  ${text(["The fix"], 80, 260, { size: 30, weight: 700, color: C.muted, ls: 1 })}
  ${text(["The exam screen, online."], 80, 350, { size: 66, weight: 800, color: C.ink, ls: -2 })}
  ${text(["Same layout you see at the exam centre."], 80, 420, { size: 34, color: C.text })}
  ${examMock(80, 500)}
`));

// 4. Features
const features = [
  ["timer", "Live timer", "Auto-submits at zero, like the real one."],
  ["grid", "Question palette", "Answered, not answered, marked for review."],
  ["calculator", "On-screen calculator", "The same scientific one you get on exam day."],
  ["list", "All question types", "Single, multiple select, numeric, short text."],
  ["check", "Instant result", "Graded with the official answer key."],
];
slides.push(frame(4, `
  ${text(["What you get"], 80, 280, { size: 66, weight: 800, color: C.ink, ls: -2 })}
  ${features.map(([ic, t, d], i) => {
    const y = 380 + i * 158;
    return `<rect x="80" y="${y}" width="${W - 160}" height="132" rx="20" fill="#FFFFFF" stroke="${C.line}" stroke-width="2"/>
      <rect x="108" y="${y + 30}" width="72" height="72" rx="16" fill="${C.yellow}"/>
      ${icon(ic, 124, y + 46, 40)}
      ${text([t], 212, y + 60, { size: 34, weight: 700, color: C.ink })}
      ${text([d], 212, y + 102, { size: 28, color: C.muted })}`;
  }).join("")}
`));

// 5. Numbers
const stats = [
  ["214", "real past papers"],
  ["4,923", "questions"],
  ["46", "courses"],
  ["₹0", "100% free"],
];
slides.push(frame(5, `
  ${text(["By the numbers"], 80, 280, { size: 66, weight: 800, color: C.ink, ls: -2 })}
  ${text(["Qualifier, Quiz 1, Quiz 2 and End Term.", "Foundation to Degree."], 80, 350, { size: 32, color: C.text, lh: 1.4 })}
  ${stats.map(([v, l], i) => {
    const x = 80 + (i % 2) * 470, y = 480 + Math.floor(i / 2) * 330;
    const hi = i === 3;
    return `<rect x="${x}" y="${y}" width="450" height="300" rx="24" fill="${hi ? C.yellow : "#FFFFFF"}" stroke="${hi ? C.yellow : C.line}" stroke-width="2"/>
      ${text([v], x + 40, y + 160, { size: 110, weight: 800, color: C.ink, ls: -4 })}
      ${text([l], x + 40, y + 236, { size: 32, weight: 600, color: hi ? C.ink : C.muted })}`;
  }).join("")}
`));

// 6. Qualifier
const subjects = ["Maths I", "Stats I", "Computational Thinking", "English I"];
slides.push(frame(6, `
  ${text(["Writing the Qualifier?"], 80, 280, { size: 66, weight: 800, color: C.ink, ls: -2 })}
  ${text(["Take a full 4-subject mock. Get a clear", "pass or fail against the cutoff."], 80, 360, { size: 34, color: C.text, lh: 1.4 })}
  ${subjects.map((s, i) => {
    const y = 500 + i * 96;
    const pct = [72, 58, 81, 66][i];
    return `${text([s], 80, y + 30, { size: 30, weight: 600, color: C.ink })}
      ${text([`${pct}%`], W - 80, y + 30, { size: 30, weight: 700, color: C.ink, anchor: "end" })}
      <rect x="80" y="${y + 48}" width="${W - 160}" height="14" rx="7" fill="${C.line}"/>
      <rect x="80" y="${y + 48}" width="${((W - 160) * pct) / 100}" height="14" rx="7" fill="${C.ink}"/>`;
  }).join("")}
  <rect x="80" y="900" width="${W - 160}" height="150" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="2"/>
  ${icon("check", 112, 942, 64, C.green)}
  ${text(["Pass"], 204, 968, { size: 40, weight: 800, color: C.green })}
  ${text(["Cutoff: 40% in every subject, 50% average"], 204, 1014, { size: 28, color: C.text })}
  ${text(["Example result. Cutoff shown is for the General category."], 80, 1120, { size: 24, color: C.muted })}
`));

// 7. Topic-wise + most repeated + cheat sheets
const extras = [
  ["tag", "Topic-wise PYQs", ["Every past question tagged by topic.", "Practise one topic across all papers."]],
  ["repeat", "Most repeated questions", ["Question types IITM asks again and", "again, ranked by how often."]],
  ["file", "Cheat sheets", ["Notes, formula sheets and common", "traps. Printable as PDF."]],
];
slides.push(frame(7, `
  ${text(["Study smarter,", "not longer."], 80, 280, { size: 66, weight: 800, color: C.ink, lh: 1.12, ls: -2 })}
  ${extras.map(([ic, t, d], i) => {
    const y = 470 + i * 230;
    return `<rect x="80" y="${y}" width="${W - 160}" height="200" rx="22" fill="#FFFFFF" stroke="${C.line}" stroke-width="2"/>
      <rect x="112" y="${y + 36}" width="80" height="80" rx="18" fill="${C.yellow}"/>
      ${icon(ic, 130, y + 54, 44)}
      ${text([t], 224, y + 74, { size: 36, weight: 700, color: C.ink })}
      ${text(d, 224, y + 122, { size: 28, color: C.muted, lh: 1.35 })}`;
  }).join("")}
`));

// 8. CTA
slides.push(frame(8, `
  ${logoMark(80, 280, 120)}
  ${text(["Try a free mock today."], 80, 520, { size: 72, weight: 800, color: C.ink, ls: -2 })}
  ${text(["No sign-up needed to start.", "Sign up only to save your progress."], 80, 600, { size: 36, color: C.text, lh: 1.4 })}
  <rect x="80" y="730" width="${W - 160}" height="120" rx="24" fill="${C.yellow}"/>
  ${text(["btechi.in"], 130, 808, { size: 52, weight: 800, color: C.ink, ls: -1 })}
  ${icon("arrow", W - 180, 762, 56)}
  ${text(["Found this useful?"], 80, 960, { size: 34, weight: 700, color: C.ink })}
  ${text(["Share it with a friend writing the IITM BS exam."], 80, 1010, { size: 30, color: C.muted })}
  ${text(["Not affiliated with IIT Madras."], 80, 1130, { size: 22, color: C.muted })}
`, { last: true }));

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

async function run() {
  fs.mkdirSync(path.join(OUT_DIR, "images"), { recursive: true });
  const jpegs = [];
  for (const [i, svg] of slides.entries()) {
    const name = String(i + 1).padStart(2, "0");
    const img = sharp(Buffer.from(svg), { density: 72 * SCALE });
    await img.clone().png().toFile(path.join(OUT_DIR, "images", `${name}.png`));
    jpegs.push(await img.clone().flatten({ background: "#FFFFFF" }).jpeg({ quality: 92 }).toBuffer());
  }
  fs.writeFileSync(path.join(OUT_DIR, "carousel.pdf"), buildPdf(jpegs, W, H, W * SCALE, H * SCALE));
  console.log(`Wrote ${slides.length} slides and carousel.pdf to ${path.relative(process.cwd(), OUT_DIR)}/`);
}

run().catch((e) => { console.error(e); process.exit(1); });
