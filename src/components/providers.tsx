"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { AuthSync } from "./auth-sync";
import { StudyPlanSync } from "./study-plan-sync";
import { StudySetup } from "./study-setup";
import { ToastProvider } from "./toast";

/**
 * Browsers report a light colour scheme while printing, so a "system" theme would turn the page light
 * behind the print dialog. Pin the theme on screen until printing ends; print CSS keeps paper light.
 */
function usePrintPinnedTheme() {
  const [pinned, setPinned] = useState<string>();
  useEffect(() => {
    // Synchronous, so the pin is in place before the browser lays the page out for printing.
    const pin = () => flushSync(() => setPinned(document.documentElement.classList.contains("dark") ? "dark" : "light"));
    const unpin = () => setPinned(undefined);
    window.addEventListener("beforeprint", pin);
    window.addEventListener("afterprint", unpin);
    return () => {
      window.removeEventListener("beforeprint", pin);
      window.removeEventListener("afterprint", unpin);
    };
  }, []);
  return pinned;
}

export function Providers({ children }: { children: ReactNode }) {
  const printTheme = usePrintPinnedTheme();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange forcedTheme={printTheme}>
      <AuthSync />
      <StudyPlanSync />
      <ToastProvider>
        {children}
        <StudySetup />
      </ToastProvider>
    </ThemeProvider>
  );
}
