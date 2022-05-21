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
      <BackgroundInner>
        <BackgroundMap src="/img/background.png" />
        <Todo onClick={handleClickTodo}>
          <Label>할일</Label>
        </Todo>
      </BackgroundInner>
    </BackgroundBlock>
  );
};

export default Background;

const BackgroundBlock = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
const BackgroundInner = styled.div`
  position: relative;
  margin: 20rem;
`;

const BackgroundMap = styled.img`
  border: 2mm ridge white;
  min-width: 100%;
  max-height: 100%;
`;

const Todo = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  top: 40px;
  left: 120px;
  cursor: pointer;
  background-color: white;
`;

const Label = styled.span`
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
