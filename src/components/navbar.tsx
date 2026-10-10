"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  ChevronDown,
  Compass,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  Menu,
  PenLine,
  PlayCircle,
  ScrollText,
  Search,
  Shield,
  Sigma,
  StickyNote,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./logo";
import { skillIcons } from "./skill-icons";
import { ThemeToggle } from "./theme-toggle";
import { buttonClass } from "./ui";
import { skillCategories, skillCourses } from "@/lib/data/skills";
import { useHydrated, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

/* ───────────── Navigation data ───────────── */

type NavItem = { href: string; label: string; description: string; icon: LucideIcon };
type NavGroup = { label: string; items: NavItem[] };

/** Plain top-level link, followed by the Skills mega-menu and the dropdown groups below. */
const programsLink = { href: "/programs", label: "Programs" };

/** Highlighted link, shown as an accent pill on desktop and a featured card in the drawer. */
const qualifierLink = { href: "/qualifier", label: "Qualifier Pack", description: "Mock qualifier exams" };

const resourcesGroup: NavGroup = {
  label: "Resources",
  items: [
    { href: "/notes", label: "Notes", description: "Lecture notes & revision sheets", icon: FileText },
    { href: "/pyqs", label: "PYQs", description: "Qualifier & End Term papers, by level", icon: ScrollText },
    { href: "/notes?type=Cheat+sheet", label: "Cheat sheets", description: "One-page summaries per course", icon: StickyNote },
    { href: "/notes?type=Formula+sheet", label: "Formula sheets", description: "Every formula you need, in one place", icon: Sigma },
    { href: "/videos", label: "Videos", description: "Topic-mapped video lessons", icon: PlayCircle },
    { href: "/books", label: "Books", description: "Recommended texts & references", icon: BookOpen },
  ],
};

/** Practice and exam prep live on one page, as tabs. */
const practiceLink = { href: "/practice", label: "Practice" };

/** Grouped list for the mobile drawer. */
const mobileGroups: { label: string; items: { href: string; label: string }[] }[] = [
  { label: "Learn", items: [programsLink, { href: "/skills", label: "Skills" }, practiceLink] },
  resourcesGroup,
  {
    label: "You",
    items: [
      { href: "/saved", label: "Saved resources" },
      { href: "/dashboard", label: "My dashboard" },
    ],
  },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

/* ───────────── Scroll detection hook ───────────── */

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);
  return scrolled;
}

/* ───────────── Nav Search ───────────── */

function NavSearch() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    router.push(q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : "/search");
    setExpanded(false);
  };

  const toggle = useCallback(() => {
    setExpanded((prev) => {
      if (!prev) setTimeout(() => inputRef.current?.focus(), 50);
      return !prev;
    });
  }, []);

  // ⌘K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape" && expanded) {
        setExpanded(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expanded, toggle]);

  return (
    <>
      {/* Expanded search overlay on desktop */}
      {expanded && (
        <div className="absolute inset-0 z-10 hidden items-center px-4 lg:flex">
          <form role="search" onSubmit={submit} className="mx-auto flex w-full max-w-lg items-center gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="search"
                placeholder="Search notes, videos, courses…"
                aria-label="Search BTechi"
                className="h-10 w-full rounded-xl border border-fg/20 bg-surface pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-fg/40"
                autoComplete="off"
              />
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="grid size-9 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg"
              aria-label="Close search"
            >
              <X className="size-4" />
            </button>
          </form>
        </div>
      )}

      {/* Search icon button with ⌘K badge */}
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "group relative grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg",
          expanded && "lg:hidden",
        )}
        aria-label="Search"
      >
        <Search className="size-[18px]" />
        <span className="pointer-events-none absolute -bottom-0.5 -right-1 hidden rounded border border-border bg-surface-2 px-1 py-px text-[9px] font-semibold text-muted lg:block">
          ⌘K
        </span>
      </button>
    </>
  );
}

/* ───────────── Hover menus ───────────── */

/** Open on hover (with a grace period), toggle on click, close on route change or outside click. */
function useHoverMenu(pathname: string) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const enter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const leave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return { open, setOpen, containerRef, enter, leave };
}

/* ───────────── Plain top-level link ───────────── */

function TopLink({ pathname, href, label }: { pathname: string; href: string; label: string }) {
  const on = isActive(pathname, href);
  return (
    <Link
      href={href}
      aria-current={on ? "page" : undefined}
      className={cn(
        "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        on ? "bg-surface-2/80 text-fg" : "text-muted hover:bg-surface-2/60 hover:text-fg",
      )}
    >
      {label}
      {on && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />}
    </Link>
  );
}

