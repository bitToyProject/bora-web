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
