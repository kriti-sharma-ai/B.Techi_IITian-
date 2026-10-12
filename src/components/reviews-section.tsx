import { cn } from "@/lib/utils";

interface ReviewItem {
  name: string;
  courseTag: string;
  content: string;
}

// Real reviews from students preparing for the IIT Madras BS Qualifier. The first is the pull quote.
const REVIEWS: ReviewItem[] = [
  {
    name: "Bonny Mondal",
    courseTag: "Maths 1 & CT",
    content:
      "Preparing for qualifier, helping a lot! The TCS iON mock test replica, scientific calculator, and chapter-wise PYQs gave me so much clarity and confidence for the exam.",
  },
  {
    name: "Satya Sharma",
    courseTag: "Stats 1 & English 1",
    content:
      "As a student preparing for the Qualifier, finding accurate past papers with official keys was tough until I found BTechi. The chapter-wise practice and exam simulation are spot on.",
  },
  {
    name: "Yeasmin Khatun",
    courseTag: "4 Foundation Subjects",
    content:
      "Preparing for the Qualifier became so much easier with BTechi. The instant scoring, negative marking alerts, and question palette make revision seamless and effective.",
  },
];

function Author({ review, featured }: { review: ReviewItem; featured?: boolean }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold",
          featured ? "bg-brand text-brand-ink" : "bg-surface-2 text-fg",
        )}
      >
        {initials}
      </span>
      <div className="text-sm leading-tight">
        <p className="font-semibold">{review.name}</p>
        <p className="mt-0.5 text-muted">{review.courseTag}</p>
      </div>
    </div>
  );
}

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
    </div>
  );
}
