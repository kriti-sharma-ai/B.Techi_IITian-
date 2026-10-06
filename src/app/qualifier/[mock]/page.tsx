import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QualifierExam } from "@/components/qualifier-exam";
import { QualifierResult } from "@/components/qualifier-result";
import { param } from "@/lib/filters";
import { getQualifierMock, qualifierMocks } from "@/lib/qualifier";

export const generateStaticParams = () => qualifierMocks.map((m) => ({ mock: m.slug }));

export async function generateMetadata({ params }: PageProps<"/qualifier/[mock]">): Promise<Metadata> {
  const mock = getQualifierMock((await params).mock);
  if (!mock) return {};
  return { title: mock.title, description: mock.description, robots: { index: false } };
}

export default async function QualifierMockPage({ params, searchParams }: PageProps<"/qualifier/[mock]">) {
  const mock = getQualifierMock((await params).mock);
  if (!mock) notFound();
  const attempt = param(await searchParams, "attempt");
  return attempt ? <QualifierResult mock={mock} attemptId={attempt} /> : <QualifierExam mock={mock} />;
}
