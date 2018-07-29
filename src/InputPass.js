import React, { Component } from 'react';
import SuccessIcon from './SuccessIcon';

class InputPass extends Component {
  constructor(props) {
    super(props);

    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPassBlur = this.onPassBlur.bind(this);
  }

  onPasswordChange(event) {
    this.props.change(event.target.value);
  }

  onPassBlur(event) {
    this.props.check(event.target.value);
  }

  render() {
    let classStr;
    if (this.props.success) {
      classStr = "input input_pass input_success";
    } else {
      classStr = "input input_pass";
    }

    return (
      <div className="input__comp_pass">
        <input className={classStr} type="password"
        name="password" placeholder="Password" value={this.props.value}
        onChange={this.onPasswordChange} onBlur={this.onPassBlur} />
        <SuccessIcon success={this.props.success} />
      </div>
    );
  }
}

export default InputPass;
