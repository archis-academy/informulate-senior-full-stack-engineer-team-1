import { CategoryHeader } from "@/components/courses/category-header";
import { webDevelopmentCoursesMock } from "@/components/courses/category-header/category-header.fixtures";
import styles from "./web-development.module.scss";

function WebDevelopment() {
  return (
    <main className={styles.main}>
      <CategoryHeader
        id="web-development-heading"
        category="Web Development"
        courses={webDevelopmentCoursesMock}
      />
    </main>
  );
}

export default WebDevelopment;
