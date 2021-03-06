import React, { Dispatch, SetStateAction } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ITodo, ITodoColumn } from 'types/todo.types';
import TodoBoardList from './TodoBoardList';

interface Props {
  columns: ITodoColumn;
  onDrag: Dispatch<SetStateAction<ITodoColumn>>;
  onDetail: (item: ITodo) => void;
  onClick?: () => void;
}

const TodoBoardContainer = ({ columns, onDrag, onClick, onDetail }: Props) => {
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

      onDrag({
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
    <DragDropContext onDragEnd={handleChangeDrag}>
      {Object.entries(columns).map(([, column], index: number) => {
        return (
          <TodoBoardList
            key={`${column.name}-${index}`}
            text={column.name}
            color={column.color}
            items={column.items}
            onClick={onClick}
            onDetail={onDetail}
          />
        );
      })}
    </DragDropContext>
  );
};

export default TodoBoardContainer;
