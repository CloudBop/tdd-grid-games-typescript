import React from "react";
import {
  generateRandomTiles,
  invertClickedCell,
  regenerateLifecycle,
} from "../../utils/utils";
import RegenButton from "../user-interface/RegenButton";
import "./GolTwoDimArray.css";
const numCols = 5;
const numRows = 5;

function GolTwoDimArray() {
  const [grid, setGrid] = React.useState(() => {
    //
    return generateRandomTiles(numCols, numRows, 0);
  });
  const [running, setRunning] = React.useState(false);
  const runningRef = React.useRef(running);
  runningRef.current = running;
  const runSimulation = React.useCallback((grid: (0 | 1)[][]) => {
    if (!runningRef.current) {
      return;
    }
    setGrid((prev) => {
      const newState = regenerateLifecycle(prev);
      return newState;
    });
  }, []);

  return (
    <div className={"golTwoDimArrayContainer"}>
      <div className={"App-header"}>
        <h2> Conway's Game of Life </h2>
        <ul>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
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
        <p>
          These rules, which compare the behavior of the automaton to real life,
          can be condensed into the following: Any live cell with two or three
          live neighbours survives. Any dead cell with three live neighbours
          becomes a live cell. All other live cells die in the next generation.
          Similarly, all other dead cells stay dead.
        </p>
      </div>
      <div>
        <RegenButton
          handleClick={function (): void {
            setGrid((prev) => {
              const newState = regenerateLifecycle(prev);
              return newState;
            });
          }}
        />
        <button
          onClick={() => {
            //
            setRunning((p) => !p);
            //
            if (!running) {
              runningRef.current = true;
            }
            setInterval(() => {
              runSimulation(grid);
            }, 1000);
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
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

export default GolTwoDimArray;
