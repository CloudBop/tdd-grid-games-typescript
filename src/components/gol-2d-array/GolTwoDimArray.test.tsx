import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GolTwoDimArray from "./GolTwoDimArray";

test("renders GOL header", () => {
  render(<GolTwoDimArray />);
  const headerElement = screen.getByText(/Game Of Life/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders a 5x5 grid", () => {
  render(<GolTwoDimArray />);
  //
  const simpleGrid = screen.getAllByRole("gridcell");
  // 5x5 grid
  expect(simpleGrid.length === 25).toBe(true);
});

test("when a cell is clicked, invert the cell state", () => {
  render(<GolTwoDimArray />);
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
  render(<GolTwoDimArray />);
  const tickButton = screen.getByRole("button", {
    name: "Regenerate",
  });
  //
  expect(tickButton).toBeEnabled();
});

test("when the 'tick' button is clicked, run a regeneration", () => {
  // creating [][] of 0s
  render(<GolTwoDimArray />);

  const tickButton = screen.getByRole("button", {
    name: "Regenerate",
  });

  //cells
  const simpleGrid = screen.getAllByRole("gridcell");
  // 5x5 grid, `flattened` was 2d, but now 1d of html Array List
  const prev = simpleGrid;

  const cell00 = prev[0];
  const cell01 = prev[1];

  const cell10 = prev[5];
  const cell11 = prev[6];

  // turn on 3 elements in top grid corner,
  userEvent.click(cell00);
  userEvent.click(cell01);
  userEvent.click(cell10);
  // assert this is the case
  expect(cell00.innerHTML === "1").toBe(true);
  expect(cell01.innerHTML === "1").toBe(true);
  expect(cell10.innerHTML === "1").toBe(true);
  expect(cell11.innerHTML === "0").toBe(true);

  // is button on?, then click
  expect(tickButton).toBeEnabled();
  // run a generation
  userEvent.click(tickButton);

  // now the 4th sqaure should be filled.
  expect(cell00.innerHTML === "1").toBe(true);
  expect(cell01.innerHTML === "1").toBe(true);
  expect(cell10.innerHTML === "1").toBe(true);
  expect(cell11.innerHTML === "1").toBe(true);
});
