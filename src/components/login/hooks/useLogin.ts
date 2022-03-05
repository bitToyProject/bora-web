import { authAPI } from 'apis/auth';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { authState } from 'store/auth/auth';
import { ILoginRequest } from 'types/auth.types';

export const useLogin = () => {
  const [state, setValue] = useState<ILoginRequest>({ username: '', password: '' });
  const [_, setAuth] = useRecoilState(authState);
  const user = useMutation((loginValue: ILoginRequest) => authAPI.post.login(loginValue), {
    onSuccess: (data, variables, contxt) => {
      setAuth(data.data);
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

  const onClickLogin = () => {
    user.mutate(state);
  };

  useEffect(() => {}, []);

  return { state, event: { onChangeUsername, onChangePassword, onClickLogin } };
};
