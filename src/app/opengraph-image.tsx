import { ImageResponse } from "next/og";

// The shared-link card for every page outside the blog (posts draw their own).
export const alt = "BTechi: IIT Madras BS notes, PYQs and practice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#0b0b0b", color: "#ffffff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* The logo mark, drawn rather than loaded: the PNG has a white matte. */}
          <div style={{ width: 112, height: 112, borderRadius: 24, background: "#ffd21c", color: "#0b0b0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 76, fontWeight: 800 }}>B</div>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>BTechi</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 52, fontWeight: 700, lineHeight: 1.15, maxWidth: 960 }}>IIT Madras BS notes, PYQs and practice, organised</div>
        <div style={{ marginTop: 28, width: 160, height: 12, background: "#ffd21c", borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}
