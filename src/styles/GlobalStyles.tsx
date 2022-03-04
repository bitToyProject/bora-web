import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = css`
  ${emotionReset}

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: #000;
    outline: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;
