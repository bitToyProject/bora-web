import styled from '@emotion/styled';
import { TodoType } from 'constants/todo';
import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { todoColumn } from 'store/todo/todo';
import { ITodo, ITodoColumn } from 'types/todo.types';
import TodoBoardList from './TodoBoardList';

interface Props {
  items: ITodo[];
}

const TodoBoardContainer = ({ items }: Props) => {
  const [columns, setColumns] = useRecoilState<ITodoColumn>(todoColumn);

  const todo = items.filter((item) => {
    return item.todoType === columns.todo.name;
  });

  const inprogress = items.filter((item) => {
    return item.todoType === columns.inprogress.name;
  });

  const review = items.filter((item) => {
    return item.todoType === columns.review.name;
  });

  const done = items.filter((item) => {
    return item.todoType === columns.done.name;
  });

  useEffect(() => {
    setColumns({
      todo: {
        name: TodoType.TODO,
        color: '#897cf8',
        items: todo,
      },
      inprogress: {
        name: TodoType.INPROGRESS,
        color: '#fc587e',
        items: inprogress,
      },
      review: {
        name: TodoType.REVIEW,
        color: '#ffd32d',
        items: review,
      },
      done: {
        name: TodoType.DONE,
        color: '#7bc95f',
        items: done,
      },
    });
  }, []);

  const handleChangeDrag = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId.toLowerCase()];
      const destinationColumn = columns[destination.droppableId.toLowerCase()];
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);

      destinationItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId.toLowerCase()]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId.toLowerCase()]: {
          ...destinationColumn,
          items: destinationItems,
        },
      });
    }
  };

  return (
    <TodoDragListBlock>
      <DragDropContext onDragEnd={handleChangeDrag}>
        {Object.entries(columns).map(([name, column], index: number) => {
          return (
            <TodoBoardList
              key={`${column.name}-${index}`}
              text={column.name}
              color={column.color}
              items={column.items}
            />
          );
        })}
      </DragDropContext>
    </TodoDragListBlock>
  );
};

export default TodoBoardContainer;

const TodoDragListBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
