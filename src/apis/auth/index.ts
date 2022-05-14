import axios, { AxiosPromise } from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import {
  ICheckUsernameResponse,
  ILoginRequest,
  ILoginResponse,
  IReissueRequest,
  IReissueResponse,
  ISignupRequest,
  ISignupResponse,
} from 'types/auth.types';
import { storage } from 'utils/storage';

interface IGetRequest<Q, P> {
  query?: Q;
  parmas?: P;
}

interface IPostRequest {}

export namespace authAPI {
  export const get = {
    check: (
      request: IGetRequest<{ username: string }, {}>,
    ): AxiosPromise<ICheckUsernameResponse> => {
      return axios.get(`/auth/check/${request.query?.username}`, {
        headers: {
          Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
        },
      });
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
