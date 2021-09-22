import React from 'react';
import { FilterHeaderRow } from '../../molecules/FilterHeaderRow';
import { FilterMovieRow } from '../../molecules/FilterMovieRow';
import { Tip } from '../../molecules/Tip';
import { FilterMovieListContainer } from './styles';

export interface IFilterMovieListProps {
  title: string;
  filterNames: string[];
  tip: string;
  filterSelected: number;
  // eslint-disable-next-line no-unused-vars
  changeFilter(newFilter: number): void;
}

export const FilterMovieList = ({
  filterSelected,
  changeFilter,
  filterNames,
  title,
  tip,
}: IFilterMovieListProps): JSX.Element => (
  <FilterMovieListContainer>
    <FilterHeaderRow>{title}</FilterHeaderRow>
    {filterNames.map((name, index) => {
      if (filterSelected === index) {
        return (
          <FilterMovieRow
            onClick={() => changeFilter(index)}
            isSelected
            number={1}
            key={index}
          >
            {name}
          </FilterMovieRow>
        );
      }

      return (
        <FilterMovieRow
          onClick={() => changeFilter(index)}
          isSelected={false}
          number={1}
          key={index}
        >
          {name}
        </FilterMovieRow>
      );
    })}
    <Tip>{tip}</Tip>
  </FilterMovieListContainer>
);
