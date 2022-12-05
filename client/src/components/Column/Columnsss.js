import React from "react";

function Columnsss({ attr, children }) {
  return attr === undefined ? (
    <div className={`columns`}>{children}</div>
  ) : (
    <div className={`columns ${attr}`}>{children}</div>
  );
}

export default Columnsss;
