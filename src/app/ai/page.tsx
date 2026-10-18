import type { Metadata } from "next";
import { BtechiAI } from "@/components/btechi-ai";
import { getGuideData } from "@/lib/guide-data";

// Ask in plain words, the page you need opens next to the chat. Linked from the navbar, not indexed yet.
export const metadata: Metadata = {
  title: "BTechi AI",
  description: "Ask for past papers, question sheets, notes or a mock test. It opens right next to the chat.",
  robots: { index: false },
};

/** `?q=`: a question asked in the landing hero, answered as soon as the page opens. */
export default async function AIPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  return <BtechiAI data={await getGuideData()} question={typeof q === "string" ? q.trim().slice(0, 200) : undefined} />;
}
