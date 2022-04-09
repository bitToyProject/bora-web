import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';

const Header = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <Container>
      <Contents>
        <CharacterImage
          onClick={toggleMenu}
          src="https://st3.depositphotos.com/33121556/34607/v/380/depositphotos_346073304-stock-illustration-pixel-wizard-games-websites.jpg?forcejpeg=true"
        />
        {isToggle && (
          <>
            <MenuContainer>
              <Menu>
                <CharacterImage src="https://st3.depositphotos.com/33121556/34607/v/380/depositphotos_346073304-stock-illustration-pixel-wizard-games-websites.jpg?forcejpeg=true" />
                <CharacterInfo>
                  <CharacterName>chanuknoh</CharacterName>
                  <CharacterLevel>Lv.14</CharacterLevel>
                </CharacterInfo>
              </Menu>
              <Menu>회원정보</Menu>
              <Menu>인벤토리</Menu>
              <Menu>로그아웃</Menu>
            </MenuContainer>
            <Outlayer onClick={toggleMenu} />
          </>
        )}
      </Contents>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: relative;
  float: right;
  width: 100%;
  padding: 4px 60px;
  border-bottom: 1px solid #d9d9d9;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0 auto;
`;

const CharacterImage = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CharacterInfo = styled.div`
  margin-left: 11px;
`;
const CharacterName = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
const CharacterLevel = styled.div`
  font-size: 12px;
  color: gray;
`;

const MenuContainer = styled.div`
  width: 244px;
  background-color: #fff;
  position: absolute;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  top: 100%;
  z-index: 1100;

  & > div:not(:last-of-type) {
    border-bottom: 1px solid #d9d9d9;
  }
`;

const Menu = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 12px 14px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
  }
`;

const Outlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
`;
