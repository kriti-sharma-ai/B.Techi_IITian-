import fs from "fs";
import { execSync } from "child_process";

const html = `<!DOCTYPE html>
<html>
<body>
<canvas id="c"></canvas>
<script>
const img = new Image();
img.onload = () => {
  const canvas = document.getElementById('c');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  
  // Find inner bounds where black border exists
  // Sample a horizontal line across y = 100
  let firstDarkX = -1, lastDarkX = -1;
  const y = 200;
  for (let x = 0; x < img.width; x++) {
    const idx = (y * img.width + x) * 4;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (r < 50 && g < 50 && b < 50) {
      if (firstDarkX === -1) firstDarkX = x;
      lastDarkX = x;
    }
  }
  
  // Sample vertical line across x = 200
  let firstDarkY = -1, lastDarkY = -1;
  const x = 200;
  for (let cy = 0; cy < img.height; cy++) {
    const idx = (cy * img.width + x) * 4;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (r < 50 && g < 50 && b < 50) {
      if (firstDarkY === -1) firstDarkY = cy;
      lastDarkY = cy;
    }
  }
  
  document.body.setAttribute('data-result', JSON.stringify({
    width: img.width,
    height: img.height,
    firstDarkX, lastDarkX,
    firstDarkY, lastDarkY
  }));
};
img.src = "file:///Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8/.user_uploaded/media_1792270645809.png";
</script>
</body>
</html>`;

fs.writeFileSync("/tmp/inspect-male.html", html);

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const res = execSync(`"${chromePath}" --headless --dump-dom "file:///tmp/inspect-male.html"`).toString();
console.log(res.match(/data-result="([^"]+)"/)?.[1] || "No match");
