import React, { useState } from "react";
import { useNavContext } from "../../utils/NavContext";
import { ACTIVATE_NAV } from "../../utils/actions";

function NavBurger() {
  const [navState, dispatch] = useNavContext();
  return (
    <>
      <a
        onClick={() => {
          dispatch({
            type: ACTIVATE_NAV,
          });
        }}
        role="button"
        className={`navbar-burger burger ${navState.isActive ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </>
  );
}

export default NavBurger;
