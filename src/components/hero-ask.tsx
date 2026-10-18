"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const CHIPS = ["Mock test", "Stats 1 most repeated", "Maths 1 topic wise", "Qualifier cutoff"];

/** The landing hero's question box: asking opens BTechi AI (app/ai) with the answer on the way. */
export function HeroAsk() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  /** Only for the button's look: the box is uncontrolled, so text typed before React starts is kept. */
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    router.prefetch("/ai");
    setFilled(!!inputRef.current?.value.trim());
  }, [router]);

  const go = (text: string) => {
    if (text.trim()) router.push(`/ai?q=${encodeURIComponent(text.trim())}`);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    go(inputRef.current?.value ?? "");
  };

  return (
    <div id="hero-ask" className="w-full max-w-xl">
      {/* action + name, and a button that is never disabled: Enter works even before the page's JavaScript is ready. */}
      <form
        action="/ai"
        onSubmit={submit}
        className="flex items-center gap-2 rounded-xl border border-border bg-surface p-1.5 pl-4 shadow-[0_8px_28px_-14px_rgb(0_0_0/0.18)] transition-colors focus-within:border-fg/30"
      >
        <input
          ref={inputRef}
          name="q"
          onChange={(e) => setFilled(!!e.target.value.trim())}
          placeholder="Ask, e.g. stats 1 quiz 2 papers"
          aria-label="Ask BTechi AI"
          maxLength={200}
          className="h-10 min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          aria-label="Ask"
          className={cn("grid size-10 shrink-0 place-items-center rounded-lg bg-brand text-brand-ink transition-opacity", !filled && "opacity-40")}
        >
          <ArrowUp className="size-4" aria-hidden />
        </button>
      </form>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => go(c)}
            className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted sm:text-[13px] backdrop-blur-sm transition-colors hover:border-fg/30 hover:text-fg"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
