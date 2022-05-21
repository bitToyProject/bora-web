import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'layouts/modal/Modal';
import Background from 'layouts/background/Background';
import UserListContainer from 'components/userState/UserListContainer';

const HomeContainer = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onToggleModal = useCallback(
    (pathname: string) => {
      setToggle((prev) => !prev);
      navigate(pathname);
    },
    [navigate],
  );

  const onCloseModal = useCallback(() => {
    setToggle(false);
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/') {
      setToggle(false);
    }

    if (location.pathname.length > 1) {
      setToggle(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Wrapper>
        {toggle ? (
          <Modal activeBtn={true} onCloseModal={onCloseModal}>
            <Outlet />
          </Modal>
        ) : (
          <>
            <UserListContainer />
            <Background onToggle={onToggleModal} />
          </>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default HomeContainer;
