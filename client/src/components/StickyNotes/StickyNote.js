import React from 'react'
import styled from 'styled-components'
import StickyCorner from './StickyCorner';

const StyledStickyNote = styled.div`
transform:rotate(4deg);
    box-sizing:border-box;
    background:#444; 
    width:250px;
    height:240px;
    position:relative;
    background:#ffa;
    overflow:hidden;
    margin:30px auto;
    padding:20px;
    border-radius:0 0 0 30px/45px;
    box-shadow:
        inset 0 -40px 40px rgba(0,0,0,0.2),
        inset 0 25px 10px rgba(0,0,0,0.2),
        0 5px 6px 5px rgba(0,0,0,0.2);
    font-family: 'Permanent Marker', cursive;
    line-height:1.7em;
    font-size:19px;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    color: black;
    h1 {
      font-size:25px; 
     position:relative;
   }
   h2 {
    font-size:18px; 
   position:relative;
 }

`;

function StickyNote({title, summary}) {
  return (
    <StyledStickyNote>
      <h1>{title}</h1>
      <h2>{summary}</h2>
        <StickyCorner />
    </StyledStickyNote>
  )
}

export default StickyNote