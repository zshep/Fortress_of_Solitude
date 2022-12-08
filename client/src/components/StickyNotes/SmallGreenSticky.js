import React from 'react'
import styled from 'styled-components'
import GreenCorner from './GreenCorner';

const StyledStickyNote = styled.div`
transform:rotate(-4deg);
    box-sizing:border-box;
    width:125px;
    height:120px;
    position:relative;
    background:#A6CE90;
    overflow:hidden;
    margin:15px auto;
    padding:10px;
    border-radius:0 0 0 15px/22px;
    box-shadow:
        inset 0 -20px 20px rgba(0,0,0,0.2),
        inset 0 12px 5px rgba(0,0,0,0.2),
        0 2px 3px 2px rgba(0,0,0,0.2);
    font-family: 'Permanent Marker', cursive;
    line-height:1.7em;
    font-size:12px;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    color: black;
    transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(5deg);
    transition: transform 0.5s ease-in-out;
  }


    h1 {
      font-size:12px; 
     position:relative;
   }

`;

function SmallGreenSticky({title}) {
  return (
    <StyledStickyNote>
      <h1>{title}</h1>
        <GreenCorner />
    </StyledStickyNote>
  )
}

export default SmallGreenSticky