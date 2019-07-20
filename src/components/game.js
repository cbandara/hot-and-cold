import React from "react";
import Feedback from "./feedback";
import Guess from "./guess";
import Count from "./count";
import GuessList from "./guess-list";
import "./game.css";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      recentGuess: "",
      feedback: "Make your guess!",
      correctGuess: Math.floor(Math.random() * 100) + 1
    };
    console.log(this.state.correctGuess);
  }

  setGuess = guess => {
    guess = parseInt(guess, 10);
    console.log(guess);
    if (isNaN(guess)) {
      this.setState({ feedback: "Please enter a valid number" });
      return;
    }

    const difference = Math.abs(guess - this.state.correctGuess);
    console.log(difference);
    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 20) {
      feedback = "You're Kinda Warm.";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 5) {
      feedback = "You're Kinda Hot.";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You won! Click new game to play again";
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess],
      recentGuess: guess
    });
  };

  render() {
    return (
      <div className="game">
        <Feedback feedback={this.state.feedback} />

        <Guess onUpdate={this.setGuess} />

        <Count numGuesses={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
