import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Joao'}
          fotoUsuario={'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg'}
          fotoPost={
            'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp'
          }
        />

        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={
            'https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png'
          }
          fotoPost={
            'https://a-static.mlcdn.com.br/618x463/quadro-decorativo-lua-noite-lago-arvores-paisagem-natureza-decoracoes-com-moldura-vital-quadros/vitalquadrosdobrasil/909030021/f9fb22e066ef26cb709690902fd304f7.jpg'
          }
        />
      </MainContainer>
    );
  }
}

export default App;
