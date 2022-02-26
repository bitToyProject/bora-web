import { AxiosResponse } from 'axios';

export enum RESPONSE_CODE {
  OK = 200,
  BAD_PARAMETER = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 403,
  SERVER_ERROR = 500,
}

export const responseSuccess = (res: AxiosResponse<any>): boolean =>
  res && res.status === RESPONSE_CODE.OK;
