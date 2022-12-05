import React from "react";

//To be used as child of the Level component

// value can be passed in as an array and should return a level item for each index of the array passed.
// If value is omitted, it will instead return a single level item with the children as the content.
// if you want the level item is to be aligned left or right, set align to either left or right, otherwise it will merely return a level-item.
// add other alignment modifiers such as "has-text-centered" to attr.
function LevelItem({ value, children, attr, align }) {
  if (typeof value == "undefined") {
    switch (align) {
      case "left":
        return <div className={`level-left ${attr}`}>{children}</div>;
      case "right":
        return <div className={`level-right ${attr}`}>{children}</div>;
      default:
        return <div className={`level-item ${attr}`}>{children}</div>;
    }
  } else {
    value.map((el, i) => {
      switch (align) {
        case "left":
          return (
            <div key={i} className={`level-left ${attr}`}>
              {el}
            </div>
          );
        case "right":
          return (
            <div key={i} className={`level-right ${attr}`}>
              {el}
            </div>
          );
        default:
          return (
            <div key={i} className={`level-item ${attr}`}>
              {el}
            </div>
          );
      }
    });
  }
}

export default LevelItem;
