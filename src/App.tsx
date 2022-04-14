import React from "react";
import "./App.css";
import GOL2dArray from "./components/gol-2d-array/GolTwoDimArray";
import LightsOut from "./components/lights-out/LightsOut";

function App() {
  return (
    <div className="App">
      <h1 className={"App-header"}>Experiments with Grid Games!</h1>
      <GOL2dArray />
      <LightsOut chanceOfOn={0.25} />
    </div>
  );
}

export default App;
