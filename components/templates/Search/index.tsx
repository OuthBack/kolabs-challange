import React from 'react';
import { SearchBar } from '../../atoms/SearchBar';
import {
  FilterMovieList,
  IFilterMovieListProps,
} from '../../organisms/FilterMovieList';
import { MovieList } from '../../organisms/MovieList';
import { IMovie, TPromiseQuery } from '../../types/useSearchMovies';
import { SearchContainer } from './styles';

interface IProps extends IFilterMovieListProps {
  filterNames: string[];
  title: string;
  tip: string;
  movies: IMovie[];
  error: Error | undefined;
  searchMovies: TPromiseQuery;
}

export const Search = ({
  filterNames,
  title,
  tip,
  movies,
  error,
  searchMovies,
}: IProps): JSX.Element => (
  <>
    <SearchBar onSearch={searchMovies} />
    <SearchContainer>
      <FilterMovieList tip={tip} title={title} filterNames={filterNames} />

      <MovieList movies={movies} error={error} />
    </SearchContainer>
  </>
);
