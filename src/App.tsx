import { Global, ThemeProvider } from '@emotion/react';
import PrivateRoute from 'components/common/PrivateRoute';
import HomeContainer from 'components/home/HomeContainer';
import { StartContainer } from 'components/home/StartContainer';
import LoginPage from 'components/login/LoginPage';
import { Naver, NaverRedirect } from 'components/login/oauths/Naver';
import MypageContainer from 'components/mypage/MypageContainer';
import { SignupContainer } from 'components/signup/index';
import TodoContainer from 'components/todo/TodoContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

const App = () => {
  console.log(process.env.REACT_APP_NAVER_CLIENT_ID);
  console.log(process.env);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<StartContainer />} />
        <Route path="/map" element={<HomeContainer />}>
          <Route path="/map/todo" element={<TodoContainer />} />
        </Route>

        <Route path="/mypage" element={<PrivateRoute element={<MypageContainer />} />} />
        <Route path="/signup" element={<SignupContainer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/redirect" element={<NaverRedirect />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
