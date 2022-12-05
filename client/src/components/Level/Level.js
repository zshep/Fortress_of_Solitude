import React from "react";
// pass Levelitem components in as children of this component.

function Level({ children, component }) {
  return component == "nav" ? (
    <nav className="level">{children}</nav>
  ) : (
    <div className="level">{children}</div>
  );
}

export default Level;
