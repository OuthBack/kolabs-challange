export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieSearch {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieSearchReturn {
  items?: IMovieSearch;
  error?: Error;
}

interface IFormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}

export interface ISearchForm extends HTMLFormElement {
  readonly elements: IFormElements;
}

// eslint-disable-next-line no-unused-vars
export type TPromiseQuery = (query: string) => Promise<void>;
