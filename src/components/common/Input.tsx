import styled from '@emotion/styled';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input = (props: Props) => {
  return (
    <InputWrapper>
      <input {...props} />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 48px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    background-color: #000;
    color: #fff;

    :focus {
      outline: none;
    }

    @media (min-width: 800px) {
      max-width: 100%;
    }
  }
`;
