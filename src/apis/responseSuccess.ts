import { AxiosResponse } from 'axios';

export enum RESPONSE_CODE {
  OK = 200,
  BAD_PARAMETER = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 403 | 401,
  SERVER_ERROR = 500,
}

export const responseSuccess = (res: AxiosResponse<any>): boolean => {
  if (res && res.status === RESPONSE_CODE.OK) {
    return true;
  }

  return false;
};
