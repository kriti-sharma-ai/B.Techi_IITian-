import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const BANNERS_DIR = path.resolve("marketing/linkedin/banners/masuddar");
const OUTPUT_DIR = path.join(BANNERS_DIR, "data-scientist");
const HTML_DIR = path.resolve("scripts/linkedin-banners/masuddar/html/data-scientist");
const PHOTOS_DIR = path.join(BANNERS_DIR, "photos");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";
const AVATAR_PATH = path.join(PHOTOS_DIR, "masuddar-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

/* ─────────────────────────────────────────────────────────────
   DESIGN 1: PERFECTLY CENTERED IN THE MIDDLE
   - "DATA SCIENTIST" centered horizontally across the banner
   - Peak μ centered at exact middle (x = 792 in 1584 canvas)
   - Solves the empty space on left
   - Prevents pencil icon overlap on right
   ───────────────────────────────────────────────────────────── */
function getCenteredHtml() {
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 40px;
    }

    .content-center {
      width: 100%;
      max-width: 1400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: -8px;
    }

    .hero-title {
      font-size: 122px;
      font-weight: 900;
      letter-spacing: -4.5px;
      line-height: 0.88;
      color: #0B111E;
      text-transform: uppercase;
      margin-bottom: 22px;
      width: 100%;
      text-align: center;
    }

    .curve-svg-box {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="content-center">
    <h1 class="hero-title">DATA SCIENTIST</h1>

    <div class="curve-svg-box">
      <svg width="1380" height="150" viewBox="0 0 1380 150" fill="none">
        <!-- Baseline axis across entire centered span -->
        <line x1="10" y1="115" x2="1370" y2="115" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Shaded ±1σ Expected Reality Area (Centered at x = 690) -->
        <path d="M 520 115 
                 C 590 115, 630 22, 690 22 
                 C 750 22, 790 115, 860 115 
                 Z" 
              fill="#0B111E" fill-opacity="0.055"/>

        <!-- Gaussian Bell Curve Stroke (Centered at x = 690) -->
        <path d="M 10 114 
                 C 320 114, 470 108, 560 65
                 C 615 32, 650 22, 690 22 
                 C 730 22, 765 32, 820 65
                 C 910 108, 1060 114, 1370 114" 
              stroke="#0B111E" stroke-width="3.5" stroke-linecap="round"/>

        <!-- Center Mean (μ) Vertical Dotted Line at exact middle (x = 690) -->
        <line x1="690" y1="22" x2="690" y2="115" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="3 3"/>
        <circle cx="690" cy="22" r="5" fill="#2563EB"/>

        <!-- -1σ and +1σ Vertical Tick Lines (x = 520, x = 860) -->
        <line x1="520" y1="65" x2="520" y2="115" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="860" y1="65" x2="860" y2="115" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>

        <!-- Axis Labels -->
        <text x="350" y="136" font-family="'JetBrains Mono', monospace" font-size="12.5" fill="#94A3B8" text-anchor="middle">-2σ</text>
        <text x="520" y="136" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">-1σ</text>
        <text x="690" y="138" font-family="'JetBrains Mono', monospace" font-size="14.5" font-weight="700" fill="#2563EB" text-anchor="middle">μ</text>
        <text x="860" y="136" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">+1σ</text>
        <text x="1030" y="136" font-family="'JetBrains Mono', monospace" font-size="12.5" fill="#94A3B8" text-anchor="middle">+2σ</text>

        <!-- Peak Text -->
        <text x="690" y="12" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#2563EB" text-anchor="middle" letter-spacing="0.5">68.2% EXPECTED REALITY</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

// Live Mockup Generator showing real LinkedIn UI + Avatar
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

    /* Pencil edit icon on right top (simulating real LinkedIn UI) */
    .edit-pencil {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #FFFFFF;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
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
    <div class="mockup-banner">
      <div class="edit-pencil">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>
    </div>
    
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
  console.log("Generating Perfectly Centered Data Scientist Banner...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const html = getCenteredHtml();
  const htmlFile = path.join(HTML_DIR, "data-scientist-centered.html");
  fs.writeFileSync(htmlFile, html);

  // 1x Standard (1584 x 396)
  const png1x = path.join(OUTPUT_DIR, "data-scientist-centered.png");
  execSync(
    `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1584,396 --screenshot="${png1x}" "file://${htmlFile}"`,
    { stdio: "ignore" }
  );

  // 2x Retina (3168 x 792) Ultra High-DPI Sharpness
  const png2x = path.join(OUTPUT_DIR, "data-scientist-centered-2x.png");
  await sharp(png1x)
    .resize(3168, 792, { kernel: "lanczos3" })
    .png({ quality: 100 })
    .toFile(png2x);

  // Save to Downloads folder for instant access
  fs.copyFileSync(png1x, path.join(DOWNLOADS_DIR, "linkedin-banner-centered.png"));
  fs.copyFileSync(png2x, path.join(DOWNLOADS_DIR, "linkedin-banner-centered-2x.png"));
  fs.copyFileSync(png2x, path.join(DOWNLOADS_DIR, "linkedin-banner-latest.png"));

  // Save to Artifact directory for display
  fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, "data-scientist-centered.png"));
  fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, "data-scientist-centered-2x.png"));

  // Generate realistic LinkedIn profile mockup with edit pencil icon
  const mockupHtml = getMockupHtml(`file://${png1x}`, `file://${AVATAR_PATH}`);
  const mockupHtmlFile = path.join(HTML_DIR, "data-scientist-centered-mockup.html");
  fs.writeFileSync(mockupHtmlFile, mockupHtml);

  const mockupPng = path.join(OUTPUT_DIR, "data-scientist-centered-mockup.png");
  execSync(
    `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1200,720 --screenshot="${mockupPng}" "file://${mockupHtmlFile}"`,
    { stdio: "ignore" }
  );
  fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, "data-scientist-centered-mockup.png"));

  console.log("✓ Successfully generated centered banner!");
}

run().catch(console.error);
