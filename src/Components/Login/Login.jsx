import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return <button onClick={this.props.logIn}>Login</button>;
  }
}

export default Login;
