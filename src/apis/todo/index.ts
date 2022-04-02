import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import { ACCESS_TOKEN } from 'constants/token';
import { ITodo, ITodoResponse } from 'types/todo.types';
import { storage } from 'utils/storage';

export const APITodoListTest = [
    {
      todoId: 26,
      userId: 1,
      title: "title10",
      start: "start10",
      end: "end10",
      description: "description10",
      viewer: "viewer10",
      priority: 11,
      nickname: 'nickname',
      regDate: "2022-02-05T16:44:31.936579",
      modDate: "2022-02-05T16:44:31.936579"
    },
    {
      todoId: 25,
      userId: 1,
      title: "title9",
      start: "start9",
      end: "end9",
      description: "description9",
      viewer: "viewer9",
      priority: 10,
      nickname: 'nickname',
      regDate: "2022-02-05T16:44:31.936579",
      modDate: "2022-02-05T16:44:31.936579"
    },
    {
      todoId: 24,
      userId: 1,
      title: "title8",
      start: "start8",
      end: "end8",
      description: "description8",
      viewer: "viewer8",
      priority: 9,
      nickname: 'nickname',
      regDate: "2022-02-05T16:44:31.92096",
      modDate: "2022-02-05T16:44:31.92096"
    },
    {
      todoId: 23,
      userId: 1,
      title: "title7",
      start: "start7",
      end: "end7",
      description: "description7",
      viewer: "viewer7",
      priority: 8,
      nickname: 'nickname',
      regDate: "2022-02-05T16:44:31.905336",
      modDate: "2022-02-05T16:44:31.905336"
    }
]

export namespace todoAPI {
  export const get = {
    list: (): Promise<ITodoResponse[]> => {
      return axios.get('/user/me', {
        headers: {
          Authorization: `Bearer ${storage.get(ACCESS_TOKEN)}`,
        },
      });
    },
  };
}
