import axios, { AxiosPromise } from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import { IGetParameter } from 'types/common.types';
import { ITodo, ITodoResponse } from 'types/todo.types';
import { storage } from 'utils/storage';

export namespace TodoAPI {
  export const get = {
    list: async (parameter: IGetParameter): Promise<ITodoResponse> => {
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

  export const put = {
    modify: async (parameter: {
      todoDto: ITodo;
      todoId: number;
    }): Promise<AxiosPromise<boolean>> => {
      return axios.put('/todos/modify', parameter, {
        headers: {
          Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
        },
      });
    },
  };

  export const post = {
    modify: async (parameter: ITodo): Promise<boolean> => {
      return axios.post('/todos/save', parameter, {
        headers: {
          Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
        },
      });
    },
  };
}
