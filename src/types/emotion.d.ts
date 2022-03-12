import '@emotion/react';
import { ITheme } from 'styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      backgroud: string;
      border: string;
    };
  }
}
