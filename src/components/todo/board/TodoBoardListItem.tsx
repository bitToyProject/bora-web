import styled from '@emotion/styled';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ITodo } from 'types/todo.types';
import TodoCard from './TodoCard';

interface Props {
  item: ITodo;
  index: number;
}

const TodoBoardListItem = ({ item, index }: Props) => {
  return (
    <Draggable draggableId={item.todoId.toString()} index={index}>
      {(provided) => {
        return (
          <DragItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <TodoCard item={item} />
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
