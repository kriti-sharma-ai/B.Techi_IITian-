import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const KRITI_DIR = path.resolve("marketing/linkedin/banners/kriti");
const OUTPUT_DIR = path.join(KRITI_DIR, "statistical");
const HTML_DIR = path.resolve("scripts/linkedin-banners/kriti/html/statistical");
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
   VARIATION 1: "STATISTICAL" HEADER OVER THE P(A ∩ B) FORMULA
   Top-Left Card:
     • STATISTICAL // PROBABILITY
     P(A ∩ B) = P(A) · P(B | A)
     where A = Data, B = Management
   Headline:
     DATA MINDED
     & MANAGEMENT. (strictly 2 lines)
   Venn:
     A (DATA) ∩ B (MGMT) = A ∩ B (IMPACT)
   ───────────────────────────────────────────────────────────── */
function getStat1Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=JetBrains+Mono:wght@600;700;800&family=EB+Garamond:ital,wght@0,600;1,500;1,600;1,700&display=swap" rel="stylesheet">
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

    /* TOP-LEFT STATISTICAL BOX */
    .top-left-stat-box {
      position: absolute;
      top: 34px;
      left: 50px;
      width: 295px;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #CBD5E1;
      border-left: 3.5px solid #FFD21C;
      padding: 10px 14px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      z-index: 15;
    }
    .stat-header {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .stat-dot {
      width: 6px;
      height: 6px;
      background: #FFD21C;
      border-radius: 50%;
    }
    .formula-math {
      font-family: 'EB Garamond', serif;
      font-size: 20px;
      font-style: italic;
      color: #0B0B0B;
      line-height: 1.25;
      letter-spacing: 0.2px;
    }
    .formula-math span.op {
      font-style: normal;
      font-family: -apple-system, sans-serif;
      padding: 0 3px;
    }
    .stat-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #64748B;
      margin-top: 4px;
      font-style: normal;
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

  <!-- Top-Left: STATISTICAL + Formula Box -->
  <div class="top-left-stat-box">
    <div class="stat-header">
      <span class="stat-dot"></span>
      <span>STATISTICAL // PROBABILITY</span>
    </div>
    <div class="formula-math">
      P(A ∩ B) <span class="op">=</span> P(A) <span class="op">·</span> P(B | A)
    </div>
    <div class="stat-sub">
      where A = Data, B = Management
    </div>
  </div>

  <div class="main-wrap">
    <div class="text-column">
      <div class="kicker-tag">CORE COMPETENCY // STRATEGY</div>
      <h1 class="big-title">
        <span class="line-1">DATA MINDED</span>
        <span class="line-2">&amp; MANAGEMENT.</span>
      </h1>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <!-- Venn Diagram Column -->
    <div class="venn-container">
      <svg width="480" height="280" viewBox="0 0 480 280" fill="none">
        <defs>
          <clipPath id="s1Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#s1Clip)"/>
        
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="105" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>
        <text x="105" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">MINDED (A)</text>

        <text x="375" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">MANAGEMENT</text>
        <text x="375" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION (B)</text>

        <circle cx="240" cy="130" r="5" fill="#0B0B0B"/>
        <text x="240" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">A ∩ B (IMPACT)</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   VARIATION 2: THE WORD "STATISTICAL" WRITTEN DIRECTLY IN TOP-LEFT
   Top-Left Card:
     // METHODOLOGY
     Statistical
     Inference & Modeling
   ───────────────────────────────────────────────────────────── */
function getStat2Html() {
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

    /* TOP-LEFT "STATISTICAL" CARD */
    .top-left-stat-box {
      position: absolute;
      top: 34px;
      left: 50px;
      width: 280px;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #CBD5E1;
      border-left: 4px solid #FFD21C;
      padding: 10px 16px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      z-index: 15;
    }
    .stat-kicker {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: #64748B;
      letter-spacing: 1px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .stat-kicker::before {
      content: '';
      width: 5px;
      height: 5px;
      background: #FFD21C;
      border-radius: 50%;
    }
    .word-stat-hero {
      font-size: 26px;
      font-weight: 900;
      color: #0B0B0B;
      letter-spacing: -0.8px;
      line-height: 1.1;
      margin-top: 3px;
    }
    .stat-caption {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #64748B;
      margin-top: 3px;
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

  <!-- Top-Left: Direct "Statistical" Word Card -->
  <div class="top-left-stat-box">
    <div class="stat-kicker">METHODOLOGY</div>
    <div class="word-stat-hero">Statistical</div>
    <div class="stat-caption">Inference &amp; Modeling Core</div>
  </div>

  <div class="main-wrap">
    <div class="text-column">
      <div class="kicker-tag">CORE COMPETENCY // STRATEGY</div>
      <h1 class="big-title">
        <span class="line-1">DATA MINDED</span>
        <span class="line-2">&amp; MANAGEMENT.</span>
      </h1>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <!-- Venn Diagram Column -->
    <div class="venn-container">
      <svg width="480" height="280" viewBox="0 0 480 280" fill="none">
        <defs>
          <clipPath id="s2Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#s2Clip)"/>
        
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
   VARIATION 3: STATISTICAL + FORMULA INTEGRATED BADGE
   Top-Left Card:
     STATISTICAL //
     P(A ∩ B) = P(A) · P(B | A)
   ───────────────────────────────────────────────────────────── */
function getStat3Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=JetBrains+Mono:wght@600;700;800&family=EB+Garamond:ital,wght@0,600;1,500;1,600;1,700&display=swap" rel="stylesheet">
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

    /* TOP-LEFT HYBRID STATISTICAL BADGE */
    .top-left-stat-box {
      position: absolute;
      top: 32px;
      left: 50px;
      width: 300px;
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid #CBD5E1;
      border-left: 4px solid #FFD21C;
      padding: 10px 14px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      z-index: 15;
    }
    .stat-badge-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 15px;
      font-weight: 900;
      color: #0B0B0B;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .badge-yellow-pip {
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border-radius: 2px;
    }
    .formula-math {
      font-family: 'EB Garamond', serif;
      font-size: 19px;
      font-style: italic;
      color: #0B0B0B;
      margin-top: 4px;
      line-height: 1.2;
    }
    .formula-math span.op {
      font-style: normal;
      font-family: -apple-system, sans-serif;
      padding: 0 2px;
    }
    .stat-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      color: #64748B;
      margin-top: 3px;
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

  <!-- Top-Left Hybrid Badge -->
  <div class="top-left-stat-box">
    <div class="stat-badge-title">
      <span class="badge-yellow-pip"></span>
      <span>STATISTICAL FOUNDATION</span>
    </div>
    <div class="formula-math">
      P(A ∩ B) <span class="op">=</span> P(A) <span class="op">·</span> P(B | A)
    </div>
    <div class="stat-sub">
      Data Mindset (A) • Management (B)
    </div>
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

    <!-- Venn Diagram Column -->
    <div class="venn-container">
      <svg width="480" height="280" viewBox="0 0 480 280" fill="none">
        <defs>
          <clipPath id="s3Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#s3Clip)"/>
        
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="105" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>
        <text x="105" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">MINDED (A)</text>

        <text x="375" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">MANAGEMENT</text>
        <text x="375" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION (B)</text>

        <circle cx="240" cy="130" r="5" fill="#0B0B0B"/>
        <text x="240" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">IMPACT</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   VARIATION 4: "STATISTICAL & MANAGEMENT." AS THE BIG HEADLINE
   Headline:
     STATISTICAL
     & MANAGEMENT.
   Top-Left Formula:
     P(A ∩ B) = P(A) · P(B | A)
   ───────────────────────────────────────────────────────────── */
function getStat4Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=JetBrains+Mono:wght@600;700;800&family=EB+Garamond:ital,wght@0,600;1,500;1,600;1,700&display=swap" rel="stylesheet">
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

    /* TOP-LEFT FORMULA BOX */
    .top-left-stat-box {
      position: absolute;
      top: 34px;
      left: 50px;
      width: 295px;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #CBD5E1;
      border-left: 3.5px solid #FFD21C;
      padding: 10px 14px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      z-index: 15;
    }
    .stat-header {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .stat-dot {
      width: 6px;
      height: 6px;
      background: #FFD21C;
      border-radius: 50%;
    }
    .formula-math {
      font-family: 'EB Garamond', serif;
      font-size: 20px;
      font-style: italic;
      color: #0B0B0B;
      line-height: 1.25;
      letter-spacing: 0.2px;
    }
    .formula-math span.op {
      font-style: normal;
      font-family: -apple-system, sans-serif;
      padding: 0 3px;
    }
    .stat-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #64748B;
      margin-top: 4px;
      font-style: normal;
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

  <!-- Top-Left Formula Box -->
  <div class="top-left-stat-box">
    <div class="stat-header">
      <span class="stat-dot"></span>
      <span>JOINT PROBABILITY // THEOREM</span>
    </div>
    <div class="formula-math">
      P(A ∩ B) <span class="op">=</span> P(A) <span class="op">·</span> P(B | A)
    </div>
    <div class="stat-sub">
      where A = Statistical, B = Management
    </div>
  </div>

  <div class="main-wrap">
    <div class="text-column">
      <div class="kicker-tag">CORE COMPETENCY // STRATEGY</div>
      <h1 class="big-title">
        <span class="line-1">STATISTICAL</span>
        <span class="line-2">&amp; MANAGEMENT.</span>
      </h1>
      <div class="mail-row">
        <span class="dot-yellow"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <!-- Venn Diagram Column -->
    <div class="venn-container">
      <svg width="480" height="280" viewBox="0 0 480 280" fill="none">
        <defs>
          <clipPath id="s4Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#s4Clip)"/>
        
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="105" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">STATISTICAL</text>
        <text x="105" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">RIGOR (A)</text>

        <text x="375" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">MANAGEMENT</text>
        <text x="375" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION (B)</text>

        <circle cx="240" cy="130" r="5" fill="#0B0B0B"/>
        <text x="240" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">A ∩ B (IMPACT)</text>
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
    id: "kriti-stat-1-label-statistical",
    title: "Option 1A: STATISTICAL Header with P(A ∩ B) Formula",
    htmlGenerator: getStat1Html
  },
  {
    id: "kriti-stat-2-word-statistical",
    title: "Option 1B: The Word 'Statistical' replacing the formula in Top-Left",
    htmlGenerator: getStat2Html
  },
  {
    id: "kriti-stat-3-statistical-formula-hybrid",
    title: "Option 1C: 'STATISTICAL FOUNDATION' + P(A ∩ B) Combined",
    htmlGenerator: getStat3Html
  },
  {
    id: "kriti-stat-4-headline-statistical",
    title: "Option 1D: 'STATISTICAL & MANAGEMENT.' as Main Headline",
    htmlGenerator: getStat4Html
  }
];

console.log("Generating 'Statistical' Variations for Option 1 (1584x396)...");

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

console.log("'Statistical' variations pipeline complete!");
