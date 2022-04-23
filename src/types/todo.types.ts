import { TodoType } from 'constants/todo';
import { IPagination } from './common.types';

export interface ITodoResponse extends IPagination {
  todoList: ITodo[];
}

export interface ITodo {
  assignee: string | null;
  description: string;
  done: boolean | null;
  end: string;
  nickname: string;
  point: number;
  priority: number;
  regDate: string;
  start: string;
  title: string;
  todoId: number;
  todoType: string;
}

export interface IMoveTodoCard {
  sourceList: [];
  destList: [];
}

export interface ITodoColumn {
  todo: ITodoCard;
  progress: ITodoCard;
  review: ITodoCard;
  done: ITodoCard;
}

export interface ITodoCard {
  name: string;
  color: string;
  items: ITodo[];
}
