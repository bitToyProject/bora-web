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
import LabelLayout from 'layouts/wrapper/LabelLayout';

const LoginContainer = () => {
  const navigate = useNavigate();

  const [state, setValue] = useState<ILoginRequest>({ username: '', password: '' });
  const [_, setAuth] = useRecoilState(userState);

  const user = useMutation((loginValue: ILoginRequest) => authAPI.post.login(loginValue), {
    onSuccess: (data) => {
      console.log(data);
      storage.set(ACCESS_TOKEN, data.data.accessToken);
      storage.set(REFRESH_TOKEN, data.data.refreshToken);
      setAuth(data.data);
      navigate('/');
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

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    user.mutate(state);
  };
  console.log('storage.get(ACCESS_TOKEN)', storage.get(ACCESS_TOKEN));

  // useEffect(() => {
  //   if (storage.get(ACCESS_TOKEN)) {
  //     navigate(-1);
  //   }
  // }, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <Header>Sign in to Bora</Header>
      <InputContainer>
        <LabelLayout label="username">
          <Input
            value={user.data?.data.username}
            onChange={onChangeUsername}
            placeholder="아이디를 입력해주세요."
          />
        </LabelLayout>
        <LabelLayout label="password">
          <Input
            value={user.data?.data.username}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요."
          />
        </LabelLayout>
        <BtnBox>
          <Button>sign in</Button>
          <Button onClick={() => navigate('/signup')}>sign Up</Button>
        </BtnBox>
      </InputContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 1.5rem;
  padding: 20px 30px;
  width: 100%;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const BtnBox = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  color: #fff;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export default LoginContainer;
