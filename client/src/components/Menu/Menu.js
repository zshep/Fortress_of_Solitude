import React from "react";

function Menu() {
  return (
    <aside className="menu pl-2  pt-4">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Customers</a>
        </li>
        <li>
          <a href='/board'>See All Jobs</a>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
