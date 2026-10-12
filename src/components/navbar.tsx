"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  ChevronDown,
  Compass,
  FileText,
  Home,
  LayoutDashboard,
  Newspaper,
  PenLine,
  PlayCircle,
  ScrollText,
  Search,
  Shield,
  User,
  GraduationCap,
  type LucideIcon,
  Star,
} from "lucide-react";
import { Logo } from "./logo";
import { skillIcons } from "./skill-icons";
import { ThemeToggle } from "./theme-toggle";
import { openStudySetup } from "./study-setup";
import { skillCategories, skillCourses } from "@/lib/data/skills";
import { getStudyCourse } from "@/lib/study-courses";
import { hrefEnabled, sectionEnabled } from "@/lib/site";
import { useHydrated, useStore } from "@/lib/store";
import { cn, isAuthPage } from "@/lib/utils";

/* ───────────── Navigation data ───────────── */

type NavLink = { href: string; label: string };
type NavItem = NavLink & { description: string; icon: LucideIcon };

/** Top-level links, in order. The Skills menu (when that section is on) follows Programs; Resources closes the row. */
const primaryLinks: NavLink[] = [
  { href: "/programs", label: "Programs" },
  { href: "/practice", label: "Practice" },
  { href: "/exam", label: "Exam Portal" },
  { href: "/qualifier", label: "Qualifier Pack" },
].filter((l) => hrefEnabled(l.href));

const resources: NavItem[] = ([
  { href: "/notes", label: "Notes", description: "Lecture notes and revision sheets", icon: FileText },
  { href: "/videos", label: "Videos", description: "Topic-mapped video lessons", icon: PlayCircle },
  { href: "/books", label: "Books", description: "Recommended texts", icon: BookOpen },
  { href: "/blog", label: "Blog", description: "Guides on the IITM BS, exams and careers", icon: Newspaper },
] satisfies NavItem[]).filter((i) => hrefEnabled(i.href));

const accountLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/saved", label: "Saved" },
  { href: "/profile", label: "Study profile" },
];

const isActive = (pathname: string, href: string) => {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  // Past papers have no menu link of their own; they belong to Practice.
  if (path === "/practice" && (pathname === "/pyqs" || pathname.startsWith("/pyqs/"))) return true;
  if (path === "/practice" && pathname.startsWith("/practice/exam")) return false;
  // Combined timed mock exam
  if (path === "/exam" && (pathname === "/exam" || pathname.startsWith("/practice/exam"))) return true;
  return pathname === path || pathname.startsWith(path + "/");
};

/* ───────────── Hooks ───────────── */

function useScrolled(threshold = 4) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);
  return scrolled;
}

/** Open on hover (with a short grace period), toggle on click; close on route change, outside click or Escape. */
function useMenu(pathname: string) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  const enter = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), 60);
  };
  const leave = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return { open, setOpen, ref, enter, leave };
}

/* ───────────── Desktop pieces ───────────── */

const linkClass = (on: boolean) =>
  cn(
    "relative rounded-md px-3 py-1.5 text-sm transition-colors duration-150",
    on ? "font-semibold text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
  );

function TopLink({ pathname, href, label }: NavLink & { pathname: string }) {
  const on = isActive(pathname, href);
  return (
    <Link href={href} aria-current={on ? "page" : undefined} className={linkClass(on)}>
      <span>{label}</span>
      {on && (
        <span
          className="absolute inset-x-2.5 -bottom-1 h-[2.5px] rounded-full bg-brand shadow-xs"
          aria-hidden
        />
      )}
    </Link>
  );
}

function MenuTrigger({ label, on, open, onClick }: { label: string; on: boolean; open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-haspopup="true"
      className={cn(linkClass(on), "flex items-center gap-1", open && "bg-surface-2 text-fg")}
    >
      <span>{label}</span>
      <ChevronDown className={cn("size-3.5 opacity-60 transition-transform duration-200", open && "rotate-180")} aria-hidden />
      {on && (
        <span
          className="absolute inset-x-2.5 -bottom-1 h-[2.5px] rounded-full bg-brand shadow-xs"
          aria-hidden
        />
      )}
    </button>
  );
}

const panelClass = "animate-menu-in rounded-xl border border-border bg-surface shadow-[0_16px_48px_-12px_rgb(0_0_0/0.18)]";

