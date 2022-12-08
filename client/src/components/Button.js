import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`

display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #05668d;
  border: none;
  border-radius: 0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  &:hover {
    background-color: #028090;
  }

  &:active {
    box-shadow: 0 2px 4px rgba(50, 50, 93, 0.09), 0 1px 2px rgba(0, 0, 0, 0.08);
  }1
`;

function Button() {
  return <StyledButton> Test </StyledButton>;
}

export default Button;
