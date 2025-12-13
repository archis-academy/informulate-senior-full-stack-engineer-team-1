type CourseDuration = string;

interface CourseBase {
  title: string;
  description: string;
  instructor: string;
  duration: CourseDuration;
}

export interface Course extends CourseBase {
  id: number;
  createdAt: string;
  updatedAt?: string;
}

export type NewCourseInput = CourseBase;
export type UpdateCourseInput = Partial<CourseBase>;
