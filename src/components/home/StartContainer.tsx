import styled from '@emotion/styled';
import MultipleModal from 'components/common/modal/MultipleModal';
import LoginPage from 'components/login/LoginPage';
import { ACCESS_TOKEN } from 'constants/token';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from 'utils/storage';
export const StartContainer = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    login: false,
    setting: false,
  });
  const isOpen = modal.login || modal.setting;
  console.log(isOpen);
  const onModalOpen = (key: string) => {
    setModal({ ...modal, [key]: true });
  };
  const onModalClose = () => {
    setModal({ ...modal, login: false, setting: false });
  };
  useEffect(() => {
    if (storage.get(ACCESS_TOKEN)) {
      navigate('/map');
    }
  }, []);
  return (
    <StartWrapper>
      <BackGroundImage src={'/img/start_background.gif'} />
      <MenuWrapper>
        <Title>SKULLAR</Title>
        <SelectBtn onClick={() => navigate('/signup')}>NEW GAME</SelectBtn>
        <SelectBtn onClick={() => onModalOpen('login')}>ROAD GAME</SelectBtn>
        <SelectBtn onClick={() => onModalOpen('setting')}>SETTINGS</SelectBtn>
      </MenuWrapper>
      {isOpen && (
        <MultipleModal
          text={modal.login ? 'Sign in to Bora' : 'Settings'}
          onClose={() => onModalClose()}>
          {modal.login && <LoginPage />}
        </MultipleModal>
      )}
    </StartWrapper>
  );
};
const Title = styled.p`
  /* color: ${({ theme }) => theme.colors.white}; */
  color: #5c20e5;
  font-size: 2rem;
  font-weight: bold;
`;
const StartWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: relative;
`;
const MenuWrapper = styled.div`
  position: absolute;
  left: 5rem;
  top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  opacity: 0.8;
  border: 0.2rem groove ${({ theme }) => theme.colors.gray};
  border-radius: 2px;
  z-index: 1;
  height: 30rem;
  width: 25rem;
`;

const SelectBtn = styled.button`
  z-index: 2;
  font-size: 1.2rem;
  opacity: 1.5;
  padding: 0.5rem;
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.background};
  min-width: 15rem;
  :hover {
    background: ${({ theme }) => theme.colors.warning};
  }
`;
