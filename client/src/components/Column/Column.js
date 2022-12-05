import React from "react";

function Column({ attr, children }) {
  if (attr === undefined) {
    console.log("undefined YO!")
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
