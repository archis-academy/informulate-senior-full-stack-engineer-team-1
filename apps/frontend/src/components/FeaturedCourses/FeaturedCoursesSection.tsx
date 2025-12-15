// src/components/FeaturedCourses/FeaturedCoursesSection.tsx

import styles from "./FeaturedCoursesSection.module.css";
import { CourseCard } from "./CourseCard";
import { featuredCoursesMock, type FeaturedCourse } from "./FeaturedCourses.mock";

type Props = {
  courses?: FeaturedCourse[];
  title?: string;
  description?: string;
  maxCourses?: number;
};

export function FeaturedCoursesSection({
  courses = featuredCoursesMock,
  title = "Our Featured Courses",
  description = "Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.",
  maxCourses = 4,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="featured-courses-title">
      <div className={styles.inner}>
        <header className={styles.headerRow}>
          <h2 id="featured-courses-title" className={styles.sectionTitle}>
            {title}
          </h2>
          <p className={styles.sectionDesc}>{description}</p>
        </header>

        <ul className={styles.grid} aria-label="Featured courses">
          {courses.slice(0, maxCourses).map((c) => (
            <li key={c.id} className={styles.gridItem}>
              <CourseCard course={c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
