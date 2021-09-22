import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import { IMovie } from '../../components/types/useSearchMovies';
import { popularMovies, queryMovies } from '../../services/search';

export interface SearchMoviesProviderProps {
  children?: React.ReactNode;
}

interface SearchMoviesContextData {
  movies: Set<IMovie>;
  page: number;
  error?: Error;
  query: string;
  // eslint-disable-next-line no-unused-vars
  changeQuery: (queryValue: string) => void;
  setPage: Dispatch<SetStateAction<number>>;
  searchMovies: () => void;
  getPopular: () => void;
  loadPage(): void;
  loading: boolean;
}

const SearchMoviesContext = createContext<SearchMoviesContextData>(
  {} as SearchMoviesContextData,
);

export const SearchMoviesProvider = ({
  children,
}: SearchMoviesProviderProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Set<IMovie>>(new Set([]));
  const [page, setPage] = useState(1);
  const [totalPages] = useState(500);
  const [loading, setLoading] = useState(false);
  const [canLoadPage, setCanLoadPage] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  const resetOrInscreaseMovies = useCallback(
    (newMovies: IMovie[]) => {
      if (page === 1) {
        setMovies(new Set(newMovies));
        return;
      }

      setMovies(previousMovies => new Set([...previousMovies, ...newMovies]));
    },
    [page],
  );

  const searchMovies = useCallback(async (): Promise<void> => {
    if (!query) return;

    const { items, error: SearchError } = await queryMovies(query, page);

    setLoading(false);

    if (error) {
      setError(SearchError);
      return;
    }

    if (!items) return;

    if (items.results.length === 0) {
      setMovies(new Set([]));
      return;
    }

    // Para fazer o scroll infinito é preciso incrementar o array
    // e para fazer a pesquisa é preciso resetar o array, por isso
    // em toda página 1 ele reseta o array
    resetOrInscreaseMovies(items.results);
  }, [error, page, query, resetOrInscreaseMovies]);

  const getPopular = useCallback(async () => {
    if (!canLoadPage) return;
    const { items, error: SearchError } = await popularMovies(page);

    setLoading(false);

    if (!items) return;
    console.log(items.results.length);
    resetOrInscreaseMovies(items.results);

    setCanLoadPage(false);
    setError(SearchError);
  }, [canLoadPage, page, resetOrInscreaseMovies]);

  const changeQuery = (queryValue: string) => {
    setPage(1);
    setQuery(queryValue);
  };

  const loadPage = () => {
    if (page > totalPages) return;
    setCanLoadPage(true);

    setLoading(true);

    console.log('loading', loading);

    setPage(oldPage => oldPage + 1);
  };

  return (
    <SearchMoviesContext.Provider
      value={{
        movies,
        query,
        changeQuery,
        page,
        setPage,
        error,
        searchMovies,
        getPopular,
        loadPage,
        loading,
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
