import { atom } from 'recoil';
import { gender } from 'types/user.types';

export interface IUserState {
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nickname: string;
  gender: number;
}

export const userState = atom<IUserState | null>({
  key: 'user',
  default: null,
});
