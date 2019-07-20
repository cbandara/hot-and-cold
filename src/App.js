import React from "react";
import Header from "./components/header";
import Game from "./components/game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Game />
      </main>
    </div>
  );
}

export default App;
