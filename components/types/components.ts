import { ReactChild } from 'react';

export interface IChildren {
  children?: ReactChild | ReactChild[];
}

export type TFontColor = 'grey' | 'black' | 'white';

export interface IColor {
  color: TFontColor;
}

export interface IFontColorProps extends IChildren {
  color?: TFontColor;
}
