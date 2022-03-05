import styled from '@emotion/styled';
import React from 'react';

interface Props {
  lastName: React.ReactElement;
  firstName: React.ReactElement;
  phoneNum: React.ReactElement;
  gender: React.ReactElement;
  SubmitButton: React.ReactElement;
}

const MypageTemplate = ({ lastName, firstName, phoneNum, gender, SubmitButton }: Props) => {
  return (
    <MypageTemplateBlock>
      <Title>마이페이지</Title>
      <InputWrapper>
        <label>이름</label>
        {firstName}
      </InputWrapper>
      <InputWrapper>
        <label>이름</label>
        {lastName}
      </InputWrapper>
      <InputWrapper>
        <label>성별</label>
        {gender}
      </InputWrapper>
      <InputWrapper>
        <label>전화번호</label>
        {phoneNum}
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
const ButtonWrapper = styled.div``;
