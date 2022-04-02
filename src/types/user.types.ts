import { IUserState } from 'store/user/user';

export const gender = {
  남: 1,
  여: 2,
} as const;

export interface IGetUserResponse extends IUserState {}
