import styled from '@emotion/styled';
import { authAPI } from 'apis/auth';
import axios from 'axios';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { ISignupRequest } from 'types/auth.types';
import { validation } from 'utils/validation';
import React from 'react';
import GamicType from 'components/common/text/GamicType';
interface Props {}

// unknown type 가드

const SignupPage = ({ ...props }: Props) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [signupVal, setSignupVal] = useState<ISignupRequest>({
    authority: 0,
    firstName: '',
    gender: 0,
    lastName: '',
    nickName: '',
    password: '',
    phoneNum: '',
    title: 0,
    username: '',
    checkPassword: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupVal({
      ...signupVal,
      [name]: value,
    });
  };

  const { mutate, status, error, isLoading } = useMutation(
    ['registerReq'],
    (val: ISignupRequest) => authAPI.post.signup(val),
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          navigate('/login');
        }
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
        } else {
        }
      },
    },
  );

  const reqSignup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validation.hasNull(Object.values(signupVal))) {
      mutate(signupVal);
    } else {
      alert('필수값들을 입력해주세요');
    }
  };

  return (
    // <SignupBox>
    //   <NextBtnBox>
    //     <TextButton>123</TextButton>
    //   </NextBtnBox>
    // </SignupBox>
    <>
      <AnimationTyping>
        <div className="input-wrapper">
          <input aria-label="Ask us anything" />
          <span className="placeholder"></span>
        </div>
      </AnimationTyping>

      {/* <div className="type"></div>
      <label>이메일</label>
      <Input
        type="email"
        name="username"
        value={signupVal.username}
        onChange={(e) => handleInputChange(e)}
      />

      <label>비밀번호</label>
      <Input
        type="password"
        name="password"
        value={signupVal.password}
        onChange={(e) => handleInputChange(e)}
      />

      <label>비밀번호 확인</label>
      <Input
        type="password"
        name="checkPassword"
        value={signupVal.checkPassword}
        onChange={(e) => handleInputChange(e)}
      />

      <label>성</label>
      <Input
        type="text"
        name="firstName"
        value={signupVal.firstName}
        onChange={(e) => handleInputChange(e)}
      />

      <label>이름</label>
      <Input
        type="text"
        name="lastName"
        value={signupVal.lastName}
        onChange={(e) => handleInputChange(e)}
      />

      <label>전화번호</label>
      <IMaskInput
        type="tel"
        mask={'000-0000-0000'}
        value={signupVal.phoneNum}
        name="phoneNum"
        unmask={true}
        onAccept={(value, mask) => {
          // console.log(isString(value));
          setSignupVal({ ...signupVal, phoneNum: value as string });

          // if (isString(value)) {
          //   setSignupVal({ ...signupVal, phoneNum: value });
          // }
        }}
      />
      <label>닉네임</label>
      <Input
        type="text"
        name="nickName"
        value={signupVal.nickName}
        onChange={(e) => handleInputChange(e)}
      />
      <NextBtnBox>
        <Button text={'Move to Login'} onClick={() => navigate('/login')}></Button>
        <Button text={'Play it with BORA'} onClick={(e) => reqSignup(e)}></Button>
      </NextBtnBox> */}
    </>
  );
};

export default SignupPage;

const SignupBox = styled.div`
  position: absolute;
  bottom: -4rem;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 95%;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.5rem solid ${({ theme }) => theme.colors.background};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
  height: 12rem;
  border-radius: 0.5rem;
  opacity: 0.8;
`;

const NextBtnBox = styled.div``;

const AnimationTyping = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100%;
  .input-wrapper {
    display: block;
    font-family: monospace;
    font-size: 125%;
    width: 50%;
    > input,
    > .placeholder {
      display: block;
      appearance: none;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
    }
    > .placeholder {
      pointer-events: none;
      @include typed(
        'How many roads must a man walk down before you call him a man?',
        'How many seas must a white dove sail before she sleeps in the sand?',
        "The answer, my friend, is blowin' in the wind",
        1.5,
        (
          caret-width: 2px,
          caret-space: 2px,
        )
      );
    }
    > input {
      &:focus,
      &:active {
        + .placeholder {
          display: none;
        }
      }
    }
  }
`;
