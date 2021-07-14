import React from 'react';
import { ImageButtonContainer } from './style';

function ImagemButton(props) {
  return (
    <ImageButtonContainer>
      <img src={props.imagem} />
      <p>{props.texto}</p>
    </ImageButtonContainer>
  );
}

export default ImagemButton;
