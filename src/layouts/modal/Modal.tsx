import styled from '@emotion/styled';
import { relative } from 'path';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

interface IModalProps {
  children: any;
  onCloseModal?: () => void;
  activeBtn?: boolean;
}

export const Modal = ({ children, onCloseModal, activeBtn }: IModalProps) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [btnHeight, setBtnHeight] = useState<number>(0);

  useEffect(() => {
    if (btnRef.current) {
      setBtnHeight(btnRef.current?.offsetHeight);
    }
  }, [btnRef]);

  return (
    <Wrapper>
      <ContentLayout>
        {activeBtn && (
          <CloseButton ref={btnRef}>
            <span onClick={onCloseModal}>
              <IoClose fontSize={27} />
            </span>
          </CloseButton>
        )}
        <Content btnHeight={btnHeight}>{children}</Content>
      </ContentLayout>
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
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px 15px;
  background-color: #fff;

  & > span {
    transition: transform 0.17s;

    cursor: pointer;
  }

  & > span:hover {
    transform: rotate(-45deg);
  }
`;

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div<{ btnHeight?: number }>`
  height: calc(100% - ${({ btnHeight }) => btnHeight}px);
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
