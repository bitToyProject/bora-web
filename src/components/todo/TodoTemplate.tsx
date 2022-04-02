import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

interface Props {
  TypeButtonList: ReactElement;
  List: ReactElement;
}

const TodoTemplate = ({ TypeButtonList, List }: Props) => {
  return (
    <TodoTemplateBlock>
      <Container>
        <Title>할일</Title>
        {TypeButtonList}
      </Container>
      {List}
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;

const TodoTemplateBlock = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
`;
