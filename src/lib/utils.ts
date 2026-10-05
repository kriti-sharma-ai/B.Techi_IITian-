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

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://btechi.in";
