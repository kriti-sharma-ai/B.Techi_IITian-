// Study carousels: one per Qualifier subject per syllabus week (4 x 4 = 16), e.g. "Maths I week 1 formulas".
// Built straight from the cheat sheets in src/lib/data/cheat-notes/, so they match /qualifier/notes and
// update when the notes change. Each carousel has the week's formulas, tables and code patterns (the
// site's "quick" view), the key points and the traps for each topic. Worked examples and diagrams are left out.
import { fits } from "./lib.mjs";

// The cheat sheets are TypeScript; Node strips the types. Hide its "module type not specified" warning.
process.removeAllListeners("warning");
const notes = "../../src/lib/data/cheat-notes";
const [{ maths1 }, { stats1 }, { ct }, { english1 }] = await Promise.all([
  import(`${notes}/maths-1.ts`), import(`${notes}/stats-1.ts`), import(`${notes}/ct.ts`), import(`${notes}/english-1.ts`),
]);
const SHEETS = [maths1, stats1, ct, english1];

/**
 * Short topic line for each week, written from the sections the cheat sheet puts in that week.
 * Not QUALIFIER_SYLLABUS: for CT and English weeks 3-4 its week titles don't match the sheets' `week` fields.
 * Update this if a section moves to another week.
 */
const TOPICS = {
  "maths-1": ["Sets, Venn diagrams, relations and functions", "Coordinate geometry and straight lines", "Quadratic functions and equations", "Polynomials and their graphs"],
  "stats-1": ["Types of data and scales", "Describing categorical data", "Describing numerical data", "Association between two variables"],
  ct: ["Datasets, variables and iteration", "Filtering, AND / OR, max and min", "Procedures, slabs and multiple passes", "Nested loops, binning and tracing"],
  "english-1": ["Sounds and pronunciation", "Parts of speech and grammar", "Articles, prepositions and phrasal verbs", "Vocabulary and reading comprehension"],
};

const SITE = "https://www.btechi.in";
const utm = (p, post) => `${SITE}${p}?utm_source=linkedin&utm_medium=social&utm_campaign=study-notes&utm_content=${post}`;
const TAGS = "#IITMadras #IITMBS #IITMadrasQualifier #IITMQualifier #DataScience";
const HITS = { every: "In every paper", often: "Often asked", sometimes: "Sometimes asked" };

// ---------- Cheat-note markup to plain Unicode ----------
// Markup (see CheatFormula in src/lib/types.ts): **bold**, ==highlight==, `code`, ^{sup}, _{sub},
// √{radicand}, ‾{overline} and [[numerator // denominator]].

// No superscript minus: the font has no glyph for it, so 2^{−1} becomes 2^(−1).
const SUP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", "+": "⁺", "(": "⁽", ")": "⁾", n: "ⁿ", i: "ⁱ",
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", k: "ᵏ", m: "ᵐ", p: "ᵖ", r: "ʳ", s: "ˢ", t: "ᵗ", x: "ˣ", y: "ʸ" };
const SUB = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉", "+": "₊", "−": "₋", a: "ₐ", e: "ₑ", o: "ₒ", x: "ₓ", i: "ᵢ", j: "ⱼ", k: "ₖ", n: "ₙ", m: "ₘ", p: "ₚ", s: "ₛ", t: "ₜ" };
const simple = (s) => !/[\s+−\-×·/=]/.test(s); // one token: no brackets needed
const mapAll = (s, table) => ([...s].every((c) => table[c]) ? [...s].map((c) => table[c]).join("") : null);

/** Replaces ^{…}, _{…}, √{…} and ‾{…}, matching nested braces. */
function braced(s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const mark = s[i];
    if ("^_√‾".includes(mark) && s[i + 1] === "{") {
      let depth = 0, j = i + 1;
      for (; j < s.length; j++) { if (s[j] === "{") depth++; else if (s[j] === "}" && --depth === 0) break; }
      const inner = braced(s.slice(i + 2, j));
      if (mark === "^") out += mapAll(inner, SUP) ?? `^(${inner})`;
      else if (mark === "_") out += mapAll(inner, SUB) ?? `_(${inner})`;
      else if (mark === "√") out += simple(inner) ? `√${inner}` : `√(${inner})`;
      else out += [...inner].length === 1 ? `${inner}̄` : [...inner].map((c) => `${c}̅`).join("");
      i = j;
    } else out += mark;
  }
  return out;
}

