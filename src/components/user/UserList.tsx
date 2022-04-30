import styled from '@emotion/styled';
import React, { useState } from 'react';

const UserList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <UserListWrapper>
      <div className={`menuContainer ${isOpen ? 'isOpen' : ''}`}>1 2 3 4 5 6</div>
    </UserListWrapper>
  );
};

export default UserList;

const UserListWrapper = styled.div`
  .menuContainer {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background-color: white;
    z-index: 100;
    transition: margin 1s ease-in;
    margin: 0 0 0 -250px;
  }

  .menuContainer.isOpen {
    margin: 0 0 0 0px;
    transition: margin 2s;
  }
`;
