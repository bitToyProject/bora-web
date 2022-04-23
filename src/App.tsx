import React, { Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Wrapper } from 'layouts';
import LoginContainer from 'components/login/LoginContainer';
import { SignupContainer } from 'components/signup/index';
import PrivateRoute from 'components/common/PrivateRoute';
import { theme } from 'styles/theme';
import TodoContainer from 'components/todo/TodoContainer';
import { MypageContainer } from 'components';
import HomeContainer from 'components/home/HomeContainer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Suspense fallback={<div> LOADING......</div>}>
        <Routes>
          <Route path="/" element={<HomeContainer />}>
            <Route path="/todo" element={<TodoContainer />} />
          </Route>
          <Route path="/mypage" element={<PrivateRoute element={<MypageContainer />} />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
