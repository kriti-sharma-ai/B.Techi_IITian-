import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, GraduationCap, ListTree, PenLine, PlayCircle, ScrollText, SearchX } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { EmptyState } from "@/components/ui";
import { param } from "@/lib/filters";
import { categoryLabels, search, type SearchCategory, type SearchDoc } from "@/lib/search";
import { cn } from "@/lib/utils";

export async function generateMetadata({ searchParams }: PageProps<"/search">): Promise<Metadata> {
  const q = param(await searchParams, "q");
  return { title: q ? `“${q}” search results` : "Search", robots: { index: false } };
}

const ORDER: SearchCategory[] = ["subjects", "topics", "notes", "videos", "books", "questions", "pyqs"];
const icons: Record<SearchCategory, typeof FileText> = {
  subjects: GraduationCap,
  topics: ListTree,
  notes: FileText,
  videos: PlayCircle,
  books: BookOpen,
  questions: PenLine,
  pyqs: ScrollText,
};
const tones: Record<SearchCategory, string> = {
  subjects: "bg-brand/25 text-fg",
  topics: "bg-surface-2 text-fg",
  notes: "bg-teal/10 text-teal",
  videos: "bg-blue/10 text-blue",
  books: "bg-amber/10 text-amber",
  questions: "bg-purple/10 text-purple",
  pyqs: "bg-green/10 text-green",
};

function Result({ doc }: { doc: SearchDoc }) {
  const Icon = icons[doc.category];
  return (
    <li>
      <Link href={doc.href} className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-surface">
        <span className={cn("grid size-9 shrink-0 place-items-center rounded-lg", tones[doc.category])}>
          <Icon className="size-4" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="line-clamp-2 font-medium">{doc.title}</span>
          <span className="block truncate text-sm text-muted">{doc.subtitle}</span>
        </span>
      </Link>
    </li>
  );
}

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const sp = await searchParams;
  const q = param(sp, "q") ?? "";
  const cat = param(sp, "cat") as SearchCategory | undefined;
  const results = q ? search(q) : [];
  const counts = Object.fromEntries(ORDER.map((c) => [c, results.filter((r) => r.category === c).length])) as Record<SearchCategory, number>;
  const shown = cat ? results.filter((r) => r.category === cat) : results;

  const tabHref = (c?: SearchCategory) => `/search?q=${encodeURIComponent(q)}${c ? `&cat=${c}` : ""}`;

  return (
    <div className="container-page py-8 md:py-12">
      <h1 className="sr-only">Search BTechi</h1>
      <SearchBar key={q} defaultValue={q} autoFocus={!q} className="mx-auto max-w-2xl" />

      {!q ? (
        <div className="mx-auto mt-10 max-w-2xl">
          <p className="eyebrow mb-3">Popular searches</p>
          <div className="flex flex-wrap gap-2">
            {["Statistics", "BSMA1002", "Python", "Economics", "Marketing", "Finance", "Foundation", "Elective"].map((s) => (
              <Link
                key={s}
                href={`/search?q=${encodeURIComponent(s)}`}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium hover:border-fg/30"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <>
          <nav aria-label="Result categories" className="mx-auto mt-6 flex max-w-4xl gap-1 overflow-x-auto border-b border-border [scrollbar-width:none]">
            {[undefined, ...ORDER].map((c) => {
              const n = c ? counts[c] : results.length;
              if (c && n === 0) return null;
              const on = cat === c;
              return (
                <Link
                  key={c ?? "all"}
                  href={tabHref(c)}
                  aria-current={on ? "page" : undefined}
                  className={cn("relative shrink-0 px-3 py-2.5 text-sm font-medium", on ? "text-fg" : "text-muted hover:text-fg")}
                >
                  {c ? categoryLabels[c] : "Everything"} <span className="text-xs text-muted tabular-nums">{n}</span>
                  {on && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />}
                </Link>
              );
            })}
          </nav>

          <div className="mx-auto mt-6 max-w-4xl">
            {results.length === 0 ? (
              <EmptyState
                icon={<SearchX className="size-6" />}
                title={`No results for “${q}”`}
                description="Check the spelling, try a broader term, or browse by program."
                action={
                  <Link href="/programs" className="text-sm font-semibold hover:underline">
                    Browse programs →
                  </Link>
                }
              />
            ) : cat ? (
              <ul className="grid gap-1 md:grid-cols-2">
                {shown.map((d) => (
                  <Result key={d.category + d.id} doc={d} />
                ))}
              </ul>
            ) : (
              <div className="space-y-8">
                {ORDER.filter((c) => counts[c]).map((c) => (
                  <section key={c} aria-labelledby={`s-${c}`}>
                    <div className="mb-1 flex items-baseline justify-between px-3">
                      <h2 id={`s-${c}`} className="text-sm font-semibold">
                        {categoryLabels[c]}
                      </h2>
                      {counts[c] > 4 && (
                        <Link href={tabHref(c)} className="text-sm text-muted hover:text-fg">
                          All {counts[c]} →
                        </Link>
                      )}
                    </div>
                    <ul className="grid gap-1 md:grid-cols-2">
                      {results
                        .filter((r) => r.category === c)
                        .slice(0, 4)
                        .map((d) => (
                          <Result key={d.category + d.id} doc={d} />
                        ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
