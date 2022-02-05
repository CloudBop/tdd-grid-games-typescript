import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SimpleButton from "./UserInterface/SimpleButton";
import { generateRandomTiles, invertClickedCell } from "./utils/utils";
const numCols = 5;
const numRows = 5;
function App() {
  const [grid, setGrid] = React.useState(() => {
    return generateRandomTiles(numCols, numRows);
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
        <SimpleButton />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                onClick={() => {
                  const newGrid = invertClickedCell(grid, i, k);
                  setGrid(newGrid);
                }}
                className={`cell ${grid[i][k] ? "on" : "off"}`}
                role="gridcell"
                key={`${i}-${k}`}
                style={{
                  width: 20,
                  height: 20,
                }}
              >
                {grid[i][k]}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
