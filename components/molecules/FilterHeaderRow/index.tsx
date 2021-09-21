import React from 'react';
import { Title } from '../../atoms/Title';
import { IChildren } from '../../types/components';
import { FilterHeaderRowContainer } from './styles';

export const FilterHeaderRow = ({ children }: IChildren): JSX.Element => (
  <FilterHeaderRowContainer>
    <Title color="white">{children}</Title>
  </FilterHeaderRowContainer>
);
