"use client";

import type { ReactNode } from "react";
import { applyContent, type CmsContent } from "@/lib/content";

/**
 * Applies the published CMS content (loaded by the root layout) to lib/content.ts
 * in the browser. It renders before its children, so every client component
 * reads the same courses, weeks and resources as the server did.
 */
export function ContentSnapshot({ content, children }: { content: CmsContent; children: ReactNode }) {
  applyContent(content);
  return children;
}
