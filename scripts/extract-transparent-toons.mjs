import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = path.resolve("marketing/youtube/btechi");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const maleJpg = path.join(ARTIFACT_DIR, "male_toon_fair_1792271575279.jpg");
const femaleJpg = path.join(ARTIFACT_DIR, "female_toon_char_1792271507383.jpg");

function generateCutoutBase64(imgPath, outPngPath) {
  const htmlPath = `/tmp/cutout_${Date.now()}.html`;
  const html = `<!DOCTYPE html>
<html>
<body>
<img id="src" src="file://${imgPath}">
<canvas id="c"></canvas>
<div id="output"></div>
<script>
const img = document.getElementById('src');
img.onload = () => {
  const c = document.getElementById('c');
  c.width = img.width;
  c.height = img.height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imgData = ctx.getImageData(0, 0, c.width, c.height);
  const data = imgData.data;
  const w = c.width, h = c.height;
  
  const visited = new Uint8Array(w * h);
  const queue = [];
  
  function isBg(idx) {
    return data[idx] > 240 && data[idx+1] > 240 && data[idx+2] > 240;
  }
  
  for (let x = 0; x < w; x++) {
    if (isBg(x * 4)) {
      visited[x] = 1;
      queue.push(x, 0);
    }
  }
  for (let y = 0; y < Math.floor(h * 0.75); y++) {
    const lIdx = (y * w) * 4;
    if (isBg(lIdx) && !visited[y * w]) {
      visited[y * w] = 1;
      queue.push(0, y);
    }
    const rIdx = (y * w + (w - 1)) * 4;
    if (isBg(rIdx) && !visited[y * w + (w - 1)]) {
      visited[y * w + (w - 1)] = 1;
      queue.push(w - 1, y);
    }
  }
  
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const dirs = [[-1,0], [1,0], [0,-1], [0,1]];
    for (let i = 0; i < 4; i++) {
      const nx = cx + dirs[i][0], ny = cy + dirs[i][1];
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const npos = ny * w + nx;
        if (!visited[npos]) {
          if (isBg(npos * 4)) {
            visited[npos] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }
  
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pos = y * w + x;
      const idx = pos * 4;
      if (visited[pos]) {
        data[idx+3] = 0;
      } else {
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
  document.getElementById('output').textContent = c.toDataURL('image/png');
};
</script>
</body>
</html>`;

  fs.writeFileSync(htmlPath, html);
  const dom = execSync(
    `"${chromePath}" --headless --disable-gpu --virtual-time-budget=3000 --dump-dom "file://${htmlPath}"`
  ).toString();
  
  const match = dom.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
  if (!match) {
    throw new Error("Failed to extract dataURL from DOM");
  }
  const base64Data = match[1];
  fs.writeFileSync(outPngPath, Buffer.from(base64Data, "base64"));
  console.log(`Saved transparent PNG: ${outPngPath}`);
}

generateCutoutBase64(maleJpg, path.join(OUTPUT_DIR, "male-toon-cutout.png"));
generateCutoutBase64(femaleJpg, path.join(OUTPUT_DIR, "female-toon-cutout.png"));
