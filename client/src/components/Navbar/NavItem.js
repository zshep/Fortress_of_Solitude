import React from "react";

function NavItem({ href, children, action}) {
  return (
    <a href={href} onClick={action} className="navbar-item has-text-grey-dark has-text-weight-semibold">
      {children}
    </a>
  );
}

export default NavItem;
