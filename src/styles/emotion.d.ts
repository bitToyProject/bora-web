import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      background: string;
      gray: string;
      border: string;
      todo: string;
      inprogress: string;
      review: string;
      done: string;
    };
  }
}
