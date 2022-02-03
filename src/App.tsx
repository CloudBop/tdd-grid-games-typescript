import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SimpleButton from "./UserInterface/SimpleButton";
import { generateRandomTiles } from "./utils/utils";

function App() {
  const [grid, setGrid] = React.useState(() => {
    return generateRandomTiles();
  });
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

        <div>
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                role="gridcell"
                key={`${i}-${k}`}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][k] ? "#F68E5F" : undefined,
                  border: "1px solid #595959",
                }}
                onClick={() => alert(`${i}:${k}hello ${grid[i][k]}`)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
