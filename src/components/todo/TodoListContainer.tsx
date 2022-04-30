import styled from '@emotion/styled';
import { TodoListType } from 'constants/todo';
import React, { Dispatch, SetStateAction } from 'react';
import { ITodo, ITodoColumn } from 'types/todo.types';
import TodoBoardContainer from './board/TodoBoardContainer';
import TodoCalendarContainer from './calendaer/TodoCalendarContainer';

interface Props {
  items: ITodo[];
  type: string;
  columns: ITodoColumn;
  onDrag: Dispatch<SetStateAction<ITodoColumn>>;
  onClick: () => void;
}

const TodoListContainer = ({ items, type, columns, onDrag, onClick }: Props) => {
  if (type === TodoListType.LIST) {
    return (
      <TodoListTypeContainerBlock>
        <TodoBoardContainer columns={columns} onDrag={onDrag} />;
      </TodoListTypeContainerBlock>
    );
  }

  if (type === TodoListType.CALENDAR) {
    return <TodoCalendarContainer items={items} />;
  }

  return (
    <TodoBoardContainerBlock>
      <TodoBoardContainer columns={columns} onDrag={onDrag} onClick={onClick} />;
    </TodoBoardContainerBlock>
  );
};

export default TodoListContainer;

const TodoListTypeContainerBlock = styled.div``;

const TodoBoardContainerBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
