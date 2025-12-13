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
