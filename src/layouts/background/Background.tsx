import styled from '@emotion/styled';
import MapLabel from 'components/common/MapLabel';
import React from 'react';

interface Props {
  onToggle?: () => void;
}

const Background = ({ onToggle }: Props) => {
  return (
    <BackgroundBlock>
      <BackgroundMap src="/img/background.png" />
      {onToggle && (
        <Todo onClick={onToggle}>
          <MapLabel text="할일" />
        </Todo>
      )}
    </BackgroundBlock>
  );
};

export default Background;

const BackgroundBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackgroundMap = styled.img`
  width: 100%;
  height: 100%;
`;

const Todo = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 5;
  top: 20px;
  left: 260px;
  cursor: pointer;
`;
