import React from "react";

function PComponent({ value, attr, children }) {
  return typeof value == "undefined" ? (
    <p className={attr}>{children}</p>
  ) : (
    value.map((el, i) => {
      return (
        <p key={i} className={attr}>
          {el}
        </p>
      );
    })
  );
}

export default PComponent; 
