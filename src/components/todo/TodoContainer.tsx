import { TodoTemplate } from 'components';
import React, { useState } from 'react';
import TodoTypeButtonList from './TodoTypeButtonList';
import TodoListContainer from './TodoListContainer';
import { TodoListType } from 'constants/todo';
import { useQuery } from 'react-query';
import { APITodoListTest, TodoAPI } from 'apis/todo';

const TodoContainer = () => {
  const { isLoading, data } = useQuery('todoList', async () => {
    return APITodoListTest();
  });

  const [type, setType] = useState<string>(TodoListType.BOARD);

  const handleClickTodoListType = (item: { name: string; value: string }) => {
    setType(item.value);
  };

  // const todoItems = data ? data.todoList : [];
  const todoItems = data || [];

  if (isLoading) {
    return <>로딩</>;
  }

  return (
    <TodoTemplate
      TypeButtonList={
        <TodoTypeButtonList
          value={type}
          items={[
            {
              name: '보드',
              value: TodoListType.BOARD,
            },
            {
              name: '리스트',
              value: TodoListType.LIST,
            },
            {
              name: '캘린더',
              value: TodoListType.CALENDAER,
            },
          ]}
          onClick={handleClickTodoListType}
        />
      }
      List={<TodoListContainer type={type} items={todoItems} />}
    />
  );
};

export default TodoContainer;
