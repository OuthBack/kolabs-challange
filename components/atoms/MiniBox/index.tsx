import React from 'react';
import { IChildren } from '../../types/components';
import { MiniBoxContainer } from './styles';

export const MiniBox = ({ children }: IChildren): JSX.Element => (
  <MiniBoxContainer className="minibox">{children}</MiniBoxContainer>
);
