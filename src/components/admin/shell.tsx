"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Download,
  FileText,
  Flag,
  GitBranch,
  Inbox,
  LayoutDashboard,
  Library,
  PenLine,
  PlayCircle,
  ScrollText,
  Settings,
  ShieldAlert,
  Upload,
  Users,
} from "lucide-react";
import { ROLE_LABEL, atLeast } from "@/lib/admin";
import type { Role } from "@/lib/store";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { buttonClass } from "../ui";
import { StaffProvider, useAdminQuery, useStaff, useStaffState } from "./staff";

type NavItem = { href: string; label: string; icon: typeof LayoutDashboard; min: Role };

export const adminNav: { group: string; items: NavItem[] }[] = [
  {
    group: "Overview",
    items: [
      { href: "/admin", label: "Dashboard", icon: LayoutDashboard, min: "contributor" },
      { href: "/admin/analytics", label: "Analytics", icon: BarChart3, min: "moderator" },
    ],
  },
  {
    group: "Content",
    items: [
      { href: "/admin/curriculum", label: "Curriculum builder", icon: GitBranch, min: "moderator" },
      { href: "/admin/upload", label: "Upload resource", icon: Upload, min: "contributor" },
      { href: "/admin/review", label: "Review queue", icon: Inbox, min: "contributor" },
      { href: "/admin/subjects", label: "Courses", icon: Library, min: "contributor" },
      { href: "/admin/notes", label: "Notes", icon: FileText, min: "contributor" },
      { href: "/admin/videos", label: "Videos", icon: PlayCircle, min: "contributor" },
      { href: "/admin/books", label: "Books", icon: BookOpen, min: "contributor" },
      { href: "/admin/questions", label: "Questions", icon: PenLine, min: "contributor" },
      { href: "/admin/papers", label: "Papers", icon: ScrollText, min: "moderator" },
    ],
  },
  {
    group: "People",
    items: [
      { href: "/admin/users", label: "Users & roles", icon: Users, min: "admin" },
      { href: "/admin/reports", label: "Reports", icon: Flag, min: "moderator" },
      { href: "/admin/downloads", label: "Downloads", icon: Download, min: "admin" },
      { href: "/admin/settings", label: "Settings", icon: Settings, min: "admin" },
    ],
  },
];

/** The lowest role that may open an admin path (for the page-level gate). */
export const minRoleFor = (pathname: string): Role =>
  adminNav
    .flatMap((g) => g.items)
    .filter((i) => (i.href === "/admin" ? pathname === "/admin" : pathname.startsWith(i.href)))
    .sort((a, b) => b.href.length - a.href.length)[0]?.min ?? "contributor";

function Gate({ title, body, action }: { title: string; body: string; action?: React.ReactNode }) {
  return (
    <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-surface-2">
          <ShieldAlert className="size-6" aria-hidden />
        </span>
        <h1 className="mt-4 text-xl font-bold">{title}</h1>
        <p className="mt-1 max-w-sm text-sm text-muted">{body}</p>
        {action}
      </div>
    </div>
  );
}

/**
 * Admin frame. The role is read from Supabase; what each role may see or do
 * is enforced by Row Level Security and the server actions, so this gate only
 * decides what to show.
 */
export function AdminShell({ children }: { children: React.ReactNode }) {
  const state = useStaffState();

  if (state.status === "loading") return <div className="container-page py-10"><div className="skeleton h-96" /></div>;
  if (state.status === "signed-out")
    return (
      <Gate
        title="Staff only"
        body="Log in with a contributor, moderator or admin account to open the CMS."
        action={
          <Link href="/login?next=/admin" className={buttonClass("dark", "md", "mt-5")}>
            Log in
          </Link>
        }
      />
    );
  if (state.status === "student")
    return <Gate title="Staff only" body={`${state.name}, your account is a student account. Ask an admin to give you a staff role.`} />;
  if (state.status === "error")
    return (
      <Gate
        title="Couldn't check your access"
        body={state.message}
        action={
          <button type="button" onClick={() => window.location.reload()} className={buttonClass("secondary", "md", "mt-5")}>
            Try again
          </button>
        }
      />
    );

  return (
    <StaffProvider staff={state.staff}>
      <Frame>{children}</Frame>
    </StaffProvider>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const staff = useStaff();
  const moderator = atLeast(staff.role, "moderator");
  const counts = useAdminQuery(async () => {
    const head = { count: "exact" as const, head: true };
    const [reports, resources, questions] = await Promise.all([
      moderator ? supabase.from("reports").select("id", head).eq("status", "open") : { count: 0 },
      // Moderators see everyone's pending items; contributors see their own that need changes.
      supabase.from("resources").select("id", head).eq("status", moderator ? "pending" : "rejected"),
      supabase.from("questions").select("id", head).eq("status", moderator ? "pending" : "rejected"),
    ]);
    return { data: { reports: reports.count ?? 0, review: (resources.count ?? 0) + (questions.count ?? 0) }, error: null };
  }, [moderator]);

  const badge = (href: string) => (href === "/admin/reports" ? counts.data?.reports : href === "/admin/review" ? counts.data?.review : 0) ?? 0;
  const allowed = atLeast(staff.role, minRoleFor(pathname));

  return (
    <div className="container-page grid gap-8 py-6 lg:grid-cols-[230px_1fr]">
      <aside className="min-w-0">
        <nav aria-label="Admin" className="flex gap-1 overflow-x-auto pb-2 lg:sticky lg:top-22 lg:flex-col lg:gap-5 lg:overflow-visible">
          {adminNav.map((g) => {
            const items = g.items.filter((i) => atLeast(staff.role, i.min));
            if (!items.length) return null;
            return (
              <div key={g.group} className="contents lg:block">
                <p className="eyebrow mb-1.5 hidden px-2 lg:block">{g.group}</p>
                <ul className="contents lg:block lg:space-y-0.5">
                  {items.map(({ href, label, icon: Icon }) => {
                    const on = href === "/admin" ? pathname === href : pathname.startsWith(href);
                    const n = badge(href);
                    return (
                      <li key={href} className="shrink-0">
                        <Link
                          href={href}
                          aria-current={on ? "page" : undefined}
                          className={cn(
                            "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium whitespace-nowrap",
                            on ? "bg-surface text-fg shadow-[inset_3px_0_0_var(--brand)]" : "text-muted hover:text-fg",
                          )}
                        >
                          <Icon className="size-4" aria-hidden />
                          {label}
                          {n > 0 && (
                            <span className="ml-auto rounded-full bg-brand px-1.5 text-xs font-bold text-brand-ink" aria-label={`${n} waiting`}>
                              {n}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <p className="hidden px-2 text-xs text-muted lg:block">
            Signed in as <span className="font-medium text-fg">{staff.name}</span>
            <br />
            {ROLE_LABEL[staff.role]}
          </p>
        </nav>
      </aside>
      <div className="min-w-0">
        {allowed ? (
          children
        ) : (
          <div className="card px-6 py-12 text-center">
            <p className="font-semibold">This page is for {ROLE_LABEL[minRoleFor(pathname)].toLowerCase()}s and above.</p>
            <p className="mt-1 text-sm text-muted">You&apos;re signed in as a {ROLE_LABEL[staff.role].toLowerCase()}.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
