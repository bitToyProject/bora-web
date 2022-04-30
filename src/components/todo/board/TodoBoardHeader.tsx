import styled from '@emotion/styled';
import React from 'react';

interface Props {
  text: string;
  color: string;
  total?: number;
  onClick?: () => void;
}

const TodoBoardHeader = ({ text, color, total, onClick }: Props) => {
  return (
    <TodoHeaderBlock color={color}>
      <Left>
        <Title>{text}</Title>

        <CountBox>
          <Count>{total}</Count>
        </CountBox>
      </Left>

      <Right>
        <PlusButton onClick={onClick}>+</PlusButton>
      </Right>
    </TodoHeaderBlock>
  );
};

export default TodoBoardHeader;

const TodoHeaderBlock = styled.div<{ color: string }>`
  border-top: 4px solid ${(props) => props.color};
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 30px;
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div``;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
`;

const CountBox = styled.div`
  border-radius: 20px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  padding: 0 10px;
`;

const PlusButton = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
