import styled from '@emotion/styled';
import React from 'react';
import { TodoListType } from 'types/todo.types';
import TodoBoardContainer from './board/TodoBoardContainer';

interface Props {
  type: string;
}

const TodoListContainer = ({ type }: Props) => {
  if (type === TodoListType.list) {
    return <></>;
  }

  if (type === TodoListType.calender) {
    return <></>;
  }

  return (
    <Board>
      <TodoBoardContainer text="Todo" color="#897cf8" />
      <TodoBoardContainer text="In Progress" color="#fc587e" />
      <TodoBoardContainer text="Review" color="#ffd32d" />
      <TodoBoardContainer text="Done" color="#7bc95f" />
    </Board>
  );
};

export default TodoListContainer;

const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
