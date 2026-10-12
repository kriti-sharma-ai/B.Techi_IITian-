import { Bone, SkeletonRoot } from "@/components/page-skeleton";

// Same frame as the hero in page.tsx (height, centring, clamp() sizes), so nothing shifts when it loads.
export default function Loading() {
  return (
    <SkeletonRoot className="relative -mt-16 flex min-h-[min(100svh,56rem)] items-center pt-16">
      <div className="container-page flex w-full flex-col items-center py-[clamp(2.5rem,8svh,6rem)]">
        <Bone className="mb-[clamp(1rem,3svh,1.5rem)] h-8 w-64 rounded-full sm:w-96" />
        <Bone className="h-[clamp(2.4rem,min(6.5vw,9svh),4.5rem)] w-[min(100%,24rem)] sm:w-[min(100%,32rem)]" />
        <Bone className="mt-3 h-[clamp(2.4rem,min(6.5vw,9svh),4.5rem)] w-[min(100%,30rem)] sm:w-[min(100%,40rem)]" />
        <Bone className="mt-[clamp(1rem,3svh,1.5rem)] h-6 w-[min(100%,36rem)]" />
        <div className="mt-[clamp(1.25rem,4svh,2rem)] flex flex-wrap justify-center gap-3">
          <Bone className="h-12 w-48 rounded-xl" />
          <Bone className="h-12 w-36 rounded-xl" />
        </div>
        <Bone className="mt-[clamp(1rem,3svh,1.5rem)] h-4 w-72 max-w-full" />
      </div>
    </SkeletonRoot>
  );
}
