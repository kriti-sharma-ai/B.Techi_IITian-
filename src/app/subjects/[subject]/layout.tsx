import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CourseSidebar, CourseSidebarView } from "@/components/course-sidebar";
import { getSubject } from "@/lib/content";
import { courseOutline } from "@/lib/course";

/** Course player: outline on the left, the selected item on the right. */
export default async function SubjectLayout({ params, children }: LayoutProps<"/subjects/[subject]">) {
  const subject = getSubject((await params).subject);
  if (!subject) notFound();
  const props = { title: subject.name, base: `/subjects/${subject.slug}`, sections: await courseOutline(subject) };

  return (
    <div className="lg:flex">
      <Suspense fallback={<CourseSidebarView {...props} />}>
        <CourseSidebar {...props} />
      </Suspense>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
