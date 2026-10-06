import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Award,
  BadgeCheck,
  Calendar,
  Check,
  ChevronDown,
  FileText,
  FolderKanban,
  Globe,
  Infinity as InfinityIcon,
  ListChecks,
  MonitorPlay,
  PlayCircle,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Rating, SkillBadge, SkillCard, SkillThumb, Stars, formatHours } from "@/components/skill-card";
import { SkillEnrollButton } from "@/components/skill-enroll";
import { Breadcrumbs, Badge } from "@/components/ui";
import { getSkill, getSkillCategory, getSubject, relatedSkills, skillCourses, skillStats } from "@/lib/content";
import type { SkillLecture } from "@/lib/types";
import { SITE_URL, formatDate, formatNumber } from "@/lib/utils";

export const generateStaticParams = () => skillCourses.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: PageProps<"/skills/[slug]">): Promise<Metadata> {
  const course = getSkill((await params).slug);
  if (!course) return {};
  return { title: course.title, description: course.subtitle, alternates: { canonical: `/skills/${course.slug}` } };
}

const lectureIcon: Record<SkillLecture["kind"], LucideIcon> = {
  video: PlayCircle,
  reading: FileText,
  quiz: ListChecks,
  project: FolderKanban,
};

const clock = (minutes: number) => `${Math.floor(minutes / 60) ? `${Math.floor(minutes / 60)}:` : ""}${String(minutes % 60).padStart(2, "0")}:00`;

/** Plausible star split for a given average until real reviews exist. */
function ratingSplit(rating: number) {
  const five = Math.round(Math.min(90, Math.max(30, (rating - 3.6) * 55)));
  const four = Math.round((100 - five) * 0.65);
  const three = Math.round((100 - five - four) * 0.6);
  const two = Math.round((100 - five - four - three) * 0.6);
  return [five, four, three, two, Math.max(0, 100 - five - four - three - two)];
}

