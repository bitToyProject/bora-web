import { TodoListType } from 'constants/todo';
import React, { Dispatch, SetStateAction } from 'react';
import { ITodo, ITodoColumn } from 'types/todo.types';
import TodoBoardContainer from './board/TodoBoardContainer';
import TodoCalendarContainer from './calendaer/TodoCalendarContainer';
import TodoListTypeContainer from './list/TodoListTypeContainer';

interface Props {
  items: ITodo[];
  type: string;
  columns: ITodoColumn;
  onChange: Dispatch<SetStateAction<ITodoColumn>>;
}

const TodoListContainer = ({ items, type, columns, onChange }: Props) => {
  if (type === TodoListType.LIST) {
    return <TodoListTypeContainer items={items} />;
  }

  if (type === TodoListType.CALENDAR) {
    return <TodoCalendarContainer />;
  }

  return <TodoBoardContainer items={items} columns={columns} onChange={onChange} />;
};

export default TodoListContainer;
