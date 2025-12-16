import BestSellingCourses from "@components/best-selling-courses/best-selling-courses";
import { FeaturedCoursesSection } from "@components/FeaturedCourses";
import CourseOutline from "@components/CourseOutline/CourseOutline";

function Home() {
  return (
    <div style={{ padding: 24, background: "#f8fafc", minHeight: "100vh" }}>
      <BestSellingCourses />
      <FeaturedCoursesSection />
      <CourseOutline />
    </div>
  );
}

export default Home;
