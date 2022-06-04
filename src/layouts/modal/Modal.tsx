import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import CloseButton from 'components/common/button/CloseButton';

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
          <CloseButton
            ref={btnRef}
            style={{ backgroundColor: '#000', borderRadius: '8px 8px 0 0' }}
            onClose={onCloseModal}
          />
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
  height: 90vh;
  width: 90vw;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
`;

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const Content = styled.div<{ btnHeight?: number }>`
  width: 100%;
  height: 100%;
  height: calc(100% - ${({ btnHeight }) => btnHeight}px);
`;

const Outlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url('/img/background.png');
  background-size: cover;
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
`;

export default Modal;
