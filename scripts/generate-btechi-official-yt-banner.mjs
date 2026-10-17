import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = path.resolve("marketing/youtube/btechi");
const HTML_DIR = path.resolve("scripts/youtube-banners/btechi/html");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/0b31211b-800d-4e6b-95a9-6153730555f8";
const DOWNLOADS_DIR = "/Users/masuddarrahaman/Downloads";

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

/* ─────────────────────────────────────────────────────────────
   BTechi ULTRA-MINIMAL YOUTUBE BANNER
   "banner must be minimal no foundation and all, just normal big text"
   - Canvas: 2560 x 1440 px (16:9 standard YouTube canvas)
   - Visible band on Desktop: 2560 x 423 px (y: 508.5 to 931.5 px)
   - All-Device Safe Area: 1546 x 423 px centered (x: 507 to 2053 px)
   - Features:
     • Pure white background with subtle engineering math grid (#E2E8F0)
     • Signature edge-to-edge BTechi Yellow bar (#FFD21C) at top of visible strip
     • Giant, monumental, clean normal text:
       "STUDY COMPANION FOR IIT MADRAS BS."
     • Clean BTechi logo lockup + IITian badge
     • Zero clutter, zero cards, zero lists, pure negative space
   ───────────────────────────────────────────────────────────── */
function getBTechiYtBannerHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=JetBrains+Mono:wght@700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      width: 2560px;
      height: 1440px;
      overflow: hidden;
      background: #FFFFFF;
      color: #0B0B0B;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
    }

    /* Architectural Math Square Grid across full 2560x1440 canvas */
    .bg-math-grid {
      position: absolute;
      inset: 0;
      background-size: 36px 36px;
      background-image: 
        linear-gradient(to right, #E2E8F0 1.2px, transparent 1.2px),
        linear-gradient(to bottom, #E2E8F0 1.2px, transparent 1.2px);
    }

    /* Edge-to-Edge Yellow Bar across Desktop/Mobile Visible Area (y: 508.5px) */
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

    /* YouTube Safe Area (1546 x 423 px) centered at x: 507-2053, y: 508.5-931.5 */
    .safe-area-container {
      position: absolute;
      top: 508.5px;
      left: 507px;
      width: 1546px;
      height: 423px;
      z-index: 30;
      padding: 0 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    /* BTechi Identity Header - Large & Minimal */
    .brand-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 20px;
    }

    .brand-icon {
      width: 52px;
      height: 52px;
      background: #FFD21C;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(255, 210, 28, 0.4);
      flex-shrink: 0;
    }

    .brand-title {
      font-size: 44px;
      font-weight: 900;
      letter-spacing: -1.8px;
      color: #0B0B0B;
      line-height: 1;
    }

    .iitian-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      font-weight: 900;
      background: #0B0B0B;
      color: #FFFFFF;
      padding: 6px 12px;
      border-radius: 6px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .brand-sep {
      color: #CBD5E1;
      font-size: 22px;
      margin: 0 4px;
      font-weight: 400;
    }

    .brand-subtext {
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
      font-weight: 800;
      color: #64748B;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    /* Monumental, Massive Normal Headline */
    .main-headline {
      font-size: 82px;
      font-weight: 900;
      letter-spacing: -3.8px;
      line-height: 0.94;
      color: #0B0B0B;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .headline-line1 { white-space: nowrap; }
    .headline-line2 { white-space: nowrap; margin-top: 8px; }

    /* Clean Sub-row: Big text, zero clutter */
    .meta-subline {
      margin-top: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 20px;
      font-weight: 700;
      color: #64748B;
    }

    .domain-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #0B0B0B;
      font-weight: 900;
      letter-spacing: -0.5px;
    }

    .dot-yellow {
      width: 10px;
      height: 10px;
      background: #FFD21C;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .meta-divider {
      color: #CBD5E1;
      font-weight: 400;
    }
  </style>
</head>
<body>
  <div class="tv-top-bar"></div>
  <div class="tv-bottom-bar"></div>
  <div class="bg-math-grid"></div>

  <!-- The Signature BTechi Yellow Line across Desktop & Mobile Banner -->
  <div class="yellow-top-bar"></div>

  <!-- YouTube Safe Area (1546 x 423 px) -->
  <div class="safe-area-container">
    <!-- BTechi Brand Header -->
    <div class="brand-header">
      <div class="brand-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z" fill="#0B0B0B" fill-rule="evenodd"/>
        </svg>
      </div>
      <span class="brand-title">BTechi</span>
      <span class="iitian-badge">IITian</span>
      <span class="brand-sep">/</span>
      <span class="brand-subtext">IIT Madras BS</span>
    </div>

    <!-- Monumental Normal Big Text (82px) -->
    <h1 class="main-headline">
      <span class="headline-line1">STUDY COMPANION FOR</span>
      <span class="headline-line2">IIT MADRAS BS.</span>
    </h1>

    <!-- Clean, Clear Subline -->
    <div class="meta-subline">
      <div class="domain-badge">
        <span class="dot-yellow"></span>
        <span>btechi.in</span>
      </div>
      <span class="meta-divider">/</span>
      <span>Curriculum</span>
      <span class="meta-divider">·</span>
      <span>Notes</span>
      <span class="meta-divider">·</span>
      <span>Solved PYQs</span>
      <span class="meta-divider">·</span>
      <span>Exam Prep</span>
    </div>
  </div>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────
   YOUTUBE CHANNEL PAGE MOCKUP (1280 x 720)
   Showing how BTechi's official YouTube channel page looks live
   ───────────────────────────────────────────────────────────── */
function getYouTubeMockupHtml(bannerImgUrl) {
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
      height: 211.5px; /* scaled from 2560x423 to 1280 width (1280 * 423 / 2560 = 211.5px) */
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
      border-radius: 24px;
      background: #FFD21C;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(255, 210, 28, 0.3);
      flex-shrink: 0;
      border: 2px solid #272727;
    }

    .channel-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .channel-title-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .c-name { font-size: 28px; font-weight: 700; color: #FFFFFF; }
    .c-badge {
      background: #272727; color: #AAAAAA; font-size: 12px;
      font-weight: 600; padding: 2px 8px; border-radius: 4px;
    }

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
      <input type="text" class="yt-search-box" value="BTechi IITian" readonly>
      <div class="yt-search-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
    </div>
    <div style="display:flex; align-items:center; gap:16px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <div style="width:32px; height:32px; border-radius:8px; background:#FFD21C; display:flex; align-items:center; justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
          <path d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z" fill="#0B0B0B" fill-rule="evenodd"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="channel-container">
    <!-- YouTube Banner -->
    <div class="banner-wrapper"></div>

    <!-- YouTube Channel Header -->
    <div class="channel-header">
      <div class="channel-avatar">
        <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
          <path d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z" fill="#0B0B0B" fill-rule="evenodd"/>
        </svg>
      </div>
      <div class="channel-info">
        <div class="channel-title-row">
          <h1 class="c-name">BTechi</h1>
          <span class="c-badge">IITian</span>
        </div>
        <div class="c-meta">
          <span>@btechi</span>
          <span>•</span>
          <span>Study Companion for IIT Madras BS</span>
          <span>•</span>
          <span>12.8K subscribers</span>
        </div>
        <p class="c-desc">Curriculum, lecture notes, solved PYQs &amp; exam prep for Data Science &amp; Electronic Systems. <span class="c-link">btechi.in</span></p>
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

const bannerHtmlPath = path.join(HTML_DIR, "btechi-yt-banner.html");
const banner2560Png = path.join(OUTPUT_DIR, "btechi-youtube-banner-2560x1440.png");
const banner2048Png = path.join(OUTPUT_DIR, "btechi-youtube-banner-2048x1152.png");
const mockupHtmlPath = path.join(HTML_DIR, "btechi-yt-mockup.html");
const mockupPng = path.join(OUTPUT_DIR, "btechi-youtube-channel-mockup.png");

// 1. Write HTML
fs.writeFileSync(bannerHtmlPath, getBTechiYtBannerHtml());

console.log("Rendering 1. Ultra-Minimal BTechi YouTube Banner (2560x1440)...");
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=2560,1440 --screenshot="${banner2560Png}" --default-background-color=00000000 "file://${bannerHtmlPath}"`,
  { stdio: "ignore" }
);

console.log("Rendering 2. Minimum Upload Banner (2048x1152)...");
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=2560,1440 --screenshot="${banner2048Png}" --default-background-color=00000000 "file://${bannerHtmlPath}"`,
  { stdio: "ignore" }
);
execSync(`sips -z 1152 2048 "${banner2048Png}"`, { stdio: "ignore" });

console.log("Rendering 3. BTechi YouTube Channel Page Mockup...");
fs.writeFileSync(mockupHtmlPath, getYouTubeMockupHtml(`file://${banner2560Png}`));
execSync(
  `"${chromePath}" --headless --disable-gpu --window-size=1280,720 --force-device-scale-factor=2 --screenshot="${mockupPng}" --default-background-color=00000000 "file://${mockupHtmlPath}"`,
  { stdio: "ignore" }
);

// Copy directly to ~/Downloads for immediate access
fs.copyFileSync(banner2560Png, path.join(DOWNLOADS_DIR, "btechi-youtube-banner-2560x1440.png"));
fs.copyFileSync(banner2048Png, path.join(DOWNLOADS_DIR, "btechi-youtube-banner-2048x1152.png"));
fs.copyFileSync(mockupPng, path.join(DOWNLOADS_DIR, "btechi-youtube-channel-mockup.png"));

// Copy to artifact directory
fs.copyFileSync(banner2560Png, path.join(ARTIFACT_DIR, "btechi-youtube-banner-2560x1440.png"));
fs.copyFileSync(banner2048Png, path.join(ARTIFACT_DIR, "btechi-youtube-banner-2048x1152.png"));
fs.copyFileSync(mockupPng, path.join(ARTIFACT_DIR, "btechi-youtube-channel-mockup.png"));

console.log("Done! Ultra-minimal BTechi YouTube banner created successfully.");
