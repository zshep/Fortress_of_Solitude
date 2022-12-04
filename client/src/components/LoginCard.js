import styled from "styled-components";

import Input from "./Input";
import Button from "./Button";


const StyledLoginCard = styled.div`
    width: 75%;
    height: 300px;
    mad-width: 450px;
    border-radius: 5px;
    margin: 40px;
    background-color: #d1e0d4;
    box-shadow: 5px 5px 5px grey;
    border: 2px solid mediumseagreen;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  
`

function LoginCard() {
    return (
      <StyledLoginCard>
        <Input />
        <Input />
        <Button />
      </StyledLoginCard>
    )
  }
  
  export default LoginCard