import React from "react";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={(e) => {
            return e.isActive ? "white" : "";
          }}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => {
            return e.isActive ? "white" : "";
          }}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) => {
            return e.isActive ? "white" : "";
          }}
        >
          <li>Contact</li>
        </NavLink>
        {/* <Link to="/profile">
          <li>Profile</li>
        </Link> */}
      </nav>
    </div>
  );
};
