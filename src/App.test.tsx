import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Game Of Life/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a button", () => {
  render(<App />);

  const simpleButton = screen.getByRole("button", {
    name: "Click Me",
  });

  expect(simpleButton).toBeEnabled();
});
