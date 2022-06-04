import { TodoAPI } from 'apis/todo';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useInput } from 'hooks/useInput';
import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { ITodo } from 'types/todo.types';
import TodoModalTemplate from './TodoModalTemplate';

interface Props {
  item: ITodo | null;
}

const TodoModal = ({ item }: Props) => {
  const modify = useMutation(
    (value: ITodo) =>
      TodoAPI.put.modify({
        todoDto: { ...value },
        todoId: item!.todoId,
      }),
    {
      onSuccess: () => {
        alert('사용자 정보가 변경 되었습니다.');
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  const submit = useMutation(
    () => {
      TodoAPI.post.save({
        todoDto: { ...value },
      });
    },
    {
      onSuccess: () => {
        alert('등록되었습니다.');
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

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

  const [inputs, onChange] = useInput(item || initialTodo);
  const [showDetail, setShowDetail] = useState(true);
  const [type, setType] = useState('');

  const handleEdit = useCallback(async () => {
    const isOk = window.confirm('변경 하시겠습니까?');

    if (!isOk) {
      return;
    }

    modify.mutate(inputs);
  }, [modify, inputs]);

  const handleSubmit = () => {
    submit.mutate(inputs);
  };

  const onToggle = useCallback(() => {
    setShowDetail((prev) => !prev);
  }, []);

  return (
    <TodoModalTemplate
      show={showDetail}
      onToggle={onToggle}
      TitleInput={
        <Input
          name="title"
          placeholder="제목을 입력해주세요"
          value={inputs.title}
          onChange={onChange}
        />
      }
      DescriptionInput={
        <Input
          name="description"
          placeholder="설명을 입력해주세요"
          value={inputs.description}
          onChange={onChange}
        />
      }
      DuedateInput={<Input name="end" placeholder="-" value={inputs.end} onChange={onChange} />}
      PointInput={<Input name="point" placeholder="-" value={inputs.point} onChange={onChange} />}
      PriorityInput={
        <Input name="priority" placeholder="-" value={inputs.priority} onChange={onChange} />
      }
      AssigneeInput={
        <Input name="assignee" placeholder="-" value={inputs.assignee} onChange={onChange} />
      }
      SubmitButton={<Button text="등록하기" onClick={handleEdit} />}
    />
  );
};

export default TodoModal;
