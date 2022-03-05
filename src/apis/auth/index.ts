import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import {
  ICheckUsernameResponse,
  ILoginRequest,
  ILoginResponse,
  IReissueRequest,
  IReissueResponse,
  ISignupRequest,
  ISignupResponse,
} from 'types/auth.types';
import { IGetUserResponse } from '../../types/user.types';

export namespace authAPI {
  export const get = {
    check: (params: { username: string }): AxiosPromise<ICheckUsernameResponse> => {
      return axios.get(`/auth/check/${params.username}`);
    },
  };
  export const post = {
    login: (body: ILoginRequest): AxiosPromise<ILoginResponse> => {
      return axios.post(`/auth/login`, body);
    },
    reissue: (body: IReissueRequest): AxiosPromise<IReissueResponse> => {
      return axios.post('/auth/reissue', body);
    },
    signup: (body: ISignupRequest): AxiosPromise<ISignupResponse> => {
      return axios.post('/auth/signup', body);
    },
  };
  export const remove = {};
  export const put = {};
}
