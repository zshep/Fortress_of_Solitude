import React from "react";

function CardHeader({ children, attr }) {
  return attr === undefined ? (
    <div className={`card-header`}>{children}</div>
  ) : (
    <div className={`card-header ${attr}`}>{children}</div>
  );
}

export default CardHeader;