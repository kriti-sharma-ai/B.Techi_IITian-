import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { PlayCircle } from "lucide-react";
import { FilterBar } from "@/components/filter-bar";
import { ScopeSwitch } from "@/components/study-scope";
import { EmptyState, PageHeader } from "@/components/ui";
import { VideoCard } from "@/components/video-card";
import { videos } from "@/lib/content";
import { academicFilters, matchesAcademic, param } from "@/lib/filters";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";
import { loadContent } from "@/lib/cms";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS Video Lectures, Topic by Topic",
  description: "Video lessons for every IIT Madras BS course, mapped to each week and topic, from the BTechi IITian YouTube channel and trusted educators.",
  path: "/videos",
});

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export default async function VideosPage({ searchParams }: PageProps<"/videos">) {
  await loadContent();
  const sp = await searchParams;
  const unit = param(sp, "unit");
  const difficulty = param(sp, "difficulty");
  const scoped = narrow(
    await getStudyScope(sp),
    videos
      .filter((v) => matchesAcademic(v.subjectSlug, sp) && (!unit || v.unitId === unit) && (!difficulty || v.level === difficulty))
      .sort((a, b) => Number(Boolean(b.youtubeId)) - Number(Boolean(a.youtubeId)) || b.views - a.views),
    (v) => v.subjectSlug,
  );
  const list = scoped.items;

  const filters = [...academicFilters(sp), { name: "difficulty", label: "Difficulty", options: LEVELS.map((l) => ({ value: l, label: l })) }];

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Videos" }]}
        title="Videos"
        description="Embedded from YouTube, never re-uploaded. Each video is linked to the exact topic it teaches."
      >
        <Suspense>
          <FilterBar filters={filters} />
        </Suspense>
      </PageHeader>
      <div className="container-page py-8">
        <ScopeSwitch list={scoped} links={scopeLinks("/videos", sp)} className="mb-6" />
        {list.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        ) : (
          <EmptyState icon={<PlayCircle className="size-6" />} title="No videos for this selection yet." description="Try clearing a filter." />
        )}
      </div>
    </>
  );
}
