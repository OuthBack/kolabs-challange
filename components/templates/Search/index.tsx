import React from 'react';
import { SearchBar } from '../../atoms/SearchBar';
import {
  FilterMovieList,
  IFilterMovieListProps,
} from '../../organisms/FilterMovieList';
import { MovieList } from '../../organisms/MovieList';
import { IMovie } from '../../types/useSearchMovies';
import { SearchContainer } from './styles';

interface IProps extends IFilterMovieListProps {
  filterNames: string[];
  filterSelected: number;
  title: string;
  tip: string;
  movies: Set<IMovie>;
  error: Error | undefined;
  // eslint-disable-next-line no-unused-vars
  changeQuery: (queryValue: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeFilter(newFilter: number): void;
  loadNewMovies: () => void;
  loading: boolean;
}

export const Search = ({
  filterSelected,
  filterNames,
  title,
  tip,
  movies,
  error,
  changeQuery,
  changeFilter,
  loadNewMovies,
  loading,
}: IProps): JSX.Element => (
  <>
    <SearchBar onSearch={changeQuery} />
    <SearchContainer>
      <FilterMovieList
        filterSelected={filterSelected}
        changeFilter={changeFilter}
        tip={tip}
        title={title}
        filterNames={filterNames}
      />

      <MovieList
        loading={loading}
        movies={movies}
        loadNewMovies={loadNewMovies}
        error={error}
      />
    </SearchContainer>
  </>
);
