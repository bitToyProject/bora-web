import styled from '@emotion/styled';
import React, { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from 'react';
import theme from 'styles/theme';

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
  width: 100%;

  input {
    height: 48px;
    padding: 10px;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;

    @media (min-width: 800px) {
      max-width: 600px;
    }
  }
`;
