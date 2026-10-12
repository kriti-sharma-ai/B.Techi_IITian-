import { ImageResponse } from "next/og";
import { REVIEW_SUMMARY } from "@/lib/data/reviews";

// Default social share image for every page without its own (blog posts have theirs).

export const alt = "BTechi: IIT Madras BS PYQs, qualifier mock tests and exam portal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0b0b0b", color: "#ffffff", padding: "64px 72px", position: "relative" }}>
        {/* Satori's radial gradients are unreliable, so the glow is two translucent discs. */}
        <div style={{ position: "absolute", right: -140, top: -170, width: 560, height: 560, borderRadius: 560, background: "#FFD21C", opacity: 0.14, display: "flex" }} />
        <div style={{ position: "absolute", right: -40, top: -70, width: 320, height: 320, borderRadius: 320, background: "#FFD21C", opacity: 0.2, display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "#FFD21C", color: "#0b0b0b", fontSize: 32, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
            B
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, display: "flex" }}>BTechi</div>
          <div style={{ marginLeft: 16, fontSize: 22, color: "#0b0b0b", background: "#FFD21C", padding: "6px 16px", borderRadius: 999, display: "flex" }}>
            {`Rated ${REVIEW_SUMMARY.average.toFixed(1)}/5 by students`}
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1000, display: "flex" }}>Sit the real IIT Madras BS exam before exam day.</div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#c8c8c8", display: "flex" }}>PYQs · Qualifier mocks · Quiz & End Term · Data Science & Management</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, color: "#a0a0a0" }}>
          <div style={{ display: "flex" }}>100% free · btechi.in</div>
          <div style={{ width: 220, height: 10, borderRadius: 10, background: "#FFD21C", display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
