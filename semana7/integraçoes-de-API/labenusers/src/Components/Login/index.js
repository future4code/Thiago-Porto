import React from 'react';
import Input from '../Input/';
import Button from '../Button';

import axios from 'axios';

class Login extends React.Component {
  state = {
    nameInputvalue: '',
    emailInputValue: '',
  };

  onChangeInputName = ({ target }) =>
    this.setState({ nameInputvalue: target.value });

  onChangeInputEmail = ({ target }) =>
    this.setState({ emailInputValue: target.value });

  createNewUser = async (event) => {
    event.preventDefault();

    const { url, body, headers } = {
      url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body: {
        name: this.state.nameInputvalue,
        email: this.state.emailInputValue,
      },
      headers: {
        Authorization: 'thiago-santiago-lovelace',
      },
    };

    axios
      .post(url, body, { headers })
      .then(() => alert('Usuario cadastrado com sucesso!'))
      .catch(() => alert('Usuario não foi cadastrado com sucesso!'));
  };

  render() {
    return (
      <form>
        <Input
          nome={'Nome'}
          value={this.nameInputvalue}
          type={'text'}
          event={this.onChangeInputName}
        />
        <Input
          nome={'Email'}
          type={'email'}
          value={this.emailInputValue}
          event={this.onChangeInputEmail}
        />
        <Button event={this.createNewUser} nome={'Enviar'} type={'submit'} />
      </form>
    );
  }
}

export default Login;
