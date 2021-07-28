import React from 'react';

class Input extends React.Component {
  render() {
    const { nome, type, event } = this.props;
    return (
      <button onClick={event} type={type}>
        {nome}
      </button>
    );
  }
}

export default Input;
