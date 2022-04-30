import styled from '@emotion/styled';
import React from 'react';

const DrawerMenu = () => {
  const position = 'right';
  return (
    <DrawerWrapper>
      {/* <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">Script</a>
            </li>
            <li>
              <a href="#">Com</a>
            </li>
          </ul>
        </div>
      </div> */}
    </DrawerWrapper>
  );
};

export default DrawerMenu;

const DrawerWrapper = styled.div`
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(77, 58, 58, 0.8);
    height: 100vh;
    width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: all var(--menu-speed) ease;
  }
  .menu > div {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s ease-in;
  }
  .menu ul {
    list-style: none;
  }
  .menu li {
    padding: 1rem 0;
  }
  .menu > div a {
    text-decoration: none;
    color: #fafafa;
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity 1s ease-in;
  }
  .menu a:hover {
    color: rgb(230, 177, 177);
    transition: color 0.3s ease-in;
  }
`;
