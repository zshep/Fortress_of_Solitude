import React from "react";

function CardFooter({ children, attr }) {
  return attr === undefined ? (
    <div className={`card-footer`}>{children}</div>
  ) : (
    <div className={`card-footer ${attr}`}>{children}</div>
  );
}

export default CardFooter;