import styled from '@emotion/styled';
import React from 'react';

import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Props {
  type: 'up' | 'down' | 'left' | 'right';
  size?: number;
  color?: string;
}

export const ArrowIcon = ({ type, size = 16, color = '#000' }: Props) => {
  return (
    <ArrowIconBlock>
      {type === 'up' ? (
        <FiChevronUp size={size} color={color} />
      ) : type === 'down' ? (
        <FiChevronDown size={size} color={color} />
      ) : type === 'left' ? (
        <FiChevronLeft size={size} color={color} />
      ) : (
        <FiChevronRight size={size} color={color} />
      )}
    </ArrowIconBlock>
  );
};

const ArrowIconBlock = styled.div`
  cursor: pointer;
`;
