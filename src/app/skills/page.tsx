import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Award, Infinity as InfinityIcon, Route, Search, Star, Users } from "lucide-react";
import { FilterBar } from "@/components/filter-bar";
import { SkillCard, SkillThumb, Rating, SkillBadge, formatHours, skillIcons } from "@/components/skill-card";
import { Breadcrumbs, EmptyState, SectionHeader, buttonClass } from "@/components/ui";
import { getSkill, getSubject, skillCategories, skillCourses, skillPaths, skillStats, skillsInCategory } from "@/lib/content";
import { param } from "@/lib/filters";
import type { SkillCourse } from "@/lib/types";
import { accentStyles, cn, formatNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Skills",
  description: "Free, job-ready skill courses in Python, SQL, Excel, Power BI, statistics, machine learning and more, built around the IITM BS degree.",
  alternates: { canonical: "/skills" },
};

const LEVELS = ["Beginner", "Intermediate", "Advanced", "All levels"];
const SORTS = [
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Highest rated" },
  { value: "newest", label: "Newest" },
  { value: "short", label: "Shortest first" },
];

const sorters: Record<string, (a: SkillCourse, b: SkillCourse) => number> = {
  popular: (a, b) => b.learners - a.learners,
  rating: (a, b) => b.rating - a.rating || b.ratings - a.ratings,
  newest: (a, b) => b.updated.localeCompare(a.updated),
  short: (a, b) => skillStats(a).minutes - skillStats(b).minutes,
};

