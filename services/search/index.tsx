import {
  IMovieSearch,
  IMovieSearchReturn,
} from '../../components/types/useSearchMovies';
import { api } from '../../config';

const statusHandler = (result: { data: any; status: number }) => {
  switch (result.status) {
    case 200:
      return { items: result.data };

    default:
      return { error: new Error('An error ocurred fechting data') };
  }
};

export const queryMovies = async (
  query: string,
  page: number,
): Promise<IMovieSearchReturn> => {
  const result = await api.get<IMovieSearch>('/search/movie', {
    params: {
      query,
      page,
    },
  });

  return statusHandler(result);
};

export const popularMovies = async (
  page: number,
): Promise<IMovieSearchReturn> => {
  const result = await api.get<IMovieSearch>('/movie/popular', {
    params: {
      page,
    },
  });

  return statusHandler(result);
};
