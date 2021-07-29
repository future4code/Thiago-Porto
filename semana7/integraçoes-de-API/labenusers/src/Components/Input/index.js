import React from 'react';

class Input extends React.Component {
  render() {
    const { nome, type, event, value } = this.props;
    return (
      <div>
        <label>{nome}:</label>
        <input type={type} onChange={event} value={value} required />
      </div>
    );
  }
}

export default Input;