function ResourcesMenu({ pathname }: { pathname: string }) {
  const { open, setOpen, ref, enter, leave } = useMenu(pathname);
  const on = resources.some((r) => isActive(pathname, r.href));
  if (resources.length === 0) return null;

  return (
    <div ref={ref} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <MenuTrigger label="Resources" on={on} open={open} onClick={() => setOpen((p) => !p)} />
      {open && (
        <div className="absolute top-full left-0 z-50 pt-2">
          <div className={cn(panelClass, "grid w-[460px] grid-cols-2 gap-0.5 p-1.5")}>
            {resources.map(({ href, label, description, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex gap-3 rounded-lg p-2.5 transition-colors duration-150 hover:bg-surface-2"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-md border border-border bg-bg text-muted transition-colors group-hover:text-fg">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block text-xs leading-snug text-muted">{description}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const topSkills = (category: string) =>
  skillCourses
    .filter((c) => c.category === category)
    .sort((a, b) => b.learners - a.learners)
    .slice(0, 3);

/** Categories on the left, the hovered category's top courses on the right. */
function SkillsMenu({ pathname }: { pathname: string }) {
  const { open, setOpen, ref, enter, leave } = useMenu(pathname);
  const [category, setCategory] = useState(skillCategories[0].slug);
  const current = skillCategories.find((c) => c.slug === category)!;

  return (
    <div ref={ref} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <MenuTrigger label="Skills" on={isActive(pathname, "/skills")} open={open} onClick={() => setOpen((p) => !p)} />
      {open && (
        <div className="absolute top-full left-0 z-50 pt-2">
          <div className={cn(panelClass, "flex w-[600px] overflow-hidden")}>
            <ul className="w-52 shrink-0 border-r border-border p-1.5">
              {skillCategories.map((c) => {
                const Icon = skillIcons[topSkills(c.slug)[0]?.icon ?? "code"];
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/skills?category=${c.slug}`}
                      onMouseEnter={() => setCategory(c.slug)}
                      onFocus={() => setCategory(c.slug)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors duration-150",
                        c.slug === category ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                      <span className="truncate">{c.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex min-w-0 flex-1 flex-col p-3">
              <p className="px-2 pt-1 text-xs font-medium text-muted">Popular in {current.name}</p>
              <ul className="mt-2 space-y-0.5">
                {topSkills(category).map((c) => {
                  const Icon = skillIcons[c.icon] ?? Award;
                  return (
                    <li key={c.slug}>
                      <Link href={`/skills/${c.slug}`} className="flex items-center gap-3 rounded-lg p-2 transition-colors duration-150 hover:bg-surface-2">
                        <span className="grid size-8 shrink-0 place-items-center rounded-md border border-border bg-bg text-muted">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium">{c.title.split(":")[0]}</span>
                          <span className="block text-xs text-muted">
                            <span className="inline-flex items-center gap-0.5">{c.rating.toFixed(1)} <Star className="size-3 fill-current" aria-hidden /></span> · {c.level} · Free
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/skills" className="group mt-auto flex items-center gap-1 px-2 pt-3 text-sm font-medium text-muted hover:text-fg">
                All {skillCourses.length} skills
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SearchButton() {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        router.push("/search");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);
  return (
    <Link
      href="/search"
      className="hidden h-8 items-center gap-2 rounded-md border border-border bg-surface px-2.5 text-sm text-muted transition-colors hover:border-fg/20 hover:text-fg lg:flex"
    >
      <Search className="size-3.5" aria-hidden />
      Search
      <kbd className="ml-3 rounded border border-border bg-surface-2 px-1 font-sans text-[10px]">⌘K</kbd>
    </Link>
  );
}

/** Two lines that turn into a cross. */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-4" aria-hidden>
      <span className={cn("absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition-all duration-200", open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5")} />
      <span className={cn("absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition-all duration-200", open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5")} />
    </span>
  );
}

/* ───────────── Mobile menu ───────────── */

function MobileMenu({
  pathname,
  signedIn,
  staff,
  onClose,
}: {
  pathname: string;
  signedIn: boolean;
  staff: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = (new FormData(e.currentTarget).get("q") as string)?.trim();
    if (q) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };
  const row = (href: string, label: string) => {
    const on = isActive(pathname, href);
    return (
      <Link
        key={href}
        href={href}
        onClick={onClose}
        aria-current={on ? "page" : undefined}
        className={cn(
          "flex items-center justify-between border-b border-border py-3.5 text-[15px] transition-colors",
          on ? "font-semibold text-fg" : "text-fg/80 hover:text-fg",
        )}
      >
        <span>{label}</span>
        {on && (
          <span className="rounded-full border border-brand/40 bg-brand/15 px-2 py-0.5 text-xs font-semibold text-fg">
            Current
          </span>
        )}
      </Link>
    );
  };

  return createPortal(
    // Below the 64px header, which stays on top so its menu button can close this.
    <div className="fixed inset-x-0 top-16 bottom-0 z-40 animate-menu-in overflow-y-auto bg-bg lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="container-page flex min-h-full flex-col pt-3 pb-24">
        <div className="mb-3">
          <MyCoursesNavButton mobile onAction={onClose} />
        </div>
        {!signedIn && (
          <div className="mb-3">
            <Link
              href="/login"
              onClick={onClose}
              className="flex h-10 w-full items-center justify-center rounded-xl border border-border bg-surface text-sm font-medium text-fg hover:bg-surface-2 transition-colors"
            >
              Log in / Sign up
            </Link>
          </div>
        )}
        {sectionEnabled("search") && (
          <form role="search" onSubmit={search} className="relative my-2">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input
              name="q"
              type="search"
              placeholder="Search BTechi"
              aria-label="Search"
              className="h-10 w-full rounded-md border border-border bg-surface pr-3 pl-9 text-sm outline-none placeholder:text-muted focus:border-fg/30"
            />
          </form>
        )}
        <nav aria-label="Mobile">
          {primaryLinks.map((l) => row(l.href, l.label))}
          {sectionEnabled("skills") && row("/skills", "Skills")}
          <p className="pt-6 pb-1 text-xs font-medium text-muted">Resources</p>
          {resources.map((r) => row(r.href, r.label))}
          {signedIn && (
            <>
              <p className="pt-6 pb-1 text-xs font-medium text-muted">Account</p>
              {accountLinks.map((l) => row(l.href, l.label))}
              {staff && row("/admin", "Admin")}
            </>
          )}
        </nav>
        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm text-muted">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ───────────── Quick Term Courses Button ───────────── */

function MyCoursesNavButton({ mobile, onAction }: { mobile?: boolean; onAction?: () => void }) {
  const hydrated = useHydrated();
  const plan = useStore((s) => s.plan);
  const count = plan?.subjects?.length ?? 0;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen]);

  if (!hydrated) {
    return (
      <div className={cn("rounded-md bg-surface-2 animate-pulse", mobile ? "h-11 w-full rounded-xl" : "h-8 w-32")} />
    );
  }

  const handleEditClick = () => {
    setDropdownOpen(false);
    onAction?.();
    openStudySetup();
  };

  if (mobile) {
    return (
      <button
        type="button"
        onClick={handleEditClick}
        className={cn(
          "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors cursor-pointer",
          count > 0
            ? "border border-border bg-surface text-fg hover:bg-surface-2"
            : "bg-fg text-bg hover:opacity-90 shadow-xs",
        )}
      >
        <span className="flex items-center gap-2.5">
          <GraduationCap className="size-4.5" aria-hidden />
          <span>{count > 0 ? `My Courses (${count})` : "Set My Courses"}</span>
        </span>
        <span
          className={cn(
            "rounded px-2 py-0.5 text-xs font-medium",
            count > 0 ? "bg-surface-2 border border-border text-muted" : "bg-bg/20 text-bg",
          )}
        >
          {count > 0 ? "Edit" : "Set up"}
        </span>
      </button>
    );
  }

  if (count > 0) {
    const subjects = plan?.subjects ?? [];
    return (
      <div className="relative" ref={popoverRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          className={cn(
            "h-8 inline-flex items-center gap-1.5 rounded-lg border px-2.5 sm:px-3 text-xs font-semibold transition-all cursor-pointer shadow-2xs",
            dropdownOpen
              ? "border-fg/40 bg-surface-3 text-fg ring-2 ring-brand/20"
              : "border-border bg-surface-2 text-fg hover:border-fg/30 hover:bg-surface-3",
          )}
          title={`Enrolled in ${count} courses. Click to view or edit.`}
          aria-expanded={dropdownOpen}
        >
          <GraduationCap className="size-3.5 text-brand" aria-hidden />
          <span>{count} {count === 1 ? "Course" : "Courses"}</span>
          <ChevronDown
            className={cn("size-3 text-muted transition-transform duration-200", dropdownOpen && "rotate-180")}
            aria-hidden
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-2 z-50 w-80 rounded-2xl border border-border bg-surface p-4 shadow-xl ring-1 ring-black/5 animate-fade-in backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-lg bg-brand/20 text-brand-ink">
                  <GraduationCap className="size-4 text-fg" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold text-fg">My Study Profile</p>
                  <p className="text-[11px] text-muted">{count} active {count === 1 ? "course" : "courses"}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleEditClick}
                className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] font-semibold text-fg hover:border-fg/40 hover:bg-surface-3 transition-colors"
              >
                Change
              </button>
            </div>

            <div className="my-3 max-h-56 divide-y divide-border/60 overflow-y-auto pr-1">
              {subjects.map((slug) => {
                const course = getStudyCourse(slug);
                return (
                  <div key={slug} className="flex items-center justify-between py-2 text-xs">
                    <div className="min-w-0 pr-2">
                      <p className="truncate font-medium text-fg">{course?.name ?? slug}</p>
                      {course?.code && <p className="text-[10px] text-muted font-mono">{course.code}</p>}
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <Link
                        href={`/practice?course=${slug}`}
                        onClick={() => setDropdownOpen(false)}
                        className="rounded px-1.5 py-0.5 text-[10px] font-semibold text-muted hover:bg-surface-2 hover:text-fg transition-colors"
                      >
                        Practice
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border pt-3">
              <button
                type="button"
                onClick={handleEditClick}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-fg py-2 text-xs font-semibold text-bg hover:opacity-90 transition-opacity"
              >
                <span>Edit enrolled courses</span>
                <ArrowRight className="size-3.5" aria-hidden />
              </button>
              <p className="mt-2 text-center text-[10px] text-muted">
                Filters Practice, Exam Portal and Notes to your courses.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleEditClick}
      className="h-8 inline-flex items-center gap-1.5 rounded-lg bg-fg px-3 text-xs font-semibold text-bg transition-opacity hover:opacity-85 cursor-pointer shadow-xs"
      title="Set up your enrolled term courses"
    >
      <span className="size-1.5 rounded-full bg-brand animate-pulse" />
      <GraduationCap className="size-3.5" aria-hidden />
      <span>Set My Courses</span>
    </button>
  );
}

/* ───────────── Main Navbar ───────────── */

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useStore((s) => s.user);
  const hydrated = useHydrated();
  const scrolled = useScrolled();
  const signedIn = Boolean(hydrated && user);
  const staff = Boolean(user && user.role !== "student");

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[border-color,background-color] duration-200",
        menuOpen
          ? "border-border bg-bg"
          : scrolled
            ? "border-border bg-bg/80 backdrop-blur-lg backdrop-saturate-150"
            : "border-transparent bg-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((l) => (
            <Fragment key={l.href}>
              <TopLink pathname={pathname} {...l} />
              {l.href === "/programs" && sectionEnabled("skills") && <SkillsMenu pathname={pathname} />}
            </Fragment>
          ))}
          <ResourcesMenu pathname={pathname} />
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {sectionEnabled("search") && <SearchButton />}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          {signedIn ? (
            <>
              {staff && (
                <Link href="/admin" className="hidden h-8 items-center gap-1.5 rounded-md px-2.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg lg:flex">
                  <Shield className="size-3.5" aria-hidden /> Admin
                </Link>
              )}
              <MyCoursesNavButton />
              <Link
                href="/dashboard"
                aria-label="Your dashboard"
                title={user!.name}
                className="grid size-8 place-items-center rounded-full border border-border bg-surface-2 text-xs font-semibold transition-colors hover:border-fg/30"
              >
                {user!.name.charAt(0).toUpperCase()}
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden h-8 items-center rounded-md px-2.5 text-sm text-muted transition-colors hover:text-fg sm:flex">
                Log in
              </Link>
              <MyCoursesNavButton />
            </>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="-mr-1.5 grid size-9 place-items-center rounded-md text-fg transition-colors hover:bg-surface-2 lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu pathname={pathname} signedIn={signedIn} staff={staff} onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

/* ───────────── Bottom Nav (phones) ───────────── */

/** App-style bottom navigation for phones (PRD §37). */
export function BottomNav() {
  const pathname = usePathname();
  const user = useStore((s) => s.user);
  const hydrated = useHydrated();
  // Auth pages are full-screen; the bar would cover their submit buttons.
  if (pathname.startsWith("/admin") || isAuthPage(pathname)) return null;
  const items = [
    { href: "/", label: "Home", icon: Home },
    sectionEnabled("programs")
      ? { href: "/programs", label: "Explore", icon: Compass }
      : { href: "/qualifier", label: "Qualifier", icon: Award },
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
            (label === "Profile" && (pathname.startsWith("/dashboard") || pathname.startsWith("/profile")));
          return (
            <li key={label}>
              <Link
                href={href}
                aria-current={on ? "page" : undefined}
                className={cn("flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium", on ? "text-fg" : "text-muted")}
              >
                <span
                  className={cn(
                    "grid h-7 w-12 place-items-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-90",
                    on ? "bg-brand text-brand-ink" : "scale-90",
                  )}
                >
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
