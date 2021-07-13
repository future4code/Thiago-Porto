import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardWrapper } from './style';

const CardPequeno = ({ icone, tipo, texto }) => (
  <CardWrapper>
    <FontAwesomeIcon icon={icone} />
    <p><strong>{tipo}</strong>: {texto}</p>
  </CardWrapper>
)

export default CardPequeno;