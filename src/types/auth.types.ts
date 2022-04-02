import { authorityEnum, titleEnum } from 'constants/enum';
import { IUserState } from 'store/user/user';

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse extends IUserState {
  accessToken: string;
  accessTokenExpiresIn: number;
  grantType: string;
  refreshToken: string;
}

export interface IReissueRequest {
  accessToken: string;
  refreshToken: string;
}

export interface IReissueResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
  };
  status: number;
}

export interface ISignupRequest {
  // userId?: number;
  // authKey?: string;
  authority: authorityEnum;
  firstName: string;
  gender: number;
  lastName: string;
  nickName: string;
  password: string;
  phoneNum: string;
  title: titleEnum;
  username: string;
  checkPassword?: string;
}

export interface ISignupResponse {}

export type ICheckUsernameResponse = boolean;
