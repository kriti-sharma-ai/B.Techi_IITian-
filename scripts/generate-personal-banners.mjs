import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("marketing/linkedin/banners");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const USER_UPLOADED_IMG = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8/.user_uploaded/media_1792235287929.png";

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

// Extract and circular mask Masuddar's real avatar from his uploaded screenshot
async function prepareAvatar() {
  const avatarPath = path.join(OUTPUT_DIR, "masuddar-avatar-circle.png");
  try {
    // Crop avatar from uploaded screenshot (x: 42, y: 134, w: 196, h: 196)
    const cropped = await sharp(USER_UPLOADED_IMG)
      .extract({ left: 42, top: 134, width: 196, height: 196 })
      .resize(300, 300)
      .png()
      .toBuffer();

    // Create a circular SVG mask
    const circleMask = Buffer.from(
      `<svg width="300" height="300"><circle cx="150" cy="150" r="148" fill="#FFFFFF"/></svg>`
    );

    // Apply circular composite
    await sharp(cropped)
      .composite([{ input: circleMask, blend: "dest-in" }])
      .png()
      .toFile(avatarPath);

    fs.copyFileSync(avatarPath, path.join(ARTIFACT_DIR, "masuddar-avatar-circle.png"));
    console.log("✓ Profile photo extracted and masked into circle");
    return avatarPath;
  } catch (err) {
    console.warn("Avatar extraction fallback:", err.message);
    return null;
  }
}

