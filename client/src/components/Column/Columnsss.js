import React from "react";

// Used as parent container for Column elements.
// https://bulma.io/documentation/columns/basics/

function Columnsss({ attr, children }) {
  return attr === undefined ? (
    <div className={`columns`}>{children}</div>
  ) : (
    <div className={`columns ${attr}`}>{children}</div>
  );
}

export default Columnsss;
