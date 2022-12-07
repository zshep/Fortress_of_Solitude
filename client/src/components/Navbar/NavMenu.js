import React from "react";
import Auth from "../../utils/auth";
import NavItem from "./NavItem";
import { useNavContext } from "../../utils/NavContext";

function NavMenu() {
  const logoutUser = () => {
    Auth.logout();
  };
  const [navState] = useNavContext();
  return Auth.loggedIn() ? (
    <div
      id="navbarBasicExample"
      className={`navbar-menu ${navState.isActive ? "is-active" : ""}`}
    >
      <div className="navbar-end">
        <NavItem href="/profile">Home</NavItem>
        <NavItem href="/board">Board</NavItem>
        <NavItem action={logoutUser}>Logout</NavItem>
      </div>
    </div>
  ) : (
    <div
      id="navbarBasicExample"
      className={`navbar-menu ${navState.isActive ? "is-active" : ""}`}
    >
      <div className="navbar-end">
        <NavItem href="/profile">Home</NavItem>
        {/* change this back to / once we get auth runnning from back end */}
        <NavItem href="/board">Board</NavItem>
      </div>
    </div>
  );
}

export default NavMenu;
