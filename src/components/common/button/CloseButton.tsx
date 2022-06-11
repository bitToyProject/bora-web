import styled from '@emotion/styled';
import React, { CSSProperties, forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';

interface Props {
  onClose?: () => void;
  style?: CSSProperties;
}

const CloseButton = forwardRef(({ onClose, style }: Props, ref: any) => {
  const buttonColor = style?.backgroundColor === '#fff' ? '#000' : '#fff';
  return (
    <Button ref={ref} style={style}>
      <span onClick={onClose}>
        <IoClose color={buttonColor} fontSize={27} />
      </span>
    </Button>
  );
});

export default CloseButton;

const Button = styled.div<{ backgroudColor?: string }>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: transparent;

  & > span {
    transition: transform 0.17s;
    cursor: pointer;
  }

  & > span:hover {
    transform: rotate(-45deg);
  }
`;
