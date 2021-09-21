import React from 'react';
import { MovieCard } from '../../molecules/MovieCard';
import { IMovie } from '../../types/useSearchMovies';
import { MovieListContainer } from './styles';

interface IProps {
  movies: IMovie[];
  error: Error | undefined;
}

const extendedDate = (movie_date: string): string => {
  const date = new Date(movie_date);

  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const MovieList = ({ movies, error }: IProps): JSX.Element => (
  <MovieListContainer>
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        date={extendedDate(movie.release_date)}
        overview={movie.overview}
        image={movie.poster_path}
        key={movie.id}
      />
    ))}
  </MovieListContainer>
);
