import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      background: string;
      white: string;
      gray: string;
      warning: string;
      yellow: string;
      green: string;
    };
  }
}
