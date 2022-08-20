import axios from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { storage } from 'utils/storage';

export const Naver = () => {
  const { naver } = window as any;
  const env = process.env.NAVER;

  const initializeNaverLogin = () => {
    const env = process.env;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/oauth/redirect',
      clientSecret: env.REACT_APP_NAVER_SECRET_KEY,
      isPopup: true, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
};

export const NaverRedirect = () => {
  const location = useLocation();
  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    axios.post('http://192.168.0.10:8080/oauth2/authorization/naver');
  };
  useEffect(() => {
    getNaverToken();
  }, []);

  return <></>;
};
