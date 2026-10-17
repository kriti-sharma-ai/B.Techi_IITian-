// Day 0: the launch post. "Sit the real IIT Madras BS exam before exam day." (8 slides)
import { C, H, W, frame, icon, logoMark, pill, text } from "./lib.mjs";

const TOTAL = 8;
const page = (n, body, opts) => frame(n, TOTAL, body, opts);

const slides = [];

// 1. Hook
slides.push(page(1, `
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
slides.push(page(2, `
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
slides.push(page(3, `
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
slides.push(page(4, `
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
slides.push(page(5, `
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
slides.push(page(6, `
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
slides.push(page(7, `
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
slides.push(page(8, `
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


export const launch = {
  slug: "day-0-launch",
  svgs: slides,
  caption: `
IIT Madras BS mock tests and PYQs, free: sit the real exam before exam day.

Most IIT Madras BS students practise PYQs from a PDF.

Then on exam day, everything is new: the screen, the timer, the palette, the calculator. You lose time just finding your way.

So we built BTechi.

You sit real past papers in a portal that looks and works like the real exam screen:
- Live timer that auto-submits at zero
- Question palette and mark for review
- On-screen scientific calculator
- Graded with the official answer keys

Today it has 214 real papers and 4,923 questions across 46 courses. Qualifier, Quiz 1, Quiz 2 and End Term. Foundation to Degree.

Writing the Qualifier? Take a full 4-subject mock and get a clear pass or fail against the cutoff.

It is 100% free. No sign-up needed to start.

Try a mock: https://www.btechi.in

If you know someone writing the IITM BS exam, please share this with them.

(BTechi is not affiliated with IIT Madras.)

#IITMadras #IITMBS #DataScience #OnlineDegree #ExamPrep #StudentLife
`,
};
