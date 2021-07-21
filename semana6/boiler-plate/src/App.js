import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: '',
  };

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    localStorage.length &&
      this.setState({ tarefas: JSON.parse(localStorage.getItem('tarefas')) });
  }

  onChangeInput = ({ target }) => this.setState({ inputValue: target.value });

  criaTarefa = () => {
    const arrCopia = this.state.tarefas;
    const completa = false;
    const texto = this.state.inputValue;
    const id = Date.now();

    const novoDado = { completa, texto, id };
    this.setState({ tarefas: [...arrCopia, novoDado] });
  };

  selectTarefa = (id) => {
    const newTaskList = this.state.tarefas.map((tarefa) => {
      const { completa } = tarefa;
      if (id === tarefa.id) {
        const novoDado = { ...tarefa, completa: !completa };
        return novoDado;
      } else return tarefa;
    });

    this.setState({ tarefas: newTaskList });
  };

  onChangeFilter = ({ target }) => this.setState({ filtro: target.value });

  render() {
    const listaFiltrada = this.state.tarefas.filter(({ completa }) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !completa;
        case 'completas':
          return completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(({ completa, id, texto }, index) => (
            <Tarefa
              key={index}
              completa={completa}
              onClick={() => this.selectTarefa(id)}
            >
              {texto}
            </Tarefa>
          ))}
        </TarefaList>
      </div>
    );
  }
}

export default App;
