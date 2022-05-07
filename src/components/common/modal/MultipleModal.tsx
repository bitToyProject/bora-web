import styled from '@emotion/styled';
import React from 'react';
import CloseButton from '../button/CloseButton';

interface Props {
  text: string;
  children: any;
  onClose?: () => void;
}

const MultipleModal = ({ children, text, onClose }: Props) => {
  return (
    <MutipleModalBlock>
      <CloseButton onClose={onClose} backgroudColor="#000" />
      <Header>
        <Title>{text}</Title>
      </Header>
      <Body>{children}</Body>
    </MutipleModalBlock>
  );
};

export default MultipleModal;

export const MutipleModalBlock = styled.div`
  z-index: 9;
  position: absolute;
  height: 100%;
  width: 50%;
  border-radius: 10px;
  background-color: #000;
  top: 0;
  left: 30%;
  margin-right: -50%;
  transform: translate(-50% -50%);
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 34px;
  color: #fff;
`;

export const Body = styled.div`
  padding: 20px;
`;
