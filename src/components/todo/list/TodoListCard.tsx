import styled from '@emotion/styled';
import React from 'react';
import { ITodo } from 'types/todo.types';

interface Props {
  item: ITodo;
}

const TodoListCard = ({ item }: Props) => {
  return (
    <TodoListCardBlock>
      <CardTitle>{item.title}</CardTitle>
      <Assignee>{item.nickname}</Assignee>
      <Period>
        {item.start} ~ {item.end}
      </Period>
      <Priority> {item.priority}</Priority>
      {item.point}
    </TodoListCardBlock>
  );
};

export default TodoListCard;

const TodoListCardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const Period = styled.span``;

const Priority = styled.div`
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 8px;
`;

const Assignee = styled.div``;
