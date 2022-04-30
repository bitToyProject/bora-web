import { Global, ThemeProvider } from '@emotion/react';
import PrivateRoute from 'components/common/PrivateRoute';
import HomeContainer from 'components/home/HomeContainer';
import LoginContainer from 'components/login/LoginContainer';
import MypageContainer from 'components/mypage/MypageContainer';
import { SignupContainer } from 'components/signup/index';
import TodoContainer from 'components/todo/TodoContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<HomeContainer />}>
          <Route path="/todo" element={<TodoContainer />} />
        </Route>
        <Route path="/mypage" element={<PrivateRoute element={<MypageContainer />} />} />
        <Route path="/signup" element={<SignupContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
      {/* <UserList /> */}
    </ThemeProvider>
  );
};

export default App;
