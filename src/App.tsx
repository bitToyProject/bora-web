import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import theme from 'styles/theme';
import { useRecoilState } from 'recoil';
import { authState } from 'store/auth/auth';
import LoginContainer from 'components/login/LoginContainer';
import { MypageContainer } from 'components';
import { authAPI } from 'apis/auth';
import { userAPI } from 'apis/user';

const App = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      console.log('로그인 상태');
      return;
    }

    if (!auth) {
      userAPI.get.user().then((res) => {
        setAuth(res.data);
      });
      return;
    }

    console.log('재 로그인 필요');
  }, []);
  console.log(auth);

  return (
    <>
      {auth ? (
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
      ) : (
        <div> LOADING......</div>
      )}
    </>
  );
};

export default App;
