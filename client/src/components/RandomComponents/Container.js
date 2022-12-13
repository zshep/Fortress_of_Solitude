import React from "react";

function Container({ children, attr }) {
  return attr === undefined ? (
    <div className={`container`}>{children}</div>
  ) : (
    <div className={`container ${attr}`}>{children}</div>
  );
}

export default Container;
