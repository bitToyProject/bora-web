import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import React from 'react';
interface Props {
  children: ReactJSXElement | ReactJSXElement[];
  label: string;
  props?: any;
}
const LabelLayout = ({ children, label, ...props }: Props) => {
  return (
    <>
      <LabelName>{label}</LabelName>
      <ChildrenContent>{children}</ChildrenContent>
    </>
  );
};

export default LabelLayout;

const LabelName = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;
const ChildrenContent = styled.div`
  margin-top: 0.5rem;
  width: 100%;
`;
