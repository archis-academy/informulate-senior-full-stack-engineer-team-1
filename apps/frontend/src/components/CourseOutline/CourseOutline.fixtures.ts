import type { Course } from "@/types/course";
import { bestSellingCoursesMock } from "@components/best-selling-courses/best-selling-courses.fixtures";

export const courseOutlineMock: Course[] = Array.from(
  { length: 24 },
  (_, index) => {
    const base = bestSellingCoursesMock[index % bestSellingCoursesMock.length]!;
    const courseNumber = index + 1;

    return {
      ...base,
      id: `outline-${courseNumber}`,
      href: `/courses/${courseNumber}`,
    };
  },
);
