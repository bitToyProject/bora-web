import styled from '@emotion/styled';
import DrawerMenu from 'layouts/DrawerMenu';
import React, { useState } from 'react';

const UserList = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <UserListWrapper>
      <DrawerMenu />
    </UserListWrapper>
  );
};

export default UserList;

const UserListWrapper = styled.div`
  header {
    width: 100%;
    position: fixed;
    left: 0px;
    background: #efefef;
    padding: 10px 10px 10px 50px;
    font-size: 30px;
    line-height: 30px;
    z-index: 0;
  }
  #drawer-toggle {
    position: absolute;
    opacity: 0;
  }

  #drawer-toggle-label {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    left: 0px;
    height: 50px;
    width: 50px;
    display: block;
    position: fixed;
    background: rgba(255, 255, 255, 0);
    z-index: 1;
  }

  /* adds our "hamburger" menu icon */

  #drawer-toggle-label:before {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 24px;
    background: #8d8d8d;
    left: 13px;
    top: 18px;
    box-shadow: 0 6px 0 #8d8d8d, 0 12px 0 #8d8d8d;
  }
  #drawer {
    position: fixed;
    top: 0;
    left: -300px;
    height: 100%;
    width: 300px;
    background: #2f2f2f;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 20px;
    -webkit-overflow-scrolling: touch;
  }
`;
