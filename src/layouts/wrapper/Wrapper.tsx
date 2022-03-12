import styled from '@emotion/styled';
import { Header } from 'layouts';
import React from 'react';

const Wrapper = ({ children }: any) => {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </InnerContainer>
    </Container>
  );
};

export default Wrapper;

const Container = styled.div`
  position: relative;
`;

const InnerContainer = styled.div`
  min-height: calc(100vh - 101px);
  background-color: ${({ theme }) => theme.colors.background};
`;

const ChildrenWrapper = styled.div`
  padding: 30px 60px;
  max-width: 1400px;
  margin: 0 auto;
`;
