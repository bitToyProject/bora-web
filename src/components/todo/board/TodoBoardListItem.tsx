import styled from '@emotion/styled';
import { TodoListType } from 'constants/todo';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';
import { todoType } from 'store/todo/todo';
import { ITodo } from 'types/todo.types';
import TodoListCard from '../list/TodoListCard';
import TodoCard from './TodoCard';

interface Props {
  item: ITodo;
  index: number;
  onDetail: (item: ITodo) => void;
}

const TodoBoardListItem = ({ item, index, onDetail }: Props) => {
  const type = useRecoilValue(todoType);

  return (
    <Draggable draggableId={item.todoId!.toString()} index={index}>
      {(provided) => {
        return (
          <DragItem
            onClick={() => onDetail(item)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            {type === TodoListType.BOARD ? <TodoCard item={item} /> : <TodoListCard item={item} />}
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default TodoBoardListItem;

const DragItem = styled.div`
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;
