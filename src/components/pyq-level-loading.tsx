"use client";

import { usePathname } from "next/navigation";
import { Bone } from "./page-skeleton";
import { PyqLevelBar } from "./pyq-level-links";
import { PageHeader } from "./ui";

type Level = { slug: string; label: string; name: string; href: string };

/**
 * The real header and level bar while /pyqs/[level] loads, read from the URL, so switching level
 * (or arriving from /practice) only swaps the course list instead of blinking the whole top.
 */
export function PyqLevelLoadingTop({ levels }: { levels: Level[] }) {
  const slug = usePathname().split("/")[2];
  const level = levels.find((l) => l.slug === slug);
  return (
    <>
      <PageHeader title={level ? `${level.name} papers` : "Papers"} description="Pick a subject. Every paper has the official answer key." />
      <PyqLevelBar levels={levels} active={slug} back={{ href: "/practice", label: "Practice" }} sticky>
        <div className="flex gap-1.5 py-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Bone key={i} className="h-[34px] w-24 rounded-lg" />
          ))}
        </div>
      </PyqLevelBar>
    </>
  );
}
