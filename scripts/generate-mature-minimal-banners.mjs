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
   DESIGN 1: THE ARCHITECTURAL MATRIX (Swiss Editorial / Dieter Rams)
   - Warm chalk white canvas (#FBFBFB)
   - Fine 1px architectural grid lines
   - Big, elegant, high-contrast "DATA SCIENTIST"
   - Sophisticated modular square grid on the right:
     Monochrome & deep charcoal/slate tones (NO rainbow colors).
     Precision mathematical notations & coordinates.
   ───────────────────────────────────────────────────────────── */
function getMatureDesign1Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FDFDFE;
      color: #111827;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    /* Subtle architectural engineering grid */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-size: 36px 36px;
      background-image: 
        linear-gradient(to right, #F1F3F7 1px, transparent 1px),
        linear-gradient(to bottom, #F1F3F7 1px, transparent 1px);
    }

    .main-wrapper {
      position: relative;
      z-index: 10;
      width: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }

    /* Left Typography */
    .left-col {
      flex: 1.1;
    }

    .meta-spec {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      font-weight: 600;
      color: #64748B;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .meta-spec .dot {
      width: 6px;
      height: 6px;
      background: #0F172A;
      border-radius: 1px;
    }

    .hero-title {
      font-size: 72px;
      font-weight: 800;
      letter-spacing: -3px;
      line-height: 0.96;
      color: #0F172A;
      text-transform: uppercase;
      margin-bottom: 14px;
    }

    .name-headline {
      font-size: 17px;
      font-weight: 600;
      color: #334155;
      letter-spacing: -0.2px;
      margin-bottom: 6px;
    }
    .name-headline strong {
      color: #0F172A;
      font-weight: 800;
    }

    .sub-coordinates {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748B;
      letter-spacing: 0.5px;
    }

    /* Right Square Matrix (Architectural Bento) */
    .matrix-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 86px);
      grid-template-rows: repeat(2, 86px);
      gap: 10px;
      padding: 12px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    }

    .cell {
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      position: relative;
    }

    /* Sophisticated, Mature Tones (Charcoal, Stone, Slate, Wireframe) */
    .cell-dark {
      background: #0F172A;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .cell-slate {
      background: #1E293B;
      color: #F8FAFC;
      font-size: 11px;
    }
    .cell-soft {
      background: #F1F5F9;
      color: #334155;
      font-size: 12px;
      font-weight: 600;
    }
    .cell-wire {
      border: 1px solid #CBD5E1;
      background: #FFFFFF;
      color: #64748B;
      font-size: 11px;
    }
    .cell-accent {
      background: #0284C7;
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <div class="main-wrapper">
    <div class="left-col">
      <div class="meta-spec">
        <span class="dot"></span>
        <span>MASUDDAR RAHAMAN // LAB ARCHIVE</span>
      </div>

      <h1 class="hero-title">DATA SCIENTIST</h1>

      <div class="name-headline">
        <strong>Founder @ KaizenStat</strong> • SWE Intern @ Algoritmo Lab
      </div>

      <div class="sub-coordinates">
        Statistical Modeling • Reproducible ML Pipelines • Open Source (Apache 2.0)
      </div>
    </div>

    <!-- Architectural Square Matrix (Mature Minimalist Tones) -->
    <div class="matrix-wrapper">
      <div class="cell cell-dark">
        <span>KAIZEN</span>
      </div>
      <div class="cell cell-wire">
        <svg width="34" height="18" viewBox="0 0 100 50" fill="none" stroke="#0F172A" stroke-width="2.5">
          <path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/>
        </svg>
      </div>
      <div class="cell cell-soft">
        <span>X ∈ ℝⁿˣᵈ</span>
      </div>

      <div class="cell cell-wire">
        <span style="font-size:14px; color:#94A3B8;">+</span>
      </div>
      <div class="cell cell-accent">
        <span>ML / STATS</span>
      </div>
      <div class="cell cell-dark">
        <span>θ*</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: THE MONOCHROME GALLERY (High-Fashion / Tech Minimalist)
   - Stark, clean, editorial magazine aesthetic
   - Massive "DATA SCIENTIST" in sharp Helvetica/Grotesque
   - Monochromatic black, white, and titanium gray square boxes
   - 100% timeless, zero gimmicks
   ───────────────────────────────────────────────────────────── */
function getMatureDesign2Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #111827;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .outer-frame {
      position: absolute;
      top: 24px;
      bottom: 24px;
      left: 360px;
      right: 50px;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      padding: 30px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FAFAFA;
    }

    .text-side {
      flex: 1;
    }

    .tag-mono {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      font-weight: 600;
      color: #6B7280;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .big-name {
      font-size: 68px;
      font-weight: 900;
      letter-spacing: -3px;
      line-height: 0.95;
      color: #111827;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .caption-line {
      font-size: 15px;
      font-weight: 600;
      color: #4B5563;
      letter-spacing: -0.2px;
    }
    .caption-line strong {
      color: #111827;
    }

    /* Monochromatic Square Matrix */
    .mono-grid {
      display: flex;
      gap: 12px;
    }

    .sq-card {
      width: 104px;
      height: 104px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 12px;
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.2s;
    }

    .card-solid-black {
      background: #111827;
      color: #FFFFFF;
    }
    .card-solid-black .c-num {
      font-size: 10px;
      color: #9CA3AF;
    }
    .card-solid-black .c-text {
      font-size: 12px;
      font-weight: 600;
    }

    .card-outline {
      border: 1px solid #D1D5DB;
      background: #FFFFFF;
      color: #111827;
    }
    .card-outline .c-num {
      font-size: 10px;
      color: #6B7280;
    }
    .card-outline .c-text {
      font-size: 12px;
      font-weight: 600;
    }

    .card-gray {
      background: #E5E7EB;
      color: #1F2937;
    }
    .card-gray .c-num {
      font-size: 10px;
      color: #6B7280;
    }
    .card-gray .c-text {
      font-size: 12px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="outer-frame">
    <div class="text-side">
      <div class="tag-mono">MASUDDAR RAHAMAN // RESEARCH</div>
      <h1 class="big-name">DATA SCIENTIST</h1>
      <div class="caption-line">
        <strong>Founder @ KaizenStat</strong> • SWE Intern @ Algoritmo Lab • SIT '27
      </div>
    </div>

    <!-- 3 Elegant Monochromatic Square Cards -->
    <div class="mono-grid">
      <div class="sq-card card-solid-black">
        <span class="c-num">01 / ML</span>
        <span class="c-text">Kaizen<br>Stat</span>
      </div>

      <div class="sq-card card-outline">
        <span class="c-num">02 / MODEL</span>
        <div style="display:flex; justify-content:space-between; align-items:flex-end;">
          <span class="c-text">Stats</span>
          <svg width="28" height="16" viewBox="0 0 100 50" fill="none" stroke="#111827" stroke-width="2.5">
            <path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/>
          </svg>
        </div>
      </div>

      <div class="sq-card card-gray">
        <span class="c-num">03 / STACK</span>
        <span class="c-text">Python<br>MLOps</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: THE DEEP TECH MINIMALIST (Clean Ivory & Midnight Blue)
   - Ivory paper background (#FBFBFA)
   - Giant bold "DATA SCIENTIST"
   - Sophisticated midnight blue (#1E3A8A) + warm ivory accents
   - Clean data coordinates
   ───────────────────────────────────────────────────────────── */
function getMatureDesign3Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FBFBFA;
      color: #18181B;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .top-hairline {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: #18181B;
    }

    .content-area {
      width: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .left-hero {
      flex: 1;
    }

    .name-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: #71717A;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .giant-title {
      font-size: 78px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.95;
      color: #18181B;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .tagline {
      font-size: 15px;
      font-weight: 600;
      color: #52525B;
    }
    .tagline strong {
      color: #18181B;
    }

    /* Elegant Minimal Grid: 4 Clean Squares in a Line */
    .squares-row {
      display: flex;
      gap: 12px;
    }

    .sq-tile {
      width: 82px;
      height: 82px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      gap: 4px;
    }

    .tile-black {
      background: #18181B;
      color: #FFFFFF;
    }
    .tile-navy {
      background: #1E3A8A;
      color: #FFFFFF;
    }
    .tile-border {
      background: #FFFFFF;
      border: 1px solid #D4D4D8;
      color: #27272A;
    }
    .tile-stone {
      background: #F4F4F5;
      color: #3F3F46;
    }
  </style>
</head>
<body>
  <div class="top-hairline"></div>

  <div class="content-area">
    <div class="left-hero">
      <div class="name-badge">MASUDDAR RAHAMAN</div>
      <h1 class="giant-title">DATA SCIENTIST</h1>
      <div class="tagline">
        <strong>Founder @ KaizenStat</strong> • Statistical Modeling &amp; Machine Learning
      </div>
    </div>

    <!-- 4 Sophisticated Square Tiles -->
    <div class="squares-row">
      <div class="sq-tile tile-black">
        <span style="font-size:9px; color:#A1A1AA;">01</span>
        <span>ML</span>
      </div>
      <div class="sq-tile tile-border">
        <svg width="28" height="16" viewBox="0 0 100 50" fill="none" stroke="#18181B" stroke-width="2.5">
          <path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/>
        </svg>
        <span style="font-size:9px; color:#71717A;">STATS</span>
      </div>
      <div class="sq-tile tile-navy">
        <span style="font-size:9px; color:#93C5FD;">02</span>
        <span>KAIZEN</span>
      </div>
      <div class="sq-tile tile-stone">
        <span style="font-size:9px; color:#71717A;">CORE</span>
        <span>PYTHON</span>
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
  console.log("Generating Mature Minimalist Swiss Banners for Data Scientist...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const options = [
    {
      id: "mature-matrix-1-swiss-architectural",
      title: "Mature Minimalist 1: Swiss Architectural (Chalk Canvas & Slate Matrix)",
      html: getMatureDesign1Html(),
      badge: "RECOMMENDED • ARCHITECTURAL"
    },
    {
      id: "mature-matrix-2-monochrome-gallery",
      title: "Mature Minimalist 2: Monochrome Gallery (Framed Studio Aesthetic)",
      html: getMatureDesign2Html(),
      badge: "PURE MONOCHROME • HIGH DESIGN"
    },
    {
      id: "mature-matrix-3-deep-tech-ivory",
      title: "Mature Minimalist 3: Deep Tech Ivory (Midnight Navy & Stone)",
      html: getMatureDesign3Html(),
      badge: "IVORY & MIDNIGHT"
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

  console.log("Mature minimalist banner generation complete!");
}

run().catch(console.error);
