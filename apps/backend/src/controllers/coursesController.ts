import type { Request, Response } from 'express';
import type { ParamsDictionary } from 'express-serve-static-core';
import type { ApiItemResponse, ApiListResponse, ApiErrorResponse } from '@/types/api';
import type { Course, NewCourseInput, UpdateCourseInput } from '@/types/course';
import { ValidationError } from '@/utils/validation';
import { validateCourseId } from '@/validation/courses';

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
  req: Request<{ id: string }>,
  res: Response<ApiItemResponse<Course> | ApiErrorResponse>
) => {
  try {
    const { id } = req.params;
    // TODO: use zod for validation
    const courseId = validateCourseId(id);
    
    res.status(200).json({
      message: `Course with ID ${id} retrieved successfully`,
      data: {
        id: courseId,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming',
        instructor: 'John Doe',
        duration: '8 weeks',
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        errors: [
          {
            status: "400",
            detail: error.message
          }
        ]
      });
    }
  }
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
  req: Request<{ id: string }, ApiItemResponse<Course>, UpdateCourseInput>,
  res: Response<ApiItemResponse<Course> | ApiErrorResponse>
) => {
  try {
    // TODO: use zod for validation
    const { id } = req.params;
    const courseId = validateCourseId(id);
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
      message: `Course with ID ${id} updated successfully`,
      data: {
        ...existingCourse,
        ...courseData,
        id: courseId,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        errors: [
          {
            status: "400",
            detail: error.message
          }
        ]
      });
    }
  }
};

export const deleteCourse = (
  req: Request<{ id: string }>,
  res: Response<{ message: string; deleted: boolean }>
) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Course with ID ${id} deleted successfully`,
    deleted: true,
  });
};
