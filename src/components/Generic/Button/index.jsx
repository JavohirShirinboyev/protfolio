import React from "react";
import { Container } from "./style";

const Button = ({ children, onClick, width, height }) => {
  return (
    <Container onClick={onClick} width={width} height={height}>
      {children || "Live <~>"}
    </Container>
  );
};

export default Button;
