import React from "react";
import "./guess.css";

export default class Guess extends React.Component {
  state = {
    value: ""
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onUpdate(this.state.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          name="userGuess"
          className="user-guess"
          placeholder="Enter your Guess"
          min="1"
          max="100"
        />
        <input
          type="submit"
          id="guessButton"
          className="guess-button"
          value="Guess"
        />
      </form>
    );
  }
}
