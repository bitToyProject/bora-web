import { atom, selector } from 'recoil';
import { ILoginResponse } from 'types/auth.types';

export interface IAuthState {
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: number;
}

export const authState = atom<IAuthState | null>({
  key: 'auth',
  default: null,
});

// export const authSelector = selector({
//   key: 'auth',
//   get:
// })
