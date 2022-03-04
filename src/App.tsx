import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { MypageContainer } from 'components';
import { Wrapper } from 'layouts';
import theme from 'styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Suspense fallback={<div> LOADING......</div>}>
          <Wrapper>
            <Routes>
              <Route path={'/user/signup'} element={<SignupContainer />} />
              <Route path={'/mypage'} element={<MypageContainer />} />
            </Routes>
          </Wrapper>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
