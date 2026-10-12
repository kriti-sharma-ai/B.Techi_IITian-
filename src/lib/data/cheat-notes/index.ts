import type { CheatBlock, CheatSheet } from "../../types";
import { ct } from "./ct";
import { english1 } from "./english-1";
import { maths1 } from "./maths-1";
import { stats1 } from "./stats-1";

/** Qualifier cheat notes, in exam order (matches QUALIFIER_SUBJECTS). */
export const cheatSheets: CheatSheet[] = [maths1, stats1, ct, english1];

export const getCheatSheet = (slug: string) => cheatSheets.find((s) => s.slug === slug);

export const cheatSheetForSubject = (subjectSlug: string) => cheatSheets.find((s) => s.subjectSlug === subjectSlug);

/** "formula sheet", "pattern sheet" or "rule sheet", from the name of the condensed view. */
export const sheetKind = (sheet: CheatSheet) => `${sheet.quickLabel.replace(/s$/, "").toLowerCase()} sheet`;

export const cheatSheetHref = (sheet: CheatSheet, view?: CheatView) => `/qualifier/notes/${sheet.slug}${view && view !== "notes" ? `?view=${view}` : ""}`;

/** Reader views: everything, the condensed formula/rule sheet, or traps and shortcuts only. */
export type CheatView = "notes" | "quick" | "traps";

/** Views a block appears in. Every block shows in the full notes. */
export function blockViews(block: CheatBlock): CheatView[] {
  if (block.kind === "formulas" || block.kind === "table" || block.kind === "code" || block.kind === "diagram") return ["notes", "quick"];
  if (block.kind === "traps" || block.kind === "tip") return ["notes", "traps"];
  return ["notes"];
}

/** Plain text of a block (markup included), for word counts and search. */
export const blockText = (b: CheatBlock): string[] => {
  switch (b.kind) {
    case "formulas":
      return b.items.flatMap((i) => [i.label, i.f, i.note ?? ""]);
    case "table":
      return [...b.head, ...b.rows.flat()];
    case "points":
    case "traps":
      return b.items;
    case "code":
      return [b.code, b.note ?? ""];
    case "example":
      return [b.q, ...b.steps, b.answer];
    case "tip":
      return [b.text];
    case "diagram":
      return [b.title ?? "", b.caption ?? ""];
  }
};

export function cheatSheetStats(sheet: CheatSheet) {
  const blocks = sheet.sections.flatMap((s) => s.blocks);
  const words = blocks.flatMap(blockText).join(" ").split(/\s+/).filter(Boolean).length;
  return {
    sections: sheet.sections.length,
    /** Formula rows plus table rows plus code patterns: the "quick sheet" entries. */
    quick: blocks.reduce((n, b) => n + (b.kind === "formulas" ? b.items.length : b.kind === "table" ? b.rows.length : b.kind === "code" ? 1 : 0), 0),
    examples: blocks.filter((b) => b.kind === "example").length,
    traps: blocks.reduce((n, b) => n + (b.kind === "traps" ? b.items.length : b.kind === "tip" ? 1 : 0), 0),
    minutes: Math.max(5, Math.round(words / 180)),
    hot: sheet.sections.filter((s) => s.hits === "every"),
  };
}
