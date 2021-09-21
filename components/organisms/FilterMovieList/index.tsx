import React from 'react';
import { FilterHeaderRow } from '../../molecules/FilterHeaderRow';
import { FilterMovieRow } from '../../molecules/FilterMovieRow';
import { Tip } from '../../molecules/Tip';
import { FilterMovieListContainer } from './styles';

export interface IFilterMovieListProps {
  title: string;
  filterNames: string[];
  tip: string;
}

export const FilterMovieList = ({
  filterNames,
  title,
  tip,
}: IFilterMovieListProps): JSX.Element => (
  <FilterMovieListContainer>
    <FilterHeaderRow>{title}</FilterHeaderRow>
    {filterNames.map((name, index) => (
      <FilterMovieRow number={1} key={index}>
        {name}
      </FilterMovieRow>
    ))}
    <Tip>{tip}</Tip>
  </FilterMovieListContainer>
);