export default async function SkillsPage({ searchParams }: PageProps<"/skills">) {
  const sp = await searchParams;
  const category = param(sp, "category");
  const level = param(sp, "level");
  const sort = param(sp, "sort") ?? "popular";
  const q = param(sp, "q")?.trim().toLowerCase();

  const list = skillCourses
    .filter(
      (c) =>
        (!category || c.category === category) &&
        (!level || c.level === level) &&
        (!q || [c.title, c.subtitle, ...c.outcomes].some((t) => t.toLowerCase().includes(q))),
    )
    .sort(sorters[sort] ?? sorters.popular);

  const filtered = Boolean(category || level || q || param(sp, "sort"));
  const activeCategory = skillCategories.find((c) => c.slug === category);
  const learners = skillCourses.reduce((n, c) => n + c.learners, 0);
  const avgRating = skillCourses.reduce((n, c) => n + c.rating, 0) / skillCourses.length;
  const featured = [...skillCourses].sort(sorters.popular)[0];

  const filters = [
    { name: "level", label: "Level", options: LEVELS.map((l) => ({ value: l, label: l })) },
    { name: "sort", label: "Sort", options: SORTS },
  ];

  const tabHref = (slug?: string) => {
    const next = new URLSearchParams();
    if (slug) next.set("category", slug);
    if (level) next.set("level", level);
    if (param(sp, "sort")) next.set("sort", sort);
    if (q) next.set("q", q);
    return `/skills${next.size ? `?${next}` : ""}`;
  };

  return (
    <>
      {/* ───────── Hero ───────── */}
      <header className="relative isolate overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="grid-pattern absolute inset-0 -z-10 text-fg opacity-40" />
        <div
          aria-hidden
          className="absolute -top-40 -right-32 -z-10 size-[560px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--math-accent)_22%,transparent),transparent)]"
        />
        <div className="container-page grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-fade-up">
            <Breadcrumbs items={[{ label: "Skills" }]} />
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold">
              <span className="rounded bg-brand px-1.5 py-px text-[10px] font-bold text-brand-ink">NEW</span>
              BTechi Skills · 100% free
            </p>
            <h1 className="max-w-xl text-4xl leading-[1.08] font-extrabold tracking-tight md:text-5xl">
              Job-ready skills,{" "}
              <span className="relative whitespace-nowrap">
                <span className="absolute inset-x-[-0.1em] bottom-[-0.02em] -z-10 h-[0.24em] -rotate-1 rounded-sm bg-brand" />
                beyond the syllabus.
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Hands-on courses in Python, SQL, Excel, BI and AI, mapped to the degree courses you&apos;re already taking.
            </p>

            <form action="/skills" className="relative mt-7 max-w-lg">
              {category && <input type="hidden" name="category" value={category} />}
              <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" aria-hidden />
              <input
                name="q"
                type="search"
                defaultValue={param(sp, "q") ?? ""}
                placeholder="What do you want to learn?"
                aria-label="Search skills"
                className="h-13 w-full rounded-2xl border border-border bg-bg pr-28 pl-12 text-[15px] shadow-sm outline-none transition-colors placeholder:text-muted focus:border-fg/40"
              />
              <button type="submit" className={buttonClass("dark", "md", "absolute top-1/2 right-1.5 -translate-y-1/2")}>
                Search
              </button>
            </form>

            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4">
              {[
                { icon: Users, value: `${formatNumber(Math.round(learners / 1000))}k+`, label: "learners" },
                { icon: Star, value: avgRating.toFixed(1), label: "average rating" },
                { icon: Award, value: skillCourses.filter((c) => c.certificate).length, label: "with certificates" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <p className="flex items-center gap-1.5 text-2xl font-extrabold tracking-tight tabular-nums">
                      <s.icon className="size-4 text-muted" aria-hidden /> {s.value}
                    </p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Featured course spotlight */}
          <Link
            href={`/skills/${featured.slug}`}
            className="card card-hover group relative hidden overflow-hidden shadow-xl shadow-black/5 lg:block"
          >
            <SkillThumb course={featured} large />
            <div className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <SkillBadge badge={featured.badge} />
                <span className="text-xs font-semibold text-muted">Featured course</span>
              </div>
              <h2 className="text-lg leading-snug font-bold tracking-tight">{featured.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{featured.subtitle}</p>
              <div className="mt-3 flex items-center justify-between">
                <Rating course={featured} />
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  Start free <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* ───────── Category tabs + filters ───────── */}
      <div className="sticky top-16 z-30 border-b border-border bg-bg/85 backdrop-blur-xl">
        <div className="container-page flex flex-col gap-2 py-2.5 lg:flex-row lg:items-center">
          <nav aria-label="Skill categories" className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none]">
            {[{ slug: undefined, name: "All skills" }, ...skillCategories].map((c) => {
              const on = c.slug === category;
              return (
                <Link
                  key={c.name}
                  href={tabHref(c.slug)}
                  scroll={false}
                  aria-current={on ? "page" : undefined}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    on ? "border-fg bg-fg text-bg" : "border-border text-muted hover:border-fg/30 hover:text-fg",
                  )}
                >
                  {c.name}
                </Link>
              );
            })}
          </nav>
          <Suspense>
            <FilterBar filters={filters} className="lg:ml-auto lg:shrink-0" />
          </Suspense>
        </div>
      </div>

      <div className="container-page space-y-16 py-10 md:py-12">
        {filtered ? (
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                {q ? <>Results for &ldquo;{param(sp, "q")}&rdquo;</> : (activeCategory?.name ?? "All skills")}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {list.length} {list.length === 1 ? "course" : "courses"}
                {activeCategory && !q ? ` · ${activeCategory.description}` : ""}
              </p>
            </div>
            {list.length ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map((c) => (
                  <SkillCard key={c.slug} course={c} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={<Search className="size-6" />}
                title="No skills match that yet."
                description="Try a different search or category."
                action={
                  <Link href="/skills" className={buttonClass("secondary", "md")}>
                    Clear filters
                  </Link>
                }
              />
            )}
          </section>
        ) : (
          <>
            {/* Most popular */}
            <section>
              <SectionHeader eyebrow="Trending now" title="Most popular skills" description="What BTechi learners are enrolling in this month." />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {list.slice(0, 4).map((c, i) => (
                  <SkillCard key={c.slug} course={c} priority={i < 2} />
                ))}
              </div>
            </section>

            {/* Learning paths */}
            <section>
              <SectionHeader eyebrow="Career paths" title="Follow a learning path" description="A curated sequence of courses for a specific role." />
              <div className="grid gap-5 lg:grid-cols-3">
                {skillPaths.map((p) => {
                  const courses = p.courses.map(getSkill).filter((c): c is SkillCourse => Boolean(c));
                  const minutes = courses.reduce((n, c) => n + skillStats(c).minutes, 0);
                  const a = accentStyles[p.accent];
                  return (
                    <article key={p.slug} className="card relative flex flex-col overflow-hidden p-5">
                      <span className={cn("absolute inset-x-0 top-0 h-1", a.bar)} aria-hidden />
                      <div className="mb-4 flex items-center justify-between">
                        <span className={cn("grid size-11 place-items-center rounded-xl", a.soft, a.text)}>
                          <Route className="size-5" aria-hidden />
                        </span>
                        <span className="text-xs font-semibold text-muted">
                          {courses.length} courses · {formatHours(minutes)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted">{p.description}</p>
                      <ol className="mt-4 space-y-1">
                        {courses.map((c, i) => (
                          <li key={c.slug}>
                            <Link href={`/skills/${c.slug}`} className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-2">
                              <span className="grid size-6 shrink-0 place-items-center rounded-full border border-border text-[11px] font-bold text-muted group-hover:border-fg/30 group-hover:text-fg">
                                {i + 1}
                              </span>
                              <span className="truncate font-medium">{c.title.split(":")[0]}</span>
                              <span className="ml-auto shrink-0 text-xs text-muted">{formatHours(skillStats(c).minutes)}</span>
                            </Link>
                          </li>
                        ))}
                      </ol>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Browse by category */}
            <section>
              <SectionHeader title="Browse by category" />
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                {skillCategories.map((c) => {
                  const courses = skillsInCategory(c.slug);
                  const Icon = skillIcons[courses[0]?.icon ?? "code"];
                  const a = accentStyles[c.accent];
                  return (
                    <Link key={c.slug} href={tabHref(c.slug)} className="card card-hover group flex flex-col p-4">
                      <span className={cn("mb-4 grid size-10 place-items-center rounded-xl", a.soft, a.text)}>
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-semibold leading-tight">{c.name}</span>
                      <span className="mt-1 text-xs text-muted">{courses.length} courses</span>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Built around the degree */}
            <section className="card relative isolate overflow-hidden p-6 md:p-10">
              <div aria-hidden className="grid-pattern absolute inset-0 -z-10 text-fg opacity-30" />
              <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
                <div>
                  <p className="eyebrow mb-2">Unlike generic course sites</p>
                  <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Every skill maps to your degree.</h2>
                  <p className="mt-3 text-muted">
                    Each course lists the IITM BS courses it supports, so practising a skill doubles as exam prep, and every degree course links back to the
                    skills that help most.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {[
                      { icon: InfinityIcon, t: "Free forever, lifetime access" },
                      { icon: Award, t: "Certificate of completion" },
                      { icon: Route, t: "Hands-on projects for your portfolio" },
                    ].map((x) => (
                      <li key={x.t} className="flex items-center gap-2.5">
                        <x.icon className="size-4 text-muted" aria-hidden /> {x.t}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
                  {skillCourses.slice(0, 5).map((c) => (
                    <li key={c.slug} className="flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3">
                      <Link href={`/skills/${c.slug}`} className="min-w-0 flex-1 truncate text-sm font-semibold hover:underline">
                        {c.title.split(":")[0]}
                      </Link>
                      <span className="flex flex-wrap gap-1.5">
                        {c.relatedSubjects.slice(0, 2).map((slug) => {
                          const s = getSubject(slug);
                          return s ? (
                            <Link
                              key={slug}
                              href={`/subjects/${slug}`}
                              title={s.name}
                              className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] font-medium text-muted hover:text-fg"
                            >
                              {s.code ?? s.name}
                            </Link>
                          ) : null;
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* All skills */}
            <section>
              <SectionHeader title="All skills" description={`${skillCourses.length} courses and growing.`} />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map((c) => (
                  <SkillCard key={c.slug} course={c} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}
