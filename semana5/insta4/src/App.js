import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px 5px;
  }

  button {
    background-color: black;
    border: 1px solid black;
    color: white;
    cursor: pointer;
    font-weight: bold;
    padding: 8px 0;
    margin: 10px;
    transition: all .3s ease;

    &:hover {
      background: transparent;
      color: black;
    }
  }

`;

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Joao',
        fotoUsuario: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg',
        fotoPost:
          'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
      },
      {
        nomeUsuario: 'Pedro',
        fotoUsuario:
          'https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png',
        fotoPost:
          'https://a-static.mlcdn.com.br/618x463/quadro-decorativo-lua-noite-lago-arvores-paisagem-natureza-decoracoes-com-moldura-vital-quadros/vitalquadrosdobrasil/909030021/f9fb22e066ef26cb709690902fd304f7.jpg',
      },
    ],

    nomeUsuarioInput: '',
    fotoUsuarioInput: '',
    fotoPostInput: '',
  };

  showNovoPost = (event) => {
    event.preventDefault();
    
    const copiaArray = this.state.post;
    const novoPost = {
      nomeUsuario: this.state.nomeUsuarioInput,
      fotoUsuario: this.state.fotoUsuarioInput,
      fotoPost: this.state.fotoPostInput,
    };

    this.setState({
      post: [...copiaArray, novoPost],
    });
  };

  onChangeNomeUsuario = ({ target }) =>
    this.setState({ nomeUsuarioInput: target.value });

  onChangeFotoUsuario = ({ target }) =>
    this.setState({ fotoUsuarioInput: target.value });

  onChangeFotoPost = ({ target }) =>
    this.setState({ fotoPostInput: target.value });

  render() {
    return (
      <MainContainer>
        <FormContainer>
          <input
            placeholder="Nome do usuario"
            valeu={this.state.nomeUsuarioInput}
            onChange={this.onChangeNomeUsuario}
          />
          <input
            placeholder="Foto do usuario"
            valeu={this.state.fotoUsuarioInput}
            onChange={this.onChangeFotoUsuario}
          />
          <input
            placeholder="Foto do post"
            valeu={this.state.fotoPostInput}
            onChange={this.onChangeFotoPost}
          />
          <button onClick={this.showNovoPost} type="submit">
            Criar novo post
          </button>
        </FormContainer>

        {this.state.post.map(({ nomeUsuario, fotoUsuario, fotoPost }) => (
          <Post
            nomeUsuario={nomeUsuario}
            fotoUsuario={fotoUsuario}
            fotoPost={fotoPost}
          />
        ))}
      </MainContainer>
    );
  }
}

export default App;
