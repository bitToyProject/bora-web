import { TodoAPI } from 'apis/todo';
import MultipleModal from 'components/common/modal/MultipleModal';
import { TodoListType, TodoType } from 'constants/enum/todo';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { todoColumn, todoType } from 'store/todo/todo';
import { IGetParameter } from 'types/common.types';
import { ITodo, ITodoColumn } from 'types/todo.types';
import TodoModal from './modal/TodoModal';
import TodoListContainer from './TodoListContainer';
import TodoTemplate from './TodoTemplate';
import TodoTypeButtonList from './TodoTypeButtonList';

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

const TodoContainer = () => {
  const [columns, setColumns] = useRecoilState<ITodoColumn>(todoColumn);
  const [type, setType] = useRecoilState<string>(todoType);
  const [parameter, setParameter] = useState(initialParams);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ITodo | null>(initialTodo);

  const { isLoading, data } = useQuery(
    'todo-list-page',
    async () => {
      return TodoAPI.get.listPage(parameter);
    },
    {
      onSuccess: (data) => {
        setColumns({
          todo: {
            ...columns.todo,
            items: data.todoList.filter((item) => item.todoType === TodoType.TODO),
          },
          inprogress: {
            ...columns.inprogress,
            items: data.todoList.filter((item) => item.todoType === TodoType.INPROGRESS),
          },
          review: {
            ...columns.review,
            items: data.todoList.filter((item) => item.todoType === TodoType.REVIEW),
          },
          done: {
            ...columns.done,
            items: data.todoList.filter((item) => item.todoType === TodoType.DONE),
          },
        });
      },
    },
  );

  const todo = useMutation(
    (value: ITodo) =>
      TodoAPI.put.modify({
        todoDto: { ...value },
        todoId: value.todoId,
      }),
    {
      onSuccess: (data, variables, contxt) => {
        alert('사용자 정보가 변경 되었습니다.');
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  const handleClickTodoListType = (item: { name: string; value: string }) => {
    setType(item.value);
    setParameter({ ...parameter, type: item.value });
  };

  const handleClickTodoModal = () => {
    setShowTodoModal(true);
  };

  const handleClickDetail = (item: ITodo) => {
    setSelectedItem(item);
    handleClickTodoModal();
  };

  const handleCloseModal = () => {
    setShowTodoModal(false);
  };

  const handleSubmitTodo = () => {
    setShowTodoModal(false);
  };

  const handleDrag = (item: ITodoColumn) => {
    setColumns(item);
    // todo.mutate(item);
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
              { name: '보드', value: TodoListType.BOARD },
              { name: '리스트', value: TodoListType.LIST },
              { name: '캘린더', value: TodoListType.CALENDAR },
            ]}
            onClick={handleClickTodoListType}
          />
        }
        List={
          <TodoListContainer
            type={type}
            items={data!.todoList}
            columns={columns}
            onDrag={setColumns}
            onDetail={handleClickDetail}
            onClick={handleClickTodoModal}
          />
        }
      />

      {showTodoModal && (
        <MultipleModal text={type} onClose={handleCloseModal} cleanup={() => setSelectedItem(null)}>
          <TodoModal item={selectedItem} />
        </MultipleModal>
      )}
    </>
  );
};

export default TodoContainer;
