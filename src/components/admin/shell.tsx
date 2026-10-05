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
import { useHydrated, useStore } from "@/lib/store";
import { buttonClass } from "../ui";
import { cn } from "@/lib/utils";

export const adminNav = [
  { group: "Overview", items: [{ href: "/admin", label: "Dashboard", icon: LayoutDashboard }, { href: "/admin/analytics", label: "Analytics", icon: BarChart3 }] },
  {
    group: "Content",
    items: [
      { href: "/admin/curriculum", label: "Curriculum builder", icon: GitBranch },
      { href: "/admin/upload", label: "Upload resource", icon: Upload },
      { href: "/admin/review", label: "Review queue", icon: Inbox },
      { href: "/admin/subjects", label: "Subjects", icon: Library },
      { href: "/admin/notes", label: "Notes", icon: FileText },
      { href: "/admin/videos", label: "Videos", icon: PlayCircle },
      { href: "/admin/books", label: "Books", icon: BookOpen },
      { href: "/admin/questions", label: "Questions", icon: PenLine },
      { href: "/admin/pyqs", label: "PYQs", icon: ScrollText },
    ],
  },
  {
    group: "People",
    items: [
      { href: "/admin/users", label: "Users & roles", icon: Users },
      { href: "/admin/reports", label: "Reports", icon: Flag },
      { href: "/admin/downloads", label: "Downloads", icon: Download },
      { href: "/admin/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const user = useStore((s) => s.user);
  const openReports = useStore((s) => s.reports.filter((r) => r.status === "open").length);
  const pending = useStore((s) => s.uploads.filter((u) => u.status === "pending").length);

  if (!hydrated) return <div className="container-page py-10"><div className="skeleton h-96" /></div>;

  // UI gate only. Real enforcement happens server-side (Supabase RLS + route
  // checks in proxy.ts) once the backend is connected; see README → Security.
  if (!user || user.role === "student")
    return (
      <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
        <div>
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-surface-2">
            <ShieldAlert className="size-6" aria-hidden />
          </span>
          <h1 className="mt-4 text-xl font-bold">Staff only</h1>
          <p className="mt-1 text-sm text-muted">The CMS is available to contributors, moderators and admins.</p>
          <Link href="/login?next=/admin" className={buttonClass("dark", "md", "mt-5")}>
            Log in as staff
          </Link>
        </div>
      </div>
    );

  const badge = (href: string) => (href === "/admin/reports" ? openReports : href === "/admin/review" ? pending : 0);

  return (
    <div className="container-page grid gap-8 py-6 lg:grid-cols-[230px_1fr]">
      <aside>
        <nav aria-label="Admin" className="flex gap-1 overflow-x-auto pb-2 lg:sticky lg:top-22 lg:flex-col lg:gap-5 lg:overflow-visible">
          {adminNav.map((g) => (
            <div key={g.group} className="contents lg:block">
              <p className="eyebrow mb-1.5 hidden px-2 lg:block">{g.group}</p>
              <ul className="contents lg:block lg:space-y-0.5">
                {g.items.map(({ href, label, icon: Icon }) => {
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
                        {n > 0 && <span className="ml-auto rounded-full bg-brand px-1.5 text-xs font-bold text-brand-ink">{n}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <div className="min-w-0">
        <p className="mb-6 rounded-xl border border-blue/30 bg-blue/5 px-4 py-2.5 text-sm">
          <strong>Demo CMS.</strong> Changes save to this browser only. Signed in as {user.name} ({user.role.replace("_", " ")}).
        </p>
        {children}
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
