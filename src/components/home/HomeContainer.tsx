import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'layouts/modal/Modal';

const HomeContainer = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onToggleTodoModal = useCallback(() => {
    setToggle((prev) => !prev);
    navigate('/todo');
  }, []);

  const onCloseModal = useCallback(() => {
    setToggle(false);
    navigate('/');
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setToggle(false);
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      {toggle ? (
        <Modal activeBtn={true} onCloseModal={onCloseModal}>
          <Outlet />
        </Modal>
      ) : (
        <div onClick={onToggleTodoModal}>show todo</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default HomeContainer;
