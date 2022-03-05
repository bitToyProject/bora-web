import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import { storageToken } from 'utils/storage';
import { IGetUserResponse, IUser } from '../../types/user.types';

export namespace userAPI {
  export const get = {
    user: () : AxiosPromise<IUser> => {
      return axios.get('/user/me', {
        headers: {
            Authorization: `Bearer ${storageToken.get()}`
        }
    })
    }
  }
  export const put ={
    modifyUser: (parameter: IUser) : AxiosPromise<boolean> => {
      return axios.put('/user/modifyUser', parameter, {
        headers: {
          Authorization: `Bearer ${storageToken.get()}`
      }
      })
    }
  };
}
