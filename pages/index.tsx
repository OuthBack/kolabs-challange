import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { Search } from '../components/templates/Search';
import { useSearchMovies } from '../hooks/useSearchMovies';

const filterNames = ['Tudo', 'Filmes', 'Seriados', 'Pessoas'];

const title = 'Resultado da Busca';
const tip =
  "Dica: Você pode usar o filtro 'y:' para limitar seus resultados por ano. Exemplo: 'tropa de elite y:2007'.";

const Home: NextPage = (): JSX.Element => {
  const { movies, error, searchMovies, getPopular } = useSearchMovies();

  useEffect(() => {
    getPopular();
  }, [getPopular]);

  return (
    <Search
      tip={tip}
      title={title}
      filterNames={filterNames}
      movies={movies}
      error={error}
      searchMovies={searchMovies}
    />
  );
};

export default Home;
