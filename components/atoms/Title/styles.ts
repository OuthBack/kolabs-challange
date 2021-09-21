import styled from 'styled-components';
import { chooseFontColor } from '../../../helpers/colors';
import { IColor } from '../../types/components';

export const H2 = styled.h2<IColor>`
  font-weight: 400;
  font-size: 1.2em;
  color: ${props => chooseFontColor(props.color, props.theme)};
`;
