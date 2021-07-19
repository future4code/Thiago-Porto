import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <>
        <label>{this.props.label}</label>
        <input type={this.props.type} />  
      </>
    );
  }
}

export default Input;
