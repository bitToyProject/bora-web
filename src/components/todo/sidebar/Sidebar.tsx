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
        {menus.map((menu) => (
          <Menu>
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
        {spaces.map((space) => (
          <Space>
            <SpaceLogo>{space.slice(0, 1)}</SpaceLogo>
            <span>{space}</span>
          </Space>
        ))}
      </Spaces>
    </Container>
  );
};

const Container = styled.div`
  width: 15%;
  margin: 0px;
  background-color: #fff;
  border-right: 1px solid #d9d9d9;
`;

export const Logo = styled.div`
  height: 43px;
  padding: 11px 0;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
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
