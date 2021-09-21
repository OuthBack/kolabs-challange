import React from 'react';
import { IFontColorProps } from '../../types/components';
import { H2 } from './styles';

export const Title = ({
  children,
  color = 'black',
}: IFontColorProps): JSX.Element => <H2 color={color}>{children}</H2>;
