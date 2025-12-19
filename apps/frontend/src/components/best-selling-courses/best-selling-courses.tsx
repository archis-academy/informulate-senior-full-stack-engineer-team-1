import { CourseCard } from "@/components/shared/course-card";
import { bestSellingCoursesMock } from "./best-selling-courses.fixtures";
import styles from "./best-selling-courses.module.scss";

function BestSellingCourses() {
  return (
    <section
      className={styles.section}
      aria-labelledby="best-selling-courses-heading"
    >
      <h2 id="best-selling-courses-heading" className={styles.title}>
        Best selling courses
      </h2>

      <div className={styles.grid}>
        {bestSellingCoursesMock.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default BestSellingCourses;
