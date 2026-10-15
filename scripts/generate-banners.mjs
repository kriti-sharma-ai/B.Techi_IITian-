import fs from "fs";
import path from "path";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public");
const ARTIFACT_DIR = "/Users/masuddarrahaman/.gemini/antigravity-ide/brain/43005519-9929-4c7d-9abf-c4d979c80674";

// Clean small BTechi Logo Mark (Vector SVG)
function logoMark(x, y, size = 26, rx = 6) {
  const scale = size / 32;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect width="32" height="32" rx="${rx / scale}" fill="#FFD21C"/>
      <path d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z" fill="#0B0B0B" fill-rule="evenodd"/>
    </g>
  `;
}

/* ─────────────────────────────────────────────────────────────
   1. LINKEDIN COMPANY PAGE BANNER (1128 x 191 px)
   White background, math square box lines, right-sided text,
   with thick yellow line (#FFD21C) throughout below the logo
   ───────────────────────────────────────────────────────────── */
function generateCompanyBannerSvg() {
  return `
<svg width="1128" height="191" viewBox="0 0 1128 191" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Math square box lines (like hero section) -->
    <pattern id="mathGridSm" width="18" height="18" patternUnits="userSpaceOnUse">
      <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#E2E8F0" stroke-width="0.75"/>
    </pattern>
  </defs>

  <!-- Clean Pure White Background -->
  <rect width="1128" height="191" fill="#FFFFFF"/>

  <!-- Math square box lines -->
  <rect width="1128" height="191" fill="url(#mathGridSm)"/>

  <!-- Logo (Right-sided, above the yellow line) -->
  <g transform="translate(560, 30)">
    ${logoMark(0, 0, 26, 6)}
    <text x="36" y="21" fill="#0B0B0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, sans-serif" font-size="24" font-weight="800" letter-spacing="-0.8">BTechi</text>
  </g>

  <!-- Yellow thick line throughout (edge-to-edge across entire banner) -->
  <rect x="0" y="74" width="1128" height="5.5" fill="#FFD21C"/>

  <!-- Text content below the yellow line -->
  <g transform="translate(560, 102)">
    <text x="0" y="20" fill="#1E293B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, sans-serif" font-size="17.5" font-weight="600" letter-spacing="-0.3">
      Study companion for IIT Madras BS.
    </text>
    <g transform="translate(0, 42)">
      <circle cx="4" cy="4" r="3.5" fill="#FFD21C"/>
      <text x="15" y="8.5" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, sans-serif" font-size="13" font-weight="500">btechi.in</text>
    </g>
  </g>
</svg>
  `;
}

/* ─────────────────────────────────────────────────────────────
   2. STANDARD BANNER (1584 x 396 px)
   Scaled proportionally with thick yellow line throughout below logo
   ───────────────────────────────────────────────────────────── */
function generate1584BannerSvg() {
  return `
<svg width="1584" height="396" viewBox="0 0 1584 396" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="mathGridLg" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E2E8F0" stroke-width="0.85"/>
    </pattern>
  </defs>

  <rect width="1584" height="396" fill="#FFFFFF"/>
  <rect width="1584" height="396" fill="url(#mathGridLg)"/>

  <!-- Logo (Right-sided, above the yellow line) -->
  <g transform="translate(800, 75)">
    ${logoMark(0, 0, 44, 10)}
    <text x="56" y="34" fill="#0B0B0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">BTechi</text>
  </g>

  <!-- Yellow thick line throughout (edge-to-edge across entire banner) -->
  <rect x="0" y="155" width="1584" height="10" fill="#FFD21C"/>

  <!-- Text content below the yellow line -->
  <g transform="translate(800, 205)">
    <text x="0" y="32" fill="#1E293B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, sans-serif" font-size="28" font-weight="600" letter-spacing="-0.5">
      Study companion for IIT Madras BS.
    </text>
    <g transform="translate(0, 68)">
      <circle cx="5" cy="5" r="4.5" fill="#FFD21C"/>
      <text x="20" y="10" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, sans-serif" font-size="19" font-weight="500">btechi.in</text>
    </g>
  </g>
</svg>
  `;
}

async function run() {
  // 1. Company Page Banner (1128 x 191)
  const companySvg = generateCompanyBannerSvg();
  const companySvgPath = path.join(OUTPUT_DIR, "linkedin-company-banner.svg");
  fs.writeFileSync(companySvgPath, companySvg.trim());

  const companyPngPath = path.join(OUTPUT_DIR, "linkedin-company-banner.png");
  await sharp(Buffer.from(companySvg)).png({ quality: 100 }).toFile(companyPngPath);

  const companyRetinaPath = path.join(OUTPUT_DIR, "linkedin-company-banner-2x.png");
  await sharp(Buffer.from(companySvg), { density: 144 })
    .resize(2256, 382)
    .png({ quality: 100 })
    .toFile(companyRetinaPath);

  // 2. Standard Profile Banner (1584 x 396)
  const stdSvg = generate1584BannerSvg();
  const stdSvgPath = path.join(OUTPUT_DIR, "linkedin-banner.svg");
  fs.writeFileSync(stdSvgPath, stdSvg.trim());

  const stdPngPath = path.join(OUTPUT_DIR, "linkedin-banner.png");
  await sharp(Buffer.from(stdSvg)).png({ quality: 100 }).toFile(stdPngPath);

  const stdRetinaPath = path.join(OUTPUT_DIR, "linkedin-banner-2x.png");
  await sharp(Buffer.from(stdSvg), { density: 144 })
    .resize(3168, 792)
    .png({ quality: 100 })
    .toFile(stdRetinaPath);

  // Copy to artifacts for immediate display
  fs.copyFileSync(companyPngPath, path.join(ARTIFACT_DIR, "linkedin-company-banner.png"));
  fs.copyFileSync(companyRetinaPath, path.join(ARTIFACT_DIR, "linkedin-company-banner-2x.png"));
  fs.copyFileSync(stdPngPath, path.join(ARTIFACT_DIR, "linkedin-banner.png"));

  console.log("✓ Generated banner with thick yellow line throughout below logo");
}

run().catch(console.error);