/* ───────────── Grouped Dropdown ───────────── */

function NavDropdown({ pathname, group }: { pathname: string; group: NavGroup }) {
  const { open, setOpen, containerRef, enter, leave } = useHoverMenu(pathname);
  const anyActive = group.items.some((r) => isActive(pathname, r.href));
  const cols = group.items.length > 3 ? "w-[420px] grid-cols-2" : "w-[300px] grid-cols-1";

  return (
    <div ref={containerRef} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          anyActive ? "bg-surface-2/80 text-fg" : "text-muted hover:bg-surface-2/60 hover:text-fg",
        )}
      >
        {group.label}
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {anyActive && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />}

      {open && (
        <div className="absolute left-1/2 top-full z-50 pt-2 -translate-x-1/2">
          <div className={cn("animate-mega-open grid gap-1 rounded-2xl border border-border bg-surface p-2 shadow-xl shadow-black/8", cols)}>
            {group.items.map((item) => {
              const Icon = item.icon;
              const on = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex gap-3 rounded-xl px-3 py-3 transition-colors",
                    on ? "bg-surface-2" : "hover:bg-surface-2",
                  )}
                >
                  <div className={cn(
                    "mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg transition-colors",
                    on ? "bg-brand text-brand-ink" : "bg-surface-2 text-muted group-hover:bg-brand/20 group-hover:text-fg",
                  )}>
                    <Icon className="size-[18px]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ───────────── Skills Mega-Menu ───────────── */

const topSkills = (category: string) =>
  skillCourses
    .filter((c) => c.category === category)
    .sort((a, b) => b.learners - a.learners)
    .slice(0, 3);

/** Udemy-style menu: categories on the left, the hovered category's top courses on the right. */
function SkillsDropdown({ pathname }: { pathname: string }) {
  const { open, setOpen, containerRef, enter, leave } = useHoverMenu(pathname);
  const [category, setCategory] = useState(skillCategories[0].slug);
  const on = isActive(pathname, "/skills");
  const current = skillCategories.find((c) => c.slug === category)!;

  return (
    <div ref={containerRef} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <div className={cn("flex items-center rounded-lg transition-colors", on ? "bg-surface-2/80 text-fg" : "text-muted hover:bg-surface-2/60 hover:text-fg")}>
        <Link href="/skills" aria-current={on ? "page" : undefined} className="flex items-center gap-1.5 py-2 pl-3 text-sm font-medium">
          Skills
          <span className="rounded bg-brand px-1 py-px text-[9px] leading-tight font-bold text-brand-ink">NEW</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-label="Browse skill categories"
          className="py-2 pr-2.5 pl-1"
        >
          <ChevronDown className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")} aria-hidden />
        </button>
      </div>
      {on && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />}

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/3 pt-2">
          <div className="animate-mega-open flex w-[640px] overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/8">
            {/* Categories */}
            <ul className="w-56 shrink-0 border-r border-border bg-surface-2/40 p-2">
              {skillCategories.map((c) => {
                const Icon = skillIcons[topSkills(c.slug)[0]?.icon ?? "code"];
                const sel = c.slug === category;
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/skills?category=${c.slug}`}
                      onMouseEnter={() => setCategory(c.slug)}
                      onFocus={() => setCategory(c.slug)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                        sel ? "bg-surface text-fg shadow-sm" : "text-muted hover:text-fg",
                      )}
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                      <span className="flex-1 truncate">{c.name}</span>
                      <ChevronDown className={cn("size-3.5 -rotate-90 transition-opacity", sel ? "opacity-100" : "opacity-0")} aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Top courses in the hovered category */}
            <div className="flex min-w-0 flex-1 flex-col p-4">
              <p className="eyebrow">Popular in {current.name}</p>
              <p className="mt-0.5 mb-3 text-xs text-muted">{current.description}</p>
              <ul className="space-y-1">
                {topSkills(category).map((c) => {
                  const Icon = skillIcons[c.icon] ?? Award;
                  return (
                    <li key={c.slug}>
                      <Link href={`/skills/${c.slug}`} className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-surface-2">
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-muted group-hover:bg-brand group-hover:text-brand-ink">
                          <Icon className="size-[18px]" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold">{c.title.split(":")[0]}</span>
                          <span className="flex items-center gap-1 text-xs text-muted">
                            <span className="font-bold text-amber">{c.rating.toFixed(1)}</span> ★ · {c.level} · Free
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/skills"
                className="group mt-auto flex items-center justify-between rounded-xl bg-surface-2/70 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Browse all {skillCourses.length} skills
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ───────────── Main Navbar ───────────── */

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const user = useStore((s) => s.user);
  const hydrated = useHydrated();
  const scrolled = useScrolled();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const staff = user && user.role !== "student";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-bg/80 shadow-sm shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-bg/60 backdrop-blur-md",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-brand-ink">
        Skip to content
      </a>
      <div className="container-page relative flex h-16 items-center gap-4 animate-nav-slide-down">
        {/* Mobile hamburger */}
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

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="ml-6 hidden items-center gap-0.5 lg:flex">
          <TopLink pathname={pathname} {...programsLink} />
          {/* Qualifier Pack: same shape as other items, emphasised with weight and an accent icon */}
          <Link
            href={qualifierLink.href}
            aria-current={isActive(pathname, qualifierLink.href) ? "page" : undefined}
            className={cn(
              "relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-fg transition-colors",
              isActive(pathname, qualifierLink.href) ? "bg-surface-2/80" : "hover:bg-surface-2/60",
            )}
          >
            <Award className="size-4 text-amber" aria-hidden />
            {qualifierLink.label}
            {isActive(pathname, qualifierLink.href) && (
              <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />
            )}
          </Link>
          <SkillsDropdown pathname={pathname} />
          <NavDropdown pathname={pathname} group={resourcesGroup} />
          <TopLink pathname={pathname} {...practiceLink} />
        </nav>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1.5 max-lg:ml-0">
          <NavSearch />
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
                className="ml-1 hidden size-9 place-items-center rounded-full bg-gradient-to-br from-brand to-amber-500 text-sm font-bold text-brand-ink shadow-sm transition-shadow hover:shadow-md sm:grid"
                aria-label="Your dashboard"
              >
                {user.name.charAt(0).toUpperCase()}
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="group relative ml-1 hidden h-9 items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-brand via-yellow-400 to-brand bg-[length:200%_100%] px-4 text-sm font-semibold text-brand-ink shadow-sm transition-shadow hover:shadow-md sm:inline-flex"
              style={{ animation: "cta-shimmer 3s ease-in-out infinite" }}
            >
              <GraduationCap className="size-4" aria-hidden />
              Get Started
            </Link>
          )}
        </div>
      </div>

      {/* ───── Mobile drawer ───── */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close menu" />
          <div className="absolute inset-y-0 left-0 flex w-[min(320px,85vw)] flex-col bg-surface/95 p-4 shadow-2xl backdrop-blur-xl">
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

            {/* Mobile search */}
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const q = (fd.get("q") as string)?.trim();
                if (q) {
                  const router = window.location;
                  router.href = `/search?q=${encodeURIComponent(q)}`;
                }
              }}
              className="relative mb-4"
              style={{ animationDelay: "0ms", animation: "drawer-item 0.3s ease-out both" }}
            >
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
              <input
                name="q"
                type="search"
                placeholder="Search BTechi…"
                aria-label="Search"
                className="h-10 w-full rounded-xl border border-border bg-surface-2 pl-10 pr-3 text-sm outline-none placeholder:text-muted focus:border-fg/30 focus:bg-surface"
              />
            </form>

            <nav aria-label="Mobile" className="flex flex-col gap-4 overflow-y-auto">
              <Link
                href={qualifierLink.href}
                style={{ animation: "drawer-item 0.3s ease-out both" }}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3 transition-colors",
                  isActive(pathname, qualifierLink.href)
                    ? "border-brand bg-brand text-brand-ink"
                    : "border-brand/50 bg-brand/15 hover:bg-brand/25",
                )}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand text-brand-ink">
                  <Award className="size-[18px]" aria-hidden />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold">{qualifierLink.label}</span>
                  <span className="block text-xs opacity-75">{qualifierLink.description}</span>
                </span>
              </Link>
              {mobileGroups.map((group, g) => (
                <div
                  key={group.label}
                  style={{ animationDelay: `${(g + 1) * 50}ms`, animation: "drawer-item 0.3s ease-out both" }}
                >
                  <p className="px-3 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">{group.label}</p>
                  <div className="flex flex-col gap-0.5">
                    {group.items.map((item) => {
                      const on = isActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "rounded-xl px-3 py-2 text-[15px] font-medium transition-colors",
                            on ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                    {group.label === "You" && staff && (
                      <Link href="/admin" className="rounded-xl px-3 py-2 text-[15px] font-medium text-muted hover:bg-surface-2 hover:text-fg">
                        Admin CMS
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
              {hydrated && user ? (
                <span className="text-sm text-muted">Signed in as {user.name}</span>
              ) : (
                <Link href="/login" className={buttonClass("dark", "md")}>
                  Get Started
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

/* ───────────── Bottom Nav (phones) ───────────── */

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
