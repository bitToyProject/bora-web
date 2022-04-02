import styled from '@emotion/styled';
import { SignupPage } from './index';

const SignupContainer = () => {
  return (
    <SignupWrapper>
      <h2>회원 가입</h2>
      <SignupPage />
    </SignupWrapper>
  );
};

export default SignupContainer;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 1;
  padding: 2rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  label {
    font-weight: bold;
    margin: 0.5rem 0;
  }
  input {
    height: 48px;
    padding: 10px;
    border: 1px solid #e0e3e6;
    border-radius: 4px;
    @media (min-width: 800px) {
      max-width: 100%;
    }
  }
  button {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }
`;
