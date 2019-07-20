import React from "react";
import "./header.css";

export default function Header() {
  function handleClick(e) {
    e.preventDefault();
    console.log("link was clicked");
  }
  return (
    <header>
      <nav>
        <ul className="clearfix">
          <li className="menu-item">
            <a className="instructions" href="/" onClick={handleClick}>
              Instructions
            </a>
          </li>
          <li className="menu-item">
            <a className="new" href="/">
              + New Game
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="title">HOT or COLD</h1>
    </header>
  );
}
