import { Theme } from '@emotion/react';

export interface ITheme {
  colors: {
    main: string;
    backgroud: string;
    border: string;
  };
}

export const theme: Theme = {
  colors: {
    main: 'hsl(244,57%,50%)',
    background: '#e7ebf3',
    border: '',
  },
};
