import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

interface Props {
  lastName: ReactElement;
  firstName: ReactElement;
  nickname: ReactElement;
  phoneNumber: ReactElement;
  gender: ReactElement;
  SubmitButton: ReactElement;
}

const MypageTemplate = ({
  lastName,
  firstName,
  nickname,
  phoneNumber,
  gender,
  SubmitButton,
}: Props) => {
  return (
    <MypageTemplateBlock>
      <Title>마이페이지</Title>
      <InputWrapper>
        <Label>성</Label>
        {firstName}
      </InputWrapper>
      <InputWrapper>
        <Label>이름</Label>
        {lastName}
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임</Label>
        {nickname}
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임</Label>
        {nickname}
      </InputWrapper>
      <InputWrapper>
        <Label>성별</Label>
        {gender}
      </InputWrapper>
      <InputWrapper>
        <Label>전화번호</Label>
        {phoneNumber}
      </InputWrapper>
      <ButtonWrapper>{SubmitButton}</ButtonWrapper>
    </MypageTemplateBlock>
  );
};

export default MypageTemplate;

const MypageTemplateBlock = styled.div``;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  margin: 5px 0;
  display: inline-block;
`;

const ButtonWrapper = styled.div``;
