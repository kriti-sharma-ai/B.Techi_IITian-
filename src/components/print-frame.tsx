import { LogoMark } from "./logo";

import { SITE_URL as SITE, YOUTUBE_URL } from "@/lib/utils";

/** Plain text: links in a pinned element are copied onto every page once per page, so they live in the header. */
function FootLine({ className }: { className: string }) {
  return (
    <p className={className}>
      Free IIT Madras BS notes, PYQs and mock tests at <b>btechi.in</b> · Videos on YouTube: <b>BTechi IITian</b>
    </p>
  );
}

/**
 * Wraps the page so a printed / saved PDF carries BTechi branding on every page.
 * Browsers repeat <thead> on each printed page, and its links stay clickable in the PDF. The footer is
 * pinned to every page bottom (position: fixed prints on each page); the <tfoot> copy is an invisible
 * spacer that keeps content from running under it, and on the last page it would sit mid-page.
 * On screen the table is display: contents, so layout is untouched (see .print-frame in globals.css).
 */
export function PrintFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <table className="print-frame">
        <thead>
          <tr>
            <td>
              <div className="print-brand">
                <a href={SITE} className="print-brand-home">
                  <LogoMark className="size-5" />
                  <span className="print-brand-name">BTechi</span>
                </a>
                <span className="print-brand-url">
                  <a href={SITE}>btechi.in</a>
                  {" · "}
                  <a href={YOUTUBE_URL}>YouTube: BTechi IITian</a>
                </span>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{children}</td>
          </tr>
        </tbody>
        <tfoot aria-hidden>
          <tr>
            <td>
              <FootLine className="print-foot print-foot-spacer" />
            </td>
          </tr>
        </tfoot>
      </table>
      <FootLine className="print-foot print-foot-pinned" />
    </>
  );
}
