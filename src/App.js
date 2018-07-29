import React, { Component } from 'react';
import './App.css';
import './fonts/stylesheet.css';
import InputUser from './InputUser';
import InputPass from './InputPass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: '',
      userPassword: '',
      login: 'designer@gmail.com',
      password: '1234567890',
      eMailError: false,
      succes: false
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLoginBlur = this.onLoginBlur.bind(this);
    this.error = this.error.bind(this);
    this.success = this.success.bind(this);
    this.inputPass = this.inputPass.bind(this);
    this.onPassBlur = this.onPassBlur.bind(this);
  }

  onSubmit(event) {
    if (!this.state.succes) {
      event.preventDefault();
    } else {
      console.log('success');
    }
  }

  onPasswordChange(event) {
    this.setState({userPassword: event.target.value});
  }

  onLoginChange(event) {
    this.setState({userLogin: event.target.value});
  }

  onLoginBlur(event) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(this.state.userLogin) == false) {
      this.setState({eMailError: true});
    } else {
      this.setState({eMailError: false});
      this.setState({userLogin: event.target.value});
    }
  }

  onPassBlur(event) {
    if (this.state.userLogin === this.state.login &&
      this.state.userPassword === this.state.password) {
      this.setState({succes: true});
    } else {
      this.setState({succes: false});
    }
  }

  error() {
    if (this.state.eMailError) {
      return (
        <div>
          <span className="error">Invalid Username</span>
          <div className="error-icon icon"></div>
        </div>
      )
    }
  }

  success() {
    if (this.state.succes) {
      return ( <div className="success-icon icon"></div> )
    }
  }

  inputPass() {
    if (this.state.succes) {
      return (
        <div className="input__comp_pass">
          <input className="input input_pass input_success" type="password"
          name="password" placeholder="Password" value={this.state.userPassword}
          onChange={this.onPasswordChange} onBlur={this.onPassBlur} />
          <div className="success-icon icon"></div>
        </div>
      )
    } else {
      return (
        <div className="input__comp_pass">
          <input className="input input_pass" type="password"
          name="password" placeholder="Password" value={this.state.userPassword}
          onChange={this.onPasswordChange} onBlur={this.onPassBlur} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="header">
          <strong className="strong">Bank </strong>Support Portal
        </h1>
        <form className="form" noValidate="novalidate" onSubmit={this.onSubmit}>
          <div className="input__comp_user">
            <input className="input input_mail" type="email" name="login"
            placeholder="E-mail" value={this.state.userLogin}
            onChange={this.onLoginChange} onBlur={this.onLoginBlur} />
            {this.error()}
            {this.success()}
          </div>
          {this.inputPass()}
          <input className="submit" type="submit" value="Login" />
          <p className="text">
            <span>Forgot your password?</span>
            <a className="link" href="#"> Reset it here</a>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
