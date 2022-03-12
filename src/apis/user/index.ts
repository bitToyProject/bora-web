import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import { IUserState } from 'store/user/user';
import { storageToken } from 'utils/storage';
import { IGetUserResponse } from '../../types/user.types';

export namespace userAPI {
  export const get = {
    user: (): AxiosPromise<IUserState> => {
      return axios.get('/user/me', {
        headers: {
          Authorization: `Bearer ${storageToken.get()}`,
        },
      });
    },
  };
  export const put = {
    modifyUser: (parameter: IUserState): AxiosPromise<boolean> => {
      return axios.put('/user/modifyUser', parameter, {
        headers: {
          Authorization: `Bearer ${storageToken.get()}`,
        },
      });
    },
  };
}
