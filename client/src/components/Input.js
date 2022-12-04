import styled from "styled-components";


const StyledInput = styled.input`
  font-size: 18px;
  margin-bottom: 10px;
  background: white;
  border: 2px solid mediumseagreen;
  border-radius: 3px;
  ::placeholder {
    color: grey;
  }
`;

function Input() {
  return (
    <StyledInput />
  )
}

export default Input