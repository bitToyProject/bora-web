import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { authAPI } from 'apis/auth';
import Input from 'components/common/Input';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { userState } from 'store/user/user';
import { ILoginRequest } from 'types/auth.types';
import { storage } from 'utils/storage';
import axios, { AxiosError } from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/token';
import { LabelLayout } from 'layouts/wrapper/PageLayout';
import { ColorButton } from 'components/common/button/ColorButton';

const LoginPage = () => {
  const navigate = useNavigate();

  const [state, setValue] = useState<ILoginRequest>({ username: '', password: '' });
  const [_, setAuth] = useRecoilState(userState);

  const user = useMutation((loginValue: ILoginRequest) => authAPI.post.login(loginValue), {
    onSuccess: (data) => {
      console.log(data);
      storage.set(ACCESS_TOKEN, data.data.accessToken);
      storage.set(REFRESH_TOKEN, data.data.refreshToken);
      setAuth(data.data);
      navigate('/map');
    },
    onError: (error: AxiosError) => {
      if (axios.isAxiosError(error)) {
        alert(error.message);
      }
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

  const onSubmitForm = () => {
    user.mutate(state);
  };
  console.log('storage.get(ACCESS_TOKEN)', storage.get(ACCESS_TOKEN));

  useEffect(() => {
    if (storage.get(ACCESS_TOKEN)) {
      navigate('/map');
    }
  }, []);

  return (
    <>
      <LabelLayout label="username">
        <Input
          type={'email'}
          value={user.data?.data.username}
          onChange={onChangeUsername}
          placeholder="아이디를 입력해주세요."
        />
      </LabelLayout>
      <LabelLayout label="password">
        <Input
          type={'password'}
          value={user.data?.data.username}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요."
        />
      </LabelLayout>
      <BtnBox>
        <ColorButton onClick={() => onSubmitForm()}>sign in</ColorButton>
        <ColorButton onClick={() => navigate('/signup')}>sign Up</ColorButton>
      </BtnBox>
    </>
  );
};

const BtnBox = styled.div`
  display: flex;
  margin-top: 2.5rem;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default LoginPage;
