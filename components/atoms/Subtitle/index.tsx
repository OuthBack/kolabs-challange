import React from 'react';
import { IFontColorProps } from '../../types/components';
import { Span } from './styles';

export const Subtitle = ({ children, color }: IFontColorProps): JSX.Element => (
  <Span color={color}>{children}</Span>
);
