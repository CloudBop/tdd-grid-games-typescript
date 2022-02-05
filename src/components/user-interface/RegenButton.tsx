import React from "react";

interface ButtonProps {
  handleClick: () => void;
}

function RegenButton({ handleClick }: ButtonProps) {
  return <button onClick={handleClick}>Regenerate</button>;
}

export default RegenButton;
