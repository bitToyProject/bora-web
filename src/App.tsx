import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import LoginContainer from 'components/login/LoginContainer';
import { MypageContainer, TodoContainer } from 'components';
import PrivateRoute from 'components/common/PrivateRoute';
import { theme } from 'styles/theme';

const App = () => {
  const navigate = useNavigate();

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
              <Route path="/todo" element={<PrivateRoute element={<TodoContainer />} />} />
              <Route path="/login" element={<LoginContainer />} />
              {/* <Route path={'/user/mypage'} element={<MypageContainer />} /> */}
            </Routes>
          </Wrapper>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