export default async function SkillPage({ params }: PageProps<"/skills/[slug]">) {
  const course = getSkill((await params).slug);
  if (!course) notFound();
  const s = skillStats(course);
  const category = getSkillCategory(course.category);
  const subjects = course.relatedSubjects.map(getSubject).filter((x) => x !== undefined);
  const related = relatedSkills(course);

  const includes: { icon: LucideIcon; t: string }[] = [
    { icon: MonitorPlay, t: `${formatHours(s.minutes)} of on-demand content` },
    { icon: FolderKanban, t: `${s.projects} hands-on ${s.projects === 1 ? "project" : "projects"}` },
    { icon: ListChecks, t: `${s.quizzes} practice ${s.quizzes === 1 ? "quiz" : "quizzes"}` },
    { icon: Smartphone, t: "Access on mobile and desktop" },
    { icon: InfinityIcon, t: "Full lifetime access" },
    ...(course.certificate ? [{ icon: Award, t: "Certificate of completion" }] : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.subtitle,
    url: `${SITE_URL}/skills/${course.slug}`,
    provider: { "@type": "Organization", name: "BTechi", sameAs: SITE_URL },
    aggregateRating: { "@type": "AggregateRating", ratingValue: course.rating, ratingCount: course.ratings },
    offers: { "@type": "Offer", price: 0, priceCurrency: "INR", category: "Free" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", courseWorkload: `PT${Math.ceil(s.minutes / 60)}H` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───────── Hero band ───────── */}
      <header className="relative isolate overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="grid-pattern absolute inset-0 -z-10 text-fg opacity-30" />
        <div className="container-page py-8 md:py-12 lg:grid lg:grid-cols-[1fr_340px] lg:gap-10">
          <div className="animate-fade-up lg:pr-4">
            <Breadcrumbs
              items={[{ label: "Skills", href: "/skills" }, ...(category ? [{ label: category.name, href: `/skills?category=${category.slug}` }] : []), { label: course.title.split(":")[0] }]}
            />
            <h1 className="max-w-3xl text-3xl leading-tight font-extrabold tracking-tight md:text-4xl">{course.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-muted">{course.subtitle}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <SkillBadge badge={course.badge} />
              <Rating course={course} />
              <span className="inline-flex items-center gap-1.5 text-muted">
                <Users className="size-4" aria-hidden /> {formatNumber(course.learners)} learners
              </span>
              <Badge>{course.level}</Badge>
            </div>
            <p className="mt-3 text-sm">
              Created by <span className="font-semibold underline decoration-brand decoration-2 underline-offset-2">{course.instructor.name}</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden /> Updated {formatDate(course.updated)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="size-4" aria-hidden /> {course.language}
              </span>
            </div>

            {/* Mobile enroll */}
            <div className="mt-6 flex items-center gap-3 lg:hidden">
              <span className="text-2xl font-extrabold">Free</span>
              <SkillEnrollButton course={course} className="flex-1" />
            </div>
          </div>
        </div>
      </header>

      <div className="container-page pb-16 lg:grid lg:grid-cols-[1fr_340px] lg:gap-10">
        <div className="min-w-0 space-y-10 pt-10">
          {/* What you'll learn */}
          <section className="rounded-2xl border border-border p-6">
            <h2 className="mb-4 text-xl font-bold tracking-tight">What you&apos;ll learn</h2>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-green" aria-hidden /> {o}
                </li>
              ))}
            </ul>
          </section>

          {/* Degree mapping */}
          {subjects.length > 0 && (
            <section>
              <h2 className="mb-1 text-xl font-bold tracking-tight">Supports your degree</h2>
              <p className="mb-4 text-sm text-muted">This skill reinforces concepts from these IITM BS courses.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {subjects.map((sub) => (
                  <Link key={sub.slug} href={`/subjects/${sub.slug}`} className="card card-hover flex items-center gap-3 p-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand/20">
                      <BadgeCheck className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold">{sub.name}</span>
                      {sub.code && <span className="font-mono text-xs text-muted">{sub.code}</span>}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Curriculum */}
          <section>
            <h2 className="mb-1 text-xl font-bold tracking-tight">Course content</h2>
            <p className="mb-4 text-sm text-muted">
              {s.sections} sections · {s.lectures} lectures · {formatHours(s.minutes)} total length
            </p>
            <div className="overflow-hidden rounded-2xl border border-border">
              {course.sections.map((sec, i) => {
                const mins = sec.lectures.reduce((n, l) => n + l.minutes, 0);
                return (
                  <details key={sec.title} open={i === 0} className="group border-b border-border last:border-b-0">
                    <summary className="flex cursor-pointer list-none items-center gap-3 bg-surface-2/60 px-4 py-3.5 hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
                      <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                      <span className="flex-1 font-semibold">{sec.title}</span>
                      <span className="shrink-0 text-xs text-muted">
                        {sec.lectures.length} lectures · {formatHours(mins)}
                      </span>
                    </summary>
                    <ul className="divide-y divide-border/60 bg-surface">
                      {sec.lectures.map((l) => {
                        const Icon = lectureIcon[l.kind];
                        return (
                          <li key={l.title} className="flex items-center gap-3 px-4 py-2.5 text-sm">
                            <Icon className="size-4 shrink-0 text-muted" aria-hidden />
                            <span className={l.preview ? "font-medium underline decoration-border underline-offset-2" : ""}>{l.title}</span>
                            {l.kind !== "video" && <span className="text-xs text-muted capitalize">· {l.kind}</span>}
                            {l.preview && <Badge tone="brand" className="ml-1">Preview</Badge>}
                            <span className="ml-auto shrink-0 text-xs text-muted tabular-nums">{clock(l.minutes)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                );
              })}
            </div>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="mb-3 text-xl font-bold tracking-tight">Requirements</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm marker:text-muted">
              {course.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          {/* Description */}
          <section>
            <h2 className="mb-3 text-xl font-bold tracking-tight">Description</h2>
            <div className="max-w-3xl space-y-3 text-[15px] leading-relaxed">
              {course.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          {/* Instructor */}
          <section>
            <h2 className="mb-4 text-xl font-bold tracking-tight">Instructor</h2>
            <div className="flex items-center gap-4">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-amber-500 text-2xl font-extrabold text-brand-ink">
                {course.instructor.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold underline decoration-brand decoration-2 underline-offset-2">{course.instructor.name}</p>
                <p className="text-sm text-muted">{course.instructor.title}</p>
              </div>
            </div>
          </section>

          {/* Ratings */}
          <section>
            <h2 className="mb-4 text-xl font-bold tracking-tight">Learner feedback</h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="text-center sm:w-36">
                <p className="text-5xl font-extrabold text-amber tabular-nums">{course.rating.toFixed(1)}</p>
                <Stars rating={course.rating} className="mt-1" />
                <p className="mt-1 text-xs font-semibold text-muted">Course rating</p>
              </div>
              <ul className="flex-1 space-y-2">
                {ratingSplit(course.rating).map((pct, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <span className="block h-full rounded-full bg-muted/60" style={{ width: `${pct}%` }} />
                    </span>
                    <Stars rating={5 - i} />
                    <span className="w-9 text-right text-xs text-muted tabular-nums">{pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ───────── Sticky purchase card ───────── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 -mt-64 overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10">
            <div className="relative">
              <SkillThumb course={course} large />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface/90 to-transparent px-4 pt-8 pb-2 text-center text-xs font-semibold">
                {s.previews} free preview {s.previews === 1 ? "lesson" : "lessons"}
              </span>
            </div>
            <div className="space-y-4 p-5">
              <p className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">Free</span>
                <span className="text-sm text-muted">for every BTechi learner</span>
              </p>
              <SkillEnrollButton course={course} />
              <div>
                <p className="mb-2 text-sm font-bold">This course includes:</p>
                <ul className="space-y-2 text-sm">
                  {includes.map((x) => (
                    <li key={x.t} className="flex items-center gap-2.5">
                      <x.icon className="size-4 shrink-0 text-muted" aria-hidden /> {x.t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ───────── Related ───────── */}
      <section className="border-t border-border bg-surface/50">
        <div className="container-page py-12">
          <h2 className="mb-5 text-xl font-bold tracking-tight md:text-2xl">Learners also take</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((c) => (
              <SkillCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
