/**
 * Sections that can be switched off for a deployment. Anything not listed here
 * (home, qualifier pack, practice, PYQs, blog, accounts, admin) is always on.
 *
 * The launch build ships with all of these off. Turn some back on with
 * NEXT_PUBLIC_SECTIONS, e.g. "notes,videos", or "all" for the full site.
 */
export const optionalSections = ["programs", "skills", "subjects", "notes", "videos", "books", "search"] as const;

export type Section = (typeof optionalSections)[number];

const env = (process.env.NEXT_PUBLIC_SECTIONS ?? "").split(",").map((s) => s.trim());

const enabled = new Set<string>(env.includes("all") ? optionalSections : env);

export const sectionEnabled = (section: Section) => enabled.has(section);

/** False for a link into a section that is switched off; true for everything else. */
export function hrefEnabled(href: string) {
  const first = href.split(/[/?#]/)[1] ?? "";
  return !(optionalSections as readonly string[]).includes(first) || enabled.has(first);
}
