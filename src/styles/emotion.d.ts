import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    colors: {
      main: string;
      background: string;
      border: string;
    };
  }
}
