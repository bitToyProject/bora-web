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

const HeaderContainer = styled.div`
  height: 100px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const MenuContainer = styled.ul`
  margin-right: 40px;
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  font-size: 25px;
  font-weight: bold;
  margin: 0 16px;
  cursor: pointer;
`;
