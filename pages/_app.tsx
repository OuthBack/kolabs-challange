import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals';
import { AppProvider } from '../hooks';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppProvider>
    <Component {...pageProps} />
    <GlobalStyles />
  </AppProvider>
);
export default App;
