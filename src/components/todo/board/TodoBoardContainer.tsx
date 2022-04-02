import styled from '@emotion/styled';
import { APITodoListTest } from 'apis/todo';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { moveTodoState } from 'store/todo/todo';
import { IMoveTodoCard } from 'types/todo.types';
import TodoBoardList from './TodoBoardList';

const todos = APITodoListTest;

interface Props {
  text: string;
  color: string;
}

const TodoBoardContainer = ({ text, color }: Props) => {
  const [moveTodo, setMoveTodo] = useRecoilState<IMoveTodoCard[] | null>(moveTodoState);

  const handleChangeDrag = (result: any) => {
    console.log(result);

    const sourceListId = result.source.droppableId;
    const destListId = result.destination.droppableId;
    const oldCardIndex = result.source.index;
    const newCardIndex = result.destination.index;

    // 리스트의 경로를 벗어난 경우
    if (!result.destination) {
      return;
    }

    // 카드 옮기기
    if (oldCardIndex !== newCardIndex || sourceListId !== destListId) {
      const sourceCards = Array.from(sourceListId.cards);
      const [removedCard] = sourceCards.splice(oldCardIndex, 1);
      const destinationCards = Array.from(destListId.cards);

      destinationCards.splice(newCardIndex, 0, removedCard);

      // TODO: 카드옮기기 가능하게 하기
    }
  };

  return (
    <TodoDragListBlock>
      <DragDropContext onDragEnd={handleChangeDrag}>
        <TodoBoardList text={text} color={color} items={todos} />
      </DragDropContext>
    </TodoDragListBlock>
  );
};

export default TodoBoardContainer;

const TodoDragListBlock = styled.div``;
