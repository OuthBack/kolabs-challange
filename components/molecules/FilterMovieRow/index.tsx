import React from 'react';
import { MiniBox } from '../../atoms/MiniBox';
import { Title } from '../../atoms/Title';
import { IChildren } from '../../types/components';
import { FilterMovieRowContainer } from './styles';

interface IProps extends IChildren {
  number: number;
  isSelected: boolean;
  onClick: () => void;
}

export const FilterMovieRow = ({
  isSelected,
  onClick,
  number,
  children,
}: IProps): JSX.Element => (
  <FilterMovieRowContainer onClick={onClick} selected={isSelected}>
    <Title>{children}</Title>
    <MiniBox>{number}</MiniBox>
  </FilterMovieRowContainer>
);
