import type React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@/components/shared/assets/svgs/StarIcon";
import type { BestSellingCourse } from "@/types/course";
import styles from "./course-card.module.scss";

type CourseCardOwnProps<E extends React.ElementType> = {
  course: BestSellingCourse;
  as?: E;
};

export type CourseCardProps<E extends React.ElementType> = CourseCardOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CourseCardOwnProps<E>>;

function CourseCard<E extends React.ElementType = "div">({
  course,
  as,
  className,
  ...restProps
}: CourseCardProps<E>) {
  const Component = as || "div";
  const ratingLabel = `${course.rating.toFixed(1)} out of 5 stars`;

  const preppedCategory = course.category
    .toLowerCase()
    .replace(/& /g, "")
    .replace(/ /g, "-");
  const categoryClass = styles[`category-${preppedCategory}`];

  return (
    <Component
      className={`${styles.card} ${className || ""}`}
      {...restProps}
    >
      <Link
        to={course.href}
        className={styles.cardLink}
        aria-label={course.description}
      >
        <header className={styles.imageWrapper}>
          <img src={course.imageUrl} alt={course.description} loading="lazy" />
        </header>

        <div className={styles.courseInfo}>
          <div className={styles.categoryRow}>
            <span className={`${styles.category} ${categoryClass || ""}`}>
              {course.category}
            </span>
            <span className={styles.price}>{course.price}</span>
          </div>

          <h3 className={styles.courseTitle}>{course.description}</h3>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/** biome-ignore lint/a11y/useAriaPropsSupportedByRole: false positive */}
        <footer
          className={styles.metaRow}
          aria-label={`${ratingLabel}, ${course.students} students`}
        >
          <div className={styles.ratingGroup}>
            <span className={styles.ratingStar} aria-hidden="true">
              <StarIcon />
            </span>
            <span className={styles.ratingValue}>
              {course.rating.toFixed(1)}
            </span>
          </div>
          <div className={styles.studentGroup}>
            <span className={styles.studentsCount}>{course.students}</span>
            <span className={styles.studentsLabel}>students</span>
          </div>
        </footer>
      </Link>
    </Component>
  );
}

export default CourseCard;

