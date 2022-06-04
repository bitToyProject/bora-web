import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import Sidebar from './sidebar/Sidebar';

interface Props {
  TypeButtonList: ReactElement;
  List: ReactElement;
}

const TodoTemplate = ({ TypeButtonList, List }: Props) => {
  return (
    <TodoTemplateBlock>
      <Sidebar />
      <Main>
        <Container>
          <Title>할일</Title>
          {TypeButtonList}
        </Container>
        {List}
      </Main>
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;

const TodoTemplateBlock = styled.div`
  display: flex;
  background-color: #000;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0 0 8px 8px;
`;

const Main = styled.div`
  position: absolute;
  left: 15%;
  width: 85%;
  height: 100%;
  padding: 11px 24px;
  overflow: scroll;
`;

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
