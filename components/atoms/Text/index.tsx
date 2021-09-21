import React from 'react';
import { IFontColorProps } from '../../types/components';
import { Paragraph } from './styles';

export const Text = ({ children, color }: IFontColorProps): JSX.Element => (
  <Paragraph color={color}>{children}</Paragraph>
);
