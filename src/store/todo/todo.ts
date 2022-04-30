import { TodoType } from 'constants/todo';
import { atom } from 'recoil';
import { IMoveTodoCard, ITodoColumn } from 'types/todo.types';
import { TodoListType } from 'constants/todo';

export const moveTodoState = atom<IMoveTodoCard[] | null>({
  key: 'todo',
  default: null,
});

export const todoColumn = atom<ITodoColumn>({
  key: 'todo-column',
  default: {
    todo: {
      name: TodoType.TODO,
      color: '#897cf8',
      items: [],
    },
    inprogress: {
      name: TodoType.INPROGRESS,
      color: '#fc587e',
      items: [],
    },
    review: {
      name: TodoType.REVIEW,
      color: '#ffd32d',
      items: [],
    },
    done: {
      name: TodoType.DONE,
      color: '#7bc95f',
      items: [],
    },
  },
});

export const todoType = atom<string>({
  key: 'todo-type',
  default: TodoListType.BOARD,
});
