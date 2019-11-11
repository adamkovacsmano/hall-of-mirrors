import React from "react";
import "./App.css";
import Card from "../../Components/Card";
import Login from "../../Components/Login";
import Header from "../../Components/Header";
import firebase, { provider } from "../../firebase";
import { firestore } from "../../firebase";

class App extends React.Component {
  state = {
    user: {}
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
        <Card data={this.state.user} />
      </div>
    );
  }
}

export default App;
