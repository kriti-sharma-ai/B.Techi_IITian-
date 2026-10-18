/**
 * Print once every image has loaded. Question figures are loading="lazy", and a browser can print
 * before the ones further down arrive, leaving blank boxes in the saved PDF. Gives up after `timeoutMs`.
 * `win`: the window to print, e.g. a hidden same-site frame (components/download-hub.tsx).
 */
export async function printWithImages(timeoutMs = 5000, win: Window = window) {
  const images = [...win.document.images];
  for (const im of images) if (im.loading === "lazy") im.loading = "eager";
  await Promise.race([
    Promise.all(images.map((im) => (im.complete ? undefined : im.decode().catch(() => undefined)))),
    new Promise((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
  win.print();
}

/** Opening a page at #save-pdf starts "Save as PDF" (the download hub's fallback where frames can't print). */
export const SAVE_PDF_HASH = "#save-pdf";
