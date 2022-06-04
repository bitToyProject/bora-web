import { TodoAPI } from 'apis/todo';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import Textarea from 'components/common/Textarea';
import { TodoPriority } from 'constants/enum/todo';
import { useInput } from 'hooks/useInput';
import { LabelLayout } from 'layouts/wrapper/PageLayout';
import React, { useCallback, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { ITodo } from 'types/todo.types';
import TodoModalTemplate from './TodoModalTemplate';

interface Props {
  item: ITodo | null;
}

const TodoModal = ({ item }: Props) => {
  const { data } = useQuery('team-list', TodoAPI.get.teamMember);

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

  // const submit = useMutation(
  //   () => {
  //     TodoAPI.post.save({
  //       todoDto: { ...value },
  //     });
  //   },
  //   {
  //     onSuccess: () => {
  //       alert('등록되었습니다.');
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //     },
  //   },
  // );

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
    // submit.mutate(inputs);
  };

  const onToggle = useCallback(() => {
    setShowDetail((prev) => !prev);
  }, []);

  if (!data) {
    return <></>;
  }

  const teamMember = data.map((item) => {
    return { name: item.name, value: item.name };
  });

  return (
    <TodoModalTemplate
      show={showDetail}
      onToggle={onToggle}
      TitleInput={
        <LabelLayout label="title">
          <Input
            name="title"
            placeholder="제목을 입력해주세요"
            value={inputs.title}
            onChange={onChange}
          />
        </LabelLayout>
      }
      DescriptionInput={
        <LabelLayout label="description">
          <Textarea
            name="description"
            placeholder="설명을 입력해주세요"
            value={inputs.description}
            onChange={onChange}
          />
        </LabelLayout>
      }
      DuedateInput={
        <LabelLayout label="end">
          <Input name="end" placeholder="-" value={inputs.end} onChange={onChange} />
        </LabelLayout>
      }
      PointInput={
        <LabelLayout label="point">
          <Input name="point" placeholder="-" value={inputs.point} onChange={onChange} />
        </LabelLayout>
      }
      PriorityInput={
        <LabelLayout label="priority">
          <Select
            name="priority"
            options={[
              {
                name: TodoPriority.HIGHEST,
                value: TodoPriority.HIGHEST,
              },
              {
                name: TodoPriority.MEDIUM,
                value: TodoPriority.MEDIUM,
              },
              {
                name: TodoPriority.LOW,
                value: TodoPriority.LOW,
              },
              {
                name: TodoPriority.LOWEST,
                value: TodoPriority.LOWEST,
              },
            ]}
            value={inputs.priority}
            onChange={onChange}
          />
        </LabelLayout>
      }
      AssigneeInput={
        <LabelLayout label="assignee">
          <Select
            name="assignee"
            options={teamMember}
            value={inputs.assignee}
            onChange={onChange}
          />
        </LabelLayout>
      }
      SubmitButton={<Button text="등록하기" onClick={handleEdit} />}
    />
  );
};

export default TodoModal;
