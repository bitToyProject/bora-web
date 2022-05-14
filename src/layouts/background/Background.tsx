import styled from '@emotion/styled';
import React, { MouseEvent } from 'react';

interface Props {
  onToggle?: (pathname: string) => void;
}

const Background = ({ onToggle }: Props) => {
  const handleClickTodo = (e: MouseEvent) => {
    onToggle && onToggle('/todo');
  };

  return (
    <BackgroundBlock>
      <BackgroundMap src="/img/background.png" />
      <Todo onClick={handleClickTodo}>
        <LabelWrapper>
          <Label>할일</Label>
        </LabelWrapper>
      </Todo>
    </BackgroundBlock>
  );
};

export default Background;

const BackgroundBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackgroundMap = styled.img`
  width: 100%;
  height: 100%;
`;

const Todo = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 5;
  top: 20px;
  left: 265px;
  cursor: pointer;
`;

const LabelWrapper = styled.div`
  background-color: #000;
  padding: 10px;
  border-radius: 8px;
  height: 40px;
`;

const Label = styled.span`
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
