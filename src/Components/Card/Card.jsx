import React, { Component } from "react";
import adam from "../../Images/adam-kovacs.png";
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
        src={adam}
        alt="adam"
      ></img>
    );
  }
}

export default Card;
