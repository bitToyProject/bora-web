import { atom } from "recoil";
import { IMoveTodoCard } from "types/todo.types";

export const moveTodoState = atom<IMoveTodoCard[] | null>({
  key: 'user',
  default: null 
});