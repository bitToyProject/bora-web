import styled from '@emotion/styled';
import React from 'react';

interface Props {
  text?: string;
}

const MapLabel = ({ text }: Props) => {
  return (
    <MapLabelBlock>
      <LabelText>{text}</LabelText>
    </MapLabelBlock>
  );
};

export default MapLabel;

const MapLabelBlock = styled.div`
  background-color: #000;
  padding: 10px;
  border-radius: 8px;
  height: 40px;
`;

const LabelText = styled.span`
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
