import React from "react";
import "./count.css";

export default class Count extends React.Component {
  render() {
    return (
      <p>
        Guess #<span id="count">{this.props.numGuesses}</span>!
      </p>
    );
  }
}
