import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      colors: {
        primary: string;
        secundary: string;
        tertiary: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
      };
    };

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      quarternary: string;
    };

    spacing: {
      padding: {
        sm: '8px';
        md: '10px';
        lg: '20px';
        xl: '32px';
      };
      margin: {
        sm: '5px';
        lg: '32px';
      };
    };

    border: {
      radius: {
        md: '8px';
      };
    };

    transition: {
      fs: '0.1s';
      md: '0.5s';
      sl: '1s';
    };
  }
}
