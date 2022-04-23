import styled from '@emotion/styled';
import { TodoListType } from 'constants/todo';
import React, { useEffect } from 'react';
import { ITodo } from 'types/todo.types';
import TodoBoardContainer from './board/TodoBoardContainer';

interface Props {
  items: ITodo[];
  type: string;
}

const TodoListContainer = ({ items, type }: Props) => {
  if (type === TodoListType.LIST) {
    return <></>;
  }

  if (type === TodoListType.CALENDAER) {
    return <></>;
  }

  return (
    <Board>
      <TodoBoardContainer items={items} />
    </Board>
  );
};

export default TodoListContainer;

const Board = styled.div``;
