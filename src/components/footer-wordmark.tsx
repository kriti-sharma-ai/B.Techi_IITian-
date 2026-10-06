"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const WORDMARK = "BTechi IITian";
// "IITian" gets a yellow highlighter stroke (light) or yellow type (dark) so
// the two words read apart at a glance.
const SPLIT = WORDMARK.indexOf(" ") + 1;

/**
 * Full-width wordmark between the footer links and the bottom bar. The whole
 * word rises into place together the first time it scrolls into view, then stay put.
 */
export function FooterWordmark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(false);

  // Scale the type so the word spans the footer content width at any viewport.
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;
    const fit = () => {
      text.style.fontSize = "100px";
      const ratio = wrap.clientWidth / text.scrollWidth;
      text.style.fontSize = `${Math.floor(100 * ratio * 100) / 100}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden" aria-label={WORDMARK} role="img">
      <p
        ref={textRef}
        aria-hidden
        data-shown={shown}
        className="footer-wordmark w-max select-none whitespace-pre font-medium leading-[0.9] tracking-[-0.04em] text-fg"
      >
        {WORDMARK.slice(0, SPLIT)}
        <span className="footer-wordmark-accent">{WORDMARK.slice(SPLIT)}</span>
      </p>
    </div>
  );
}
