import { TopBar } from "@/components/btechi-ai";

// Shown while /ai loads (often straight from the landing hero's question): the chat's own frame,
// not the site's card grid, so the answer seems to arrive in place.
export default function Loading() {
  return (
    <div className="flex h-dvh flex-col">
      <TopBar />
      <div className="grid flex-1 place-items-center">
        <span className="size-6 animate-spin rounded-full border-2 border-border border-t-fg" aria-label="Loading" />
      </div>
    </div>
  );
}
