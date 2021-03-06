import { userAPI } from 'apis/user';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { IUserState, userState } from 'store/user/user';
import { gender } from 'types/user.types';
import MypageTemplate from './MypageTemplate';

const MypageContainer = () => {
  const modifyUser = useMutation(
    (value: IUserState) =>
      userAPI.put.modifyUser({
        ...inputs,
      }),
    {
      onSuccess: (data, variables, contxt) => {
        alert('사용자 정보가 변경 되었습니다.');
      },
      onError: (err) => {
        return;
      },
    },
  );

  const user = useRecoilValue<IUserState | null>(userState);

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [inputs, setInputs] = useState<IUserState>({
    username: '',
    firstName: '',
    nickname: '',
    lastName: '',
    phoneNumber: '',
    gender: gender.남,
  });

  useEffect(() => {
    if (user) {
      setInputs({ ...user });
    }
  }, [user]);

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

  const handleSubmit = async () => {
    const isOk = window.confirm('사용자 정보를 변경 하시겠습니까?');

    if (!isOk) {
      return false;
    }

    await modifyUser.mutate({ ...inputs });
  };

  if (!user) return <>Loading</>;

  return (
    <MypageTemplate
      lastName={
        <Input
          disabled
          name="lastName"
          value={inputs.lastName}
          type={'text'}
          placeholder={'이름'}
          onChange={handleInput}
        />
      }
      firstName={
        <Input
          disabled
          name="firstName"
          value={inputs.firstName}
          type={'text'}
          placeholder={'성'}
          onChange={handleInput}
        />
      }
      nickname={
        <Input
          name="nickname"
          value={inputs.nickname}
          type={'text'}
          placeholder={'닉네임'}
          onChange={handleInput}
        />
      }
      phoneNumber={
        <Input
          disabled
          name="phoneNumber"
          value={inputs.phoneNumber}
          type={'text'}
          placeholder={'번호'}
          onChange={handleInput}
        />
      }
      gender={
        <Select
          options={[
            {
              name: '남',
              value: gender.남,
            },
            {
              name: '여',
              value: gender.여,
            },
          ]}
          value={selectedOption}
          onChange={setSelectedOption}
        />
      }
      SubmitButton={<Button text={'변경하기'} onClick={handleSubmit} />}
    />
  );
};

export default MypageContainer;
