import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid mediumseagreen;
  border-radius: 10px;
  display: block;
  font-family: "Lato", sans-serif;
`;

function Button() {
  return <StyledButton> Test </StyledButton>;
}

export default Button;
