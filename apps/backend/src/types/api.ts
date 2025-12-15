export interface ApiError {
  status: string;
  detail: string;
  source?: {
    pointer: string;
  };
  title?: string;
}

export interface ApiErrorResponse {
  errors: ApiError[];
}

export interface ApiListResponse<T> {
  message: string;
  data: T[];
}

export interface ApiItemResponse<T> {
  message: string;
  data: T;
}

export interface ApiMessageResponse {
  message: string;
}
