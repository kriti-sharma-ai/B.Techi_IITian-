import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("marketing/linkedin/banners");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const AVATAR_PATH = path.join(OUTPUT_DIR, "masuddar-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

/* ─────────────────────────────────────────────────────────────
   OPTION 1: THE STANDARD DEVIATION BELL CURVE (Gaussian ±1σ, ±2σ)
   - Left: Profile Safe Zone
   - Center/Left: "DATA SCIENTIST" + Email at bottom
   - Center/Right: Stunning SVG Gaussian curve with shaded ±1σ band,
     standard deviation markings (-2σ, -1σ, μ, +1σ, +2σ),
     and clever subtle annotation.
   ───────────────────────────────────────────────────────────── */
function getStdDevHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0F172A;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    /* Architectural subtle paper grid */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, #F8FAFC 1px, transparent 1px),
        linear-gradient(to bottom, #F8FAFC 1px, transparent 1px);
    }

    .container {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .left-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 270px;
    }

    .title-block {
      margin-top: 15px;
    }

    .main-title {
      font-size: 72px;
      font-weight: 900;
      letter-spacing: -3px;
      line-height: 0.95;
      color: #0F172A;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .sub-axiom {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      font-weight: 500;
      letter-spacing: -0.2px;
    }
    .sub-axiom strong {
      color: #0F172A;
    }

    .bottom-mail {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748B;
      letter-spacing: 0.5px;
    }
    .mail-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10B981;
    }

    /* Right SVG Chart Box */
    .chart-box {
      width: 530px;
      background: #FAFAFA;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 20px 24px 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #64748B;
      margin-bottom: 8px;
    }
    .chart-header .tag {
      color: #2563EB;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <div class="container">
    <div class="left-col">
      <div class="title-block">
        <h1 class="main-title">DATA SCIENTIST</h1>
        <div class="sub-axiom">
          <strong>X ~ 𝒩(μ, σ²)</strong> • 95% Confidence, 5% Chaos
        </div>
      </div>

      <div class="bottom-mail">
        <span class="mail-dot"></span>
        <span>masuddarrahaman31@gmail.com</span>
      </div>
    </div>

    <!-- Precision Standard Deviation SVG Bell Curve -->
    <div class="chart-box">
      <div class="chart-header">
        <span class="tag">NORMAL DISTRIBUTION // σ = 1.0</span>
        <span>P(|X - μ| ≤ σ) ≈ 68.27%</span>
      </div>

      <svg width="480" height="150" viewBox="0 0 480 150" fill="none">
        <!-- Baseline axis -->
        <line x1="20" y1="125" x2="460" y2="125" stroke="#CBD5E1" stroke-width="1.5"/>

        <!-- Shaded ±1σ zone (from x=170 to x=310, center x=240) -->
        <path d="M 170 125 
                 C 195 125, 210 25, 240 25 
                 C 270 25, 285 125, 310 125 
                 Z" 
              fill="#2563EB" fill-opacity="0.08"/>

        <!-- Complete Gaussian Curve -->
        <path d="M 20 124 
                 C 110 124, 160 120, 190 85
                 C 215 50, 225 25, 240 25 
                 C 255 25, 265 50, 290 85
                 C 320 120, 370 124, 460 124" 
              stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Standard Deviation Vertical Dashed Lines -->
        <!-- Center Mean (μ) -->
        <line x1="240" y1="25" x2="240" y2="125" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="3 3"/>
        
        <!-- -1σ and +1σ -->
        <line x1="170" y1="75" x2="170" y2="125" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2 2"/>
        <line x1="310" y1="75" x2="310" y2="125" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2 2"/>

        <!-- -2σ and +2σ -->
        <line x1="100" y1="112" x2="100" y2="125" stroke="#CBD5E1" stroke-width="1"/>
        <line x1="380" y1="112" x2="380" y2="125" stroke="#CBD5E1" stroke-width="1"/>

        <!-- Axis Ticks & Labels -->
        <text x="100" y="142" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#64748B" text-anchor="middle">-2σ</text>
        <text x="170" y="142" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#475569" text-anchor="middle">-1σ</text>
        <text x="240" y="142" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#2563EB" text-anchor="middle">μ</text>
        <text x="310" y="142" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#475569" text-anchor="middle">+1σ</text>
        <text x="380" y="142" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#64748B" text-anchor="middle">+2σ</text>

        <!-- Humor Pin / Annotation -->
        <circle cx="240" cy="25" r="4" fill="#2563EB"/>
        <text x="240" y="15" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#2563EB" text-anchor="middle">68.2% EXPECTED REALITY</text>
        
        <circle cx="430" cy="124" r="3" fill="#EF4444"/>
        <text x="430" y="112" font-family="'JetBrains Mono', monospace" font-size="9" fill="#EF4444" text-anchor="middle">3σ (clean data)</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 2: THE MINIMALIST VENN DIAGRAM
   - Left: Profile Safe Zone
   - Center/Left: "DATA SCIENTIST" + Email at bottom
   - Center/Right: Clean, elegant 3-circle Venn Diagram:
     Computer Science ∩ Statistics ∩ Domain Knowledge
     Center overlap: "DATA SCIENCE"
   ───────────────────────────────────────────────────────────── */
function getVennDiagramHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0F172A;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .container {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .left-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 270px;
    }

    .title-block {
      margin-top: 15px;
    }

    .main-title {
      font-size: 72px;
      font-weight: 900;
      letter-spacing: -3px;
      line-height: 0.95;
      color: #0F172A;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .sub-axiom {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      font-weight: 500;
    }
    .sub-axiom strong {
      color: #0F172A;
    }

    .bottom-mail {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748B;
      letter-spacing: 0.5px;
    }
    .mail-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #2563EB;
    }

    /* Venn Box */
    .venn-box {
      width: 500px;
      height: 260px;
      background: #FAFAFA;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="left-col">
      <div class="title-block">
        <h1 class="main-title">DATA SCIENTIST</h1>
        <div class="sub-axiom">
          <strong>Intersection of Rigor &amp; Code</strong> • Math ∩ Software ∩ Chaos
        </div>
      </div>

      <div class="bottom-mail">
        <span class="mail-dot"></span>
        <span>masuddarrahaman31@gmail.com</span>
      </div>
    </div>

    <!-- Elegant Architectural Venn Diagram -->
    <div class="venn-box">
      <svg width="420" height="220" viewBox="0 0 420 220" fill="none">
        <!-- Circle 1: Computer Science (Left) -->
        <circle cx="160" cy="120" r="72" stroke="#0F172A" stroke-width="1.5" fill="#0F172A" fill-opacity="0.03"/>
        
        <!-- Circle 2: Statistics & Math (Right) -->
        <circle cx="260" cy="120" r="72" stroke="#0F172A" stroke-width="1.5" fill="#0F172A" fill-opacity="0.03"/>

        <!-- Circle 3: Domain / Curiosity (Top) -->
        <circle cx="210" cy="80" r="68" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="3 3" fill="#2563EB" fill-opacity="0.04"/>

        <!-- Center Intersection Glow / Highlight -->
        <ellipse cx="210" cy="115" rx="30" ry="24" fill="#2563EB" fill-opacity="0.18"/>

        <!-- Labels -->
        <text x="125" y="145" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600" fill="#475569" text-anchor="middle">CODE / CS</text>
        <text x="295" y="145" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600" fill="#475569" text-anchor="middle">STATS / MATH</text>
        <text x="210" y="38" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600" fill="#2563EB" text-anchor="middle">DOMAIN / CURIOSITY</text>

        <!-- Center Highlight Text -->
        <circle cx="210" cy="112" r="3.5" fill="#2563EB"/>
        <text x="210" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0F172A" text-anchor="middle">DATA SCIENCE</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 3: THE MINIMALIST BAR CHART / HISTOGRAM WITH DISTRIBUTION
   - Left: Profile Safe Zone
   - Center/Left: "DATA SCIENTIST" + Email at bottom
   - Center/Right: Clean architectural frequency histogram bars
     with a normal distribution curve fitted smoothly over it.
   ───────────────────────────────────────────────────────────── */
function getHistogramHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FAFAFA;
      color: #0F172A;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .container {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .left-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 270px;
    }

    .title-block {
      margin-top: 15px;
    }

    .main-title {
      font-size: 72px;
      font-weight: 900;
      letter-spacing: -3px;
      line-height: 0.95;
      color: #0F172A;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .sub-axiom {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      font-weight: 500;
    }
    .sub-axiom strong {
      color: #0F172A;
    }

    .bottom-mail {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748B;
      letter-spacing: 0.5px;
    }
    .mail-dot {
      width: 6px;
      height: 6px;
      background: #0F172A;
    }

    /* Histogram Card */
    .hist-box {
      width: 520px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 20px 24px 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .hist-meta {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #64748B;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="left-col">
      <div class="title-block">
        <h1 class="main-title">DATA SCIENTIST</h1>
        <div class="sub-axiom">
          <strong>Signal Extractor</strong> • Finding structure in empirical data
        </div>
      </div>

      <div class="bottom-mail">
        <span class="mail-dot"></span>
        <span>masuddarrahaman31@gmail.com</span>
      </div>
    </div>

    <!-- Architectural Bar Chart / Histogram with Fitted Gaussian -->
    <div class="hist-box">
      <div class="hist-meta">
        <span style="color:#0F172A; font-weight:700;">EMPIRICAL DISTRIBUTION</span>
        <span>n = 10,000 samples</span>
      </div>

      <svg width="470" height="140" viewBox="0 0 470 140" fill="none">
        <!-- Baseline -->
        <line x1="15" y1="120" x2="455" y2="120" stroke="#CBD5E1" stroke-width="1.5"/>

        <!-- Histogram Bars (17 clean vertical bars following Gaussian shape) -->
        <!-- x, width: 20, height calculated by normal pdf -->
        <rect x="25" y="116" width="20" height="4" fill="#F1F5F9" stroke="#E2E8F0" rx="2"/>
        <rect x="50" y="112" width="20" height="8" fill="#F1F5F9" stroke="#E2E8F0" rx="2"/>
        <rect x="75" y="105" width="20" height="15" fill="#E2E8F0" stroke="#CBD5E1" rx="2"/>
        <rect x="100" y="94" width="20" height="26" fill="#E2E8F0" stroke="#CBD5E1" rx="2"/>
        <rect x="125" y="78" width="20" height="42" fill="#E2E8F0" stroke="#CBD5E1" rx="2"/>
        <rect x="150" y="58" width="20" height="62" fill="#CBD5E1" stroke="#94A3B8" rx="2"/>
        <rect x="175" y="40" width="20" height="80" fill="#CBD5E1" stroke="#94A3B8" rx="2"/>
        <rect x="200" y="28" width="20" height="92" fill="#94A3B8" stroke="#64748B" rx="2"/>
        <rect x="225" y="22" width="20" height="98" fill="#0F172A" stroke="#0F172A" rx="2"/> <!-- Center Peak -->
        <rect x="250" y="28" width="20" height="92" fill="#94A3B8" stroke="#64748B" rx="2"/>
        <rect x="275" y="40" width="20" height="80" fill="#CBD5E1" stroke="#94A3B8" rx="2"/>
        <rect x="300" y="58" width="20" height="62" fill="#CBD5E1" stroke="#94A3B8" rx="2"/>
        <rect x="325" y="78" width="20" height="42" fill="#E2E8F0" stroke="#CBD5E1" rx="2"/>
        <rect x="350" y="94" width="20" height="26" fill="#E2E8F0" stroke="#CBD5E1" rx="2"/>
        <rect x="375" y="105" width="20" height="15" fill="#E2E8F0" stroke="#CBD5E1" rx="2"/>
        <rect x="400" y="112" width="20" height="8" fill="#F1F5F9" stroke="#E2E8F0" rx="2"/>
        <rect x="425" y="116" width="20" height="4" fill="#F1F5F9" stroke="#E2E8F0" rx="2"/>

        <!-- Fitted Bell Curve Line on top -->
        <path d="M 25 116 
                 C 90 115, 140 100, 175 60
                 C 200 30, 220 20, 235 20
                 C 250 20, 270 30, 295 60
                 C 330 100, 380 115, 445 116" 
              stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Axis labels -->
        <text x="235" y="135" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#0F172A" text-anchor="middle">μ</text>
        <text x="135" y="135" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748B" text-anchor="middle">-1σ</text>
        <text x="335" y="135" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748B" text-anchor="middle">+1σ</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

// Light theme mockup generator
function getLightMockupHtml(bannerImgUrl, avatarImgUrl, title) {
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

    .preview-pill {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(255,255,255,0.92);
      border: 1px solid #CBD5E1;
      color: #0F172A;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 6px;
      backdrop-filter: blur(8px);
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
      <div class="preview-pill">${title}</div>
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
  console.log("Generating Visual Statistical Banners (Standard Deviation, Venn Diagram, Bar Chart)...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const options = [
    {
      id: "visual-stat-1-std-dev",
      title: "Visual Stat 1: Standard Deviation Bell Curve (Gaussian ±1σ, ±2σ)",
      html: getStdDevHtml(),
      badge: "RECOMMENDED • STANDARD DEVIATION"
    },
    {
      id: "visual-stat-2-venn-diagram",
      title: "Visual Stat 2: Architectural Venn Diagram (Math ∩ Code)",
      html: getVennDiagramHtml(),
      badge: "DATA SCIENCE VENN DIAGRAM"
    },
    {
      id: "visual-stat-3-histogram-bars",
      title: "Visual Stat 3: Histogram Bar Chart with Fitted Gaussian",
      html: getHistogramHtml(),
      badge: "HISTOGRAM & BELL CURVE"
    }
  ];

  for (const opt of options) {
    const htmlFile = path.join(OUTPUT_DIR, `${opt.id}.html`);
    fs.writeFileSync(htmlFile, opt.html);

    // 1x Standard (1584 x 396)
    const png1x = path.join(OUTPUT_DIR, `${opt.id}.png`);
    execSync(
      `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1584,396 --screenshot="${png1x}" "file://${htmlFile}"`,
      { stdio: "ignore" }
    );

    // 2x Retina (3168 x 792)
    const png2x = path.join(OUTPUT_DIR, `${opt.id}-2x.png`);
    await sharp(png1x)
      .resize(3168, 792, { kernel: "lanczos3" })
      .png({ quality: 100 })
      .toFile(png2x);

    fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, `${opt.id}.png`));
    fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, `${opt.id}-2x.png`));

    // Live Mockup
    const mockupHtml = getLightMockupHtml(
      `file://${png1x}`,
      `file://${AVATAR_PATH}`,
      opt.badge
    );
    const mockupHtmlFile = path.join(OUTPUT_DIR, `${opt.id}-mockup.html`);
    fs.writeFileSync(mockupHtmlFile, mockupHtml);

    const mockupPng = path.join(OUTPUT_DIR, `${opt.id}-mockup.png`);
    execSync(
      `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1200,720 --screenshot="${mockupPng}" "file://${mockupHtmlFile}"`,
      { stdio: "ignore" }
    );
    fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, `${opt.id}-mockup.png`));

    console.log(`✓ Rendered ${opt.title}`);
  }

  console.log("Visual stat banners rendering complete!");
}

run().catch(console.error);
