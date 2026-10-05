"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const columns = [
  {
    title: "Explore",
    links: [
      ["Programs", "/programs"],
      ["Subjects", "/subjects"],
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
      ["Exam Prep", "/exam-prep"],
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
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Copyright", "/copyright"],
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="mt-20 border-t border-border bg-surface pb-24 md:pb-0">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            A structured academic platform where students learn, practise and prepare.
          </p>
          <p className="mt-4 text-xs font-semibold tracking-wide text-muted">AI • Automation • Tech • Education</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="mb-3 text-sm font-semibold">{col.title}</h2>
            <ul className="space-y-2">
              {col.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-fg">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} BTechi IITian. All rights reserved.</p>
          <p>Built for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}
