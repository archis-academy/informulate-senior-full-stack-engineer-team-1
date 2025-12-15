import type { NextFunction, Request, Response } from 'express';
import type { ApiErrorResponse } from '@/types/api';
import { ValidationError } from '@/utils/validation';

export const errorHandlerMiddleware = (
  error: Error,
  _req: Request,
  res: Response<ApiErrorResponse>,
  _next: NextFunction
): void => {
  if (error instanceof ValidationError) {
    res.status(400).json({
      errors: [
        {
          status: "400",
          detail: error.message
        }
      ]
    });
  } else {
    console.error('Unexpected error:', error);
    res.status(500).json({
      errors: [
        {
          status: "500",
          detail: "Internal server error"
        }
      ]
    });
  }
};
