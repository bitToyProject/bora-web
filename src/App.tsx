import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router';
import SignupContainer from 'components/signup/SignupContainer';

const App = () => {
  return (
    <>
      <Suspense fallback={<div> LOADING......</div>}>
        <Routes>
          <Route path={'user/signup'} element={<SignupContainer />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
