import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const KRITI_DIR = path.resolve("marketing/linkedin/banners/kriti");
const OUTPUT_DIR = path.join(KRITI_DIR, "venn");
const HTML_DIR = path.resolve("scripts/linkedin-banners/kriti/html/venn");
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
   DESIGN 1: STRICT 2-LINE STACK (NO EXTRA LINE FOR &)
   Line 1: DATA MINDED
   Line 2: & MANAGEMENT. (strictly on one line, never wraps!)
   Paired with 2-circle Venn diagram
   ───────────────────────────────────────────────────────────── */
function getVennDesign1Html() {
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
    .line-1 {
      white-space: nowrap;
    }
    .line-2 {
      white-space: nowrap;
      margin-top: 4px;
    }

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
    .mail-row strong {
      color: #0B0B0B;
    }
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

  <div class="main-wrap">
    <!-- Big Text Column: Strictly 2 lines -->
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
          <clipPath id="c1Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <!-- Circle 1: Data Minded (Left) -->
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        
        <!-- Circle 2: Management (Right) -->
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>

        <!-- Intersection (Filled with BTechi Signature Yellow) -->
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#c1Clip)"/>
        
        <!-- Re-stroke boundaries -->
        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <!-- Labels Inside Left Circle -->
        <text x="105" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>
        <text x="105" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">MINDED</text>

        <!-- Labels Inside Right Circle -->
        <text x="375" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">MANAGEMENT</text>
        <text x="375" y="156" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION</text>

        <!-- Center Intersection Badge -->
        <circle cx="240" cy="130" r="5" fill="#0B0B0B"/>
        <text x="240" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">IMPACT</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: AMPERSAND ON FIRST LINE (DATA MINDED & / MANAGEMENT.)
   Line 1: DATA MINDED &
   Line 2: MANAGEMENT.
   Very balanced, huge 78px font, zero line wrap issues
   ───────────────────────────────────────────────────────────── */
function getVennDesign2Html() {
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
    .line-1 {
      white-space: nowrap;
    }
    .line-2 {
      white-space: nowrap;
      margin-top: 4px;
    }

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
    .mail-row strong {
      color: #0B0B0B;
    }
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

  <div class="main-wrap">
    <!-- Big Text Column: Ampersand attached to Line 1 -->
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
          <clipPath id="c2Clip">
            <circle cx="165" cy="140" r="110"/>
          </clipPath>
        </defs>

        <circle cx="165" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.85"/>
        <circle cx="315" cy="140" r="110" fill="#FFD21C" clip-path="url(#c2Clip)"/>
        
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
   DESIGN 3: YELLOW HIGHLIGHT BLOCK (NO EXTRA LINE FOR &)
   Line 1: DATA MINDED
   Line 2: [& MANAGEMENT.] -> & and MANAGEMENT are locked together
   inside the yellow highlight box!
   ───────────────────────────────────────────────────────────── */
function getVennDesign3Html() {
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
      background-size: 26px 26px;
      background-image: 
        linear-gradient(to right, #EEF2F6 1px, transparent 1px),
        linear-gradient(to bottom, #EEF2F6 1px, transparent 1px);
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

    .headline {
      font-size: 72px;
      font-weight: 900;
      letter-spacing: -3.2px;
      line-height: 1.02;
      color: #0B0B0B;
      text-transform: uppercase;
    }
    .line-top {
      white-space: nowrap;
    }

    .yellow-highlight {
      background: #FFD21C;
      color: #0B0B0B;
      padding: 2px 14px;
      border-radius: 6px;
      display: inline-block;
      margin-top: 4px;
      box-shadow: 0 4px 14px rgba(255, 210, 28, 0.35);
      white-space: nowrap;
    }

    .footer-line {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
    }
    .footer-line strong {
      color: #0B0B0B;
    }
    .square-indicator {
      width: 7px;
      height: 7px;
      background: #0B0B0B;
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

  <div class="main-wrap">
    <div class="text-column">
      <div class="headline">
        <div class="line-top">DATA MINDED</div>
        <div><span class="yellow-highlight">&amp; MANAGEMENT.</span></div>
      </div>

      <div class="footer-line">
        <span class="square-indicator"></span>
        <span><strong>kritisharma1481550@gmail.com</strong></span>
        <span>•</span>
        <span>STRATEGY &amp; EXECUTION</span>
      </div>
    </div>

    <!-- 3-Circle Venn Graphic -->
    <div class="venn-container">
      <svg width="450" height="280" viewBox="0 0 450 280" fill="none">
        <defs>
          <clipPath id="v1Clip"><circle cx="170" cy="165" r="90"/></clipPath>
          <clipPath id="v2Clip"><circle cx="280" cy="165" r="90"/></clipPath>
        </defs>

        <circle cx="170" cy="165" r="90" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.88"/>
        <circle cx="280" cy="165" r="90" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.88"/>
        <circle cx="225" cy="90" r="90" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.88"/>

        <g clip-path="url(#v1Clip)">
          <g clip-path="url(#v2Clip)">
            <circle cx="225" cy="90" r="90" fill="#FFD21C"/>
          </g>
        </g>

        <circle cx="170" cy="165" r="90" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="280" cy="165" r="90" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="225" cy="90" r="90" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <text x="120" y="195" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#0B0B0B" text-anchor="middle">DATA</text>
        <text x="330" y="195" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#0B0B0B" text-anchor="middle">MANAGEMENT</text>
        <text x="225" y="45" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#0B0B0B" text-anchor="middle">STRATEGY</text>

        <circle cx="225" cy="138" r="4.5" fill="#0B0B0B"/>
        <text x="225" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="900" fill="#0B0B0B" text-anchor="middle">EXECUTION</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 4: SINGLE-LINE MONUMENTAL (ZERO WRAPPING POSSIBLE)
   "DATA MINDED & MANAGEMENT." completely on one straight line
   Venn diagram gracefully displayed below or integrated!
   ───────────────────────────────────────────────────────────── */
function getVennDesign4Html() {
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

    .content-box {
      position: relative;
      z-index: 10;
      margin-left: 360px;
      margin-right: 60px;
      width: calc(100% - 420px);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .hero-title {
      font-size: 68px;
      font-weight: 900;
      letter-spacing: -3.2px;
      line-height: 1;
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
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748B;
      font-weight: 600;
    }
    .mail-footer strong {
      color: #0B0B0B;
    }
    .dot-yellow {
      width: 7px;
      height: 7px;
      background: #FFD21C;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="yellow-top-bar"></div>
  <div class="bg-math-grid"></div>

  <div class="content-box">
    <!-- Single Line: Zero extra lines -->
    <h1 class="hero-title">DATA MINDED &amp; MANAGEMENT.</h1>

    <div class="venn-svg-box">
      <svg width="600" height="175" viewBox="0 0 600 175" fill="none">
        <defs>
          <clipPath id="m1Clip"><circle cx="230" cy="88" r="85"/></clipPath>
        </defs>

        <circle cx="230" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
        <circle cx="370" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>

        <circle cx="370" cy="88" r="85" fill="#FFD21C" clip-path="url(#m1Clip)"/>

        <circle cx="230" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
        <circle cx="370" cy="88" r="85" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

        <line x1="40" y1="162" x2="560" y2="162" stroke="#CBD5E1" stroke-width="1.5"/>

        <text x="165" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#0B0B0B" text-anchor="middle">DATA</text>
        <text x="165" y="104" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">MINDSET</text>

        <text x="435" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="900" fill="#0B0B0B" text-anchor="middle">MANAGEMENT</text>
        <text x="435" y="104" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">EXECUTION</text>

        <circle cx="300" cy="78" r="4.5" fill="#0B0B0B"/>
        <text x="300" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#0B0B0B" text-anchor="middle">SWEET SPOT</text>
      </svg>
    </div>

    <div class="mail-footer">
      <span class="dot-yellow"></span>
      <span><strong>kritisharma1481550@gmail.com</strong></span>
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
    id: "kriti-venn-1-duo-monumental",
    title: "Option 1: Strictly 2 Lines ('& MANAGEMENT.' on line 2, zero wrap)",
    htmlGenerator: getVennDesign1Html
  },
  {
    id: "kriti-venn-2-yellow-highlight",
    title: "Option 2: Ampersand on Line 1 ('DATA MINDED &' / 'MANAGEMENT.')",
    htmlGenerator: getVennDesign2Html
  },
  {
    id: "kriti-venn-3-classic-btechi-mid-bar",
    title: "Option 3: Yellow Highlight Block ('& MANAGEMENT.' locked inside)",
    htmlGenerator: getVennDesign3Html
  },
  {
    id: "kriti-venn-4-centered-minimalist",
    title: "Option 4: Single Line ('DATA MINDED & MANAGEMENT.' on 1 line)",
    htmlGenerator: getVennDesign4Html
  }
];

console.log("Generating Venn Banners with NO extra line for & (1584x396)...");

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

console.log("No-wrap pipeline complete!");
