import React from 'react';
import { BigCardContainer } from './style';

function CardGrande(props) {
  return (
    <BigCardContainer>
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </BigCardContainer>
  );
}

export default CardGrande;
