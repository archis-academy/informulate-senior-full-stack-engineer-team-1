import type { Request, Response } from 'express';
import type { ParamsDictionary } from 'express-serve-static-core';
import type { ParsedQs } from 'qs';
import type { CourseLocals } from '@/middleware/courses/validateCourseId';
import type { ApiItemResponse, ApiListResponse } from '@/types/api';
import type { Course, NewCourseInput, UpdateCourseInput } from '@/types/course';

export const getCourses = (
  _req: Request,
  res: Response<ApiListResponse<Course>>
) => {
  res.status(200).json({
    message: 'Courses retrieved successfully',
    data: [
      {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming',
        instructor: 'John Doe',
        duration: '8 weeks',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Advanced TypeScript',
        description: 'Deep dive into TypeScript features',
        instructor: 'Jane Smith',
        duration: '6 weeks',
        createdAt: new Date().toISOString(),
      },
    ],
  });
};

export const getCourseById = (
  _req: Request<{ id: string }>,
  res: Response<ApiItemResponse<Course>, CourseLocals>
) => {
  const courseId = res.locals.courseId;
  
  res.status(200).json({
    message: `Course with ID ${courseId} retrieved successfully`,
    data: {
      id: courseId,
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming',
      instructor: 'John Doe',
      duration: '8 weeks',
      createdAt: new Date().toISOString(),
    },
  });
};

export const createCourse = (
  req: Request<ParamsDictionary, ApiItemResponse<Course>, NewCourseInput>,
  res: Response<ApiItemResponse<Course>>
) => {
  const courseData = req.body;
  res.status(201).json({
    message: 'Course created successfully',
    data: {
      id: Math.floor(Math.random() * 1000),
      ...courseData,
      createdAt: new Date().toISOString(),
    },
  });
};

export const updateCourse = (
  req: Request<
    { id: string },
    ApiItemResponse<Course>,
    UpdateCourseInput,
    ParsedQs,
    CourseLocals
  >,
  res: Response<ApiItemResponse<Course>, CourseLocals>
) => {
  const courseId = res.locals.courseId;
  const courseData = req.body;

  // Mock existing course data. Only here to satistify type requirements temporarily until the real implementation is added.
  const existingCourse: Course = {
    id: courseId,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming',
    instructor: 'John Doe',
    duration: '8 weeks',
    createdAt: new Date().toISOString(),
  };

  res.status(200).json({
    message: `Course with ID ${courseId} updated successfully`,
    data: {
      ...existingCourse,
      ...courseData,
      id: courseId,
      updatedAt: new Date().toISOString(),
    },
  });
};

export const deleteCourse = (
  _req: Request<
    { id: string },
    { message: string; deleted: boolean },
    undefined,
    ParsedQs,
    CourseLocals
  >,
  res: Response<{ message: string; deleted: boolean }, CourseLocals>
) => {
  const courseId = res.locals.courseId;
  
  res.status(200).json({
    message: `Course with ID ${courseId} deleted successfully`,
    deleted: true,
  });
};
