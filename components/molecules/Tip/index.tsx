import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IChildren } from '../../types/components';
import { TipContainer } from './styles';
import { Subtitle } from '../../atoms/Subtitle';

export const Tip = ({ children }: IChildren): JSX.Element => (
  <TipContainer className="tip-container">
    <Subtitle>
      <>
        <FontAwesomeIcon icon={faInfoCircle} />
        {children}
      </>
    </Subtitle>
  </TipContainer>
);
