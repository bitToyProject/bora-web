import styled from '@emotion/styled';
import { TodoType } from 'constants/todo';
import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { moveTodoState, todoColumn } from 'store/todo/todo';
import { IMoveTodoCard, ITodo, ITodoCard, ITodoColumn } from 'types/todo.types';
import TodoBoardList from './TodoBoardList';

interface Props {
  items: ITodo[];
}

const TodoBoardContainer = ({ items }: Props) => {
  const [columns, setColumns] = useRecoilState<ITodoColumn>(todoColumn);

  const todo = items.filter((item) => {
    return item.todoType === columns.todo.name;
  });

  const progress = items.filter((item) => {
    return item.todoType === columns.progress.name;
  });

  const review = items.filter((item) => {
    return item.todoType === columns.review.name;
  });

  const done = items.filter((item) => {
    return item.todoType === columns.done.name;
  });

  useEffect(() => {
    // TO DO : recoil initial value 저장 할 수 있도록 하기
    setColumns({
      todo: {
        name: TodoType.TODO,
        color: '#897cf8',
        items: todo,
      },
      progress: {
        name: TodoType.INPROGRESS,
        color: '#fc587e',
        items: progress,
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

  const handleChangeDrag = (result: any) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      console.log(result);
      const sourceColumn = source.droppableId.toLowerCase();
      const destinationColumn = destination.droppableId.toLowerCase();
      const sourceItems = sourceColumn.items;
      const destinationItems = destinationColumn.items;

      console.log(sourceColumn);
      console.log(destinationItems);
      console.log(destination.index);
      // console.log(removed);
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
    } else {
      // const columnName: ITodoCard = source.droppableId.toLowerCase();
      // const column = columns[columnName];
      const column = columns['todo'];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);

      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId.toLowerCase()]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  console.log('columns :', columns);

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
