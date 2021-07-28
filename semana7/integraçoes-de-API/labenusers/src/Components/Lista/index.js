import React from 'react';
import Button from '../Button';
import axios from 'axios';

const { url, headers } = {
  url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  headers: {
    Authorization: 'thiago-santiago-lovelace',
  },
};

class Lista extends React.Component {
  state = {
    userList: [],
  };

  listUsers = () => {
    axios
      .get(url, { headers })
      .then(({ data }) => this.setState({ userList: data }));
  };

  componentDidMount = () => this.listUsers();

  removeUser = (id) => {
    axios
      .delete(`${url}/${id}`, { headers })
      .then(() => {
        this.listUsers();
        alert('Usuário apagado com sucesso.');
      })
      .catch(() => alert('Usuário não apagado! Tente novamente'));
  };

  render() {
    const renderList = this.state.userList.map(({ id, name }) => (
      <li key={id}>
        {name}
        <Button event={() => this.removeUser(id)} nome={'X'} type={'button'} />
      </li>
    ));
    return (
      <section>
        <h1>Usuários Cadastrados:</h1>

        <ul>{renderList}</ul>
      </section>
    );
  }
}

export default Lista;
