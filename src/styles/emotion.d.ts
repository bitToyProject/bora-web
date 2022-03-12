import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			main: string;
			background: string;
      gray: string;
			border: string;
		};
	}
}
