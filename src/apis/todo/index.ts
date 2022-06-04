import { getApi, postApi, putApi } from 'apis';
import { responseSuccess } from 'apis/responseSuccess';
import { IGetParameter } from 'types/common.types';
import { ITodo, ITodoResponse } from 'types/todo.types';

export namespace TodoAPI {
  export const get = {
    listPage: async (parameter: IGetParameter): Promise<ITodoResponse> => {
      const res = await getApi('/todos/list/pages', parameter);

      if (responseSuccess(res)) {
        return res;
      }

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
    },
    teamMember: async () => {
      return [
        {
          id: 1,
          name: '박재민',
        },
        {
          id: 2,
          name: '최영은',
        },
        {
          id: 3,
          name: '류슬기',
        },
        {
          id: 4,
          name: '오진욱',
        },
        {
          id: 5,
          name: '장해솔',
        },
      ];
    },
  };

  export const put = {
    modify: async (parameter: { todoDto: ITodo; todoId: number }): Promise<boolean> => {
      const res = await putApi('/todos/modify', parameter);

      if (responseSuccess(res)) {
        return true;
      }

      return false;
    },
  };

  export const post = {
    save: async (parameter: ITodo): Promise<boolean> => {
      const res = await postApi('/todos/save', parameter);

      if (responseSuccess(res)) {
        return true;
      }

      return false;
    },
  };
}
