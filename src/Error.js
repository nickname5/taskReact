import React, { Component } from 'react';

class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.error) {
      return (
        <div>
          <span className="error">Invalid Username</span>
          <div className="error-icon icon"></div>
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default Error;
