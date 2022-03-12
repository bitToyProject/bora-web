import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import theme from 'styles/theme';
import { useRecoilState } from 'recoil';
import LoginContainer from 'components/login/LoginContainer';
import { MypageContainer } from 'components';
import { authAPI } from 'apis/auth';
import { userAPI } from 'apis/user';
import { userState } from 'store/user/user';
import Cookies from 'universal-cookie/es6';

const App = () => {
  const [auth, setAuth] = useRecoilState(userState);
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    const cookies = new Cookies();
    if (auth) return;

    if (cookies.get('accessToken')) {
      userAPI.get.user().then((res) => {
        setAuth(res.data);
      });
    } else {
      navigate('/auth/login');
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Suspense fallback={<div> LOADING......</div>}>
          <Wrapper>
            <Routes>
              <Route path={'/user/signup'} element={<SignupContainer />} />
              <Route path={'/user/mypage'} element={<MypageContainer />} />
              <Route path={'/auth/login'} element={<LoginContainer />} />
            </Routes>
          </Wrapper>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
