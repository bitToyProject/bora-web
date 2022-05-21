import styled from '@emotion/styled';
import { ArrowIcon } from 'components/common/icons/ArrowIcons';
import React, { Dispatch, SetStateAction } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdPersonAddAlt } from 'react-icons/md';
import { VscBell, VscBellDot } from 'react-icons/vsc';
import { UserListRes } from './UserListContainer';
interface Props {
  userList: UserListRes[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const DrawerMenu = ({ userList, open, setOpen }: Props) => {
  const handleOpen = () => {
    setOpen(!open);
  };
  const children = userList.map((item) => {
    return (
      <UserListWrapper key={item.id} active={item.isActive}>
        <div className="user-info-box">
          <div className="user-state-box">
            <img src={item.avatar} alt={'avatar-img'} />
            <div className="active-box"> </div>
          </div>
          <div>
            <p>{item.nickName}</p>
            <h5>{item.username}</h5>
          </div>
        </div>
      </UserListWrapper>
    );
  });

  return (
    <DrawerWrapper>
      <button onClick={handleOpen}>
        <ArrowIcon type="left" size={22} color="#fff" />
      </button>
      <DrawerInner open={open}>
        <div>
          <button onClick={handleOpen}>
            <ArrowIcon size={22} type="right" color="#fff" />
          </button>
        </div>
        {children}
      </DrawerInner>
    </DrawerWrapper>
  );
};

export default DrawerMenu;

const DrawerWrapper = styled.div`
  button {
    background: none;
    border: 0;
  }
`;

const DrawerInner = styled.div<{ open: boolean }>`
  position: fixed;
  border: 2px solid ${({ theme }) => theme.colors.white};

  display: ${({ open }) => (open ? 'flex-column' : 'none')};
  top: 0;
  right: 0;
  bottom: 0;
  padding: 2.5rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  max-height: 100vh;
  min-width: 18rem;
  overflow-y: scroll;
  transition-property: left;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
`;

const UserListWrapper = styled.div<{ active: number }>`
  padding: 1.5rem 1rem;
  display: flex;
  flex-flow: column wrap;
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
  .user-info-box {
    display: flex;
    gap: 1rem;
    align-items: center;
    line-height: 20px;
    h5 {
      font-size: 20px;
      font-weight: 400;
    }
    .user-state-box {
      position: relative;
      height: fit-content;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 2px solid black;
      }
      .active-box {
        bottom: 3px;
        right: 0;
        position: absolute;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        background-color: ${({ active }) =>
          active === 0 ? 'red' : active === 1 ? 'green' : 'yellow'};
        z-index: 1;
      }
    }
  }
`;
