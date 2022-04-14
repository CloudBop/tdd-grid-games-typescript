import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LightsOut from "./LightsOut";

test("renders Lights Out Title", () => {
  render(<LightsOut />);
  const headerElement = screen.getByText(/Lights Out!/i);
  expect(headerElement).toBeInTheDocument();
});
test("render enabled create new game button", () => {
  render(<LightsOut />);
  const createNewGameButton = screen.getByRole("button", {
    name: "create new game",
  });
  //
  expect(createNewGameButton).toBeEnabled();
  // userEvent.click(createNewGameButton).export default first
});

test("when a cell is clicked, invert the cell state and that of it's adjacent neighhbours", () => {
  // don't know in advance as grid is filled randomly - this is probably bad test design
  // if
  render(<LightsOut />);
  const simpleGrid = screen.getAllByRole("gridcell");
  expect(simpleGrid).toHaveLength(25);
  // 5x5 grid - but flattened into a 1 dimeensional array
  const prevLeftTopCorner = simpleGrid[0];
  expect(prevLeftTopCorner).toHaveClass("cell");
  const pLeftTopCorner = prevLeftTopCorner.innerHTML;
  //
  const prevLeftTopCornerAdjacentRight = simpleGrid[1];
  const pLeftTopCornerAdjacentRight = prevLeftTopCornerAdjacentRight.innerHTML;

  const prevLeftTopCornerAdjacentBelow = simpleGrid[5];
  const pLeftTopCornerAdjacentBelow = prevLeftTopCornerAdjacentBelow.innerHTML;

  // get current cell state

  fireEvent.click(prevLeftTopCorner);

  const aLeftTopCorner = prevLeftTopCornerAdjacentRight.innerHTML;
  const aLeftTopCornerAdjacentRight = prevLeftTopCornerAdjacentRight.innerHTML;
  const aLeftTopCornerAdjacentBelow = prevLeftTopCornerAdjacentBelow.innerHTML;

  expect(aLeftTopCorner !== pLeftTopCorner).toBe(true);
  // this test can fail
  expect(aLeftTopCornerAdjacentRight !== pLeftTopCornerAdjacentRight).toBe(
    true
  );
  // this test can fail
  expect(aLeftTopCornerAdjacentBelow !== pLeftTopCornerAdjacentBelow).toBe(
    true
  );
});
