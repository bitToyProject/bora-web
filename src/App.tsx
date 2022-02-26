import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Suspense fallback={<div> LOADING......</div>}>
        <Routes>
          <Route path={'/user/signup'} element={<SignupContainer />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
