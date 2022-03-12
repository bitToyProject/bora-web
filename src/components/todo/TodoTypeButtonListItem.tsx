import styled from '@emotion/styled';
import React from 'react';

interface Props {
  value: boolean;
  item: { name: string; value: string };
  onClick?: (item: { name: string; value: string }) => void;
}

const TodoTypeButtonListItem = ({ value, item, onClick }: Props) => {
  const handleClick = () => {
    onClick && onClick(item);
  };

  return (
    <TodoButton onClick={handleClick} active={value}>
      {item.name}
    </TodoButton>
  );
};

export default TodoTypeButtonListItem;

const TodoButton = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100px;
  cursor: pointer;
  font-weight: 700;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${(props) => (props.active ? props.theme.colors.main : props.theme.colors.gray)};
`;
