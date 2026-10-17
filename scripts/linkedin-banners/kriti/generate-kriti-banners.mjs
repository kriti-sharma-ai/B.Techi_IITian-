import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const KRITI_DIR = path.resolve("marketing/linkedin/banners/kriti");
const OUTPUT_DIR = path.join(KRITI_DIR, "banners");
const HTML_DIR = path.resolve("scripts/linkedin-banners/kriti/html/banners");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";
const AVATAR_PATH = path.join(KRITI_DIR, "photos", "kriti-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

// Copy avatar to artifact directory for embedding
fs.copyFileSync(AVATAR_PATH, path.join(ARTIFACT_DIR, "kriti-avatar-circle.png"));

const icons = {
  mail: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  pencil: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`
};

/* ─────────────────────────────────────────────────────────────
   OPTION 1: THE OFFICIAL BTECHI TWIN (Pure 1:1 Brand Aesthetic)
   - Crisp white background (#FFFFFF) with 24px math grid (#E2E8F0)
   - Signature BTechi thick yellow line (#FFD21C, 10px) across entire banner
   - Right-side cluster (x = 640px) completely clear of avatar (x < 360px)
   - Above yellow line: Yellow [KS] brand square + "KRITI SHARMA" (46px bold)
   - Below yellow line: "Future-focused. Data-driven. Management mindset."
   - Yellow indicator dot + kritisharma1481550@gmail.com
   ───────────────────────────────────────────────────────────── */
function getKritiOption1Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
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

    /* Math square grid (Exact BTechi pattern) */
    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    /* Edge-to-edge BTechi signature yellow line */
    .yellow-bar {
      position: absolute;
      left: 0;
      right: 0;
      top: 155px;
      height: 10px;
      background: #FFD21C;
    }

    /* Top Section (Above Yellow Line, x = 650px) */
    .top-section {
      position: absolute;
      left: 640px;
      top: 60px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .brand-mark {
      width: 52px;
      height: 52px;
      background: #FFD21C;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 22px;
      font-weight: 900;
      color: #0B0B0B;
      letter-spacing: -0.5px;
      box-shadow: 0 2px 8px rgba(255, 210, 28, 0.35);
    }
    .name-title {
      font-size: 46px;
      font-weight: 900;
      letter-spacing: -1.8px;
      color: #0B0B0B;
      line-height: 1;
    }
    .badge-sub {
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      color: #475569;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 4px 10px;
      border-radius: 4px;
      text-transform: uppercase;
      margin-left: 6px;
    }

    /* Bottom Section (Below Yellow Line, x = 640px) */
    .bottom-section {
      position: absolute;
      left: 640px;
      top: 195px;
      right: 120px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .tagline {
      font-size: 31px;
      font-weight: 700;
      color: #1E293B;
      letter-spacing: -0.7px;
      line-height: 1.25;
    }
    .tagline strong {
      color: #0B0B0B;
      font-weight: 800;
    }

    .footer-line {
      display: flex;
      align-items: center;
      gap: 24px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14.5px;
      color: #475569;
    }
    .email-chip {
      display: flex;
      align-items: center;
      gap: 9px;
      color: #0B0B0B;
      font-weight: 600;
    }
    .yellow-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #FFD21C;
      display: inline-block;
    }
    .chip-tags {
      display: flex;
      gap: 10px;
    }
    .chip {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 12px;
      color: #64748B;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="bg-math-grid"></div>
  <div class="yellow-bar"></div>

  <!-- Top: Logo + Name -->
  <div class="top-section">
    <div class="brand-mark">KS</div>
    <div class="name-title">KRITI SHARMA</div>
    <span class="badge-sub">LEADERSHIP &amp; DATA</span>
  </div>

  <!-- Bottom: Signature Statement & Contact -->
  <div class="bottom-section">
    <div class="tagline">
      <strong>Future-focused. Data-driven.</strong> Management mindset.
    </div>
    <div class="footer-line">
      <div class="email-chip">
        <span class="yellow-dot"></span>
        <span>kritisharma1481550@gmail.com</span>
      </div>
      <div class="chip-tags">
        <span class="chip">Strategy</span>
        <span class="chip">Data Decisioning</span>
        <span class="chip">Execution</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 2: THE HIGH-IMPACT STATEMENT (Masuddar-Style Big Typography)
   - Math grid + Yellow Left Accent Bar
   - Large bold 3-line statement matching her profile bio
   - Yellow highlighter box on "Management mindset."
   - Unmissable, confident, modern
   ───────────────────────────────────────────────────────────── */
function getKritiOption2Html() {
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
      color: #0B0B0B;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 26px 26px;
      background-image: 
        linear-gradient(to right, #EEF2F6 1px, transparent 1px),
        linear-gradient(to bottom, #EEF2F6 1px, transparent 1px);
    }

    .accent-bar-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background: #FFD21C;
    }

    .main-wrap {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 90px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 38px 0 32px;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .author-name {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      font-weight: 700;
      color: #64748B;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .author-name strong {
      color: #0B0B0B;
      font-size: 15px;
    }
    .yellow-pip {
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border-radius: 2px;
    }

    .meta-track {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748B;
      font-weight: 600;
      letter-spacing: 1px;
    }

    /* Giant 2-Line Statement */
    .big-statement {
      font-size: 58px;
      font-weight: 900;
      letter-spacing: -2.2px;
      line-height: 1.06;
      color: #0B0B0B;
      margin: 8px 0;
    }
    .highlight-yellow {
      background: #FFD21C;
      color: #0B0B0B;
      padding: 2px 14px;
      border-radius: 6px;
      display: inline-block;
      line-height: 1.1;
      box-shadow: 0 4px 12px rgba(255, 210, 28, 0.3);
    }

    .bottom-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 14px;
      border-top: 2px solid #0B0B0B;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
    }
    .mail-tag {
      color: #0B0B0B;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .mail-tag svg {
      color: #FFD21C;
      fill: #FFD21C;
    }
    .tag-right {
      color: #64748B;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body>
  <div class="accent-bar-left"></div>
  <div class="bg-math-grid"></div>

  <div class="main-wrap">
    <div class="header-row">
      <div class="author-name">
        <span class="yellow-pip"></span>
        <strong>KRITI SHARMA</strong> // EXECUTIVE PROFILE
      </div>
      <div class="meta-track">
        DATA • BUSINESS • STRATEGY
      </div>
    </div>

    <div class="big-statement">
      <div>Future-focused. Data-driven.</div>
      <div><span class="highlight-yellow">Management mindset.</span></div>
    </div>

    <div class="bottom-row">
      <div class="mail-tag">
        ${icons.mail}
        <span>kritisharma1481550@gmail.com</span>
      </div>
      <div class="tag-right">
        STRATEGY × EXECUTION
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 3: THE MODULAR YELLOW BENTO (BTechi White & Yellow Grid)
   - Modular clean white cards + Signature Yellow Bento specs
   - Clean, structural, modern
   ───────────────────────────────────────────────────────────── */
function getKritiOption3Html() {
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
      color: #0B0B0B;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 28px 28px;
      background-image: 
        linear-gradient(to right, #EEF2F6 1px, transparent 1px),
        linear-gradient(to bottom, #EEF2F6 1px, transparent 1px);
    }

    .main-bento {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 360px;
      margin-right: 80px;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 30px 0;
    }

    /* Left Hero Card */
    .bento-hero {
      flex: 1.85;
      height: 100%;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 28px 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }

    .tag-meta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      font-weight: 700;
      color: #0B0B0B;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tag-meta::before {
      content: '';
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border-radius: 2px;
    }

    .name-title {
      font-size: 52px;
      font-weight: 900;
      letter-spacing: -2px;
      line-height: 1;
      color: #0B0B0B;
      margin: 8px 0 6px;
    }

    .tagline-sub {
      font-size: 16.5px;
      font-weight: 700;
      color: #475569;
    }
    .tagline-sub strong {
      color: #0B0B0B;
    }

    .mail-line {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748B;
      padding-top: 10px;
      border-top: 1px solid #F1F5F9;
    }
    .mail-line strong {
      color: #0B0B0B;
    }
    .mail-line svg {
      color: #FFD21C;
    }

    /* Right 3 Bento Spec Cards */
    .bento-column {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 330px;
      height: 100%;
    }

    .bento-card {
      flex: 1;
      border-radius: 12px;
      padding: 14px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #E2E8F0;
    }

    .card-yellow {
      background: #FFD21C;
      border-color: #E6BC0E;
      color: #0B0B0B;
      box-shadow: 0 4px 12px rgba(255, 210, 28, 0.25);
    }
    .card-yellow .c-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      font-weight: 800;
      color: #0B0B0B;
      letter-spacing: 1px;
    }
    .card-yellow .c-heading {
      font-size: 19px;
      font-weight: 900;
      letter-spacing: -0.4px;
    }

    .card-white {
      background: #FFFFFF;
      color: #0B0B0B;
    }
    .card-white .c-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: #94A3B8;
      letter-spacing: 1px;
    }
    .card-white .c-heading {
      font-size: 18px;
      font-weight: 800;
      color: #1E293B;
      letter-spacing: -0.4px;
    }
  </style>
</head>
<body>
  <div class="bg-math-grid"></div>

  <div class="main-bento">
    <!-- Hero Box -->
    <div class="bento-hero">
      <div>
        <div class="tag-meta">LEADERSHIP // STRATEGY &amp; DATA</div>
        <h1 class="name-title">KRITI SHARMA</h1>
        <div class="tagline-sub">
          <strong>Future-focused</strong> leadership with a data-driven management mindset.
        </div>
      </div>

      <div class="mail-line">
        ${icons.mail}
        <span><strong>kritisharma1481550@gmail.com</strong></span>
      </div>
    </div>

    <!-- 3 Stacked Bento Feature Cards -->
    <div class="bento-column">
      <div class="bento-card card-yellow">
        <span class="c-num">01 / VISION</span>
        <span class="c-heading">Future-focused</span>
      </div>

      <div class="bento-card card-white">
        <span class="c-num">02 / APPROACH</span>
        <span class="c-heading">Data-driven</span>
      </div>

      <div class="bento-card card-white">
        <span class="c-num">03 / EXECUTION</span>
        <span class="c-heading">Management mindset</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 4: THE 3-PILLAR EDITORIAL STACK (Her Original Bio Layout)
   - Matches her exact 3-line bio stack from her profile:
       Future-focused.
       Data-driven.
       Management mindset.
   - Elegant BTechi yellow numbers (01, 02, 03) and clean horizontal line
   ───────────────────────────────────────────────────────────── */
function getKritiOption4Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
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

    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #E2E8F0 0.85px, transparent 0.85px),
        linear-gradient(to bottom, #E2E8F0 0.85px, transparent 0.85px);
    }

    .yellow-top-line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: #FFD21C;
    }

    .main-wrap {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 360px;
      margin-right: 90px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 35px 0;
    }

    /* Left Column: Her 3-line statement */
    .statement-col {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .pillar-line {
      display: flex;
      align-items: baseline;
      gap: 16px;
      font-size: 44px;
      font-weight: 900;
      letter-spacing: -1.8px;
      color: #0B0B0B;
      line-height: 1.1;
    }
    .pillar-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 16px;
      font-weight: 800;
      color: #FFD21C;
      background: #0B0B0B;
      padding: 2px 7px;
      border-radius: 4px;
      letter-spacing: 0;
      line-height: 1;
    }
    .pillar-line.active {
      color: #0B0B0B;
    }
    .pillar-line.muted {
      color: #334155;
    }

    /* Right Column: Identity Card */
    .identity-card {
      width: 360px;
      height: 100%;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 26px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 16px rgba(0,0,0,0.03);
    }

    .id-top {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .id-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: #0B0B0B;
      background: #FFD21C;
      padding: 3px 8px;
      border-radius: 4px;
      width: fit-content;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .id-name {
      font-size: 32px;
      font-weight: 900;
      letter-spacing: -1.2px;
      color: #0B0B0B;
      margin-top: 4px;
    }
    .id-sub {
      font-size: 13.5px;
      color: #64748B;
      font-weight: 600;
    }

    .id-contact {
      border-top: 1px solid #F1F5F9;
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
    }
    .mail-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #0B0B0B;
      font-weight: 700;
    }
    .mail-link svg {
      color: #FFD21C;
    }
    .id-footer-tag {
      color: #94A3B8;
      font-size: 11px;
    }
  </style>
</head>
<body>
  <div class="bg-math-grid"></div>
  <div class="yellow-top-line"></div>

  <div class="main-wrap">
    <!-- Left: 3 Stacked Pillars -->
    <div class="statement-col">
      <div class="pillar-line active">
        <span class="pillar-num">01</span>
        <span>Future-focused.</span>
      </div>
      <div class="pillar-line muted">
        <span class="pillar-num">02</span>
        <span>Data-driven.</span>
      </div>
      <div class="pillar-line muted">
        <span class="pillar-num">03</span>
        <span>Management mindset.</span>
      </div>
    </div>

    <!-- Right: Profile Card -->
    <div class="identity-card">
      <div class="id-top">
        <div class="id-badge">Leadership</div>
        <div class="id-name">KRITI SHARMA</div>
        <div class="id-sub">Tech • Data Strategy • Execution</div>
      </div>

      <div class="id-contact">
        <div class="mail-link">
          ${icons.mail}
          <span>kritisharma1481550@gmail.com</span>
        </div>
        <div class="id-footer-tag">IIT MADRAS BS COMMUNITY</div>
      </div>
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

    /* LinkedIn Edit Pencil at Top-Right of banner */
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
    id: "kriti-banner-1-btechi-official",
    title: "Option 1: The Official BTechi Twin (Pure 1:1 Brand Aesthetic)",
    htmlGenerator: getKritiOption1Html
  },
  {
    id: "kriti-banner-2-high-impact-statement",
    title: "Option 2: The High-Impact Typographic Statement (BTechi Yellow Highlight)",
    htmlGenerator: getKritiOption2Html
  },
  {
    id: "kriti-banner-3-yellow-white-bento",
    title: "Option 3: The Modular Yellow & White Bento",
    htmlGenerator: getKritiOption3Html
  },
  {
    id: "kriti-banner-4-editorial-stack",
    title: "Option 4: The 3-Pillar Editorial Stack (Original Bio Format)",
    htmlGenerator: getKritiOption4Html
  }
];

console.log("Generating Kriti Sharma Yellow-White BTechi-Style Banners (1584x396)...");

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

console.log("Kriti Sharma banner pipeline complete!");
