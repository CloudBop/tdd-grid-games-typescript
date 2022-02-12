import React from "react";
import { generateRandomTiles, lightsOutGridGame } from "../../utils/utils";

const numCols = 5;
const numRows = 5;
function LightsOut() {
  const [lightsOutGrid, setLightsOutGrid] = React.useState(() => {
    return generateRandomTiles(numCols, numRows, 0.25);
  });
  //
  return (
    <div className="Lights-out-wrapper">
      <h2>Lights Out!</h2>
      <button
        onClick={() => {
          //
          setLightsOutGrid(generateRandomTiles(numCols, numRows, 0.25));
        }}
      >
        create new game
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {lightsOutGrid.map((rows, i) =>
          rows.map((col, k, cols) => (
            <div
              onClick={() => {
                let newGrid = lightsOutGridGame(lightsOutGrid, i, k);
                setLightsOutGrid(newGrid);
              }}
              className={`cell ${lightsOutGrid[i][k] ? "on" : "off"}`}
              role="gridcell"
              key={`${i}-2-${k}`}
              style={{
                width: 20,
                height: 20,
              }}
            >
              {lightsOutGrid[i][k]}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LightsOut;
