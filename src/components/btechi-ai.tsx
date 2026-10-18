"use client";

// BTechi AI (concept): a full-screen chat with its own top bar. The student asks in plain words and the page
// they need (paper, sheet, notes, mock test) opens in the panel on the right, as a
// same-site iframe; app/layout.tsx hides the site chrome inside it.
// It uses the guide's brain: the rules in lib/guide.ts first, the AI model (app/api/guide)
// only for questions the rules can't place, same as the bubble.

import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, ExternalLink, FileText, Lock, RotateCw, SquarePen, X } from "lucide-react";
import { answer, understand, welcome, type GuideCatalog, type GuideContext, type GuideData, type GuideLink, type GuideReply } from "@/lib/guide";
import { useHydrated, useStore } from "@/lib/store";
import Link from "next/link";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

type Message = { id: number; from: "bot" | "me"; text: string; reply?: GuideReply };
type Saved = { messages: Message[]; page: GuideLink | null };

const STORE_KEY = "btechi-ai";
const PATH = "/ai";

function load(): Saved | null {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

function save(saved: Saved) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify({ ...saved, messages: saved.messages.slice(-40) }));
  } catch {
    /* private mode: the chat just isn't kept */
  }
}

const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

export function BtechiAI({ data, question }: { data: GuideData; question?: string }) {
  const hydrated = useHydrated();
  const user = useStore((s) => s.user);
  const plan = useStore((s) => s.plan);
  const attempts = useStore((s) => s.qualifierAttempts);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  /** The page shown in the panel. */
  const [page, setPage] = useState<GuideLink | null>(null);
  /** Phones: the panel covers the chat while open. */
  const [panelOpen, setPanelOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  /** Where the panel is now, after clicks inside it. */
  const [current, setCurrent] = useState<{ href: string; title: string } | null>(null);
  /** The saved chat has been read; saving before that would wipe it. */
  const [restored, setRestored] = useState(false);
  /** "New chat" asks first: the old chat is gone for good, nothing is saved. */
  const [confirmNew, setConfirmNew] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const nextId = useRef(1);
  /** The hero's question (?q=) was asked; Strict Mode runs the mount effect twice. */
  const askedFromUrl = useRef(false);
  const aiCache = useRef(new Map<string, GuideReply>());
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
      pathname: PATH,
      signedIn: Boolean(hydrated && user),
      planLevel: plan?.level,
      planCourses: plan?.subjects ?? [],
      lastAttempt: last ? { title: last.title!, href: last.href! } : undefined,
    };
  }, [hydrated, user, plan, attempts]);

  // A question from the landing hero (?q=) starts a new chat; otherwise restore this tab's chat.
  // The sheet list loads early so the first answer is quick.
  useEffect(() => {
    loadCatalog();
    setRestored(true);
    if (question) {
      if (askedFromUrl.current) return;
      askedFromUrl.current = true;
      ask(question);
      // Drop ?q= so a reload restores this chat instead of asking again. After this tick:
      // on a client-side visit the router writes the URL after the page's own effects.
      setTimeout(() => window.history.replaceState(window.history.state, "", PATH), 0);
      return;
    }
    const saved = load();
    if (!saved) return;
    setMessages(saved.messages);
    nextId.current = saved.messages.reduce((n, m) => Math.max(n, m.id + 1), 1);
    if (saved.page) open(saved.page, false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (restored) save({ messages, page });
  }, [restored, messages, page]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  function open(link: GuideLink, show = true) {
    if (link.href !== page?.href) setLoading(true);
    setPage(link);
    setCurrent(null);
    if (show) setPanelOpen(true);
  }

  const ask = async (q: string) => {
    const text = q.trim();
    if (!text || thinking) return;
    setInput("");
    setMessages((m) => [...m, { id: nextId.current++, from: "me", text }]);
    setThinking(true);
    const sheets = await Promise.race([loadCatalog(), new Promise<undefined>((r) => setTimeout(r, 2500))]);
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
      // The best page opens straight away on wide screens; phones tap a card to open it.
      if (reply.links?.[0]) open(reply.links[0], isDesktop());
    };
    if (!local.fallback || !data.ai) {
      show(local);
      return;
    }
    const key = `${ctx.signedIn ? "in" : "out"}:${text.toLowerCase()}`;
    const seen = aiCache.current.get(key);
    if (seen) {
      show(seen);
      return;
    }
    const history = messages
      .flatMap((m, i) => (m.from === "me" ? [{ q: m.text, a: messages[i + 1]?.reply?.text }] : []))
      .slice(-2);
    fetch("/api/guide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, path: PATH, history, signedIn: ctx.signedIn, plan: ctx.planCourses }),
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

  const reset = () => {
    nextId.current = 1;
    setMessages([]);
    setPage(null);
    setPanelOpen(false);
  };

  /** Same-site frame: read where the student has clicked to, for the title and "open in full page". */
  const onFrameLoad = () => {
    setLoading(false);
    try {
      const w = frameRef.current?.contentWindow;
      if (w) setCurrent({ href: w.location.pathname + w.location.search + w.location.hash, title: w.document.title.replace(/ · BTechi$/, "") });
    } catch {
      /* not readable: keep the link's own label */
    }
  };

  const chips = welcome(ctx, data).chips ?? [];
  const lastBot = [...messages].reverse().find((m) => m.from === "bot")?.id;

  // Until the saved chat is read, show only the top bar rather than flash the start screen.
  if (!restored)
    return (
      <div className="flex h-dvh flex-col">
        <TopBar />
      </div>
    );

  /* ───────────── Start: one big question box ───────────── */

  if (messages.length === 0)
    return (
      <div className="flex min-h-dvh flex-col">
        <TopBar />
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-20">
          <div className="w-full max-w-2xl">
            <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">What do you need today?</h1>
            <p className="mt-3 text-center text-muted">Papers, sheets, notes or a mock test. It opens here.</p>
            <Composer value={input} onChange={setInput} onSubmit={ask} disabled={thinking} big autoFocus />
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
              <Lock className="size-3" aria-hidden /> Chats are not saved. Closing the tab clears them.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {chips.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => ask(c.query)}
                  className="rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium transition-colors hover:border-fg/30 hover:bg-surface-2"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  /* ───────────── Chat: full width until there is a page, then chat left and page right ───────────── */

  return (
    <div className="flex h-dvh flex-col">
      <TopBar onNew={() => setConfirmNew(true)} />
      {confirmNew && (
        <ConfirmNewChat
          onCancel={() => setConfirmNew(false)}
          onConfirm={() => {
            setConfirmNew(false);
            reset();
          }}
        />
      )}
      <div className="flex min-h-0 flex-1">
        <section
          aria-label="Chat"
          className={cn("flex w-full min-w-0 flex-col", page && "md:w-[380px] md:shrink-0 md:border-r md:border-border lg:w-[420px]")}
        >
          <div ref={listRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-6" aria-live="polite">
            <div className={cn("mx-auto w-full space-y-4", !page && "max-w-3xl")}>
              {messages.map((m) =>
                m.from === "me" ? (
                  <div key={m.id} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-md bg-fg px-3.5 py-2 text-sm text-bg">{m.text}</p>
                  </div>
                ) : (
                  <BotMessage key={m.id} reply={m.reply!} active={page?.href} showChips={m.id === lastBot} onChip={ask} onOpen={open} />
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
          </div>

          <div className="shrink-0 px-3 pt-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <div className={cn("mx-auto w-full", !page && "max-w-3xl")}>
              <Composer value={input} onChange={setInput} onSubmit={ask} disabled={thinking} autoFocus />
            </div>
          </div>
        </section>

        {page && (
          <section
            aria-label="Page"
            className={cn("min-w-0 flex-1 flex-col bg-surface", panelOpen ? "fixed inset-0 z-50 flex md:static md:z-auto" : "hidden md:flex")}
          >
            <header className="flex h-12 shrink-0 items-center gap-1 border-b border-border px-3">
              <p className="min-w-0 flex-1 truncate px-1 text-sm font-medium">{current?.title || page.label}</p>
              <ToolButton label="Reload" onClick={() => frameRef.current?.contentWindow?.location.reload()}>
                <RotateCw className="size-4" aria-hidden />
              </ToolButton>
              <a
                href={current?.href ?? page.href}
                target="_blank"
                rel="noopener"
                aria-label="Open in a new tab"
                title="Open in a new tab"
                className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <ExternalLink className="size-4" aria-hidden />
              </a>
              <ToolButton
                label="Close"
                onClick={() => {
                  setPanelOpen(false);
                  // Wide screens: the chat takes the full width again.
                  if (isDesktop()) setPage(null);
                }}
              >
                <X className="size-4" aria-hidden />
              </ToolButton>
            </header>
            <div className="relative flex-1">
              <iframe ref={frameRef} key={page.href} src={page.href} title={page.label} onLoad={onFrameLoad} className="absolute inset-0 size-full bg-bg" />
              {/* A thin bar, not a cover: the page shows as soon as it starts drawing. */}
              {loading && (
                <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden" role="progressbar" aria-label="Loading page">
                  <div className="animate-panel-load h-full w-1/3 rounded-full bg-brand" />
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/** BTechi AI's own slim bar: the site navbar is hidden on this page. */
export function TopBar({ onNew }: { onNew?: () => void }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
      <Link href="/" aria-label="BTechi home" className="flex items-center gap-2">
        <LogoMark className="size-7" />
        <span className="font-extrabold tracking-tight">
          BTechi <span className="font-semibold text-muted">AI</span>
        </span>
      </Link>
      <div className="ml-auto flex items-center gap-1">
        {onNew && (
          <button type="button" onClick={onNew} className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg">
            <SquarePen className="size-4" aria-hidden /> New chat
          </button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}

/** Asked before "New chat": the old chat is not kept anywhere, so it can't come back. */
function ConfirmNewChat({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    confirmRef.current?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4" onClick={onCancel}>
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="new-chat-title"
        aria-describedby="new-chat-text"
        onClick={(e) => e.stopPropagation()}
        className="animate-menu-in w-full max-w-sm rounded-2xl border border-border bg-surface p-5 shadow-[0_16px_48px_-12px_rgb(0_0_0/0.3)]"
      >
        <h2 id="new-chat-title" className="font-semibold">
          Start a new chat?
        </h2>
        <p id="new-chat-text" className="mt-2 text-sm text-muted">
          This chat will be removed. BTechi does not save your chats, so it can&apos;t be brought back.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="h-9 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-surface-2">
            Cancel
          </button>
          <button ref={confirmRef} type="button" onClick={onConfirm} className="h-9 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90">
            New chat
          </button>
        </div>
      </div>
    </div>
  );
}

function ToolButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} title={label} className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg">
      {children}
    </button>
  );
}

/** The question box. Enter sends, Shift+Enter makes a new line. */
function Composer({
  value,
  onChange,
  onSubmit,
  disabled,
  big,
  autoFocus,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (q: string) => void;
  disabled: boolean;
  big?: boolean;
  autoFocus?: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Grow with the text, up to a few lines.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };
  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onSubmit(value);
    }
  };

  return (
    <form
      onSubmit={submit}
      className={cn(
        "flex items-end gap-2 rounded-2xl border border-border bg-surface transition-colors focus-within:border-fg/30",
        big ? "mt-8 p-3 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.15)]" : "p-2",
      )}
    >
      <textarea
        ref={ref}
        rows={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKey}
        autoFocus={autoFocus}
        placeholder={big ? "e.g. stats 1 quiz 2 papers" : "Ask for anything on BTechi"}
        aria-label="Ask BTechi AI"
        maxLength={200}
        className={cn("min-w-0 flex-1 resize-none bg-transparent px-2 py-2 outline-none placeholder:text-muted", big ? "text-base" : "text-sm")}
      />
      <button
        type="submit"
        disabled={!value.trim() || disabled}
        aria-label="Send"
        className={cn("grid shrink-0 place-items-center rounded-full bg-brand text-brand-ink transition-opacity disabled:opacity-40", big ? "size-10" : "size-9")}
      >
        <ArrowUp className="size-4" aria-hidden />
      </button>
    </form>
  );
}

function BotMessage({
  reply,
  active,
  showChips,
  onChip,
  onOpen,
}: {
  reply: GuideReply;
  active?: string;
  showChips: boolean;
  onChip: (q: string) => void;
  onOpen: (link: GuideLink) => void;
}) {
  return (
    <div className="max-w-[92%] space-y-2">
      <p className="rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-2 text-sm whitespace-pre-line">{reply.text}</p>
      {reply.links && reply.links.length > 0 && (
        <ul className="overflow-hidden rounded-xl border border-border">
          {reply.links.map((l) => (
            <li key={l.href} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => onOpen(l)}
                aria-current={active === l.href ? "page" : undefined}
                className={cn("flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-surface-2", active === l.href && "bg-surface-2")}
              >
                <FileText className={cn("size-4 shrink-0", active === l.href ? "text-fg" : "text-muted")} aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{l.label}</span>
                  {l.note && <span className="block truncate text-xs text-muted">{l.note}</span>}
                </span>
              </button>
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
