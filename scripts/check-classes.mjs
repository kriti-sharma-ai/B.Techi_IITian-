// Fails the build on Tailwind classes that break layout in Tailwind v4.
//
// Negative bottom margins (-mb-*, -my-*): in v4, space-y-* puts its gap as
// margin-bottom on every child but the last. A child's -mb-* class then
// replaces that gap instead of shrinking it, and the next block slides up
// underneath (the "Your courses" switch covered the level headings this way).
// To shrink a gap, give the child a smaller positive margin: mb-6, not -mb-8.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BAD = /(?<![\w-])-m[by]-(?:\d|\[)/; // -mb-px is fine: the 1px tab-underline overlap.

const problems = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(tsx|ts|jsx|js|css)$/.test(name))
      readFileSync(path, "utf8")
        .split("\n")
        .forEach((line, i) => BAD.test(line) && problems.push(`${relative(ROOT, path)}:${i + 1}: ${line.trim()}`));
  }
}
walk(join(ROOT, "src"));

if (problems.length) {
  console.error("Negative bottom margin found. In Tailwind v4 it overrides the space-y gap and makes blocks overlap.");
  console.error("Use a smaller positive margin instead (mb-6, not -mb-8).\n");
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log("check-classes: ok");
