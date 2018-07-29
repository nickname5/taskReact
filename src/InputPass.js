import React, { Component } from 'react';

class InputPass extends Component {
  render() {
    return (
      <div className="input__comp_pass">
        <input className="input input_pass input_success" type="password" name="name" placeholder="Password" />
        <div className="success-icon icon"></div>
      </div>
    );
  }
}

export default InputPass;
