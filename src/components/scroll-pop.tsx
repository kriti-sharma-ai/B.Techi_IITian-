"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const TILT =
  "rotateX(calc((1 - var(--pop, 0)) * 24deg)) scale(calc(0.86 + var(--pop, 0) * 0.14)) translateY(calc((1 - var(--pop, 0)) * 40px))";

/**
 * Scroll-linked "pop up": the child starts tilted back and smaller, then stands up flat at full size
 * as it scrolls into view. Progress lives in the --pop CSS variable (0 → 1), so scrolling never
 * re-renders React. With reduced motion the child just sits flat.
 */
export function ScrollPop({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--pop", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const { top } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 while the top edge sits at the bottom of the screen, 1 once it is 20% from the top.
      const pop = Math.min(1, Math.max(0, (vh - top) / (vh * 0.8)));
      el.style.setProperty("--pop", pop.toFixed(3));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className={cn("[perspective:1400px]", className)}>
      <div ref={ref} className="will-change-transform motion-reduce:transform-none!" style={{ transform: TILT }}>
        {children}
      </div>
    </div>
  );
}
