import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import { IGetUserResponse } from '../../types/user.types';

export namespace userAPI {
  export const getUser = (
    params?: {
      query?: string;
    },
    options?: AxiosRequestConfig,
  ): AxiosPromise<IGetUserResponse> => {
    return axios.get<IGetUserResponse>(`/user/${params?.query}`, options);
  };
  export const getUsers = () => {};
  export const post = {
    login: () => {},
  };
  export const remove = () => {};
  export const put = () => {};
}
