import React from 'react';
import { MiniBox } from '../../atoms/MiniBox';
import { Title } from '../../atoms/Title';
import { IChildren } from '../../types/components';
import { FilterMovieRowContainer } from './styles';

interface IProps extends IChildren {
  number: number;
}

export const FilterMovieRow = ({ number, children }: IProps): JSX.Element => (
  <FilterMovieRowContainer>
    <Title>{children}</Title>
    <MiniBox>{number}</MiniBox>
  </FilterMovieRowContainer>
);
