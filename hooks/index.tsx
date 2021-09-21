import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SearchMoviesProvider } from './useSearchMovies';
import light from '../styles/themes/default';
import { IChildren } from '../components/types/components';

export const AppProvider = ({ children }: IChildren): JSX.Element => (
  <SearchMoviesProvider>
    <ThemeProvider theme={light}>{children}</ThemeProvider>
  </SearchMoviesProvider>
);
