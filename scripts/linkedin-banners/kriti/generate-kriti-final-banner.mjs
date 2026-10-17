import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const KRITI_DIR = path.resolve("marketing/linkedin/banners/kriti");
const OUTPUT_DIR = path.join(KRITI_DIR, "final");
const HTML_DIR = path.resolve("scripts/linkedin-banners/kriti/html/final");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";
const AVATAR_PATH = path.join(KRITI_DIR, "photos", "kriti-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

function getFinalHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0B0B0B;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    /* BTechi Top Yellow Bar */
    .yellow-top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: #FFD21C;
      z-index: 20;
    }

    /* BTechi Math Square Grid */
    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    /* TOP-LEFT: PURE WORD "Statistical" ONLY - ENLARGED */
    .top-left-stat-pure {
      position: absolute;
      top: 42px;
      left: 55px;
      font-size: 40px;
      font-weight: 900;
      color: #0B0B0B;
      letter-spacing: -1.2px;
      line-height: 1;
      z-index: 15;
    }

    /* Main Container (clearing avatar on left) */
    .main-wrap {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 380px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
    }

    /* Big Text Column - NO kicker tag */
    .text-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 630px;
    }

    .big-title {
      font-size: 75px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.94;
      color: #0B0B0B;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
    }
    .line-1 { white-space: nowrap; }
    .line-2 { white-space: nowrap; margin-top: 4px; }

    .mail-row {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: #64748B;
      font-weight: 600;
    }
    .mail-row strong { color: #0B0B0B; }
    .dot-yellow {
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border-radius: 50%;
    }

    /* Venn Diagram Container */
    .venn-container {
      width: 500px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="yellow-top-bar"></div>
  <div class="bg-math-grid"></div>

  <!-- Top-Left: Pure word "Statistical" only -->
  <div class="top-left-stat-pure">Statistical</div>

  <div class="main-wrap">
    <!-- Big Headline -->
    <div class="text-column">
      <h1 class="big-title">
        <span class="line-1">DATA MINDED</span>
        <span class="line-2">&amp; MANAGEMENT.</span>
      </h1>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <!-- Venn Diagram Column: JUST DATA, MANAGEMENT, and IMPACT (with huge, visible fonts) -->
    <div class="venn-container">
      <svg width="500" height="300" viewBox="0 0 500 300" fill="none">
        <defs>
          <clipPath id="finalClip">
            <circle cx="160" cy="136" r="115"/>
          </clipPath>
          <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 2 L 8 5 L 0 8 L 2 5 Z" fill="#0B0B0B"/>
          </marker>
        </defs>

        <!-- Circle 1: Left -->
        <circle cx="160" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
        
        <!-- Circle 2: Right -->
        <circle cx="330" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>

        <!-- Middle Yellow Intersection -->
        <circle cx="330" cy="136" r="115" fill="#FFD21C" clip-path="url(#finalClip)"/>
        
        <!-- Re-stroke circle boundaries -->
        <circle cx="160" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="330" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <!-- Left Circle Label: DATA (Big, Bold, Centered) -->
        <text x="115" y="136" dominant-baseline="central" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>

        <!-- Right Circle Label: MANAGEMENT (Big, Bold, 100% visible with ample margin) -->
        <text x="360" y="136" dominant-baseline="central" font-family="'Plus Jakarta Sans', sans-serif" font-size="18.5" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">MANAGEMENT</text>

        <!-- Refined Graceful Curved Callout Arrow pointing into the intersection -->
        <path d="M 260 250 Q 278 190 247 136" stroke="#0B0B0B" stroke-width="2.2" stroke-linecap="round" fill="none" marker-end="url(#arrowhead)"/>

        <!-- External "IMPACT" Label (Prominent, High-Impact 32px Font) -->
        <text x="245" y="272" dominant-baseline="central" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="2">IMPACT</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

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
    .nav-left { display: flex; align-items: center; gap: 12px; }
    .li-logo {
      width: 32px; height: 32px; background: #0A66C2; border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 800; font-size: 20px;
    }
    .nav-search {
      background: #EDF3F8; border: none; border-radius: 4px;
      padding: 7px 16px; font-size: 13px; color: #475569; width: 240px;
    }
    .nav-right { display: flex; align-items: center; gap: 24px; font-size: 11px; color: #64748B; }

    .profile-card-container {
      width: 1040px; margin: 20px auto 0; background: #FFFFFF;
      border: 1px solid #E5E7EB; border-radius: 10px; overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06); position: relative;
    }

    .mockup-banner {
      width: 1040px; height: 260px;
      background-image: url('${bannerImgUrl}');
      background-size: cover; background-position: center;
      position: relative; border-bottom: 1px solid #E5E7EB;
    }

    .edit-pencil-btn {
      position: absolute; top: 14px; right: 14px; width: 32px; height: 32px;
      background: #FFFFFF; border-radius: 50%; display: flex;
      align-items: center; justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15); border: 1px solid #CBD5E1;
    }

    .avatar-wrapper {
      position: absolute; top: 180px; left: 36px; width: 152px; height: 152px;
      border-radius: 50%; border: 4px solid #FFFFFF; background: #F8FAFC;
      overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 20;
    }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; }

    .profile-details { padding: 90px 36px 28px; }
    .profile-header-line { display: flex; align-items: baseline; gap: 10px; }
    .p-name { font-size: 24px; font-weight: 700; color: #0B0B0B; }
    .degree-badge { font-size: 12px; color: #64748B; font-weight: 500; }
    .p-headline { font-size: 15px; font-weight: 500; color: #334155; margin-top: 4px; }
    .p-location { font-size: 13px; color: #64748B; margin-top: 6px; }
    .p-contact { color: #0A66C2; font-weight: 600; }

    .btn-row { display: flex; gap: 10px; margin-top: 16px; }
    .btn-primary {
      background: #0A66C2; color: white; font-size: 14px; font-weight: 600;
      padding: 6px 18px; border-radius: 9999px; border: none;
    }
    .btn-secondary {
      background: transparent; border: 1px solid #0A66C2; color: #0A66C2;
      font-size: 14px; font-weight: 600; padding: 6px 18px; border-radius: 9999px;
    }
  </style>
</head>
<body>
  <div class="linkedin-nav">
    <div class="nav-left">
      <div class="li-logo">in</div>
      <input type="text" class="nav-search" value="Search" readonly>
    </div>
    <div class="nav-right">
      <span>Home</span><span>My Network</span><span>Jobs</span><span>Messaging</span><span>Notifications</span><span>Me ▼</span>
    </div>
  </div>

  <div class="profile-card-container">
    <div class="mockup-banner">
      <div class="edit-pencil-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      </div>
    </div>
    <div class="avatar-wrapper">
      <img src="${avatarImgUrl}" class="avatar-img" alt="Kriti Sharma">
    </div>

    <div class="profile-details">
      <div class="profile-header-line">
        <h1 class="p-name">Kriti Sharma</h1>
        <span class="degree-badge">• 1st</span>
      </div>
      <p class="p-headline">Future-focused. Data-driven. Management mindset.</p>
      <p class="p-location">India • <span class="p-contact">Contact info</span></p>

      <div class="btn-row">
        <button class="btn-primary">Open to</button>
        <button class="btn-secondary">Add profile section</button>
      </div>
    </div>
  </div>
</body>
</html>`;
}

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const bannerName = "kriti-sharma-linkedin-banner-final";
const htmlFile = path.join(HTML_DIR, `${bannerName}.html`);
const png1x = path.join(OUTPUT_DIR, `${bannerName}.png`);
const png2x = path.join(OUTPUT_DIR, `${bannerName}-2x.png`);
const mockupHtml = path.join(HTML_DIR, `${bannerName}-mockup.html`);
const mockupPng = path.join(OUTPUT_DIR, `${bannerName}-mockup.png`);

fs.writeFileSync(htmlFile, getFinalHtml());

console.log("Rendering refined banner: only DATA, MANAGEMENT, and large IMPACT (fast)...");

// 1. Standard 1584x396
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=1584,396 --screenshot="${png1x}" --default-background-color=00000000 "file://${htmlFile}"`,
  { stdio: "ignore" }
);

// 2. 2x Retina 3168x792
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=1584,396 --force-device-scale-factor=2 --screenshot="${png2x}" --default-background-color=00000000 "file://${htmlFile}"`,
  { stdio: "ignore" }
);

// 3. Mockup
fs.writeFileSync(mockupHtml, getMockupHtml(`file://${png1x}`, `file://${AVATAR_PATH}`));
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=1200,720 --screenshot="${mockupPng}" --default-background-color=00000000 "file://${mockupHtml}"`,
  { stdio: "ignore" }
);

// Copy to Artifact Directory
fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, `${bannerName}.png`));
fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, `${bannerName}-2x.png`));
fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, `${bannerName}-mockup.png`));

// Copy directly to ~/Downloads for instant one-click access
fs.copyFileSync(png1x, path.join(DOWNLOADS_DIR, `${bannerName}.png`));
fs.copyFileSync(png2x, path.join(DOWNLOADS_DIR, `${bannerName}-2x.png`));
fs.copyFileSync(mockupPng, path.join(DOWNLOADS_DIR, `${bannerName}-mockup.png`));

console.log("Done! Refined banner saved.");
