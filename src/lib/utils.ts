import { clsx, type ClassValue } from "clsx";
import type { Accent } from "./types";

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

/**
 * Accent styles per program/section. Yellow uses the brand fill with black
 * ink; the others use their token at low opacity so they stay subtle.
 */
export const accentStyles: Record<Accent, { soft: string; text: string; bar: string; ring: string }> = {
  yellow: { soft: "bg-brand/20", text: "text-fg", bar: "bg-brand", ring: "border-brand" },
  blue: { soft: "bg-blue/10", text: "text-blue", bar: "bg-blue", ring: "border-blue" },
  purple: { soft: "bg-purple/10", text: "text-purple", bar: "bg-purple", ring: "border-purple" },
  green: { soft: "bg-green/10", text: "text-green", bar: "bg-green", ring: "border-green" },
  teal: { soft: "bg-teal/10", text: "text-teal", bar: "bg-teal", ring: "border-teal" },
};

export const formatNumber = (n: number) => new Intl.NumberFormat("en-IN").format(n);

export const formatSize = (kb: number) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

// The live host: btechi.in redirects to www, so canonicals and the sitemap must name www.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.btechi.in";

/** Inbox for support, privacy, copyright and grievance requests (shown on the info pages). */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "btechi.atechnerd@gmail.com";

/** The BTechi IITian YouTube channel, where BTechi started. Listed as the site's official profile (JSON-LD sameAs). */
export const YOUTUBE_URL = "https://www.youtube.com/@BTechiIITian";

/** BTechi's LinkedIn company page, also listed in JSON-LD sameAs. */
export const LINKEDIN_URL = "https://www.linkedin.com/company/btechi";

/** Full-screen auth pages (components/auth-shell.tsx), which hide the footer and bottom nav. */
export const isAuthPage = (pathname: string) => ["/login", "/signup", "/reset-password"].includes(pathname);

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
