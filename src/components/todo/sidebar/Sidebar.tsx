import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineHome } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

const menus = ['Home', 'Notifications', 'Goal'];
const spaces = ['Development', 'Marketing', 'Product'];

const Sidebar = () => {
  return (
    <Container>
      <Logo>logo</Logo>
      <Menus>
        {menus.map((menu, i: number) => (
          <Menu key={`menu-${i}`}>
            <AiOutlineHome />
            <span>{menu}</span>
          </Menu>
        ))}
      </Menus>
      <Spaces>
        <Space>
          <CgMenuGridO />
          <span>Everything</span>
        </Space>
        {spaces.map((space, i: number) => (
          <Space key={`space-${i}`}>
            <SpaceLogo>{space.slice(0, 1)}</SpaceLogo>
            <span>{space}</span>
          </Space>
        ))}
      </Spaces>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 15%;
  height: 100%;
  margin: 0px;
  top: 0;
  background-color: #000;
  border-right: 1px solid #d9d9d9;
  border-radius: 8px 0 0 8px;
`;

export const Logo = styled.div`
  height: 43px;
  padding: 11px 0;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  border-radius: 8px;
`;

export const Menus = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #c9c9c9;
`;

export const Menu = styled.div`
  padding: 11px 9px;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;

  &:hover {
    background-color: rgb(244, 244, 244);
  }

  & > span {
    margin-left: 8px;
  }
`;

export const Spaces = styled.div`
  padding: 15px 0;
`;

export const Space = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 9px;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;

  & > span {
    margin-left: 8px;
  }
`;

export const SpaceLogo = styled.div`
  background-color: red;
  padding: 4px;
  border-radius: 4px;
  width: 21px;
  height: 21px;
  color: #fff;
  text-align: center;
`;

export default Sidebar;
