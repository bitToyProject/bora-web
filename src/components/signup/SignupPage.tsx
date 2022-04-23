import styled from '@emotion/styled';
import { authAPI } from 'apis/auth';
import axios from 'axios';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { ISignupRequest } from 'types/auth.types';
import { validation } from 'utils/validation';

interface Props {}

// unknown type 가드

const SignupPage = ({ ...props }: Props) => {
  const navigate = useNavigate();
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
    <>
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
      <SingupBtnBox>
        <Button text={'Move to Login'} onClick={() => navigate('/login')}></Button>
        <Button text={'Play it with BORA'} onClick={(e) => reqSignup(e)}></Button>
      </SingupBtnBox>
    </>
  );
};

export default SignupPage;

const SingupBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
