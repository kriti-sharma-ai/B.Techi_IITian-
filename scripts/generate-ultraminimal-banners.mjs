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
   DESIGN 1: MODERNIST SWISS GRID
   - Massive "DATA SCIENTIST" headline (84px, ultra-bold)
   - "MASUDDAR RAHAMAN" clean label
   - Geometric matrix of square boxes on the right:
     some filled with vibrant colors (Cobalt, Amber, Emerald, Violet, Slate)
     and some outlined hairline wireframes with minimal data glyphs.
   ───────────────────────────────────────────────────────────── */
function getDesign1Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0A0D14;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    /* Subtle graph paper background grid */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-size: 28px 28px;
      background-image: 
        linear-gradient(to right, #F1F5F9 1px, transparent 1px),
        linear-gradient(to bottom, #F1F5F9 1px, transparent 1px);
    }

    .main-container {
      position: relative;
      z-index: 10;
      width: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    /* Left Typographic Hero */
    .type-col {
      flex: 1;
    }

    .author-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      color: #64748B;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .author-tag::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #2563EB;
      border-radius: 2px;
    }

    .headline-big {
      font-size: 82px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.95;
      color: #090D16;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .sub-tagline {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      font-weight: 600;
      color: #2563EB;
      letter-spacing: 1px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .sub-tagline .sep {
      color: #CBD5E1;
    }

    /* Right Square Boxes Matrix (4 columns x 2 rows) */
    .square-matrix {
      display: grid;
      grid-template-columns: repeat(4, 76px);
      grid-template-rows: repeat(2, 76px);
      gap: 12px;
      padding: 14px;
      background: #FAFAFA;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }

    .sq-box {
      width: 76px;
      height: 76px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      position: relative;
    }

    /* Color variations */
    .sq-cobalt {
      background: #2563EB;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
    }
    .sq-amber {
      background: #F59E0B;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
    }
    .sq-emerald {
      background: #10B981;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
    }
    .sq-slate {
      background: #0F172A;
      color: #FFFFFF;
    }
    .sq-violet {
      background: #6366F1;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
    }

    /* Outlined wireframe boxes */
    .sq-wireframe {
      background: #FFFFFF;
      border: 1.5px solid #CBD5E1;
      color: #475569;
    }
    .sq-wireframe svg {
      color: #2563EB;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <div class="main-container">
    <div class="type-col">
      <div class="author-tag">MASUDDAR RAHAMAN</div>
      <h1 class="headline-big">DATA SCIENTIST</h1>
      <div class="sub-tagline">
        <span>STATISTICAL ML</span>
        <span class="sep">/</span>
        <span>KAIZENSTAT CORE</span>
        <span class="sep">/</span>
        <span>OPEN SOURCE</span>
      </div>
    </div>

    <!-- Geometric Colored & Wireframe Square Matrix (4x2) -->
    <div class="square-matrix">
      <!-- Row 1 -->
      <div class="sq-box sq-cobalt">
        <span style="font-size:16px;">ML</span>
      </div>
      <div class="sq-box sq-wireframe">
        <svg width="30" height="18" viewBox="0 0 100 50" fill="none" stroke="#2563EB" stroke-width="3">
          <path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/>
        </svg>
      </div>
      <div class="sq-box sq-amber">
        <span style="font-size:18px;">θ*</span>
      </div>
      <div class="sq-box sq-wireframe">
        <span style="color:#64748B; font-size: 13px;">+</span>
      </div>

      <!-- Row 2 -->
      <div class="sq-box sq-wireframe">
        <span style="color:#2563EB; font-size:11px;">[N×D]</span>
      </div>
      <div class="sq-box sq-emerald">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="sq-box sq-slate">
        <span style="font-size:10px; letter-spacing:0.5px;">KAIZEN</span>
      </div>
      <div class="sq-box sq-violet">
        <span style="font-size:16px;">Py</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: THE MODERNIST BENTO (Integrated Color Squares)
   - "DATA SCIENTIST" in massive bold lettering
   - Clean modular layout with prominent color-filled square cards
     flanking the main typography.
   ───────────────────────────────────────────────────────────── */
function getDesign2Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
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

    .main-wrap {
      width: 100%;
      margin-left: 360px;
      margin-right: 50px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    /* Main Big Hero Bento Card */
    .hero-card {
      flex: 1.8;
      height: 270px;
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      border-radius: 12px;
      padding: 26px 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }

    .author-line {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: #64748B;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .author-line .badge-active {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: #10B981;
      font-size: 11px;
    }

    .big-title {
      font-size: 76px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.95;
      color: #0F172A;
      text-transform: uppercase;
      margin: 8px 0;
    }

    .hero-footer {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: #2563EB;
      letter-spacing: 0.5px;
    }

    /* Right Color Square Tiles (Bento Columns) */
    .color-column {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .tile-square {
      width: 129px;
      height: 129px;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Solid color tiles */
    .tile-cobalt {
      background: #2563EB;
      color: #FFFFFF;
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
    }
    .tile-cobalt .title {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.2px;
    }
    .tile-cobalt .code {
      font-size: 11px;
      opacity: 0.85;
    }

    .tile-amber {
      background: #F59E0B;
      color: #FFFFFF;
      box-shadow: 0 8px 20px rgba(245, 158, 11, 0.25);
    }
    .tile-amber .title {
      font-size: 14px;
      font-weight: 700;
    }
    .tile-amber .code {
      font-size: 11px;
      opacity: 0.9;
    }

    .tile-emerald {
      background: #10B981;
      color: #FFFFFF;
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
    }
    .tile-emerald .title {
      font-size: 14px;
      font-weight: 700;
    }
    .tile-emerald .code {
      font-size: 11px;
      opacity: 0.9;
    }

    .tile-wireframe {
      background: #FFFFFF;
      border: 1.5px solid #E2E8F0;
      color: #334155;
    }
    .tile-wireframe .title {
      font-size: 13px;
      font-weight: 700;
      color: #0F172A;
    }
    .tile-wireframe .code {
      font-size: 11px;
      color: #64748B;
    }
  </style>
</head>
<body>
  <div class="main-wrap">
    <!-- Big Center-Left Box with Giant Typography -->
    <div class="hero-card">
      <div class="author-line">
        <span>MASUDDAR RAHAMAN</span>
        <span class="badge-active">● KAIZENSTAT CORE</span>
      </div>

      <div class="big-title">
        DATA<br>SCIENTIST
      </div>

      <div class="hero-footer">
        STATISTICAL MODELING • REPRODUCIBLE ML • PYTHON
      </div>
    </div>

    <!-- Square Color Column 1 -->
    <div class="color-column">
      <div class="tile-square tile-cobalt">
        <span class="code">01 // ML</span>
        <span class="title">Kaizen<br>Stat</span>
      </div>
      <div class="tile-square tile-wireframe">
        <span class="code">02 // STATS</span>
        <div>
          <svg width="40" height="20" viewBox="0 0 100 50" fill="none" stroke="#2563EB" stroke-width="3">
            <path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/>
          </svg>
          <div class="title" style="margin-top:2px;">Gaussian</div>
        </div>
      </div>
    </div>

    <!-- Square Color Column 2 -->
    <div class="color-column">
      <div class="tile-square tile-amber">
        <span class="code">03 // CODE</span>
        <span class="title">Python<br>&amp; PyTorch</span>
      </div>
      <div class="tile-square tile-emerald">
        <span class="code">04 // OPEN</span>
        <span class="title">GSSoC<br>'25</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: PURE MINIMALIST TYPOGRAPHIC POSTER (Strip of Color Tiles)
   - "DATA SCIENTIST" giant (88px)
   - A single horizontal strip of colorful geometric square swatches
   - Ultra-pure, zero fluff, maximum designer restraint.
   ───────────────────────────────────────────────────────────── */
function getDesign3Html() {
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
      color: #0A0D14;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* Minimalist top accent line */
    .top-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #2563EB 0%, #10B981 50%, #F59E0B 100%);
    }

    .content-box {
      margin-left: 360px;
      margin-right: 60px;
    }

    .meta-row {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      color: #64748B;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .meta-row .highlight {
      color: #2563EB;
    }

    .giant-title {
      font-size: 88px;
      font-weight: 900;
      letter-spacing: -4px;
      line-height: 0.95;
      color: #0A0D14;
      text-transform: uppercase;
      margin-bottom: 22px;
    }

    /* Horizontal Strip of Colored Square Boxes */
    .tiles-strip {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .color-block {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
    }

    .block-cobalt { background: #2563EB; color: #FFFFFF; }
    .block-amber { background: #F59E0B; color: #FFFFFF; }
    .block-emerald { background: #10B981; color: #FFFFFF; }
    .block-violet { background: #8B5CF6; color: #FFFFFF; }
    .block-slate { background: #0F172A; color: #FFFFFF; }
    .block-wire { 
      background: #FFFFFF; 
      border: 1.5px solid #CBD5E1; 
      color: #475569; 
    }

    .strip-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: #475569;
      margin-left: 14px;
      letter-spacing: 0.5px;
    }
    .strip-label strong {
      color: #0A0D14;
    }
  </style>
</head>
<body>
  <div class="top-line"></div>

  <div class="content-box">
    <div class="meta-row">
      <span>MASUDDAR RAHAMAN</span>
      <span>•</span>
      <span class="highlight">FOUNDER @ KAIZENSTAT</span>
    </div>

    <h1 class="giant-title">DATA SCIENTIST</h1>

    <!-- Minimalist Square Blocks Swatch Strip -->
    <div class="tiles-strip">
      <div class="color-block block-cobalt">DS</div>
      <div class="color-block block-wire">+</div>
      <div class="color-block block-emerald">ML</div>
      <div class="color-block block-amber">θ*</div>
      <div class="color-block block-wire">
        <svg width="22" height="14" viewBox="0 0 100 50" fill="none" stroke="#2563EB" stroke-width="4">
          <path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/>
        </svg>
      </div>
      <div class="color-block block-violet">Py</div>
      <div class="color-block block-slate">AI</div>

      <div class="strip-label">
        <strong>Statistical Modeling</strong> • Reproducible Pipelines • Open Source
      </div>
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
  console.log("Generating Ultra-Minimal Colored Square Data Scientist Banners...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const options = [
    {
      id: "minimal-boxes-1-swiss-matrix",
      title: "Ultra-Minimal 1: Modernist Swiss Grid (Giant Title + 4x2 Colored Squares)",
      html: getDesign1Html(),
      badge: "RECOMMENDED • 4x2 COLORED SQUARES"
    },
    {
      id: "minimal-boxes-2-modular-bento",
      title: "Ultra-Minimal 2: Bauhaus Bento (Stacked Color Squares)",
      html: getDesign2Html(),
      badge: "STACKED COLOR SQUARES"
    },
    {
      id: "minimal-boxes-3-swatch-strip",
      title: "Ultra-Minimal 3: Typographic Poster (Color Tile Swatches)",
      html: getDesign3Html(),
      badge: "COLOR SWATCH STRIP"
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

  console.log("Ultra-minimal banner generation complete!");
}

run().catch(console.error);
