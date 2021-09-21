import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  IMovie,
  IMovieSearch,
  TPromiseQuery,
} from '../../components/types/useSearchMovies';
import { popular, search } from '../../services/search';

export interface SearchMoviesProviderProps {
  children?: React.ReactNode;
}

interface SearchMoviesContextData {
  movies: IMovie[];
  page: number;
  error?: Error;
  setPage: Dispatch<SetStateAction<number>>;
  searchMovies: TPromiseQuery;
  getPopular: () => void;
}

const SearchMoviesContext = createContext<SearchMoviesContextData>(
  {} as SearchMoviesContextData,
);

export const SearchMoviesProvider = ({
  children,
}: SearchMoviesProviderProps): JSX.Element => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | undefined>();

  const searchMovies = useCallback(
    async query => {
      const { items, error: SearchError } = await search(query, page);

      // Para fazer o scroll infinito é preciso incrementar o array
      // e para fazer a pesquisa é preciso resetar o array, por isso
      // em toda página 1 ele reseta o array
      const resetOrIncrementMovies = (arrayItems: IMovieSearch) => {
        if (page === 1) {
          setMovies(arrayItems.results);
        } else {
          setMovies(previousMovies =>
            previousMovies.concat(arrayItems.results),
          );
        }
      };

      if (items) {
        resetOrIncrementMovies(items);
        return;
      }
      setError(SearchError);
    },
    [page],
  );

  const getPopular = useCallback(async () => {
    const { items, error: SearchError } = await popular(1);

    if (items) return setMovies(items.results);

    return setError(SearchError);
  }, []);

  return (
    <SearchMoviesContext.Provider
      value={{
        movies,
        page,
        setPage,
        error,
        searchMovies,
        getPopular,
      }}
    >
      {children}
    </SearchMoviesContext.Provider>
  );
};

export const useSearchMovies = (): SearchMoviesContextData => {
  const context = useContext(SearchMoviesContext);

  if (!context) {
    throw new Error(
      'useSearchMovies must be used within an SearchMoviesProvider',
    );
  }

  return context;
};
