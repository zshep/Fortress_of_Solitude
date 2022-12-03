import React from 'react'
import styled from 'styled-components'

export const FooterBox = styled.div`
font-family: 'Lato', sans-serif;
font-size: 18px;
background-image: linear-gradient(260deg,  rgb(25, 145, 37) 0%, #8c918c 100%); 
border: 1px solid rgba(0,0,0,0.2);
padding-bottom: 10px;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
`;

function Footer() {
  return (
    <FooterBox />
  )
}

export default Footer