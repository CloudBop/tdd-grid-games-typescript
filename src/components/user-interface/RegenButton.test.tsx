import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegenButton from "./RegenButton";

test("renders Button", () => {
  const handleChange = jest.fn();
  //
  render(<RegenButton handleClick={handleChange} />);
  const tickButton = screen.getByRole("button", {
    name: "Regenerate",
  });

  expect(tickButton).toBeEnabled();
  userEvent.click(tickButton);
  expect(handleChange).toHaveBeenCalledTimes(1);
});
