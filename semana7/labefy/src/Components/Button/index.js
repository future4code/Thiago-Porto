import React from 'react';

export class Button extends React.Component {
  render() {
    const { type, name, event } = this.props;
    return (
      <button onClick={event} type={type}>
        {name}
      </button>
    );
  }
}

export default Button;
