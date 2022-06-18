import styled from '@emotion/styled';
import { ACCESS_TOKEN } from 'constants/token';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from 'utils/storage';
import { SignupPage } from './index';

const SignupContainer = () => {
  const navigate = useNavigate();

  return (
    <SignupWrapper>
      <SignupPage />
    </SignupWrapper>
  );
};

export default SignupContainer;

const SignupWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-image: url('/assets/signup_background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
`;
