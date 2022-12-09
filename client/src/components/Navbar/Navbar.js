import React from "react";
import Logo from "../gob4.jpg";
import NavBurger from "./NavBurger";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <nav
      className="navbar is-black"
      id="PatricksFancyNav"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a onClick={() => {console.log("Goblin mode activated")}} className="navbar-item">
          <img src={Logo} alt="Logo" />
        </a>
        <NavBurger />
        <h2 className="title is-2 has-text-grey-dark"  style={{ fontFamily: 'Permanent Marker' }}>GoMode</h2>
      </div>
      <div className="navbar-end">
        <NavMenu />
      </div>
    </nav>
  );
}
