import { atom } from 'recoil';

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
