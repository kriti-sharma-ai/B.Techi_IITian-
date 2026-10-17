import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("marketing/linkedin/banners");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const AVATAR_PATH = path.join(OUTPUT_DIR, "masuddar-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

// Minimalist vector icons for light backgrounds
const icons = {
  python: `<svg width="13" height="13" viewBox="0 0 24 24" fill="#0F172A"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.81v.825H3.92S0 5.761 0 11.916c0 6.152 3.42 5.94 3.42 5.94h2.04v-2.868s-.11-3.42 3.364-3.42h5.753s3.253.053 3.253-3.197V3.197S18.232 0 11.914 0zm-3.197 1.87a1.045 1.045 0 1 1 0 2.09 1.045 1.045 0 0 1 0-2.09zm3.369 22.13c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.81v-.825h8.096s3.92.47 3.92-5.685c0-6.155-3.42-5.94-3.42-5.94h-2.04v2.868s.11 3.42-3.364 3.42H8.714s-3.253-.053-3.253 3.197v5.172s-.402 3.199 5.917 3.199zm3.197-1.87a1.045 1.045 0 1 1 0-2.09 1.045 1.045 0 0 1 0 2.09z"/></svg>`,
  distribution: `<svg width="34" height="20" viewBox="0 0 100 50" fill="none" stroke="#2563EB" stroke-width="2.5"><path d="M 0 48 Q 30 48 40 30 Q 50 2 60 30 Q 70 48 100 48"/><line x1="50" y1="2" x2="50" y2="48" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`,
  scatter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="4" cy="18" r="2" fill="#2563EB"/><circle cx="9" cy="14" r="2" fill="#2563EB"/><circle cx="13" cy="9" r="2" fill="#2563EB"/><circle cx="18" cy="7" r="2" fill="#2563EB"/><circle cx="21" cy="4" r="2" fill="#2563EB"/><line x1="2" y1="20" x2="22" y2="2" stroke="#CBD5E1" stroke-width="1.5"/></svg>`,
  arrowUpRight: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>`,
  plus: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  mail: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  github: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
};

/* ─────────────────────────────────────────────────────────────
   DESIGN 1: "SWISS BENTO DATA SCIENTIST" (Pure White • Designer Grid Boxes)
   Modular square & rectangular bento cards with hairline borders.
   Clean, mathematical, Dieter Rams aesthetic.
   ───────────────────────────────────────────────────────────── */
function getLightDesign1Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0F172A;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      position: relative;
    }

    /* Subtle background grid */
    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, #F1F5F9 1px, transparent 1px),
        linear-gradient(to bottom, #F1F5F9 1px, transparent 1px);
      opacity: 0.8;
    }

    /* Left Safe Zone subtle architect watermark */
    .avatar-safe-area {
      position: absolute;
      left: 70px;
      top: 50px;
      pointer-events: none;
    }
    .designer-mark {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #94A3B8;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Main Bento Layout */
    .bento-container {
      position: relative;
      z-index: 10;
      margin-left: 360px;
      margin-right: 50px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;
    }

    .top-bento-row {
      display: flex;
      gap: 12px;
    }

    /* Box 1: Hero Identity Box */
    .box-hero {
      flex: 1.8;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 16px 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .box-meta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      font-weight: 600;
      color: #2563EB;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .hero-name {
      font-size: 34px;
      font-weight: 800;
      letter-spacing: -1.2px;
      line-height: 1.1;
      color: #0F172A;
      margin: 4px 0 2px;
    }
    .hero-role {
      font-size: 14.5px;
      font-weight: 600;
      color: #475569;
    }
    .hero-role span {
      color: #0F172A;
      font-weight: 700;
    }

    /* Box 2: KaizenStat Square Card */
    .box-square {
      width: 220px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 14px 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .card-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .card-heading {
      font-size: 16px;
      font-weight: 700;
      color: #0F172A;
      margin-top: 4px;
    }
    .card-desc {
      font-size: 12px;
      color: #64748B;
      line-height: 1.35;
      margin-top: 2px;
    }
    .card-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 8px;
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      border-radius: 4px;
      font-size: 10.5px;
      font-weight: 600;
      color: #1D4ED8;
      width: fit-content;
      margin-top: 6px;
    }

    /* Box 3: Data Science Bell Curve & Math */
    .box-math {
      width: 230px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .math-formula {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #334155;
      font-weight: 500;
      background: #FFFFFF;
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid #E2E8F0;
      margin-top: 6px;
    }

    /* Bottom Bento Row */
    .bottom-bento-row {
      display: flex;
      gap: 12px;
    }

    /* Long Spec Bar */
    .box-stack {
      flex: 2.2;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .stack-items {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .stack-tag {
      font-size: 12px;
      font-weight: 600;
      color: #334155;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      padding: 4px 10px;
      border-radius: 6px;
    }
    .stack-tag.featured {
      background: #F0FDF4;
      border-color: #BBF7D0;
      color: #15803D;
    }

    /* Contact box */
    .box-contact {
      flex: 1.2;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      color: #475569;
    }
    .contact-line {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .contact-line svg {
      color: #64748B;
    }
  </style>
</head>
<body>
  <div class="bg-math-grid"></div>

  <div class="avatar-safe-area">
    <div class="designer-mark">+ 26.72° N, 88.39° E • DATA_LAB</div>
  </div>

  <div class="bento-container">
    <div class="top-bento-row">
      <!-- Main Hero Box -->
      <div class="box-hero">
        <div class="box-meta">
          <span>● DATA SCIENCE &amp; STATISTICAL COMPUTING</span>
        </div>
        <div>
          <h1 class="hero-name">Masuddar Rahaman</h1>
          <div class="hero-role">
            Data Scientist &amp; ML Engineer • <span>Founder @ KaizenStat</span>
          </div>
        </div>
        <div style="font-size: 12.5px; color: #64748B; margin-top: 4px;">
          SWE Intern @ <strong>Algoritmo Lab</strong> • AI Research @ <strong>Bharat Space Res.</strong>
        </div>
      </div>

      <!-- Square 1: KaizenStat -->
      <div class="box-square">
        <div>
          <span class="card-label">01 / OPEN TOOLING</span>
          <div class="card-heading">KaizenStat</div>
          <div class="card-desc">Reproducible ML Pipelines &amp; Statistical Tooling</div>
        </div>
        <div class="card-pill">
          ${icons.arrowUpRight} Apache 2.0
        </div>
      </div>

      <!-- Square 2: Statistical Modeling -->
      <div class="box-math">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="card-label">02 / CORE DISCIPLINE</span>
          ${icons.scatter}
        </div>
        <div>
          <div style="display: flex; align-items: flex-end; justify-content: space-between;">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #0F172A;">Statistical ML</div>
              <div style="font-size: 11px; color: #64748B;">Probabilistic &amp; Neural</div>
            </div>
            ${icons.distribution}
          </div>
          <div class="math-formula">θ* = argmin L(θ) + λΩ(θ)</div>
        </div>
      </div>
    </div>

    <!-- Bottom Bento Row -->
    <div class="bottom-bento-row">
      <div class="box-stack">
        <div class="stack-items">
          <span class="card-label" style="margin-right: 6px;">STACK</span>
          <span class="stack-tag">${icons.python} Python</span>
          <span class="stack-tag">NumPy</span>
          <span class="stack-tag">Scikit-Learn</span>
          <span class="stack-tag">PyTorch</span>
          <span class="stack-tag featured">GSSoC '25</span>
          <span class="stack-tag">HarvardX ML</span>
          <span class="stack-tag">B.Tech IT '27</span>
        </div>
      </div>

      <div class="box-contact">
        <div class="contact-line">
          ${icons.mail} masuddarrahaman31@gmail.com
        </div>
        <div class="contact-line">
          ${icons.github} github.com/masuddar-rahaman
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: "THE DESIGNER's GRID" (Minimal Pure Grid Boxes • Architect Aesthetic)
   Symmetrical square boxes, sharp corners, editorial typography,
   clean light gray hairline lines with corner crosshairs.
   ───────────────────────────────────────────────────────────── */
function getLightDesign2Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FAFAFA;
      color: #111827;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    /* Grid lines container */
    .grid-container {
      position: absolute;
      top: 24px;
      bottom: 24px;
      left: 360px;
      right: 48px;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: 1.4fr 1fr;
      gap: 12px;
    }

    .grid-cell {
      background: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      padding: 16px 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    }

    /* Corner crosshair marks */
    .cross-tl { position: absolute; top: -5px; left: -5px; }
    .cross-tr { position: absolute; top: -5px; right: -5px; }
    .cross-bl { position: absolute; bottom: -5px; left: -5px; }
    .cross-br { position: absolute; bottom: -5px; right: -5px; }

    /* Cell 1: Main Title Cell */
    .cell-title {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .tag-line {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      color: #6B7280;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tag-line .indicator {
      width: 6px;
      height: 6px;
      background: #10B981;
      border-radius: 50%;
    }
    .name-main {
      font-size: 38px;
      font-weight: 800;
      letter-spacing: -1.4px;
      color: #111827;
      line-height: 1;
      margin: 8px 0 4px;
    }
    .role-main {
      font-size: 15px;
      font-weight: 600;
      color: #4B5563;
    }
    .role-main strong {
      color: #111827;
    }

    /* Cell 2: KaizenStat Square */
    .cell-kaizen {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    .square-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #9CA3AF;
      letter-spacing: 1px;
    }
    .kaizen-title {
      font-size: 17px;
      font-weight: 700;
      color: #111827;
      margin-top: 4px;
    }
    .kaizen-sub {
      font-size: 11.5px;
      color: #6B7280;
      line-height: 1.3;
      margin-top: 3px;
    }
    .badge-open {
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      color: #2563EB;
      font-weight: 600;
      margin-top: 6px;
    }

    /* Cell 3: Data Science Gaussian Card */
    .cell-stats {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      background: #F9FAFB;
    }
    .stats-plot {
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .stats-title {
      font-size: 14px;
      font-weight: 700;
      color: #111827;
    }
    .stats-desc {
      font-size: 11px;
      color: #6B7280;
    }

    /* Cell 4: Experience Spec Row (Span 2) */
    .cell-exp {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
    }
    .exp-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .exp-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #9CA3AF;
      text-transform: uppercase;
    }
    .exp-val {
      font-size: 13px;
      font-weight: 600;
      color: #1F2937;
    }

    /* Cell 5: Contact Box */
    .cell-contact {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #4B5563;
    }
    .c-line {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <!-- Box 1: Name & Headline -->
    <div class="grid-cell cell-title">
      <div class="tag-line">
        <span class="indicator"></span>
        <span>PORTFOLIO // DATA SCIENCE &amp; ENGINEERING</span>
      </div>
      <div>
        <h1 class="name-main">MASUDDAR RAHAMAN</h1>
        <div class="role-main">
          Data Scientist &amp; ML Engineer • <strong>Founder @ KaizenStat</strong>
        </div>
      </div>
      <div style="font-size: 12px; color: #6B7280;">
        Specialized in statistical modeling, ML pipeline optimization, and reproducible workflows.
      </div>
    </div>

    <!-- Box 2: KaizenStat -->
    <div class="grid-cell cell-kaizen">
      <div>
        <span class="square-label">[01 / PROJECT]</span>
        <div class="kaizen-title">KaizenStat</div>
        <div class="kaizen-sub">Open-Source Machine Learning Framework</div>
      </div>
      <div class="badge-open">⚡ Apache 2.0 • Python</div>
    </div>

    <!-- Box 3: Data Science -->
    <div class="grid-cell cell-stats">
      <span class="square-label">[02 / DISCIPLINE]</span>
      <div class="stats-plot">
        <div>
          <div class="stats-title">Statistical ML</div>
          <div class="stats-desc">X ~ N(μ, σ²)</div>
        </div>
        ${icons.distribution}
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #4B5563;">
        Model Debugging &amp; Pipeline Quality
      </div>
    </div>

    <!-- Box 4: Experience & Track Record (Spans 2 columns) -->
    <div class="grid-cell cell-exp">
      <div class="exp-item">
        <span class="exp-label">Current Role</span>
        <span class="exp-val">SWE Intern @ Algoritmo Lab</span>
      </div>
      <div style="width: 1px; height: 28px; background: #E5E7EB;"></div>
      <div class="exp-item">
        <span class="exp-label">Research</span>
        <span class="exp-val">AI Intern @ Bharat Space Res.</span>
      </div>
      <div style="width: 1px; height: 28px; background: #E5E7EB;"></div>
      <div class="exp-item">
        <span class="exp-label">Open Source</span>
        <span class="exp-val">GSSoC '25 • ECWoC Rank 65</span>
      </div>
      <div style="width: 1px; height: 28px; background: #E5E7EB;"></div>
      <div class="exp-item">
        <span class="exp-label">Education</span>
        <span class="exp-val">HarvardX ML • B.Tech IT '27</span>
      </div>
    </div>

    <!-- Box 5: Contact Card -->
    <div class="grid-cell cell-contact">
      <div class="c-line">
        ${icons.mail} masuddarrahaman31@gmail.com
      </div>
      <div class="c-line">
        ${icons.github} github.com/masuddar-rahaman
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: "NOTHING MUCH / PURE MINIMAL GRAPH"
   Absolute designer restraint: clean white paper, 3 structured
   square blocks, ultra-crisp typography, zero clutter.
   ───────────────────────────────────────────────────────────── */
function getLightDesign3Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0F172A;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    /* Edge to edge hairline dividers */
    .top-edge-line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: #2563EB;
    }

    .main-wrap {
      width: 100%;
      margin-left: 360px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .left-section {
      flex: 1.1;
    }

    .status-mini {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: #2563EB;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .title-name {
      font-size: 44px;
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1;
      color: #0F172A;
      margin-bottom: 6px;
    }

    .title-sub {
      font-size: 16px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 14px;
    }
    .title-sub strong {
      color: #0F172A;
    }

    .desc-text {
      font-size: 13.5px;
      color: #64748B;
      line-height: 1.4;
      max-width: 500px;
      margin-bottom: 16px;
    }

    .contact-bar-mini {
      display: flex;
      gap: 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      color: #64748B;
    }
    .contact-bar-mini span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Right 4 Square Bento Matrix */
    .matrix-container {
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(2, 130px);
      gap: 12px;
    }

    .matrix-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.2s;
    }
    .matrix-box.accent-box {
      background: #EFF6FF;
      border-color: #BFDBFE;
    }
    .matrix-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      color: #94A3B8;
      letter-spacing: 1px;
    }
    .matrix-num.blue {
      color: #2563EB;
    }
    .matrix-title {
      font-size: 15px;
      font-weight: 700;
      color: #0F172A;
      margin-top: 2px;
    }
    .matrix-desc {
      font-size: 11.5px;
      color: #64748B;
      line-height: 1.3;
    }
    .matrix-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      color: #475569;
    }
  </style>
</head>
<body>
  <div class="top-edge-line"></div>

  <div class="main-wrap">
    <div class="left-section">
      <div class="status-mini">● DATA SCIENCE &amp; STATISTICAL COMPUTING</div>
      <h1 class="title-name">Masuddar Rahaman</h1>
      <div class="title-sub">
        Data Scientist • <strong>Founder @ KaizenStat</strong> • SWE Intern
      </div>
      <p class="desc-text">
        Applied machine learning engineer specializing in statistical modeling, reproducible ML debugging pipelines, and open-source systems.
      </p>

      <div class="contact-bar-mini">
        <span>${icons.mail} masuddarrahaman31@gmail.com</span>
        <span>${icons.github} github.com/masuddar-rahaman</span>
      </div>
    </div>

    <!-- 4 Square Modular Matrix -->
    <div class="matrix-container">
      <div class="matrix-box accent-box">
        <div class="matrix-num blue">01 // OPEN FRAMEWORK</div>
        <div>
          <div class="matrix-title">KaizenStat</div>
          <div class="matrix-desc">Reproducible ML Pipelines</div>
        </div>
        <div class="matrix-tag">Apache 2.0 • Python</div>
      </div>

      <div class="matrix-box">
        <div class="matrix-num">02 // DISCIPLINE</div>
        <div>
          <div class="matrix-title">Statistical ML</div>
          <div class="matrix-desc">Modeling &amp; MLOps</div>
        </div>
        <div class="matrix-tag">NumPy • Scikit • PyTorch</div>
      </div>

      <div class="matrix-box">
        <div class="matrix-num">03 // INDUSTRY</div>
        <div>
          <div class="matrix-title">SWE &amp; AI Research</div>
          <div class="matrix-desc">Algoritmo Lab • BSERC</div>
        </div>
        <div class="matrix-tag">Internship &amp; Space AI</div>
      </div>

      <div class="matrix-box">
        <div class="matrix-num">04 // CREDENTIALS</div>
        <div>
          <div class="matrix-title">GSSoC '25 &amp; HarvardX</div>
          <div class="matrix-desc">Open Source Contributor</div>
        </div>
        <div class="matrix-tag">B.Tech IT '27</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   CREATE REALISTIC LIGHT-THEME LINKEDIN PROFILE MOCKUP HTML
   Shows how the banner looks with light theme LinkedIn interface!
   ───────────────────────────────────────────────────────────── */
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
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
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
      cursor: pointer;
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
    .btn-neutral {
      background: transparent;
      border: 1px solid #64748B;
      color: #475569;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 18px;
      border-radius: 9999px;
    }

    .preview-pill {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(255,255,255,0.9);
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
        Data Scientist &amp; ML Engineer | Founder @ KaizenStat | SWE Intern @ Algoritmo Lab | B.Tech IT’27
      </div>
      <div class="p-location">
        Siliguri, West Bengal, India • <span class="p-contact">Contact info</span>
      </div>

      <div class="btn-row">
        <button class="btn-primary">Open to</button>
        <button class="btn-secondary">Add profile section</button>
        <button class="btn-neutral">Enhance profile</button>
        <button class="btn-neutral">More</button>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function run() {
  console.log("Generating Light Color Minimal Square-Box Banners for Data Scientist...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const lightOptions = [
    {
      id: "light-option-1-swiss-bento",
      title: "Light Option 1: Swiss Bento Data Scientist (Architectural Grid)",
      html: getLightDesign1Html(),
      badge: "RECOMMENDED • BENTO BOXES"
    },
    {
      id: "light-option-2-designer-grid",
      title: "Light Option 2: The Designer's Clean Grid (Square Matrix)",
      html: getLightDesign2Html(),
      badge: "SQUARE BOXES • EDITORIAL"
    },
    {
      id: "light-option-3-pure-minimal",
      title: "Light Option 3: Nothing Much (Pure Minimalist 4-Box Matrix)",
      html: getLightDesign3Html(),
      badge: "NOTHING MUCH • 4 SQUARES"
    }
  ];

  for (const opt of lightOptions) {
    const htmlFile = path.join(OUTPUT_DIR, `${opt.id}.html`);
    fs.writeFileSync(htmlFile, opt.html);

    // 1x Standard Banner (1584 x 396)
    const png1x = path.join(OUTPUT_DIR, `${opt.id}.png`);
    execSync(
      `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1584,396 --screenshot="${png1x}" "file://${htmlFile}"`,
      { stdio: "ignore" }
    );

    // 2x Retina Banner (3168 x 792)
    const png2x = path.join(OUTPUT_DIR, `${opt.id}-2x.png`);
    await sharp(png1x)
      .resize(3168, 792, { kernel: "lanczos3" })
      .png({ quality: 100 })
      .toFile(png2x);

    fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, `${opt.id}.png`));
    fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, `${opt.id}-2x.png`));

    // Render realistic LinkedIn mockup with user avatar
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

    console.log(`✓ Rendered ${opt.title} (1584x396 + 2x Retina + Live Mockup)`);
  }

  console.log("Light banners rendering finished!");
}

run().catch(console.error);
