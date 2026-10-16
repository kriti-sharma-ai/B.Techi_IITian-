// LinkedIn carousels for the 30-day Qualifier plan (marketing/linkedin/content-plan.md).
// Each post gets a folder with carousel.pdf (upload with "Add a document") and caption.txt.
//
// Run:  node scripts/generate-carousel.mjs                 all posts
//       node scripts/generate-carousel.mjs day-02          only posts whose slug contains "day-02"
//       node scripts/generate-carousel.mjs --preview DIR   also write a contact sheet per post to DIR (for checking)
import path from "path";
import { buildSlides, writePost } from "./carousel/lib.mjs";
import { launch } from "./carousel/launch.mjs";
import { week1 } from "./carousel/week-1.mjs";

const OUT = path.resolve("marketing/linkedin");

const args = process.argv.slice(2);
const pi = args.indexOf("--preview");
const previewDir = pi >= 0 ? path.resolve(args.splice(pi, 2)[1]) : null;
const filter = args[0];

const posts = [
  { ...launch, dir: path.join(OUT, launch.slug) },
  ...week1.map((p) => ({ ...p, svgs: buildSlides(p), dir: path.join(OUT, "week-1", p.slug) })),
].filter((p) => !filter || p.slug.includes(filter));

for (const p of posts) {
  await writePost(p.dir, p.svgs, p.caption, previewDir);
  console.log(`${path.relative(process.cwd(), p.dir)}/  (${p.svgs.length} slides)`);
}
