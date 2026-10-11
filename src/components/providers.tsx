"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { AuthSync } from "./auth-sync";
import { StudyPlanSync } from "./study-plan-sync";
import { StudySetup } from "./study-setup";
import { ToastProvider } from "./toast";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthSync />
      <StudyPlanSync />
      <ToastProvider>
        {children}
        <StudySetup />
      </ToastProvider>
    </ThemeProvider>
  );
}
