import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QualifierExam } from "@/components/qualifier-exam";
import { QualifierResult } from "@/components/qualifier-result";
import { endTermPapers, getEndTermPaper, nextEndTermPaper, reviseHref } from "@/lib/end-term";
import { param } from "@/lib/filters";

export const dynamicParams = false;
export const generateStaticParams = () => endTermPapers.map((p) => ({ paper: p.slug }));

export async function generateMetadata({ params }: PageProps<"/pyqs/end-term/[paper]">): Promise<Metadata> {
  const paper = getEndTermPaper((await params).paper);
  if (!paper) return {};
  return { title: paper.title, description: paper.description, robots: { index: false } };
}

export default async function EndTermPaperPage({ params, searchParams }: PageProps<"/pyqs/end-term/[paper]">) {
  const paper = getEndTermPaper((await params).paper);
  if (!paper) notFound();
  const attempt = param(await searchParams, "attempt");
  return attempt ? (
    <QualifierResult mock={paper} attemptId={attempt} next={nextEndTermPaper(paper)} revise={reviseHref(paper.sections[0].subjectSlug)} />
  ) : (
    <QualifierExam mock={paper} />
  );
}
