"use client";

import { usePathname } from "next/navigation";

/**
 * usePathname, but the home page always reads "/". Vercel prerenders the home page as "/index", so the
 * server and the browser disagree on it; anything that renders differently on "/" (the footer) then
 * fails hydration and React redraws the whole page on load.
 */
export function useRoutePath() {
  const pathname = usePathname();
  return pathname === "/index" ? "/" : pathname;
}
