import { CourseCard } from "@/components/shared/course-card";
import type { BestSellingCourse } from "@/types/course";
import styles from "./category-header.module.scss";

export type CategoryHeaderProps = {
  id: string;
  category: string;
  courses: BestSellingCourse[];
};

function CategoryHeader({ id, category, courses }: CategoryHeaderProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const container = e.currentTarget;
    const scrollAmount = 300; // adjust based on card width

    if (e.key === 'ArrowRight') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={styles.section}
      aria-labelledby={id}
    >
      <h2 id={id} className={styles.title}>
        Best selling courses in {category}
      </h2>

      {/* tabIndex needed for keyboard accessibility - allows arrow key scrolling */}
      <ul
        className={styles.scrollContainer}
        aria-label={`Best selling ${category} courses`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} as="li" />
        ))}
      </ul>
    </section>
  );
}

export default CategoryHeader;
