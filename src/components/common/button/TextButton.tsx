import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import React from 'react';
interface Props {
  children: string | ReactJSXElement | ReactJSXElement[];
}
export const TextButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

const Button = styled.button<{ fontColor?: string; bgColor?: string }>``;
