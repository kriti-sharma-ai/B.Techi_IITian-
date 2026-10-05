// Serves the pdf.js worker from /public so it is cached by the CDN and
// never bundled into page JavaScript.
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("public", { recursive: true });
copyFileSync("node_modules/pdfjs-dist/build/pdf.worker.min.mjs", "public/pdf.worker.min.mjs");
console.log("Copied pdf.js worker to public/");
