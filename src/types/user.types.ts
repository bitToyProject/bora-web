import { IAuthState } from 'store/auth/auth';

export interface IGetUserResponse {
  username: string;
}

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  gender: number;
}

export interface IGetUserResponse extends IAuthState {}
