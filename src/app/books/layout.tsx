import { notFound } from "next/navigation";
import { sectionEnabled } from "@/lib/site";

/** 404s the whole section when this deployment has it switched off. */
export default function BooksLayout({ children }: LayoutProps<"/books">) {
  if (!sectionEnabled("books")) notFound();
  return children;
}
