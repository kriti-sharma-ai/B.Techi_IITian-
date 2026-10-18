"use client";

import { useEffect } from "react";
import { SAVE_PDF_HASH, printWithImages } from "@/lib/print";

/** A page opened at #save-pdf (from the download hub) opens "Save as PDF" once it has loaded. */
export function SavePdfHash() {
  useEffect(() => {
    if (window.location.hash !== SAVE_PDF_HASH) return;
    history.replaceState(history.state, "", window.location.pathname + window.location.search);
    const go = () => printWithImages();
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
  }, []);
  return null;
}
