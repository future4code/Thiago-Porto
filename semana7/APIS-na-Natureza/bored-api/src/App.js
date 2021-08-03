import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    arr: [],
  };

  getAllActivities = async () => {
    const url = 'http://www.boredapi.com/api/activity/';
    const { data } = await axios.get(url);
    this.setState({ arr: [data] });
  };

  render() {
    const showActivities = this.state.arr.map(({ activity, type, key }) => (
      <section key={key}>
        <p>Sua Atividade: {activity}</p>
        <p>Tipo: {type}</p>
      </section>
    ));
    return (
      <main>
        <header>Faça alguma coisa procastinador!</header>
        {showActivities}
        <button onClick={this.getAllActivities}>
          Clique aqui e pare de procastinar
        </button>
      </main>
    );
  }
}

export default App;
