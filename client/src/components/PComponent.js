import React from "react";

function PComponent({ attr, title, value }) {
  return (
    <>
    <p className={attr}>{title}</p>
    <p className="profileSubText">{value}</p>
    </>
  )
}

export default PComponent; 
