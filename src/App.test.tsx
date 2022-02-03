import React from "react";
import { render, screen } from "@testing-library/react";
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
test("renders a 2x2 grid", () => {
  render(<App />);
  //
  const simpleGrid = screen.getAllByRole("gridcell");
  // 2x2 grid
  expect(simpleGrid.length === 4).toBe(true);
});
