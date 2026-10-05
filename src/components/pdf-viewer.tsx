"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileWarning,
  Maximize,
  Minimize,
  RotateCcw,
  Search,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import { Button } from "./ui";
import { cn } from "@/lib/utils";

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];

type Status = "loading" | "ready" | "error";

/**
 * Preview → Read → Download (PRD §14). pdf.js is loaded on demand so it never
 * weighs down other pages; the worker is served from /public.
 */
export function PdfViewer({ url, title }: { url: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTask = useRef<RenderTask | null>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState<number | "fit">("fit");
  const [fullscreen, setFullscreen] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<{ page: number; snippet: string }[] | null>(null);
  const [searching, setSearching] = useState(false);
  const pageText = useRef<Map<number, string>>(new Map());

  // Load the document.
  useEffect(() => {
    let cancelled = false;
    let task: { destroy(): Promise<void> } | null = null;
    setStatus("loading");
    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        if (cancelled) return;
        const loading = pdfjs.getDocument({ url });
        task = loading;
        const loaded = await loading.promise;
        if (cancelled) return;
        pageText.current.clear();
        setDoc(loaded);
        setPage(1);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();
    return () => {
      cancelled = true;
      task?.destroy();
    };
  }, [url, attempt]);

  // Render the current page.
  const render = useCallback(async () => {
    if (!doc || !canvasRef.current || !stageRef.current) return;
    const p = await doc.getPage(page);
    const base = p.getViewport({ scale: 1 });
    const available = stageRef.current.clientWidth - 32;
    const scale = zoom === "fit" ? Math.min(available / base.width, 2) : zoom;
    const dpr = window.devicePixelRatio || 1;
    const viewport = p.getViewport({ scale: scale * dpr });
    const canvas = canvasRef.current;
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
    canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
    renderTask.current?.cancel();
    const task = p.render({ canvas, viewport });
    renderTask.current = task;
    try {
      await task.promise;
    } catch {
      /* superseded by a newer render */
    }
  }, [doc, page, zoom]);

  useEffect(() => {
    render();
  }, [render, fullscreen]);

  useEffect(() => {
    if (zoom !== "fit" || !stageRef.current) return;
    const ro = new ResizeObserver(() => render());
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [zoom, render]);

  useEffect(() => {
    const onFs = () => setFullscreen(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const pages = doc?.numPages ?? 0;
  const go = (n: number) => setPage((p) => Math.min(Math.max(1, n), pages || p));

  const zoomStep = (dir: 1 | -1) => {
    const current = zoom === "fit" ? 1 : zoom;
    const idx = ZOOMS.findIndex((z) => z >= current);
    const next = ZOOMS[Math.min(Math.max(0, (idx === -1 ? ZOOMS.length - 1 : idx) + dir), ZOOMS.length - 1)];
    setZoom(next);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement).tagName === "INPUT") return;
    if (e.key === "ArrowRight" || e.key === "PageDown") go(page + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") go(page - 1);
    if (e.key === "+" || e.key === "=") zoomStep(1);
    if (e.key === "-") zoomStep(-1);
  };

  const runSearch = async (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!doc || !q) return setHits(null);
    setSearching(true);
    const found: { page: number; snippet: string }[] = [];
    for (let i = 1; i <= doc.numPages; i++) {
      let text = pageText.current.get(i);
      if (text === undefined) {
        const content = await (await doc.getPage(i)).getTextContent();
        text = content.items.map((it) => ("str" in it ? it.str : "")).join(" ");
        pageText.current.set(i, text);
      }
      const at = text.toLowerCase().indexOf(q);
      if (at !== -1) found.push({ page: i, snippet: text.slice(Math.max(0, at - 40), at + q.length + 60).trim() });
    }
    setHits(found);
    setSearching(false);
    if (found[0]) setPage(found[0].page);
  };

  if (status === "error")
    return (
      <div className="card flex flex-col items-center px-6 py-16 text-center">
        <span className="mb-3 grid size-12 place-items-center rounded-full bg-red/10 text-red">
          <FileWarning className="size-6" aria-hidden />
        </span>
        <p className="font-semibold">This resource is temporarily unavailable.</p>
        <p className="mt-1 text-sm text-muted">We couldn&apos;t load the PDF. Check your connection and try again.</p>
        <Button className="mt-5" variant="secondary" onClick={() => setAttempt((a) => a + 1)}>
          <RotateCcw className="size-4" aria-hidden /> Try again
        </Button>
      </div>
    );

  const tool = "grid size-9 place-items-center rounded-lg text-fg hover:bg-surface-2 disabled:opacity-40";

  return (
    <div
      ref={wrapRef}
      className={cn("card flex flex-col overflow-hidden", fullscreen && "rounded-none border-0")}
      onKeyDown={onKey}
    >
      {/* Toolbar */}
      <div role="toolbar" aria-label="PDF controls" className="flex flex-wrap items-center gap-1 border-b border-border bg-surface p-2">
        <button className={tool} onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous page">
          <ChevronLeft className="size-4" />
        </button>
        <label className="flex items-center gap-1.5 text-sm">
          <span className="sr-only">Page</span>
          <input
            type="number"
            min={1}
            max={pages || 1}
            value={page}
            onChange={(e) => go(Number(e.target.value))}
            className="h-8 w-12 rounded-md border border-border bg-bg text-center tabular-nums outline-none focus:border-fg/40"
          />
          <span className="text-muted tabular-nums">/ {pages || "–"}</span>
        </label>
        <button className={tool} onClick={() => go(page + 1)} disabled={page >= pages} aria-label="Next page">
          <ChevronRight className="size-4" />
        </button>
        <span className="mx-1 h-5 w-px bg-border" aria-hidden />
        <button className={tool} onClick={() => zoomStep(-1)} aria-label="Zoom out">
          <ZoomOut className="size-4" />
        </button>
        <button
          className="h-8 min-w-14 rounded-md px-2 text-sm font-medium tabular-nums hover:bg-surface-2"
          onClick={() => setZoom("fit")}
          title="Fit to width"
        >
          {zoom === "fit" ? "Fit" : `${Math.round(zoom * 100)}%`}
        </button>
        <button className={tool} onClick={() => zoomStep(1)} aria-label="Zoom in">
          <ZoomIn className="size-4" />
        </button>

        <form onSubmit={runSearch} className="relative ml-auto max-sm:order-last max-sm:mt-1 max-sm:w-full" role="search">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (!e.target.value) setHits(null);
            }}
            placeholder="Search in document"
            aria-label="Search in document"
            className="h-9 w-full rounded-lg border border-border bg-bg pl-8 pr-3 text-sm outline-none focus:border-fg/40 sm:w-56"
          />
        </form>
        <button
          className={tool}
          onClick={() => (fullscreen ? document.exitFullscreen() : wrapRef.current?.requestFullscreen())}
          aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          {fullscreen ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
        </button>
      </div>

      {hits && (
        <div className="border-b border-border bg-surface-2/60 px-3 py-2 text-sm">
          <div className="flex items-center justify-between">
            <p className="font-medium">
              {searching ? "Searching…" : hits.length ? `Found on ${hits.length} page${hits.length > 1 ? "s" : ""}` : "No matches"}
            </p>
            <button onClick={() => setHits(null)} className="grid size-7 place-items-center rounded-md hover:bg-surface" aria-label="Clear search">
              <X className="size-4" />
            </button>
          </div>
          {hits.length > 0 && (
            <ul className="mt-1 flex max-h-28 flex-col gap-0.5 overflow-auto">
              {hits.map((h) => (
                <li key={h.page}>
                  <button
                    onClick={() => setPage(h.page)}
                    className={cn("w-full truncate rounded-md px-2 py-1 text-left hover:bg-surface", h.page === page && "bg-surface")}
                  >
                    <span className="font-semibold">p.{h.page}</span> <span className="text-muted">…{h.snippet}…</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Stage */}
      <div
        ref={stageRef}
        tabIndex={0}
        aria-label={`${title}, page ${page} of ${pages}`}
        className={cn("relative overflow-auto bg-surface-2 p-4 outline-none", fullscreen ? "flex-1" : "h-[70vh] min-h-[420px]")}
      >
        {status === "loading" && (
          <div className="mx-auto aspect-[1/1.414] w-full max-w-2xl">
            <div className="skeleton size-full" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={cn("mx-auto block bg-white shadow-md", status !== "ready" && "hidden")}
          role="img"
          aria-label={`Page ${page} of ${title}`}
        />
      </div>
    </div>
  );
}
