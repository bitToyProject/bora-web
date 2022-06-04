import axios, { AxiosResponse } from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import { END_POINT } from 'constants/url';
import { IAPIResponse, Nullable } from 'types/common.types';
import { storage } from 'utils/storage';
import { RESPONSE_CODE } from './responseSuccess';

const API = axios.create({
  baseURL: END_POINT,
  responseType: 'json',
});

const errorCheck = (err: any) => {
  if (!err || !err.response) {
    return null;
  }

  if (err.response.status && err.response.status === RESPONSE_CODE.UNAUTHORIZED) {
    storage.clear();
    return err.response.data;
  }

  return err.response.data;
};

export const getApi = async <T>(url: string, params?: any) => {
  try {
    setAuthToken(storage.get(ACCESS_TOKEN));

    const res: AxiosResponse<IAPIResponse<T>> = await API({
      url,
      method: 'GET',
      params,
    });

    return res.data;
  } catch (err) {
    return errorCheck(err);
  }
};

export const postApi = async <T>(url: string, params?: any) => {
  try {
    setAuthToken(storage.get(ACCESS_TOKEN));

    const res: AxiosResponse<IAPIResponse<T>> = await API({
      url,
      method: 'POST',
      params,
    });

    return res.data;
  } catch (err) {
    return errorCheck(err);
  }
};

export const putApi = async <T>(url: string, params?: any) => {
  try {
    setAuthToken(storage.get(ACCESS_TOKEN));

    const res: AxiosResponse<IAPIResponse<T>> = await API({
      url,
      method: 'PUT',
      params,
    });

    return res.data;
  } catch (err) {
    return errorCheck(err);
  }
};

export const delAPi = async <T>(url: string, params?: any) => {
  try {
    setAuthToken(storage.get(ACCESS_TOKEN));

    const res: AxiosResponse<IAPIResponse<T>> = await API({
      url,
      method: 'DELETE',
      params,
    });

    return res.data;
  } catch (err) {
    return errorCheck(err);
  }
};
const setAuthToken = (token: Nullable<string>) => {
  if (typeof token === 'string') {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};
