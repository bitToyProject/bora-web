import styled from '@emotion/styled';
import React, { MouseEvent } from 'react';

interface Props {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <ButtonWrapper>
      <button onClick={onClick}>{text}</button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  button {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border: none;
    color: #fff;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.main};
    cursor: pointer;
  }
`;
