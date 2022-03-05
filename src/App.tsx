import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import theme from 'styles/theme';
import { useRecoilState } from 'recoil';
import { authState } from 'store/auth/auth';
import LoginContainer from 'components/login/LoginContainer';

const App = () => {
  const [auth, setAiuth] = useRecoilState(authState);

  console.log(auth);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Suspense fallback={<div> LOADING......</div>}>
          <Wrapper>
            <Routes>
              <Route path={'/user/signup'} element={<SignupContainer />} />
              <Route path={'/auth/login'} element={<LoginContainer />} />
            </Routes>
          </Wrapper>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
