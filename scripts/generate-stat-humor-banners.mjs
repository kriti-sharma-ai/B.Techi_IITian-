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
   OPTION 1: "P(clean_data) = 0"
   - Massive "DATA SCIENTIST"
   - Equation: y = f(X) + ε  where P(clean_data) = 0
   - Email at bottom: masuddarrahaman31@gmail.com
   ───────────────────────────────────────────────────────────── */
function getStatHumor1Html() {
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

    /* Very subtle architectural hairline grid */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, #F8FAFC 1px, transparent 1px),
        linear-gradient(to bottom, #F8FAFC 1px, transparent 1px);
    }

    .banner-wrap {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 55px 0 45px;
    }

    .main-block {
      display: flex;
      flex-direction: column;
    }

    .main-title {
      font-size: 76px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.95;
      color: #0F172A;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    /* The Statistical Humor Equation */
    .equation-box {
      display: flex;
      align-items: baseline;
      gap: 16px;
      font-family: 'JetBrains Mono', monospace;
    }
    .math-formula {
      font-size: 20px;
      font-weight: 600;
      color: #0F172A;
      letter-spacing: -0.5px;
    }
    .math-condition {
      font-size: 14px;
      color: #64748B;
      font-weight: 500;
    }
    .math-condition strong {
      color: #2563EB;
      font-weight: 600;
    }

    /* Bottom Mail line */
    .bottom-row {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
      letter-spacing: 0.5px;
    }
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10B981;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>

  <div class="banner-wrap">
    <div class="main-block">
      <h1 class="main-title">DATA SCIENTIST</h1>
      
      <div class="equation-box">
        <span class="math-formula">y = f(X) + ε</span>
        <span class="math-condition">where ε ~ 𝒩(0, σ²) &amp; <strong>P(clean_data) = 0</strong></span>
      </div>
    </div>

    <div class="bottom-row">
      <span class="dot"></span>
      <span>masuddarrahaman31@gmail.com</span>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 2: "R² = 0.99 (Definitely Overfitted)"
   - Massive "DATA SCIENTIST"
   - Equation: R² = 0.999 // statistically significant, practically suspicious
   - Email at bottom: masuddarrahaman31@gmail.com
   ───────────────────────────────────────────────────────────── */
function getStatHumor2Html() {
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
      color: #111827;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      display: flex;
      align-items: center;
    }

    .banner-wrap {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 55px 0 45px;
    }

    .main-block {
      display: flex;
      flex-direction: column;
    }

    .main-title {
      font-size: 76px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.95;
      color: #111827;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .equation-box {
      display: flex;
      align-items: baseline;
      gap: 16px;
      font-family: 'JetBrains Mono', monospace;
    }
    .math-formula {
      font-size: 20px;
      font-weight: 700;
      color: #111827;
    }
    .math-condition {
      font-size: 14px;
      color: #6B7280;
    }
    .math-condition strong {
      color: #EF4444;
      font-weight: 600;
    }

    .bottom-row {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #6B7280;
    }
    .square-indicator {
      width: 6px;
      height: 6px;
      background: #111827;
    }
  </style>
</head>
<body>
  <div class="banner-wrap">
    <div class="main-block">
      <h1 class="main-title">DATA SCIENTIST</h1>
      
      <div class="equation-box">
        <span class="math-formula">R² = 0.999</span>
        <span class="math-condition">// statistically significant, <strong>practically suspicious</strong></span>
      </div>
    </div>

    <div class="bottom-row">
      <span class="square-indicator"></span>
      <span>masuddarrahaman31@gmail.com</span>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   OPTION 3: "P(Works in Prod | Localhost) → ε"
   - Massive "DATA SCIENTIST"
   - Equation: lim (deployment) P(works) = ε  where ε → 0
   - Email at bottom: masuddarrahaman31@gmail.com
   ───────────────────────────────────────────────────────────── */
function getStatHumor3Html() {
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

    .banner-wrap {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      margin-left: 360px;
      margin-right: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 55px 0 45px;
    }

    .main-title {
      font-size: 78px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.95;
      color: #0F172A;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .equation-box {
      display: flex;
      align-items: baseline;
      gap: 16px;
      font-family: 'JetBrains Mono', monospace;
    }
    .math-formula {
      font-size: 19px;
      font-weight: 600;
      color: #0F172A;
    }
    .math-condition {
      font-size: 14px;
      color: #64748B;
    }
    .math-condition strong {
      color: #2563EB;
      font-weight: 600;
    }

    .bottom-row {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      color: #64748B;
    }
    .accent-bar {
      width: 12px;
      height: 2px;
      background: #2563EB;
    }
  </style>
</head>
<body>
  <div class="banner-wrap">
    <div>
      <h1 class="main-title">DATA SCIENTIST</h1>
      
      <div class="equation-box">
        <span class="math-formula">P(Works in Production | Localhost) = ε</span>
        <span class="math-condition">as <strong>ε → 0</strong></span>
      </div>
    </div>

    <div class="bottom-row">
      <span class="accent-bar"></span>
      <span>masuddarrahaman31@gmail.com</span>
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
  console.log("Generating Clean Stat Humor Minimal Banners...");
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const options = [
    {
      id: "stat-humor-1-clean-data",
      title: "Clean Data Axiom: y = f(X) + ε (P(clean_data) = 0)",
      html: getStatHumor1Html(),
      badge: "RECOMMENDED • P(clean_data) = 0"
    },
    {
      id: "stat-humor-2-overfitted",
      title: "Overfitting Joke: R² = 0.999 (Practically Suspicious)",
      html: getStatHumor2Html(),
      badge: "R² = 0.999 • SUSPICIOUS"
    },
    {
      id: "stat-humor-3-prod-limit",
      title: "Production Joke: P(Works in Prod | Localhost) → ε",
      html: getStatHumor3Html(),
      badge: "PROD vs LOCALHOST"
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

  console.log("Stat humor banner rendering complete!");
}

run().catch(console.error);
