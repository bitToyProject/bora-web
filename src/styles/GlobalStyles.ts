import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = css`
  ${emotionReset}
  @font-face {
    font-family: 'GongGothicLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicLight.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

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

  body {
    * {
      font-family: 'GongGothicLight';
    }
    background-color: hsl(220, 5%, 12%);
  }
`;
