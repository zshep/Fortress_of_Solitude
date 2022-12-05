import React from "react";

// Child elements of Columnsss.js. To nest multiple columns next to each other, create new Column with content as the children.
// https://bulma.io/documentation/columns/basics/

function Column({ attr, children }) {
  if (attr === undefined) {
    return Array.isArray(children) ? (
      children.map((el, i) => {
        return (
          <div key={i} className={`column`}>
            {el}
          </div>
        );
      })
    ) : (
      <div className={`column`}>{children}</div>
    );
  } else {
    return Array.isArray(children) ? (
      children.map((el, i) => {
        return (
          <div key={i} className={`column ${attr}`}>
            {el}
          </div>
        );
      })
    ) : (
      <div className={`column ${attr}`}>{children}</div>
    );
  }
}

export default Column;
