import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from 'store/auth/auth';
import { useLogin } from './hooks/useLogin';

const LoginContainer = () => {
  const { state, event } = useLogin();

  return (
    <Form onSubmit={event.onSubmitForm}>
      <Header>Sign in to Bora</Header>
      <InputBox>
        <input
          value={state.username}
          onChange={event.onChangeUsername}
          placeholder="아이디를 입력해주세요."
        />
        <input
          value={state.password}
          onChange={event.onChangePassword}
          placeholder="비밀번호를 입력해주세요."
        />
        <button>로그인</button>
      </InputBox>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  padding: 40px 20px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
`;

export default LoginContainer;
