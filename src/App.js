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
      success: false
    };

    this.setLogin = this.setLogin.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  onSubmit(event) {
    if (!this.state.success) {
      event.preventDefault();
    }
  }

  setPassword(pass) {
    this.setState({userPassword: pass});
  }

  setLogin(login) {
    this.setState({userLogin: login});
  }

  checkLogin(login) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(this.state.userLogin) === false) {
      this.setState({eMailError: true});
      this.setState({success: false});
    } else {
      this.setState({eMailError: false});
      this.setState({userLogin: login});
    }
    this.checkPassword();
  }

  checkPassword() {
    if (this.state.userLogin === this.state.login &&
      this.state.userPassword === this.state.password) {
      this.setState({success: true});
    } else {
      this.setState({success: false});
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="header">
          <strong className="strong">Bank </strong>Support Portal
        </h1>
        <form className="form" noValidate="novalidate" onSubmit={this.onSubmit}>
          <InputUser value={this.state.userLogin} change={this.setLogin}
          blur={this.checkLogin} error={this.state.eMailError} success={this.state.success}/>
          <InputPass value={this.state.userPassword} change={this.setPassword}
          check={this.checkPassword} success={this.state.success} />
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
