import { FeaturedCoursesSection } from "@components/FeaturedCourses";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <FeaturedCoursesSection />
    </div>
  );
}

export default Home;
