import React from "react";
// import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App ", () => {
  render(<App />);
  const headerElement = screen.getByText(/Experiments with Grid Games!/i);
  expect(headerElement).toBeInTheDocument();
});
