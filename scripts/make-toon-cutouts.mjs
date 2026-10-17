import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = path.resolve("marketing/youtube/btechi");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";

const maleJpg = path.join(ARTIFACT_DIR, "male_toon_fair_1792271575279.jpg");
const femaleJpg = path.join(ARTIFACT_DIR, "female_toon_char_1792271507383.jpg");

function createCutoutHtml(imgSrc) {
  return `<!DOCTYPE html>
<html>
<body style="margin:0; background:transparent;">
<canvas id="c"></canvas>
<script>
window.cutoutDone = false;
const img = new Image();
img.onload = () => {
  const c = document.getElementById('c');
  c.width = img.width;
  c.height = img.height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imgData = ctx.getImageData(0, 0, c.width, c.height);
  const data = imgData.data;
  const w = c.width, h = c.height;
  
  // Flood fill from borders
  const visited = new Uint8Array(w * h);
  const queue = [];
  
  function isBg(idx) {
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    return r > 240 && g > 240 && b > 240;
  }
  
  // Seed top row
  for (let x = 0; x < w; x++) {
    const idx = x * 4;
    if (isBg(idx)) {
      visited[x] = 1;
      queue.push(x, 0);
    }
  }
  // Seed left and right borders down to 80% height
  for (let y = 0; y < Math.floor(h * 0.8); y++) {
    const leftIdx = (y * w) * 4;
    if (isBg(leftIdx) && !visited[y * w]) {
      visited[y * w] = 1;
      queue.push(0, y);
    }
    const rightIdx = (y * w + (w - 1)) * 4;
    if (isBg(rightIdx) && !visited[y * w + (w - 1)]) {
      visited[y * w + (w - 1)] = 1;
      queue.push(w - 1, y);
    }
  }
  
  // BFS
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    
    const dirs = [[-1,0], [1,0], [0,-1], [0,1]];
    for (let i = 0; i < 4; i++) {
      const nx = cx + dirs[i][0];
      const ny = cy + dirs[i][1];
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const npos = ny * w + nx;
        if (!visited[npos]) {
          const nidx = npos * 4;
          if (isBg(nidx)) {
            visited[npos] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }
  
  // Apply transparency and smooth anti-aliased edge
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pos = y * w + x;
      const idx = pos * 4;
      if (visited[pos]) {
        data[idx+3] = 0; // transparent
      } else {
        // Anti-aliasing near boundary
        let nearBg = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy, nx = x + dx;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
              if (visited[ny * w + nx]) {
                nearBg = true;
                break;
              }
            }
          }
          if (nearBg) break;
        }
        if (nearBg && data[idx] > 220 && data[idx+1] > 220 && data[idx+2] > 220) {
          const lum = (data[idx] + data[idx+1] + data[idx+2]) / 3;
          data[idx+3] = Math.max(0, Math.min(255, (255 - lum) * 5));
        }
      }
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
  window.cutoutDone = true;
  document.body.setAttribute('data-done', '1');
};
img.src = "${imgSrc}";
</script>
</body>
</html>`;
}

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// 1. Male cutout
const maleHtml = path.resolve("scripts/youtube-banners/btechi/html/male-cutout.html");
fs.writeFileSync(maleHtml, createCutoutHtml(`file://${maleJpg}`));
const malePng = path.join(OUTPUT_DIR, "male-toon-cutout.png");

console.log("Generating male toon cutout...");
execSync(
  `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=896,1200 --screenshot="${malePng}" --default-background-color=00000000 "file://${maleHtml}"`,
  { stdio: "ignore" }
);

// 2. Female cutout
const femaleHtml = path.resolve("scripts/youtube-banners/btechi/html/female-cutout.html");
fs.writeFileSync(femaleHtml, createCutoutHtml(`file://${femaleJpg}`));
const femalePng = path.join(OUTPUT_DIR, "female-toon-cutout.png");

console.log("Generating female toon cutout...");
execSync(
  `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=896,1200 --screenshot="${femalePng}" --default-background-color=00000000 "file://${femaleHtml}"`,
  { stdio: "ignore" }
);

console.log("Toon cutouts generated successfully.");
