import styled from '@emotion/styled';
import Input from 'components/common/Input';
import React from 'react';
import { useNavigate } from 'react-router';
import { theme } from 'styles/theme';
import { useLogin } from './hooks/useLogin';

const LoginContainer = () => {
  const { state: user, event } = useLogin();
  const navigate = useNavigate();

  return (
    <Form onSubmit={event.onSubmitForm}>
      <Header>Sign in to Bora</Header>
      <InputContainer>
        <InputWrapper>
          <label>username</label>
          <Input
            value={user.username}
            onChange={event.onChangeUsername}
            placeholder="아이디를 입력해주세요."
            style={{ height: 28 }}
          />
        </InputWrapper>
        <InputWrapper>
          <label>password</label>
          <Input
            value={user.password}
            onChange={event.onChangePassword}
            placeholder="비밀번호를 입력해주세요."
            style={{ height: 28 }}
          />
        </InputWrapper>
        <Button>sign in</Button>
        <Button onClick={() => navigate('/signup')}>sign Up</Button>
      </InputContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 25%;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 6px;
`;

const Header = styled.div`
  font-size: 1.5rem;
  padding: 20px 30px;
  width: 100%;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
`;

// const Input = styled.input`
//   height: 48px;
//   padding: 16px;
//   border: 1px solid gray;
//   border-radius: 4px;
// `;

const Button = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export default LoginContainer;
