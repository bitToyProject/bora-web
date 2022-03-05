import { atom, selector } from 'recoil';
import { ILoginResponse } from 'types/auth.types';

export const authState = atom<ILoginResponse>({
  key: 'auth',
  default: {
    data: { accessToken: '', accessTokenExpiresIn: 0, refreshToken: '' },
    status: 0,
  },
});

// export const authSelector = selector({
//   key: 'auth',
//   get:
// })
