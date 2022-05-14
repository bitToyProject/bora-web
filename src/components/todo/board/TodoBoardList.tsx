import styled from '@emotion/styled';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ITodo } from 'types/todo.types';
import TodoBoardHeader from './TodoBoardHeader';
import TodoBoardListItem from './TodoBoardListItem';

interface Props {
  text: string;
  color: string;
  items: ITodo[];
  onClick?: () => void;
  onDetail: (item: ITodo) => void;
}

const TodoBoardList = ({ text, color, items, onClick, onDetail }: Props) => {
  return (
    <TodoDragListBlock>
      <TodoBoardHeader text={text} color={color} total={items.length} onClick={onClick} />
      <Droppable droppableId={text}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item: ITodo, index: number) => {
              return (
                <TodoBoardListItem
                  key={`todo-drag-${item.todoId}`}
                  item={item}
                  index={index}
                  onDetail={onDetail}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </TodoDragListBlock>
  );
};

export default TodoBoardList;

const TodoDragListBlock = styled.div`
  padding: 10px 0;
  border-radius: 6px;
`;
