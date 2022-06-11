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
  input {
    width: 100%;
    height: 2.25rem;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
  }
`;
