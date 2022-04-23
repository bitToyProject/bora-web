import styled from '@emotion/styled';
import { relative } from 'path';
import React, { ReactNode, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface IModalProps {
  children: any;
  onCloseModal?: () => void;
  activeBtn?: boolean;
}

export const Modal = ({ children, onCloseModal, activeBtn }: IModalProps) => {
  return (
    <Wrapper>
      {activeBtn && <CloseButton>x</CloseButton>}
      <ContentLayout>{children}</ContentLayout>
      <Outlayer onClick={onCloseModal} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid red;
  height: 90vh;
  width: 90vw;
  z-index: 2;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Outlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgb(0, 0, 0, 0.1);
  height: 100vh;
  width: 100vw;
`;

export default Modal;
