"use client";

import { RotateCcw, TriangleAlert } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
      <div className="max-w-md">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-red/10 text-red">
          <TriangleAlert className="size-6" aria-hidden />
        </span>
        <h1 className="mt-4 text-2xl font-bold">Something went wrong.</h1>
        <p className="mt-2 text-muted">This page is temporarily unavailable. Please try again.</p>
        <div className="mt-6 flex justify-center gap-2">
          <Button variant="dark" onClick={reset}>
            <RotateCcw className="size-4" aria-hidden /> Try again
          </Button>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
