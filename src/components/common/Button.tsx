import styled from '@emotion/styled';
import React from 'react';
import theme from 'styles/theme';

interface Props {
  text: string;
  onClick: () => void;
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
    width: 150px;
    height: 50px;
    padding: 10px;
    border: none;
    color: #fff;
    border-radius: 8px;
    background-color: ${theme.colors.main};
    cursor: pointer;
  }
`;
