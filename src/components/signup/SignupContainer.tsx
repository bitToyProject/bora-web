import styled from '@emotion/styled';
import { Button } from 'components/common';
import TextInput from 'components/common/input/TextInput';
import { useEffect, useRef } from 'react';
import { validation } from 'utils/validation';

const SignupContainer = () => {
  const singupValRef = useRef({
    username: '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    gender: 0,
    phoneNum: '',
    nickName: '',
  });

  return (
    <SignupWrapper>
      <h2>Sign-up</h2>
      <TextInput
        type="text"
        disabled={false}
        placeholder="email"
        onChange={(val) => (singupValRef.current.username = val)}
      />
      {/* <TextInput
        type="password"
        disabled={false}
        placeholder="password"
        onChange={(val) => {
          singupValRef.current.password = val;
        }}
      />
      <TextInput
        type="text"
        disabled={false}
        placeholder="rePassword"
        onChange={(val) => (singupValRef.current.username = val)}
      />
      <TextInput
        type="text"
        disabled={false}
        placeholder="email"
        onChange={(val) => (singupValRef.current.username = val)}
      />
      <TextInput
        type="text"
        disabled={false}
        placeholder="email"
        onChange={(val) => (singupValRef.current.username = val)}
      />
      <TextInput
        type="text"
        disabled={false}
        placeholder="email"
        onChange={(val) => (singupValRef.current.username = val)}
      />
      <TextInput
        type="text"
        disabled={false}
        placeholder="email"
        onChange={(val) => (singupValRef.current.username = val)}
      /> */}
      <Button onClick={(e) => console.log(validation.email(singupValRef.current.username))}>
        Register
      </Button>
    </SignupWrapper>
  );
};

export default SignupContainer;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 1;
  input[type='text'] {
    width: 100%;
  }
  button {
    width: 100%;
  }
`;
