import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { userAPI } from 'apis/user';
import LoginContainer from 'components/login/LoginContainer';
import { ACCESS_TOKEN } from 'constants/token';
import React, { Children, useCallback } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from 'store/user/user';
import { storage } from 'utils/storage';

interface IPrivateRouteProps {
  element: any;
}

function PrivateRoute({ element }: IPrivateRouteProps) {
  const [user, setUser] = useRecoilState(userState);

  const isLoggedIn = useCallback((): boolean => {
    if (user) return true;

    if (storage.get(ACCESS_TOKEN)) {
      userAPI.get.user().then((res) => {
        setUser(res.data);
      });

      return true;
    }

    return false;
  }, []);

  if (isLoggedIn()) {
    return element;
  }

  return <Navigate replace to="/login" />;
}

export default PrivateRoute;
