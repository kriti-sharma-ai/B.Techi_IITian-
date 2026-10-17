import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("marketing/linkedin/banners");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";
const AVATAR_PATH = path.join(OUTPUT_DIR, "masuddar-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

function getZoomedPureHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0B111E;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    /* Content positioned exactly like the user-cropped reference */
    .content-box {
      position: absolute;
      top: 55px;
      left: 366px;
      right: 70px;
      bottom: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Massive Zoomed-in Title */
    .hero-title {
      font-size: 132px;
      font-weight: 900;
      letter-spacing: -5px;
      line-height: 0.85;
      color: #0B111E;
      text-transform: uppercase;
    }

    /* Full-width Gaussian Bell Curve */
    .curve-svg {
      width: 100%;
      height: 160px;
    }
  </style>
</head>
<body>
  <div class="content-box">
    <h1 class="hero-title">DATA SCIENTIST</h1>

    <div style="width: 100%;">
      <svg class="curve-svg" viewBox="0 0 1148 150" fill="none">
        <!-- Baseline axis across entire width -->
        <line x1="0" y1="115" x2="1148" y2="115" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Shaded ±1σ Expected Reality Area -->
        <path d="M 430 115 
                 C 490 115, 525 22, 580 22 
                 C 635 22, 670 115, 730 115 
                 Z" 
              fill="#0B111E" fill-opacity="0.055"/>

        <!-- Gaussian Bell Curve Stroke -->
        <path d="M 0 114 
                 C 255 114, 385 108, 465 65
                 C 515 32, 545 22, 580 22 
                 C 615 22, 645 32, 695 65
                 C 775 108, 905 114, 1148 114" 
              stroke="#0B111E" stroke-width="3.5" stroke-linecap="round"/>

        <!-- Center Mean (μ) Vertical Dotted Line -->
        <line x1="580" y1="22" x2="580" y2="115" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="3 3"/>
        <circle cx="580" cy="22" r="5" fill="#2563EB"/>

        <!-- -1σ and +1σ Vertical Tick Lines -->
        <line x1="430" y1="65" x2="430" y2="115" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="730" y1="65" x2="730" y2="115" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>

        <!-- Axis Labels -->
        <text x="280" y="136" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94A3B8" text-anchor="middle">-2σ</text>
        <text x="430" y="136" font-family="'JetBrains Mono', monospace" font-size="12.5" font-weight="600" fill="#475569" text-anchor="middle">-1σ</text>
        <text x="580" y="138" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#2563EB" text-anchor="middle">μ</text>
        <text x="730" y="136" font-family="'JetBrains Mono', monospace" font-size="12.5" font-weight="600" fill="#475569" text-anchor="middle">+1σ</text>
        <text x="880" y="136" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94A3B8" text-anchor="middle">+2σ</text>

        <!-- Peak Text -->
        <text x="580" y="12" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#2563EB" text-anchor="middle" letter-spacing="0.5">68.2% EXPECTED REALITY</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

// Mockup showing LinkedIn UI
function getMockupHtml(bannerImgUrl, avatarImgUrl) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 720px;
      background-color: #F3F2F0;
      color: #0F172A;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .linkedin-nav {
      height: 52px;
      background: #FFFFFF;
      border-bottom: 1px solid #E5E7EB;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
    }
    .nav-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .li-logo {
      width: 32px;
      height: 32px;
      background: #0A66C2;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 800;
      font-size: 20px;
    }
    .nav-search {
      background: #EDF3F8;
      border: none;
      border-radius: 4px;
      padding: 7px 16px;
      font-size: 13px;
      color: #475569;
      width: 240px;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 11px;
      color: #64748B;
    }

    .profile-card-container {
      width: 1040px;
      margin: 20px auto 0;
      background: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      position: relative;
    }

    .mockup-banner {
      width: 1040px;
      height: 260px;
      background-image: url('${bannerImgUrl}');
      background-size: cover;
      background-position: center;
      position: relative;
      border-bottom: 1px solid #E5E7EB;
    }

    .avatar-wrapper {
      position: absolute;
      top: 180px;
      left: 36px;
      width: 152px;
      height: 152px;
      border-radius: 50%;
      border: 4px solid #FFFFFF;
      background: #F8FAFC;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 20;
    }
    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-details {
      padding: 90px 36px 28px;
    }
    .profile-header-line {
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .p-name {
      font-size: 24px;
      font-weight: 700;
      color: #0F172A;
    }
    .degree-badge {
      font-size: 12px;
      color: #64748B;
      font-weight: 500;
    }
    .p-headline {
      font-size: 15px;
      font-weight: 500;
      color: #334155;
      margin-top: 4px;
    }
    .p-location {
      font-size: 13px;
      color: #64748B;
      margin-top: 6px;
    }
    .p-contact {
      color: #0A66C2;
      font-weight: 600;
    }

    .btn-row {
      display: flex;
      gap: 10px;
      margin-top: 16px;
    }
    .btn-primary {
      background: #0A66C2;
      color: white;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 18px;
      border-radius: 9999px;
      border: none;
    }
    .btn-secondary {
      background: transparent;
      border: 1px solid #0A66C2;
      color: #0A66C2;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 18px;
      border-radius: 9999px;
    }
  </style>
</head>
<body>
  <div class="linkedin-nav">
    <div class="nav-left">
      <div class="li-logo">in</div>
      <div class="nav-search">Search</div>
    </div>
    <div class="nav-right">
      <span>Home</span>
      <span>My Network</span>
      <span>Jobs</span>
      <span>Messaging</span>
      <span>Notifications</span>
      <span style="color:#0F172A;font-weight:600;">Me ▼</span>
    </div>
  </div>

  <div class="profile-card-container">
    <div class="mockup-banner"></div>
    
    <div class="avatar-wrapper">
      <img src="${avatarImgUrl}" class="avatar-img" />
    </div>

    <div class="profile-details">
      <div class="profile-header-line">
        <h2 class="p-name">Masuddar Rahaman</h2>
        <span class="degree-badge">• 1st</span>
      </div>
      <div class="p-headline">
        Data Scientist | Founder @ KaizenStat | SWE Intern @ Algoritmo Lab | B.Tech IT’27
      </div>
      <div class="p-location">
        Siliguri, West Bengal, India • <span class="p-contact">Contact info</span>
      </div>

      <div class="btn-row">
        <button class="btn-primary">Open to</button>
        <button class="btn-secondary">Add profile section</button>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function run() {
  console.log("Generating Zoomed-In Pure High-Quality Banner...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const html = getZoomedPureHtml();
  const htmlFile = path.join(OUTPUT_DIR, "data-scientist-zoomed-pure.html");
  fs.writeFileSync(htmlFile, html);

  // 1x Standard (1584 x 396)
  const png1x = path.join(OUTPUT_DIR, "data-scientist-zoomed-pure.png");
  execSync(
    `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1584,396 --screenshot="${png1x}" "file://${htmlFile}"`,
    { stdio: "ignore" }
  );

  // 2x Retina (3168 x 792) Ultra High-DPI Sharpness
  const png2x = path.join(OUTPUT_DIR, "data-scientist-zoomed-pure-2x.png");
  await sharp(png1x)
    .resize(3168, 792, { kernel: "lanczos3" })
    .png({ quality: 100 })
    .toFile(png2x);

  // Copy to Downloads folder
  fs.copyFileSync(png1x, path.join(DOWNLOADS_DIR, "data-scientist-zoomed-pure.png"));
  fs.copyFileSync(png2x, path.join(DOWNLOADS_DIR, "data-scientist-zoomed-pure-2x.png"));

  // Also name it easy to find in Downloads
  fs.copyFileSync(png1x, path.join(DOWNLOADS_DIR, "linkedin-banner-zoomed.png"));
  fs.copyFileSync(png2x, path.join(DOWNLOADS_DIR, "linkedin-banner-zoomed-2x.png"));

  // Copy to Artifact Directory
  fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, "data-scientist-zoomed-pure.png"));
  fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, "data-scientist-zoomed-pure-2x.png"));

  // Copy to workspace root
  fs.copyFileSync(png1x, path.resolve("linkedin-banner-zoomed.png"));
  fs.copyFileSync(png2x, path.resolve("linkedin-banner-zoomed-2x.png"));

  // Mockup
  const mockupHtml = getMockupHtml(`file://${png1x}`, `file://${AVATAR_PATH}`);
  const mockupHtmlFile = path.join(OUTPUT_DIR, "data-scientist-zoomed-pure-mockup.html");
  fs.writeFileSync(mockupHtmlFile, mockupHtml);

  const mockupPng = path.join(OUTPUT_DIR, "data-scientist-zoomed-pure-mockup.png");
  execSync(
    `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1200,720 --screenshot="${mockupPng}" "file://${mockupHtmlFile}"`,
    { stdio: "ignore" }
  );
  fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, "data-scientist-zoomed-pure-mockup.png"));

  console.log("✓ Successfully generated zoomed-in pure banner!");
}

run().catch(console.error);
