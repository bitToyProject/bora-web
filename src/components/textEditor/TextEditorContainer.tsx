import styled from '@emotion/styled';
import React from 'react';
import TextCreator from './TextCreator';

const TextEditorContainer = () => {
  return (
    <TextEditorWrapper>
      <TextCreator />
      <div className="btn-box">
        <button>나가기</button>
        <button>임시저장</button>
        <button>포스트하기</button>
      </div>
    </TextEditorWrapper>
  );
};

export default TextEditorContainer;

const TextEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .btn-box {
    position: absolute;
    z-index: 1;
    bottom: 0;
    background-color: black;
    width: 100%;
  }
`;
