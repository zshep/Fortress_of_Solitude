import React from 'react'
import styled from 'styled-components'

const StyledStickyCorner = styled.div`
    content:"";
    display:block;
    position:absolute;
    width:20px;
    height:25px;
    background:#ffa;
    box-shadow:
    3px -2px 10px rgba(0,0,0,0.2),
    inset 15px -15px 15px rgba(0,0,0,0.3);
    left:0;
    bottom:0;
    z-index:2;
    transform:skewX(25deg);
    }
    

`;

function StickyCorner() {
  return (
    <StyledStickyCorner/>
  )
}

export default StickyCorner