import type { NextFunction, Request, Response } from 'express';
import { validateCourseId } from '@/validation/courses';

export type CourseLocals = { courseId: number };

export const validateCourseIdMiddleware = (
  req: Request<{ id: string }>,
  res: Response<unknown, CourseLocals>,
  next: NextFunction
): void => {
  try {
    const { id } = req.params;
    const courseId = validateCourseId(id);
    res.locals.courseId = courseId;
    next();
  } catch (error) {
    // Let the global error handler handle validation errors
    next(error);
  }
};
