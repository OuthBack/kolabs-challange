import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Search } from '../components/templates/Search';
import { useSearchMovies } from '../hooks/useSearchMovies';

const filterNames = ['Filmes'];

const title = 'Resultado da Busca';
const tip =
  "Dica: Você pode usar o filtro 'y:' para limitar seus resultados por ano. Exemplo: 'tropa de elite y:2007'.";

const Home: NextPage = (): JSX.Element => {
  const {
    movies,
    error,
    changeQuery,
    loadPage,
    searchMovies,
    getPopular,
    loading,
  } = useSearchMovies();
  const [filterSelected, setFilterSelected] = useState(0);

  const changeFilter = (newFilter: number) => {
    setFilterSelected(newFilter);
  };

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  useEffect(() => {
    getPopular();
  }, [getPopular]);

  return (
    <Search
      tip={tip}
      title={title}
      filterNames={filterNames}
      filterSelected={filterSelected}
      changeFilter={changeFilter}
      movies={movies}
      error={error}
      changeQuery={changeQuery}
      loadNewMovies={loadPage}
      loading={loading}
    />
  );
};

export default Home;
