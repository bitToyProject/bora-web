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
import { Link } from 'react-router-dom';
import { END_POINT } from 'constants/url';
import { Naver } from './oauths/Naver';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
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
    <LoginWrapper>
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
      <OAuthWrapper>
        <Link to={`${END_POINT}/oauth2/authorization/facebook?redirect_uri=/oauth/redirect`}>
          <img src="/img/meta.png" />
        </Link>
        <img
          src="/img/kakao.png"
          onClick={() =>
            axios
              .get(
                `${END_POINT}/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth/redirect`,
                {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'X-Naver-Client-Id': 'hIroIYSwEyKzWByX_nQB',
                    'X-Naver-Client-Secret': 'QjAgsg7mNI',
                  },
                },
              )
              .then((vlaue) => console.log(vlaue.status))
              .catch((e) => console.log(e.status))
          }
        />

        <Naver />
      </OAuthWrapper>
      <BtnBox>
        <ColorButton onClick={() => onSubmitForm()}>sign in</ColorButton>
        <ColorButton onClick={() => navigate('/signup')}>sign Up</ColorButton>
      </BtnBox>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  padding-top: 1.25rem;
`;

const OAuthWrapper = styled.div`
  padding-top: 1.25rem;

  display: flex;
  justify-content: center;
  gap: 1rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: contain;
    cursor: pointer;
  }
`;

const BtnBox = styled.div`
  display: flex;
  padding-top: 1.25rem;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default LoginPage;
