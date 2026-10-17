// LinkedIn carousels: the 30-day Qualifier plan (marketing/linkedin/content-plan.md) and the study
// section (one carousel per subject per week, built from the cheat sheets).
// Each post gets a folder with carousel.pdf (upload with "Add a document"), title.txt (the document title)
// and caption.txt (the post text).
//
// Run:  node scripts/generate-carousel.mjs                 all posts
//       node scripts/generate-carousel.mjs day-02          only posts whose slug contains "day-02"
//       node scripts/generate-carousel.mjs maths-1-week   only the Maths I study carousels
//       node scripts/generate-carousel.mjs --preview DIR   also write a contact sheet per post to DIR (for checking)
import path from "path";
import { buildSlides, writePost } from "./carousel/lib.mjs";
import { launch } from "./carousel/launch.mjs";
import { study } from "./carousel/study.mjs";
import { week1 } from "./carousel/week-1.mjs";

const OUT = path.resolve("marketing/linkedin");

const args = process.argv.slice(2);
const pi = args.indexOf("--preview");
const previewDir = pi >= 0 ? path.resolve(args.splice(pi, 2)[1]) : null;
const filter = args[0];

const posts = [
  { ...launch, dir: path.join(OUT, launch.slug) },
  ...week1.map((p) => ({ ...p, svgs: buildSlides(p), dir: path.join(OUT, "week-1", p.slug) })),
  ...study.map((p) => ({ ...p, svgs: buildSlides(p), dir: path.join(OUT, "study", p.slug) })),
].filter((p) => !filter || p.slug.includes(filter));

for (const p of posts) {
  const meta = p.seo ? { title: p.seo.pdf, keywords: `${p.seo.keyword}, IITM BS, IIT Madras Qualifier` } : { title: "IIT Madras BS mock tests and PYQs: BTechi" };
  await writePost(p.dir, p.svgs, p.caption, previewDir, meta);
  console.log(`${path.relative(process.cwd(), p.dir)}/  (${p.svgs.length} slides)`);
}
