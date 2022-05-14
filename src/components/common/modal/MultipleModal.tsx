import styled from '@emotion/styled';
import React, { PropsWithChildren, useEffect } from 'react';
import CloseButton from '../button/CloseButton';

interface Props {
  text: string;
  onClose?: () => void;
  cleanup?: () => void;
}

const MultipleModal = ({ children, text, onClose, cleanup }: PropsWithChildren<Props>) => {
  useEffect(() => {
    return cleanup;
  }, []);
  return (
    <MutipleModalBlock>
      <CloseButton onClose={onClose} />
      <Header>
        <Title>{text}</Title>
      </Header>
      <Body>{children}</Body>
    </MutipleModalBlock>
  );
};

export default MultipleModal;

export const MutipleModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  width: 33%;
  background-color: #000;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 20px 0;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 34px;
  color: #fff;
`;

export const Body = styled.div`
  padding: 20px;
`;
