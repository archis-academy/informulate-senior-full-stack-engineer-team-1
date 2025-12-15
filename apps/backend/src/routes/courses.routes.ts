import { Router } from 'express';
import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  updateCourse,
} from '@/controllers/coursesController';
import { validateCourseIdMiddleware } from '@/middleware/courses/validateCourseId';

const router = Router();

router.get('/', getCourses);
router.get('/:id', validateCourseIdMiddleware, getCourseById);
router.post('/', createCourse);
router.put('/:id', validateCourseIdMiddleware, updateCourse);
router.delete('/:id', validateCourseIdMiddleware, deleteCourse);

export default router;
