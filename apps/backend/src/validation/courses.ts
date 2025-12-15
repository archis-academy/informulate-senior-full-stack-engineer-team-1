import { courseIdNotNumberError } from '@/errors/courses';
import { ValidationError } from '@/utils/validation';

export const validateCourseId = (id: string): number => {
  const parsedId = parseInt(id, 10);
  
  if (Number.isNaN(parsedId)) {
    throw new ValidationError(courseIdNotNumberError());
  }
  
  return parsedId;
};
