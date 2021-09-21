import { DefaultTheme } from 'styled-components';
import { TFontColor } from '../../components/types/components';

export const chooseFontColor = (
  color: TFontColor,
  theme: DefaultTheme,
): string => {
  switch (color) {
    default:
    case 'black':
      return theme.font.colors.primary;

    case 'grey':
      return theme.font.colors.secundary;

    case 'white':
      return theme.font.colors.tertiary;
  }
};
