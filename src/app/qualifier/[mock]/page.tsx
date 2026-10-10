import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { QualifierExam } from "@/components/qualifier-exam";
import { QualifierResult } from "@/components/qualifier-result";
import { param } from "@/lib/filters";
import { getQualifierMock, isSingleSubject, nextQualifierPaper, paperHref, qualifierMocks } from "@/lib/qualifier";

// Full mocks only: single-course PYQs live under /pyqs/<level>/<course>/<paper> (next.config redirects their old URLs).
export const generateStaticParams = () => qualifierMocks.map((m) => ({ mock: m.slug }));

export async function generateMetadata({ params }: PageProps<"/qualifier/[mock]">): Promise<Metadata> {
  const mock = getQualifierMock((await params).mock);
  if (!mock) return {};
  return { title: mock.title, description: mock.description, robots: { index: false } };
}

export default async function QualifierMockPage({ params, searchParams }: PageProps<"/qualifier/[mock]">) {
  const mock = getQualifierMock((await params).mock);
  if (!mock) notFound();
  if (isSingleSubject(mock)) permanentRedirect(paperHref(mock));
  const attempt = param(await searchParams, "attempt");
  return attempt ? <QualifierResult mock={mock} attemptId={attempt} next={nextQualifierPaper(mock)} /> : <QualifierExam mock={mock} />;
}
