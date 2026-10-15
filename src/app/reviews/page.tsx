import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Author } from "@/components/review-author";
import { FeaturedReviews } from "@/components/featured-reviews";
import { FloatingWriteReview, WriteReviewButton } from "@/components/review-actions";
import { buttonClass } from "@/components/ui";
import { getAllReviews } from "@/lib/reviews";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL, cn } from "@/lib/utils";

// New reviews show within a minute; posting one also refreshes this page for its author.
export const revalidate = 60;

export const metadata: Metadata = pageMetadata({
  title: "Student reviews",
  description: "What IIT Madras BS students say about BTechi's PYQs, mock tests and exam portal, in their own words.",
  path: "/reviews",
});

function Stars({ rating, size = "size-3.5" }: { rating: number; size?: string }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={cn(size, i <= rating ? "fill-brand text-brand" : "text-border")} aria-hidden />
      ))}
    </span>
  );
}

function Stat({ value, label, children }: { value: string; label: string; children?: React.ReactNode }) {
  return (
    <div>
      <p className="text-3xl leading-none font-extrabold tracking-tight tabular-nums md:text-4xl">{value}</p>
      <p className="mt-2 text-xs text-muted md:text-sm">{label}</p>
      {children && <div className="mt-1.5">{children}</div>}
    </div>
  );
}

export default async function ReviewsPage() {
  const reviews = await getAllReviews();
  const n = reviews.length;
  const average = reviews.reduce((s, r) => s + r.rating, 0) / n;
  const fiveStar = Math.round((reviews.filter((r) => r.rating === 5).length / n) * 100);
  const rest = reviews.slice(1);
  // The exam portal rated from the reviews on this page. Only here, where every review is visible, as Google requires.
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE_URL}/#app`,
    name: "BTechi IIT Madras BS Exam Portal",
    url: `${SITE_URL}/exam`,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any (web browser)",
    description:
      "Sit real IIT Madras BS Qualifier, Quiz 1, Quiz 2 and End Term papers in a timed exam portal with a scientific calculator, graded against the official answer keys.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    aggregateRating: { "@type": "AggregateRating", ratingValue: Math.round(average * 10) / 10, bestRating: 5, worstRating: 1, ratingCount: n, reviewCount: n },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.content,
    })),
  };

  return (
    <div className="container-page py-10 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }} />
      {/* ───────── Hero: title left, numbers right ───────── */}
      <header className="flex flex-col gap-8 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-tight text-balance">What students say.</h1>
          <p className="mt-3 text-muted md:text-lg">Reviews from IIT Madras BS students who prepare with BTechi.</p>
        </div>
        <section aria-label="Review summary" className="grid grid-cols-3 gap-4 sm:flex sm:gap-12">
          <Stat value={average.toFixed(1)} label="average">
            <Stars rating={Math.round(average)} size="size-3" />
          </Stat>
          <Stat value={String(n)} label={n === 1 ? "review" : "reviews"} />
          <Stat value={`${fiveStar}%`} label="five stars" />
        </section>
      </header>

      {/* ───────── Featured: arrows step through every review ───────── */}
      <FeaturedReviews reviews={reviews} />

      {/* ───────── All the others ───────── */}
      {rest.length > 0 && (
        <section aria-label="More reviews" className="mt-10 grid gap-x-10 gap-y-10 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((r) => (
            <figure key={r.key} className="flex flex-col">
              <Stars rating={r.rating} />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-fg/85">&ldquo;{r.content}&rdquo;</blockquote>
              <figcaption className="mt-5">
                <Author review={r} />
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {/* ───────── Write one ───────── */}
      <section id="write-review" className="mt-14 flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 md:mt-20 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Studied with BTechi?</h2>
          <p className="mt-1 text-muted">Tell the next batch what helped you.</p>
        </div>
        <WriteReviewButton next="/reviews" className={buttonClass("primary", "lg")} />
      </section>

      {/* Floating button, above the phone bottom bar; hidden while the box above is on screen. */}
      <FloatingWriteReview next="/reviews" hideWhenVisible="write-review" />
    </div>
  );
}
