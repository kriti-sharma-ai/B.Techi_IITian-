"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUp, MessageCircle, RotateCcw, X } from "lucide-react";
import { answer, understand, welcome, type GuideCatalog, type GuideContext, type GuideData, type GuideReply } from "@/lib/guide";
import { useHydrated, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

type Message = { id: number; from: "bot" | "me"; text: string; reply?: GuideReply };

const STORE_KEY = "btechi-guide";

/** Pages where the bubble would get in the way: timed practice, admin and BTechi AI (the full-page chat). */
const HIDDEN = ["/practice/session", "/practice/exam", "/admin", "/ai"];

function load(): Message[] {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Message[]) : [];
  } catch {
    return [];
  }
}

function save(messages: Message[]) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(messages.slice(-40)));
  } catch {
    /* private mode: the chat just isn't kept */
  }
}

export function GuideBot({ data }: { data: GuideData }) {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const user = useStore((s) => s.user);
  const plan = useStore((s) => s.plan);
  const attempts = useStore((s) => s.qualifierAttempts);
  const [open, setOpen] = useState(false);
  /** The landing hero's own question box is on screen, so the bubble would ask twice. */
  const [heroAsk, setHeroAsk] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  /** AI answers already given in this visit, so asking twice costs nothing. */
  const aiCache = useRef(new Map<string, GuideReply>());
  /** Topic, year and most-repeated sheets, fetched once when the bubble first opens. */
  const catalog = useRef<Promise<GuideCatalog | undefined>>(undefined);
  const loadCatalog = () =>
    (catalog.current ??= fetch("/api/guide/catalog")
      .then((r) => (r.ok ? (r.json() as Promise<GuideCatalog>) : undefined))
      .catch(() => {
        catalog.current = undefined; // try again next time
        return undefined;
      }));

  const ctx: GuideContext = useMemo(() => {
    const last = [...attempts].reverse().find((a) => a.href && a.title);
    return {
      pathname,
      signedIn: Boolean(hydrated && user),
      planLevel: plan?.level,
      planCourses: plan?.subjects ?? [],
      lastAttempt: last ? { title: last.title!, href: last.href! } : undefined,
    };
  }, [pathname, hydrated, user, plan, attempts]);

  // Restore this tab's chat.
  useEffect(() => {
    const saved = load();
    setMessages(saved);
    nextId.current = saved.reduce((n, m) => Math.max(n, m.id + 1), 1);
  }, []);

  useEffect(() => save(messages), [messages]);

  // First open: say hello, with tips for the page they are on.
  useEffect(() => {
    if (open) loadCatalog();
    if (open && messages.length === 0) setMessages([{ id: nextId.current++, from: "bot", text: "", reply: welcome(ctx, data) }]);
    if (open) setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 50);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking, open]);

  // Landing page: hide the bubble while the hero's question box is in view.
  useEffect(() => {
    const box = pathname === "/" ? document.getElementById("hero-ask") : null;
    if (!box) return setHeroAsk(false);
    const io = new IntersectionObserver(([e]) => setHeroAsk(e.isIntersecting));
    io.observe(box);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (HIDDEN.some((p) => pathname.startsWith(p))) return null;

  const ask = async (q: string) => {
    const text = q.trim();
    if (!text || thinking) return;
    setInput("");
    setMessages((m) => [...m, { id: nextId.current++, from: "me", text }]);
    setThinking(true);
    // Usually loaded already; if it is slow, answer without it rather than wait.
    const sheets = await Promise.race([loadCatalog(), new Promise<undefined>((r) => setTimeout(r, 2500))]);
    // The course of the last messages that named one, for follow-ups like "what about quiz 2".
    const lastCourse = messages
      .filter((m) => m.from === "me")
      .slice(-3)
      .reverse()
      .map((m) => understand(m.text, data).courses[0]?.slug)
      .find(Boolean);
    const local = answer(text, { ...data, catalog: sheets }, { ...ctx, lastCourse });
    const show = (reply: GuideReply) => {
      setMessages((m) => [...m, { id: nextId.current++, from: "bot", text: "", reply }]);
      setThinking(false);
    };
    if (!local.fallback || !data.ai) {
      // A short pause reads as a reply rather than a page flicker.
      setTimeout(() => show(local), 280);
      return;
    }
    // The rules didn't place it: ask the AI model, keeping the rules' answer if that fails.
    const key = `${ctx.signedIn ? "in" : "out"}:${text.toLowerCase()}`;
    const seen = aiCache.current.get(key);
    if (seen) {
      setTimeout(() => show(seen), 280);
      return;
    }
    // The last two turns, with what the guide answered, so follow-ups make sense.
    const history = messages
      .flatMap((m, i) => (m.from === "me" ? [{ q: m.text, a: messages[i + 1]?.reply?.text }] : []))
      .slice(-2);
    fetch("/api/guide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, path: pathname, history, signedIn: ctx.signedIn, plan: ctx.planCourses }),
      signal: AbortSignal.timeout(14_000),
    })
      .then((r) => (r.ok ? (r.json() as Promise<GuideReply>) : Promise.reject(r.status)))
      .then((ai) => {
        const reply = { ...ai, chips: ai.chips ?? (ai.links?.length ? undefined : local.chips) };
        aiCache.current.set(key, reply);
        show(reply);
      })
      .catch(() => show(local));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const reset = () => {
    nextId.current = 1;
    setMessages([{ id: nextId.current++, from: "bot", text: "", reply: welcome(ctx, data) }]);
  };

  const lastBot = [...messages].reverse().find((m) => m.from === "bot")?.id;

  return (
    <div className="embed-hide print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="BTechi guide"
          className="animate-menu-in fixed inset-x-4 bottom-[calc(8.75rem+env(safe-area-inset-bottom))] z-50 flex max-h-[min(560px,calc(100dvh-11rem))] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_16px_48px_-12px_rgb(0_0_0/0.25)] md:inset-x-auto md:right-6 md:bottom-24 md:w-[380px]"
        >
          <header className="flex items-center gap-3 border-b border-border px-4 py-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-brand-ink">
              <MessageCircle className="size-4" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">BTechi guide</p>
              <p className="text-xs text-muted">Tell me what you need. I find the page.</p>
            </div>
            <button type="button" onClick={reset} aria-label="Start over" title="Start over" className="grid size-8 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg">
              <RotateCcw className="size-4" aria-hidden />
            </button>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close guide" className="grid size-8 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-fg">
              <X className="size-4" aria-hidden />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4" aria-live="polite">
            {messages.map((m) =>
              m.from === "me" ? (
                <div key={m.id} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-fg px-3.5 py-2 text-sm text-bg">{m.text}</p>
                </div>
              ) : (
                <BotMessage key={m.id} reply={m.reply!} showChips={m.id === lastBot} onChip={ask} onLink={() => setOpen(false)} />
              ),
            )}
            {thinking && (
              <div className="flex w-14 items-center justify-center gap-1 rounded-2xl rounded-bl-md bg-surface-2 py-3" aria-label="Thinking">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="size-1.5 animate-pulse rounded-full bg-muted" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            )}
          </div>

          <form onSubmit={submit} className="flex items-center gap-2 border-t border-border p-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. stats 1 quiz 2 papers"
              aria-label="Ask the guide"
              maxLength={200}
              className="h-10 min-w-0 flex-1 rounded-full border border-border bg-bg px-4 text-sm outline-none placeholder:text-muted focus:border-fg/30"
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              aria-label="Send"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-ink transition-opacity disabled:opacity-40"
            >
              <ArrowUp className="size-4" aria-hidden />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close guide" : "Open guide: find anything on BTechi"}
        title="Ask BTechi"
        tabIndex={heroAsk && !open ? -1 : undefined}
        className={cn(
          "fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-50 flex h-12 items-center gap-2 rounded-full bg-brand pr-4 pl-3.5 font-semibold text-brand-ink shadow-lg transition-[transform,opacity] duration-300 hover:scale-[1.03] active:scale-95 md:right-6 md:bottom-6",
          heroAsk && !open && "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        {open ? <X className="size-5" aria-hidden /> : <MessageCircle className="size-5" aria-hidden />}
        <span className="text-sm">{open ? "Close" : "Ask"}</span>
      </button>
    </div>
  );
}

function BotMessage({
  reply,
  showChips,
  onChip,
  onLink,
}: {
  reply: GuideReply;
  showChips: boolean;
  onChip: (q: string) => void;
  onLink: () => void;
}) {
  return (
    <div className="max-w-[92%] space-y-2">
      <p className="rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-2 text-sm whitespace-pre-line">{reply.text}</p>
      {reply.links && reply.links.length > 0 && (
        <ul className="overflow-hidden rounded-xl border border-border">
          {reply.links.map((l) => (
            <li key={l.href} className="border-b border-border last:border-b-0">
              <Link href={l.href} onClick={onLink} className="group flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-surface-2">
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{l.label}</span>
                  {l.note && <span className="block truncate text-xs text-muted">{l.note}</span>}
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showChips && reply.chips && reply.chips.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {reply.chips.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => onChip(c.query)}
              className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium transition-colors hover:border-fg/30 hover:bg-surface-2"
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
