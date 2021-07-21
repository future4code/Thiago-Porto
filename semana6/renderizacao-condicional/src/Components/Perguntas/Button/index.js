import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button type="button" onClick={this.props.event}>
        {this.props.texto}
      </button>
    );
  }
}

export default Button;
