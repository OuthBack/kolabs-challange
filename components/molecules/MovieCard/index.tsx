import React from 'react';
import Image from 'next/image';
import { MovieCardContainer, MovieDetailsContainer } from './styles';
import { Title } from '../../atoms/Title';
import { Text } from '../../atoms/Text';
import { Subtitle } from '../../atoms/Subtitle';

interface IProps {
  title: string;
  date: string;
  image: string;
  overview: string;
}

export const MovieCard = ({
  title,
  date,
  overview,
  image,
}: IProps): JSX.Element => (
  <MovieCardContainer>
    <Image
      src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${image}`}
      width={94}
      height={141}
    />
    <MovieDetailsContainer>
      <>
        <Title>{title}</Title>
        <Subtitle>{date}</Subtitle>
      </>
      <Text>{overview}</Text>
    </MovieDetailsContainer>
  </MovieCardContainer>
);
