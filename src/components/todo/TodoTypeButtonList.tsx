import styled from '@emotion/styled';
import React from 'react';
import TodoTypeButtonListItem from './TodoTypeButtonListItem';

interface Props {
  value: string;
  items: { name: string; value: string }[];
  onClick?: (item: { name: string; value: string }) => void;
}

const TodoTypeButtonList = ({ value, items, onClick }: Props) => {
  return (
    <TodoTypeButtonListBlock>
      {items.map((item) => {
        return (
          <TodoTypeButtonListItem
            key={`todo-type-${item.value}`}
            value={item.value === value}
            item={item}
            onClick={onClick}
          />
        );
      })}
    </TodoTypeButtonListBlock>
  );
};

export default TodoTypeButtonList;

const TodoTypeButtonListBlock = styled.div`
  display: flex;
`;
