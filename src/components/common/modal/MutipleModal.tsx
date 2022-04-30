import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
}

const MutipleModal = ({ title }: Props) => {
  console.log('here');

  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default MutipleModal;

export const MutipleModalBlock = styled.div`
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-weight: 700;
`;
