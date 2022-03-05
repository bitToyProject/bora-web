import { IAuthState } from 'store/auth/auth';

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse extends IAuthState {
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
  authKey: string;
  authority: 'ROLE_ADMIN' | 'ROLE_USER';
  firstName: string;
  gender: number;
  lastName: string;
  nickName: string;
  password: string;
  phoneNum: string;
  title: 'BEGINNER' | 'HUNTER' | 'MASTER' | 'PERFORMER' | 'RAINGER' | 'STARTER';
  userId: number;
  username: string;
}

export interface ISignupResponse {}

export type ICheckUsernameResponse = boolean;
