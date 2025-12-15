import { Link } from "react-router-dom";
import styles from "./best-selling-courses.module.scss";
import type { BestSellingCourse } from "@/types/course";

export type CourseCardProps = {
  course: BestSellingCourse;
};

function CourseCard({ course }: CourseCardProps) {
  const ratingLabel = `${course.rating.toFixed(1)} out of 5 stars`;

  return (
    <article className={styles.card}>
      <Link
        to={course.href}
        className={styles.cardLink}
        aria-label={course.description} // using description as label
      >
        <div className={styles.imageWrapper}>
          <img
            src={course.imageUrl}
            alt={course.description} // using description for alt
            loading="lazy"
          />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.categoryRow}>
            <span className={styles.category}>{course.category}</span>
            <span className={styles.price}>{course.price}</span>
          </div>

          {/* Description only */}
          <p className={styles.description}>{course.description}</p>

          <div
            className={styles.metaRow}
            aria-label={`${ratingLabel}, ${course.students}`}
          >
            <span className={styles.ratingStar} aria-hidden="true">
              ★
            </span>
            <span className={styles.ratingValue}>
              {course.rating.toFixed(1)}
            </span>
            <span className={styles.dot} aria-hidden="true">
              <span />
            </span>
            <span className={styles.students}>{course.students}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default CourseCard;
