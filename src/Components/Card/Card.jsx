import React, { Component } from "react";
import { styles } from "./Card.module.scss";

class Card extends Component {
  state = { isModified: false };

  handleClick = () => {
    this.setState({ isModified: !this.state.isModified });
    console.log("clicked");
  };
  render() {
    let modifiedStyle = this.state.isModified
      ? { transform: "rotate(20deg)" }
      : {};

    return (
      <img
        onClick={this.handleClick}
        style={modifiedStyle}
        src={this.props.data.photoURL}
        alt=""
      ></img>
    );
  }
}

export default Card;
