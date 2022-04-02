import { IPagination } from "./common.types";

export const TodoListType = {
  list: 'list',
  board: 'board',
  calender: 'calender' 
} as const;

export interface ITodo{
  todoId: number;
  userId: number;
  title: string;
  start: string;
  end: string;
  description: string;
  viewer: string;
  priority: number;
  nickname: string;
  regDate: string;
  modDate: string;
}

export interface ITodoResponse extends IPagination{
  dtoList : ITodo[];
}

export interface IMoveTodoCard{
  sourceList : [];
  destList : [];
}