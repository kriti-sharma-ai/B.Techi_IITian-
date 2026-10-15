import { REVIEWS } from "@/lib/data/reviews";
import { ReviewActions } from "./review-actions";
import { Author } from "./review-author";

export function ReviewsSection() {
  const [featured, ...rest] = REVIEWS;
  return (
    <div>
      <figure className="max-w-4xl">
        <blockquote className="text-[clamp(1.25rem,2.6vw,1.875rem)] leading-snug font-medium tracking-tight text-balance">
          &ldquo;{featured.content}&rdquo;
        </blockquote>
        <figcaption className="mt-6">
          <Author review={featured} featured />
        </figcaption>
      </figure>

      <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:gap-10">
        {rest.map((review) => (
          <figure key={review.name} className="flex flex-col">
            <blockquote className="flex-1 text-[15px] leading-relaxed text-fg/85">&ldquo;{review.content}&rdquo;</blockquote>
            <figcaption className="mt-5">
              <Author review={review} />
            </figcaption>
          </figure>
        ))}
      </div>

      <ReviewActions />
    </div>
  );
}
