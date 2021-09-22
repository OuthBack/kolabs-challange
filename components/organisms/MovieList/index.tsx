import React from 'react';
import { Sentinel } from '../../molecules/Sentinel';
import { MovieCard } from '../../molecules/MovieCard';
import { IMovie } from '../../types/useSearchMovies';
import { MovieListContainer } from './styles';
import { Loading } from '../../atoms/Loading';
import { Title } from '../../atoms/Title';

interface IProps {
  movies: Set<IMovie>;
  loadNewMovies: () => void;
  error: Error | undefined;
  loading: boolean;
}

const extendedDate = (movie_date: string): string => {
  const date = new Date(movie_date);

  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const MovieList = ({
  movies,
  loadNewMovies,
  error,
  loading,
}: IProps): JSX.Element => (
  <MovieListContainer>
    {!error ? (
      <>
        {[...movies].map(movie => (
          <MovieCard
            title={movie.title}
            date={extendedDate(movie.release_date)}
            overview={movie.overview}
            image={movie.poster_path}
            key={movie.id}
          />
        ))}
        {!loading ? <Sentinel callback={loadNewMovies} /> : <Loading />}
      </>
    ) : (
      <Title>Ops... Ocorreu um erro durante a busca de filmes</Title>
    )}
  </MovieListContainer>
);
