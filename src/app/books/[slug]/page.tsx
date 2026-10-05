import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Info } from "lucide-react";
import { BookCover } from "@/components/cards";
import { BookmarkButton, ReportButton } from "@/components/resource-actions";
import { Badge, Breadcrumbs, buttonClass } from "@/components/ui";
import { books, getBook, getSubject } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => books.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: PageProps<"/books/[slug]">): Promise<Metadata> {
  const b = getBook((await params).slug);
  if (!b) return {};
  return {
    title: `${b.title} by ${b.authors.join(", ")}`,
    description: `${b.why} Recommended chapters and where to get it legally.`,
    alternates: { canonical: `/books/${b.slug}` },
  };
}

export default async function BookPage({ params }: PageProps<"/books/[slug]">) {
  const book = getBook((await params).slug);
  if (!book) notFound();
  const subjectList = book.subjectSlugs.map(getSubject).filter((s) => s !== undefined);

  const details: [string, React.ReactNode][] = [
    ["Authors", book.authors.join(", ")],
    ["Edition", book.edition ?? "Latest available"],
    ["Publisher", book.publisher + (book.year ? `, ${book.year}` : "")],
    ["ISBN", book.isbn ?? "—"],
    [
      "Subjects",
      subjectList.map((s, i) => (
        <span key={s.slug}>
          {i > 0 && ", "}
          <Link href={`/subjects/${s.slug}?tab=books`} className="font-medium hover:underline">
            {s.name}
          </Link>
        </span>
      )),
    ],
    ["Recommended for", book.recommendedFor],
  ];

  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Books", href: "/books" }, { label: book.title }]} />
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <BookCover book={book} className="w-40 md:w-full" />
        <div>
          <div className="flex flex-wrap gap-2">
            {book.free && <Badge tone="green">Free &amp; legal edition</Badge>}
            <Badge tone="blue">{book.recommendedFor}</Badge>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{book.title}</h1>
          <p className="mt-1 text-lg text-muted">{book.authors.join(", ")}</p>

          <div className="mt-6 rounded-xl border-l-4 border-brand bg-surface p-4">
            <p className="text-sm font-semibold">Why use this book</p>
            <p className="mt-1">{book.why}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {book.link && (
              <a href={book.link.url} target="_blank" rel="noopener noreferrer" className={buttonClass("dark", "md")}>
                {book.link.label} <ExternalLink className="size-4" aria-hidden />
              </a>
            )}
            <BookmarkButton withLabel item={{ kind: "book", id: book.slug, title: book.title, href: `/books/${book.slug}`, subtitle: book.authors.join(", ") }} />
            <ReportButton kind="book" resourceId={book.slug} title={book.title} />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <section>
              <h2 className="mb-3 font-bold">Recommended chapters</h2>
              <ol className="space-y-2">
                {book.chapters.map((c, i) => (
                  <li key={c} className="flex gap-3 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm">
                    <span className="font-semibold text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {c}
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2 className="mb-3 font-bold">Details</h2>
              <dl className="card divide-y divide-border text-sm">
                {details.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 px-4 py-2.5">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              {!book.free && (
                <p className="mt-3 flex gap-2 text-xs text-muted">
                  <Info className="mt-px size-3.5 shrink-0" aria-hidden />
                  This book is under copyright. Borrow it from your library or buy it from the publisher.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
