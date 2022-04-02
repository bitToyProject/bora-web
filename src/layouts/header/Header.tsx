import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from 'static';

const Header = () => {
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
          <Link to="/logout">
            <span>로그아웃</span>
          </Link>
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
