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
        <div className="wrapper">
          <h1> Conway's Game of Life </h1>
          <ul>
            <li>
              Any live cell with fewer than two live neighbours dies, as if by
              underpopulation.
            </li>
            <li>
              Any live cell with two or three live neighbours lives on to the
              next generation.
            </li>
            <li>
              Any live cell with more than three live neighbours dies, as if by
              overpopulation.
            </li>
            <li>
              Any dead cell with exactly three live neighbours becomes a live
              cell, as if by reproduction.
            </li>
          </ul>
          These rules, which compare the behavior of the automaton to real life,
          can be condensed into the following: Any live cell with two or three
          live neighbours survives. Any dead cell with three live neighbours
          becomes a live cell. All other live cells die in the next generation.
          Similarly, all other dead cells stay dead.
        </div>
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
