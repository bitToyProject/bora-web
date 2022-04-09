import { atom } from 'recoil';

export interface IUserState {
  // [key: string]: string | number | undefined;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nickname: string;
  gender: number;
  password?: string;
  phoneNum?: string;
  checkPassword?: string;
}

export const userState = atom<IUserState | null>({
  key: 'user',
  default: null,
});
