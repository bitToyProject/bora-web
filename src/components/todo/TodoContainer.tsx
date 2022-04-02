import { TodoTemplate } from 'components';
import React, { useState } from 'react';
import { TodoListType } from 'types/todo.types';
import TodoTypeButtonList from './TodoTypeButtonList';
import TodoListContainer from './TodoListContainer';

const TodoContainer = () => {
  const [type, setType] = useState<string>(TodoListType.board);

  const handleClickTodoListType = (item: { name: string; value: string }) => {
    setType(item.value);
  };

  return (
    <TodoTemplate
      TypeButtonList={
        <TodoTypeButtonList
          value={type}
          items={[
            {
              name: '보드',
              value: TodoListType.board,
            },
            {
              name: '리스트',
              value: TodoListType.list,
            },
            {
              name: '캘린더',
              value: TodoListType.calender,
            },
          ]}
          onClick={handleClickTodoListType}
        />
      }
      List={<TodoListContainer type={type} />}
    />
  );
};

export default TodoContainer;
