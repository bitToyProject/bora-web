import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import Cookies from 'universal-cookie/es6';
import { IGetUserResponse } from '../../types/user.types';

export namespace userAPI {
  const cookies = new Cookies();
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

  export const get = {
    me: (): AxiosPromise<IGetUserResponse> => {
      return axios.get('/user/me', {
        headers: {
          Authorization: `Bearer ${cookies.get('accessToken')}`,
        },
      });
    },
  };
  export const remove = () => {};
  export const put = () => {};
}
