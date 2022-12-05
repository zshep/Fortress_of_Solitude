import React from "react";

function CardContainer({ children, attr }) {
  return attr === undefined ? (
    <div className={`card`}>{children}</div>
  ) : (
    <div className={`card ${attr}`}>{children}</div>
  );
}

export default CardContainer;
