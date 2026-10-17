import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = path.resolve("marketing/youtube/kriti");
const HTML_DIR = path.resolve("scripts/youtube-banners/kriti/html");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";
const AVATAR_PATH = path.resolve("marketing/linkedin/banners/kriti/photos/kriti-avatar-circle.png");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

/* ─────────────────────────────────────────────────────────────
   1. FULL 2560 x 1440 YOUTUBE BANNER
   - Safe area (Mobile & Desktop): 1546 x 423 px centered at:
     x: 507 to 2053 px
     y: 508.5 to 931.5 px
   - Desktop visible band: 2560 x 423 px (y: 508.5 to 931.5)
   - Yellow bar runs edge-to-edge across the top of the visible band (y: 508.5)
   ───────────────────────────────────────────────────────────── */
function getKritiYtBannerHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    /* Full YouTube Canvas: 2560 x 1440 */
    body {
      width: 2560px;
      height: 1440px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0B0B0B;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    /* Math Square Grid across entire 2560x1440 canvas */
    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 28px 28px;
      background-image: 
        linear-gradient(to right, #E2E8F0 1px, transparent 1px),
        linear-gradient(to bottom, #E2E8F0 1px, transparent 1px);
    }

    /* Top Yellow Bar across the top of the Desktop/Mobile visible band (y: 508.5px) */
    .yellow-top-bar {
      position: absolute;
      top: 508.5px;
      left: 0;
      right: 0;
      height: 12px;
      background: #FFD21C;
      z-index: 25;
    }

    /* TV Top & Bottom framing (for TV viewers) */
    .tv-top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 14px;
      background: #FFD21C;
      z-index: 20;
    }
    .tv-bottom-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 14px;
      background: #0B0B0B;
      z-index: 20;
    }

    /* Safe Area Container: exactly 1546 x 423 px centered */
    .safe-area-container {
      position: absolute;
      top: 508.5px;
      left: 507px;
      width: 1546px;
      height: 423px;
      z-index: 30;
      position: relative;
    }

    /* Top-Left: Pure Word "Statistical" (No box, no yellow bar, no extra words) */
    .top-left-stat-pure {
      position: absolute;
      top: 42px;
      left: 50px;
      font-size: 38px;
      font-weight: 900;
      color: #0B0B0B;
      letter-spacing: -1.2px;
      line-height: 1;
      z-index: 35;
    }

    /* Main Container */
    .main-wrap {
      position: absolute;
      inset: 0;
      padding: 30px 40px 30px 320px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 30;
    }

    /* Big Headline Column */
    .text-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 630px;
    }

    .big-title {
      font-size: 74px;
      font-weight: 900;
      letter-spacing: -3.5px;
      line-height: 0.94;
      color: #0B0B0B;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
    }
    .line-1 { white-space: nowrap; }
    .line-2 { white-space: nowrap; margin-top: 4px; }

    .mail-row {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: #64748B;
      font-weight: 600;
    }
    .mail-row strong { color: #0B0B0B; }
    .dot-yellow {
      width: 8px;
      height: 8px;
      background: #FFD21C;
      border-radius: 50%;
    }

    /* Venn Diagram Container */
    .venn-container {
      width: 500px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="tv-top-bar"></div>
  <div class="tv-bottom-bar"></div>
  <div class="bg-math-grid"></div>

  <!-- Edge-to-Edge Yellow Bar across Desktop/Mobile Visible Area -->
  <div class="yellow-top-bar"></div>

  <!-- YouTube Safe Area (1546 x 423 px) -->
  <div class="safe-area-container">
    <!-- Top-Left: Pure word "Statistical" -->
    <div class="top-left-stat-pure">Statistical</div>

    <div class="main-wrap">
      <!-- Big Headline -->
      <div class="text-column">
        <h1 class="big-title">
          <span class="line-1">DATA MINDED</span>
          <span class="line-2">&amp; MANAGEMENT.</span>
        </h1>
        <div class="mail-row">
          <span class="dot-yellow"></span>
          <span><strong>kritisharma1481550@gmail.com</strong></span>
        </div>
      </div>

      <!-- Venn Diagram Column: Exactly matching the approved LinkedIn design -->
      <div class="venn-container">
        <svg width="500" height="300" viewBox="0 0 500 300" fill="none">
          <defs>
            <clipPath id="finalClip">
              <circle cx="160" cy="136" r="115"/>
            </clipPath>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 2 L 8 5 L 0 8 L 2 5 Z" fill="#0B0B0B"/>
            </marker>
          </defs>

          <!-- Circle 1: Left -->
          <circle cx="160" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
          
          <!-- Circle 2: Right -->
          <circle cx="330" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.9"/>

          <!-- Middle Yellow Intersection -->
          <circle cx="330" cy="136" r="115" fill="#FFD21C" clip-path="url(#finalClip)"/>
          
          <!-- Re-stroke circle boundaries -->
          <circle cx="160" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>
          <circle cx="330" cy="136" r="115" stroke="#0B0B0B" stroke-width="2.5" fill="none"/>

          <!-- Left Circle Label: DATA (Big, Bold, Centered) -->
          <text x="115" y="136" dominant-baseline="central" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.5">DATA</text>

          <!-- Right Circle Label: MANAGEMENT (Big, Bold, 100% visible with ample margin) -->
          <text x="360" y="136" dominant-baseline="central" font-family="'Plus Jakarta Sans', sans-serif" font-size="18.5" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="-0.3">MANAGEMENT</text>

          <!-- Refined Graceful Curved Callout Arrow pointing into the intersection -->
          <path d="M 260 250 Q 278 190 247 136" stroke="#0B0B0B" stroke-width="2.2" stroke-linecap="round" fill="none" marker-end="url(#arrowhead)"/>

          <!-- External "IMPACT" Label (Prominent 30px Font) -->
          <text x="245" y="272" dominant-baseline="central" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="900" fill="#0B0B0B" text-anchor="middle" letter-spacing="2">IMPACT</text>
        </svg>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   2. YOUTUBE CHANNEL PAGE MOCKUP (1280 x 720)
   Realistic desktop channel page showing the banner in context
   ───────────────────────────────────────────────────────────── */
function getYouTubeMockupHtml(bannerImgUrl, avatarImgUrl) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1280px;
      height: 720px;
      background: #0F0F0F;
      color: #FFFFFF;
      font-family: 'Roboto', -apple-system, sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* YouTube Top Navbar */
    .yt-navbar {
      height: 56px;
      background: #0F0F0F;
      border-bottom: 1px solid #272727;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
    }
    .yt-nav-left { display: flex; align-items: center; gap: 20px; }
    .yt-logo-wrap { display: flex; align-items: center; gap: 4px; font-weight: 700; font-size: 18px; letter-spacing: -0.5px; }
    .yt-play-icon { width: 28px; height: 20px; background: #FF0000; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
    .yt-play-triangle { width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 8px solid white; margin-left: 2px; }

    .yt-search-box {
      width: 440px; height: 38px; background: #121212;
      border: 1px solid #303030; border-radius: 20px 0 0 20px;
      padding: 0 16px; color: #AAAAAA; font-size: 14px;
    }
    .yt-search-btn {
      width: 58px; height: 38px; background: #222222;
      border: 1px solid #303030; border-left: none; border-radius: 0 20px 20px 0;
      display: flex; align-items: center; justify-content: center; color: #888;
    }

    /* Channel Container */
    .channel-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    /* Desktop Banner View (Aspect ratio: 2560 x 423 desktop strip) */
    .banner-wrapper {
      width: 100%;
      height: 211.5px; /* exactly scaled from 2560x423 to 1280 width (1280 * 423 / 2560 = 211.5px) */
      position: relative;
      background-image: url('${bannerImgUrl}');
      background-size: 100% auto;
      background-position: center center;
      border-bottom: 1px solid #272727;
    }

    /* Channel Header */
    .channel-header {
      padding: 24px 64px 16px;
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .channel-avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #272727;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      flex-shrink: 0;
      background: #FFFFFF;
    }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; }

    .channel-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .channel-title-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .c-name { font-size: 28px; font-weight: 700; color: #FFFFFF; }

    .c-meta { font-size: 13.5px; color: #AAAAAA; display: flex; align-items: center; gap: 8px; }
    .c-desc { font-size: 13.5px; color: #AAAAAA; margin-top: 4px; }
    .c-link { color: #3EA6FF; text-decoration: none; font-weight: 500; }

    .sub-btn-row {
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .sub-btn {
      background: #FFFFFF;
      color: #0F0F0F;
      font-weight: 600;
      font-size: 14px;
      padding: 8px 18px;
      border-radius: 18px;
      border: none;
      cursor: pointer;
    }

    /* Channel Tabs */
    .channel-tabs {
      padding: 0 64px;
      display: flex;
      gap: 32px;
      border-bottom: 1px solid #272727;
      font-size: 14px;
      font-weight: 600;
      color: #AAAAAA;
    }
    .tab-item { padding: 12px 0; cursor: pointer; }
    .tab-active { color: #FFFFFF; border-bottom: 2px solid #FFFFFF; }
  </style>
</head>
<body>
  <!-- YouTube Navbar -->
  <div class="yt-navbar">
    <div class="yt-nav-left">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      <div class="yt-logo-wrap">
        <div class="yt-play-icon"><div class="yt-play-triangle"></div></div>
        <span>YouTube</span>
      </div>
    </div>
    <div style="display:flex;">
      <input type="text" class="yt-search-box" value="Kriti Sharma" readonly>
      <div class="yt-search-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
    </div>
    <div style="display:flex; align-items:center; gap:16px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <div style="width:32px; height:32px; border-radius:50%; overflow:hidden;">
        <img src="${avatarImgUrl}" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </div>

  <div class="channel-container">
    <!-- YouTube Banner -->
    <div class="banner-wrapper"></div>

    <!-- YouTube Channel Header -->
    <div class="channel-header">
      <div class="channel-avatar">
        <img src="${avatarImgUrl}" class="avatar-img" alt="Kriti Sharma">
      </div>
      <div class="channel-info">
        <div class="channel-title-row">
          <h1 class="c-name">Kriti Sharma</h1>
        </div>
        <div class="c-meta">
          <span>@kritisharma</span>
          <span>•</span>
          <span>Data Science &amp; Management</span>
        </div>
        <p class="c-desc">Future-focused. Data-driven. Management mindset. <span class="c-link">kritisharma1481550@gmail.com</span></p>
        <div class="sub-btn-row">
          <button class="sub-btn">Subscribe</button>
        </div>
      </div>
    </div>

    <!-- Channel Tabs -->
    <div class="channel-tabs">
      <div class="tab-item tab-active">Home</div>
      <div class="tab-item">Videos</div>
      <div class="tab-item">Playlists</div>
      <div class="tab-item">Community</div>
      <div class="tab-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
    </div>
  </div>
</body>
</html>`;
}

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const bannerHtmlPath = path.join(HTML_DIR, "kriti-yt-banner.html");
const banner2560Png = path.join(OUTPUT_DIR, "kriti-sharma-youtube-banner-2560x1440.png");
const banner2048Png = path.join(OUTPUT_DIR, "kriti-sharma-youtube-banner-2048x1152.png");
const mockupHtmlPath = path.join(HTML_DIR, "kriti-yt-mockup.html");
const mockupPng = path.join(OUTPUT_DIR, "kriti-sharma-youtube-channel-mockup.png");

// 1. Write HTML
fs.writeFileSync(bannerHtmlPath, getKritiYtBannerHtml());

console.log("Rendering 1. Recommended YouTube Banner (2560x1440)...");
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=2560,1440 --screenshot="${banner2560Png}" --default-background-color=00000000 "file://${bannerHtmlPath}"`,
  { stdio: "ignore" }
);

console.log("Rendering 2. YouTube Minimum Upload Banner (2048x1152)...");
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=2560,1440 --screenshot="${banner2048Png}" --default-background-color=00000000 "file://${bannerHtmlPath}"`,
  { stdio: "ignore" }
);
// Resize to exact 2048x1152 using sips (native macOS tool)
execSync(`sips -z 1152 2048 "${banner2048Png}"`, { stdio: "ignore" });

console.log("Rendering 3. YouTube Channel Page Mockup...");
fs.writeFileSync(mockupHtmlPath, getYouTubeMockupHtml(`file://${banner2560Png}`, `file://${AVATAR_PATH}`));
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=1280,720 --force-device-scale-factor=2 --screenshot="${mockupPng}" --default-background-color=00000000 "file://${mockupHtmlPath}"`,
  { stdio: "ignore" }
);

// Copy directly to ~/Downloads for immediate access
fs.copyFileSync(banner2560Png, path.join(DOWNLOADS_DIR, "kriti-sharma-youtube-banner-2560x1440.png"));
fs.copyFileSync(banner2048Png, path.join(DOWNLOADS_DIR, "kriti-sharma-youtube-banner-2048x1152.png"));
fs.copyFileSync(mockupPng, path.join(DOWNLOADS_DIR, "kriti-sharma-youtube-channel-mockup.png"));

// Copy to artifact directory
fs.copyFileSync(banner2560Png, path.join(ARTIFACT_DIR, "kriti-sharma-youtube-banner-2560x1440.png"));
fs.copyFileSync(banner2048Png, path.join(ARTIFACT_DIR, "kriti-sharma-youtube-banner-2048x1152.png"));
fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, "kriti-sharma-youtube-channel-mockup.png"));

console.log("Done! YouTube banner for Kriti Sharma created successfully.");
