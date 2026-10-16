import { HomeFaq, type FaqItem } from "@/components/home-faq";

/**
 * A page's FAQ: visible questions plus the same text as FAQPage JSON-LD, so search engines
 * and AI assistants read exactly what students see.
 */
export function PageFaq({ title, items }: { title: string; items: FaqItem[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <section className="container-page pb-10 md:pb-14">
      <h2 className="border-t border-border pt-5 text-xl font-bold tracking-tight md:text-2xl">{title}</h2>
      <HomeFaq items={items} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
    </section>
  );
}
