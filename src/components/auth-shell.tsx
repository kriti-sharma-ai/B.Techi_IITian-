import type { ReactNode } from "react";
import { SignupArt } from "./signup-art";

/**
 * Full-screen layout shared by the auth pages: the study-desk poster on the left (desktop only)
 * and the form on the right. Exactly the screen under the navbar (h-16 + its 1px border), so the
 * page never scrolls. Footer and bottom nav are hidden on these routes (isAuthPage); the form
 * squeezes on short screens and only scrolls itself on tiny ones.
 */
export function AuthShell({ headline, children }: { headline: ReactNode; children: ReactNode }) {
  return (
    <div className="grid h-[calc(100dvh-4rem-1px)] grid-rows-1 lg:grid-cols-2 lg:border-t lg:border-border">
      {/* ───────── Poster (desktop) ───────── */}
      <aside className="relative isolate hidden flex-col overflow-hidden bg-brand text-brand-ink lg:flex">
        <div className="flex min-h-0 flex-1 items-center justify-center px-10 pt-10 short:pt-6">
          <SignupArt className="h-full max-h-[600px] w-full max-w-[740px]" />
        </div>
        <h2 className="px-12 pt-2 pb-12 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] xl:px-16 short:pb-9 short:text-[2.15rem]">
          {headline}
        </h2>
        {/* Printed-poster grain over everything */}
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0" />
      </aside>

      {/* ───────── Form ───────── */}
      <div className="flex overflow-y-auto px-4 py-6 sm:px-6 lg:bg-surface lg:px-12 short:py-4 tiny:py-3">
        <div className="m-auto w-full max-w-md animate-fade-up">{children}</div>
      </div>
    </div>
  );
}

/** The poster headline's hand-drawn double underline, drawn in after the art settles. */
export function Underlined({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg viewBox="0 0 220 16" preserveAspectRatio="none" aria-hidden className="absolute -bottom-[0.16em] -left-[0.04em] h-[0.32em] w-[104%]">
        <path
          className="art-draw"
          style={{ animationDelay: "1.1s" }}
          pathLength={1}
          d="M3 10C45 4 120 3 170 6S210 11 217 6M24 13C80 9 150 8 206 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
