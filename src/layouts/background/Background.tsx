import styled from '@emotion/styled';
import React, { MouseEvent, useState } from 'react';

interface Props {
  onToggle?: (pathname: string) => void;
}

const Background = ({ onToggle }: Props) => {
  const [hover, setHover] = useState({
    todo: false,
    content2: false,
    content3: false,
    content4: false,
    content5: false,
    content6: false,
  });
  const handleClickTodo = (e: MouseEvent) => {
    onToggle && onToggle('/map/todo');
  };
  console.log(hover);
  return (
    <BackgroundBlock>
      <BackgroundInner>
        <BackgroundMap src="/img/background.png" />
        <MapBox
          inset={`10px 0 0 140px`}
          onMouseEnter={() => setHover({ ...hover, todo: true })}
          onMouseLeave={() => setHover({ ...hover, todo: false })}
          onClick={handleClickTodo}>
          <Label hover={hover.todo}>TODO List</Label>
        </MapBox>
        <MapBox
          inset={`35px 0 0 400px`}
          onMouseEnter={() => setHover({ ...hover, content2: true })}
          onMouseLeave={() => setHover({ ...hover, content2: false })}
          onClick={handleClickTodo}>
          <Label hover={hover.content2}>Content2</Label>
        </MapBox>
        <MapBox
          inset={`290px 0 0 75px`}
          onMouseEnter={() => setHover({ ...hover, content3: true })}
          onMouseLeave={() => setHover({ ...hover, content3: false })}
          onClick={handleClickTodo}>
          <Label hover={hover.content3}>Content3</Label>
        </MapBox>
        <MapBox
          inset={`225px 0 0 255px`}
          onMouseEnter={() => setHover({ ...hover, content4: true })}
          onMouseLeave={() => setHover({ ...hover, content4: false })}
          onClick={handleClickTodo}>
          <Label hover={hover.content4}>Content4</Label>
        </MapBox>
        <MapBox
          inset={`260px 0 0 580px`}
          onMouseEnter={() => setHover({ ...hover, content5: true })}
          onMouseLeave={() => setHover({ ...hover, content5: false })}
          onClick={handleClickTodo}>
          <Label hover={hover.content5}>Content5</Label>
        </MapBox>
        <MapBox
          inset={`420px 0 0 475px`}
          onMouseEnter={() => setHover({ ...hover, content6: true })}
          onMouseLeave={() => setHover({ ...hover, content6: false })}
          onClick={handleClickTodo}>
          <Label hover={hover.content6}>Content6</Label>
        </MapBox>
      </BackgroundInner>
    </BackgroundBlock>
  );
};

export default Background;

const BackgroundBlock = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
const BackgroundInner = styled.div`
  position: relative;
  margin: 20rem;
  .todo {
  }
`;
const MapBox = styled.div<{ inset: string }>`
  position: absolute;
  width: 100%;
  height: 5rem;
  inset: ${({ inset }) => inset};
  cursor: pointer;
  background-color: none;
  width: fit-content;
`;
const Label = styled.span<{ hover: boolean }>`
  visibility: ${({ hover }) => (hover ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: fit-content;
`;

const BackgroundMap = styled.img`
  border: 2mm ridge white;
  min-width: 100%;
  max-height: 100%;
`;
