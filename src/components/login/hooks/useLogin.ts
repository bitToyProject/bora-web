import { authAPI } from 'apis/auth';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useRoutes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authState } from 'store/auth/auth';
import { ILoginRequest } from 'types/auth.types';
import Cookies from 'universal-cookie/es6';

export const useLogin = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [state, setValue] = useState<ILoginRequest>({ username: '', password: '' });
  const [_, setAuth] = useRecoilState(authState);
  const user = useMutation((loginValue: ILoginRequest) => authAPI.post.login(loginValue), {
    onSuccess: (data, variables, contxt) => {
      cookies.set('accessToken', data.data.accessToken, {
        expires: new Date(data.data.accessTokenExpiresIn),
        path: '/',
      });
      cookies.set('refreshToken', data.data.refreshToken, {
        path: '/',
      });
      setAuth(data.data);
      navigate('/');
    },
  });
  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...state,
      username: event.target.value,
    });
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...state,
      password: event.target.value,
    });
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    user.mutate(state);
  };

  useEffect(() => {
    if (cookies.get('accessToken')) {
      navigate(-1);
    }
  }, []);

  return { state, event: { onChangeUsername, onChangePassword, onSubmitForm } };
};
