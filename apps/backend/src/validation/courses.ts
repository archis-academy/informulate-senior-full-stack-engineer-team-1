import { ValidationError } from '@/utils/validation';
import { courseIdNotNumberError } from '@/errors/courses';

export const validateCourseId = (id: string): number => {
  const parsedId = parseInt(id, 10);
  
  if (isNaN(parsedId)) {
    throw new ValidationError(courseIdNotNumberError());
  }
  
  return parsedId;
};
