import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SimpleButton from "./UserInterface/SimpleButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1> Game Of Life </h1>
      </header>
      <div className="App-wrapper">
        <h2>Write a failing test...</h2>
        <SimpleButton />
      </div>
    </div>
  );
}

export default App;
