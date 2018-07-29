import React, { Component } from 'react';

class InputUser extends Component {
  render() {
    return (
      <div className="input__comp_user">
        <input className="input input_mail" type="email" name="mail" placeholder="E-mail" />
        <span className="error">Invalid Username</span>
        <div className="error-icon icon"></div>
        <div className="success-icon icon"></div>
      </div>
    );
  }
}

export default InputUser;
