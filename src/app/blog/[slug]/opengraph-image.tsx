import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";
import { getBlogCategory } from "@/lib/blog/categories";

// Social share image for each post: brand bar, category, title and reading time.

export const alt = "BTechi blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.slug }));

const ACCENT: Record<string, string> = { yellow: "#FFD21C", blue: "#60a5fa", purple: "#a78bfa", green: "#4ade80", teal: "#2dd4bf" };

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  const cat = post && getBlogCategory(post.category);
  const accent = ACCENT[cat?.accent ?? "yellow"];
  const title = post?.title ?? "BTechi blog";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0b0b0b", color: "#ffffff", padding: "64px 72px", position: "relative" }}>
        {/* Satori's radial gradients are unreliable, so the glow is two translucent discs. */}
        <div style={{ position: "absolute", right: -140, top: -170, width: 560, height: 560, borderRadius: 560, background: accent, opacity: 0.14, display: "flex" }} />
        <div style={{ position: "absolute", right: -40, top: -70, width: 320, height: 320, borderRadius: 320, background: accent, opacity: 0.2, display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "#FFD21C", color: "#0b0b0b", fontSize: 32, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
            B
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, display: "flex" }}>BTechi</div>
          <div style={{ marginLeft: 16, fontSize: 22, color: "#0b0b0b", background: accent, padding: "6px 16px", borderRadius: 999, display: "flex" }}>{cat?.name ?? "Blog"}</div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: title.length > 70 ? 54 : 64, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1000, display: "flex" }}>{title}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, color: "#a0a0a0" }}>
          <div style={{ display: "flex" }}>{post ? `${post.minutes} min read · btechi.in/blog` : "btechi.in/blog"}</div>
          <div style={{ width: 220, height: 10, borderRadius: 10, background: "#FFD21C", display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
