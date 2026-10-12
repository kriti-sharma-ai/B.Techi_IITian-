import { LogoMark } from "./logo";

import { SITE_URL as SITE } from "@/lib/utils";

/**
 * Wraps the page so a printed / saved PDF carries BTechi branding on every page.
 * Browsers repeat <thead> and <tfoot> on each printed page, and links stay clickable in the PDF.
 * On screen the table is display: contents, so layout is untouched (see .print-frame in globals.css).
 */
export function PrintFrame({ children }: { children: React.ReactNode }) {
  return (
    <table className="print-frame">
      <thead>
        <tr>
          <td>
            <a href={SITE} className="print-brand">
              <LogoMark className="size-5" />
              <span className="print-brand-name">BTechi</span>
              <span className="print-brand-url">btechi.in</span>
            </a>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <a href={SITE} className="print-foot">
              Free IIT Madras BS notes, PYQs and mock tests at <b>btechi.in</b>
            </a>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
