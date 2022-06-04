import styled from '@emotion/styled';
import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const Textarea = (props: Props) => {
  return (
    <TextareaBlock>
      <textarea {...props} />
    </TextareaBlock>
  );
};

export default Textarea;

export const TextareaBlock = styled.div`
  textarea {
    width: 100%;
    height: 10rem;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;