export function plain(s) {
  if (!s) return s;
  return braced(String(s))
    .replace(/\[\[(.+?) \/\/ (.+?)\]\]/g, (_, a, b) => `${simple(a) ? a : `(${a})`}/${simple(b) ? b : `(${b})`}`)
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/==(.+?)==/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

// ---------- Slides ----------

/**
 * Puts items on as few slides as possible, spread evenly (5 rows on 2 slides become 3 + 2, not 4 + 1).
 * `make(items)` returns a slide spec.
 */
function paginate(items, make) {
  const greedy = [];
  let chunk = [];
  for (const item of items) {
    if (chunk.length && !fits(make([...chunk, item]))) { greedy.push(chunk); chunk = []; }
    chunk.push(item);
  }
  if (chunk.length) greedy.push(chunk);
  const k = greedy.length;
  if (k > 1) {
    const even = Array.from({ length: k }, (_, i) => items.slice(Math.round((i * items.length) / k), Math.round(((i + 1) * items.length) / k)));
    if (even.every((c) => c.length && fits(make(c)))) return even.map(make);
  }
  return greedy.map(make);
}

function sectionSlides(section) {
  const kicker = `${section.title} · ${HITS[section.hits]}`;
  const slides = [];
  const traps = [];
  for (const b of section.blocks) {
    const title = plain(b.title) ?? section.title;
    if (b.kind === "formulas") {
      slides.push(...paginate(b.items.map((i) => [plain(i.label), plain(i.f), plain(i.note)]), (rows) => ({ type: "formulas", kicker, title, rows })));
    } else if (b.kind === "table") {
      const head = b.head.map(plain);
      slides.push(...paginate(b.rows.map((r) => r.map(plain)), (rows) => ({ type: "table", kicker, title, head, rows })));
    } else if (b.kind === "code") {
      slides.push({ type: "code", kicker, title, code: b.code, note: plain(b.note) });
    } else if (b.kind === "points") {
      slides.push(...paginate(b.items.map(plain), (items) => ({ type: "bullets", tone: "dot", kicker, title: plain(b.title) ?? "Key points", items })));
    } else if (b.kind === "traps") {
      traps.push(...b.items.map(plain));
    } else if (b.kind === "tip") {
      traps.push(`Tip: ${plain(b.text)}`);
    }
    // Examples and diagrams are left out: examples are the quiz posts, diagrams are drawn by the website.
  }
  if (traps.length) slides.push(...paginate(traps, (items) => ({ type: "bullets", tone: "alert", kicker, title: "Common traps", items })));
  return slides;
}

function studyPost(sheet, week) {
  const sections = sheet.sections.filter((s) => s.week === week);
  const topic = TOPICS[sheet.slug][week - 1];
  const label = sheet.quickLabel.toLowerCase(); // formulas, patterns or rules
  const sheetName = `${label.replace(/s$/, "")} sheet`; // formula sheet, pattern sheet or rule sheet
  const slug = `${sheet.slug}-week-${week}-${label}`;
  const notesPath = `/qualifier/notes/${sheet.slug}`;

  const slides = [
    { type: "cover", kicker: `${sheet.short} · Week ${week}`, title: `${sheet.short} week ${week} ${label}: ${topic}`, sub: `${sections.map((s) => s.title).join(" · ")}. Save this PDF for revision.` },
    ...sections.flatMap(sectionSlides),
    { type: "cta", title: `Notes for every week of ${sheet.short}, free.`, sub: `Full notes, the ${sheetName} and common traps, with worked PYQs.`, url: `btechi.in${notesPath}`, ask: "Save this PDF for revision. Share it with a friend writing the Qualifier." },
  ];

  // Google reads only the caption, so the key formulas also go in as plain text.
  const keyRows = sections
    .flatMap((s) => s.blocks.filter((b) => b.kind === "formulas").flatMap((b) => b.items))
    .map((i) => `${plain(i.label)}: ${plain(i.f)}`)
    .filter((l) => l.length <= 70)
    .slice(0, 8);
  const trap = sections.flatMap((s) => s.blocks.filter((b) => b.kind === "traps").flatMap((b) => b.items))[0];
  const lower = topic[0].toLowerCase() + topic.slice(1);
  const caption = [
    `IITM Qualifier ${sheet.short} week ${week} ${label} PDF: ${lower}.`,
    `Everything from ${sheet.short} week ${week} in one carousel: ${sections.map((s) => s.title).join(", ")}.`,
    keyRows.length ? `Key ${label}:\n${keyRows.join("\n")}` : "",
    trap ? `Common trap: ${plain(trap)}` : "",
    "Save this PDF for your revision.",
    `Full ${sheet.short} notes, ${sheetName} and traps: ${utm(notesPath, slug)}`,
    TAGS,
  ].filter(Boolean).join("\n\n");

  return {
    slug,
    slides,
    caption,
    seo: { keyword: `iitm qualifier ${sheet.short.toLowerCase()} week ${week} ${label}`, pdf: `IITM Qualifier ${sheet.short} week ${week} ${label} PDF: ${topic}` },
  };
}

export const study = SHEETS.flatMap((sheet) => [1, 2, 3, 4].map((w) => studyPost(sheet, w)));
