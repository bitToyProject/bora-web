import styled from '@emotion/styled';
import React, { PropsWithChildren, useEffect } from 'react';
import CloseButton from '../button/CloseButton';

interface Props {
  text: string;
  onClose?: () => void;
  cleanup?: () => void;
  width?: string;
}

const MultipleModal = ({ children, text, width, onClose, cleanup }: PropsWithChildren<Props>) => {
  useEffect(() => {
    return cleanup;
  }, []);

  return (
    <MultipleModalBlock width={width}>
      <CloseButton onClose={onClose} />
      <Header>
        <Title>{text}</Title>
      </Header>
      {children}
    </MultipleModalBlock>
  );
};

export default MultipleModal;

export const MultipleModalBlock = styled.div<{ width?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  padding: 1.25rem;
  background-color: #292a2d;
  min-width: ${({ width }) => (width ? width : 'fit-content')};
  max-width: 60%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
