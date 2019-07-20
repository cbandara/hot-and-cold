import React from "react";
import "./guess-list.css";

export default class GuessList extends React.Component {
  render() {
    return (
      <ul id="guessList" className="guessList clearfix" data-children-count="0">
        {this.props.guesses.map((guess, i) => {
          return <li key={i}>{guess}</li>;
        })}
      </ul>
    );
  }
}
