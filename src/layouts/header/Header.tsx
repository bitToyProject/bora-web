import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGO } from 'static';
import { storage } from 'utils/storage';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    storage.clear();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo src={LOGO}></Logo>
      <MenuContainer>
        <Menu>
          <Link to="/">
            <span>홈</span>
          </Link>
        </Menu>
        <Menu>
          <Link to="/todo">
            <span>할일</span>
          </Link>
        </Menu>
        <Menu>
          <span onClick={handleLogout}>로그아웃</span>
        </Menu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 4px 60px;
  border-bottom: 1px solid #d9d9d9;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0 auto;
`;

const CharacterImage = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CharacterInfo = styled.div`
  margin-left: 11px;
`;
const CharacterName = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
const CharacterLevel = styled.div`
  font-size: 12px;
  color: gray;
`;

const MenuContainer = styled.div`
  width: 244px;
  background-color: #fff;
  position: absolute;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  top: 100%;
  z-index: 1100;

  & > div:not(:last-of-type) {
    border-bottom: 1px solid #d9d9d9;
  }
`;

const Menu = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 12px 14px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
  }
`;

const Outlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
`;
