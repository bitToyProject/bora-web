import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import {
  ICheckUsernameResponse,
  ILoginRequest,
  ILoginResponse,
  IReissueRequest,
  IReissueResponse,
  ISignupRequest,
  ISignupResponse,
} from 'types/auth.types';
import Cookies from 'universal-cookie/es6';

interface IGetRequest<Q, P> {
  query?: Q;
  parmas?: P;
}

interface IPostRequest {}

export namespace authAPI {
  const cookies = new Cookies();
  export const get = {
    check: (
      request: IGetRequest<{ username: string }, {}>,
    ): AxiosPromise<ICheckUsernameResponse> => {
      return axios.get(`/auth/check/${request.query?.username}`, {
        headers: {
          Authorization: `Bearer ${cookies.get('accessToken')}`,
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
