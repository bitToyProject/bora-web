import axios, { AxiosPromise } from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import { IUserState } from 'store/user/user';
import { storage } from 'utils/storage';

export namespace userAPI {
  export const get = {
    user: (): AxiosPromise<IUserState> => {
      return axios.get('/user/me', {
        headers: {
          Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
        },
      });
    },
  };
  export const put = {
    modifyUser: (parameter: IUserState): AxiosPromise<boolean> => {
      return axios.put('/user/modifyUser', parameter, {
        headers: {
          Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
        },
      });
    },
  };
}
