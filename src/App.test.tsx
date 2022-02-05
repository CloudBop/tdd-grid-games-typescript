import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders App header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Game Of Life/i);
  expect(headerElement).toBeInTheDocument();
});
test("renders a button", () => {
  render(<App />);
  const simpleButton = screen.getByRole("button", {
    name: "Click Me",
  });

  expect(simpleButton).toBeEnabled();
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
