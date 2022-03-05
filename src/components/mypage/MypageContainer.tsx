import { userAPI } from 'apis/auth';
import { MypageTemplate } from 'components';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import React, { ChangeEvent, useState } from 'react';
import { IUser } from 'types/user.types';

const MypageContainer = () => {
  const [inputs, setInputs] = useState<IUser>({
    username: '',
    firstName: '',
    lastName: '',
    phoneNum: '',
    gender: 0,
  });

  const setValue = (name: string, value: string) => {
    setInputs((v) => {
      return {
        ...v,
        [name]: value,
      };
    });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  const handleSubmit = () => {};

  return (
    <>
      <MypageTemplate
        lastName={
          <Input name="lastName" type={'text'} placeholder={'이름'} onChange={handleInput} />
        }
        firstName={
          <Input name="firstName" type={'text'} placeholder={'이름'} onChange={handleInput} />
        }
        phoneNum={
          <Input name="phoneNum" type={'text'} placeholder={'번호'} onChange={handleInput} />
        }
        gender={<Input name="gender" type={'text'} placeholder={'성별'} onChange={handleInput} />}
        SubmitButton={<Button text={'변경하기'} onClick={handleSubmit} />}
      />
    </>
  );
};

export default MypageContainer;
