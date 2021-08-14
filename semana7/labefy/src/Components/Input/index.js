import React from 'react';

export class Input extends React.Component {
  render() {
    const { type, placeholder, event, value } = this.props;
    return (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={event}
        required
      />
    );
  }
}

export default Input;
