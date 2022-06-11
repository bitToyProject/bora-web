import { RESPONSE_CODE } from 'apis/responseSuccess';

export interface IPagination {
  totalPage: number;
  page: number;
  size: number;
  start: number;
  end: number;
  prev: boolean;
  next: boolean;
}

export interface IGetParameter {
  keyword: string;
  page: number;
  size?: number;
  type: string;
}

export interface IAPIResponse<T> {
  code: RESPONSE_CODE;
  message: string;
  data: T;
}

export type Nullable<T> = T | null;
