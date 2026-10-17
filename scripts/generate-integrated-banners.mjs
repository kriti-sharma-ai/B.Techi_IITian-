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
   DESIGN 1: CONTINUOUS GAUSSIAN BELL CURVE (INTEGRATED FULL-WIDTH)
   - HUGE "DATA SCIENTIST" (100px font size)
   - Standard deviation curve is NOT in a box; it flows directly
     underneath the text across the full width, unified as one art piece.
   - Email at bottom.
   ───────────────────────────────────────────────────────────── */
function getIntegrated1Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
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
      flex-direction: column;
      justify-content: space-between;
      padding: 38px 60px 32px 360px;
    }

    /* Subtle architectural grid across the whole canvas */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, #F8FAFC 1px, transparent 1px),
        linear-gradient(to bottom, #F8FAFC 1px, transparent 1px);
    }

    .content-layer {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }

    /* Giant Monumental Typography */
    .hero-title {
      font-size: 102px;
      font-weight: 900;
      letter-spacing: -4.5px;
      line-height: 0.92;
      color: #0F172A;
      text-transform: uppercase;
      margin-top: 5px;
    }

    /* Integrated Full-Width Curve Container (NO separate box!) */
    .integrated-curve-wrap {
      width: 100%;
      margin-top: 10px;
      position: relative;
    }

    .bottom-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid #E2E8F0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748B;
    }
    .mail-tag {
      color: #0F172A;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .mail-tag .dot {
      width: 6px;
      height: 6px;
      background: #2563EB;
      border-radius: 50%;
    }
    .formula-tag {
      color: #64748B;
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <div class="content-layer">
    <!-- Giant Title -->
    <div>
      <h1 class="hero-title">DATA SCIENTIST</h1>
    </div>

    <!-- Integrated Vector Standard Deviation Curve (flows seamlessly across content width) -->
    <div class="integrated-curve-wrap">
      <svg width="1160" height="110" viewBox="0 0 1160 110" fill="none">
        <!-- Baseline axis -->
        <line x1="10" y1="92" x2="1150" y2="92" stroke="#CBD5E1" stroke-width="1.5"/>

        <!-- Shaded ±1σ zone (from x=420 to x=740, center x=580) -->
        <path d="M 420 92 
                 C 480 92, 520 18, 580 18 
                 C 640 18, 680 92, 740 92 
                 Z" 
              fill="#2563EB" fill-opacity="0.08"/>

        <!-- Continuous Gaussian Curve spanning the entire width -->
        <path d="M 10 91 
                 C 250 91, 380 88, 460 55
                 C 515 28, 545 18, 580 18 
                 C 615 18, 645 28, 700 55
                 C 780 88, 910 91, 1150 91" 
              stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Vertical standard deviation markers -->
        <!-- Center Mean (μ) -->
        <line x1="580" y1="18" x2="580" y2="92" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="580" cy="18" r="4" fill="#2563EB"/>

        <!-- -1σ and +1σ -->
        <line x1="420" y1="55" x2="420" y2="92" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2 2"/>
        <line x1="740" y1="55" x2="740" y2="92" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2 2"/>

        <!-- -2σ and +2σ -->
        <line x1="260" y1="82" x2="260" y2="92" stroke="#CBD5E1" stroke-width="1"/>
        <line x1="900" y1="82" x2="900" y2="92" stroke="#CBD5E1" stroke-width="1"/>

        <!-- Labels along the curve -->
        <text x="260" y="106" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94A3B8" text-anchor="middle">-2σ</text>
        <text x="420" y="106" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#475569" text-anchor="middle">-1σ</text>
        <text x="580" y="106" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#2563EB" text-anchor="middle">μ (MEAN)</text>
        <text x="740" y="106" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#475569" text-anchor="middle">+1σ</text>
        <text x="900" y="106" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94A3B8" text-anchor="middle">+2σ</text>

        <!-- Shaded Area annotation -->
        <text x="580" y="11" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#2563EB" text-anchor="middle">68.27% CONFIDENCE INTERVAL</text>
      </svg>
    </div>

    <!-- Bottom Bar with Email -->
    <div class="bottom-bar">
      <div class="mail-tag">
        <span class="dot"></span>
        <span>masuddarrahaman31@gmail.com</span>
      </div>
      <div class="formula-tag">
        y = f(X) + ε  [ where ε ~ 𝒩(0, σ²) ]
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: STACKED MONUMENTAL TYPE + WOVEN VENN DIAGRAM
   - "DATA" (120px) stacked above "SCIENTIST" (120px)
   - Large architectural Venn circles woven into the composition
     (NOT inside a separate box, but integral to the design)
   - Email at bottom.
   ───────────────────────────────────────────────────────────── */
function getIntegrated2Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
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

    .main-wrap {
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 10;
    }

    .type-stack {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .word-data {
      font-size: 118px;
      font-weight: 900;
      letter-spacing: -5px;
      line-height: 0.88;
      color: #0F172A;
      text-transform: uppercase;
    }

    .word-scientist {
      font-size: 118px;
      font-weight: 900;
      letter-spacing: -5px;
      line-height: 0.88;
      color: #0F172A;
      text-transform: uppercase;
      margin-top: 4px;
    }

    .bottom-mail-line {
      margin-top: 18px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .bottom-mail-line strong {
      color: #0F172A;
    }
    .sq-dot {
      width: 7px;
      height: 7px;
      background: #2563EB;
    }

    /* Integrated Venn Graphic (Direct SVG, no card container!) */
    .venn-graphic {
      width: 460px;
      height: 290px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="main-wrap">
    <div class="type-stack">
      <div class="word-data">DATA</div>
      <div class="word-scientist">SCIENTIST</div>
      <div class="bottom-mail-line">
        <span class="sq-dot"></span>
        <strong>masuddarrahaman31@gmail.com</strong>
      </div>
    </div>

    <!-- Integrated Venn Diagram (No box border; pure flowing vector art) -->
    <div class="venn-graphic">
      <svg width="440" height="280" viewBox="0 0 440 280" fill="none">
        <!-- Circle 1: Code / Software (Left) -->
        <circle cx="170" cy="150" r="95" stroke="#0F172A" stroke-width="2" fill="#0F172A" fill-opacity="0.02"/>
        
        <!-- Circle 2: Math / Statistics (Right) -->
        <circle cx="270" cy="150" r="95" stroke="#0F172A" stroke-width="2" fill="#0F172A" fill-opacity="0.02"/>

        <!-- Circle 3: Domain / Discovery (Top) -->
        <circle cx="220" cy="95" r="90" stroke="#2563EB" stroke-width="2" stroke-dasharray="4 4" fill="#2563EB" fill-opacity="0.03"/>

        <!-- Center Intersection Highlight -->
        <ellipse cx="220" cy="142" rx="40" ry="32" fill="#2563EB" fill-opacity="0.2"/>

        <!-- Labels -->
        <text x="120" y="180" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#475569" text-anchor="middle">CODE</text>
        <text x="320" y="180" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#475569" text-anchor="middle">STATS</text>
        <text x="220" y="40" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#2563EB" text-anchor="middle">DOMAIN</text>

        <!-- Center Label -->
        <circle cx="220" cy="138" r="4" fill="#2563EB"/>
        <text x="220" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#0F172A" text-anchor="middle">INTERSECTION</text>
      </svg>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: THE MONUMENTAL STANDARD DEVIATION BLUEPRINT
   - HUGE "DATA SCIENTIST" (110px) across the top
   - Giant standard deviation distribution curve spanning the baseline
     integrated with tick marks and shaded sigma bands.
   - Email at bottom.
   ───────────────────────────────────────────────────────────── */
function getIntegrated3Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
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
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 60px 30px 360px;
    }

    .main-content {
      position: relative;
      z-index: 10;
      width: 100%;
    }

    .super-title {
      font-size: 108px;
      font-weight: 900;
      letter-spacing: -4.5px;
      line-height: 0.9;
      color: #0F172A;
      text-transform: uppercase;
    }

    /* Integrated Full Curve SVG */
    .curve-container {
      width: 100%;
      margin-top: 15px;
    }

    .footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      padding-top: 10px;
    }
    .footer-row strong {
      color: #0F172A;
    }
  </style>
</head>
<body>
  <div class="main-content">
    <h1 class="super-title">DATA SCIENTIST</h1>

    <div class="curve-container">
      <svg width="1160" height="120" viewBox="0 0 1160 120" fill="none">
        <!-- Baseline -->
        <line x1="10" y1="100" x2="1150" y2="100" stroke="#CBD5E1" stroke-width="2"/>

        <!-- Shaded ±1σ Interval -->
        <path d="M 430 100 
                 C 485 100, 525 22, 580 22 
                 C 635 22, 675 100, 730 100 
                 Z" 
              fill="#0F172A" fill-opacity="0.06"/>

        <!-- Smooth Gaussian Bell Curve -->
        <path d="M 10 99 
                 C 260 99, 390 95, 470 60
                 C 520 32, 550 22, 580 22 
                 C 610 22, 640 32, 690 60
                 C 770 95, 900 99, 1150 99" 
              stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>

        <!-- Mean Vertical Line -->
        <line x1="580" y1="22" x2="580" y2="100" stroke="#2563EB" stroke-width="2" stroke-dasharray="3 3"/>
        <circle cx="580" cy="22" r="4.5" fill="#2563EB"/>

        <!-- Sigma Marks -->
        <line x1="430" y1="60" x2="430" y2="100" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="730" y1="60" x2="730" y2="100" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>

        <text x="280" y="115" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94A3B8" text-anchor="middle">-2σ</text>
        <text x="430" y="115" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#475569" text-anchor="middle">-1σ</text>
        <text x="580" y="115" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#2563EB" text-anchor="middle">μ</text>
        <text x="730" y="115" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#475569" text-anchor="middle">+1σ</text>
        <text x="880" y="115" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94A3B8" text-anchor="middle">+2σ</text>

        <!-- Statistical Insight -->
        <text x="580" y="14" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#2563EB" text-anchor="middle">68.2% EXPECTED REALITY</text>
      </svg>
    </div>
  </div>

  <div class="footer-row">
    <div><strong>masuddarrahaman31@gmail.com</strong></div>
    <div>P(Clean Data) = 0 • 95% Confidence</div>
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
  console.log("Generating Integrated Massive-Typography Statistical Banners...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const options = [
    {
      id: "integrated-1-gaussian-flow",
      title: "Integrated 1: Monumental Type + Continuous Gaussian Flow (102px Title)",
      html: getIntegrated1Html(),
      badge: "RECOMMENDED • FULL GAUSSIAN FLOW"
    },
    {
      id: "integrated-2-woven-venn",
      title: "Integrated 2: Stacked Monumental Type + Woven Venn Geometry",
      html: getIntegrated2Html(),
      badge: "WOVEN VENN DIAGRAM"
    },
    {
      id: "integrated-3-blueprint-curve",
      title: "Integrated 3: Super-Scale Type + Gaussian Baseline (108px Title)",
      html: getIntegrated3Html(),
      badge: "SUPER-SCALE 108px"
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

  console.log("Integrated banners rendering complete!");
}

run().catch(console.error);
