import React from "react";
import { Container } from "./style";

const Button = ({ children, onClick, width, height, display }) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      display={display}
    >
      {children || "Live <~>"}
    </Container>
  );
};

export default Button;
