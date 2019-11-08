import React from "react";
import "./App.css";
import Cards from "../Cards";
import Login from "../../Components/Login";
import Header from "../../Components/Header";
import firebase, { provider } from "../../firebase";

class App extends React.Component {
  state = {
    user: null
  };

  logIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        this.setState({ user });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <Header />
        <Login logIn={this.logIn} />
        <Cards />
      </div>
    );
  }
}

export default App;
