"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { FooterWordmark } from "./footer-wordmark";

const columns = [
  {
    title: "Explore",
    links: [
      ["Programs", "/programs"],
      ["Courses", "/subjects"],
      ["Notes", "/notes"],
      ["Videos", "/videos"],
      ["Books", "/books"],
      ["Practice", "/practice"],
      ["PYQs", "/pyqs"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Study Guides", "/study-guides"],
      ["Exam Prep", "/practice?tab=exam"],
      ["Search", "/search"],
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
];

export function Footer() {
  const pathname = usePathname();
  // Course player pages (/subjects/<slug>/...) stay distraction-free.
  if (pathname.startsWith("/admin") || /^\/subjects\/[^/]+/.test(pathname)) return null;
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-surface pb-24 text-fg md:pb-0">
      <div aria-hidden className="footer-glow pointer-events-none absolute inset-x-0 bottom-0 h-[70%]" />
      <div className="container-page relative grid grid-cols-3 gap-x-6 gap-y-10 pt-14 md:grid-cols-[2fr_repeat(3,1fr)]">
        <div className="col-span-3 md:col-span-1">
          <p className="text-3xl font-medium tracking-tight md:text-4xl">Learn. Practise. Prepare.</p>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            A structured academic platform where students learn, practise and prepare.
          </p>
          <p className="mt-5 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink dark:border dark:border-brand/40 dark:bg-brand/10 dark:text-brand">AI • Automation • Tech • Education</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted dark:text-brand">{col.title}</h2>
            <ul className="space-y-2.5">
              {col.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] text-fg/80 transition-colors hover:text-fg dark:hover:text-brand">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page relative pt-12 pb-10 md:pt-16 md:pb-14">
        <FooterWordmark />
      </div>
      <div className="relative border-t border-border">
        <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <p className="text-sm text-muted">© {new Date().getFullYear()} BTechi IITian. Built for students, by students.</p>
          </div>
          <ul className="flex gap-5">
            {legal.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-muted transition-colors hover:text-fg dark:hover:text-brand">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
