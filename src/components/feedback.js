import React from "react";
import "./feedback.css";

export default class Feedback extends React.Component {
  render() {
    return (
      <div>
        <h2 className="feedback" id="feedback">
          {this.props.feedback}
        </h2>
      </div>
    );
  }
}
