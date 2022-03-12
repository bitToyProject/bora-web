import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import { useRecoilState } from 'recoil';
import LoginContainer from 'components/login/LoginContainer';
import { MypageContainer } from 'components';
import { userAPI } from 'apis/user';
import { userState } from 'store/user/user';
import Cookies from 'universal-cookie/es6';
import PrivateRoute from 'components/common/PrivateRoute';
import { theme } from 'styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Suspense fallback={<div> LOADING......</div>}>
          <Wrapper>
            <Routes>
              <Route path="/" element={<PrivateRoute element={<></>} />} />
              <Route path="/mypage" element={<PrivateRoute element={<MypageContainer />} />} />
              <Route path="/signup" element={<PrivateRoute element={<SignupContainer />} />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </Wrapper>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
