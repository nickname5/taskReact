import React, { Component } from 'react';
import Error from './Error';
import SuccessIcon from './SuccessIcon';

class InputUser extends Component {
  constructor(props) {
    super(props);

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginBlur = this.onLoginBlur.bind(this);
  }

  onLoginChange(event) {
    this.props.change(event.target.value);
  }

  onLoginBlur(event) {
    this.props.blur(event.target.value);
  }

  render() {
    return (
      <div className="input__comp_user">
        <input className="input input_mail" type="email" name="login"
        placeholder="E-mail" value={this.props.userLogin}
        onChange={this.onLoginChange} onBlur={this.onLoginBlur} />
        <Error error={this.props.error} />
        <SuccessIcon success={this.props.success} />
      </div>
    );
  }
}

export default InputUser;
