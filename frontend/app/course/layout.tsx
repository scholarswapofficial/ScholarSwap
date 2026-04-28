import CourseSidebar from "@/sections/courses/CourseSidebar";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import "@/styles/sections/courses/courses.scss";
import "@/styles/sections/courses/sidebar.scss";
import "@/styles/sections/courses/hero.scss";
import "@/styles/sections/courses/category.scss";
import "@/styles/sections/courses/course-list.scss";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="courses-page">
      <FeedTabs />

      <div className="courses-layout">
        <CourseSidebar />

        <div className="courses-content">
          {children}
        </div>
      </div>
    </div>
  );
}