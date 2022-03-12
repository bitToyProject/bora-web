import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { userAPI } from 'apis/user';
import LoginContainer from 'components/login/LoginContainer';
import React, { useCallback } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from 'store/user/user';
import Cookies from 'universal-cookie';

interface IPrivateRouteProps {
  path: string;
}

function PrivateRoute({ path }: IPrivateRouteProps) {
  const [user, setUser] = useRecoilState(userState);

  const isLoggedIn = useCallback((): boolean => {
    const cookies = new Cookies();

    if (user) return true;

    if (cookies.get('accessToken')) {
      userAPI.get.user().then((res) => {
        setUser(res.data);
      });

      return true;
    }

    return false;
  }, []);

  if (isLoggedIn()) {
    return <Navigate replace to={path} />;
  }

  return <Navigate replace to="/auth/login" />;
}

export default PrivateRoute;
