import { ButtonLink } from "@/components/ui";
import { SearchBar } from "@/components/search-bar";

export default function NotFound() {
  return (
    <div className="container-page grid min-h-[70vh] place-items-center py-16 text-center">
      <div className="max-w-md">
        <p className="text-7xl font-extrabold tracking-tight">
          4<span className="inline-block -rotate-12 rounded-xl bg-brand px-2 text-brand-ink">0</span>4
        </p>
        <h1 className="mt-6 text-2xl font-bold">Looks like this topic went off the syllabus.</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <SearchBar size="md" className="mt-8" />
        <div className="mt-6 flex justify-center gap-2">
          <ButtonLink href="/subjects" variant="dark">
            Back to Subjects
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
