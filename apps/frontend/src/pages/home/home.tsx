import Welcome from "@components/welcome/welcome";
import BestSellingCourses from "@components/best-selling-courses/best-selling-courses";
import { FeaturedCoursesSection } from "@components/FeaturedCourses";

function Home() {
  return (
    <div style={{ padding: 24, background: "#f8fafc", minHeight: "100vh" }}>
      <BestSellingCourses />
      <FeaturedCoursesSection />
    </div>
  );
}

export default Home;
