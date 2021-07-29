import React from 'react';

import Login from './Components/Login';
import Lista from './Components/Lista';
import Button from './Components/Button';

import './App.css';

class App extends React.Component {
  state = {
    paginaInicial: true,
  };

  handleClick = () =>
    this.setState({ paginaInicial: !this.state.paginaInicial });

  render() {
    return (
      <main>
        {this.state.paginaInicial ? <Login /> : <Lista />}
        <Button
          event={this.handleClick}
          type={'button'}
          nome={
            this.state.paginaInicial
              ? 'Ir a lista de usuario'
              : 'Cadastrar usuario'
          }
        />
      </main>
    );
  }
}

export default App;
