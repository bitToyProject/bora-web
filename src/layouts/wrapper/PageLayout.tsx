import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
interface Props {
  children: ReactJSXElement | ReactJSXElement[];
  label: string;
  props?: any;
}
export const LabelLayout = ({ children, label, ...props }: Props) => {
  return (
    <LabelWrapper>
      <LabelName>{label}</LabelName>
      <ChildrenContent>{children}</ChildrenContent>
    </LabelWrapper>
  );
};

export const ColLayout = ({
  elements,
  columns,
  children,
  autoFill,
  ...props
}: {
  elements?: {
    size: string;
    component: ReactNode;
  }[];
  columns?: string[];
  children?: any;
  autoFill?: boolean;
}) => {
  children = !children ? [] : Array.isArray(children) ? children : [children];
  columns = columns ?? [...Array(children.length)].map(() => '1fr');
  elements = elements ?? [];
  columns = [...elements.map((v) => v.size), ...columns];
  return (
    <ColsDiv columns={columns} {...props}>
      {elements.map((e, i) => (
        <ColsIn key={i}>{e.component}</ColsIn>
      ))}
      {children.map((c: any, i: number) => (
        <ColsIn key={i}>{c}</ColsIn>
      ))}
    </ColsDiv>
  );
};

const ColsDiv = styled.div<{
  columns: string[];
  autoFill?: boolean;
}>`
  display: grid;
  grid-template-columns: ${({ autoFill }) =>
    `repeat (${autoFill ? `auto-fill` : `auto-fit`}, minmax(25%, 1fr))`};
`;

const ColsIn = styled.div`
  padding: 0.5rem;
`;

const LabelWrapper = styled.div`
  margin-top: 0.5rem;
`;

const LabelName = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: bold;
`;
const ChildrenContent = styled.div`
  margin-top: 0.5rem;
  width: 100%;
`;
