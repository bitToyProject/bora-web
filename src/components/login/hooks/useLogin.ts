import { authAPI } from 'apis/auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/token';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useRoutes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from 'store/user/user';
import { ILoginRequest } from 'types/auth.types';
import Cookies from 'universal-cookie/es6';
import { storage } from 'utils/storage';

export const useLogin = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [state, setValue] = useState<ILoginRequest>({ username: '', password: '' });
  const [_, setAuth] = useRecoilState(userState);
  const user = useMutation((loginValue: ILoginRequest) => authAPI.post.login(loginValue), {
    onSuccess: (data, variables, contxt) => {
      storage.set(ACCESS_TOKEN, data.data.accessToken);
      storage.set(REFRESH_TOKEN, data.data.refreshToken);
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
    if (storage.get(ACCESS_TOKEN)) {
      navigate(-1);
    }
  }, []);

  return { state, event: { onChangeUsername, onChangePassword, onSubmitForm } };
};
