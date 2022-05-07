import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';

interface Props {
  backgroudColor?: string;
  onClose?: () => void;
}

const CloseButton = forwardRef((props: Props, ref: any) => {
  const buttonColor = props.backgroudColor === '#fff' ? '#000' : '#fff';
  return (
    <Button ref={ref} backgroudColor={props.backgroudColor}>
      <span onClick={props.onClose}>
        <IoClose color={buttonColor} fontSize={27} />
      </span>
    </Button>
  );
});

export default CloseButton;

const Button = styled.div<{ backgroudColor?: string }>`
  border-radius: 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px 15px;
  background-color: ${(props) => props.backgroudColor};

  & > span {
    transition: transform 0.17s;
    cursor: pointer;
  }

  & > span:hover {
    transform: rotate(-45deg);
  }
`;
