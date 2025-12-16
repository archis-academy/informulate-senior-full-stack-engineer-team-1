import styles from "./CourseOutline.module.scss";
import CourseCard from "@components/best-selling-courses/course-card";
import { courseOutlineMock } from "./CourseOutline.fixtures";
import type { Course } from "@/types/course";

type Props = {
  courses?: Course[];
};

function CourseOutline({ courses = courseOutlineMock }: Props) {
  return (
    <section className={styles.section} aria-label="Course outline">
      <ul className={styles.grid} aria-label="Courses">
        {courses.map((course) => (
          <li key={course.id} className={styles.gridItem}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseOutline;
