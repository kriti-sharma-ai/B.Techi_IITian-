import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const KRITI_DIR = path.resolve("marketing/linkedin/banners/kriti");
const OUTPUT_DIR = path.join(KRITI_DIR, "balanced");
const HTML_DIR = path.resolve("scripts/linkedin-banners/kriti/html/balanced");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";
const AVATAR_PATH = path.join(KRITI_DIR, "photos", "kriti-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

const icons = {
  mail: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  pencil: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`
};

/* ─────────────────────────────────────────────────────────────
   DESIGN 1: BTECHI ICON & BADGE IN TOP-LEFT (Matches Uploaded Screenshot)
   - Yellow top bar
   - In the top-left (above avatar, y = 35px):
     Yellow square rounded icon [ KS ] + "IIT MADRAS BS // TECH & DATA"
   - Main content (x = 380px):
       DATA MINDED
       & MANAGEMENT.
   - 2-Circle Venn Diagram with yellow intersection
   - Top-left is now active, branded, and balanced!
   ───────────────────────────────────────────────────────────── */
function getBalanced1Html() {
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

    .yellow-top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: #FFD21C;
      z-index: 20;
    }

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    /* TOP-LEFT BRAND BADGE (Fills the empty space above avatar!) */
    .top-left-brand {
      position: absolute;
      top: 36px;
      left: 50px;
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 15;
    }
    .badge-icon {
      width: 44px;
      height: 44px;
      background: #FFD21C;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      font-weight: 900;
      color: #0B0B0B;
      letter-spacing: -0.5px;
      box-shadow: 0 2px 8px rgba(255, 210, 28, 0.35);
    }
    .badge-text-box {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .badge-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 0.5px;
    }
    .badge-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: #64748B;
      letter-spacing: 0.5px;
    }

    .main-wrap {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 380px;
      margin-right: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
    }

    .text-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 640px;
    }

    .kicker-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .kicker-tag::before {
      content: '';
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border: 1.5px solid #0B0B0B;
      border-radius: 2px;
    }

    .big-title {
      font-size: 74px;
      font-weight: 900;
      letter-spacing: -3.2px;
      line-height: 0.95;
      color: #0B0B0B;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
    }
    .line-1 { white-space: nowrap; }
    .line-2 { white-space: nowrap; margin-top: 4px; }

    .mail-row {
      margin-top: 22px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
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

    .venn-container {
      width: 480px;
      height: 290px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="yellow-top-bar"></div>
  <div class="bg-math-grid"></div>

  <!-- Top-Left Branded Icon (Direct homage to BTechi screenshot) -->
  <div class="top-left-brand">
    <div class="badge-icon">KS</div>
    <div class="badge-text-box">
      <div class="badge-title">IIT MADRAS BS</div>
      <div class="badge-sub">DATA &amp; STRATEGY</div>
    </div>
  </div>

  <div class="main-wrap">
    <div class="text-column">
      <div class="kicker-tag">CORE COMPETENCY // LEADERSHIP</div>
      <h1 class="big-title">
        <span class="line-1">DATA MINDED</span>
        <span class="line-2">&amp; MANAGEMENT.</span>
      </h1>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <div class="venn-container">
      <svg width="480" height="280" viewBox="0 0 480 280" fill="none">
        <defs>
          <clipPath id="b1Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#b1Clip)"/>
        
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="105" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>
        <text x="105" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">MINDED</text>

        <text x="375" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">MANAGEMENT</text>
        <text x="375" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION</text>

        <circle cx="240" cy="130" r="5" fill="#0B0B0B"/>
        <text x="240" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">IMPACT</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: THE PERFECTLY CENTERED BANNER (Masuddar Style)
   - Centered horizontally across the full banner width!
   - Solves the empty top-left completely because the massive
     headline starts on the left and spans right across!
   - Venn diagram centered right in the middle
   ───────────────────────────────────────────────────────────── */
function getBalanced2Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@900&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 40px;
    }

    .yellow-top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: #FFD21C;
    }

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    .content-center {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 1420px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: -6px;
    }

    .hero-title {
      font-size: 84px;
      font-weight: 900;
      letter-spacing: -3.8px;
      line-height: 0.95;
      color: #0B0B0B;
      text-transform: uppercase;
      margin-bottom: 14px;
      white-space: nowrap;
    }

    .venn-svg-box {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .mail-footer {
      margin-top: 14px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      font-weight: 600;
    }
    .mail-footer strong { color: #0B0B0B; }
    .dot-yellow {
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="yellow-top-bar"></div>
  <div class="bg-math-grid"></div>

  <div class="content-center">
    <!-- Huge Centered Title: Fills left, center, and right -->
    <h1 class="hero-title">DATA MINDED &amp; MANAGEMENT.</h1>

    <div class="venn-svg-box">
      <svg width="680" height="175" viewBox="0 0 680 175" fill="none">
        <defs>
          <clipPath id="cenClip"><circle cx="270" cy="88" r="85"/></clipPath>
        </defs>

        <!-- Circles -->
        <circle cx="270" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
        <circle cx="410" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>

        <!-- Intersection -->
        <circle cx="410" cy="88" r="85" fill="#FFD21C" clip-path="url(#cenClip)"/>

        <!-- Re-stroke -->
        <circle cx="270" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="410" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <!-- Axis Baseline -->
        <line x1="40" y1="162" x2="640" y2="162" stroke="#CBD5E1" stroke-width="1.5"/>

        <!-- Labels Inside Circles -->
        <text x="200" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle">DATA</text>
        <text x="200" y="104" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">MINDSET</text>

        <text x="480" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="900" fill="#0B0B0B" text-anchor="middle">MANAGEMENT</text>
        <text x="480" y="104" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION</text>

        <!-- Center Intersection Point & Label -->
        <circle cx="340" cy="78" r="4.5" fill="#0B0B0B"/>
        <text x="340" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle">SWEET SPOT</text>
      </svg>
    </div>

    <div class="mail-footer">
      <span class="dot-yellow"></span>
      <span><strong>kritisharma1481550@gmail.com</strong></span>
      <span>•</span>
      <span>STRATEGY &amp; DECISIONING</span>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: ARCHITECTURAL TECHNICAL GRID (Top-Left Coordinates & Spec)
   - In top-left: High-tech Swiss architectural spec block
     "SYS // IITM BS • DATA × MANAGEMENT" with yellow accent bar
   - Main 2-line title with Ampersand on line 1:
     DATA MINDED &
     MANAGEMENT.
   - 2-Circle Venn Diagram
   ───────────────────────────────────────────────────────────── */
function getBalanced3Html() {
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

    .yellow-top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: #FFD21C;
      z-index: 20;
    }

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    /* TOP-LEFT ARCHITECTURAL SPEC PILL (Fills top-left above avatar) */
    .top-left-spec {
      position: absolute;
      top: 36px;
      left: 50px;
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-left: 4px solid #FFD21C;
      padding: 8px 16px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      z-index: 15;
    }
    .spec-row-1 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 1px;
    }
    .spec-row-2 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #64748B;
      margin-top: 2px;
    }

    .main-wrap {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 380px;
      margin-right: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
    }

    .text-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 640px;
    }

    .kicker-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .kicker-tag::before {
      content: '';
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border: 1.5px solid #0B0B0B;
      border-radius: 2px;
    }

    .big-title {
      font-size: 78px;
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
      margin-top: 22px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
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

    .venn-container {
      width: 480px;
      height: 290px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="yellow-top-bar"></div>
  <div class="bg-math-grid"></div>

  <!-- Top-Left Architectural Tag -->
  <div class="top-left-spec">
    <div class="spec-row-1">SYSTEM // IITM BS</div>
    <div class="spec-row-2">ANALYTICS &amp; MANAGEMENT CORE</div>
  </div>

  <div class="main-wrap">
    <div class="text-column">
      <div class="kicker-tag">STRATEGY × EXECUTION</div>
      <h1 class="big-title">
        <span class="line-1">DATA MINDED &amp;</span>
        <span class="line-2">MANAGEMENT.</span>
      </h1>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <div class="venn-container">
      <svg width="480" height="280" viewBox="0 0 480 280" fill="none">
        <defs>
          <clipPath id="b3Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#b3Clip)"/>
        
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="105" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>
        <text x="105" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">MINDED</text>

        <text x="375" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">MANAGEMENT</text>
        <text x="375" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION</text>

        <circle cx="240" cy="130" r="5" fill="#0B0B0B"/>
        <text x="240" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">IMPACT</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 4: WIDE FLOW (DATA MINDED above avatar + & MANAGEMENT below)
   - Line 1 "DATA MINDED" starts on the left (x = 80px, above the avatar circle!)
   - Line 2 "& MANAGEMENT." is placed cleanly beside the avatar
   - Giant, seamless flow that eliminates any left emptiness!
   ───────────────────────────────────────────────────────────── */
function getBalanced4Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@900&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
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

    .yellow-top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: #FFD21C;
      z-index: 20;
    }

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    /* LINE 1 STARTS ABOVE THE AVATAR (x = 60px, y = 48px) */
    .line-top-hero {
      position: absolute;
      top: 48px;
      left: 60px;
      font-size: 80px;
      font-weight: 900;
      letter-spacing: -3.8px;
      color: #0B0B0B;
      line-height: 1;
      text-transform: uppercase;
      white-space: nowrap;
      z-index: 15;
    }

    /* LINE 2 & CONTENT STARTS AT x = 380px TO CLEAR AVATAR */
    .line-bottom-content {
      position: absolute;
      top: 155px;
      left: 380px;
      right: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
    }

    .mgmt-block {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .line-bottom-text {
      font-size: 80px;
      font-weight: 900;
      letter-spacing: -3.8px;
      line-height: 1;
      color: #0B0B0B;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .mail-row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
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

    .venn-container {
      width: 440px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="yellow-top-bar"></div>
  <div class="bg-math-grid"></div>

  <!-- Line 1: DATA MINDED spanning from the top-left above avatar -->
  <div class="line-top-hero">DATA MINDED</div>

  <!-- Line 2: & MANAGEMENT + Venn Diagram beside avatar -->
  <div class="line-bottom-content">
    <div class="mgmt-block">
      <div class="line-bottom-text">&amp; MANAGEMENT.</div>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <div class="venn-container">
      <svg width="420" height="190" viewBox="0 0 420 190" fill="none">
        <defs>
          <clipPath id="w1Clip"><circle cx="150" cy="95" r="75"/></clipPath>
        </defs>

        <circle cx="150" cy="95" r="75" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
        <circle cx="270" cy="95" r="75" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
        <circle cx="270" cy="95" r="75" fill="#FFD21C" clip-path="url(#w1Clip)"/>

        <circle cx="150" cy="95" r="75" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="270" cy="95" r="75" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="110" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle">DATA</text>
        <text x="310" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle">MGMT</text>
        <text x="210" y="99" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#0B0B0B" text-anchor="middle">IMPACT</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

// Realistic LinkedIn Profile Mockup
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

    .edit-pencil-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 32px;
      height: 32px;
      background: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      border: 1px solid #CBD5E1;
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
      color: #0B0B0B;
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
      <input type="text" class="nav-search" value="Search" readonly>
    </div>
    <div class="nav-right">
      <span>Home</span>
      <span>My Network</span>
      <span>Jobs</span>
      <span>Messaging</span>
      <span>Notifications</span>
      <span>Me ▼</span>
    </div>
  </div>

  <div class="profile-card-container">
    <div class="mockup-banner">
      <div class="edit-pencil-btn">${icons.pencil}</div>
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

const designs = [
  {
    id: "kriti-balanced-1-btechi-badge",
    title: "Option 1: BTechi Brand Badge in Top-Left (Matches Screenshot)",
    htmlGenerator: getBalanced1Html
  },
  {
    id: "kriti-balanced-2-centered-masuddar",
    title: "Option 2: Monumental Centered (Masuddar Style, Spans Across Top)",
    htmlGenerator: getBalanced2Html
  },
  {
    id: "kriti-balanced-3-architectural-spec",
    title: "Option 3: Swiss Technical Spec Pill in Top-Left",
    htmlGenerator: getBalanced3Html
  },
  {
    id: "kriti-balanced-4-wide-flow",
    title: "Option 4: Wide Flow ('DATA MINDED' directly above avatar)",
    htmlGenerator: getBalanced4Html
  }
];

console.log("Generating Balanced Banners solving top-left space (1584x396)...");

for (const d of designs) {
  const htmlFile = path.join(HTML_DIR, `${d.id}.html`);
  const png1x = path.join(OUTPUT_DIR, `${d.id}.png`);
  const png2x = path.join(OUTPUT_DIR, `${d.id}-2x.png`);
  const mockupHtml = path.join(HTML_DIR, `${d.id}-mockup.html`);
  const mockupPng = path.join(OUTPUT_DIR, `${d.id}-mockup.png`);

  fs.writeFileSync(htmlFile, d.htmlGenerator());

  // 1. Render 1584x396 (1x standard)
  execSync(
    `"${chromePath}" --headless --disable-gpu --window-size=1584,396 --screenshot="${png1x}" --default-background-color=00000000 "file://${htmlFile}"`,
    { stdio: "ignore" }
  );

  // 2. Render 3168x792 (2x Retina)
  execSync(
    `"${chromePath}" --headless --disable-gpu --window-size=1584,396 --force-device-scale-factor=2 --screenshot="${png2x}" --default-background-color=00000000 "file://${htmlFile}"`,
    { stdio: "ignore" }
  );

  // 3. Render realistic LinkedIn Profile Mockup (1200x720)
  fs.writeFileSync(mockupHtml, getMockupHtml(`file://${png1x}`, `file://${AVATAR_PATH}`));
  execSync(
    `"${chromePath}" --headless --disable-gpu --window-size=1200,720 --screenshot="${mockupPng}" --default-background-color=00000000 "file://${mockupHtml}"`,
    { stdio: "ignore" }
  );

  // Copy to Artifact Directory for markdown viewing
  fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, `${d.id}.png`));
  fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, `${d.id}-2x.png`));
  fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, `${d.id}-mockup.png`));

  // Copy to ~/Downloads for one-click access
  fs.copyFileSync(png1x, path.join(DOWNLOADS_DIR, `${d.id}.png`));
  fs.copyFileSync(png2x, path.join(DOWNLOADS_DIR, `${d.id}-2x.png`));
  fs.copyFileSync(mockupPng, path.join(DOWNLOADS_DIR, `${d.id}-mockup.png`));

  console.log(`✓ Rendered: ${d.title}`);
}

console.log("Balanced banners pipeline complete!");
