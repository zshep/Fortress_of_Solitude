import React from "react";

function CardContent({ children, attr }) {
  return attr === undefined ? (
    <div className={`card-content`}>{children}</div>
  ) : (
    <div className={`card-content ${attr}`}>{children}</div>
  );
}

export default CardContent;