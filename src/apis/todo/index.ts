import axios from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import { ITodo, ITodoResponse } from 'types/todo.types';
import { storage } from 'utils/storage';

export const APITodoListTest = (): ITodo[] => {
  return [
    {
      assignee: null,
      description: '설s명2',
      done: null,
      end: 'endto',
      nickname: 'nick1',
      point: 0,
      priority: 23,
      regDate: '22. 4. 9. 오후 1:55',
      start: '스타트',
      title: '정말 asfas',
      todoId: 9,
      todoType: 'TODO',
    },
    {
      assignee: 'sda',
      description: 'ss',
      done: null,
      end: '2022-03-28',
      nickname: 'nick1',
      point: 0,
      priority: 1,
      regDate: '22. 4. 2. 오후 2:31',
      start: '2022-03-26',
      title: '알고리즘 문제 풀기',
      todoId: 3,
      todoType: 'TODO',
    },
  ];
};

export namespace TodoAPI {
  export const get = {
    list: async (): Promise<ITodoResponse> => {
      try {
        const res = await axios.get('/todos/list/pages', {
          headers: {
            Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
          },
        });
        return res.data;
      } catch (err) {
        console.log(err);

        return {
          todoList: [],
          totalPage: 0,
          page: 0,
          size: 0,
          start: 0,
          end: 0,
          prev: false,
          next: false,
        };
      }
    },
  };
}
