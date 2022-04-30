import styled from '@emotion/styled';
import React from 'react';
import { ITodo } from 'types/todo.types';

interface Props {
  item: ITodo;
  onDetail?: (item: ITodo) => void;
}

const TodoCard = ({ item, onDetail }: Props) => {
  const handleClick = () => {
    onDetail && onDetail(item);
  };

  return (
    <TodoCardBlock onClick={handleClick}>
      <CardTitle>{item.title}</CardTitle>
      <CardContent>{item.description}</CardContent>
      <CardFooter>
        <Priority>{item.priority}</Priority>
        <CardAuthor>{item.nickname}</CardAuthor>
      </CardFooter>
    </TodoCardBlock>
  );
};

export default TodoCard;

const TodoCardBlock = styled.div``;

const CardTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const CardContent = styled.div`
  margin-top: 20px;
`;

const CardFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Priority = styled.div``;

const CardAuthor = styled.div`
  display: flex;
`;
