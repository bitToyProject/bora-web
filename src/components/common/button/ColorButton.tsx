import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import React, { MouseEvent } from 'react';
interface Props {
  fontColor?: string;
  bgColor?: string;
  isWhite?: boolean;
  children: string | ReactJSXElement | ReactJSXElement[];
  onClick: (e: MouseEvent) => void;
}
export const ColorButton = ({ fontColor, bgColor, isWhite, children, onClick }: Props) => {
  return <Button onClick={(e: MouseEvent) => onClick(e)}>{children}</Button>;
};

const Button = styled.button<{ fontColor?: string; bgColor?: string; isWhite?: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 2rem;
  border-radius: 4px;
  padding: 10px;
  color: ${({ fontColor, isWhite, theme }) =>
    fontColor ? fontColor : isWhite ? theme.colors.background : theme.colors.white};
  background-color: ${({ bgColor, isWhite, theme }) =>
    bgColor ? bgColor : isWhite ? theme.colors.white : theme.colors.background};
  border: ${({ fontColor, isWhite, theme }) =>
    isWhite ? (fontColor ? `0.1rem solid ${fontColor}` : 'none') : `none`};
  :hover {
    background-color: ${({ bgColor, isWhite, theme }) =>
      bgColor ? bgColor : isWhite ? theme.colors.gray : theme.colors.background};
    opacity: 0.5;
  }
`;
