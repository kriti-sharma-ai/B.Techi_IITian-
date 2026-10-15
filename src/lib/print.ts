/**
 * Print once every image has loaded. Question figures are loading="lazy", and a browser can print
 * before the ones further down arrive, leaving blank boxes in the saved PDF. Gives up after `timeoutMs`.
 */
export async function printWithImages(timeoutMs = 5000) {
  const images = [...document.images];
  for (const im of images) if (im.loading === "lazy") im.loading = "eager";
  await Promise.race([
    Promise.all(images.map((im) => (im.complete ? undefined : im.decode().catch(() => undefined)))),
    new Promise((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
  window.print();
}
