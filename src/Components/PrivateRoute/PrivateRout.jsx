import React, { Component } from "react";

class PrivateRoute extends Component {
  state = {};
  render() {
    if (!this.props.user) {
      return <p>not authenticated</p>;
    } else {
      return this.props.children;
    }
  }
}

export default PrivateRoute;
