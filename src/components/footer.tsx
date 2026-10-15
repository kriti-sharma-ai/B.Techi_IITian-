"use client";

import Link from "next/link";
import { useRoutePath } from "@/lib/use-route-path";
import { hrefEnabled } from "@/lib/site";
import { YOUTUBE_URL } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { YoutubeMark } from "./youtube-mark";
import { FooterWordmark } from "./footer-wordmark";

const columns = [
  {
    title: "Prepare",
    links: [
      ["Programs", "/programs"],
      ["Practice", "/practice"],
      ["Exam Portal", "/exam"],
      ["Qualifier Pack", "/qualifier"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Notes", "/notes"],
      ["Videos", "/videos"],
      ["Books", "/books"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Contribute", "/contribute"],
    ],
  },
];

const legal = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Copyright", "/copyright"],
  ["Disclaimer", "/disclaimer"],
];

export function Footer() {
  const pathname = useRoutePath();
  // Only rendered on the landing page.
  if (pathname !== "/") return null;

  return (
    <footer className="relative mt-20 flex min-h-[calc(100dvh-4rem)] flex-col justify-between overflow-hidden border-t border-border bg-surface pb-24 text-fg md:pb-0">
      {/* Background radial glow */}
      <div aria-hidden className="footer-glow pointer-events-none absolute inset-x-0 bottom-0 h-[70%]" />

      {/* Main footer content */}
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 pt-14 pb-8 sm:px-10 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:px-14">
        {/* Brand identity column */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <h2 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">
            Learn. Practise. Prepare.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            A structured academic platform where students learn, practise and prepare.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink dark:border dark:border-brand/40 dark:bg-brand/10 dark:text-brand">
              AI • Automation • Tech • Education
            </span>
          </div>

          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener me"
            className="group mt-3 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <YoutubeMark className="size-5" />
            <span>
              <span className="font-medium text-fg">BTechi IITian</span> on YouTube
            </span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>

        {/* Navigation links grid */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:gap-10"
        >
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted dark:text-brand">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {col.links
                  .filter(([, href]) => hrefEnabled(href))
                  .map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="inline-block text-fg/80 transition-all duration-150 hover:translate-x-0.5 hover:text-fg dark:hover:text-brand"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Signature Brand Wordmark Banner */}
      <div className="relative my-auto w-full border-t border-border/40 px-6 pt-8 pb-6 sm:px-10 md:pt-12 md:pb-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1440px]">
          <FooterWordmark />
        </div>
      </div>

      {/* Sub-footer bottom bar */}
      <div className="relative mt-auto border-t border-border bg-surface/40">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:flex-row sm:px-10 lg:px-14">
          <p>© {new Date().getFullYear()} BTechi IITian. Built for students, by students.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legal.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-fg dark:hover:text-brand"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
