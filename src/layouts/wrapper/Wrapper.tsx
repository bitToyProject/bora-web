import styled from '@emotion/styled';
import { Header } from 'layouts';
import Sidebar from 'layouts/sidebar/Sidebar';
import React from 'react';

const Wrapper = ({ children }: any) => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Header />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Main>
    </Container>
  );
};

export default Wrapper;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ChildrenWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px 60px;
  max-width: 1400px;
`;
