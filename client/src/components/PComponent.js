import React from "react";

function PComponent({ attr, title, value }) {
  return (
    <>
    <p className={attr}>{title}</p>
    <p className="profileCardSubText">{value}</p>
    </>
  )
}

export default PComponent; 
