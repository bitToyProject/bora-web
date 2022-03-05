import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from 'store/auth/auth';
import { useLogin } from './hooks/useLogin';

const LoginContainer = () => {
  const { state, event } = useLogin();

  return (
    <div style={{ display: 'flex' }}>
      <div>로그인</div>
      <input
        value={state.username}
        onChange={event.onChangeUsername}
        placeholder="아이디를 입력해주세요."
      />
      <input
        value={state.password}
        onChange={event.onChangePassword}
        placeholder='"비밀번호를 입력해주세요.'
      />
      <button onClick={event.onClickLogin}>로그인</button>
    </div>
  );
};

export default LoginContainer;