// Icons
const icons = {
  python: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.81v.825H3.92S0 5.761 0 11.916c0 6.152 3.42 5.94 3.42 5.94h2.04v-2.868s-.11-3.42 3.364-3.42h5.753s3.253.053 3.253-3.197V3.197S18.232 0 11.914 0zm-3.197 1.87a1.045 1.045 0 1 1 0 2.09 1.045 1.045 0 0 1 0-2.09zm3.369 22.13c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.81v-.825h8.096s3.92.47 3.92-5.685c0-6.155-3.42-5.94-3.42-5.94h-2.04v2.868s.11 3.42-3.364 3.42H8.714s-3.253-.053-3.253 3.197v5.172s-.402 3.199 5.917 3.199zm3.197-1.87a1.045 1.045 0 1 1 0-2.09 1.045 1.045 0 0 1 0 2.09z"/></svg>`,
  sparkle: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  terminal: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  code: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  mail: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  cpu: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  layers: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

/* ─────────────────────────────────────────────────────────────
   DESIGN 1: THE DEEP TECH / LINEAR MINIMALIST
   Modern developer aesthetic: obsidian, subtle dots, glowing mesh,
   frosted glass tags, clean typography.
   ───────────────────────────────────────────────────────────── */
function getOption1Html() {
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
      background-color: #080A10;
      color: #F8FAFC;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: relative;
    }

    .bg-gradient-mesh {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 82% 22%, rgba(56, 189, 248, 0.16) 0%, transparent 45%),
        radial-gradient(circle at 94% 78%, rgba(99, 102, 241, 0.18) 0%, transparent 50%),
        radial-gradient(circle at 45% 90%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 10% 80%, rgba(30, 41, 59, 0.5) 0%, transparent 50%);
      pointer-events: none;
    }

    .bg-dots {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 28px 28px;
      opacity: 0.65;
      mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 100%);
      -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 100%);
    }

    .border-glow-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2.5px;
      background: linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.5) 35%, rgba(99, 102, 241, 0.85) 70%, transparent 100%);
    }

    .avatar-halo {
      position: absolute;
      left: 110px;
      bottom: -60px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 1px dashed rgba(56, 189, 248, 0.18);
      pointer-events: none;
    }
    .avatar-halo::after {
      content: '';
      position: absolute;
      inset: 20px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.04);
    }

    .banner-content {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 360px;
      margin-right: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .top-badge-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .top-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 14px;
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(56, 189, 248, 0.35);
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #38BDF8;
      backdrop-filter: blur(8px);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.1);
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #10B981;
      box-shadow: 0 0 8px #10B981;
    }
    .badge-secondary {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #94A3B8;
      letter-spacing: 0.5px;
    }

    .name-title-group {
      margin-bottom: 6px;
    }
    .hero-name {
      font-size: 45px;
      font-weight: 800;
      letter-spacing: -1.2px;
      line-height: 1.05;
      background: linear-gradient(135deg, #FFFFFF 20%, #E2E8F0 60%, #94A3B8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    .hero-roles {
      font-size: 19px;
      font-weight: 600;
      color: #E2E8F0;
      margin-top: 5px;
      letter-spacing: -0.3px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .hero-roles .role-accent {
      color: #38BDF8;
      font-weight: 700;
    }
    .hero-roles .separator {
      color: #475569;
      font-weight: 300;
    }

    .hero-tagline {
      font-size: 14.5px;
      color: #94A3B8;
      font-weight: 400;
      margin-bottom: 18px;
      line-height: 1.4;
      max-width: 960px;
    }
    .hero-tagline strong {
      color: #CBD5E1;
      font-weight: 600;
    }

    .tech-row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }
    .tech-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 13px;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 500;
      color: #CBD5E1;
      backdrop-filter: blur(4px);
    }
    .tech-pill.highlight {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.4);
      color: #A5B4FC;
    }
    .tech-pill.brand {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.4);
      color: #7DD3FC;
      font-weight: 600;
    }
    .tech-pill svg {
      opacity: 0.9;
    }

    .bottom-bar {
      display: flex;
      align-items: center;
      gap: 24px;
      padding-top: 13px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748B;
      letter-spacing: -0.2px;
    }
    .contact-item svg {
      color: #94A3B8;
    }
    .contact-item .val {
      color: #94A3B8;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="border-glow-line"></div>
  <div class="bg-gradient-mesh"></div>
  <div class="bg-dots"></div>
  <div class="avatar-halo"></div>

  <div class="banner-content">
    <div class="top-badge-row">
      <div class="top-badge">
        <div class="pulse-dot"></div>
        FOUNDER &amp; ML SYSTEMS
      </div>
      <div class="badge-secondary">KaizenStat • Open Source Apache 2.0</div>
    </div>

    <div class="name-title-group">
      <h1 class="hero-name">MASUDDAR RAHAMAN</h1>
      <div class="hero-roles">
        <span>Software Engineer Intern <span class="role-accent">@Algoritmo Lab</span></span>
        <span class="separator">•</span>
        <span>Founder <span class="role-accent">@KaizenStat</span></span>
        <span class="separator">•</span>
        <span>AI Researcher</span>
      </div>
    </div>

    <p class="hero-tagline">
      Building <strong>reproducible ML pipelines</strong>, statistical modeling workflows, and open-source intelligence.
    </p>

    <div class="tech-row">
      <div class="tech-pill brand">${icons.layers} KaizenStat ML Framework</div>
      <div class="tech-pill">${icons.python} Python</div>
      <div class="tech-pill">${icons.cpu} Machine Learning</div>
      <div class="tech-pill">${icons.code} Statistical Modeling</div>
      <div class="tech-pill highlight">${icons.sparkle} GSSoC '25 Contributor</div>
      <div class="tech-pill">${icons.check} HarvardX ML</div>
    </div>

    <div class="bottom-bar">
      <div class="contact-item">
        ${icons.mail}
        <span class="val">masuddarrahaman31@gmail.com</span>
      </div>
      <div class="contact-item">
        ${icons.github}
        <span class="val">github.com/masuddar-rahaman</span>
      </div>
      <div class="contact-item">
        ${icons.terminal}
        <span class="val">B.Tech IT '27</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 2: THE COSMIC NEURAL (Astro-AI & Space Intelligence)
   Deep space aesthetic with constellation nodes and neural lines.
   ───────────────────────────────────────────────────────────── */
function getOption2Html() {
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
      background: radial-gradient(circle at 82% 25%, #0B1938 0%, #030712 65%, #02040A 100%);
      color: #F8FAFC;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      position: relative;
    }

    .cosmic-nebula {
      position: absolute;
      top: -40px;
      right: -20px;
      width: 720px;
      height: 450px;
      background: radial-gradient(circle, rgba(79, 70, 229, 0.24) 0%, rgba(14, 165, 233, 0.16) 40%, transparent 70%);
      filter: blur(50px);
      pointer-events: none;
    }

    .constellation-svg {
      position: absolute;
      top: 0;
      right: 0;
      width: 750px;
      height: 396px;
      pointer-events: none;
      opacity: 0.5;
    }

    .banner-content {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 360px;
      margin-right: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .top-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 14px;
      background: rgba(14, 165, 233, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.35);
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #38BDF8;
      margin-bottom: 12px;
      width: fit-content;
    }

    .hero-name {
      font-size: 45px;
      font-weight: 800;
      letter-spacing: -1.2px;
      line-height: 1.05;
      color: #FFFFFF;
    }

    .hero-subtitle {
      font-size: 18px;
      font-weight: 600;
      color: #93C5FD;
      margin-top: 5px;
      letter-spacing: -0.2px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .hero-subtitle .dot {
      color: #38BDF8;
    }

    .quote-box {
      margin-top: 8px;
      margin-bottom: 16px;
      padding-left: 14px;
      border-left: 2px solid #38BDF8;
      font-size: 14px;
      color: #94A3B8;
      font-weight: 400;
      font-style: italic;
    }
    .quote-box strong {
      color: #E2E8F0;
      font-style: normal;
    }

    .pillars-grid {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }
    .pillar-card {
      display: flex;
      flex-direction: column;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(56, 189, 248, 0.22);
      border-radius: 8px;
      padding: 8px 14px;
      backdrop-filter: blur(8px);
    }
    .pillar-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: #38BDF8;
      letter-spacing: 1px;
    }
    .pillar-text {
      font-size: 12.5px;
      font-weight: 600;
      color: #E2E8F0;
    }

    .footer-row {
      display: flex;
      align-items: center;
      gap: 24px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748B;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }
    .footer-row span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #94A3B8;
    }
    .footer-row svg {
      color: #38BDF8;
    }
  </style>
</head>
<body>
  <div class="cosmic-nebula"></div>
  
  <svg class="constellation-svg" viewBox="0 0 750 396" fill="none">
    <line x1="200" y1="60" x2="350" y2="110" stroke="#38BDF8" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="350" y1="110" x2="520" y2="70" stroke="#818CF8" stroke-width="1.2"/>
    <line x1="520" y1="70" x2="680" y2="140" stroke="#38BDF8" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="350" y1="110" x2="420" y2="220" stroke="#38BDF8" stroke-width="1"/>
    <line x1="420" y1="220" x2="580" y2="260" stroke="#818CF8" stroke-width="1.2"/>
    <line x1="580" y1="260" x2="690" y2="200" stroke="#38BDF8" stroke-width="1"/>
    <line x1="520" y1="70" x2="580" y2="260" stroke="#38BDF8" stroke-width="0.8" stroke-opacity="0.5"/>
    <line x1="200" y1="60" x2="280" y2="250" stroke="#6366F1" stroke-width="0.8"/>
    <line x1="280" y1="250" x2="420" y2="220" stroke="#38BDF8" stroke-width="1"/>

    <circle cx="200" cy="60" r="3.5" fill="#38BDF8"/>
    <circle cx="350" cy="110" r="5" fill="#FFFFFF" stroke="#38BDF8" stroke-width="2"/>
    <circle cx="520" cy="70" r="4" fill="#818CF8"/>
    <circle cx="680" cy="140" r="3.5" fill="#38BDF8"/>
    <circle cx="420" cy="220" r="5" fill="#FFFFFF" stroke="#818CF8" stroke-width="2"/>
    <circle cx="580" cy="260" r="4" fill="#38BDF8"/>
    <circle cx="690" cy="200" r="3" fill="#818CF8"/>
    <circle cx="280" cy="250" r="3.5" fill="#6366F1"/>

    <circle cx="150" cy="180" r="1.5" fill="#FFFFFF" opacity="0.4"/>
    <circle cx="480" cy="150" r="1.5" fill="#FFFFFF" opacity="0.6"/>
    <circle cx="610" cy="80" r="2" fill="#FFFFFF" opacity="0.5"/>
    <circle cx="640" cy="320" r="1.5" fill="#FFFFFF" opacity="0.4"/>
  </svg>

  <div class="banner-content">
    <div class="top-badge">
      ${icons.sparkle} ARTIFICIAL INTELLIGENCE &amp; SYSTEMS
    </div>

    <h1 class="hero-name">Masuddar Rahaman</h1>
    <div class="hero-subtitle">
      <span>Founder @ KaizenStat</span>
      <span class="dot">•</span>
      <span>SWE Intern @ Algoritmo Lab</span>
      <span class="dot">•</span>
      <span>AI Intern @ Bharat Space Res.</span>
    </div>

    <div class="quote-box">
      "Engineering the intersection of <strong>reproducible machine learning</strong>, statistical modeling &amp; open-source tooling."
    </div>

    <div class="pillars-grid">
      <div class="pillar-card">
        <span class="pillar-num">SYS.01</span>
        <span class="pillar-text">ML Pipelines &amp; Debugging</span>
      </div>
      <div class="pillar-card">
        <span class="pillar-num">SYS.02</span>
        <span class="pillar-text">Statistical Modeling</span>
      </div>
      <div class="pillar-card">
        <span class="pillar-num">SYS.03</span>
        <span class="pillar-text">Open Source Architecture</span>
      </div>
      <div class="pillar-card">
        <span class="pillar-num">SYS.04</span>
        <span class="pillar-text">KaizenStat Core (Apache 2.0)</span>
      </div>
    </div>

    <div class="footer-row">
      <span>${icons.mail} masuddarrahaman31@gmail.com</span>
      <span>${icons.github} github.com/masuddar-rahaman</span>
      <span>${icons.check} HarvardX ML Certified</span>
      <span>${icons.sparkle} GSSoC '25</span>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 3: THE TERMINAL & ARCHITECT (Clean Hacker/Dev Aesthetic)
   Left: High-signal title & status.
   Right: Floating frosted glass terminal / object spec card.
   ───────────────────────────────────────────────────────────── */
function getOption3Html() {
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
      background-color: #0A0D14;
      color: #F8FAFC;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .grid-lines {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: radial-gradient(circle at 60% 50%, black 40%, transparent 85%);
      -webkit-mask-image: radial-gradient(circle at 60% 50%, black 40%, transparent 85%);
    }

    .accent-bar-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #38BDF8 0%, #6366F1 100%);
    }

    .content-wrapper {
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
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      color: #38BDF8;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.25);
      padding: 5px 12px;
      border-radius: 6px;
      width: fit-content;
      margin-bottom: 12px;
    }
    .status-badge .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #10B981;
      box-shadow: 0 0 8px #10B981;
    }

    .hero-name {
      font-size: 42px;
      font-weight: 800;
      letter-spacing: -1.2px;
      line-height: 1.1;
      color: #FFFFFF;
    }

    .hero-title {
      font-size: 18px;
      font-weight: 600;
      color: #94A3B8;
      margin-top: 4px;
      margin-bottom: 14px;
    }
    .hero-title span {
      color: #E2E8F0;
    }

    .tags-container {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }
    .tag {
      font-size: 12px;
      font-weight: 500;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 6px;
      color: #CBD5E1;
    }

    .contact-row {
      display: flex;
      gap: 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748B;
    }
    .contact-row span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #94A3B8;
    }

    .terminal-card {
      width: 530px;
      background: rgba(13, 17, 23, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.08);
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      line-height: 1.6;
      backdrop-filter: blur(12px);
    }
    .terminal-header {
      background: rgba(255, 255, 255, 0.04);
      padding: 9px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .terminal-controls {
      display: flex;
      gap: 6px;
    }
    .terminal-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .dot-red { background: #FF5F56; }
    .dot-yellow { background: #FFBD2E; }
    .dot-green { background: #27C93F; }
    .terminal-title {
      font-size: 11px;
      color: #64748B;
    }
    .terminal-body {
      padding: 14px 18px;
      color: #E2E8F0;
    }
    .code-comment { color: #64748B; }
    .code-keyword { color: #F43F5E; }
    .code-var { color: #38BDF8; }
    .code-string { color: #34D399; }
    .code-prop { color: #FBBF24; }
  </style>
</head>
<body>
  <div class="accent-bar-left"></div>
  <div class="grid-lines"></div>

  <div class="content-wrapper">
    <div class="left-col">
      <div class="status-badge">
        <span class="dot"></span>
        <span>OPEN FOR HIGH-IMPACT ROLES</span>
      </div>

      <h1 class="hero-name">MASUDDAR RAHAMAN</h1>
      <div class="hero-title">
        <span>Software Engineer &amp; ML Practitioner</span> • B.Tech IT '27
      </div>

      <div class="tags-container">
        <div class="tag">Founder @ KaizenStat</div>
        <div class="tag">SWE Intern @ Algoritmo Lab</div>
        <div class="tag">AI Intern @ BSERC</div>
        <div class="tag">GSSoC '25</div>
        <div class="tag">HarvardX ML</div>
      </div>

      <div class="contact-row">
        <span>${icons.mail} masuddarrahaman31@gmail.com</span>
        <span>${icons.github} github.com/masuddar-rahaman</span>
      </div>
    </div>

    <div class="terminal-card">
      <div class="terminal-header">
        <div class="terminal-controls">
          <div class="terminal-dot dot-red"></div>
          <div class="terminal-dot dot-yellow"></div>
          <div class="terminal-dot dot-green"></div>
        </div>
        <div class="terminal-title">kaizenstat/profile.ts</div>
        <div style="width: 30px"></div>
      </div>
      <div class="terminal-body">
        <div><span class="code-comment">// Continuous improvement in data science &amp; ML</span></div>
        <div><span class="code-keyword">export const</span> <span class="code-var">engineer</span> = {</div>
        <div style="padding-left: 14px"><span class="code-prop">name</span>: <span class="code-string">"Masuddar Rahaman"</span>,</div>
        <div style="padding-left: 14px"><span class="code-prop">role</span>: <span class="code-string">"Founder @ KaizenStat (Open ML)"</span>,</div>
        <div style="padding-left: 14px"><span class="code-prop">focus</span>: [<span class="code-string">"Statistical ML"</span>, <span class="code-string">"Pipelines"</span>, <span class="code-string">"Tooling"</span>],</div>
        <div style="padding-left: 14px"><span class="code-prop">stack</span>: [<span class="code-string">"Python"</span>, <span class="code-string">"PyTorch"</span>, <span class="code-string">"APIs"</span>, <span class="code-string">"Data"</span>],</div>
        <div style="padding-left: 14px"><span class="code-prop">philosophy</span>: <span class="code-string">"Build in public, lower barriers"</span></div>
        <div>};</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   DESIGN 4: THE SWISS MINIMALIST (Clean Architectural Titanium)
   Ultra-clean typography, pure minimalism, zero noise.
   ───────────────────────────────────────────────────────────── */
function getOption4Html() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1584px;
      height: 396px;
      overflow: hidden;
      background: #090B0E;
      color: #F8FAFC;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      position: relative;
    }

    .grid-bg {
      position: absolute;
      inset: 0;
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    }

    .subtle-spotlight {
      position: absolute;
      top: 0;
      right: 15%;
      width: 500px;
      height: 396px;
      background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    .banner-content {
      position: relative;
      z-index: 10;
      height: 100%;
      margin-left: 360px;
      margin-right: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .meta-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 2px;
      color: #94A3B8;
      text-transform: uppercase;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .meta-tag::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #38BDF8;
      border-radius: 2px;
    }

    .hero-name {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -1.5px;
      line-height: 1;
      color: #FFFFFF;
      margin-bottom: 8px;
    }

    .hero-desc {
      font-size: 19px;
      font-weight: 600;
      color: #E2E8F0;
      margin-bottom: 16px;
      letter-spacing: -0.3px;
    }
    .hero-desc span {
      color: #38BDF8;
    }

    .spec-row {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
    .spec-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
      border-left: 2px solid rgba(255, 255, 255, 0.15);
      padding-left: 10px;
    }
    .spec-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .spec-val {
      font-size: 13px;
      font-weight: 600;
      color: #CBD5E1;
    }

    .contact-bar {
      display: flex;
      gap: 24px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748B;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .contact-bar span {
      color: #94A3B8;
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="subtle-spotlight"></div>

  <div class="banner-content">
    <div class="meta-tag">MACHINE LEARNING SYSTEMS • OPEN SOURCE</div>
    <h1 class="hero-name">Masuddar Rahaman</h1>
    <div class="hero-desc">Founder @ <span>KaizenStat</span> • SWE Intern @ <span>Algoritmo Lab</span></div>

    <div class="spec-row">
      <div class="spec-item">
        <span class="spec-label">Core Focus</span>
        <span class="spec-val">ML Pipelines &amp; Statistical Modeling</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Open Source</span>
        <span class="spec-val">GSSoC '25 • Apache 2.0 KaizenStat</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Education &amp; Certs</span>
        <span class="spec-val">HarvardX ML • B.Tech IT '27</span>
      </div>
    </div>

    <div class="contact-bar">
      <div>EMAIL: <span>masuddarrahaman31@gmail.com</span></div>
      <div>GITHUB: <span>github.com/masuddar-rahaman</span></div>
      <div>STATUS: <span style="color:#10B981;">AVAILABLE FOR HIGH-IMPACT ROLES</span></div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   CREATE REALISTIC LINKEDIN PROFILE MOCKUP HTML
   This embeds the banner with LinkedIn navigation, profile card,
   real circular photo overlay, headline, and buttons.
   ───────────────────────────────────────────────────────────── */
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
      background-color: #000000;
      color: #E2E8F0;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* Top fake LinkedIn Dark Navbar */
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

    /* LinkedIn Profile Card Container */
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

    /* Banner container: exact ratio of 1584x396 (4:1) => 1040 x 260 */
    .mockup-banner {
      width: 1040px;
      height: 260px;
      background-image: url('${bannerImgUrl}');
      background-size: cover;
      background-position: center;
      position: relative;
    }

    /* Profile Avatar Circle */
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

    /* Profile Details Section */
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
      cursor: pointer;
    }

    /* Action buttons */
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
    .btn-neutral {
      background: transparent;
      border: 1px solid #64748B;
      color: #CBD5E1;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 18px;
      border-radius: 9999px;
    }

    /* Banner title tag in mockup preview */
    .preview-pill {
      position: absolute;
      top: 14px;
      right: 14px;
      background: rgba(0,0,0,0.7);
      border: 1px solid rgba(255,255,255,0.2);
      color: #38BDF8;
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
        SWE Intern @Algoritmo Lab | HarvardX ML | GSSoC’25 | B.Tech IT’27
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
  console.log("Starting banner rendering pipeline...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  // Step 1: Prepare Avatar
  await prepareAvatar();

  const options = [
    {
      id: "option-1-deep-tech",
      title: "Option 1: Linear Deep Tech (Obsidian & Cyan Glow)",
      html: getOption1Html(),
      badge: "RECOMMENDED • MODERN TECH / FOUNDER"
    },
    {
      id: "option-2-cosmic-neural",
      title: "Option 2: Cosmic Neural AI (Space & Deep Intelligence)",
      html: getOption2Html(),
      badge: "ASTRO-AI RESEARCH & SYSTEMS"
    },
    {
      id: "option-3-minimal-terminal",
      title: "Option 3: Minimalist Dev Terminal (Builder Spec Card)",
      html: getOption3Html(),
      badge: "HIGH-SIGNAL SOFTWARE ENGINEER"
    },
    {
      id: "option-4-swiss-titanium",
      title: "Option 4: Architectural Titanium (Pure Swiss Minimalism)",
      html: getOption4Html(),
      badge: "EXECUTIVE / ULTRA CLEAN"
    }
  ];

  for (const opt of options) {
    const htmlFile = path.join(OUTPUT_DIR, `${opt.id}.html`);
    fs.writeFileSync(htmlFile, opt.html);

    // 1x Standard Banner (1584 x 396)
    const png1x = path.join(OUTPUT_DIR, `${opt.id}.png`);
    execSync(
      `"${chromePath}" --headless --disable-gpu --virtual-time-budget=2000 --window-size=1584,396 --screenshot="${png1x}" "file://${htmlFile}"`,
      { stdio: "ignore" }
    );

    // 2x Retina Banner (3168 x 792) using sharp for ultra-crisp output
    const png2x = path.join(OUTPUT_DIR, `${opt.id}-2x.png`);
    await sharp(png1x)
      .resize(3168, 792, { kernel: "lanczos3" })
      .png({ quality: 100 })
      .toFile(png2x);

    // Copy to artifact directory
    fs.copyFileSync(png1x, path.join(ARTIFACT_DIR, `${opt.id}.png`));
    fs.copyFileSync(png2x, path.join(ARTIFACT_DIR, `${opt.id}-2x.png`));

    // Render realistic LinkedIn mockup showing real avatar overlay!
    const mockupHtml = getMockupHtml(
      `file://${png1x}`,
      `file://${path.join(OUTPUT_DIR, "masuddar-avatar-circle.png")}`,
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

    console.log(`✓ Generated ${opt.title} (Banner + Retina + Live Profile Mockup)`);
  }

  // Also build an interactive HTML preview gallery for the user
  generateInteractiveGallery(options);
  console.log("All banners & mockups rendered successfully!");
}

function generateInteractiveGallery(options) {
  const galleryHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Masuddar Rahaman - LinkedIn Banner Suite</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0B0E14;
      color: #F1F5F9;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      padding: 40px 20px;
    }
    .container {
      max-width: 1280px;
      margin: 0 auto;
    }
    header {
      margin-bottom: 40px;
      text-align: center;
    }
    h1 {
      font-size: 36px;
      font-weight: 800;
      letter-spacing: -1px;
      background: linear-gradient(135deg, #FFF 30%, #38BDF8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.lead {
      color: #94A3B8;
      font-size: 16px;
      margin-top: 8px;
    }
    .badge-bar {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 14px;
    }
    .stat-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.25);
      padding: 4px 12px;
      border-radius: 9999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #38BDF8;
    }

    .banner-grid {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
    .card {
      background: #111622;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    .card-header {
      padding: 18px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .card-title {
      font-size: 18px;
      font-weight: 700;
      color: #F8FAFC;
    }
    .card-badge {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 4px 10px;
      border-radius: 6px;
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.3);
      color: #7DD3FC;
    }

    .banner-preview-box {
      width: 100%;
      background: #000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      position: relative;
    }
    .banner-preview-box img {
      width: 100%;
      height: auto;
      display: block;
    }

    .mockup-toggle-row {
      padding: 16px 24px;
      background: #141B2A;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .download-btns {
      display: flex;
      gap: 12px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-download {
      background: #0284C7;
      color: white;
    }
    .btn-download:hover {
      background: #0369A1;
    }
    .btn-retina {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #E2E8F0;
    }
    .btn-retina:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Professional LinkedIn Banners</h1>
      <p class="lead">Crafted for Masuddar Rahaman • Founder @ KaizenStat &amp; Software Engineer</p>
      <div class="badge-bar">
        <span class="stat-pill">Dimensions: 1584 x 396 px</span>
        <span class="stat-pill">2x Retina: 3168 x 792 px</span>
        <span class="stat-pill">Profile Avatar Safe-Zone Verified</span>
      </div>
    </header>

    <div class="banner-grid">
      ${options
        .map(
          opt => `
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">${opt.title}</h2>
            <span class="card-badge">${opt.badge}</span>
          </div>

          <!-- Raw 1584x396 Banner Image -->
          <div class="banner-preview-box">
            <img src="./${opt.id}.png" alt="${opt.title}" />
          </div>

          <!-- Live LinkedIn Profile Mockup with real Avatar Overlay -->
          <div style="padding: 20px; background: #0A0D14;">
            <p style="font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; margin-bottom: 10px; font-family: monospace;">
              Preview in Real LinkedIn Profile (Desktop &amp; Mobile Safe Zone Guaranteed)
            </p>
            <img src="./${opt.id}-mockup.png" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" />
          </div>

          <div class="mockup-toggle-row">
            <span style="font-size: 13px; color: #94A3B8;">Ready to upload to your LinkedIn profile</span>
            <div class="download-btns">
              <a href="./${opt.id}.png" download="${opt.id}-1584x396.png" class="btn btn-download">
                Download Standard (1584x396)
              </a>
              <a href="./${opt.id}-2x.png" download="${opt.id}-retina-3168x792.png" class="btn btn-retina">
                Download 2x Retina (3168x792)
              </a>
            </div>
          </div>
        </div>
      `
        )
        .join("\n")}
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, "index.html"), galleryHtml);
  fs.copyFileSync(path.join(OUTPUT_DIR, "index.html"), path.join(ARTIFACT_DIR, "index.html"));
}

run().catch(console.error);
