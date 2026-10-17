import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const BANNERS_DIR = path.resolve("marketing/linkedin/banners/masuddar");
const OUTPUT_DIR = path.join(BANNERS_DIR, "creator-style");
const HTML_DIR = path.resolve("scripts/linkedin-banners/masuddar/html/creator-style");
const PHOTOS_DIR = path.join(BANNERS_DIR, "photos");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const AVATAR_PATH = path.join(PHOTOS_DIR, "masuddar-avatar-circle.png");
const PORTRAIT_PATH = path.join(PHOTOS_DIR, "masuddar-portrait.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

// Ensure portrait is accessible
fs.copyFileSync(PORTRAIT_PATH, path.join(ARTIFACT_DIR, "masuddar-portrait.png"));

// Pixel matrix icons
function getPixelIcon(primary = "#D4FF00", secondary = "#FFFFFF") {
  return `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="0" y="0" width="6" height="6" fill="${primary}" />
      <rect x="9" y="0" width="6" height="6" fill="${secondary}" />
      <rect x="18" y="0" width="6" height="6" fill="${primary}" />
      <rect x="0" y="9" width="6" height="6" fill="${secondary}" />
      <rect x="9" y="9" width="6" height="6" fill="${primary}" />
      <rect x="18" y="9" width="6" height="6" fill="${secondary}" />
      <rect x="0" y="18" width="6" height="6" fill="${primary}" />
      <rect x="9" y="18" width="6" height="6" fill="${secondary}" />
      <rect x="18" y="18" width="6" height="6" fill="${primary}" />
    </svg>
  `;
}

// Contact Icons
const icons = {
  globe: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  mail: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
};

/* ─────────────────────────────────────────────────────────────
   DESIGN 1: VIBRANT ORANGE & ACID LIME (Exact Reference Match)
   - Background: Vibrant warm orange (#FF5500)
   - Acid lime (#D4FF00) geometric squares on left
   - Name: Masuddar Rahaman + pixel icon
   - Badge: [ Founder ] Data Scientist
   - Wireframe tags: [ Machine Learning ] [ Statistical ML ] [ KaizenStat ]
   - Contact: github & email
   - Right: Organic wave window with real portrait + mini corner pixel
   ───────────────────────────────────────────────────────────── */
function getCreatorOrangeHtml() {
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
      background: #FF5500;
      color: #FFFFFF;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    /* Left Geometric Pixel Pattern (Behind avatar area) */
    .left-pixel-matrix {
      position: absolute;
      top: 0;
      left: 0;
      width: 320px;
      height: 396px;
      display: grid;
      grid-template-columns: repeat(3, 85px);
      grid-template-rows: repeat(4, 85px);
      gap: 15px;
      padding: 20px 25px;
      pointer-events: none;
    }
    .px-box {
      width: 85px;
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .px-lime {
      background: #D4FF00;
      border-radius: 4px;
    }
    .px-white {
      background: #FFFFFF;
      border-radius: 4px;
    }
    .px-inner-white {
      width: 36px;
      height: 36px;
      background: #FFFFFF;
      border-radius: 2px;
    }

    /* Right Wave Photo Cutout Container */
    .right-photo-wave {
      position: absolute;
      top: 0;
      right: 0;
      width: 440px;
      height: 396px;
      z-index: 5;
    }
    .wave-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: path("M 80 0 C 10 90, -20 220, 60 320 C 90 360, 110 380, 130 396 L 440 396 L 440 0 Z");
      overflow: hidden;
      background: #E2E8F0;
    }
    .portrait-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      transform: scale(1.05);
    }

    /* Bottom-right mini pixel tile */
    .mini-pixel-corner {
      position: absolute;
      bottom: 18px;
      right: 18px;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(3, 14px);
      grid-template-rows: repeat(3, 14px);
      gap: 4px;
      background: #000000;
      padding: 6px;
      border-radius: 4px;
    }
    .c-sq { width: 14px; height: 14px; border-radius: 1px; }
    .c-lime { background: #D4FF00; }
    .c-white { background: #FFFFFF; }
    .c-black { background: #000000; }

    /* Center Content Container */
    .center-content {
      position: relative;
      z-index: 10;
      margin-left: 360px;
      width: 760px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 10px;
    }

    /* Name Line with Pixel Badge */
    .name-line {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 8px;
    }
    .hero-name {
      font-size: 52px;
      font-weight: 900;
      letter-spacing: -1.5px;
      line-height: 1;
      color: #FFFFFF;
    }

    /* Role Badge Line */
    .role-badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
    }
    .badge-pill-lime {
      background: #D4FF00;
      color: #000000;
      font-size: 24px;
      font-weight: 800;
      padding: 3px 14px;
      border-radius: 4px;
      line-height: 1.1;
      letter-spacing: -0.5px;
    }
    .role-text-white {
      font-size: 28px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.5px;
    }

    /* Wireframe Tech Bounding Boxes */
    .skills-row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }
    .bounding-box {
      border: 1.5px dashed rgba(255, 255, 255, 0.65);
      background: rgba(255, 255, 255, 0.08);
      padding: 7px 18px;
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      border-radius: 4px;
      position: relative;
    }
    /* Small corner handle dots like in Figma/Illustrator */
    .bounding-box::before, .bounding-box::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: #FFFFFF;
    }
    .bounding-box::before { top: -3px; left: -3px; }
    .bounding-box::after { bottom: -3px; right: -3px; }

    /* Contact Row */
    .contact-row {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      font-weight: 600;
      color: #FFFFFF;
      opacity: 0.95;
    }
    .c-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  </style>
</head>
<body>
  <!-- Left Geometric Pixel Pattern -->
  <div class="left-pixel-matrix">
    <div class="px-box px-lime"><div class="px-inner-white"></div></div>
    <div class="px-box px-lime"></div>
    <div class="px-box"></div>

    <div class="px-box px-white"></div>
    <div class="px-box px-white"></div>
    <div class="px-box px-lime"><div class="px-inner-white"></div></div>

    <div class="px-box px-lime"></div>
    <div class="px-box px-lime"></div>
    <div class="px-box"></div>

    <div class="px-box"></div>
    <div class="px-box px-lime"></div>
    <div class="px-box px-white"></div>
  </div>

  <!-- Center Content -->
  <div class="center-content">
    <div class="name-line">
      <h1 class="hero-name">Masuddar Rahaman</h1>
      ${getPixelIcon("#D4FF00", "#FFFFFF")}
    </div>

    <div class="role-badge-row">
      <span class="badge-pill-lime">Founder</span>
      <span class="role-text-white">Data Scientist</span>
    </div>

    <div class="skills-row">
      <div class="bounding-box">Machine Learning</div>
      <div class="bounding-box">Statistical ML</div>
      <div class="bounding-box">KaizenStat</div>
    </div>

    <div class="contact-row">
      <div class="c-item">
        ${icons.globe}
        <span>github.com/masuddar-rahaman</span>
      </div>
      <div class="c-item">
        ${icons.mail}
        <span>masuddarrahaman31@gmail.com</span>
      </div>
    </div>
  </div>

  <!-- Right Organic Wave with Real Portrait -->
  <div class="right-photo-wave">
    <div class="wave-mask">
      <img src="${PORTRAIT_PATH}" class="portrait-image" />
    </div>

    <!-- Mini Pixel Corner Accent -->
    <div class="mini-pixel-corner">
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-black"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: ELECTRIC COBALT & NEON LIME / MINT
   - Background: Electric Royal Cobalt (#1D4ED8)
   - Neon Acid Lime & White Pixel Pattern
   - Modern, high-energy tech builder palette
   ───────────────────────────────────────────────────────────── */
function getCreatorCobaltHtml() {
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
      background: #1D4ED8;
      color: #FFFFFF;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    .left-pixel-matrix {
      position: absolute;
      top: 0;
      left: 0;
      width: 320px;
      height: 396px;
      display: grid;
      grid-template-columns: repeat(3, 85px);
      grid-template-rows: repeat(4, 85px);
      gap: 15px;
      padding: 20px 25px;
      pointer-events: none;
    }
    .px-box {
      width: 85px;
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .px-lime {
      background: #00F59B;
      border-radius: 4px;
    }
    .px-white {
      background: #FFFFFF;
      border-radius: 4px;
    }
    .px-inner-white {
      width: 36px;
      height: 36px;
      background: #FFFFFF;
      border-radius: 2px;
    }

    .right-photo-wave {
      position: absolute;
      top: 0;
      right: 0;
      width: 440px;
      height: 396px;
      z-index: 5;
    }
    .wave-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: path("M 80 0 C 10 90, -20 220, 60 320 C 90 360, 110 380, 130 396 L 440 396 L 440 0 Z");
      overflow: hidden;
      background: #E2E8F0;
    }
    .portrait-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      transform: scale(1.05);
    }

    .mini-pixel-corner {
      position: absolute;
      bottom: 18px;
      right: 18px;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(3, 14px);
      grid-template-rows: repeat(3, 14px);
      gap: 4px;
      background: #0B1938;
      padding: 6px;
      border-radius: 4px;
    }
    .c-sq { width: 14px; height: 14px; border-radius: 1px; }
    .c-lime { background: #00F59B; }
    .c-white { background: #FFFFFF; }
    .c-black { background: #0B1938; }

    .center-content {
      position: relative;
      z-index: 10;
      margin-left: 360px;
      width: 760px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 10px;
    }

    .name-line {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 8px;
    }
    .hero-name {
      font-size: 52px;
      font-weight: 900;
      letter-spacing: -1.5px;
      line-height: 1;
      color: #FFFFFF;
    }

    .role-badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
    }
    .badge-pill-lime {
      background: #00F59B;
      color: #064E3B;
      font-size: 24px;
      font-weight: 800;
      padding: 3px 14px;
      border-radius: 4px;
      line-height: 1.1;
      letter-spacing: -0.5px;
    }
    .role-text-white {
      font-size: 28px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.5px;
    }

    .skills-row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }
    .bounding-box {
      border: 1.5px dashed rgba(255, 255, 255, 0.7);
      background: rgba(255, 255, 255, 0.08);
      padding: 7px 18px;
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      border-radius: 4px;
      position: relative;
    }
    .bounding-box::before, .bounding-box::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: #FFFFFF;
    }
    .bounding-box::before { top: -3px; left: -3px; }
    .bounding-box::after { bottom: -3px; right: -3px; }

    .contact-row {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      font-weight: 600;
      color: #FFFFFF;
      opacity: 0.95;
    }
    .c-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  </style>
</head>
<body>
  <div class="left-pixel-matrix">
    <div class="px-box px-lime"><div class="px-inner-white"></div></div>
    <div class="px-box px-lime"></div>
    <div class="px-box"></div>

    <div class="px-box px-white"></div>
    <div class="px-box px-white"></div>
    <div class="px-box px-lime"><div class="px-inner-white"></div></div>

    <div class="px-box px-lime"></div>
    <div class="px-box px-lime"></div>
    <div class="px-box"></div>

    <div class="px-box"></div>
    <div class="px-box px-lime"></div>
    <div class="px-box px-white"></div>
  </div>

  <div class="center-content">
    <div class="name-line">
      <h1 class="hero-name">Masuddar Rahaman</h1>
      ${getPixelIcon("#00F59B", "#FFFFFF")}
    </div>

    <div class="role-badge-row">
      <span class="badge-pill-lime">Founder</span>
      <span class="role-text-white">Data Scientist</span>
    </div>

    <div class="skills-row">
      <div class="bounding-box">Statistical ML</div>
      <div class="bounding-box">Pipelines &amp; MLOps</div>
      <div class="bounding-box">KaizenStat</div>
    </div>

    <div class="contact-row">
      <div class="c-item">
        ${icons.globe}
        <span>github.com/masuddar-rahaman</span>
      </div>
      <div class="c-item">
        ${icons.mail}
        <span>masuddarrahaman31@gmail.com</span>
      </div>
    </div>
  </div>

  <div class="right-photo-wave">
    <div class="wave-mask">
      <img src="${PORTRAIT_PATH}" class="portrait-image" />
    </div>

    <div class="mini-pixel-corner">
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-black"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: DEEP SLATE OBSIDIAN & SOLAR LIME
   - Background: Dark executive slate (#0F172A)
   - Solar Lime / Yellow (#D4FF00) accents
   - Premium, modern, authoritative
   ───────────────────────────────────────────────────────────── */
function getCreatorSlateHtml() {
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
      background: #0B0F19;
      color: #FFFFFF;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    .left-pixel-matrix {
      position: absolute;
      top: 0;
      left: 0;
      width: 320px;
      height: 396px;
      display: grid;
      grid-template-columns: repeat(3, 85px);
      grid-template-rows: repeat(4, 85px);
      gap: 15px;
      padding: 20px 25px;
      pointer-events: none;
    }
    .px-box {
      width: 85px;
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .px-lime {
      background: #D4FF00;
      border-radius: 4px;
    }
    .px-white {
      background: #1E293B;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
    }
    .px-inner-white {
      width: 36px;
      height: 36px;
      background: #0B0F19;
      border-radius: 2px;
    }

    .right-photo-wave {
      position: absolute;
      top: 0;
      right: 0;
      width: 440px;
      height: 396px;
      z-index: 5;
    }
    .wave-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: path("M 80 0 C 10 90, -20 220, 60 320 C 90 360, 110 380, 130 396 L 440 396 L 440 0 Z");
      overflow: hidden;
      background: #1E293B;
    }
    .portrait-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      transform: scale(1.05);
    }

    .mini-pixel-corner {
      position: absolute;
      bottom: 18px;
      right: 18px;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(3, 14px);
      grid-template-rows: repeat(3, 14px);
      gap: 4px;
      background: #000000;
      padding: 6px;
      border-radius: 4px;
    }
    .c-sq { width: 14px; height: 14px; border-radius: 1px; }
    .c-lime { background: #D4FF00; }
    .c-white { background: #FFFFFF; }
    .c-black { background: #000000; }

    .center-content {
      position: relative;
      z-index: 10;
      margin-left: 360px;
      width: 760px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 10px;
    }

    .name-line {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 8px;
    }
    .hero-name {
      font-size: 52px;
      font-weight: 900;
      letter-spacing: -1.5px;
      line-height: 1;
      color: #FFFFFF;
    }

    .role-badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
    }
    .badge-pill-lime {
      background: #D4FF00;
      color: #000000;
      font-size: 24px;
      font-weight: 800;
      padding: 3px 14px;
      border-radius: 4px;
      line-height: 1.1;
      letter-spacing: -0.5px;
    }
    .role-text-white {
      font-size: 28px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.5px;
    }

    .skills-row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }
    .bounding-box {
      border: 1.5px dashed rgba(212, 255, 0, 0.6);
      background: rgba(212, 255, 0, 0.06);
      padding: 7px 18px;
      font-size: 15px;
      font-weight: 700;
      color: #F8FAFC;
      border-radius: 4px;
      position: relative;
    }
    .bounding-box::before, .bounding-box::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: #D4FF00;
    }
    .bounding-box::before { top: -3px; left: -3px; }
    .bounding-box::after { bottom: -3px; right: -3px; }

    .contact-row {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      font-weight: 600;
      color: #94A3B8;
    }
    .c-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  </style>
</head>
<body>
  <div class="left-pixel-matrix">
    <div class="px-box px-lime"><div class="px-inner-white"></div></div>
    <div class="px-box px-lime"></div>
    <div class="px-box"></div>

    <div class="px-box px-white"></div>
    <div class="px-box px-white"></div>
    <div class="px-box px-lime"><div class="px-inner-white"></div></div>

    <div class="px-box px-lime"></div>
    <div class="px-box px-lime"></div>
    <div class="px-box"></div>

    <div class="px-box"></div>
    <div class="px-box px-lime"></div>
    <div class="px-box px-white"></div>
  </div>

  <div class="center-content">
    <div class="name-line">
      <h1 class="hero-name">Masuddar Rahaman</h1>
      ${getPixelIcon("#D4FF00", "#FFFFFF")}
    </div>

    <div class="role-badge-row">
      <span class="badge-pill-lime">Founder</span>
      <span class="role-text-white">Data Scientist</span>
    </div>

    <div class="skills-row">
      <div class="bounding-box">Machine Learning</div>
      <div class="bounding-box">Statistical Modeling</div>
      <div class="bounding-box">KaizenStat</div>
    </div>

    <div class="contact-row">
      <div class="c-item">
        ${icons.globe}
        <span>github.com/masuddar-rahaman</span>
      </div>
      <div class="c-item">
        ${icons.mail}
        <span>masuddarrahaman31@gmail.com</span>
      </div>
    </div>
  </div>

  <div class="right-photo-wave">
    <div class="wave-mask">
      <img src="${PORTRAIT_PATH}" class="portrait-image" />
    </div>

    <div class="mini-pixel-corner">
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-black"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
      <div class="c-sq c-white"></div>
      <div class="c-sq c-lime"></div>
    </div>
  </div>
</body>
</html>`;
}

// LinkedIn Profile Mockup (Dark/Light appropriate)
function getMockupHtml(bannerImgUrl, avatarImgUrl, title) {
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
      background-color: #0E1217;
      color: #FFFFFF;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .linkedin-nav {
      height: 52px;
      background: #1B1F23;
      border-bottom: 1px solid #282E33;
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
      background: #282E33;
      border: none;
      border-radius: 4px;
      padding: 7px 16px;
      font-size: 13px;
      color: #94A3B8;
      width: 240px;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 11px;
      color: #94A3B8;
    }

    .profile-card-container {
      width: 1040px;
      margin: 20px auto 0;
      background: #1B1F23;
      border: 1px solid #2D3339;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      position: relative;
    }

    .mockup-banner {
      width: 1040px;
      height: 260px;
      background-image: url('${bannerImgUrl}');
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .avatar-wrapper {
      position: absolute;
      top: 180px;
      left: 36px;
      width: 152px;
      height: 152px;
      border-radius: 50%;
      border: 4px solid #1B1F23;
      background: #0B0E14;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
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
      color: #F8FAFC;
    }
    .degree-badge {
      font-size: 12px;
      color: #94A3B8;
      font-weight: 500;
    }
    .p-headline {
      font-size: 15px;
      font-weight: 500;
      color: #CBD5E1;
      margin-top: 4px;
    }
    .p-location {
      font-size: 13px;
      color: #94A3B8;
      margin-top: 6px;
    }
    .p-contact {
      color: #38BDF8;
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
      border: 1px solid #38BDF8;
      color: #38BDF8;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 18px;
      border-radius: 9999px;
    }

    .preview-pill {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(0,0,0,0.75);
      border: 1px solid rgba(255,255,255,0.25);
      color: #FFFFFF;
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
      <span style="color:#F8FAFC;font-weight:600;">Me ▼</span>
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
        Founder @ KaizenStat | Data Scientist &amp; SWE Intern @ Algoritmo Lab | B.Tech IT’27
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
  console.log("Generating Reference Creator-Style Banners (Orange & Lime, Cobalt & Mint, Slate & Lime)...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const options = [
    {
      id: "creator-style-1-orange-lime",
      title: "Creator Style 1: Vivid Orange & Acid Lime (Exact Reference Match)",
      html: getCreatorOrangeHtml(),
      badge: "EXACT REFERENCE MATCH • ORANGE & LIME"
    },
    {
      id: "creator-style-2-cobalt-mint",
      title: "Creator Style 2: Electric Cobalt & Neon Mint",
      html: getCreatorCobaltHtml(),
      badge: "ELECTRIC COBALT & MINT"
    },
    {
      id: "creator-style-3-slate-lime",
      title: "Creator Style 3: Obsidian Slate & Solar Lime",
      html: getCreatorSlateHtml(),
      badge: "DARK SLATE & SOLAR LIME"
    }
  ];

  for (const opt of options) {
    const htmlFile = path.join(HTML_DIR, `${opt.id}.html`);
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
    const mockupHtml = getMockupHtml(
      `file://${png1x}`,
      `file://${AVATAR_PATH}`,
      opt.badge
    );
    const mockupHtmlFile = path.join(HTML_DIR, `${opt.id}-mockup.html`);
    fs.writeFileSync(mockupHtmlFile, mockupHtml);

    const mockupPng = path.join(OUTPUT_DIR, `${opt.id}-mockup.png`);
    execSync(
      `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1200,720 --screenshot="${mockupPng}" "file://${mockupHtmlFile}"`,
      { stdio: "ignore" }
    );
    fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, `${opt.id}-mockup.png`));

    console.log(`✓ Rendered ${opt.title}`);
  }

  console.log("Creator style banner generation complete!");
}

run().catch(console.error);
