import { TodoTemplate } from 'components';
import React, { useEffect, useState } from 'react';
import TodoTypeButtonList from './TodoTypeButtonList';
import TodoListContainer from './TodoListContainer';
import { useQuery } from 'react-query';
import { TodoAPI } from 'apis/todo';
import { useRecoilState } from 'recoil';
import { ITodoColumn } from 'types/todo.types';
import { todoColumn, todoType } from 'store/todo/todo';
import { TodoListType } from 'constants/todo';
import { IGetParameter } from 'types/common.types';
import MutipleModal from 'components/common/modal/MutipleModal';

const TodoContainer = () => {
  const { isLoading, data } = useQuery('todo-list', async () => {
    return await TodoAPI.get.list(parameter);
  });

  const initialParams: IGetParameter = {
    keyword: '',
    page: 1,
    type: TodoListType.BOARD,
  };

  const [columns, setColumns] = useRecoilState<ITodoColumn>(todoColumn);
  const [type, setType] = useRecoilState<string>(todoType);
  const [parameter, setParameter] = useState(initialParams);
  const [showTodoModal, setShowTodoModal] = useState(false);

  const todoItems = data ? data.todoList : [];

  const handleClickTodoListType = (item: { name: string; value: string }) => {
    setType(item.value);
    setParameter({ ...parameter, type: item.value });
  };

  useEffect(() => {
    const todo = todoItems.filter((item) => {
      return item.todoType === columns.todo.name;
    });

    const inprogress = todoItems.filter((item) => {
      return item.todoType === columns.inprogress.name;
    });

    const review = todoItems.filter((item) => {
      return item.todoType === columns.review.name;
    });

    const done = todoItems.filter((item) => {
      return item.todoType === columns.done.name;
    });

    setColumns({
      todo: {
        ...columns.todo,
        items: todo,
      },
      inprogress: {
        ...columns.inprogress,
        items: inprogress,
      },
      review: {
        ...columns.review,
        items: review,
      },
      done: {
        ...columns.done,
        items: done,
      },
    });
  }, [todoItems, setColumns]);

  const handleClickTodoModal = () => {
    setShowTodoModal(true);
  };

  if (isLoading) {
    return <>로딩</>;
  }

  return (
    <>
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
                value: TodoListType.CALENDAR,
              },
            ]}
            onClick={handleClickTodoListType}
          />
        }
        List={
          <TodoListContainer
            type={type}
            items={todoItems}
            columns={columns}
            onDrag={setColumns}
            onClick={handleClickTodoModal}
          />
        }
      />

      {showTodoModal && <MutipleModal title={'할일 등록'} />}
    </>
  );
};

export default TodoContainer;
