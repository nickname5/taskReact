import React, { Component } from 'react';

class SuccessIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.success) {
      return ( <div className="success-icon icon"></div> );
    } else { return(null) }
  }
}

export default SuccessIcon;
