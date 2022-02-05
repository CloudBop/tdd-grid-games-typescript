import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders App header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Game Of Life/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders a 5x5 grid", () => {
  render(<App />);
  //
  const simpleGrid = screen.getAllByRole("gridcell");
  // 5x5 grid
  expect(simpleGrid.length === 25).toBe(true);
});

test("when a cell is clicked, invert the cell state", () => {
  render(<App />);
  // don't know in advance as grid is filled randomly
  const simpleGrid = screen.getAllByRole("gridcell");
  // 5x5 grid
  const prev = simpleGrid[0];
  expect(prev).toHaveClass("cell");
  // get current cell state
  const prevText = prev.innerHTML;
  userEvent.click(prev);
  const afterText = prev.innerHTML;
  // assert it has updated
  expect(afterText !== prevText).toBe(true);
});

test("renders a 'tick' button to run a regeneration", () => {
  render(<App />);
  const tickButton = screen.getByRole("button", {
    name: "Regenerate",
  });
  //
  expect(tickButton).toBeEnabled();
});

// not implmeneted
// test("when the 'tick' button is clicked, run a regeneration", () => {
//   render(<App />);
//   const tickButton = screen.getByRole("button", {
//     name: "Regenerate",
//   });
//   //
//   expect(tickButton).toBeEnabled();
//   userEvent.click(tickButton);

//   expect(spyRegenerateLifecycle).toHaveBeenCalled();
// });
