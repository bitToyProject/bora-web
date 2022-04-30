import { APITodoListTest } from 'apis/todo';
import MultipleModal from 'components/common/modal/MultipleModal';
import { TodoListType } from 'constants/todo';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { todoColumn, todoType } from 'store/todo/todo';
import { IGetParameter } from 'types/common.types';
import { ITodo, ITodoColumn } from 'types/todo.types';
import TodoModal from './modal/TodoModal';
import TodoListContainer from './TodoListContainer';
import TodoTemplate from './TodoTemplate';
import TodoTypeButtonList from './TodoTypeButtonList';

const TodoContainer = () => {
  const { isLoading, data } = useQuery('todo-list', async () => {
    return APITodoListTest();
  });

  const initialParams: IGetParameter = {
    keyword: '',
    page: 1,
    type: TodoListType.BOARD,
  };

  const initialTodo: ITodo = {
    assignee: '',
    description: '',
    done: false,
    nickname: '',
    point: 0,
    priority: 0,
    regDate: '',
    start: '',
    end: '',
    title: '',
    todoType: '',
    todoId: 0,
  };

  const [columns, setColumns] = useRecoilState<ITodoColumn>(todoColumn);
  const [type, setType] = useRecoilState<string>(todoType);
  const [parameter, setParameter] = useState(initialParams);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ITodo | null>(initialTodo);

  //const todoItems = data ? data.todoList : [];
  const todoItems = data ? data : [];

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

  const handleClickDetail = (item: ITodo) => {
    setSelectedItem(item);
    setShowTodoModal(true);
  };

  const handleCloseModal = () => {
    setShowTodoModal(false);
    setSelectedItem(null);
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
            onDetail={handleClickDetail}
            onClick={handleClickTodoModal}
          />
        }
      />

      {showTodoModal && (
        <MultipleModal text={type} onClose={handleCloseModal}>
          <TodoModal item={selectedItem} />
        </MultipleModal>
      )}
    </>
  );
};

export default TodoContainer;
