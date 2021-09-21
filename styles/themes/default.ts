import { DefaultTheme } from 'styled-components';
import { colors } from '../colors';
import { font } from '../font';

const light: DefaultTheme = {
  title: 'default',

  font,
  colors: {
    primary: colors.white,
    secundary: colors.blue[700],
    tertiary: colors.grey[50],
    quarternary: colors.blue[100],
  },

  spacing: {
    padding: {
      sm: '8px',
      md: '10px',
      lg: '20px',
      xl: '32px',
    },

    margin: {
      sm: '5px',
      lg: '32px',
    },
  },

  border: {
    radius: {
      md: '8px',
    },
  },

  transition: {
    fs: '0.1s',
    md: '0.5s',
    sl: '1s',
  },
};

export default light;
