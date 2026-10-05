"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import {
  BookMarked,
  Compass,
  Home,
  LayoutDashboard,
  Menu,
  PenLine,
  Search,
  Shield,
  User,
  X,
} from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { buttonClass } from "./ui";
import { useHydrated, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const primaryNav = [
  { href: "/programs", label: "Explore" },
  { href: "/subjects", label: "Subjects" },
  { href: "/notes", label: "Notes" },
  { href: "/videos", label: "Videos" },
  { href: "/practice", label: "Practice" },
  { href: "/pyqs", label: "PYQs" },
  { href: "/exam-prep", label: "Exam Prep" },
];

const secondaryNav = [
  { href: "/books", label: "Books" },
  { href: "/saved", label: "Saved resources" },
  { href: "/dashboard", label: "My dashboard" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

function NavSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    router.push(q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : "/search");
  };
  return (
    <form role="search" onSubmit={submit} className="relative hidden xl:block">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        type="search"
        placeholder="Search BTechi…"
        aria-label="Search BTechi"
        className="h-9 w-56 rounded-lg border border-border bg-surface-2 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-fg/30 focus:bg-surface"
      />
    </form>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const user = useStore((s) => s.user);
  const hydrated = useHydrated();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const staff = user && user.role !== "student";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-brand-ink">
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center gap-4">
        <button
          type="button"
          className="-ml-2 grid size-9 place-items-center rounded-lg hover:bg-surface-2 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>

        <Logo className="max-lg:mx-auto" />

        <nav aria-label="Primary" className="ml-6 hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => {
            const on = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  on ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
                {on && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 max-lg:ml-0">
          <NavSearch />
          <Link
            href="/search"
            className="grid size-9 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg xl:hidden"
            aria-label="Search"
          >
            <Search className="size-[18px]" />
          </Link>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          {hydrated && user ? (
            <>
              {staff && (
                <Link href="/admin" className={buttonClass("ghost", "sm", "hidden lg:inline-flex")}>
                  <Shield className="size-4" aria-hidden /> Admin
                </Link>
              )}
              <Link
                href="/dashboard"
                className="ml-1 hidden size-9 place-items-center rounded-full bg-ink text-sm font-bold text-bg sm:grid"
                aria-label="Your dashboard"
              >
                {user.name.charAt(0).toUpperCase()}
              </Link>
            </>
          ) : (
            <Link href="/login" className={buttonClass("dark", "sm", "ml-1 hidden sm:inline-flex")}>
              Log in
            </Link>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-label="Close menu" />
          <div className="animate-fade-up absolute inset-y-0 left-0 flex w-[min(320px,85vw)] flex-col bg-surface p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="grid size-9 place-items-center rounded-lg hover:bg-surface-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-0.5">
              {[...primaryNav, ...secondaryNav].map((item) => {
                const on = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-[15px] font-medium",
                      on ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {staff && (
                <Link href="/admin" className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-muted hover:bg-surface-2">
                  Admin CMS
                </Link>
              )}
            </nav>
            <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
              {hydrated && user ? (
                <span className="text-sm text-muted">Signed in as {user.name}</span>
              ) : (
                <Link href="/login" className={buttonClass("dark", "md")}>
                  Log in
                </Link>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/** App-style bottom navigation for phones (PRD §37). */
export function BottomNav() {
  const pathname = usePathname();
  const user = useStore((s) => s.user);
  const hydrated = useHydrated();
  if (pathname.startsWith("/admin")) return null;
  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/programs", label: "Explore", icon: Compass },
    { href: "/practice", label: "Practice", icon: PenLine },
    { href: "/saved", label: "Saved", icon: BookMarked },
    {
      href: hydrated && user ? "/dashboard" : "/login",
      label: "Profile",
      icon: hydrated && user ? LayoutDashboard : User,
    },
  ];
  return (
    <nav
      aria-label="App"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ href, label, icon: Icon }) => {
          const on =
            isActive(pathname, href) ||
            (label === "Explore" && (pathname.startsWith("/subjects") || pathname.startsWith("/notes"))) ||
            (label === "Profile" && pathname.startsWith("/dashboard"));
          return (
            <li key={label}>
              <Link
                href={href}
                aria-current={on ? "page" : undefined}
                className={cn("flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium", on ? "text-fg" : "text-muted")}
              >
                <span className={cn("grid h-7 w-12 place-items-center rounded-full transition-colors", on && "bg-brand text-brand-ink")}>
                  <Icon className="size-[18px]" aria-hidden />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
