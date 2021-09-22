import React from 'react';
import { useTheme } from 'styled-components';
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';

export const Loading = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <LoadingContainer>
      <ReactLoading
        type="spin"
        color={colors.secundary}
        height="10%"
        width="10%"
      />
    </LoadingContainer>
  );
};
